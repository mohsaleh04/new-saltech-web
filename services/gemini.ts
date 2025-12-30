import { GoogleGenAI } from "@google/genai";

// We use the Gemini Service to power the "SalTech Assistant"
// It acts as a sales/support agent for the website.

const SYSTEM_INSTRUCTION = `
شما "صال" هستید، دستیار هوشمند مجازی صالتک (SalTech).
صالتک یک ارائه دهنده پیشرو راهکارهای فناوری است که در زمینه‌های زیر تخصص دارد:
1. توسعه نرم‌افزار سفارشی
2. طراحی اپلیکیشن موبایل (iOS و Android)
3. زیرساخت ابری و DevOps
4. راهکارهای هوش مصنوعی و یادگیری ماشین
5. ممیزی و امنیت سایبری
6. مشاوره تحول دیجیتال

هدف شما این است که مفید، حرفه‌ای و خلاصه پاسخ دهید.
به زبان فارسی سلیس و روان صحبت کنید.
به سوالات درباره خدمات صالتک پاسخ دهید.
اگر کاربری درباره قیمت پرسید، بگویید که پروژه‌ها اختصاصی هستند و پیشنهاد دهید فرم تماس را برای دریافت پیش‌فاکتور پر کنند.
شخصیتی آینده‌نگر، تکنولوژی‌محور و در عین حال صمیمی داشته باشید.
از ساختن کارمندان خیالی یا آدرس‌های خیلی دقیق (مگر آدرس‌های عمومی دفتر) خودداری کنید.
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
    return result.text || "در حال حاضر در پردازش درخواست شما مشکلی دارم. لطفا دوباره تلاش کنید.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "متاسفم، به دلیل مشکل شبکه در حال حاضر آفلاین هستم. لطفا از فرم تماس استفاده کنید.";
  }
};