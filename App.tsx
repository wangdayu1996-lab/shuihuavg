import React, { useState, useEffect, useRef } from 'react';
import { GameState, Character, StoryNode, Choice, Message, HeartbeatEvent, DivinationBuff, PlayerAttributes, Language } from './types';
import { CHARACTERS, STORY_DATA, DIVINATION_BUFFS, BG_BAMBOO } from './constants';
import { generateCharacterResponse } from './services/gemini';

const UI_TRANSLATIONS = {
  [Language.ZH]: {
    attributes: '文书手札',
    weight: '体重 (气血)',
    weightDesc: '象征生命活力与体力，高体重耐受力强。',
    intelligence: '智力 (思辨)',
    intelligenceDesc: '象征逻辑与策略，影响说服力与任务深度。',
    strength: '武力 (攻守)',
    strengthDesc: '象征力量与技巧，决定冲突负。',
    spirit: '灵力 (星感)',
    spiritDesc: '象征星宿感应，关联魂魄稳定。',
    divinationTitle: '公孙胜求卦',
    divinationLocked: '“与公孙先生缘分未到，想求卦的话先去拜访先生吧！”',
    divinationUsed: '“今日天机已显，不可再问。”',
    divinationDraw: '掷茭求卦',
    divinationDrawing: '掷茭求卦',
    divinationConfirm: '领命',
    galleryTitle: '梁山英雄名册',
    backToCamp: '返回山寨',
    affection: '羁绊值',
    interactionCount: '传信次数',
    chatNoMessages: '尚无书信往来，提笔寄情吧...',
    chatResponding: '正在斟酌笔墨...',
    chatSend: '寄出',
    chatPlaceholder: '寄给{name}的话...',
    chatWait: '等待回复中...',
    chatRead: '对方已读',
    styleGentle: '温婉',
    styleFunny: '风趣',
    styleDirect: '直率',
    currentAffection: '当前羁绊',
  },
  [Language.EN]: {
    attributes: 'Scribe\'s Notes',
    weight: 'Weight (Vitality)',
    weightDesc: 'Symbolizes life vitality and physical strength.',
    intelligence: 'Intelligence (Logic)',
    intelligenceDesc: 'Symbolizes logic and strategy, affects persuasion.',
    strength: 'Strength (Combat)',
    strengthDesc: 'Symbolizes power and skill, decides conflict outcomes.',
    spirit: 'Spirit (Astral)',
    spiritDesc: 'Symbolizes astral resonance, linked to soul stability.',
    divinationTitle: 'Gongsun Sheng\'s Divination',
    divinationLocked: '"The fate with Master Gongsun has not yet arrived. Visit him first!"',
    divinationUsed: '"The heavenly secret has been revealed today, ask no more."',
    divinationDraw: 'Draw a Lot',
    divinationDrawing: 'Drawing...',
    divinationConfirm: 'Accept',
    galleryTitle: 'Liangshan Hero Registry',
    backToCamp: 'Back to Camp',
    affection: 'Affection',
    interactionCount: 'Messages',
    chatNoMessages: 'No letters yet, write your heart out...',
    chatResponding: 'is considering the ink...',
    chatSend: 'Send',
    chatPlaceholder: 'Words for {name}...',
    chatWait: 'Waiting for reply...',
    chatRead: 'Read',
    styleGentle: 'Gentle',
    styleFunny: 'Witty',
    styleDirect: 'Direct',
    currentAffection: 'Current Affection',
  },
  [Language.JA]: {
    attributes: '文書手帖',
    weight: '体重 (気血)',
    weightDesc: '生命力と体力を象徴し、高いと耐久力が増します。',
    intelligence: '知力 (思辨)',
    intelligenceDesc: '論理と戦略を象徴し、説得力に影響します。',
    strength: '武力 (攻守)',
    strengthDesc: '力と技を象徴し、衝突の勝敗を決定します。',
    spirit: '霊力 (星感)',
    spiritDesc: '星宿の感応を象徴し、魂の安定に関連します。',
    divinationTitle: '公孫勝の占い',
    divinationLocked: '「公孫先生との縁はまだのようだ。まずは先生を訪ねなさい！」',
    divinationUsed: '「今日の天機は既に示された。これ以上問うてはならぬ。」',
    divinationDraw: 'おみくじを引く',
    divinationDrawing: '占い中...',
    divinationConfirm: '承知',
    galleryTitle: '梁山英雄名簿',
    backToCamp: '山寨に戻る',
    affection: '絆',
    interactionCount: '文通回数',
    chatNoMessages: 'まだ手紙のやり取りはありません。筆を執りましょう...',
    chatResponding: '筆を走らせています...',
    chatSend: '送る',
    chatPlaceholder: '{name}への言葉...',
    chatWait: '返信待ち...',
    chatRead: '既読',
    styleGentle: '穏やか',
    styleFunny: '風趣',
    styleDirect: '直球',
    currentAffection: '現在の絆',
  }
};

// --- 子组件：属性面板 ---
const AttributesModal: React.FC<{
  attrs: PlayerAttributes,
  onClose: () => void,
  language: Language
}> = ({ attrs, onClose, language }) => {
  const t = UI_TRANSLATIONS[language];
  return (
    <div className="fixed inset-0 z-[400] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6" onClick={onClose}>
      <div className="bg-[#1a110a] border-2 border-yellow-700/50 w-full max-md rounded-2xl p-8 shadow-2xl animate-fade-up" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-8 border-b border-yellow-900/30 pb-4">
          <h2 className="text-3xl font-calligraphy text-yellow-500">{t.attributes}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-white">✕</button>
        </div>
        
        <div className="space-y-8">
          {[
            { label: t.weight, value: attrs.weight, icon: '🩸', desc: t.weightDesc },
            { label: t.intelligence, value: attrs.intelligence, icon: '📜', desc: t.intelligenceDesc },
            { label: t.strength, value: attrs.strength, icon: '⚔️', desc: t.strengthDesc },
            { label: t.spirit, value: attrs.spirit, icon: '✨', desc: t.spiritDesc }
          ].map(item => (
            <div key={item.label}>
              <div className="flex justify-between items-end mb-2">
                <span className="text-gray-400 font-serif flex items-center gap-2 text-sm">
                  {item.icon} {item.label}
                </span>
                <span className="text-2xl font-bold text-yellow-600 font-serif">{item.value}</span>
              </div>
              <div className="h-2 bg-yellow-900/20 rounded-full overflow-hidden border border-yellow-900/40">
                <div className="h-full bg-gradient-to-r from-yellow-800 to-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.3)] transition-all duration-1000" style={{ width: `${Math.min(100, item.value)}%` }} />
              </div>
              <p className="text-[10px] text-gray-500 mt-2 font-serif italic">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 子组件：卜卦 ---
const DivinationModal: React.FC<{ 
  onClose: () => void, 
  onDraw: (buff: DivinationBuff) => void,
  used: boolean,
  isLocked?: boolean,
  language: Language
}> = ({ onClose, onDraw, used, isLocked, language }) => {
  const t = UI_TRANSLATIONS[language];
  const [isDrawing, setIsDrawing] = useState(false);
  const [result, setResult] = useState<DivinationBuff | null>(null);

  const handleDraw = () => {
    setIsDrawing(true);
    setTimeout(() => {
      const buff = DIVINATION_BUFFS[Math.floor(Math.random() * DIVINATION_BUFFS.length)];
      setResult(buff);
      setIsDrawing(false);
      onDraw(buff);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[300] bg-black/80 backdrop-blur-md flex items-center justify-center p-6">
      <div className="bg-[#1a110a] border-2 border-yellow-700/50 w-full max-w-lg rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-white" onClick={onClose}>✕</div>
        <h2 className="text-5xl font-calligraphy text-yellow-500 mb-6">{t.divinationTitle}</h2>
        
        {isLocked ? (
          <div className="py-10 animate-fade-up">
            <div className="text-8xl mb-6">📜</div>
            <p className="text-yellow-600 text-xl font-serif leading-relaxed mb-8">{t.divinationLocked}</p>
            <button onClick={onClose} className="px-10 py-3 bg-yellow-800 text-white rounded-full font-bold">{t.divinationConfirm}</button>
          </div>
        ) : used && !result ? (
          <div className="py-10 text-yellow-800 italic font-serif">{t.divinationUsed}</div>
        ) : result ? (
          <div className="animate-fade-up">
            <div className="text-8xl mb-6">{result.icon}</div>
            <h3 className="text-3xl font-bold text-yellow-500 mb-4">{result.name}</h3>
            <p className="text-gray-300 font-serif leading-relaxed mb-8">{result.description}</p>
            <button onClick={onClose} className="px-10 py-3 bg-yellow-800 text-white rounded-full font-bold">{t.divinationConfirm}</button>
          </div>
        ) : (
          <div className="py-10">
            <div className={`text-9xl mb-10 transition-transform duration-1000 ${isDrawing ? 'animate-spin' : ''}`}>☯️</div>
            <button onClick={handleDraw} disabled={isDrawing} className={`px-12 py-4 rounded-full font-bold text-xl transition-all ${isDrawing ? 'bg-gray-800' : 'bg-yellow-600 hover:bg-yellow-500 text-white'}`}>
              {isDrawing ? t.divinationDrawing : t.divinationDraw}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// --- 子组件：英雄名册 ---
const GalleryPage: React.FC<{ 
  characters: Character[], 
  onBack: () => void, 
  onSelect: (char: Character) => void,
  language: Language
}> = ({ characters, onBack, onSelect, language }) => {
  const t = UI_TRANSLATIONS[language];
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  return (
    <div className="fixed inset-0 z-[200] bg-[#0a0a0a] overflow-y-auto pb-20">
      <div className="sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md p-6 flex items-center justify-between border-b border-yellow-900/30">
        <button onClick={onBack} className="text-yellow-600 flex items-center gap-2 hover:text-yellow-400">
          <span className="text-2xl">←</span> <span className="font-calligraphy text-xl">{t.backToCamp}</span>
        </button>
        <h2 className="text-4xl font-calligraphy text-yellow-500">{t.galleryTitle}</h2>
        <div className="w-20" />
      </div>
      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {characters.map(char => (
          <div key={char.id} onClick={() => onSelect(char)} className="group relative bg-[#1a110a] border border-yellow-900/40 rounded-2xl overflow-hidden cursor-pointer hover:border-yellow-500 transition-all shadow-xl">
            <div className="aspect-[3/4] overflow-hidden bg-black/20">
              <img 
                src={char.portrait} 
                onLoad={() => setLoadedImages(prev => ({ ...prev, [char.id]: true }))}
                className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${loadedImages[char.id] ? 'opacity-100' : 'opacity-0'}`} 
                alt={char.name} 
              />
            </div>
            <div className="p-6 bg-gradient-to-t from-black to-transparent">
              <div className="text-xs text-yellow-700 mb-1 tracking-widest">{char.title}</div>
              <h3 className="text-2xl font-calligraphy text-yellow-500 mb-2">{char.name}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-400 font-serif">
                <span>{t.affection}: <span className="text-yellow-600">{char.affection}</span></span>
                <span>{t.interactionCount}: {char.interactionCount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 子组件：传信对话 ---
const ChatWindow: React.FC<{
  characters: Character[],
  activeChar: Character,
  onSelectChar: (char: Character) => void,
  playerName: string,
  messages: Message[],
  onSend: (text: string, style: string) => void,
  onClose: () => void,
  isResponding: boolean,
  language: Language
}> = ({ characters, activeChar, onSelectChar, playerName, messages, onSend, onClose, isResponding, language }) => {
  const t = UI_TRANSLATIONS[language];
  const [input, setInput] = useState('');
  const [style, setStyle] = useState('gentle');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isResponding]);

  return (
    <div className="fixed inset-0 z-[250] bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 md:p-10">
      <div className="w-full max-w-6xl h-[85vh] bg-[#fdfaf2] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_80px_rgba(0,0,0,0.5)] border-4 border-[#2a1a10]">
        
        {/* 左侧：人物列表 */}
        <div className="w-full md:w-32 bg-[#2a1a10] flex md:flex-col overflow-x-auto md:overflow-y-auto border-r border-yellow-900/30 p-4 gap-4 scrollbar-hide shrink-0">
          {characters.map(char => (
            <button 
              key={char.id} 
              onClick={() => onSelectChar(char)}
              className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 transition-all ${
                activeChar.id === char.id ? 'border-yellow-500 scale-110 shadow-[0_0_15px_rgba(234,179,8,0.5)]' : 'border-transparent opacity-60 grayscale'
              }`}
            >
              <img src={char.avatar} className="w-full h-full object-cover" alt={char.name} />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-[10px] text-white text-center py-0.5 font-calligraphy">
                {char.name}
              </div>
            </button>
          ))}
        </div>

        {/* 右侧：传信内容区 */}
        <div className="flex-1 flex flex-col relative bg-[url('https://www.transparenttextures.com/patterns/paper.png')] overflow-hidden">
          <div className="p-6 border-b border-gray-300 flex items-center justify-between bg-white/50">
            <div className="flex flex-col">
              <span className="font-calligraphy text-2xl text-gray-800">{activeChar.name} · {activeChar.title}</span>
              <span className="text-[10px] text-yellow-800/60 font-serif">{t.currentAffection}：{activeChar.affection}</span>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-red-800 text-2xl transition-colors">✕</button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
            {messages.length === 0 ? (
              <div className="h-full flex items-center justify-center text-gray-300 font-serif italic text-lg">
                {t.chatNoMessages}
              </div>
            ) : messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                <div className={`relative max-w-[85%] p-6 rounded-2xl shadow-sm font-serif text-lg leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-[#e0d6c3] text-gray-800 border-l-4 border-yellow-800' 
                    : 'bg-white text-gray-800 border-r-4 border-yellow-900/30'
                }`}>
                  {m.text.startsWith('[以') ? m.text.split('] ')[1] : m.text}
                  {m.role === 'user' && (
                    <div className="absolute -bottom-5 right-2 text-[10px] text-yellow-900/40 font-bold italic animate-pulse">
                      {t.chatRead}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isResponding && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-white/50 p-4 rounded-xl text-gray-400 font-serif italic">
                  {activeChar.name}{t.chatResponding}
                </div>
              </div>
            )}
          </div>

          <div className="p-8 bg-gray-100/50 border-t border-gray-300">
            <div className="flex gap-4 mb-4">
              {[
                {id: 'gentle', label: t.styleGentle},
                {id: 'funny', label: t.styleFunny},
                {id: 'direct', label: t.styleDirect}
              ].map(s => (
                <button 
                  key={s.id} 
                  onClick={() => setStyle(s.id)} 
                  className={`px-4 py-1 rounded-full text-xs transition-all ${style === s.id ? 'bg-yellow-800 text-white shadow-md' : 'bg-gray-300 text-gray-600 hover:bg-gray-400'}`}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              <input 
                value={input} 
                onChange={e => setInput(e.target.value)} 
                onKeyDown={e => e.key === 'Enter' && !isResponding && (onSend(input, style), setInput(''))} 
                placeholder={isResponding ? t.chatWait : t.chatPlaceholder.replace('{name}', activeChar.name)}
                disabled={isResponding}
                className="flex-1 bg-transparent border-b-2 border-gray-400 p-3 focus:border-yellow-800 outline-none font-serif text-xl transition-colors disabled:opacity-50" 
              />
              <button 
                onClick={() => { if(input.trim()) { onSend(input, style); setInput(''); } }} 
                disabled={isResponding || !input.trim()}
                className="px-8 py-3 bg-[#2a1a10] text-yellow-500 rounded-xl font-calligraphy text-xl hover:bg-black transition-all shadow-md disabled:bg-gray-400 disabled:text-gray-200"
              >
                {t.chatSend}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 子组件：射箭小游戏 ---
const ArcheryMinigame: React.FC<{
  level: number,
  onSuccess: (attempts: number) => void,
  onCancel: () => void
}> = ({ level, onSuccess, onCancel }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [targets, setTargets] = useState<{ id: number; x: number; y: number; hit: boolean; speed: number; dir: number }[]>([]);
  const [crosshairPos, setCrosshairPos] = useState({ x: 50, y: 50 });
  const [rawMousePos, setRawMousePos] = useState({ x: 50, y: 50 });
  const [isFiring, setIsFiring] = useState(false);
  const [result, setResult] = useState<'hit' | 'miss' | null>(null);
  const [failCount, setFailCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isFocusing, setIsFocusing] = useState(false);
  const [focusTime, setFocusTime] = useState(0);

  const baseSize = 13;
  const targetSizeRem = level === 1 ? baseSize * 2.2 : level === 2 ? baseSize * 1.8 : baseSize * 2.2;
  const jitterMagnitude = level === 1 ? 39 : 15;

  useEffect(() => {
    if (level === 3) {
      setTargets([
        { id: 1, x: 20, y: 40, hit: false, speed: 0.25, dir: 1 },
        { id: 2, x: 50, y: 50, hit: false, speed: 0.4, dir: -1 },
        { id: 3, x: 80, y: 60, hit: false, speed: 0.3, dir: 1 }
      ]);
      setTimeLeft(10);
    } else {
      setTargets([{ id: 0, x: 50, y: 50, hit: false, speed: 0, dir: 0 }]);
    }
  }, [level]);

  useEffect(() => {
    if (level !== 3) return;
    
    const moveInterval = setInterval(() => {
      setTargets(prev => prev.map(t => {
        if (t.hit) return t;
        let nextX = t.x + t.speed * t.dir;
        let nextDir = t.dir;
        if (nextX > 90) { nextX = 90; nextDir = -1; }
        if (nextX < 10) { nextX = 10; nextDir = 1; }
        return { ...t, x: nextX, dir: nextDir };
      }));
    }, 20);

    const timerInterval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timerInterval);
          clearInterval(moveInterval);
          onCancel();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(moveInterval);
      clearInterval(timerInterval);
    };
  }, [level, onCancel]);

  useEffect(() => {
    if (level === 3) {
      const syncInterval = setInterval(() => {
        setCrosshairPos(rawMousePos);
      }, 16);
      return () => clearInterval(syncInterval);
    }

    const intervalTime = (level < 3 && isFocusing) ? 200 : 100;
    const interval = setInterval(() => {
      if (isFiring) return;

      let magnitude = jitterMagnitude;
      if (level < 3 && isFocusing) {
        if (focusTime < 2500) {
          magnitude = jitterMagnitude * 0.2;
          setFocusTime(prev => prev + intervalTime);
        } else {
          magnitude = jitterMagnitude;
        }
      }

      const t = Date.now() / (isFocusing ? 1200 : 600);
      const offsetX = (Math.sin(t * 1.5) * 0.6 + Math.sin(t * 3.7) * 0.4) * (magnitude / 2);
      const offsetY = (Math.cos(t * 1.2) * 0.6 + Math.cos(t * 2.9) * 0.4) * (magnitude / 2);

      setCrosshairPos({
        x: 50 + offsetX,
        y: 50 + offsetY
      });
    }, intervalTime);
    return () => clearInterval(interval);
  }, [isFiring, isFocusing, focusTime, jitterMagnitude, level, rawMousePos]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (level !== 3 || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setRawMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  const handleShoot = () => {
    if (isFiring) return;
    setIsFiring(true);

    if (level === 3) {
      let hitAny = false;
      const newTargets = targets.map(t => {
        if (t.hit) return t;
        const dx = Math.abs(crosshairPos.x - t.x);
        const dy = Math.abs(crosshairPos.y - t.y);
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 2.5) { 
          hitAny = true;
          return { ...t, hit: true };
        }
        return t;
      });

      if (hitAny) {
        setResult('hit');
        setTargets(newTargets);
        if (newTargets.every(t => t.hit)) {
          setTimeout(() => onSuccess(1), 1500);
        } else {
          setTimeout(() => { setIsFiring(false); setResult(null); }, 800);
        }
      } else {
        setResult('miss');
        setTimeout(() => { setIsFiring(false); setResult(null); }, 800);
      }
    } else {
      const t = targets[0];
      const dx = Math.abs(crosshairPos.x - t.x);
      const dy = Math.abs(crosshairPos.y - t.y);
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 1.5) {
        setResult('hit');
        setTimeout(() => onSuccess(failCount + 1), 1500);
      } else {
        setResult('miss');
        setFailCount(prev => prev + 1);
        setTimeout(() => {
          setIsFiring(false);
          setResult(null);
          setFocusTime(0);
        }, 1500);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[500] bg-black/90 flex flex-col items-center justify-center overflow-hidden select-none" onMouseMove={handleMouseMove}>
      <div className="absolute top-10 text-center space-y-2">
        <h2 className="text-4xl font-calligraphy text-yellow-500">校场挽弓：第 {level} 关</h2>
        {level === 3 && <div className="text-6xl font-bold text-red-500 animate-pulse">余时：{timeLeft}s</div>}
      </div>

      <div 
        ref={containerRef}
        className="relative w-[80vw] h-[60vh] bg-[#2a1a10]/50 border-4 border-yellow-900 rounded-3xl overflow-hidden cursor-crosshair"
        onMouseDown={() => {
          if (level < 3) setIsFocusing(true);
          else handleShoot();
        }}
        onMouseUp={() => {
          if (level < 3 && isFocusing) {
            handleShoot();
            setIsFocusing(false);
            setFocusTime(0);
          }
        }}
      >
        <div className="absolute inset-0 opacity-20 bg-[url('https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%A2%81%E5%B1%B1%E6%A0%A1%E5%9C%BA.png?raw=true')] bg-cover bg-center" />

        {targets.map(t => (
          <div 
            key={t.id}
            className={`absolute -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${t.hit ? 'opacity-0 scale-50' : 'opacity-100'}`}
            style={{ 
              left: `${t.x}%`, 
              top: `${t.y}%`,
              width: `${targetSizeRem}rem`,
              height: `${targetSizeRem}rem`
            }}
          >
            <img 
              src="https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E9%9D%B6%E5%AD%90.png?raw=true" 
              className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(153,27,27,0.4)]" 
              alt="target" 
            />
          </div>
        ))}

        <div 
          className={`absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all ${isFiring ? 'scale-75 opacity-50' : 'scale-100 opacity-100'}`}
          style={{ 
            left: `${crosshairPos.x}%`, 
            top: `${crosshairPos.y}%`,
            transition: isFiring ? 'none' : (level === 3 ? 'none' : 'all 0.1s linear')
          }}
        >
          <div className={`absolute inset-0 border-2 rounded-full transition-colors ${isFocusing && focusTime < 2500 ? 'border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'border-yellow-500'}`} />
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-yellow-500/50" />
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-yellow-500/50" />
        </div>

        {result === 'hit' && level !== 3 && (
          <div className="absolute inset-0 flex items-center justify-center bg-green-500/20 animate-fade-in">
            <div className="text-8xl font-calligraphy text-green-400 vn-text-shadow">正中靶心！</div>
          </div>
        )}
        {result === 'miss' && (
          <div className="absolute inset-0 flex items-center justify-center bg-red-500/20 animate-fade-in">
            <div className="text-8xl font-calligraphy text-red-400 vn-text-shadow">脱靶了！</div>
          </div>
        )}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 text-center px-4">
        <p className="text-gray-400 font-serif text-3xl leading-relaxed">
          {level === 3 ? "移动鼠标进行瞄准，点击左键射击！全灭目标即可过关！" : "长按鼠标可以“凝神”来抑制颤抖，“凝神”时长有限，请在失效前松开鼠标进行射击"}
        </p>
        <div className="flex items-center gap-6">
          <button 
            onClick={() => onSuccess(1)} 
            className="px-6 py-2 bg-yellow-900/30 hover:bg-yellow-900/50 text-yellow-500 font-calligraphy text-xl rounded-lg border border-yellow-700/50 transition-all hover:scale-105"
          >
            跳过此关
          </button>
          {(failCount >= 10 || (level === 3 && timeLeft <= 0)) && (
            <button onClick={onCancel} className="text-yellow-900/50 hover:text-yellow-600 underline text-sm transition-colors">暂且退回</button>
          )}
        </div>
      </div>
    </div>
  );
};

// --- 子组件：开场页面 ---
const LandingPage: React.FC<{
  onStart: () => void,
  onLoad: () => void,
  hasSave: boolean,
  onGallery: () => void,
  onLinChongDemo: () => void,
  language: Language,
  onLanguageChange: (lang: Language) => void
}> = ({ onStart, onLoad, hasSave, onGallery, onLinChongDemo, language, onLanguageChange }) => {
  const t = {
    [Language.ZH]: {
      title: '水浒·星宿劫',
      subtitle: '梁山英雄梦 · 浮生百日情',
      newGame: '开启新章',
      demo: '林冲部分Demo',
      continue: '再续前缘',
      gallery: '英雄名册',
      copyright: '© 1123 梁山泊文化发展有限公司'
    },
    [Language.EN]: {
      title: 'Water Margin: Star Soul',
      subtitle: 'Hero\'s Dream · Hundred Days of Life',
      newGame: 'New Chapter',
      demo: 'Lin Chong Demo',
      continue: 'Continue',
      gallery: 'Gallery',
      copyright: '© 1123 Liangshan Cultural Development Co., Ltd.'
    },
    [Language.JA]: {
      title: '水滸伝・星宿劫',
      subtitle: '梁山英雄の夢・浮生百日の情',
      newGame: '新章開始',
      demo: '林冲デモ',
      continue: '続きから',
      gallery: '英雄名簿',
      copyright: '© 1123 梁山泊文化発展有限会社'
    }
  }[language];

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1505506005708-3058a94639e7?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-60 brightness-[0.3]" 
          alt="bg" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
      </div>
      
      {/* 语言选择 */}
      <div className="absolute top-10 right-10 z-20 flex gap-4">
        {[
          { id: Language.ZH, label: '中文' },
          { id: Language.EN, label: 'English' },
          { id: Language.JA, label: '日本語' }
        ].map(lang => (
          <button 
            key={lang.id} 
            onClick={() => onLanguageChange(lang.id)}
            className={`px-4 py-2 rounded-full font-serif text-sm transition-all border ${
              language === lang.id ? 'bg-yellow-600 text-white border-yellow-500 shadow-lg' : 'bg-black/40 text-gray-400 border-gray-800 hover:text-yellow-600'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>

      <div className="relative z-10 text-center space-y-12 animate-fade-up">
        <div className="space-y-4">
          <h1 className="text-8xl md:text-9xl font-calligraphy text-yellow-600 drop-shadow-[0_0_20px_rgba(133,77,14,0.5)]">{t.title}</h1>
          <p className="text-xl md:text-2xl text-yellow-900/80 font-serif tracking-[0.5em] font-bold">{t.subtitle}</p>
        </div>

        <div className="flex flex-col gap-6 w-64 mx-auto">
          <button 
            onClick={onStart} 
            className="w-full py-4 bg-yellow-800/80 text-white font-calligraphy text-2xl rounded-lg border-2 border-yellow-600/50 hover:bg-yellow-700 hover:scale-105 transition-all shadow-xl"
          >
            {t.newGame}
          </button>
          <button 
            onClick={onLinChongDemo} 
            className="w-full py-4 bg-red-900/80 text-white font-calligraphy text-2xl rounded-lg border-2 border-red-600/50 hover:bg-red-800 hover:scale-105 transition-all shadow-xl"
          >
            {t.demo}
          </button>
          {hasSave && (
            <button 
              onClick={onLoad} 
              className="w-full py-4 bg-black/60 text-yellow-500 font-calligraphy text-2xl rounded-lg border-2 border-yellow-900/50 hover:border-yellow-600 transition-all shadow-xl"
            >
              {t.continue}
            </button>
          )}
          <button 
            onClick={onGallery} 
            className="w-full py-4 bg-black/40 text-gray-400 font-calligraphy text-2xl rounded-lg border-2 border-gray-800 hover:text-yellow-700 hover:border-yellow-900 transition-all"
          >
            {t.gallery}
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 text-gray-600 font-serif text-sm tracking-widest opacity-40">
        {t.copyright}
      </div>
    </div>
  );
};

// --- 主应用 ---
const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [language, setLanguage] = useState<Language>(Language.ZH);
  const [currentNodeId, setCurrentNodeId] = useState<string>('start');
  const [typedContent, setTypedContent] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [showChoices, setShowChoices] = useState<boolean>(false);
  const [playerName, setPlayerName] = useState('你');
  const [tempName, setPlayerNameTemp] = useState('');
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [saveTooltip, setSaveTooltip] = useState<boolean>(false);
  
  const [characters, setCharacters] = useState<Character[]>(CHARACTERS);
  const [playerAttributes, setPlayerAttributes] = useState<PlayerAttributes>({ weight: 5, intelligence: 6, strength: 2, spirit: 4 });
  const [showAttrs, setShowAttrs] = useState(false);
  const [currentDay, setCurrentDay] = useState(1);
  const [actionPoints, setActionPoints] = useState(3);
  const [divinationUsedToday, setDivinationUsedToday] = useState(false);
  const [lastCharacterId, setLastCharacterId] = useState<string | undefined>();
  const [archeryLevel, setArcheryLevel] = useState(1);

  const [isChatWindowOpen, setIsChatWindowOpen] = useState<boolean>(false);
  const [selectedCharForChat, setSelectedCharForChat] = useState<Character | null>(null);
  const [chatHistory, setChatHistory] = useState<Record<string, Message[]>>({});
  const [isAiResponding, setIsAiResponding] = useState<boolean>(false);

  const [showDivination, setShowDivination] = useState(false);
  const [isDivinationUnlocked, setIsDivinationUnlocked] = useState(false);
  const [isStrollUnlocked, setIsStrollUnlocked] = useState(false);

  // 音频控制
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentNode = STORY_DATA[currentNodeId] || STORY_DATA['start'];
  const [displayBackground, setDisplayBackground] = useState(currentNode.background);
  const [isBlackout, setIsBlackout] = useState(false);

  const [bgLoaded, setBgLoaded] = useState(false);
  const [spriteLoaded, setSpriteLoaded] = useState(false);

  const [hasSave, setHasSave] = useState<boolean>(false);
  const [isWaitFinished, setIsWaitFinished] = useState(true);
  const [faintPhase, setFaintPhase] = useState<'none' | 'stay' | 'anim'>('none');

  const prevSpriteRef = useRef<string | undefined>(undefined);

  // --- 资源预加载 ---
  useEffect(() => {
    const imagesToPreload = new Set<string>();
    CHARACTERS.forEach(c => {
      if (c.sprite) imagesToPreload.add(c.sprite);
      if (c.portrait) imagesToPreload.add(c.portrait);
      if (c.avatar) imagesToPreload.add(c.avatar);
    });
    Object.values(STORY_DATA).forEach(node => {
      if (node.background) imagesToPreload.add(node.background);
      if (node.sprite) imagesToPreload.add(node.sprite);
    });
    imagesToPreload.forEach(src => {
      if (src && src.startsWith('http')) {
        const img = new Image();
        img.src = src;
      }
    });
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (gameState !== GameState.START && !isMuted) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [gameState, isMuted]);

  const toggleMute = () => {
    setIsMuted(prev => !prev);
    if (audioRef.current) {
      if (!isMuted) audioRef.current.pause();
      else audioRef.current.play();
    }
  };

  useEffect(() => {
    const savedNode = localStorage.getItem('shuihu_node');
    if (savedNode && savedNode !== 'start') {
      setHasSave(true);
    }
  }, []);

  const handleSaveGame = () => {
    localStorage.setItem('shuihu_chars', JSON.stringify(characters));
    localStorage.setItem('shuihu_day', currentDay.toString());
    localStorage.setItem('shuihu_node', currentNodeId);
    localStorage.setItem('shuihu_chat', JSON.stringify(chatHistory));
    localStorage.setItem('shuihu_player_name', playerName);
    localStorage.setItem('shuihu_attrs', JSON.stringify(playerAttributes));
    localStorage.setItem('shuihu_divination_unlocked', isDivinationUnlocked.toString());
    localStorage.setItem('shuihu_stroll_unlocked', isStrollUnlocked.toString());
    setSaveTooltip(true);
    setHasSave(true);
    setTimeout(() => setSaveTooltip(false), 2000);
  };

  const handleLoadGame = () => {
    const savedChars = localStorage.getItem('shuihu_chars');
    const savedDay = localStorage.getItem('shuihu_day');
    const savedNode = localStorage.getItem('shuihu_node');
    const savedChat = localStorage.getItem('shuihu_chat');
    const savedName = localStorage.getItem('shuihu_player_name');
    const savedAttrs = localStorage.getItem('shuihu_attrs');
    const savedDivinationUnlocked = localStorage.getItem('shuihu_divination_unlocked');
    const savedStrollUnlocked = localStorage.getItem('shuihu_stroll_unlocked');

    if (savedChars) setCharacters(JSON.parse(savedChars));
    if (savedDay) setCurrentDay(Number(savedDay));
    if (savedNode) setCurrentNodeId(savedNode);
    if (savedChat) setChatHistory(JSON.parse(savedChat));
    if (savedName) setPlayerName(savedName);
    if (savedAttrs) setPlayerAttributes(JSON.parse(savedAttrs));
    if (savedDivinationUnlocked) setIsDivinationUnlocked(savedDivinationUnlocked === 'true');
    if (savedStrollUnlocked) setIsStrollUnlocked(savedStrollUnlocked === 'true');
    
    setGameState(GameState.STORY);
  };

  const handleStartLinChongDemo = () => {
    setCurrentNodeId('day6_start');
    setCurrentDay(6);
    setPlayerAttributes({ weight: 5, intelligence: 6, strength: 2, spirit: 4 });
    setChatHistory({});
    setGameState(GameState.STORY);
    setActionPoints(3);
    setDivinationUsedToday(false);
    setHistory([]);
    setPlayerName('你');
    setIsAutoPlay(false);
    setLastCharacterId(undefined);
    setArcheryLevel(1);
  };

  const handleStartNew = () => {
    setCurrentNodeId('start');
    setIsDivinationUnlocked(false);
    setIsStrollUnlocked(false);
    setCharacters(CHARACTERS.map(c => ({ ...c, affection: 0, interactionCount: 0 })));
    setCurrentDay(1);
    setPlayerAttributes({ weight: 5, intelligence: 6, strength: 2, spirit: 4 });
    setChatHistory({});
    setGameState(GameState.STORY);
    setActionPoints(3);
    setDivinationUsedToday(false);
    setHistory([]);
    setPlayerName('你');
    setIsAutoPlay(false);
    setLastCharacterId(undefined);
    setArcheryLevel(1);
  };

  useEffect(() => {
    if (currentNode.background !== displayBackground) {
      setIsBlackout(true);
      setBgLoaded(false); 
      setTimeout(() => {
        setDisplayBackground(currentNode.background);
        setIsBlackout(false);
      }, 800);
    }
  }, [currentNode.background]);

  const spriteToDisplay = (currentNodeId === 'day4_kui_drill_pan_start') 
    ? undefined 
    : (currentNode.characterId !== undefined ? currentNode.characterId : (currentNode.speaker === '{playerName}' ? lastCharacterId : undefined));

  useEffect(() => {
    const currentSprite = currentNode.sprite || characters.find(c => c.id === spriteToDisplay)?.sprite;
    if (currentSprite !== prevSpriteRef.current) {
      setSpriteLoaded(false);
      prevSpriteRef.current = currentSprite;
    }

    if (currentNode.characterId && currentNode.speaker !== '系统') {
      setLastCharacterId(currentNode.characterId);
    } else if (currentNode.speaker === '系统' || (currentNode.speaker !== '{playerName}' && !currentNode.characterId) || currentNodeId === 'day4_kui_drill_pan_start') {
      setLastCharacterId(undefined);
    }
  }, [currentNodeId, currentNode.characterId, currentNode.speaker, currentNode.sprite]);

  useEffect(() => {
    setTypedContent('');
    setIsTyping(true);
    setShowChoices(false);
    
    const rawContent = (language === Language.EN && currentNode.contentEn) 
      ? currentNode.contentEn 
      : (language === Language.JA && currentNode.contentJa) 
        ? currentNode.contentJa 
        : currentNode.content;
    const processedContent = (rawContent || "").replace(/{playerName}/g, playerName);
    
    let charIndex = 0;
    const interval = setInterval(() => {
      charIndex++;
      setTypedContent(processedContent.slice(0, charIndex));
      if (charIndex >= processedContent.length) { 
        clearInterval(interval); 
        setIsTyping(false); 
      }
    }, 25); 
    return () => clearInterval(interval);
  }, [currentNodeId, playerName, currentNode.content, currentNode.contentEn, currentNode.contentJa, language]);

  useEffect(() => {
    if (currentNodeId === 'day4_kui_drill_pan_start') {
      setIsWaitFinished(false);
      if (bgLoaded) {
        const timer = setTimeout(() => {
          setIsWaitFinished(true);
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else if (currentNodeId === 'day4_kui_train_8') {
      setIsWaitFinished(false);
      setFaintPhase('stay');
      if (bgLoaded) {
        const stayTimer = setTimeout(() => {
          setIsWaitFinished(true);
          setHistory(prev => [...prev, currentNodeId]);
          setCurrentNodeId('day4_kui_train_8_player');
        }, 3000);
        return () => clearTimeout(stayTimer);
      }
    } else if (currentNodeId === 'day4_kui_train_8_player') {
      setIsWaitFinished(false);
      setFaintPhase('anim');
      if (bgLoaded) {
        const animTimer = setTimeout(() => {
          setIsWaitFinished(true);
          setHistory(prev => [...prev, currentNodeId]);
          setCurrentNodeId('day4_kui_train_faint');
        }, 3000);
        return () => clearTimeout(animTimer);
      }
    } else {
      setFaintPhase('none');
      setIsWaitFinished(true);
    }
  }, [currentNodeId, bgLoaded]);

  const STORYTELLING_NODES = [
    'day3_kitchen_one_start', 'day3_kitchen_one_cg1_1', 'day3_kitchen_one_cg2_1', 'day3_kitchen_one_cg2_2', 'day3_kitchen_one_cg2_3',
    'day3_kitchen_ten_start', 'day3_kitchen_ten_4', 'day3_kitchen_ten_4_2', 'day3_kitchen_ten_4_3', 'day3_kitchen_ten_5', 'day3_kitchen_ten_5_2', 'day3_kitchen_ten_5_3', 'day3_kitchen_ten_6', 'day3_kitchen_ten_7', 'day3_kitchen_ten_8_1', 'day3_kitchen_ten_8_2', 'day3_kitchen_ten_8_3'
  ];

  useEffect(() => {
    let timer: number | undefined;
    if (!isTyping && bgLoaded && isWaitFinished && gameState === GameState.STORY && !currentNode.choices && !currentNode.isNameInput && currentNode.nextId) {
      if (currentNodeId === 'day4_kui_train_5' || currentNodeId === 'day4_kui_train_archery_level2_trigger' || currentNodeId === 'day4_kui_train_archery_level3_trigger' || currentNodeId === 'day4_kui_train_8' || currentNodeId === 'day4_kui_train_8_player') return;
      if (STORYTELLING_NODES.includes(currentNodeId)) return;

      if (isAutoPlay) {
        const rawContent = (language === Language.EN && currentNode.contentEn) 
          ? currentNode.contentEn 
          : (language === Language.JA && currentNode.contentJa) 
            ? currentNode.contentJa 
            : currentNode.content;
        const processedContent = (rawContent || "").replace(/{playerName}/g, playerName);
        const delay = processedContent.length > 78 ? 20000 : (currentNode.speaker === '系统' ? 3000 : 4000);

        timer = window.setTimeout(() => {
          setHistory(prev => [...prev, currentNodeId]);
          setCurrentNodeId(currentNode.nextId!);
        }, delay);
      }
    }
    return () => { if (timer) window.clearTimeout(timer); };
  }, [isTyping, bgLoaded, isWaitFinished, currentNodeId, currentNode.nextId, currentNode.speaker, currentNode.choices, currentNode.isNameInput, gameState, isAutoPlay, playerName]);

  const handleNextDialogue = () => {
    if (currentNode.isNameInput) return;
    if ((currentNodeId === 'day4_kui_drill_pan_start' || currentNodeId === 'day4_kui_train_8' || currentNodeId === 'day4_kui_train_8_player') && (!bgLoaded || !isWaitFinished)) return;
    
    if (isTyping) { 
      const rawContent = (language === Language.EN && currentNode.contentEn) 
        ? currentNode.contentEn 
        : (language === Language.JA && currentNode.contentJa) 
          ? currentNode.contentJa 
          : currentNode.content;
      setTypedContent((rawContent || "").replace(/{playerName}/g, playerName)); 
      setIsTyping(false);
      return; 
    }

    if (currentNodeId === 'day4_kui_train_5' || currentNodeId === 'day4_kui_train_archery_level2_trigger' || currentNodeId === 'day4_kui_train_archery_level3_trigger') {
      setGameState(GameState.ARCHERY_MINIGAME);
      return;
    }

    if (currentNode.choices && !showChoices) { 
      setShowChoices(true); 
      return; 
    }
    if (currentNode.nextId && !currentNode.choices) {
      if (currentNodeId === 'day5_gongsun_invite') {
        setIsDivinationUnlocked(true);
      }
      if (currentNodeId === 'day5_marsh_unlock') {
        setIsStrollUnlocked(true);
      }
      setHistory(prev => [...prev, currentNodeId]);
      setCurrentNodeId(currentNode.nextId);
    }
  };

  const handleBack = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isAutoPlay) { setIsAutoPlay(false); return; }
    if (history.length > 0) {
      const newHistory = [...history];
      const lastNodeId = newHistory.pop();
      setHistory(newHistory);
      setCurrentNodeId(lastNodeId!);
    }
  };

  const handlePassDay = () => {
    const nextDay = currentDay + 1;
    const nextDayStartId = `day${nextDay}_start`;
    let targetNodeId = nextDayStartId;
    if (!STORY_DATA[targetNodeId]) {
      targetNodeId = Object.keys(STORY_DATA).find(id => id.startsWith(`day${nextDay}`)) || nextDayStartId;
    }
    setCurrentDay(nextDay);
    setActionPoints(3);
    setDivinationUsedToday(false);
    setCurrentNodeId(targetNodeId);
    const targetNode = STORY_DATA[targetNodeId];
    if (targetNode?.choices) { setShowChoices(true); } else { setShowChoices(false); }
  };

  const handleNameSubmit = () => {
    if (!tempName.trim()) return;
    setPlayerName(tempName.trim());
    if (currentNode.nextId) {
      setHistory(prev => [...prev, currentNodeId]);
      setCurrentNodeId(currentNode.nextId);
    }
  };

  const handleChoice = (choice: Choice) => {
    if (choice.nextId === 'start') {
      handleStartNew();
      setShowChoices(false);
      return;
    }
    if (choice.nextId === 'back') {
      if (history.length > 0) {
        const newHistory = [...history];
        const lastNodeId = newHistory.pop();
        setHistory(newHistory);
        setCurrentNodeId(lastNodeId!);
      }
      setShowChoices(false);
      return;
    }

    if (choice.affectionBonus) {
      setCharacters(prev => prev.map(c => 
        c.id === choice.affectionBonus?.charId ? { ...c, affection: c.affection + choice.affectionBonus!.points } : c
      ));
    }
    if (choice.attributeBonus) {
      setPlayerAttributes(prev => ({
        ...prev,
        weight: prev.weight + (choice.attributeBonus?.weight || 0),
        intelligence: prev.intelligence + (choice.attributeBonus?.intelligence || 0),
        strength: prev.strength + (choice.attributeBonus?.strength || 0),
        spirit: prev.spirit + (choice.attributeBonus?.spirit || 0),
      }));
    }
    setHistory(prev => [...prev, currentNodeId]);
    setCurrentNodeId(choice.nextId);
    setShowChoices(false);
  };

  const handleSendMessage = async (text: string, style: string) => {
    if (!text.trim() || !selectedCharForChat || isAiResponding || actionPoints < 1) return;
    const charId = selectedCharForChat.id;
    const userMsg: Message = { role: 'user', text: `[以${style}语气回复] ${text}` };
    setChatHistory(prev => ({ ...prev, [charId]: [...(prev[charId] || []), userMsg] }));
    setActionPoints(p => p - 1);
    setIsAiResponding(true);

    try {
      const response = await generateCharacterResponse(selectedCharForChat, chatHistory[charId] || [], text, playerName);
      setChatHistory(prev => ({ ...prev, [charId]: [...(prev[charId] || []), { role: 'model', text: response }] }));
      setCharacters(prev => prev.map(c => c.id === charId ? { ...c, interactionCount: c.interactionCount + 1, affection: c.affection + 2 } : c));
    } catch (error) {} finally {
      setIsAiResponding(false);
    }
  };

  const renderContent = () => {
    const ROMANCEABLE_IDS = ['linchong', 'yanqing', 'luzhishen', 'likui'];
    const romanceableCharacters = characters.filter(c => ROMANCEABLE_IDS.includes(c.id));

    if (gameState === GameState.START) {
      return <LandingPage 
        onStart={handleStartNew} 
        onLoad={handleLoadGame} 
        hasSave={hasSave} 
        onGallery={() => setGameState(GameState.GALLERY)} 
        onLinChongDemo={handleStartLinChongDemo}
        language={language}
        onLanguageChange={setLanguage}
      />;
    }
    if (gameState === GameState.GALLERY) {
      return <GalleryPage characters={romanceableCharacters} onBack={() => setGameState(GameState.STORY)} onSelect={(c) => {setSelectedCharForChat(c); setIsChatWindowOpen(true);}} language={language} />;
    }

    if (gameState === GameState.ARCHERY_MINIGAME) {
      return (
        <ArcheryMinigame 
          level={archeryLevel}
          onSuccess={(attempts) => {
            setGameState(GameState.STORY);
            setHistory(prev => [...prev, currentNodeId]);
            if (archeryLevel === 1) {
              setArcheryLevel(2);
              setCurrentNodeId('day4_kui_train_archery_win_1');
            } else if (archeryLevel === 2) {
              setArcheryLevel(3);
              setCurrentNodeId('day4_kui_train_archery_win_2_success');
            } else {
              setPlayerAttributes(prev => ({ ...prev, strength: prev.strength + 5 }));
              setCurrentNodeId('day4_kui_train_archery_all_win_player');
            }
          }}
          onCancel={() => {
            setGameState(GameState.STORY);
            setHistory(prev => [...prev, currentNodeId]);
            setCurrentNodeId('day4_kui_train_retry_consolation');
          }}
        />
      );
    }

    const isFightNode = [
      'woods_new_2',
      'day3_kui_yiling_10', 'day3_kui_help_1', 'day3_kui_help_5', 
      'day3_kui_watch_3', 'day3_kui_watch_4', 'day3_kui_watch_5',
      'day2_night_attack_breakin_kui', 'day2_night_attack_breakin_lu',
      'day2_night_attack_lin_silhouette_kui', 'day2_night_attack_lin_silhouette_lu',
      'day6_start', 'day6_kui_noise_1', 'day6_lu_roar', 'linchong_demo_3_4'
    ].includes(currentNodeId);
    const isFaintSequence = currentNodeId === 'day4_kui_train_8' || currentNodeId === 'day4_kui_train_8_player' || currentNodeId === 'day4_kui_train_faint';
    
    const isScaleCG = displayBackground.includes('scalenew.jpg');
    const isHuyanPan = displayBackground.includes('%E5%91%BC%E5%BB%B6%E7%81%BC.jpg');
    
    const isFullBrightness = (
      displayBackground.includes('特典') || 
      displayBackground.includes('%E7%89%B9%E5%85%B8') || 
      displayBackground.includes('CG') ||
      displayBackground.includes('%E9%A6%92%E5%A4%B4') || 
      displayBackground.includes('%E8%92%B8%E7%AC%BC') || 
      displayBackground.includes('%E6%B5%81%E8%A1%80') ||
      isScaleCG || isHuyanPan || currentNodeId === 'day4_kui_train_8' || currentNodeId === 'day4_kui_train_8_player' || currentNodeId === 'day5_start'
    );

    const isStorytellingNode = STORYTELLING_NODES.includes(currentNodeId);

    const activeSprite = currentNode.sprite || (spriteToDisplay ? characters.find(c => c.id === spriteToDisplay)?.sprite : undefined);

    const isFlashNode = currentNodeId === 'linchong_demo_3_5' || currentNodeId === 'day7_flashback_10';
    const isBreathingNode = [
      'day6_lu_roar', 'day6_player_stunned', 'linchong_demo_1', 'linchong_demo_2', 'linchong_demo_2_1', 
      'linchong_demo_3', 'linchong_demo_3_1', 'linchong_demo_3_2', 
      'linchong_demo_3_2_1', 'linchong_demo_3_3', 'linchong_demo_3_4'
    ].includes(currentNodeId);

    const t = UI_TRANSLATIONS[language];

    return (
      <div className={`relative w-full h-screen bg-black overflow-hidden font-serif ${isFightNode || (faintPhase === 'anim') ? 'animate-shake' : ''} ${isFlashNode ? 'animate-flash' : ''}`} onClick={handleNextDialogue}>
        {saveTooltip && !isFullBrightness && <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[500] bg-yellow-600 text-white px-8 py-2 rounded-full font-calligraphy text-xl shadow-2xl animate-fade-up">{language === Language.ZH ? '笔墨已收，录入丹青' : (language === Language.EN ? 'Story recorded in ink' : '筆墨を収め、丹青に録す')}</div>}
        
        {isStorytellingNode && !isFullBrightness && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[150] pointer-events-none">
            <div className="bg-black/60 text-white px-10 py-3 rounded-full font-medium animate-shake text-xl border border-white/20 shadow-xl backdrop-blur-sm tracking-widest">
              {language === Language.ZH ? '点击馒头听李老头继续讲述' : (language === Language.EN ? 'Click the bun to hear Old Man Li continue' : '饅頭をクリックして李爺さんの話を聞く')}
            </div>
          </div>
        )}

        <div className={`fixed top-0 left-0 right-0 z-[100] h-16 bg-black/60 backdrop-blur-md border-b border-yellow-900/30 flex items-center justify-between px-8 transition-transform duration-500 ${isFullBrightness ? '-translate-y-full' : 'translate-y-0'}`}>
          <div className="flex items-center gap-8">
            <div className="flex flex-col"><span className="text-[10px] text-gray-500 uppercase tracking-widest leading-none mb-1">{language === Language.ZH ? '距离天限' : (language === Language.EN ? 'Days Left' : '天限まで')}</span><span className="text-xl font-bold text-yellow-500">{108 - currentDay} {language === Language.ZH ? '日' : (language === Language.EN ? 'Days' : '日')}</span></div>
            <button onClick={(e) => { e.stopPropagation(); setShowAttrs(true); }} className="group flex flex-col items-center bg-yellow-900/20 border border-yellow-600/30 px-3 py-1 rounded hover:bg-yellow-900/40 transition-all">
              <span className="text-[10px] text-yellow-600/70 uppercase tracking-tighter mb-1">{t.attributes}</span>
              <div className="flex gap-3">
                <span className="text-[10px] flex items-center gap-0.5" title={t.weight}>🩸{language === Language.ZH ? '体重' : (language === Language.EN ? 'Wgt' : '体重')}:{playerAttributes.weight}</span>
                <span className="text-[10px] flex items-center gap-0.5" title={t.intelligence}>📜{language === Language.ZH ? '智力' : (language === Language.EN ? 'Int' : '知力')}:{playerAttributes.intelligence}</span>
                <span className="text-[10px] flex items-center gap-0.5" title={t.strength}>⚔️{language === Language.ZH ? '武力' : (language === Language.EN ? 'Str' : '武力')}:{playerAttributes.strength}</span>
                <span className="text-[10px] flex items-center gap-0.5" title={t.spirit}>✨{language === Language.ZH ? '灵力' : (language === Language.EN ? 'Spi' : '霊力')}:{playerAttributes.spirit}</span>
              </div>
            </button>
            <div className="flex items-center gap-2">{Array.from({ length: 3 }).map((_, i) => (<div key={i} className={`w-3 h-3 rounded-full border border-yellow-500 ${i < actionPoints ? 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]' : 'bg-transparent opacity-20'}`} />))}</div>
          </div>
          <div className="flex gap-4 items-center">
            <button onClick={(e) => { e.stopPropagation(); toggleMute(); }} className="p-2 bg-yellow-900/20 rounded border border-yellow-600/30 text-xl transition-all hover:bg-yellow-900/40" title={isMuted ? "播放音乐" : "静音"}>
              {isMuted ? '🔇' : '🎵'}
            </button>
            <button onClick={(e) => { e.stopPropagation(); handleSaveGame(); }} className="px-4 py-1.5 bg-yellow-900/40 border border-yellow-500/50 text-yellow-500 rounded text-sm hover:bg-yellow-800 transition-colors font-bold">{language === Language.ZH ? '记录' : (language === Language.EN ? 'Save' : '記録')}</button>
            <button onClick={(e) => { e.stopPropagation(); setShowDivination(true); }} className="p-2 bg-yellow-900/20 rounded border border-yellow-600/30 text-xl" title={t.divinationTitle}>☯️</button>
            <button onClick={(e) => { e.stopPropagation(); if (!selectedCharForChat) setSelectedCharForChat(romanceableCharacters[0]); setIsChatWindowOpen(true); }} className="p-2 bg-yellow-900/20 rounded border border-yellow-600/30 text-xl" title="传信互动">✉️</button>
            <button onClick={(e) => { e.stopPropagation(); setGameState(GameState.GALLERY); }} className="px-6 py-2 border border-yellow-600/40 text-yellow-500 rounded-full text-sm">{language === Language.ZH ? '名册' : (language === Language.EN ? 'Gallery' : '名簿')}</button>
            <button onClick={(e) => { e.stopPropagation(); handlePassDay(); }} className="px-6 py-2 bg-yellow-800 text-white rounded-full text-sm font-bold">{language === Language.ZH ? '渡过此日' : (language === Language.EN ? 'Next Day' : '日を越す')}</button>
          </div>
        </div>

        {isStrollUnlocked && (
          <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-4">
            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setHistory(prev => [...prev, currentNodeId]);
                setCurrentNodeId('stroll_marsh_start'); 
              }} 
              className="w-16 h-40 bg-blue-900/60 backdrop-blur-md border-2 border-blue-400/50 text-blue-100 rounded-full flex items-center justify-center hover:bg-blue-800 transition-all shadow-2xl group"
            >
              <span className="vertical-text font-calligraphy text-2xl tracking-widest group-hover:scale-110 transition-transform">闲逛水泊</span>
            </button>
          </div>
        )}
        <div 
          key={isBreathingNode ? 'breathing_bg' : displayBackground}
          className={`absolute inset-0 z-0 overflow-hidden ${isBreathingNode ? 'animate-breathing' : ''}`}
        >
          <img 
            key={displayBackground}
            src={displayBackground} 
            onLoad={() => setBgLoaded(true)}
            className={`w-full h-full object-cover transition-all ${displayBackground === BG_BAMBOO ? 'duration-0' : 'duration-1000'} ${isScaleCG ? 'scale-[1.2]' : ''} ${isHuyanPan ? 'animate-pan-down-once' : ''} ${displayBackground.includes('%E6%B5%81%E8%A1%80') ? 'animate-cg-fade-in' : ''} ${
              isFullBrightness && !isFaintSequence ? '!filter-none' : (isFullBrightness && isFaintSequence && currentNodeId !== 'day4_kui_train_faint' && faintPhase !== 'anim') ? '!filter-none' : isFaintSequence ? '' : 'brightness-[0.45]'
            } ${bgLoaded ? 'opacity-100' : 'opacity-0'} ${currentNodeId === 'day4_kui_train_8_player' && faintPhase === 'anim' ? 'animate-eyes-closing' : ''} ${(currentNodeId === 'day5_start' || currentNodeId === 'day6_start') ? 'animate-eyes-opening' : ''} ${isFaintSequence && currentNodeId === 'day4_kui_train_faint' ? 'brightness-0 grayscale' : ''} ${currentNodeId === 'day7_flashback_1' ? 'animate-meditation-entry' : ''} ${currentNodeId === 'day7_monologue_1' ? 'animate-pulse-once' : ''} ${currentNodeId === 'day7_flashback_9' ? 'animate-flashback-entry' : ''}`} 
            alt="bg" 
          />
          <div className={`absolute inset-0 bg-black transition-opacity duration-1000 z-[15] pointer-events-none ${isBlackout ? 'opacity-100' : 'opacity-0'}`} />
        </div>
        {activeSprite && !isFaintSequence && (
          <div className="absolute inset-x-0 bottom-0 h-screen z-10 pointer-events-none overflow-hidden flex items-end justify-center">
            <img 
              src={activeSprite} 
              onLoad={() => setSpriteLoaded(true)}
              className={`w-auto object-contain origin-bottom transition-all duration-700 ease-in-out ${spriteLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${['linchong', 'yanqing', 'luzhishen'].includes(spriteToDisplay || '') ? 'h-[91.35vh]' : (activeSprite.includes('%E6%9D%8E%E9%80%B5%E7%94%9F%E6%B0%94.png') ? 'h-[99.75vh]' : 'h-[105vh]')} ${(currentNodeId === 'day7_linchong_response_3' || currentNodeId === 'day7_flashback_12') ? 'animate-fade-out' : ''}`} 
              style={{ willChange: 'transform, opacity' }}
              alt="portrait" 
            />
          </div>
        )}
        
        {showChoices ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 z-30 p-4 gap-6 animate-fadeIn">
            {currentNode.choices?.map((choice, idx) => (
              <button key={idx} onClick={(e) => { e.stopPropagation(); handleChoice(choice); }} className="w-full max-w-2xl p-6 bg-[#1a110a]/98 border-2 border-yellow-800/60 text-gray-100 text-xl hover:bg-yellow-900/80 transition-all rounded-xl font-serif shadow-2xl">
                {(language === Language.EN && choice.textEn) ? choice.textEn : (language === Language.JA && choice.textJa) ? choice.textJa : choice.text}
              </button>
            ))}
          </div>
        ) : (
          <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 w-[94%] max-w-5xl bg-black/90 border-2 border-yellow-900/50 p-10 z-20 rounded-2xl ${currentNode.isNameInput ? '' : 'cursor-pointer hover:border-yellow-600'}`}>
            {!currentNode.isNameInput && (<><button onClick={(e) => { e.stopPropagation(); setIsAutoPlay(!isAutoPlay); }} className={`absolute top-4 right-6 px-3 py-1 rounded-lg text-xs font-bold transition-all border ${isAutoPlay ? 'bg-yellow-600 text-white border-yellow-400' : 'bg-black/40 text-yellow-800 border-yellow-900/50'}`}>{isAutoPlay ? (language === Language.ZH ? '手动播放' : (language === Language.EN ? 'Manual' : '手動')) : (language === Language.ZH ? '自动播放' : (language === Language.EN ? 'Auto' : '自動'))}</button><button onClick={(e) => { e.stopPropagation(); handleBack(e); }} disabled={history.length === 0 && !isAutoPlay} className={`absolute bottom-4 left-6 px-4 py-1 rounded-lg text-xs font-bold transition-all border ${history.length === 0 && !isAutoPlay ? 'opacity-20 bg-black/40 text-gray-500 border-gray-900 pointer-events-none' : 'bg-black/40 text-yellow-800 border-yellow-900/50 hover:border-yellow-600 hover:text-yellow-600'}`}>◀ {language === Language.ZH ? '后退' : (language === Language.EN ? 'Back' : '戻る')}</button></>)}
            <div className="absolute -top-6 left-12 px-10 py-2 bg-[#2a1a10] border-2 border-yellow-600 text-yellow-500 font-bold text-2xl font-sans">
              {currentNode.speaker === '{playerName}' ? playerName : (
                (language === Language.EN && currentNode.speakerEn) ? currentNode.speakerEn : (language === Language.JA && currentNode.speakerJa) ? currentNode.speakerJa : (currentNode.speaker || (language === Language.ZH ? '梁山秘史' : (language === Language.EN ? 'Liangshan Secret' : '梁山秘史')))
              )}
            </div>
            <div className="text-xl md:text-3xl leading-[1.7] text-gray-200 min-h-[6rem] font-serif pt-4 whitespace-pre-wrap tracking-wide">
              {typedContent}
              {currentNode.isNameInput && (<div className="mt-8 flex gap-4 animate-fade-in"><input autoFocus value={tempName} onChange={e => { e.stopPropagation(); setPlayerNameTemp(e.target.value); }} onClick={e => e.stopPropagation()} onKeyDown={e => { e.stopPropagation(); e.key === 'Enter' && handleNameSubmit(); }} placeholder={language === Language.ZH ? "请输入你的名号..." : (language === Language.EN ? "Enter your name..." : "名前を入力してください...")} className="flex-1 bg-transparent border-b-2 border-yellow-800 text-yellow-500 p-2 outline-none text-2xl" /><button onClick={(e) => { e.stopPropagation(); handleNameSubmit(); }} className="px-8 py-2 bg-yellow-800 text-white rounded-lg font-bold hover:bg-yellow-700 transition-colors">{language === Language.ZH ? '确定' : (language === Language.EN ? 'Confirm' : '決定')}</button></div>)}
            </div>
            {!currentNode.isNameInput && (<div className="absolute bottom-4 right-6 text-[11px] text-yellow-900/80 animate-pulse tracking-[0.3em] font-bold uppercase">{isTyping ? (language === Language.ZH ? '笔墨游走中...' : (language === Language.EN ? 'Writing...' : '執筆中...')) : (currentNode.choices ? (language === Language.ZH ? '▼ 查看抉择' : (language === Language.EN ? '▼ See Choices' : '▼ 選択肢を見る')) : (isAutoPlay ? (language === Language.ZH ? '⌛ 自动运行' : (language === Language.EN ? '⌛ Auto' : '⌛ 自動')) : (language === Language.ZH ? '▼ 继续剧幕' : (language === Language.EN ? '▼ Continue' : '▼ 次へ'))))}</div>)}
          </div>
        )}
        {showDivination && <DivinationModal used={divinationUsedToday} onClose={() => setShowDivination(false)} onDraw={(b) => {setDivinationUsedToday(true);}} isLocked={!isDivinationUnlocked} language={language} />}
        {showAttrs && <AttributesModal attrs={playerAttributes} onClose={() => setShowAttrs(false)} language={language} />}
        {isChatWindowOpen && selectedCharForChat && (<ChatWindow characters={romanceableCharacters} activeChar={selectedCharForChat} onSelectChar={setSelectedCharForChat} playerName={playerName} messages={chatHistory[selectedCharForChat.id] || []} onSend={handleSendMessage} onClose={() => setIsChatWindowOpen(false)} isResponding={isAiResponding} language={language} />)}
      </div>
    );
  };

  return (
    <>
      <audio ref={audioRef} src="https://github.com/wangdayu1996-lab/mygameasset/raw/refs/heads/main/Heroes%20Beneath%20the%20Willow.mp3" loop />
      {renderContent()}
    </>
  );
};

export default App;
