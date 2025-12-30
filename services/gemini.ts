import { GoogleGenAI } from "@google/genai";

// We use the Gemini Service to power the "SalTech Assistant"
// It acts as a sales/support agent for the website.

const SYSTEM_INSTRUCTION = `
You are "Sal", the AI virtual assistant for SalTech.
SalTech is a premier technology solutions provider specializing in:
1. Custom Software Development
2. Mobile App Development (iOS & Android)
3. Cloud Infrastructure & DevOps
4. Artificial Intelligence & Machine Learning Solutions
5. Cybersecurity Audits
6. Digital Transformation Consulting

Your goal is to be helpful, professional, and concise.
Answer questions about SalTech's services.
If a user asks for pricing, say that projects are bespoke and suggest they fill out the contact form for a quote.
Maintain a futuristic, tech-savvy, yet approachable persona.
Do not make up fake employees or specific office addresses unless generic.
`;

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const sendMessageToSal = async (history: {role: 'user'|'model', text: string}[], newMessage: string): Promise<string> => {
  try {
    const ai = getAiClient();
    
    // Convert history to format if needed, but for single turn or short context we can just use chat
    // For simplicity in this demo, we'll start a new chat or keep context light
    // To keep it robust, we will pass the history properly.
    
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I'm having trouble processing that right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm currently offline due to a network issue. Please use the contact form.";
  }
};
