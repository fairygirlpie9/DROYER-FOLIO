import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is not defined in process.env");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = () => {
  const ai = getAiClient();
  if (!ai) return;

  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are the digital assistant for Danielle Royer's portfolio website. 
      Danielle is a creative developer and designer who loves Neobrutalism, Mondrian art, and functional minimalism.
      
      Your tone should be:
      - Direct and concise (brutalist).
      - Helpful but slightly robotic or artistic.
      - Knowledgeable about design and code.
      
      Key info about Danielle:
      - Email: hello@danielleroyer.com
      - Style: Bold, high contrast, structural.
      - Skills: React, TypeScript, UI/UX, Branding.
      
      If asked about projects, mention she has worked on 'Neon Horizon' and 'Abstract Echo'.
      If asked for contact, provide the email.
      
      Keep answers short (under 50 words) unless requested otherwise.`,
    },
  });
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }
  
  if (!chatSession) {
    return "System Error: AI Identity module not found (Missing API Key).";
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "System Malfunction: Empty response.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "System Error: Connection severed.";
  }
};