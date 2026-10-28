import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

function friendlyError(err) {
  const status = err?.status;
  const msg = String(err?.message || "");

  if (status === 429)
    return {
      status: 429,
      error:
        "Too many requests right now. Please wait a few seconds and try again.",
    };
  if (status === 503 || /overloaded|unavailable/i.test(msg))
    return {
      status: 503,
      error: "The AI is busy at the moment. Please try again in a bit.",
    };
  if (/API key|permission|403/i.test(msg))
    return {
      status: 500,
      error:
        "The AI service isn't set up correctly. This is a problem on our side, not yours.",
    };
  if (/SAFETY|blocked/i.test(msg))
    return {
      status: 422,
      error: "I couldn't answer that one. Try rephrasing your question.",
    };
  if (/fetch failed|ENOTFOUND|ETIMEDOUT/i.test(msg))
    return {
      status: 502,
      error:
        "Couldn't reach the AI service. Please check your connection and try again.",
    };

  return {
    status: 500,
    error: "Something went wrong on our end. Please try again.",
  };
}

export async function POST(req) {
  try {
    const { message, mode, history } = await req.json();

    const systemPrompts = {
      chat: "You are a friendly study buddy. Explain concepts simply with examples. Always put diagrams, flows, arrows chains, and ASCII art inside fenced code blocks (triple backticks) so they keep their formatting.",
      flashcards:
        "Generate flashcards in this format - Q: [question] A: [answer]. Generate 5 flashcards for the given topic. Always put diagrams, flows, arrows chains, and ASCII art inside fenced code blocks (triple backticks) so they keep their formatting.",
      quiz: "You are a quiz master. Ask one question at a time. When the user answers, grade it, tell them if they were right or wrong, then ask the next question. Always put diagrams, flows, arrows chains, and ASCII art inside fenced code blocks (triple backticks) so they keep their formatting.",
      summarize: "Summarize the given text in clear, concise bullet points.",
    };

    const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: systemPrompts[mode] }],
        },
        {
          role: "model",
          parts: [{ text: "Understood! I'm ready to help." }],
        },
        ...history.map((msg) => ({
          role: msg.role === "ai" ? "model" : "user",
          parts: [{ text: msg.text }],
        })),
      ],
    });

    const result = await chat.sendMessage(message);
    const text = result.response.text();

    return Response.json({ message: text });
  } catch {
    console.error("Gemini error:", err?.message, "| cause:", err?.cause);
    const { status, error } = friendlyError(err);
    return Response.json({ error }, { status });
  }
}
