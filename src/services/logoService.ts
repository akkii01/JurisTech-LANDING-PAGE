import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function uploadLogo(base64Data: string) {
  // This is a mock function as we don't have a real backend to store files
  // In a real app, you'd upload to S3/Supabase and get a URL
  // For now, we'll just return the base64 data to use directly
  return base64Data;
}
