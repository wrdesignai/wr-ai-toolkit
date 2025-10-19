import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateResponse(prompt) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Você é um assistente útil e criativo." },
        { role: "user", content: prompt },
      ],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Erro na API OpenAI:", error);
    throw new Error("Falha ao gerar resposta com IA.");
  }
}
