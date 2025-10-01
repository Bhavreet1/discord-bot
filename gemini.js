import { GoogleGenAI } from "@google/genai";

import * as dotenv from "dotenv";
dotenv.config();


const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,   
});

async function genResponse(content) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
      contents: content,
      config: {
          systemInstruction: "Answer under 100 words.",
          temperature: 0.4,
      }

  });
  return response.text;
}

export { genResponse };