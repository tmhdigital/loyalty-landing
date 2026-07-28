"use client";

import { useEffect, useRef, useState } from "react";
import { SUGGESTED_QUESTIONS } from "../data/chatbotKnowledge";

const WELCOME_MESSAGE = {
  role: "assistant",
  content: "Hi! 👋 I'm Rewaldo's assistant. How can I help you today?",
};

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
    <path
      d="M4 12c0-4.4 3.8-8 8.5-8s8.5 3.6 8.5 8-3.8 8-8.5 8c-1 0-2-.16-2.9-.46L5 21l1.3-3.8C4.9 15.9 4 14 4 12z"
      fill="white"
    />
    <circle cx="8.5" cy="12" r="1.1" fill="#3FAE6A" />
    <circle cx="12.5" cy="12" r="1.1" fill="#3FAE6A" />
    <circle cx="16.5" cy="12" r="1.1" fill="#3FAE6A" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="white" strokeWidth="2">
    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M3.4 20.6l17.6-8.6L3.4 3.4l.02 6.4L15 12l-11.58 2.2z" />
  </svg>
);

const TypingDots = () => (
  <div className="flex items-center gap-1.5 px-4 py-3">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="w-2 h-2 rounded-full bg-muted/50 animate-bounce"
        style={{ animationDelay: `${i * 0.15}s` }}
      />
    ))}
  </div>
);

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const nextMessages = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();

      if (data.ok) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: data.error || "Sorry, something went wrong. Please try again.",
          },
        ]);
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
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const showSuggestions = messages.length === 1 && !loading;

  return (
    <>
      {/* Chat panel */}
      <div
        className={`fixed z-50 bottom-24 right-5 md:bottom-28 md:right-6 w-[calc(100vw-2.5rem)] max-w-[380px] h-[70vh] max-h-[560px] bg-white rounded-3xl shadow-2xl border border-line flex flex-col overflow-hidden transition-all duration-250 origin-bottom-right ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-3 pointer-events-none"
        }`}
        role="dialog"
        aria-label="Rewaldo chat assistant"
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 bg-secondary shrink-0">
          <span className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
            <ChatIcon />
          </span>
          <div className="min-w-0">
            <p className="text-white font-semibold text-[15px] leading-tight">Rewaldo Assistant</p>
            <p className="text-white/60 text-[12px] leading-tight flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Online now
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="ml-auto shrink-0 w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#FAFBFA]">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-[14px] leading-relaxed whitespace-pre-wrap ${
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
            <div className="flex justify-start">
              <div className="bg-white border border-line rounded-2xl rounded-bl-md">
                <TypingDots />
              </div>
            </div>
          )}

          {showSuggestions && (
            <div className="pt-1 space-y-2">
              <p className="text-[11.5px] font-semibold uppercase tracking-wide text-muted px-1">
                Try asking
              </p>
              <div className="flex flex-col gap-2">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-left text-[13.5px] px-3.5 py-2.5 rounded-xl border border-line bg-white text-ink hover:border-primary hover:bg-primaryLight transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-3 border-t border-line bg-white shrink-0 flex items-center gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            disabled={loading}
            className="flex-1 min-w-0 px-4 py-2.5 rounded-pill border border-line text-[14px] text-ink placeholder:text-muted/70 focus:outline-none focus:border-primary transition-colors disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            aria-label="Send message"
            className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primaryDark transition-colors disabled:opacity-40 disabled:hover:bg-primary"
          >
            <SendIcon />
          </button>
        </form>
      </div>

      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={open}
        className="fixed bottom-[92px] right-5 md:bottom-[104px] md:right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-primary shadow-lg shadow-black/20 hover:bg-primaryDark hover:scale-105 active:scale-95 transition-all duration-200"
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </button>
    </>
  );
}
