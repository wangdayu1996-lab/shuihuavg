
export enum GameState {
  START = 'START',
  STORY = 'STORY',
  FREE_TALK = 'FREE_TALK',
  GALLERY = 'GALLERY',
  DIVINATION = 'DIVINATION' 
}

export interface PlayerAttributes {
  weight: number;
  intelligence: number;
  strength: number;
  spirit: number;
}

export interface DivinationBuff {
  id: string;
  name: string;
  description: string;
  effectType: 'affection' | 'speed' | 'random' | 'funny';
  icon: string;
}

export interface HeartbeatEvent {
  id: number;
  title: string;
  description: string;
  cgImage: string; 
  imagePrompt: string; 
  requiredAffection: number;
  isUnlocked: boolean;
  isFinal?: boolean; 
}

export interface Character {
  id: string;
  name: string;
  title: string;
  description: string;
  avatar: string;    // 小头像
  portrait: string;  // 名册/画廊大图 (JPG)
  sprite: string;    // 对话立绘 (PNG)
  personality: string;
  affection: number;
  interactionCount: number;
  difficulty: number; 
  archetype: string;
  heartbeatEvents: HeartbeatEvent[]; 
}

export interface StoryNode {
  id: string;
  speaker: string;
  content: string;
  background: string;
  characterId?: string;
  choices?: Choice[];
  nextId?: string;
  isNameInput?: boolean;
}

export interface Choice {
  text: string;
  nextId: string;
  affectionBonus?: {
    charId: string;
    points: number;
  };
  attributeBonus?: Partial<PlayerAttributes>;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
