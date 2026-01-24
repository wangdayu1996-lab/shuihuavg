
import React, { useState, useEffect, useRef } from 'react';
import { GameState, Character, StoryNode, Choice, Message, HeartbeatEvent, DivinationBuff } from './types';
import { CHARACTERS, STORY_DATA, DIVINATION_BUFFS } from './constants';
import { generateCharacterResponse, generateHeroMemory } from './services/gemini';

// --- 子组件：卜卦 ---
const DivinationModal: React.FC<{ 
  onClose: () => void, 
  onDraw: (buff: DivinationBuff) => void,
  used: boolean 
}> = ({ onClose, onDraw, used }) => {
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
        {used && !result ? (
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
              {isDrawing ? '推演中...' : '掷茭求卦'}
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
  character: Character,
  messages: Message[],
  onSend: (text: string, style: string) => void,
  onClose: () => void,
  isResponding: boolean
}> = ({ character, messages, onSend, onClose, isResponding }) => {
  const [input, setInput] = useState('');
  const [style, setStyle] = useState('gentle');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages, isResponding]);

  return (
    <div className="fixed inset-0 z-[250] bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 md:p-10">
      <div className="w-full max-w-5xl h-[85vh] bg-[#fdfaf2] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_80px_rgba(0,0,0,0.5)] border-4 border-[#2a1a10]">
        <div className="hidden md:block w-1/3 bg-[#1a110a] relative overflow-hidden">
          <img src={character.portrait} className="absolute inset-0 w-full h-full object-cover object-top opacity-80" alt="char" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a110a] via-transparent to-transparent" />
          <div className="absolute bottom-10 left-0 right-0 text-center">
            <h3 className="text-4xl font-calligraphy text-yellow-500 mb-2">{character.name}</h3>
            <p className="text-yellow-800 font-serif italic tracking-wider">{character.title}</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col relative bg-[url('https://www.transparenttextures.com/patterns/paper.png')]">
          <div className="p-6 border-b border-gray-300 flex items-center justify-between">
            <span className="font-calligraphy text-2xl text-gray-800">往来书信</span>
            <button onClick={onClose} className="text-gray-500 hover:text-red-800 text-2xl">✕</button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                <div className={`max-w-[85%] p-6 rounded-2xl shadow-sm font-serif text-lg leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-[#e0d6c3] text-gray-800 border-l-4 border-yellow-800' 
                    : 'bg-white text-gray-800 border-r-4 border-yellow-900/30'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isResponding && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-white/50 p-4 rounded-xl text-gray-400 font-serif">英雄正在提笔回复...</div>
              </div>
            )}
          </div>

          <div className="p-8 bg-gray-100/50 border-t border-gray-300">
            <div className="flex gap-4 mb-4">
              {['gentle', 'funny', 'direct'].map(s => (
                <button key={s} onClick={() => setStyle(s)} className={`px-4 py-1 rounded-full text-xs transition-all ${style === s ? 'bg-yellow-800 text-white' : 'bg-gray-300 text-gray-600'}`}>
                  {s === 'gentle' ? '温婉' : s === 'funny' ? '风趣' : '直率'}
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && onSend(input, style)} placeholder="在这尺素之上写下你想说的话..." className="flex-1 bg-transparent border-b-2 border-gray-400 p-3 focus:border-yellow-800 outline-none font-serif text-xl" />
              <button onClick={() => {onSend(input, style); setInput('')}} className="px-8 py-3 bg-[#2a1a10] text-yellow-500 rounded-xl font-calligraphy text-xl hover:bg-black transition-all shadow-md">寄出</button>
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
  const [currentNodeId, setCurrentNodeId] = useState<string>(() => localStorage.getItem('shuihu_node') || 'start');
  const [typedContent, setTypedContent] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [showChoices, setShowChoices] = useState<boolean>(false);
  const [characters, setCharacters] = useState<Character[]>(() => {
    const saved = localStorage.getItem('shuihu_chars');
    return saved ? JSON.parse(saved) : CHARACTERS;
  });
  
  const [currentDay, setCurrentDay] = useState(() => Number(localStorage.getItem('shuihu_day')) || 1);
  const [actionPoints, setActionPoints] = useState(3);
  const [divinationUsedToday, setDivinationUsedToday] = useState(false);

  const [isChatWindowOpen, setIsChatWindowOpen] = useState<boolean>(false);
  const [selectedCharForChat, setSelectedCharForChat] = useState<Character | null>(null);
  const [chatHistory, setChatHistory] = useState<Record<string, Message[]>>(() => {
    const saved = localStorage.getItem('shuihu_chat');
    return saved ? JSON.parse(saved) : {};
  });
  const [isAiResponding, setIsAiResponding] = useState<boolean>(false);

  const [showDivination, setShowDivination] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  const currentNode = STORY_DATA[currentNodeId] || STORY_DATA['start'];
  const [displayBackground, setDisplayBackground] = useState(currentNode.background);
  const [isBlackout, setIsBlackout] = useState(false);

  useEffect(() => {
    localStorage.setItem('shuihu_chars', JSON.stringify(characters));
    localStorage.setItem('shuihu_day', currentDay.toString());
    localStorage.setItem('shuihu_node', currentNodeId);
    localStorage.setItem('shuihu_chat', JSON.stringify(chatHistory));
  }, [characters, currentDay, currentNodeId, chatHistory]);

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
    let charIndex = 0;
    const interval = setInterval(() => {
      charIndex++;
      setTypedContent(currentNode.content.slice(0, charIndex));
      if (charIndex >= currentNode.content.length) { 
        clearInterval(interval); 
        setIsTyping(false); 
      }
    }, 25); 
    return () => clearInterval(interval);
  }, [currentNodeId]);

  const handleNextDialogue = () => {
    if (isTyping) { 
      setTypedContent(currentNode.content); 
      setIsTyping(false);
      return; 
    }
    
    // 改动：如果有选项，只有在打字机完成后的第二次点击（且 showChoices 为 false）才弹出选项
    if (currentNode.choices && !showChoices) { 
      setShowChoices(true); 
      return; 
    }
    
    if (currentNode.nextId && !currentNode.choices) {
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
    
    const response = await generateCharacterResponse(selectedCharForChat, chatHistory[charId] || [], text);
    setChatHistory(prev => ({ ...prev, [charId]: [...(prev[charId] || []), { role: 'model', text: response }] }));
    setIsAiResponding(false);
    setCharacters(prev => prev.map(c => c.id === charId ? { ...c, interactionCount: c.interactionCount + 1, affection: c.affection + 2 } : c));
  };

  const renderContent = () => {
    if (gameState === GameState.START) {
      return <LandingPage onStart={() => setGameState(GameState.STORY)} onGallery={() => setGameState(GameState.GALLERY)} />;
    }

    if (gameState === GameState.GALLERY) {
      return <GalleryPage characters={characters} onBack={() => setGameState(GameState.STORY)} onSelect={(c) => {setSelectedCharForChat(c); setIsChatWindowOpen(true);}} />;
    }

    return (
      <div className="relative w-full h-screen bg-black overflow-hidden font-serif">
        <div className="fixed top-0 left-0 right-0 z-[100] h-16 bg-black/60 backdrop-blur-md border-b border-yellow-900/30 flex items-center justify-between px-8">
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest leading-none mb-1">距离天限</span>
              <span className="text-xl font-bold text-yellow-500">{108 - currentDay} 日</span>
            </div>
            <div className="flex items-center gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className={`w-3 h-3 rounded-full border border-yellow-500 ${i < actionPoints ? 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]' : 'bg-transparent opacity-20'}`} />
              ))}
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <button onClick={() => setShowDivination(true)} className="p-2 bg-yellow-900/20 rounded border border-yellow-600/30 text-xl">☯️</button>
            <button onClick={() => setGameState(GameState.GALLERY)} className="px-6 py-2 border border-yellow-600/40 text-yellow-500 rounded-full text-sm">名册</button>
            <button onClick={() => {setCurrentDay(d => d+1); setActionPoints(3);}} className="px-6 py-2 bg-yellow-800 text-white rounded-full text-sm font-bold">渡过此日</button>
          </div>
        </div>

        <div className="absolute inset-0 z-0">
          <img src={displayBackground} className="w-full h-full object-cover brightness-[0.45]" alt="bg" />
          <div className={`absolute inset-0 bg-black transition-opacity duration-500 z-[15] pointer-events-none ${isBlackout ? 'opacity-100' : 'opacity-0'}`} />
        </div>

        {currentNode.characterId && (
          <div className="absolute inset-x-0 bottom-0 h-screen z-10 pointer-events-none overflow-hidden flex items-end justify-center">
            <img src={characters.find(c => c.id === currentNode.characterId)?.portrait} className="h-[105vh] w-auto animate-fade-up object-contain origin-bottom" alt="portrait" />
          </div>
        )}

        {showChoices ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 z-30 p-4 gap-6 animate-fadeIn">
            {currentNode.choices?.map((choice, idx) => (
              <button key={idx} onClick={() => handleChoice(choice)} className="w-full max-w-2xl p-6 bg-[#1a110a]/98 border-2 border-yellow-800/60 text-gray-100 text-xl hover:bg-yellow-900/80 transition-all rounded-xl font-serif shadow-2xl">{choice.text}</button>
            ))}
          </div>
        ) : (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[94%] max-w-5xl bg-black/90 border-2 border-yellow-900/50 p-10 z-20 rounded-2xl cursor-pointer hover:border-yellow-600" onClick={handleNextDialogue}>
            <div className="absolute -top-6 left-12 px-10 py-2 bg-[#2a1a10] border-2 border-yellow-600 text-yellow-500 font-bold text-2xl font-calligraphy">{currentNode.speaker || '梁山秘史'}</div>
            <div className="text-xl md:text-3xl leading-[1.7] text-gray-200 min-h-[6rem] font-serif pt-4 whitespace-pre-wrap tracking-wide">{typedContent}</div>
            <div className="absolute bottom-4 right-6 text-[11px] text-yellow-900/80 animate-pulse tracking-[0.3em] font-bold uppercase">
                {isTyping ? '笔墨游走中...' : (currentNode.choices ? '▼ 查看抉择' : '▼ 继续剧幕')}
            </div>
          </div>
        )}

        {showDivination && <DivinationModal used={divinationUsedToday} onClose={() => setShowDivination(false)} onDraw={(b) => {setDivinationUsedToday(true);}} />}
        {isChatWindowOpen && selectedCharForChat && (
          <ChatWindow 
            character={selectedCharForChat} 
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

const LandingPage: React.FC<{ onStart: () => void, onGallery: () => void }> = ({ onStart, onGallery }) => (
  <div className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
    <div className="absolute inset-0 opacity-40">
      <img src="https://images.unsplash.com/photo-1505506005708-3058a94639e7?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="bg" />
    </div>
    <div className="relative z-10 text-center space-y-12 animate-fadeIn">
      <div className="space-y-4">
        <h1 className="text-9xl font-calligraphy text-yellow-500 vn-text-shadow tracking-tighter animate-pulse">水浒·星引缘</h1>
        <p className="text-2xl text-yellow-800 tracking-[0.5em] font-serif font-bold">—— 百零八星宿的宿命羁绊 ——</p>
      </div>
      <div className="flex gap-8 justify-center">
        <button onClick={onStart} className="px-16 py-5 bg-gradient-to-b from-yellow-600 to-yellow-900 text-white rounded-full text-2xl font-calligraphy shadow-lg hover:scale-110 transition-all border-2 border-yellow-400">开启剧幕</button>
        <button onClick={onGallery} className="px-16 py-5 bg-black/40 text-yellow-500 rounded-full text-2xl font-calligraphy border-2 border-yellow-700 hover:bg-yellow-900/20 transition-all">英雄名册</button>
      </div>
    </div>
  </div>
);

export default App;
