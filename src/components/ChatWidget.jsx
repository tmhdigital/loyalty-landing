"use client";

import { useEffect, useRef, useState } from "react";
import { SUGGESTED_QUESTIONS } from "../data/chatbotKnowledge";

const WELCOME_MESSAGES = [
  { role: "assistant", content: "Hi there! 👋 I'm Rewaldo's assistant." },
  {
    role: "assistant",
    content:
      "Ask me about loyalty points, tiers, membership, or how a business can join. Choose a topic below or just type your question!",
  },
];

const CloseIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
  </svg>
);

const ChatBubbleIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M4 12c0-4.4 3.8-8 8.5-8s8.5 3.6 8.5 8-3.8 8-8.5 8c-1 0-2-.16-2.9-.46L5 21l1.3-3.8C4.9 15.9 4 14 4 12z"
      fill="currentColor"
    />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M3.4 20.6l17.6-8.6L3.4 3.4l.02 6.4L15 12l-11.58 2.2z" />
  </svg>
);

// Small decorative icon set cycled through the suggestion cards — purely
// visual variety, same set used for the starter topics and for the AI's
// dynamic follow-up suggestions.
const TOPIC_ICONS = [
  // globe / how it works
  (p) => (
    <svg viewBox="0 0 24 24" className={p.className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9S9.5 5.7 12 3z" />
    </svg>
  ),
  // magnifier / info
  (p) => (
    <svg viewBox="0 0 24 24" className={p.className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.3-4.3" strokeLinecap="round" />
    </svg>
  ),
  // tag / rewards
  (p) => (
    <svg viewBox="0 0 24 24" className={p.className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12.6 3.5l7 7a2 2 0 010 2.8l-6.3 6.3a2 2 0 01-2.8 0l-7-7V4a.5.5 0 01.5-.5h8.6z" />
      <circle cx="8.2" cy="8.2" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  ),
  // user-plus / sign up
  (p) => (
    <svg viewBox="0 0 24 24" className={p.className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20c0-3.6 2.5-6 5.5-6s5.5 2.4 5.5 6M18 8v5M15.5 10.5h5" strokeLinecap="round" />
    </svg>
  ),
  // mail / contact
  (p) => (
    <svg viewBox="0 0 24 24" className={p.className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5.5" width="18" height="13" rx="2.2" />
      <path d="M3.5 6.5L12 13l8.5-6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // calendar / dashboards
  (p) => (
    <svg viewBox="0 0 24 24" className={p.className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" strokeLinecap="round" />
    </svg>
  ),
];

const CARD_STYLES = [
  { bg: "bg-primaryLight", fg: "text-primaryDark" },
  { bg: "bg-[#EFF1FF]", fg: "text-[#5B5FEF]" },
  { bg: "bg-[#FFF3E8]", fg: "text-[#D97B29]" },
  { bg: "bg-[#FDE9F1]", fg: "text-[#C23E82]" },
  { bg: "bg-[#E9F4FF]", fg: "text-[#2B7FD9]" },
  { bg: "bg-[#F1EEFE]", fg: "text-[#7C5CE0]" },
];

const TypingDots = () => (
  <div className="flex items-center gap-1.5 px-4 py-3">
    {[0, 1, 2].map((i) => (
      <span key={i} className="typing-dot w-2 h-2 rounded-full bg-muted/50" style={{ animationDelay: `${i * 0.15}s` }} />
    ))}
  </div>
);

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(WELCOME_MESSAGES);
  const [suggestions, setSuggestions] = useState(SUGGESTED_QUESTIONS);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const userMsgRefs = useRef({});

  // Instead of always scrolling to the very bottom (which buries the
  // answer below the visible area once suggestions render), scroll so the
  // visitor's own question sits at the top of the panel — the answer that
  // follows is then immediately visible without scrolling up.
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || lastMessage.role !== "user") return;

    const el = userMsgRefs.current[messages.length - 1];
    const container = scrollRef.current;
    if (!el || !container) return;

    const elTop = el.getBoundingClientRect().top;
    const containerTop = container.getBoundingClientRect().top;
    const offset = elTop - containerTop;
    const newScrollTop = container.scrollTop + offset - 8;

    container.scrollTo({ top: newScrollTop, behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Build the flat message history sent to the API from just the real
  // conversation, skipping the two-part static welcome intro.
  const historyMessages = (all) => all.slice(WELCOME_MESSAGES.length);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const nextMessages = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setSuggestions([]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: historyMessages(nextMessages) }),
      });
      const data = await res.json();

      if (data.ok) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
        setSuggestions(
          Array.isArray(data.suggestions) && data.suggestions.length > 0
            ? data.suggestions
            : SUGGESTED_QUESTIONS,
        );
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.error || "Sorry, something went wrong. Please try again." },
        ]);
        setSuggestions(SUGGESTED_QUESTIONS);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I couldn't connect just now. Please check your connection and try again, or use the WhatsApp button to reach us directly.",
        },
      ]);
      setSuggestions(SUGGESTED_QUESTIONS);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const showSuggestions = !loading && suggestions.length > 0;

  return (
    <>
      {/* Chat panel */}
      <div
        className={`chat-panel fixed z-50 bottom-24 right-4 md:bottom-28 md:right-6 w-[calc(100vw-2rem)] max-w-[380px] h-[75dvh] max-h-[600px] bg-white rounded-3xl shadow-2xl border border-line flex flex-col overflow-hidden ${
          open ? "chat-panel-open" : "chat-panel-closed"
        }`}
        role="dialog"
        aria-label="Rewaldo chat assistant"
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-primary to-primaryDark shrink-0">
          <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0 text-white font-bold text-[15px]">
            R
          </span>
          <div className="min-w-0">
            <p className="text-white font-semibold text-[15px] leading-tight">Rewaldo Assistant</p>
            <p className="text-white/75 text-[12px] leading-tight mt-0.5">Ask me anything</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="ml-auto shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/15 active:scale-90 transition-all"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Messages + suggestions — one single scrolling area, matching the
            reference design exactly (no separate divided section). */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#FAFBFA]">
          {messages.map((m, i) => (
            <div
              key={i}
              ref={(el) => {
                if (m.role === "user") userMsgRefs.current[i] = el;
              }}
              className={`msg-in flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-[14px] leading-relaxed whitespace-pre-wrap shadow-sm ${
                  m.role === "user"
                    ? "bg-primary text-white rounded-br-md"
                    : "bg-white text-ink border border-line rounded-bl-md"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="msg-in flex justify-start">
              <div className="bg-white border border-line rounded-2xl rounded-bl-md shadow-sm">
                <TypingDots />
              </div>
            </div>
          )}

          {showSuggestions && (
            <div className="pt-1">
              <div className="grid grid-cols-2 gap-2.5">
                {suggestions.map((q, i) => {
                  const Icon = TOPIC_ICONS[i % TOPIC_ICONS.length];
                  const style = CARD_STYLES[i % CARD_STYLES.length];
                  return (
                    <button
                      key={`${q}-${i}`}
                      onClick={() => sendMessage(q)}
                      style={{ animationDelay: `${i * 70}ms` }}
                      className="chip-in text-left px-3 py-3 rounded-2xl border border-line bg-white hover:border-primary hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
                    >
                      <span
                        className={`w-8 h-8 rounded-full ${style.bg} ${style.fg} flex items-center justify-center mb-2`}
                      >
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="block text-[12.5px] leading-snug text-ink font-medium">{q}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="p-3 border-t border-line bg-white shrink-0 flex items-center gap-2"
          style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message or choose a topic..."
            disabled={loading}
            className="flex-1 min-w-0 px-4 py-2.5 rounded-pill border border-line text-[14px] text-ink placeholder:text-muted/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            aria-label="Send message"
            className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primaryDark hover:scale-105 active:scale-90 transition-all duration-150 disabled:opacity-40 disabled:hover:scale-100 disabled:hover:bg-primary"
          >
            <SendIcon />
          </button>
        </form>
      </div>

      {/* Floating toggle button — only rendered when the panel is closed, so
          it can never sit on top of the panel's own input/send button. */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open chat assistant"
          aria-expanded={false}
          className="chat-toggle fixed bottom-[92px] right-4 md:bottom-[104px] md:right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg shadow-black/20 hover:bg-primaryDark hover:scale-105 active:scale-90 transition-all duration-200"
          style={{ bottom: "calc(92px + env(safe-area-inset-bottom))" }}
        >
          <span className="toggle-ping absolute inset-0 rounded-full bg-primary" />
          <span className="relative">
            <ChatBubbleIcon />
          </span>
        </button>
      )}

      {/* Local, Tailwind-config-independent animations — these always work
          regardless of whether tailwind.config.js custom keyframes were
          picked up, since styled-jsx is compiled directly with this file. */}
      <style jsx>{`
        .chat-panel {
          transform-origin: bottom right;
          transition:
            opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .chat-panel-closed {
          opacity: 0;
          transform: scale(0.9) translateY(16px);
          pointer-events: none;
        }
        .chat-panel-open {
          opacity: 1;
          transform: scale(1) translateY(0);
          pointer-events: auto;
        }

        .msg-in {
          animation: msgIn 0.25s ease-out both;
        }
        @keyframes msgIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .chip-in {
          animation: msgIn 0.3s ease-out both;
        }

        .typing-dot {
          animation: typingBounce 1.1s ease-in-out infinite;
        }
        @keyframes typingBounce {
          0%,
          60%,
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          30% {
            transform: translateY(-4px);
            opacity: 1;
          }
        }

        .chat-toggle {
          animation: togglePop 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes togglePop {
          from {
            opacity: 0;
            transform: scale(0.7);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .toggle-ping {
          animation: togglePing 2.2s ease-out infinite;
        }
        @keyframes togglePing {
          0% {
            opacity: 0.35;
            transform: scale(1);
          }
          80%,
          100% {
            opacity: 0;
            transform: scale(1.6);
          }
        }
      `}</style>
    </>
  );
}