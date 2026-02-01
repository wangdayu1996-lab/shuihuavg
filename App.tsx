import React, { useState, useEffect, useRef } from 'react';
import { GameState, Character, StoryNode, Choice, Message, HeartbeatEvent, DivinationBuff, PlayerAttributes } from './types';
import { CHARACTERS, STORY_DATA, DIVINATION_BUFFS } from './constants';
import { generateCharacterResponse, generateHeroMemory } from './services/gemini';

// --- 子组件：属性面板 ---
const AttributesModal: React.FC<{
  attrs: PlayerAttributes,
  onClose: () => void
}> = ({ attrs, onClose }) => {
  return (
    <div className="fixed inset-0 z-[400] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6" onClick={onClose}>
      <div className="bg-[#1a110a] border-2 border-yellow-700/50 w-full max-md rounded-2xl p-8 shadow-2xl animate-fade-up" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-8 border-b border-yellow-900/30 pb-4">
          <h2 className="text-3xl font-calligraphy text-yellow-500">文书手札</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-white">✕</button>
        </div>
        
        <div className="space-y-8">
          {[
            { label: '体重 (气血)', value: attrs.weight, icon: '🩸', desc: '象征生命活力与体力，高体重耐受力强。' },
            { label: '智力 (思辨)', value: attrs.intelligence, icon: '📜', desc: '象征逻辑与策略，影响说服力与任务深度。' },
            { label: '武力 (攻守)', value: attrs.strength, icon: '⚔️', desc: '象征力量与技巧，决定冲突负。' },
            { label: '灵力 (星感)', value: attrs.spirit, icon: '✨', desc: '象征星宿感应，关联魂魄稳定。' }
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
  isLocked?: boolean
}> = ({ onClose, onDraw, used, isLocked }) => {
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
        <h2 className="text-5xl font-calligraphy text-yellow-500 mb-6">公孙胜求卦</h2>
        
        {isLocked ? (
          <div className="py-10 animate-fade-up">
            <div className="text-8xl mb-6">📜</div>
            <p className="text-yellow-600 text-xl font-serif mountain-relaxed mb-8">“与公孙先生缘分未到，想求卦的话先去拜访先生吧！”</p>
            <button onClick={onClose} className="px-10 py-3 bg-yellow-800 text-white rounded-full font-bold">领命</button>
          </div>
        ) : used && !result ? (
          <div className="py-10 text-yellow-800 italic font-serif">“今日天机已显，不可再问。”</div>
        ) : result ? (
          <div className="animate-fade-up">
            <div className="text-8xl mb-6">{result.icon}</div>
            <h3 className="text-3xl font-bold text-yellow-500 mb-4">{result.name}</h3>
            <p className="text-gray-300 font-serif leading-relaxed mb-8">{result.description}</p>
            <button onClick={onClose} className="px-10 py-3 bg-yellow-800 text-white rounded-full font-bold">领命</button>
          </div>
        ) : (
          <div className="py-10">
            <div className={`text-9xl mb-10 transition-transform duration-1000 ${isDrawing ? 'animate-spin' : ''}`}>☯️</div>
            <button onClick={handleDraw} disabled={isDrawing} className={`px-12 py-4 rounded-full font-bold text-xl transition-all ${isDrawing ? 'bg-gray-800' : 'bg-yellow-600 hover:bg-yellow-500 text-white'}`}>
              {isDrawing ? '掷茭求卦' : '掷茭求卦'}
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
  onSelect: (char: Character) => void 
}> = ({ characters, onBack, onSelect }) => {
  return (
    <div className="fixed inset-0 z-[200] bg-[#0a0a0a] overflow-y-auto pb-20">
      <div className="sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md p-6 flex items-center justify-between border-b border-yellow-900/30">
        <button onClick={onBack} className="text-yellow-600 flex items-center gap-2 hover:text-yellow-400">
          <span className="text-2xl">←</span> <span className="font-calligraphy text-xl">返回山寨</span>
        </button>
        <h2 className="text-4xl font-calligraphy text-yellow-500">梁山英雄名册</h2>
        <div className="w-20" />
      </div>
      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {characters.map(char => (
          <div key={char.id} onClick={() => onSelect(char)} className="group relative bg-[#1a110a] border border-yellow-900/40 rounded-2xl overflow-hidden cursor-pointer hover:border-yellow-500 transition-all shadow-xl">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={char.portrait} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={char.name} />
            </div>
            <div className="p-6 bg-gradient-to-t from-black to-transparent">
              <div className="text-xs text-yellow-700 mb-1 tracking-widest">{char.title}</div>
              <h3 className="text-2xl font-calligraphy text-yellow-500 mb-2">{char.name}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-400 font-serif">
                <span>羁绊值: <span className="text-yellow-600">{char.affection}</span></span>
                <span>传信次数: {char.interactionCount}</span>
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
  isResponding: boolean
}> = ({ characters, activeChar, onSelectChar, playerName, messages, onSend, onClose, isResponding }) => {
  const [input, setInput] = useState('');
  const [style, setStyle] = useState('gentle');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
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
              <span className="text-[10px] text-yellow-800/60 font-serif">当前羁绊：{activeChar.affection}</span>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-red-800 text-2xl transition-colors">✕</button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
            {messages.length === 0 ? (
              <div className="h-full flex items-center justify-center text-gray-300 font-serif italic text-lg">
                尚无书信往来，提笔寄情吧...
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
                      对方已读
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isResponding && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-white/50 p-4 rounded-xl text-gray-400 font-serif italic">
                  {activeChar.name}正在斟酌笔墨...
                </div>
              </div>
            )}
          </div>

          <div className="p-8 bg-gray-100/50 border-t border-gray-300">
            <div className="flex gap-4 mb-4">
              {[
                {id: 'gentle', label: '温婉'},
                {id: 'funny', label: '风趣'},
                {id: 'direct', label: '直率'}
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
                placeholder={isResponding ? "等待回复中..." : `寄给${activeChar.name}的话...`}
                disabled={isResponding}
                className="flex-1 bg-transparent border-b-2 border-gray-400 p-3 focus:border-yellow-800 outline-none font-serif text-xl transition-colors disabled:opacity-50" 
              />
              <button 
                onClick={() => {onSend(input, style); setInput('')}} 
                disabled={isResponding || !input.trim()}
                className="px-8 py-3 bg-[#2a1a10] text-yellow-500 rounded-xl font-calligraphy text-xl hover:bg-black transition-all shadow-md disabled:bg-gray-400 disabled:text-gray-200"
              >
                寄出
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 主应用 ---
const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [currentNodeId, setCurrentNodeId] = useState<string>('start');
  const [typedContent, setTypedContent] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [showChoices, setShowChoices] = useState<boolean>(false);
  const [playerName, setPlayerName] = useState('小文书');
  const [tempName, setTempName] = useState('');
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [saveTooltip, setSaveTooltip] = useState<boolean>(false);
  
  const [characters, setCharacters] = useState<Character[]>(CHARACTERS);

  const [playerAttributes, setPlayerAttributes] = useState<PlayerAttributes>({ weight: 5, intelligence: 6, strength: 2, spirit: 4 });

  const [showAttrs, setShowAttrs] = useState(false);
  
  const [currentDay, setCurrentDay] = useState(1);
  const [actionPoints, setActionPoints] = useState(3);
  const [divinationUsedToday, setDivinationUsedToday] = useState(false);

  const [isChatWindowOpen, setIsChatWindowOpen] = useState<boolean>(false);
  const [selectedCharForChat, setSelectedCharForChat] = useState<Character | null>(null);
  const [chatHistory, setChatHistory] = useState<Record<string, Message[]>>({});
  const [isAiResponding, setIsAiResponding] = useState<boolean>(false);

  const [showDivination, setShowDivination] = useState(false);

  const currentNode = STORY_DATA[currentNodeId] || STORY_DATA['start'];
  const [displayBackground, setDisplayBackground] = useState(currentNode.background);
  const [isBlackout, setIsBlackout] = useState(false);

  // 初始化时检测是否有存档
  const [hasSave, setHasSave] = useState<boolean>(false);
  useEffect(() => {
    const savedNode = localStorage.getItem('shuihu_node');
    if (savedNode && savedNode !== 'start') {
      setHasSave(true);
    }
  }, []);

  // 存档功能
  const handleSaveGame = () => {
    localStorage.setItem('shuihu_chars', JSON.stringify(characters));
    localStorage.setItem('shuihu_day', currentDay.toString());
    localStorage.setItem('shuihu_node', currentNodeId);
    localStorage.setItem('shuihu_chat', JSON.stringify(chatHistory));
    localStorage.setItem('shuihu_player_name', playerName);
    localStorage.setItem('shuihu_attrs', JSON.stringify(playerAttributes));
    setSaveTooltip(true);
    setHasSave(true);
    setTimeout(() => setSaveTooltip(false), 2000);
  };

  // 读档功能
  const handleLoadGame = () => {
    const savedChars = localStorage.getItem('shuihu_chars');
    const savedDay = localStorage.getItem('shuihu_day');
    const savedNode = localStorage.getItem('shuihu_node');
    const savedChat = localStorage.getItem('shuihu_chat');
    const savedName = localStorage.getItem('shuihu_player_name');
    const savedAttrs = localStorage.getItem('shuihu_attrs');

    if (savedChars) setCharacters(JSON.parse(savedChars));
    if (savedDay) setCurrentDay(Number(savedDay));
    if (savedNode) setCurrentNodeId(savedNode);
    if (savedChat) setChatHistory(JSON.parse(savedChat));
    if (savedName) setPlayerName(savedName);
    if (savedAttrs) setPlayerAttributes(JSON.parse(savedAttrs));
    
    setGameState(GameState.STORY);
  };

  // 开启新游戏
  const handleStartNew = () => {
    setCurrentNodeId('start');
    setCharacters(CHARACTERS);
    setCurrentDay(1);
    setPlayerAttributes({ weight: 5, intelligence: 6, strength: 2, spirit: 4 });
    setChatHistory({});
    setGameState(GameState.STORY);
  };

  useEffect(() => {
    if (currentNode.background !== displayBackground) {
      setIsBlackout(true);
      setTimeout(() => {
        setDisplayBackground(currentNode.background);
        setIsBlackout(false);
      }, 600);
    }
  }, [currentNode.background]);

  useEffect(() => {
    setTypedContent('');
    setIsTyping(true);
    setShowChoices(false);
    
    const processedContent = (currentNode.content || "").replace(/{playerName}/g, playerName);
    
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
  }, [currentNodeId, playerName, currentNode.content]);

  useEffect(() => {
    let timer: number | undefined;
    
    if (!isTyping && gameState === GameState.STORY && !currentNode.choices && !currentNode.isNameInput && currentNode.nextId) {
      if (isAutoPlay) {
        const delay = currentNode.speaker === '系统' ? 3000 : 4000;
        timer = window.setTimeout(() => {
          setHistory(prev => [...prev, currentNodeId]);
          setCurrentNodeId(currentNode.nextId!);
        }, delay);
      }
    }
    
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [isTyping, currentNodeId, currentNode.nextId, currentNode.speaker, currentNode.choices, currentNode.isNameInput, gameState, isAutoPlay]);

  useEffect(() => {
    const dayMatch = currentNodeId.match(/^day(\d+)/);
    if (dayMatch) {
      const day = parseInt(dayMatch[1]);
      if (day !== currentDay) {
        setCurrentDay(day);
        setActionPoints(3); 
        setDivinationUsedToday(false); 
      }
    }
  }, [currentNodeId, currentDay]);

  const handleNextDialogue = () => {
    if (currentNode.isNameInput) return;
    if (isTyping) { 
      setTypedContent((currentNode.content || "").replace(/{playerName}/g, playerName)); 
      setIsTyping(false);
      return; 
    }
    if (currentNode.choices && !showChoices) { 
      setShowChoices(true); 
      return; 
    }
    if (currentNode.nextId && !currentNode.choices) {
      setHistory(prev => [...prev, currentNodeId]);
      setCurrentNodeId(currentNode.nextId);
    }
  };

  const handleBack = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isAutoPlay) {
      setIsAutoPlay(false);
      return;
    }
    if (history.length > 0) {
      const newHistory = [...history];
      const lastNodeId = newHistory.pop();
      setHistory(newHistory);
      setCurrentNodeId(lastNodeId!);
    }
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
    if (choice.affectionBonus) {
      setCharacters(prev => prev.map(c => 
        c.id === choice.affectionBonus?.charId 
          ? { ...c, affection: c.affection + choice.affectionBonus!.points } 
          : c
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
    if (choice.nextId === 'day4_kui_branch' || choice.nextId === 'day4_kui_train_1') {
      setCurrentNodeId('day4_kui_train_1');
    } else {
      setCurrentNodeId(choice.nextId);
    }
    
    setShowChoices(false);
  };

  const handleSendMessage = async (text: string, style: string) => {
    if (!text.trim() || !selectedCharForChat || isAiResponding || actionPoints < 1) return;
    const charId = selectedCharForChat.id;
    const userMsg: Message = { role: 'user', text: `[以${style}语气回复] ${text}` };
    
    setChatHistory(prev => ({ ...prev, [charId]: [...(prev[charId] || []), userMsg] }));
    setActionPoints(p => p - 1);
    setIsAiResponding(true);

    const baseDelay = 3000;
    const affectionBonus = Math.min(2500, selectedCharForChat.affection * 20);
    const delay = Math.max(800, baseDelay - affectionBonus);

    if (charId === 'lujunyi' && selectedCharForChat.affection <= 10) {
      setTimeout(() => {
        setIsAiResponding(false);
      }, delay);
      return;
    }
    
    try {
      const response = await generateCharacterResponse(selectedCharForChat, chatHistory[charId] || [], text, playerName);
      
      setTimeout(() => {
        setChatHistory(prev => ({ ...prev, [charId]: [...(prev[charId] || []), { role: 'model', text: response }] }));
        setIsAiResponding(false);
        setCharacters(prev => prev.map(c => c.id === charId ? { ...c, interactionCount: c.interactionCount + 1, affection: c.affection + 2 } : c));
      }, delay);
    } catch (error) {
      setIsAiResponding(false);
    }
  };

  const renderContent = () => {
    if (gameState === GameState.START) {
      return (
        <LandingPage 
          onStart={handleStartNew} 
          onLoad={handleLoadGame}
          hasSave={hasSave}
          onGallery={() => setGameState(GameState.GALLERY)} 
        />
      );
    }

    if (gameState === GameState.GALLERY) {
      return <GalleryPage characters={characters} onBack={() => setGameState(GameState.STORY)} onSelect={(c) => {setSelectedCharForChat(c); setIsChatWindowOpen(true);}} />;
    }

    // 优化：定义哪些关键字代表需要特殊进入动画的 CG
    const MEDITATION_CG_KEY = '%E7%AB%B9%E6%9E%97%E7%A6%85%E4%BF%AE1';
    const HEARTBEAT_CG_KEY = '%E7%89%B9%E5%85%B8'; // 包含李逵心动特典
    
    const isSpecialCG = displayBackground.includes(MEDITATION_CG_KEY) || displayBackground.includes(HEARTBEAT_CG_KEY);
    const targetIsSpecialCG = currentNode.background.includes(MEDITATION_CG_KEY) || currentNode.background.includes(HEARTBEAT_CG_KEY);
    
    // 识别核心冲击感搏杀节点 (排除了用户指定的文案页，如“手握重斧”day2_kui_pre_14 及其下一页 day2_kui_pre_15)
    const isFightNode = [
      'day3_kui_yiling_10', // 猛虎扑食
      'day3_kui_help_1',    // 拿起枯枝冲上去
      'day3_kui_help_5',    // 李逵朴刀旋风
      'day3_kui_watch_3',   // 铁牛归来怒吼
      'day3_kui_watch_4',   // 替伤瞬间
      'day3_kui_watch_5'    // 最终击毙
    ].includes(currentNodeId);

    const isFullBrightness = (displayBackground.includes('特典') || 
               displayBackground.includes('%E7%89%B9%E5%85%B8') || 
               displayBackground.includes('CG') ||
               isSpecialCG);

    return (
      <div 
        key={isFightNode ? currentNodeId : 'story-root'} 
        className={`relative w-full h-screen bg-black overflow-hidden font-serif ${isFightNode ? 'animate-shake' : ''}`}
      >
        {/* 存档提示 */}
        {saveTooltip && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[500] bg-yellow-600 text-white px-8 py-2 rounded-full font-calligraphy text-xl shadow-2xl animate-fade-up">
            笔墨已收，录入丹青
          </div>
        )}

        <div className="fixed top-0 left-0 right-0 z-[100] h-16 bg-black/60 backdrop-blur-md border-b border-yellow-900/30 flex items-center justify-between px-8">
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest leading-none mb-1">距离天限</span>
              <span className="text-xl font-bold text-yellow-500">{108 - currentDay} 日</span>
            </div>
            
            <button 
              onClick={() => setShowAttrs(true)}
              className="group flex flex-col items-center bg-yellow-900/20 border border-yellow-600/30 px-3 py-1 rounded hover:bg-yellow-900/40 transition-all"
            >
              <span className="text-[10px] text-yellow-600/70 uppercase tracking-tighter mb-1">玩家属性</span>
              <div className="flex gap-3">
                <span className="text-[10px] flex items-center gap-0.5" title="体重/气血">🩸体重:{playerAttributes.weight}</span>
                <span className="text-[10px] flex items-center gap-0.5" title="智力/思辨">📜智力:{playerAttributes.intelligence}</span>
                <span className="text-[10px] flex items-center gap-0.5" title="武力/攻守">⚔️武力:{playerAttributes.strength}</span>
                <span className="text-[10px] flex items-center gap-0.5" title="灵力/星感">✨灵力:{playerAttributes.spirit}</span>
              </div>
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className={`w-3 h-3 rounded-full border border-yellow-500 ${i < actionPoints ? 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]' : 'bg-transparent opacity-20'}`} />
              ))}
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <button 
              onClick={handleSaveGame} 
              className="px-4 py-1.5 bg-yellow-900/40 border border-yellow-500/50 text-yellow-500 rounded text-sm hover:bg-yellow-800 transition-colors font-bold"
            >
              记录
            </button>
            <button onClick={() => setShowDivination(true)} className="p-2 bg-yellow-900/20 rounded border border-yellow-600/30 text-xl" title="求卦">☯️</button>
            <button 
              onClick={() => {
                if (!selectedCharForChat) setSelectedCharForChat(characters[0]);
                setIsChatWindowOpen(true);
              }} 
              className="p-2 bg-yellow-900/20 rounded border border-yellow-600/30 text-xl" 
              title="传信互动"
            >
              ✉️
            </button>
            <button onClick={() => setGameState(GameState.GALLERY)} className="px-6 py-2 border border-yellow-600/40 text-yellow-500 rounded-full text-sm">名册</button>
            <button onClick={() => {setCurrentDay(d => d+1); setActionPoints(3);}} className="px-6 py-2 bg-yellow-800 text-white rounded-full text-sm font-bold">渡过此日</button>
          </div>
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            key={displayBackground}
            src={displayBackground} 
            className={`w-full h-full object-cover ${!isSpecialCG ? 'transition-all duration-700' : ''} ${
              isFullBrightness ? 'brightness-100' : 'brightness-[0.45]'
            } ${isSpecialCG ? 'animate-meditation-entry' : ''}`} 
            alt="bg" 
          />
          <div className={`absolute inset-0 bg-black transition-opacity duration-500 z-[15] pointer-events-none ${isBlackout ? 'opacity-100' : 'opacity-0'}`} />
        </div>

        {/* 立绘渲染逻辑 */}
        {currentNode.characterId && !isSpecialCG && !targetIsSpecialCG && (
          <div className="absolute inset-x-0 bottom-0 h-screen z-10 pointer-events-none overflow-hidden flex items-end justify-center">
            <img 
              src={characters.find(c => c.id === currentNode.characterId)?.sprite} 
              className={`w-auto animate-fade-up object-contain origin-bottom ${['lujunyi', 'yanqing', 'luzhishen'].includes(currentNode.characterId) ? 'h-[91.35vh]' : 'h-[105vh]'}`} 
              alt="portrait" 
            />
          </div>
        )}

        {showChoices ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 z-30 p-4 gap-6 animate-fadeIn">
            {currentNode.choices?.map((choice, idx) => (
              <button key={idx} onClick={() => handleChoice(choice)} className="w-full max-w-2xl p-6 bg-[#1a110a]/98 border-2 border-yellow-800/60 text-gray-100 text-xl hover:bg-yellow-900/80 transition-all rounded-xl font-serif shadow-2xl">{choice.text}</button>
            ))}
          </div>
        ) : (
          <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 w-[94%] max-w-5xl bg-black/90 border-2 border-yellow-900/50 p-10 z-20 rounded-2xl ${currentNode.isNameInput ? '' : 'cursor-pointer hover:border-yellow-600'}`} onClick={handleNextDialogue}>
            
            {!currentNode.isNameInput && (
              <>
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsAutoPlay(!isAutoPlay); }}
                  className={`absolute top-4 right-6 px-3 py-1 rounded-lg text-xs font-bold transition-all border ${
                    isAutoPlay ? 'bg-yellow-600 text-white border-yellow-400' : 'bg-black/40 text-yellow-800 border-yellow-900/50'
                  }`}
                >
                  {isAutoPlay ? '手动播放' : '自动播放'}
                </button>
                <button 
                  onClick={handleBack}
                  disabled={history.length === 0 && !isAutoPlay}
                  className={`absolute bottom-4 left-6 px-4 py-1 rounded-lg text-xs font-bold transition-all border ${
                    history.length === 0 && !isAutoPlay 
                      ? 'opacity-20 bg-black/40 text-gray-500 border-gray-900 pointer-events-none' 
                      : 'bg-black/40 text-yellow-800 border-yellow-900/50 hover:border-yellow-600 hover:text-yellow-600'
                  }`}
                >
                  ◀ 后退
                </button>
              </>
            )}

            <div className="absolute -top-6 left-12 px-10 py-2 bg-[#2a1a10] border-2 border-yellow-600 text-yellow-500 font-bold text-2xl font-calligraphy">
              {currentNode.speaker === '{playerName}' ? playerName : (currentNode.speaker || '梁山秘史')}
            </div>
            
            <div className="text-xl md:text-3xl leading-[1.7] text-gray-200 min-h-[6rem] font-serif pt-4 whitespace-pre-wrap tracking-wide">
              {typedContent}
              {currentNode.isNameInput && (
                <div className="mt-8 flex gap-4 animate-fade-in">
                  <input 
                    autoFocus
                    value={tempName}
                    onChange={e => setTempName(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleNameSubmit()}
                    placeholder="请输入你的名号..."
                    className="flex-1 bg-transparent border-b-2 border-yellow-800 text-yellow-500 p-2 outline-none text-2xl"
                  />
                  <button onClick={handleNameSubmit} className="px-8 py-2 bg-yellow-800 text-white rounded-lg font-bold hover:bg-yellow-700 transition-colors">确定</button>
                </div>
              )}
            </div>
            
            {!currentNode.isNameInput && (
              <div className="absolute bottom-4 right-6 text-[11px] text-yellow-900/80 animate-pulse tracking-[0.3em] font-bold uppercase">
                  {isTyping ? '笔墨游走中...' : (currentNode.choices ? '▼ 查看抉择' : (isAutoPlay ? '⌛ 自动运行' : '▼ 继续剧幕'))}
              </div>
            )}
          </div>
        )}

        {showDivination && <DivinationModal used={divinationUsedToday} onClose={() => setShowDivination(false)} onDraw={(b) => {setDivinationUsedToday(true);}} isLocked={gameState === GameState.STORY} />}
        {showAttrs && <AttributesModal attrs={playerAttributes} onClose={() => setShowAttrs(false)} />}
        {isChatWindowOpen && selectedCharForChat && (
          <ChatWindow 
            characters={characters}
            activeChar={selectedCharForChat}
            onSelectChar={setSelectedCharForChat}
            playerName={playerName}
            messages={chatHistory[selectedCharForChat.id] || []} 
            onSend={handleSendMessage} 
            onClose={() => setIsChatWindowOpen(false)} 
            isResponding={isAiResponding}
          />
        )}
      </div>
    );
  };

  return renderContent();
};

const LandingPage: React.FC<{ 
  onStart: () => void, 
  onLoad: () => void,
  hasSave: boolean,
  onGallery: () => void 
}> = ({ onStart, onLoad, hasSave, onGallery }) => (
  <div className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
    <div className="absolute inset-0 opacity-40">
      <img src="https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%BC%80%E5%9C%BA.jpg?raw=true" className="w-full h-full object-cover" alt="bg" />
    </div>
    <div className="relative z-10 text-center space-y-12 animate-fadeIn">
      <div className="space-y-4">
        <h1 className="text-9xl font-calligraphy text-yellow-500 vn-text-shadow tracking-tighter animate-pulse">水浒·星引缘</h1>
        <p className="text-2xl text-yellow-800 tracking-[0.5em] font-serif font-bold">—— 百零八星宿的宿命羁绊 ——</p>
      </div>
      <div className="flex flex-col gap-6 justify-center items-center">
        <div className="flex gap-8 justify-center">
          <button 
            onClick={onStart} 
            className="px-16 py-5 bg-gradient-to-b from-yellow-600 to-yellow-900 text-white rounded-full text-2xl font-calligraphy shadow-lg hover:scale-110 transition-all border-2 border-yellow-400"
          >
            开启剧幕
          </button>
          {hasSave && (
            <button 
              onClick={onLoad} 
              className="px-16 py-5 bg-gradient-to-b from-green-700 to-green-900 text-white rounded-full text-2xl font-calligraphy shadow-lg hover:scale-110 transition-all border-2 border-green-400"
            >
              续写前缘
            </button>
          )}
        </div>
        <button 
          onClick={onGallery} 
          className="px-20 py-4 bg-black/40 text-yellow-500 rounded-full text-2xl font-calligraphy border-2 border-yellow-700 hover:bg-yellow-900/20 transition-all"
        >
          英雄名册
        </button>
      </div>
    </div>
  </div>
);

export default App;