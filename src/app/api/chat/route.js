import { NextResponse } from "next/server";
import { REWALDO_KNOWLEDGE } from "../../../data/chatbotKnowledge";

// Uses Google's Gemini API directly via fetch (no SDK) so this runs fine on
// Cloudflare Workers / edge runtimes as well as Node. Gemini has a genuinely
// free tier (no credit card) for the Flash / Flash-Lite models — get a key
// at https://aistudio.google.com/apikey and set GEMINI_API_KEY in your
// environment. See the note at the bottom of this file for setup steps.
const GEMINI_API_BASE = "https://generativelanguage.googleapis.com/v1beta/models";

// Default model — "gemini-flash-latest" is Google's auto-updating alias
// that always points at the current recommended Flash model, so this
// keeps working even as Google retires specific dated versions (e.g.
// gemini-2.5-flash). Override via GEMINI_MODEL env var if you want to pin
// a specific version instead. Full list:
// https://ai.google.dev/gemini-api/docs/models
const DEFAULT_MODEL = "gemini-flash-latest";

const SYSTEM_PROMPT = `You are the AI assistant on the Rewaldo website (Rewaldo — Digital Loyalty Cards & Rewards). You help visitors — both potential customers and potential merchant partners — understand the product and get their questions answered.

Only use the information below to answer. If someone asks something this information doesn't cover (pricing specifics, account-specific issues, technical support, something outside Rewaldo entirely), say you're not sure and suggest they use the WhatsApp button on the site to chat with the Rewaldo team directly, or fill out the merchant inquiry form for business questions. Never invent facts, prices, or policies that aren't in the reference material.

Keep answers short and conversational — 2-4 sentences for most questions, using plain text (no markdown headers or heavy formatting). If it naturally helps, end with a brief, relevant follow-up question or suggestion of what else they might want to know. Be warm and helpful, like a knowledgeable member of the Rewaldo team, not a generic corporate bot.

--- Reference material about Rewaldo ---
${REWALDO_KNOWLEDGE}
--- End reference material ---`;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const messages = Array.isArray(body.messages) ? body.messages : [];
  const cleanMessages = messages
    .filter(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim(),
    )
    .map((m) => ({ role: m.role, content: m.content.trim() }))
    .slice(-20); // keep the payload small; last 20 turns is plenty of context

  if (cleanMessages.length === 0) {
    return NextResponse.json({ ok: false, error: "No message provided." }, { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("Missing GEMINI_API_KEY environment variable.");
    return NextResponse.json(
      {
        ok: false,
        error:
          "The chat assistant isn't configured yet. Please use the WhatsApp button to reach us directly.",
      },
      { status: 500 },
    );
  }

  // Gemini uses "model" instead of "assistant" for the AI's turns, and takes
  // the conversation as a `contents` array of { role, parts: [{ text }] }.
  const contents = cleanMessages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const model = process.env.GEMINI_MODEL || DEFAULT_MODEL;
  const url = `${GEMINI_API_BASE}/${model}:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { role: "system", parts: [{ text: SYSTEM_PROMPT }] },
        contents,
        generationConfig: { maxOutputTokens: 500, temperature: 0.6 },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API error:", response.status, errText);
      return NextResponse.json(
        { ok: false, error: "Sorry, something went wrong. Please try again in a moment." },
        { status: 502 },
      );
    }

    const data = await response.json();
    const reply = (data.candidates?.[0]?.content?.parts || [])
      .map((p) => p.text || "")
      .join("\n")
      .trim();

    if (!reply) {
      return NextResponse.json(
        { ok: false, error: "Sorry, I didn't catch that. Could you rephrase your question?" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, reply });
  } catch (err) {
    console.error("Failed to reach Gemini API:", err);
    return NextResponse.json(
      { ok: false, error: "Sorry, something went wrong. Please try again in a moment." },
      { status: 502 },
    );
  }
}

/*
FREE API SETUP — Google Gemini (no credit card required):

1. Go to https://aistudio.google.com/apikey
2. Sign in with any Google account, click "Create API key"
3. Copy the key
4. Set it as an environment variable named GEMINI_API_KEY:
   - Local dev: add GEMINI_API_KEY=your-key-here to .env.local
   - Cloudflare: run `npx wrangler secret put GEMINI_API_KEY` and paste the key
5. Free tier covers the Flash / Flash-Lite models with a daily request quota
   (no cost, no card) — plenty for a website FAQ chatbot. If you outgrow it,
   check https://ai.google.dev/gemini-api/docs/rate-limits for current limits.
*/