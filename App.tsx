
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
            { label: '武力 (攻守)', value: attrs.strength, icon: '⚔️', desc: '象征力量与技巧，决定冲突胜负。' },
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
  character: Character,
  playerName: string,
  messages: Message[],
  onSend: (text: string, style: string) => void,
  onClose: () => void,
  isResponding: boolean
}> = ({ character, playerName, messages, onSend, onClose, isResponding }) => {
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
              <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && onSend(input, style)} placeholder={`寄给${character.name}的话...`} className="flex-1 bg-transparent border-b-2 border-gray-400 p-3 focus:border-yellow-800 outline-none font-serif text-xl" />
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
  const [playerName, setPlayerName] = useState(() => localStorage.getItem('shuihu_player_name') || '小文书');
  const [tempName, setTempName] = useState('');
  
  const [characters, setCharacters] = useState<Character[]>(() => {
    const saved = localStorage.getItem('shuihu_chars');
    return saved ? JSON.parse(saved) : CHARACTERS;
  });

  const [playerAttributes, setPlayerAttributes] = useState<PlayerAttributes>(() => {
    const saved = localStorage.getItem('shuihu_attrs');
    return saved ? JSON.parse(saved) : { weight: 50, intelligence: 50, strength: 50, spirit: 50 };
  });

  const [showAttrs, setShowAttrs] = useState(false);
  
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

  const currentNode = STORY_DATA[currentNodeId] || STORY_DATA['start'];
  const [displayBackground, setDisplayBackground] = useState(currentNode.background);
  const [isBlackout, setIsBlackout] = useState(false);

  useEffect(() => {
    localStorage.setItem('shuihu_chars', JSON.stringify(characters));
    localStorage.setItem('shuihu_day', currentDay.toString());
    localStorage.setItem('shuihu_node', currentNodeId);
    localStorage.setItem('shuihu_chat', JSON.stringify(chatHistory));
    localStorage.setItem('shuihu_player_name', playerName);
    localStorage.setItem('shuihu_attrs', JSON.stringify(playerAttributes));
  }, [characters, currentDay, currentNodeId, chatHistory, playerName, playerAttributes]);

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
    
    // 处理占位符
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

  const handleNextDialogue = () => {
    if (currentNode.isNameInput) return;
    
    // 如果正在打字，点击则瞬间显示全部文字
    if (isTyping) { 
      setTypedContent((currentNode.content || "").replace(/{playerName}/g, playerName)); 
      setIsTyping(false);
      return; 
    }
    
    // 关键修复：如果节点有选项且当前没显示选项，点击后才显示选项
    if (currentNode.choices && !showChoices) { 
      setShowChoices(true); 
      return; 
    }
    
    // 只有在没选项或者还没显示选项时，才进入下一个节点
    if (currentNode.nextId && !currentNode.choices) {
      setCurrentNodeId(currentNode.nextId);
    }
  };

  const handleNameSubmit = () => {
    if (!tempName.trim()) return;
    setPlayerName(tempName.trim());
    if (currentNode.nextId) {
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

    // 处理分歧逻辑：第四天选择李逵作为导师时
    if (choice.nextId === 'day4_kui_branch') {
      const kuiAffection = characters.find(c => c.id === 'likui')?.affection || 0;
      // 这里的阈值设为 20。如果玩家救了母（+40），必然大于 20；如果观望（-30），必然小于 20。
      if (kuiAffection > 20) {
        setCurrentNodeId('day4_kui_enth_1');
      } else {
        setCurrentNodeId('day4_kui_sulk_1');
      }
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
    
    const response = await generateCharacterResponse(selectedCharForChat, chatHistory[charId] || [], text, playerName);
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
            
            <button 
              onClick={() => setShowAttrs(true)}
              className="group flex flex-col items-center bg-yellow-900/20 border border-yellow-600/30 px-3 py-1 rounded hover:bg-yellow-900/40 transition-all"
            >
              <span className="text-[10px] text-yellow-600/70 uppercase tracking-tighter">玩家属性</span>
              <div className="flex gap-1">
                <span className="text-xs">🩸{playerAttributes.weight}</span>
                <span className="text-xs">📜{playerAttributes.intelligence}</span>
                <span className="text-xs">⚔️{playerAttributes.strength}</span>
                <span className="text-xs">✨{playerAttributes.spirit}</span>
              </div>
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className={`w-3 h-3 rounded-full border border-yellow-500 ${i < actionPoints ? 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]' : 'bg-transparent opacity-20'}`} />
              ))}
            </div>
            <div className="text-yellow-600/50 text-xs font-serif italic border-l border-yellow-900/40 pl-4 hidden md:block">
              当前姓名: {playerName}
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
                  {isTyping ? '笔墨游走中...' : (currentNode.choices ? '▼ 查看抉择' : '▼ 继续剧幕')}
              </div>
            )}
          </div>
        )}

        {showDivination && <DivinationModal used={divinationUsedToday} onClose={() => setShowDivination(false)} onDraw={(b) => {setDivinationUsedToday(true);}} />}
        {showAttrs && <AttributesModal attrs={playerAttributes} onClose={() => setShowAttrs(false)} />}
        {isChatWindowOpen && selectedCharForChat && (
          <ChatWindow 
            character={selectedCharForChat} 
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
