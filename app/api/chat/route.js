import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  const { message, mode, history } = await req.json();

  const systemPrompts = {
    chat: "You are a friendly study buddy. Explain concepts simply with examples.",
    flashcards: "Generate flashcards in this format - Q: [question] A: [answer]. Generate 5 flashcards for the given topic.",
    quiz: "You are a quiz master. Ask one question at a time. When the user answers, grade it, tell them if they were right or wrong, then ask the next question.",
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
}