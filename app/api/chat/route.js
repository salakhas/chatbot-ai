import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  const { message, mode } = await req.json();

  // Give Gemini a different personality based on the mode
  const systemPrompts = {
    chat: "You are a friendly study buddy. Explain concepts simply with examples.",
    flashcards:
      "Generate flashcards in this format - Q: [question] A: [answer]. Generate 5 flashcards for the given topic.",
    quiz: "You are a quiz master. Ask one question at a time about the given subject and grade the user's answers.",
    summarize: "Summarize the given text in clear, concise bullet points.",
  };

  const prompt = `${systemPrompts[mode]}\n\nUser: ${message}`;

  const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });
  const result = await model.generateContent(prompt);
  const text = result.response.text();

  return Response.json({ message: text });
}
