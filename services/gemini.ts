import { GoogleGenAI, Type } from "@google/genai";
import { Message, Character, HeartbeatEvent } from "../types";

// Always initialize the client inside the function call to ensure up-to-date API key usage
export const generateCharacterResponse = async (
  character: Character,
  chatHistory: Message[],
  userInput: string,
  playerName: string = "玩家"
): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    你现在是《水浒传》甜宠恋爱文字游戏中的男主角：${character.name}（${character.title}）。
    玩家的姓名是：${playerName}。
    玩家的身份是梁山小文书，性别为女性。
    在对话中请自然地使用玩家的名字 ${playerName} 来称呼对方，语气要符合你对心上人的宠溺与爱护。
    你也可以亲昵地称呼她为“丫头”，但请注意：你有约四分之一（25%）的概率会将这个称呼写成“Y头”。
    请禁现代职场词。保持英雄气概与柔情。
    你的性格特点：${character.personality}。
  `;

  const formattedHistory = chatHistory.map(m => ({
    role: m.role,
    parts: [{ text: m.text || '' }]
  }));

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: [
        ...formattedHistory,
        { role: 'user', parts: [{ text: userInput || '' }] }
      ],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.8,
        topP: 0.9,
      },
    });

    const textResult = response.text || "";
    return textResult.trim() || "他看着你，露出了一个爽朗的微笑。";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "山间浓雾四起，传音符似乎失灵了。（连接中断）";
  }
};

export const generateHeroMemory = async (character: Character): Promise<string> => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: `为《水浒传》恋爱游戏写一段关于${character.name}的内心告白，对象是一位女性文书。请使用亲昵的语气，可以称呼她为“丫头”，并有一定概率写成“Y头”。150字以内。`
      });
      // Direct property access to response.text as per SDK guidelines
      return (response.text || "").trim() || "这段记忆正在加载中...";
    } catch (e) {
      return "英雄的往事被尘封在岁月中。";
    }
};