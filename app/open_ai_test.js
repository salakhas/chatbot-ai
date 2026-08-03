import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function main() {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); // free model

  const result = await model.generateContent("Hello!");
  console.log(result.response.text());
}
