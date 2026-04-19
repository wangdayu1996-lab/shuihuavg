import { Character, StoryNode, DivinationBuff } from './types';

// --- 资源常量 ---
const LIKUI_PNG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%9D%8E%E9%80%B5png.png?raw=true"; 
const LIKUI_ANGRY_PNG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%9D%8E%E9%80%B5%E7%94%9F%E6%B0%94.png?raw=true";
const LIKUI_JPG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%9D%8E%E9%80%B5.jpg?raw=true";
const LUZHISHEN_IMAGE = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E9%B2%81%E6%99%BA%E6%B7%B1%E5%AF%B9%E8%AF%9D.jpg?raw=true";
const LUZHISHEN_PNG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E9%B2%81%E6%99%BA%E6%B7%B1png.png?raw=true";
const LINCHONG_IMAGE = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%9E%97%E5%86%B2.png?raw=true";
const LINCHONG_PNG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%9E%97%E5%86%B2.png?raw=true";
const YANQING_IMAGE = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E7%87%95%E9%9D%92lihui.jpg?raw=true";
const YANQING_PNG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E7%87%95%E9%9D%92png.png?raw=true";
const HUYANZHUO_PNG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%91%BC%E5%BB%B6%E7%81%BC.png?raw=true";
const GONGSUNSHENG_PNG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%85%AC%E5%AD%99%E8%83%9C%E5%AF%B9%E8%AF%9D%E7%AB%8B%E7%BB%98.png?raw=true";

export const BG_MOUNTAIN = "https://images.unsplash.com/photo-1505506005708-3058a94639e7?auto=format&fit=crop&q=80&w=2000";
export const BG_CAMP = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E8%81%9A%E4%B9%89%E5%8E%85.png?raw=true";
export const BG_DRILL = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%A2%81%E5%B1%B1%E6%A0%A1%E5%9C%BA.png?raw=true";
export const BG_DRILL_SCALE = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%91%BC%E5%BB%B6%E7%81%BCscalenew.jpg?raw=true";
export const BG_HUYAN_CG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%91%BC%E5%BB%B6%E7%81%BC.jpg?raw=true";
export const BG_FAINT_CG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/jiaochang.jpg?raw=true";
export const BG_FOREST = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%A3%AE%E6%9E%97.png?raw=true";
export const BG_BAMBOO = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E7%AB%B9%E6%9E%97.png?raw=true";
export const BG_MARKET = "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=2000";
export const BG_CAVE = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%B1%8B%E5%86%85.png?raw=true";
export const BG_NIGHT = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%A4%9C%E9%97%B4.png?raw=true";
export const BG_KITCHEN_REALLY_NEW = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%8E%A8%E6%88%BF.png?raw=true";
export const BG_LIN_ROOM = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%8D%A2%E4%BF%8A%E4%B9%89%E6%88%BF.png?raw=true";
export const BG_MARSH = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%B0%B4%E6%B3%8A.png?raw=true";
export const BG_NIGHT_DRILL = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%A4%9C%E9%97%B4%E6%BC%94%E6%AD%A6%E5%9C%BA.png?raw=true";
export const BG_BLACK = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQACAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
const CG_KUI_HEARTBEAT = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%9D%8E%E9%80%B5%E5%BF%83%E5%8A%A8%E7%89%B9%E5%85%B81.png?raw=true";
const CG_LU_MEDITATION = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E7%AB%B9%E6%9E%97%E7%A6%85%E4%BF%AE1.png?raw=true";

// --- 吃馒头 CG ---
const CG_BUNS_10 = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%8D%81%E4%B8%AA%E9%A6%92%E5%A4%B4.png?raw=true";
const CG_BUNS_5 = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E9%A6%92%E5%A4%B4%E4%BA%94%E4%B8%AA.png?raw=true";
const CG_BUNS_3 = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E4%B8%83%E4%B8%AA%E9%A6%92%E5%A4%B4.png?raw=true"; 
const CG_BUNS_1 = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E4%B8%80%E4%B8%AA%E9%A6%92%E5%A4%B4.png?raw=true";
const CG_BUNS_EMPTY = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E8%92%B8%E7%AC%BC.png?raw=true";
const CG_LIN_BLEED = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%B5%81%E8%A1%80.jpg?raw=true";

export const DIVINATION_BUFFS: DivinationBuff[] = [
  { id: 'tianxi', name: '上上签 · 天喜星动', description: '鸿运当头！今日传信互动好感额外+5。', effectType: 'affection', icon: '🏮' },
  { id: 'yima', name: '中签 · 驿马星驰', description: '偶遇英雄的几率提升。', effectType: 'speed', icon: '🐎' },
  { id: 'wuyun', name: '下签 · 乌云盖顶', description: '传信鸽子可能会迷路。', effectType: 'funny', icon: '☁️' },
  { id: 'taohua', name: '桃花煞', description: '修罗场触发几率大幅提升！', effectType: 'random', icon: '🌸' }
];

export const CHARACTERS: Character[] = [
  { id: 'linchong', name: '林冲', title: '豹子头', description: '八十万禁军教头，枪法绝伦。', avatar: LINCHONG_IMAGE, portrait: LINCHONG_IMAGE, sprite: LINCHONG_PNG, personality: '隐忍、刚毅、深情', affection: 0, interactionCount: 0, difficulty: 3, archetype: '导师', heartbeatEvents: [] },
  { id: 'yanqing', name: '燕青', title: '浪子', description: '梁山第一特工，情趣大师。', avatar: YANQING_IMAGE, portrait: YANQING_IMAGE, sprite: YANQING_PNG, personality: '狡黠、浪漫', affection: 0, interactionCount: 0, difficulty: 4, archetype: '竹马', heartbeatEvents: [] },
  { id: 'luzhishen', name: '鲁智深', title: '花和尚', description: '大智若愚，你的随身保镖。', avatar: LUZHISHEN_IMAGE, portrait: LUZHISHEN_IMAGE, sprite: LUZHISHEN_PNG, personality: '豪爽、赤诚', affection: 0, interactionCount: 0, difficulty: 2, archetype: '守护者', heartbeatEvents: [] },
  { id: 'likui', name: '李逵', title: '黑旋风', description: '直球之王，单纯得让人头疼。', avatar: LIKUI_PNG, portrait: LIKUI_JPG, sprite: LIKUI_PNG, personality: '狂放、憨直', affection: 0, interactionCount: 0, difficulty: 1, archetype: '犬系', heartbeatEvents: [] },
  { id: 'huyanzhuo', name: '呼延灼', title: '双鞭', description: '名将后人，治军极严。', avatar: HUYANZHUO_PNG, portrait: HUYANZHUO_PNG, sprite: HUYANZHUO_PNG, personality: '冷酷、坚毅', affection: 0, interactionCount: 0, difficulty: 5, archetype: '教官', heartbeatEvents: [] },
  { id: 'gongsunsheng', name: '公孙胜', title: '入云龙', description: '道法高深，能呼风唤雨。', avatar: GONGSUNSHENG_PNG, portrait: GONGSUNSHENG_PNG, sprite: GONGSUNSHENG_PNG, personality: '超脱、睿智', affection: 0, interactionCount: 0, difficulty: 4, archetype: '智者', heartbeatEvents: [] }
];

export const STORY_DATA: Record<string, StoryNode> = {
  // --- 第一章：林中初遇 ---
  'start': { 
    id: 'start', 
    speaker: '{playerName}', 
    content: '（意识像被卷入了一台失控的碎纸机，五彩斑斓的黑暗在眼前疯狂旋转……）',
    contentEn: '(My consciousness feels like it\'s being sucked into an out-of-control paper shredder, colorful darkness spinning wildly before my eyes...)',
    contentJa: '（意識が制御不能なシュレッダーに巻き込まれたようで、色とりどりの暗闇が目の前で激しく回転している……）',
    background: BG_MOUNTAIN, 
    nextId: 'trans_os_2' 
  },
  'trans_os_2': { 
    id: 'trans_os_2', 
    speaker: '{playerName}', 
    content: '（最后的记忆是主管那张吐着唾沫星子的脸，还有永远写不完的KPI……）',
    contentEn: '(My last memory is my supervisor\'s spitting face, and the never-ending KPIs...)',
    contentJa: '（最後の記憶は、唾を飛ばす上司の顔と、永遠に終わらないKPI……）',
    background: BG_MOUNTAIN, 
    nextId: 'trans_os_3' 
  },
  'trans_os_3': { 
    id: 'trans_os_3', 
    speaker: '{playerName}', 
    content: '（渐渐地，耳边的嘈杂消失了，取而值之的是泥土的芬芳，以及一种沉重的呼吸声。）',
    contentEn: '(Gradually, the noise in my ears fades away, replaced by the fragrance of soil and a heavy breathing sound.)',
    contentJa: '（次第に耳元の騒がしさが消え、代わりに土の香りと重い呼吸音が聞こえてきた。）',
    background: BG_MOUNTAIN, 
    nextId: 'woods_1' 
  },
  'woods_1': { 
    id: 'woods_1', 
    speaker: '{playerName}', 
    content: '（猛地睁开眼，首先映入眼帘的是一片遮天蔽日的古怪森林，然后是一张黑得像锅底一样的巨脸。）',
    contentEn: '(Opening my eyes suddenly, the first thing I see is a strange forest blotting out the sun, and then a giant face as black as the bottom of a pot.)',
    contentJa: '（不意に目を開けると、まず目に飛び込んできたのは日を遮る奇妙な森、そして鍋の底のように真っ黒な巨大な顔だった。）',
    background: BG_FOREST, 
    nextId: 'woods_2' 
  },
  'woods_2': { 
    id: 'woods_2', 
    speaker: '{playerName}', 
    content: '“哇啊啊啊啊！！鬼啊!！”（你连滚带爬地向后缩去）',
    contentEn: '"Waaaaah!! Ghost!!" (You scramble backward in terror)',
    contentJa: '「うわああああ！！お化けだ！！」（あなたは転がるように後ろへ下がった）',
    background: BG_FOREST, 
    nextId: 'woods_3' 
  },
  'woods_3': { 
    id: 'woods_3', 
    speaker: '黑大汉', 
    speakerEn: 'Burly Man',
    speakerJa: '大男',
    content: '“嚷甚么！闭嘴！再嚷俺一斧头劈了你这丫头！”（你眼前的黑大汉瞪圆了牛眼，腰间板斧泛着寒光）',
    contentEn: '"What are you shouting for! Shut up! Shout again and I\'ll split you in two with my axe, girl!" (The burly man before you glares with wide eyes, his axe gleaming coldly at his waist)',
    contentJa: '「何を騒いでやがる！黙れ！これ以上騒いだら、この斧でお前を真っ二つにしてやるぞ、小娘！」（目の前の大男が牛のような目を剥き、腰の斧が冷たく光っている）',
    background: BG_FOREST, 
    characterId: 'likui', 
    nextId: 'woods_4' 
  },
  'woods_4': { 
    id: 'woods_4', 
    speaker: '{playerName}', 
    content: '“别劈我! 这是哪? 我是不是加班加疯了产生的幻觉?”',
    contentEn: '"Don\'t split me! Where is this? Am I hallucinating from working too much overtime?"',
    contentJa: '「斬らないで！ここはどこ？残業のしすぎで頭がおかしくなった幻覚なの？」',
    background: BG_FOREST, 
    nextId: 'woods_5' 
  },
  'woods_5': { 
    id: 'woods_5', 
    speaker: '李逵', 
    speakerEn: 'Li Kui',
    speakerJa: '李逵',
    characterId: 'likui', 
    content: '“甚么班不班的? 这里是俺们梁山泊的地界! 俺看你这Y头穿得古怪，倒长得像个俏文书。”',
    contentEn: '"What overtime? This is our Liangshan Marsh territory! I see you\'re dressed strangely, girl, but you look like a pretty scribe."',
    contentJa: '「残業だか何だか知らねえが、ここは俺たち梁山泊の縄張りだ！妙な格好をしてやがるが、なかなかに別嬪な書記官に見えるぜ。」',
    background: BG_FOREST, 
    nextId: 'woods_5_os' 
  },
  'woods_5_os': { 
    id: 'woods_5_os', 
    speaker: '{playerName}', 
    content: '“梁山，什么梁山。。。这是什么朝代，你穿的什么衣服这是？啊啊啊啊啊！救命啊！”',
    contentEn: '"Liangshan? What Liangshan... What dynasty is this? What kind of clothes are you wearing? Aaaaah! Help!"',
    contentJa: '「梁山？梁山って何……これ、いつの時代？その服は何？あああああ！助けて！」',
    background: BG_FOREST, 
    nextId: 'woods_new_1' 
  },
  'woods_new_1': { 
    id: 'woods_new_1', 
    speaker: '李逵', 
    speakerEn: 'Li Kui',
    speakerJa: '李逵',
    characterId: 'likui', 
    content: '“嚷甚！现在是大宋宣和年间！俺这身是好汉穿的劲装，你这Y头懂个屁！别在这没命地叫，省得招来野兽！”',
    contentEn: '"What are you yelling for! It\'s the Xuanhe era of the Great Song! This is the sturdy gear of a hero, you know nothing, girl! Stop screaming like your life depends on it, or you\'ll attract wild beasts!"',
    contentJa: '「うるせえ！今は大宋の宣和年間だ！これは英雄が着る装束だ、お前のような小娘に何がわかる！そんなに叫ぶな、獣が寄ってくるだろうが！」',
    background: BG_FOREST, 
    nextId: 'woods_new_2' 
  },
  'woods_new_2': { 
    id: 'woods_new_2', 
    speaker: '{playerName}', 
    content: '“大宋。。。宣和。。。（头好痛，像炸开了一样。。。我想起来了，刚才下班路上电闪雷鸣，我好像被一道雷直接劈中了。。。难道我没死，而是穿越了？！）”',
    contentEn: '"Great Song... Xuanhe... (My head hurts, like it\'s exploding... I remember now, there was thunder and lightning on my way home from work, and I think I was struck by lightning... Did I not die, but travel through time?!)"',
    contentJa: '「大宋……宣和……（頭が痛い、割れそうだ……思い出した、仕事帰りに雷が鳴っていて、直撃を受けたんだ……死なずにタイムスリップしたっていうの？！）」',
    background: BG_FOREST, 
    nextId: 'woods_new_3' 
  },
  'woods_new_3': { 
    id: 'woods_new_3', 
    speaker: '{playerName}', 
    content: '“宋朝。。。梁山。。。黑脸大汉。。。天哪，我这是掉进《水浒传》的故事里了？！”',
    contentEn: '"Song Dynasty... Liangshan... Black-faced burly man... Oh my god, have I fallen into the story of \'Water Margin\'?!"',
    contentJa: '「宋の時代……梁山……黒い顔の大男……まさか、『水滸伝』の世界に迷い込んだの？！」',
    background: BG_FOREST, 
    nextId: 'woods_new_3_inner' 
  },
  'woods_new_3_inner': { 
    id: 'woods_new_3_inner', 
    speaker: '{playerName}', 
    content: '（不可能，怎么会有这种事情！这一定是在电视剧拍摄现场，对，一定是那种整蛊综艺或者秘密剧组。我难道是被拐卖到什么深山老林的影城了？）',
    contentEn: '(Impossible, how could this happen! This must be a TV set, yes, one of those prank shows or a secret film crew. Have I been kidnapped to some remote film studio in the mountains?)',
    contentJa: '（ありえない、そんなこと！これはきっとドラマの撮影現場だ、そうに違いない。ドッキリ番組か秘密のロケ隊だ。山奥の映画村にでも連れてこられたの？）',
    background: BG_FOREST, 
    nextId: 'woods_new_4' 
  },
  'woods_new_4': { 
    id: 'woods_new_4', 
    speaker: '李逵', 
    speakerEn: 'Li Kui',
    speakerJa: '李逵',
    characterId: 'likui', 
    content: '“甚么书不书的！听好了，俺乃梁山泊黑旋风李逵！你这Y头到底叫甚名字？看你这打扮，非僧非俗的，莫不又是山下派来的奸细？”',
    contentEn: '"What books! Listen up, I am Li Kui, the Black Whirlwind of Liangshan Marsh! What is your name, girl? Looking at your outfit, neither monk nor commoner, are you a spy sent from below?"',
    contentJa: '「本だか何だか知らねえが！よく聞け、俺は梁山泊の黒旋風、李逵だ！お前、名前は何てんだ？その格好、僧でも俗人でもねえ、ふもとから送られてきたスパイじゃねえだろうな？」',
    background: BG_FOREST, 
    nextId: 'woods_new_5' 
  },
  'woods_new_5': { 
    id: 'woods_new_5', 
    speaker: '{playerName}', 
    content: '“无可奉告！我凭什么告诉你？谁知道你们是不是什么非法组织？少拿这种吓人的剧本忽悠我，赶紧把导演叫出来，否则我报警了！”',
    contentEn: '"No comment! Why should I tell you? Who knows if you\'re some illegal organization? Stop trying to fool me with this scary script, call the director out now, or I\'m calling the police!"',
    contentJa: '「ノーコメント！何で教えなきゃいけないの？あなたたちが違法な組織かどうかもわからないのに。こんな怖い台本で私を騙そうとしないで、早くディレクターを呼んで。じゃないと警察を呼ぶわよ！」',
    background: BG_FOREST, 
    nextId: 'woods_6' 
  },
  'woods_6': { 
    id: 'woods_6', 
    speaker: '李逵', 
    speakerEn: 'Li Kui',
    speakerJa: '李逵',
    characterId: 'likui', 
    content: '“啧，净说些疯话！甚么警察导游的，俺听不懂！既然你不肯自报家门，那正好，哥哥最近正缺个端茶递水、誊写账目的。你这细身板虽然砍不了人，派点文书用场倒也行。”',
    contentEn: '"Tsk, nothing but crazy talk! Police, directors, I don\'t understand! Since you won\'t give your name, perfect, Brother has been needing someone to serve tea and keep the accounts. You might not be able to chop people with that thin frame, but you\'ll do fine as a scribe."',
    contentJa: '「チッ、わけのわからねえことばかり言いやがって！警察だのディレクターだの、知るか！名前を言わねえならちょうどいい、兄貴が最近、茶を運んだり帳簿をつけたりする人間を探してたんだ。その細い体じゃ人は斬れねえだろうが、書記くらいなら務まるだろう。」',
    background: BG_FOREST, 
    nextId: 'woods_7' 
  },
  'woods_7': { 
    id: 'woods_7', 
    speaker: '{playerName}', 
    content: '“文书? 你是说宋江缺个秘书? 我……我不入伙! 你们这是非法拘禁！我要回去写报告……”',
    contentEn: '"Scribe? You mean Song Jiang needs a secretary? I... I\'m not joining! This is illegal detention! I need to go back and write my report..."',
    contentJa: '「書記？宋江が秘書を探してるってこと？私……仲間になんてならないわよ！これは不当な拘束よ！帰ってレポートを書かなきゃいけないんだから……」',
    background: BG_FOREST, 
    nextId: 'woods_8' 
  },
  'woods_8': { 
    id: 'woods_8', 
    speaker: '李逵', 
    speakerEn: 'Li Kui',
    speakerJa: '李逵',
    characterId: 'likui', 
    content: '“啰嗦甚! 由不得你! 走你! 把你一人留在这等下就要叫大虫给叼走了!”',
    contentEn: '"Stop your blathering! You have no choice! Let\'s go! If I leave you here alone, a tiger will snatch you up in no time!"',
    contentJa: '「つべこべ言うな！お前に拒否権はねえ！行くぞ！こんなところに一人で残してたら、すぐに虎に食われちまうぞ！」',
    background: BG_FOREST, 
    nextId: 'woods_9' 
  },
  'woods_9': { 
    id: 'woods_9', 
    speaker: '系统', 
    speakerEn: 'System',
    speakerJa: 'システム',
    content: '李逵像拎小鸡一样把你扛到肩上，不顾你的抗议，大步流星地往山上跑去。',
    contentEn: 'Li Kui hoists you onto his shoulder like a little chick, ignoring your protests, and strides up the mountain with great speed.',
    contentJa: '李逵は抗議を無視して、あなたを雛鳥のように肩に担ぎ上げ、大股で山を駆け上がっていった。',
    background: BG_FOREST, 
    nextId: 'hall_entry' 
  },

  // --- 忠义堂：对话与公孙胜预言 ---
  'hall_entry': { 
    id: 'hall_entry', 
    speaker: '系统', 
    speakerEn: 'System',
    speakerJa: 'システム',
    content: '（你就这样地扛进了忠义堂，直到被李逵砰地一声丢在地砖上。）',
    contentEn: '(You were carried into the Hall of Loyalty and Justice just like that, until Li Kui tossed you onto the floor tiles with a thud.)',
    contentJa: '（あなたはそのまま忠義堂へと担ぎ込まれ、李逵によって床の上にドサリと放り出された。）',
    background: BG_CAMP, 
    nextId: 'hall_kui_explain' 
  },
  'hall_kui_explain': { 
    id: 'hall_kui_explain', 
    speaker: '李逵', 
    speakerEn: 'Li Kui',
    speakerJa: '李逵',
    characterId: 'likui', 
    content: '“哥哥，俺在林子里打旋，见这丫头从天上‘啪嗒’一下掉在俺脚跟前，俺还以为是个甚么野果，凑近一看才见是个活人！”',
    contentEn: '"Brother, I was wandering in the woods when this girl dropped from the sky right in front of me! I thought it was some kind of wild fruit, but when I looked closer, it was a living person!"',
    contentJa: '「兄貴、森をぶらついてたら、この小娘が空から俺の足元に降ってきたんだ！最初は何か珍しい果実かと思ったが、よく見たら生きた人間だったぜ！」',
    background: BG_CAMP, 
    nextId: 'hall_reaction_crowd' 
  },
  'hall_reaction_crowd': { 
    id: 'hall_reaction_crowd', 
    speaker: '系统', 
    speakerEn: 'System',
    speakerJa: 'システム',
    content: '堂上众人面面相觑。宋江手捋胡须，神色复杂地打量着你。',
    contentEn: 'Everyone in the hall looks at each other in bewilderment. Song Jiang strokes his beard, observing you with a complex expression.',
    contentJa: '堂内の人々は顔を見合わせた。宋江は髭をなでながら、複雑な表情であなたを観察している。',
    background: BG_CAMP, 
    nextId: 'hall_song_ask' 
  },
  'hall_song_ask': { 
    id: 'hall_song_ask', 
    speaker: '宋江', 
    speakerEn: 'Song Jiang',
    speakerJa: '宋江',
    content: '“你是何人？从何而来？为何突然现于我梁山泊？”',
    contentEn: '"Who are you? Where do you come from? Why did you suddenly appear in our Liangshan Marsh?"',
    contentJa: '「お前は何者だ？どこから来た？なぜ突然、我が梁山泊に現れたのだ？」',
    background: BG_CAMP, 
    nextId: 'hall_inner_monologue' 
  },
  'hall_inner_monologue': { 
    id: 'hall_inner_monologue', 
    speaker: '系统', 
    speakerEn: 'System',
    speakerJa: 'システム',
    content: '你揉了揉眼睛，抬头看了看大厅上方的牌匾，那上面赫然写着“忠义堂”三个大字',
    contentEn: 'You rub your eyes and look up at the plaque above the hall, where the three large characters "Hall of Loyalty and Justice" are clearly written.',
    contentJa: 'あなたは目をこすり、ホールの上にある扁額を見上げた。そこには「忠義堂」の三文字がはっきりと刻まれていた。',
    background: BG_CAMP, 
    nextId: 'hall_inner_shock' 
  },
  'hall_inner_shock': { 
    id: 'hall_inner_shock', 
    speaker: '{playerName}', 
    content: '（不会吧...这地方怎么跟我在电视剧里看到的忠义堂完全长一样啊...上面坐着的那个黑哥不会是宋江吧...那个秃子不会是鲁智深吧...我不会真穿进水浒传了吧）',
    contentEn: '(No way... How does this place look exactly like the Hall of Loyalty and Justice I saw on TV... That dark guy sitting up there can\'t be Song Jiang, can he... and that bald guy can\'t be Lu Zhishen... Have I really traveled into Water Margin?)',
    contentJa: '（嘘でしょ……ここ、テレビで見た忠義堂とそっくりじゃない……あそこに座ってる色黒の人はまさか宋江？あの坊主頭の人は魯智深？本当に水滸伝の世界に来ちゃったの？）',
    background: BG_CAMP, 
    nextId: 'hall_inner_monologue_2' 
  },
  'hall_inner_monologue_2': { 
    id: 'hall_inner_monologue_2', 
    speaker: '{playerName}', 
    content: '（冷静，一定要冷静。现在硬碰硬只有死路一条。看宋江的神色，似乎还在权衡。既然如此，不如先暂时配合，保住性命再寻良策……）',
    contentEn: '(Calm down, I must stay calm. Going head-to-head now is a dead end. Looking at Song Jiang\'s expression, he seems to be weighing his options. In that case, I should cooperate for now, save my life, and then find a way...)',
    contentJa: '（落ち着け、落ち着くんだ。今ここで逆らっても死ぬだけ。宋江の様子を見る限り、まだ測りかねているみたい。だったら、今は協力するふりをして、命を守りながら策を練るしかない……）',
    background: BG_CAMP, 
    nextId: 'hall_name_input' 
  },
  'hall_name_input': { 
    id: 'hall_name_input', 
    speaker: '系统', 
    speakerEn: 'System',
    speakerJa: 'システム',
    content: '请在这尺素纸上写下你的姓名：', 
    contentEn: 'Please write your name on this piece of paper:',
    contentJa: 'この紙にあなたの名前を書いてください：',
    background: BG_CAMP, 
    isNameInput: true, 
    nextId: 'hall_self_intro' 
  },
  'hall_self_intro': { 
    id: 'hall_self_intro', 
    speaker: '{playerName}', 
    content: '“我叫{playerName}，来自遥远的未来。我认识你们每一个人，梁山一百零八将的事迹在未来家喻户晓。”',
    contentEn: '"My name is {playerName}, and I come from the distant future. I know every one of you; the deeds of the 108 heroes of Liangshan are known to everyone in the future."',
    contentJa: '「私の名前は{playerName}、遠い未来から来ました。あなたたちのことは全員知っています。梁山泊百八星の物語は、未来では誰もが知る伝説なのです。」',
    background: BG_CAMP, 
    nextId: 'hall_crowd_doubt_1' 
  },
  'hall_crowd_doubt_1': { 
    id: 'hall_crowd_doubt_1', 
    speaker: '众好汉', 
    speakerEn: 'Heroes',
    speakerJa: '好漢たち',
    content: '“来自未来？简直是一派胡言！我看这丫头满口疯话，定是官府派来的细作，想以此脱身！”',
    contentEn: '"From the future? What utter nonsense! I think this girl is full of crazy talk, surely a spy sent by the government, trying to use this to escape!"',
    contentJa: '「未来から来ただと？デタラメを言うな！この小娘、狂ったふりをして逃げようとしている官府の間者に違いねえ！」',
    background: BG_CAMP, 
    nextId: 'hall_crowd_doubt_2' 
  },
  'hall_crowd_doubt_2': { 
    id: 'hall_crowd_doubt_2', 
    speaker: '刘唐', 
    speakerEn: 'Liu Tang',
    speakerJa: '劉唐',
    content: '“就是！瞧她这身奇装异服，非僧非俗，若不是妖人，便是奸细！哥哥，莫要听她胡诌，先关进大牢审个明白！”',
    contentEn: '"Exactly! Look at her strange clothes, neither monk nor commoner. If she isn\'t a sorceress, she\'s a spy! Brother, don\'t listen to her nonsense, throw her in the dungeon and interrogate her!"',
    contentJa: '「その通りだ！その妙な格好を見ろ、僧でも俗人でもねえ。妖術使いか間者のどちらかだ！兄貴、こいつのデタラメに耳を貸す必要はねえ、まずは牢にぶち込んで白状させようぜ！」',
    background: BG_CAMP, 
    nextId: 'hall_song_test' 
  },
  'hall_song_test': { 
    id: 'hall_song_test', 
    speaker: '宋江', 
    speakerEn: 'Song Jiang',
    speakerJa: '宋江',
    content: '（堂下一片哗然，众人议论纷纷，宋江微微眯起眼）“既然你自称认识我们，那我且问你，宋江当年究竟是如何上的这梁山？”',
    contentEn: '(The hall erupts in an uproar, everyone talking at once. Song Jiang narrows his eyes slightly.) "Since you claim to know us, let me ask you: how exactly did Song Jiang come to join Liangshan back then?"',
    contentJa: '（堂内は騒然となり、人々が口々に言い合う中、宋江はわずかに目を細めた）「我々のことを知っていると言うなら、一つ聞こう。この宋江が、かつていかにしてこの梁山泊に加わったか、答えてみよ。」',
    background: BG_CAMP, 
    choices: [
    { 
      text: '因怒杀阎婆惜被发配江州，后在浔阳楼题反诗被救上山。', 
      textEn: 'Banished to Jiangzhou for killing Yan Poxi in anger, then rescued and brought to the mountain after writing a rebellious poem at Xunyang Tower.',
      textJa: '閻婆惜を殺害した罪で江州へ流され、その後、潯陽楼で反詩を詠んだために救い出され、山へ迎えられた。',
      nextId: 'hall_song_verdict' 
    },
    { 
      text: '因为在京城卖保险赔个精光，为了躲债才跑来投奔晁盖。', 
      textEn: 'Because you lost everything selling insurance in the capital and fled to join Chao Gai to escape debt.',
      textJa: '都で保険を売って大損し、借金から逃れるために晁蓋を頼って逃げてきた。',
      nextId: 'game_over_hall' 
    }
  ]},
  'hall_song_verdict': { id: 'hall_song_verdict', speaker: '宋江', content: '“嗯。。。有点意思。诸位兄弟怎么看？”', background: BG_CAMP, nextId: 'hall_song_verdict_next' },
  'hall_song_verdict_next': { id: 'hall_song_verdict_next', speaker: '系统', content: '宋江手捋胡须，神情缓和了些。', background: BG_CAMP, nextId: 'hall_kui_support' },
  'hall_kui_support': { id: 'hall_kui_support', speaker: '李逵', characterId: 'likui', content: '“我看{playerName}还算机灵，不如留在梁山干活，正好我们缺人手。”', background: BG_CAMP, nextId: 'hall_hero_oppose' },
  'hall_hero_oppose': { id: 'hall_hero_oppose', speaker: '石秀', content: '“铁牛，你莫要胡闹！咱们梁山好汉顶天立地，虽不杀妇道人家，但山寨重地岂能容来路不明之人久留？依我看，打发她下山便是！”', background: BG_CAMP, nextId: 'hall_kui_rebuttal' },
  'hall_kui_rebuttal': { id: 'hall_kui_rebuttal', speaker: '李逵', characterId: 'likui', content: '“石秀兄弟，你这厮好生不爽利！这丫头从天而降，定是老天爷送来的，你赶她走，岂不是违了天意？俺偏要留她！”', background: BG_CAMP, sprite: LIKUI_ANGRY_PNG, nextId: 'hall_song_expel' },
  'game_over_hall': { id: 'game_over_hall', speaker: '宋江', content: '“满口胡言！宋某一生忠义，岂容你这厮在此瞎编乱造！来人，把这骗子赶出山寨，永世不得踏入！”', background: BG_BLACK, nextId: 'restart_game' },
  'hall_song_expel': { id: 'hall_song_expel', speaker: '宋江', content: '“石秀兄弟所言亦有理。我梁山虽广纳贤才，却也不留底细不明之人。铁牛，莫要再闹。来人，将这位姑娘带下去，送出山寨，莫要伤了她。”\n\n（两名校尉走上前来，一左一右架住了你的胳膊。）', background: BG_CAMP, choices: [
    { text: '“等等！我真的没有撒谎！”', nextId: 'hall_expel_plead_1' },
    { text: '（拼命挣扎）“放开我！你们这群土匪！”', nextId: 'hall_expel_struggle_1' }
  ]},
  'hall_expel_plead_1': { id: 'hall_expel_plead_1', speaker: '{playerName}', content: '“等等！我真的没有撒谎！我说的每一个字都是真的！你们不能就这样把我赶走！”你急切地大喊，试图挣脱校尉的束缚。', background: BG_CAMP, nextId: 'hall_expel_plead_2' },
  'hall_expel_plead_2': { id: 'hall_expel_plead_2', speaker: '系统', content: '堂上众人或是冷笑，或是摇头，宋江面无表情，只是挥了挥手示意校尉动作快些。', background: BG_CAMP, nextId: 'hall_gongsun_entry' },
  'hall_expel_struggle_1': { id: 'hall_expel_struggle_1', speaker: '{playerName}', content: '“放开我！你们这群土匪！这就是你们所谓的‘替天行道’吗？欺负一个弱女子算什么英雄好汉！”你一边挣扎一边愤怒地控诉。', background: BG_CAMP, nextId: 'hall_expel_struggle_2' },
  'hall_expel_struggle_2': { id: 'hall_expel_struggle_2', speaker: '系统', content: '“土匪”二字一出，厅内气氛瞬间降至冰点。', background: BG_CAMP, nextId: 'hall_gongsun_entry' },
  'hall_gongsun_entry': { id: 'hall_gongsun_entry', speaker: '公孙胜', content: '“且慢！动不得，万万动不得！……哥哥，快叫校尉退下！此子非凡间之人！贫道方才观星，见天狗食月，星宿移位，一道异芒坠于后山……竟应在此处！”', background: BG_CAMP, nextId: 'hall_song_scene_desc' },
  'hall_song_scene_desc': { id: 'hall_song_scene_desc', speaker: '系统', content: '只见一位道人疾步入厅。厅中一阵骚动。宋江抬手示意众人安静。', background: BG_CAMP, nextId: 'hall_song_ask_detail' },
  'hall_song_ask_detail': { id: 'hall_song_ask_detail', speaker: '宋江', content: '“公孙先生，且细说。”', background: BG_CAMP, nextId: 'hall_gongsun_reveal' },
  'hall_gongsun_reveal': { id: 'hall_gongsun_reveal', speaker: '公孙胜', content: '“此子魂魄之中，竟蕴含着极其浓郁的天罡地煞之气！此乃我梁山一百单八将之本命星力。如今星力无主，在其魂中如怒涛般冲撞不休。若放任不管……一则，此子肉身凡胎，百日之内必被星力撑爆，魂飞魄散；二则，星力暴走，恐会反噬我梁山诸位兄弟的本命星，致使气运衰败，性命堪忧！”', background: BG_CAMP, choices: [
    { text: '我就跟你们说了我不是一般人！', nextId: 'hall_kui_comment' },
    { text: '啊？？我吗....?', nextId: 'hall_kui_comment' }
  ]},
  'hall_kui_comment': { id: 'hall_kui_comment', speaker: '李逵', characterId: 'likui', content: '“俺就说！俺扛他回来时，觉着背上暖烘烘的，像扛了个小火炉！原来不是细作，是个小星宿？！”', background: BG_CAMP, nextId: 'hall_lu_comment' },
  'hall_lu_comment': { id: 'hall_lu_comment', speaker: '鲁智深', characterId: 'luzhishen', content: '“洒家方才也觉得稀奇，正想劝哥哥莫要急着赶人。寻常人见了铁牛这黑厮，早吓得尿裤子。{playerName}虽然狼狈，眼里却有光，不似奸邪之辈。若真与我梁山有这等缘分……见死不救，岂是好汉所为？”', background: BG_CAMP, nextId: 'hall_lujunyi_ask' },
  'hall_lujunyi_ask': { id: 'hall_lujunyi_ask', speaker: '林冲', characterId: 'linchong', content: '“先生之意，是必须救？如何救？”', background: BG_CAMP, nextId: 'hall_lujunyi_ask_next' },
  'hall_lujunyi_ask_next': { id: 'hall_lujunyi_ask_next', speaker: '系统', content: '林冲看向公孙胜。', background: BG_CAMP, nextId: 'hall_gongsun_solution' },
  'hall_gongsun_solution': { id: 'hall_gongsun_solution', speaker: '公孙胜', content: '“唯有寻回散落四方的《天罡星谱》四卷残章。此书乃是上应天命、下契地脉的奇书，记载着一百单八将的真元轨迹。你身为异界之人，魂魄如无根浮萍，唯有集齐这四卷残章，借其中蕴含的‘四象星元’之力，方能构筑起跨越虚空的‘星桥’。若无此桥，纵使你有通天之能，也无法穿透这重重位面，寻回故土。”', background: BG_CAMP, nextId: 'hall_player_ask_home' },
  'hall_player_ask_home': { id: 'hall_player_ask_home', speaker: '{playerName}', content: '“公孙先生，如果我真的集齐了那四卷残章，是不是就一定能回到我原来的世界？”你紧紧盯着公孙胜，声音中带着一丝颤抖和希冀。', background: BG_CAMP, nextId: 'hall_gongsun_uncertain' },
  'hall_gongsun_uncertain': { id: 'hall_gongsun_uncertain', speaker: '公孙胜', content: '公孙胜沉默了片刻，轻轻摇了摇头：“天机变幻莫测，贫道亦不敢断言。集齐残章只是给了你一个‘可能’，至于最终能否功成……唯有尽人事，听天命。但若不试这一试，你便连这万分之一的机会也将失去。”', background: BG_CAMP, nextId: 'hall_song_ask_backlash' },
  'hall_song_ask_backlash': { id: 'hall_song_ask_backlash', speaker: '宋江', content: '“公孙先生，宋某还有一事不明。为何这位小友身上的星力，会反噬我梁山诸位兄弟？这其中究竟有何因果？”', background: BG_CAMP, nextId: 'hall_gongsun_backlash_reply' },
  'hall_gongsun_backlash_reply': { id: 'hall_gongsun_backlash_reply', speaker: '公孙胜', content: '“回哥哥，这其中的因果牵连极深，贫道目前亦未能窥见全貌。或许是因为此子并非本界之人，其魂魄与我等星宿本源产生了某种奇特的共振……贫道还需要些时间，开坛做法，仔细推演一番。”', background: BG_CAMP, nextId: 'hall_song_command' },
  'hall_song_command': { id: 'hall_song_command', speaker: '宋江', content: '“众位兄弟都听到了。此事，关乎这位小友的生死，亦关乎我梁山气运根基. 小友，你虽来路奇异，但既怀我梁山星力，便与我等有了因果. 我梁山泊替天行道，讲的是一个‘义’字. 今日，这桩事，宋江管了。”', background: BG_CAMP, nextId: 'hall_song_welcome' },
  'hall_song_welcome': { id: 'hall_song_welcome', speaker: '宋江', content: '“{playerName}小友，从今日起，梁山便是你暂时安身之所. 望你与我等兄弟，同心协力，共渡此劫.”', background: BG_CAMP, choices: [
    { text: '为了活命，我愿意留在梁山！', nextId: 'hall_player_sigh' }
  ]},
  'hall_player_sigh': { id: 'hall_player_sigh', speaker: '{playerName}', content: '“啊？？???。。。。。。啊。。。好。。。我还能说什么呢。。。。”', background: BG_CAMP, nextId: 'day2_start' },

  // --- 第二天：特训 ---
  'day2_start': { id: 'day2_start', speaker: '系统', content: '第二天清晨。门砰地一声被撞开了，李逵闯了进来。', background: BG_CAVE, nextId: 'day2_kui_naked' },
  'day2_kui_naked': { id: 'day2_kui_naked', speaker: '{playerName}', content: '“哇！李铁牛你进屋不敲门吗！”你还没穿好衣服，手忙脚乱地抓过外褂。', background: BG_CAVE, nextId: 'day2_kui_oblivious' },
  'day2_kui_oblivious': { id: 'day2_kui_oblivious', speaker: '李逵', characterId: 'likui', content: '“敲甚么门！俺要带你去特训！快穿上衣服，迟了俺就扛你走！”', background: BG_CAVE, sprite: LIKUI_ANGRY_PNG, nextId: 'day2_kui_monologue' },
  'day2_kui_monologue': { id: 'day2_kui_monologue', speaker: '{playerName}', content: '“。。。真是无语。”看着铁牛风风火火的背影，你叹了口气，只能认命地跟上。', background: BG_CAVE, nextId: 'day2_kui_black_forest' },
  'day2_kui_black_forest': { id: 'day2_kui_black_forest', speaker: '系统', content: '树林中', background: BG_BLACK, nextId: 'day2_kui_pre_1' },
  'day2_kui_pre_1': { id: 'day2_kui_pre_1', speaker: '李逵', characterId: 'likui', content: '“跑起来！别磨蹭！这山路要是都走不动，以后怎么跟着俺杀敌！”', background: BG_FOREST, sprite: LIKUI_ANGRY_PNG, nextId: 'day2_kui_pre_2' },
  'day2_kui_pre_2': { id: 'day2_kui_pre_2', speaker: '{playerName}', content: '“呼……呼……铁牛大哥，我的腿快断了……”你喘得像拉风箱一样。', background: BG_FOREST, nextId: 'day2_kui_pre_3' },
  'day2_kui_pre_3': { id: 'day2_kui_pre_3', speaker: '李逵', characterId: 'likui', content: '“断了俺给你接上！瞧你这细身板，非得好好练练这底气不可。”', background: BG_FOREST, nextId: 'day2_kui_pre_4' },
  'day2_kui_pre_4': { id: 'day2_kui_pre_4', speaker: '系统', content: '李逵在前面健步如飞，你虽然累得半死，却发现跟着他的节奏，体内的灵气似乎也在有规律地律动。', background: BG_FOREST, nextId: 'day2_kui_pre_5' },
  'day2_kui_pre_5': { id: 'day2_kui_pre_5', speaker: '李逵', characterId: 'likui', content: '“快快快！前面那个坡，冲上去！冲不上去俺就在后面用板斧给你‘助推’！”', background: BG_FOREST, sprite: LIKUI_ANGRY_PNG, nextId: 'day2_kui_pre_6' },
  'day2_kui_pre_6': { id: 'day2_kui_pre_6', speaker: '{playerName}', content: '你看着他挥舞的斧子，求生欲爆发，居然真的拔腿狂奔。', background: BG_FOREST, nextId: 'day2_kui_run_stat' },
  'day2_kui_run_stat': { 
    id: 'day2_kui_run_stat', 
    speaker: '系统', 
    content: '系统提示：在狂奔十公里后，你的体重属性 -1', 
    background: BG_FOREST, 
    choices: [
      { text: '（呼...累死了）', nextId: 'day2_kui_pre_11', attributeBonus: { weight: -1 } }
    ]
  },
  'day2_kui_pre_11': { id: 'day2_kui_pre_11', speaker: '李逵', characterId: 'likui', content: '“嘿！这汗出得透，精神多了？这就叫脱胎换骨！”', background: BG_FOREST, nextId: 'day2_kui_吼_1' },
  'day2_kui_吼_1': { id: 'day2_kui_吼_1', speaker: '李逵', characterId: 'likui', content: '“停！到这儿就行. 现在俺教你最重要的：吼出来！气沉丹田，大喊一声——”', background: BG_FOREST, choices: [
    { text: '滚！！', nextId: 'day2_kui_shout_success', affectionBonus: { charId: 'likui', points: 1 }, attributeBonus: { strength: 1 } },
    { text: '（还是算了吧，太羞耻了）', nextId: 'day2_kui_shout_response_fail', affectionBonus: { charId: 'likui', points: 1 } }
  ]},
  'day2_kui_shout_success': { id: 'day2_kui_shout_success', speaker: '{playerName}', content: '“滚！！！”你用尽全身力气大喊，感觉一股热气从脚底直冲天灵盖。', background: BG_FOREST, nextId: 'day2_kui_shout_response_ok' },
  'day2_kui_shout_response_ok': { id: 'day2_kui_shout_response_ok', speaker: '李逵', characterId: 'likui', content: '“哈哈！好！作为我们梁山好汉，从气势上就不能输！”', background: BG_FOREST, nextId: 'day2_kui_shout_next_sys' },
  'day2_kui_shout_response_fail': { id: 'day2_kui_shout_response_fail', speaker: '李逵', characterId: 'likui', content: '“害臊什么！真没出息！”', background: BG_FOREST, sprite: LIKUI_ANGRY_PNG, nextId: 'day2_kui_shout_next_sys' },

  'day2_kui_shout_next_sys': { id: 'day2_kui_shout_next_sys', speaker: '系统', content: '你们正准备继续训练，忽然远远看见一道魁梧的身影从对面走来——你与李逵同时回过头来', background: BG_FOREST, nextId: 'day2_kui_tease_lu' },
  'day2_kui_tease_lu': { id: 'day2_kui_tease_lu', speaker: '李逵', characterId: 'likui', content: '“哈哈！那边的秃和尚，挑这几担水晃晃悠悠的，莫不如昨日又偷喝了哥哥的陈年好酒，腿软了？”', background: BG_FOREST, nextId: 'day2_see_lu' },
  'day2_see_lu': { id: 'day2_see_lu', speaker: '系统', content: '你正憋足了劲，忽然看到远处的鲁智深挑着两桶水稳步走来。', background: BG_FOREST, nextId: 'day2_lu_chat' },
  'day2_lu_chat': { id: 'day2_lu_chat', speaker: '鲁智深', characterId: 'luzhishen', content: '“铁牛休要胡说. 洒家这是去后山竹林禅修，顺便躲个清静. {playerName}姑娘若是有意，明日可来竹林寻洒家，教你几招定心的本事，总好过在这林子里乱吼. 怎么样，明日可愿来？”', background: BG_FOREST, choices: [
    { text: '（坚定地）我想跟铁牛大哥多学学。', nextId: 'day2_choice_stay_kui_lu_msg', affectionBonus: { charId: 'likui', points: 15 } },
    { text: '（礼貌地）好，明天我去竹林找大师。', nextId: 'day2_choice_accept_lu', affectionBonus: { charId: 'luzhishen', points: 1 } }
  ]},
  'day2_choice_stay_kui_lu_msg': { id: 'day2_choice_stay_kui_lu_msg', speaker: '鲁智深', characterId: 'luzhishen', content: '“既然如此，洒家也不强求. 你若想听禅定心，随时可来寻洒家.”', background: BG_FOREST, nextId: 'day2_choice_stay_kui' },
  'day2_choice_stay_kui': { id: 'day2_choice_stay_kui', speaker: '李逵', characterId: 'likui', content: '“哈哈！够意思！还是俺带你练带劲！”', background: BG_FOREST, nextId: 'day2_choice_stay_kui_t' },
  'day2_choice_stay_kui_t': { id: 'day2_choice_stay_kui_t', speaker: '李逵', characterId: 'likui', content: '“来，接着吼！要把肚子里那口恶气全撒出来！”', background: BG_FOREST, nextId: 'day2_gongsun_arrive_kui' },

  // --- 第二天结尾：公孙胜赠予法器剧情 ---
  'day2_gongsun_arrive_kui': { id: 'day2_gongsun_arrive_kui', speaker: '系统', content: '你深吸一口气，正无奈地准备再次发出那羞耻的呐喊，林间忽然起了一阵清风，公孙胜不知何时已站在了你们身后。', background: BG_FOREST, nextId: 'day2_gongsun_chat_1_kui' },
  'day2_gongsun_arrive_lu': { id: 'day2_gongsun_arrive_lu', speaker: '系统', content: '你正咬牙坚持着马步，汗水顺着脸颊滑落，林间忽然起了一阵清风，公孙胜不知何时已站在了你们身后。', background: BG_FOREST, nextId: 'day2_gongsun_chat_1_lu' },

  'day2_gongsun_chat_1_kui': { id: 'day2_gongsun_chat_1_kui', speaker: '李逵', characterId: 'likui', content: '“公孙哥哥！你来得正好，俺正带这小文书特训呢！”', background: BG_FOREST, nextId: 'day2_gongsun_chat_2_kui' },
  'day2_gongsun_chat_1_lu': { id: 'day2_gongsun_chat_1_lu', speaker: '李逵', characterId: 'likui', content: '“公孙哥哥！你来得正好，俺正带这小文书特训呢！”', background: BG_FOREST, nextId: 'day2_gongsun_chat_2_lu' },

  'day2_gongsun_chat_2_kui': { id: 'day2_gongsun_chat_2_kui', speaker: '公孙胜', characterId: 'gongsunsheng', content: '“呵呵，铁牛，贫道此番前来并非偶遇，而是专程为这位小友而来。”', background: BG_FOREST, choices: [
    { text: '“专程为我而来？难道是残卷有了消息？”', nextId: 'day2_gongsun_purpose_kui' }
  ]},
  'day2_gongsun_chat_2_lu': { id: 'day2_gongsun_chat_2_lu', speaker: '公孙胜', characterId: 'gongsunsheng', content: '“呵呵，铁牛，贫道此番前来并非偶遇，而是专程为这位小友而来。”', background: BG_FOREST, choices: [
    { text: '“专程为我而来？难道是残卷有了消息？”', nextId: 'day2_gongsun_purpose_lu' }
  ]},

  'day2_gongsun_reveal_kui': { id: 'day2_gongsun_reveal_kui', speaker: '公孙胜', characterId: 'gongsunsheng', content: '“一百零八星宿散落世间，你无需刻意寻觅。当你靠近那些转世之人，若其内心正经历剧烈的情绪波动——无论是往昔的遗憾、深藏的痛楚，还是难以言说的执念，星魂坠便会发烫。”', background: BG_FOREST, nextId: 'day2_gongsun_reveal_2_kui' },
  'day2_gongsun_reveal_2_kui': { id: 'day2_gongsun_reveal_2_kui', speaker: '公孙胜', characterId: 'gongsunsheng', content: '“那股灼热便是灵魂的共鸣。当它发烫时，你便知晓，一段尘封的往事正等着你去揭开。好了，此番来意已尽，贫道去也。”', background: BG_FOREST, nextId: 'day2_gongsun_leave_kui' },

  'day2_gongsun_reveal_lu': { id: 'day2_gongsun_reveal_lu', speaker: '公孙胜', characterId: 'gongsunsheng', content: '“一百零八星宿散落世间，你无需刻意寻觅。当你靠近那些转世之人，若其内心正经历剧烈的情绪波动——无论是往昔的遗憾、深藏的痛楚，还是难以言说的执念，星魂坠便会发烫。”', background: BG_FOREST, nextId: 'day2_gongsun_reveal_2_lu' },
  'day2_gongsun_reveal_2_lu': { id: 'day2_gongsun_reveal_2_lu', speaker: '公孙胜', characterId: 'gongsunsheng', content: '“那股灼热便是灵魂的共鸣。当它发烫时，你便知晓，一段尘封的往事正等着你去揭开。好了，此番来意已尽，贫道去也。”', background: BG_FOREST, nextId: 'day2_gongsun_leave_lu' },

  'day2_gongsun_purpose_kui': { id: 'day2_gongsun_purpose_kui', speaker: '公孙胜', characterId: 'gongsunsheng', content: '“残卷之事，急不得，亦慢不得。贫道观你星力渐稳，但神魂尚缺一物引路，特来相赠。特训固然能壮胆，但要寻回那散落的残卷，光靠蛮力可不够。”', background: BG_FOREST, nextId: 'day2_gongsun_item_1_kui' },
  'day2_gongsun_purpose_lu': { id: 'day2_gongsun_purpose_lu', speaker: '公孙胜', characterId: 'gongsunsheng', content: '“残卷之事，急不得，亦慢不得。贫道观你星力渐稳，但神魂尚缺一物引路，特来相赠。特训固然能壮胆，但要寻回那散落的残卷，光靠蛮力可不够。”', background: BG_FOREST, nextId: 'day2_gongsun_item_1_lu' },

  'day2_gongsun_item_1_kui': { id: 'day2_gongsun_item_1_kui', speaker: '公孙胜', characterId: 'gongsunsheng', content: '“小友，此物你且收好。”公孙胜从袖中取出一枚晶莹剔透的吊坠，递到你手中。', background: BG_FOREST, nextId: 'day2_gongsun_item_2_kui' },
  'day2_gongsun_item_1_lu': { id: 'day2_gongsun_item_1_lu', speaker: '公孙胜', characterId: 'gongsunsheng', content: '“小友，此物你且收好。”公孙胜从袖中取出一枚晶莹剔透的吊坠，递到你手中。', background: BG_FOREST, nextId: 'day2_gongsun_item_2_lu' },

  'day2_gongsun_item_2_kui': { id: 'day2_gongsun_item_2_kui', speaker: '{playerName}', content: '“这是……吊坠？是用来防身的法器吗？”你好奇地打量着这枚微微发光的坠子。', background: BG_FOREST, nextId: 'day2_gongsun_item_3_kui' },
  'day2_gongsun_item_2_lu': { id: 'day2_gongsun_item_2_lu', speaker: '{playerName}', content: '“这是……吊坠？是用来防身的法器吗？”你好奇地打量着这枚微微发光的坠子。', background: BG_FOREST, nextId: 'day2_gongsun_item_3_lu' },

  'day2_gongsun_item_3_kui': { id: 'day2_gongsun_item_3_kui', speaker: '公孙胜', characterId: 'gongsunsheng', content: '“此乃‘星魂坠’。你要找的‘忠、义、勇、谋’四卷残卷，并非实物，而是往往藏在英雄们的‘心魔’或‘遗憾’之中。”', background: BG_FOREST, nextId: 'day2_gongsun_item_4_kui' },
  'day2_gongsun_item_3_lu': { id: 'day2_gongsun_item_3_lu', speaker: '公孙胜', characterId: 'gongsunsheng', content: '“此乃‘星魂坠’。你要找的‘忠、义、勇、谋’四卷残卷，并非实物，而是往往藏在英雄们的‘心魔’或‘遗憾’之中。”', background: BG_FOREST, nextId: 'day2_gongsun_item_4_lu' },

  'day2_gongsun_item_4_kui': { id: 'day2_gongsun_item_4_kui', speaker: '公孙胜', characterId: 'gongsunsheng', content: '“当你靠近那些星宿转世之人，若对方情绪波动剧烈，吊坠便会发烫。届时你可激活它，进入对方的‘记忆空间’。”', background: BG_FOREST, nextId: 'day2_gongsun_item_5_kui' },
  'day2_gongsun_item_4_lu': { id: 'day2_gongsun_item_4_lu', speaker: '公孙胜', characterId: 'gongsunsheng', content: '“当你靠近那些星宿转世之人，若对方情绪波动剧烈，吊坠便会发烫。届时你可激活它，进入对方的‘记忆空间’。”', background: BG_FOREST, nextId: 'day2_gongsun_item_5_lu' },

  'day2_gongsun_item_5_kui': { id: 'day2_gongsun_item_5_kui', speaker: '公孙胜', characterId: 'gongsunsheng', content: '“在梦境中，你将以旁观者的身份参与他们的过去。唯有做出正确的抉择，解开他们的心结，残卷的线索才会显现。”', background: BG_FOREST, nextId: 'day2_gongsun_item_6_kui' },
  'day2_gongsun_item_5_lu': { id: 'day2_gongsun_item_5_lu', speaker: '公孙胜', characterId: 'gongsunsheng', content: '“在梦境中，你将以旁观者的身份参与他们的过去。唯有做出正确的抉择，解开他们的心结，残卷的线索才会显现。”', background: BG_FOREST, nextId: 'day2_gongsun_item_6_lu' },

  'day2_gongsun_item_6_kui': { id: 'day2_gongsun_item_6_kui', speaker: '{playerName}', content: '“也就是说……我要深入他们灵魂最脆弱的地方，去拯救他们？”', background: BG_FOREST, nextId: 'day2_gongsun_item_7_kui' },
  'day2_gongsun_item_6_lu': { id: 'day2_gongsun_item_6_lu', speaker: '{playerName}', content: '“也就是说……我要深入他们灵魂最脆弱的地方，去拯救他们？”', background: BG_FOREST, nextId: 'day2_gongsun_item_7_lu' },

  'day2_gongsun_item_7_kui': { id: 'day2_gongsun_item_7_kui', speaker: '公孙胜', characterId: 'gongsunsheng', content: '“然也。英雄亦有泪，壮士也断肠。去吧，去读懂他们的心，那才是梁山真正的魂魄所在。”', background: BG_FOREST, nextId: 'day2_gongsun_ask_final_kui' },
  'day2_gongsun_item_7_lu': { id: 'day2_gongsun_item_7_lu', speaker: '公孙胜', characterId: 'gongsunsheng', content: '“然也。英雄亦有泪，壮士也断肠。去吧，去读懂他们的心，那才是梁山真正的魂魄所在。”', background: BG_FOREST, nextId: 'day2_gongsun_ask_final_lu' },

  'day2_gongsun_ask_final_kui': { id: 'day2_gongsun_ask_final_kui', speaker: '{playerName}', content: '“道长，那我要如何识别谁才是星宿转世……”', background: BG_FOREST, nextId: 'day2_gongsun_leave_kui' },
  'day2_gongsun_ask_final_lu': { id: 'day2_gongsun_ask_final_lu', speaker: '{playerName}', content: '“道长，那我要如何识别谁才是星宿转世……”', background: BG_FOREST, nextId: 'day2_gongsun_leave_lu' },

  'day2_gongsun_leave_kui': { id: 'day2_gongsun_leave_kui', speaker: '系统', content: '你话音未落，公孙胜的身影已如烟雾般消散在林间。你握紧了手中的星魂坠，感到一股温热的力量在掌心流转。', background: BG_FOREST, nextId: 'day2_night_kui_1' },
  'day2_gongsun_leave_lu': { id: 'day2_gongsun_leave_lu', speaker: '系统', content: '你话音未落，公孙胜的身影已如烟雾般消散在林间。你握紧了手中的星魂坠，感到一股温热的力量在掌心流转。', background: BG_FOREST, nextId: 'day2_night_lu_1' },

  // --- 第二天夜晚：独自复盘与思乡 ---
  'day2_night_kui_1': { id: 'day2_night_kui_1', speaker: '系统', content: '夜深了，梁山的喧嚣渐渐散去。你独自回到房间，坐在桌前，看着摇曳的烛火。', background: BG_NIGHT, nextId: 'day2_night_kui_3' },
  'day2_night_kui_3': { id: 'day2_night_kui_3', speaker: '{playerName}', content: '（如果是在家里，这时候我应该正刷着手机，喝着冰可乐，吐槽着无脑的剧集吧？而不是在这里担心什么星力暴走，还要被铁牛拽着去跑操，甚至还要学什么“吼出来”……）', background: BG_NIGHT, nextId: 'day2_night_kui_4' },
  'day2_night_kui_4': { id: 'day2_night_kui_4', speaker: '{playerName}', content: '（公孙胜说我的命运和梁山息息相关。这到底意味着什么？我真的能集齐残卷回家吗？还是说，我会永远留在这个充满杀伐与义气的时代，直到神魂俱灭？）', background: BG_NIGHT, nextId: 'day2_night_kui_5' },
  'day2_night_kui_5': { id: 'day2_night_kui_5', speaker: '系统', content: '你叹了口气，吹灭蜡烛躺在床上。在不安与思念中，你渐渐进入了梦乡。', background: BG_BLACK, nextId: 'day2_night_attack_start_kui' },

  // --- 分支：答应鲁智深后的后续 ---
  'day2_choice_accept_lu': { id: 'day2_choice_accept_lu', speaker: '李逵', characterId: 'likui', content: '“呸！那老和尚除了喝酒就是念经，有甚么好见的！”李逵虽然嘴上骂着，还是没松开拽着你手腕的手。', background: BG_FOREST, nextId: 'day2_lu_kui_1' },
  'day2_lu_kui_1': { id: 'day2_lu_kui_1', speaker: '李逵', characterId: 'likui', content: '“答应归答应，今天你还是俺的人！来，给俺扎半个时辰马步！”', background: BG_FOREST, nextId: 'day2_lu_kui_2' },
  'day2_lu_kui_2': { id: 'day2_lu_kui_2', speaker: '{playerName}', content: '“半个时辰？铁牛大哥，我的腿会断的……”你惨叫着被强行按了下去。', background: BG_FOREST, nextId: 'day2_lu_kui_3' },
  'day2_lu_kui_3': { id: 'day2_lu_kui_3', speaker: '李逵', characterId: 'likui', content: '“断了俺背你！这腰给俺挺直了！扎够了，明天爱找谁找谁去！”', background: BG_FOREST, nextId: 'day2_gongsun_arrive_lu' },

  'day2_night_lu_1': { id: 'day2_night_lu_1', speaker: '系统', content: '夜深了，梁山的喧嚣渐渐散去。你独自回到房间，坐在桌前，看着摇曳的烛火。', background: BG_NIGHT, nextId: 'day2_night_lu_3' },
  'day2_night_lu_3': { id: 'day2_night_lu_3', speaker: '{playerName}', content: '（如果是在家里，这时候我应该正刷着手机，喝着冰可乐，吐槽着无脑的剧集吧？而不是在这里担心什么星力暴走，还要被铁牛拽着去跑操，甚至还要学什么“吼出来”……）', background: BG_NIGHT, nextId: 'day2_night_lu_4' },
  'day2_night_lu_4': { id: 'day2_night_lu_4', speaker: '{playerName}', content: '（公孙胜说我的命运和梁山息息相关。这到底意味着什么？我真的能集齐残卷回家吗？还是说，我会永远留在这个充满杀伐与义气的时代，直到神魂俱灭？）', background: BG_NIGHT, nextId: 'day2_night_lu_5' },
  'day2_night_lu_5': { id: 'day2_night_lu_5', speaker: '系统', content: '你叹了口气，吹灭蜡烛躺在床上。在不安与思念中，你渐渐进入了梦乡。', background: BG_BLACK, nextId: 'day2_night_attack_start_lu' },

  // --- 第二天深夜：突发袭击剧情 (通用逻辑) ---
  'day2_night_attack_start_kui': { id: 'day2_night_attack_start_kui', speaker: '系统', content: '入夜，梁山泊北山房内。寒风吹得窗棂格格作响。你独处室内，灯火忽明忽暗。', background: BG_NIGHT, nextId: 'day2_night_attack_noise_kui' },
  'day2_night_attack_start_lu': { id: 'day2_night_attack_start_lu', speaker: '系统', content: '入夜，梁山泊北山房内。寒风吹得窗棂格格作响。你独处室内，灯火忽明忽暗。', background: BG_NIGHT, nextId: 'day2_night_attack_noise_lu' },
  
  'day2_night_attack_noise_kui': { id: 'day2_night_attack_noise_kui', speaker: '系统', content: '你正准备熄灯，忽然听到房梁上传来轻微的木材挤压声。', background: BG_NIGHT, nextId: 'day2_night_attack_breakin_kui' },
  'day2_night_attack_noise_lu': { id: 'day2_night_attack_noise_lu', speaker: '系统', content: '你正准备熄灯，忽然听到房梁上传来轻微的木材挤压声。', background: BG_NIGHT, nextId: 'day2_night_attack_breakin_lu' },

  'day2_night_attack_breakin_kui': { id: 'day2_night_attack_breakin_kui', speaker: '系统', content: '一个黑影从窗外闪过，紧接着房门被重重踢开！两名蒙面歹徒闯了进来。', background: BG_NIGHT, nextId: 'day2_night_attack_crisis_kui' },
  'day2_night_attack_breakin_lu': { id: 'day2_night_attack_breakin_lu', speaker: '系统', content: '一个黑影从窗外闪过，紧接着房门被重重踢开！两名蒙面歹徒闯了进来。', background: BG_NIGHT, nextId: 'day2_night_attack_crisis_lu' },

  'day2_night_attack_crisis_kui': { id: 'day2_night_attack_crisis_kui', speaker: '系统', content: '歹徒持短刀逼近，你在退后时撞翻了烛台，屋内陷入黑暗。其中一人低声狞笑：“交出公孙胜给你的宝贝！”', background: BG_BLACK, nextId: 'day2_night_attack_choice_kui' },
  'day2_night_attack_crisis_lu': { id: 'day2_night_attack_crisis_lu', speaker: '系统', content: '歹徒持短刀逼近，你在退后时撞翻了烛台，屋内陷入黑暗。其中一人低声狞笑：“交出公孙胜给你的宝贝！”', background: BG_BLACK, nextId: 'day2_night_attack_choice_lu' },

  'day2_night_attack_choice_kui': { id: 'day2_night_attack_choice_kui', speaker: '系统', content: '危急时刻，你打算怎么办？', background: BG_BLACK, choices: [
    { text: '【大声呼救】救命啊！！', nextId: 'day2_night_attack_rescue_kui', attributeBonus: { intelligence: -1, strength: 1 } },
    { text: '【抄起板凳反抗】跟你们拼了！', nextId: 'day2_night_attack_rescue_kui', attributeBonus: { strength: 3, weight: 1 } }
  ]},
  'day2_night_attack_choice_lu': { id: 'day2_night_attack_choice_lu', speaker: '系统', content: '危急时刻，你打算怎么办？', background: BG_BLACK, choices: [
    { text: '【大声呼救】救命啊！！', nextId: 'day2_night_attack_rescue_lu', attributeBonus: { intelligence: -1, strength: 1 } },
    { text: '【抄起板凳反抗】跟你们拼了！', nextId: 'day2_night_attack_rescue_lu', attributeBonus: { strength: 3, weight: 1 } }
  ]},

  'day2_night_attack_rescue_kui': { id: 'day2_night_attack_rescue_kui', speaker: '系统', content: '就在歹徒即将攻击你的刹那，黑暗中一道银光破窗而入！那是长枪的尖刃，精准地挑开了歹徒的短刀。', background: BG_BLACK, nextId: 'day2_night_attack_pendant_react_kui' },
  'day2_night_attack_rescue_lu': { id: 'day2_night_attack_rescue_lu', speaker: '系统', content: '就在歹徒即将攻击你的刹那，黑暗中一道银光破窗而入！那是长枪的尖刃，精准地挑开了歹徒的短刀。', background: BG_BLACK, nextId: 'day2_night_attack_pendant_react_lu' },

  'day2_night_attack_pendant_react_kui': { id: 'day2_night_attack_pendant_react_kui', speaker: '系统', content: '就在那银光闪现的瞬间，你胸前的星魂坠忽然变得滚烫，仿佛在感应着某种深沉而压抑的灵魂波动。', background: BG_BLACK, nextId: 'day2_night_attack_lin_silhouette_kui' },
  'day2_night_attack_pendant_react_lu': { id: 'day2_night_attack_pendant_react_lu', speaker: '系统', content: '就在那银光闪现的瞬间，你胸前的星魂坠忽然变得滚烫，仿佛在感应着某种深沉而压抑的灵魂波动。', background: BG_BLACK, nextId: 'day2_night_attack_lin_silhouette_lu' },

  'day2_night_attack_lin_silhouette_kui': { id: 'day2_night_attack_lin_silhouette_kui', speaker: '系统', content: '和月光透过的瞬间，你能看到一个披着素色斗篷、身形修长稳健的剪影。他出招极快且克制，仅用枪尖扫过歹徒手腕，便令其痛呼倒地。', background: BG_NIGHT, nextId: 'day2_night_attack_lin_voice_kui' },
  'day2_night_attack_lin_silhouette_lu': { id: 'day2_night_attack_lin_silhouette_lu', speaker: '系统', content: '和月光透过的瞬间，你能看到一个披着素色斗篷、身形修长稳健的剪影。他出招极快且克制，仅用枪尖扫过歹徒手腕，便令其痛呼倒地。', background: BG_NIGHT, nextId: 'day2_night_attack_lin_voice_lu' },

  'day2_night_attack_lin_voice_kui': { id: 'day2_night_attack_lin_voice_kui', speaker: '神秘人', content: '“梁山禁地，岂容尔等作乱？滚。”对方声音低沉且带有某种由于压抑而产生的磁性。', background: BG_NIGHT, nextId: 'day2_night_attack_flee_kui' },
  'day2_night_attack_lin_voice_lu': { id: 'day2_night_attack_lin_voice_lu', speaker: '神秘人', content: '“梁山禁地，岂容尔等作乱？滚。”对方声音低沉且带有某种由于压抑而产生的磁性。', background: BG_NIGHT, nextId: 'day2_night_attack_flee_lu' },

  'day2_night_attack_flee_kui': { id: 'day2_night_attack_flee_kui', speaker: '系统', content: '歹徒连滚带爬逃走。神秘人站在暗处，并没有上前扶起你，而是保持着礼貌而疏远的距离。', background: BG_NIGHT, nextId: 'day2_night_attack_heroes_arrive_kui' },
  'day2_night_attack_flee_lu': { id: 'day2_night_attack_flee_lu', speaker: '系统', content: '歹徒连滚带爬逃走。神秘人站在暗处，并没有上前扶起你，而是保持着礼貌而疏远的距离。', background: BG_NIGHT, nextId: 'day2_night_attack_heroes_arrive_lu' },

  'day2_night_attack_heroes_arrive_kui': { id: 'day2_night_attack_heroes_arrive_kui', speaker: '系统', content: '就在此时，一阵急促的脚步声传来。梁山的其他好汉被惊动，纷纷跑来查看情况。神秘人见状，趁乱悄然离开了。', background: BG_NIGHT, nextId: 'day2_night_attack_interrogation_1_kui' },
  'day2_night_attack_heroes_arrive_lu': { id: 'day2_night_attack_heroes_arrive_lu', speaker: '系统', content: '就在此时，一阵急促的脚步声传来。梁山的其他好汉被惊动，纷纷跑来查看情况。神秘人见状，趁乱悄然离开了。', background: BG_NIGHT, nextId: 'day2_night_attack_interrogation_1_lu' },

  'day2_night_attack_interrogation_1_kui': { id: 'day2_night_attack_interrogation_1_kui', speaker: '系统', content: '以李逵为首的众好汉将那两名还没跑远的歹徒团团围住。李逵瞪着铜铃般的大眼，一把揪住其中一人的衣领。', background: BG_NIGHT, nextId: 'day2_night_attack_interrogation_2_kui' },
  'day2_night_attack_interrogation_2_kui': { id: 'day2_night_attack_interrogation_2_kui', speaker: '李逵', characterId: 'likui', content: '“说！哪个借你们的胆子，敢在梁山上撒野？！”', background: BG_NIGHT, sprite: LIKUI_ANGRY_PNG, nextId: 'day2_night_attack_reveal_1_kui' },
  
  'day2_night_attack_interrogation_1_lu': { id: 'day2_night_attack_interrogation_1_lu', speaker: '系统', content: '以李逵为首的众好汉将那两名还没跑远的歹徒团团围住。李逵瞪着铜铃般的大眼，一把揪住其中一人的衣领。', background: BG_NIGHT, nextId: 'day2_night_attack_interrogation_2_lu' },
  'day2_night_attack_interrogation_2_lu': { id: 'day2_night_attack_interrogation_2_lu', speaker: '李逵', characterId: 'likui', content: '“说！哪个借你们的胆子，敢在梁山上撒野？！”', background: BG_NIGHT, sprite: LIKUI_ANGRY_PNG, nextId: 'day2_night_attack_reveal_1_lu' },

  'day2_night_attack_reveal_1_kui': { id: 'day2_night_attack_reveal_1_kui', speaker: '系统', content: '经过一番就地审问，真相大白。原来这两人是山寨中尚未被完全收服的小喽啰。', background: BG_NIGHT, nextId: 'day2_night_attack_reveal_2_kui' },
  'day2_night_attack_reveal_2_kui': { id: 'day2_night_attack_reveal_2_kui', speaker: '歹徒', content: '“饶命啊铁牛哥哥！我们……我们只是觉得这异人既然是‘天罡星命定之人’，身上定有宝贝。而且见您白天训练她时那么上心，肯定手里攥着好东西……”', background: BG_NIGHT, nextId: 'day2_night_attack_reveal_3_kui' },
  'day2_night_attack_reveal_3_kui': { id: 'day2_night_attack_reveal_3_kui', speaker: '系统', content: '原来，从白天的训练开始，这两个贪婪的家伙就已经跟了你们一路了。', background: BG_NIGHT, nextId: 'day2_night_attack_kui_action_kui' },

  'day2_night_attack_reveal_1_lu': { id: 'day2_night_attack_reveal_1_lu', speaker: '系统', content: '经过一番就地审问，真相大白。原来这两人是山寨中尚未被完全收服的小喽啰。', background: BG_NIGHT, nextId: 'day2_night_attack_reveal_2_lu' },
  'day2_night_attack_reveal_2_lu': { id: 'day2_night_attack_reveal_2_lu', speaker: '歹徒', content: '“饶命啊铁牛哥哥！我们……我们只是觉得这异人既然是‘天罡星命定之人’，身上定有宝贝。而且见您白天训练她时那么上心，肯定手里攥着好东西……”', background: BG_NIGHT, nextId: 'day2_night_attack_reveal_3_lu' },
  'day2_night_attack_reveal_3_lu': { id: 'day2_night_attack_reveal_3_lu', speaker: '系统', content: '原来，从白天的训练开始，这两个贪婪的家伙就已经跟了你们一路了。', background: BG_NIGHT, nextId: 'day2_night_attack_kui_action_lu' },

  'day2_night_attack_kui_action_kui': { id: 'day2_night_attack_kui_action_kui', speaker: '李逵', characterId: 'likui', content: '“呸！没出息的鸟人！敢动俺的人，活腻歪了！带走，关进地牢去！”', background: BG_NIGHT, sprite: LIKUI_ANGRY_PNG, nextId: 'day2_night_attack_kui_comfort_kui' },
  'day2_night_attack_kui_comfort_kui': { id: 'day2_night_attack_kui_comfort_kui', speaker: '李逵', characterId: 'likui', content: '“小文书，别怕！有俺铁牛在，看谁还敢来触霉头。你安心睡，俺这就叫几个兄弟在门口守着！”', background: BG_NIGHT, nextId: 'day2_night_attack_end_kui' },

  'day2_night_attack_kui_action_lu': { id: 'day2_night_attack_kui_action_lu', speaker: '李逵', characterId: 'likui', content: '“呸！没出息的鸟人！敢动俺的人，活腻歪了！带走，关进地牢去！”', background: BG_NIGHT, sprite: LIKUI_ANGRY_PNG, nextId: 'day2_night_attack_kui_comfort_lu' },
  'day2_night_attack_kui_comfort_lu': { id: 'day2_night_attack_kui_comfort_lu', speaker: '李逵', characterId: 'likui', content: '“小文书，别怕！有俺铁牛在，看谁还敢来触霉头。你安心睡，俺这就叫几个兄弟在门口守着！”', background: BG_NIGHT, nextId: 'day2_night_attack_end_lu' },

  'day2_night_attack_end_kui': { id: 'day2_night_attack_end_kui', speaker: '系统', content: '你惊魂未定，虽然歹徒已被抓走，但这一夜你再难入眠...直到黎明破晓。', background: BG_BLACK, nextId: 'day3_kui_yiling_1' },
  'day2_night_attack_end_lu': { id: 'day2_night_attack_end_lu', speaker: '系统', content: '你惊魂未定，虽然歹徒已被抓走，但这一夜你再难入眠...直到黎明破晓。', background: BG_BLACK, nextId: 'day3_lu_training_start' },

  // --- 第三天：鲁智深特训 ---
  'day3_lu_training_start': { id: 'day3_lu_training_start', speaker: '系统', content: '第三天。清晨的雾气还未散去，你如约来到了后山的翠竹林。', background: BG_BAMBOO, nextId: 'day3_lu_1' },
  'day3_lu_1': { id: 'day3_lu_1', speaker: '鲁智深', characterId: 'luzhishen', content: '“你来了，{playerName}. 动作倒快，洒家这坛酒还没见底呢. ”', background: BG_BAMBOO, nextId: 'day3_lu_2' },
  'day3_lu_2': { id: 'day3_lu_2', speaker: '{playerName}', content: '“大师久等了. 我们今天学什么？也是劈砖搬石吗？”', background: BG_BAMBOO, nextId: 'day3_lu_4' },
  'day3_lu_4': { id: 'day3_lu_4', speaker: '鲁智深', characterId: 'luzhishen', content: '“非也. 铁牛教你的是杀气，洒家要教你的是‘静’. ”', background: BG_BAMBOO, nextId: 'day3_lu_5' },
  'day3_lu_5': { id: 'day3_lu_5', speaker: '系统', content: '你盘腿坐下，鲁智深就坐在你对面. 虽然他相貌魁梧，但此刻却散发出一种如山岳般沉稳的气息.', background: BG_BAMBOO, nextId: 'day3_lu_6' },
  'day3_lu_6': { id: 'day3_lu_6', speaker: '鲁智深', characterId: 'luzhishen', content: '“修行先格己. 你的灵气浮躁，源于畏惧. 生死有命，洒家只求个‘无愧’.”', background: CG_LU_MEDITATION, nextId: 'day3_lu_7' },
  'day3_lu_7': { id: 'day3_lu_7', speaker: '{playerName}', content: '“我确实害怕. 我怕回不去，怕这百零八日后就成了云烟……”', background: CG_LU_MEDITATION, nextId: 'day3_lu_8' },
  'day3_lu_8': { id: 'day3_lu_8', speaker: '鲁智深', characterId: 'luzhishen', content: '“看这降魔劲，不是为杀敌，而是为护人. 有守护之心，才称得上好汉.”', background: CG_LU_MEDITATION, nextId: 'day3_lu_9' },
  'day3_lu_9': { id: 'day3_lu_9', speaker: '系统', content: '他突然起身，随手折下根竹枝，在你面前舞动. 动作极慢，却隐隐有雷霆之势.', background: BG_BAMBOO, nextId: 'day3_lu_10' },
  'day3_lu_10': { id: 'day3_lu_10', speaker: '鲁智深', characterId: 'luzhishen', content: '“武艺若无道心，便是屠夫耳. 记着，气随心转，沉下心去再练！”', background: BG_BAMBOO, nextId: 'day3_lu_11' },
  'day3_lu_11': { id: 'day3_lu_11', speaker: '系统', content: '接下来的几个时辰，鲁智深纠正了你的呼吸法，一遍又一遍，极有耐心.', background: BG_BAMBOO, nextId: 'day3_lu_spirit_gain' },
  'day3_lu_spirit_gain': { id: 'day3_lu_spirit_gain', speaker: '系统', content: '（修行有感：你的呼吸逐渐平稳，与星宿之力产生了共鸣. 灵力 +1）', background: BG_BAMBOO, choices: [
    { text: '继续修行', nextId: 'day3_lu_12', attributeBonus: { spirit: 1 } }
  ]},
  'day3_lu_12': { id: 'day3_lu_12', speaker: '{playerName}', content: '虽然累得满头大汗，但你确实感到体内那股乱窜的气息渐渐平复，与血脉交融.', background: BG_BAMBOO, nextId: 'day3_lu_13' },
  'day3_lu_13': { id: 'day3_lu_13', speaker: '鲁智深', characterId: 'luzhishen', content: '“好！悟性不错. 虽比不得林冲兄弟，倒也是个可造之材. ”', background: BG_BAMBOO, nextId: 'day3_lu_14' },
  'day3_lu_14': { id: 'day3_lu_14', speaker: '鲁智深', characterId: 'luzhishen', content: '“行了，练了一晌午，洒家肚子也饿了. 你且去梁山后厨，寻那李老头讨几个刚出锅的馒头. ”', background: BG_BAMBOO, nextId: 'day3_lu_15' },
  'day3_lu_15': { id: 'day3_lu_15', speaker: '鲁智深', characterId: 'luzhishen', content: '“洒家这就找铁牛喝个痛快. 去吧！”', background: BG_BLACK, nextId: 'day3_kitchen_1' },

  // --- 后厨路径 ---
  'day3_kitchen_1': { id: 'day3_kitchen_1', speaker: '系统', content: '你循着炊烟找到了后厨，这里热气腾腾，一个慈眉善目的老厨师正在灶台忙活。', background: BG_KITCHEN_REALLY_NEW, nextId: 'day3_kitchen_2' },
  'day3_kitchen_2': { id: 'day3_kitchen_2', speaker: '李老头', content: '“哟，是公孙先生说的那位异人吧？来来，大师打过招呼了，刚蒸好的大白馒头，还烫嘴呢！”', background: BG_KITCHEN_REALLY_NEW, nextId: 'day3_kitchen_3' },
  'day3_kitchen_3': { id: 'day3_kitchen_3', speaker: '{playerName}', content: '你嗅着空气中浓郁的面香，李老头端出一个大笸箩，热气腾腾的馒头堆得像小山一样。', background: BG_KITCHEN_REALLY_NEW, nextId: 'day3_kitchen_choice' },
  'day3_kitchen_choice': { id: 'day3_kitchen_choice', speaker: '李老头', content: '“饿坏了吧？快，趁热吃！你要吃几个？”', background: BG_KITCHEN_REALLY_NEW, choices: [
    { text: '（矜持地）吃一个就够了。', nextId: 'day3_kitchen_one_start' },
    { text: '（豪迈地）给我来十个！', nextId: 'day3_kitchen_ten_start', attributeBonus: { weight: 1 } }
  ]},

  // --- 吃一个馒头分支：点击交互 ---
  'day3_kitchen_one_start': { id: 'day3_kitchen_one_start', speaker: '李老头', content: '“哈哈，果然是文弱的女娃娃。不过咱们梁山的好汉，那可个个都是顶天立地的。趁这会儿工夫，老头子给你讲讲铁牛和大师的故事。”', background: BG_KITCHEN_REALLY_NEW, nextId: 'day3_kitchen_one_cg1_1' },
  'day3_kitchen_one_cg1_1': { id: 'day3_kitchen_one_cg1_1', speaker: '李老头', content: '“就说铁牛那黑汉子，虽然长得凶，心却最诚。当年俺孙子病重，大雪封山，是他光着膀子跑了几十里山路把郎中扛回来的。这种义气，没话说！”', background: CG_BUNS_1, nextId: 'day3_kitchen_one_cg2_1' },
  'day3_kitchen_one_cg2_1': { id: 'day3_kitchen_one_cg2_1', speaker: '李老头', content: '“还有鲁大师，虽然爱喝酒爱闹事，却有一副活菩萨心肠。有回他在俺这儿偷酒喝，被俺抓了个现行，你猜怎么着？”', background: CG_BUNS_EMPTY, nextId: 'day3_kitchen_one_cg2_2' },
  'day3_kitchen_one_cg2_2': { id: 'day3_kitchen_one_cg2_2', speaker: '李老头', content: '“他不仅没恼，反倒嘿嘿一乐，说自己坏了规矩，硬是在这灶台边帮俺劈了一个月的柴火。你说这天下的和尚，哪有比他更直爽的？”', background: CG_BUNS_EMPTY, nextId: 'day3_kitchen_one_cg2_3' },
  'day3_kitchen_one_cg2_3': { id: 'day3_kitchen_one_cg2_3', speaker: '李老头', content: '“这笸箩里的馒头啊，都是给这帮没心肺的汉子准备的。在这梁山，义气就是这热腾腾的面香味，不管你从哪儿来，吃饱了就是自家人。”', background: CG_BUNS_EMPTY, nextId: 'day3_kitchen_one_end' },
  'day3_kitchen_one_end': { id: 'day3_kitchen_one_end', speaker: '系统', content: '吃完这一个馒头，你谢过李老头。虽然腹中不算太饱，但听完英雄的故事，心中却对未来有了更深的定力。', background: BG_BLACK, nextId: 'day4_start' },

  // --- 吃十个馒头分支 ---
  'day3_kitchen_ten_start': { id: 'day3_kitchen_ten_start', speaker: '李老头', content: '“（大惊失色）哎呀！你这小丫头看着细皮嫩肉，怎的胃口比铁牛还大？老头子在这灶台忙活大半辈子，从来没见过这么能吃的女孩子！”', background: BG_KITCHEN_REALLY_NEW, nextId: 'day3_kitchen_ten_4' },
  'day3_kitchen_ten_4': { id: 'day3_kitchen_ten_4', speaker: '李老头', content: '“老头子在这梁山也见了不少世面. 要说这山上最有义气的，大师和铁牛绝对是头两个.”', background: CG_BUNS_10, nextId: 'day3_kitchen_ten_4_2' },
  'day3_kitchen_ten_4_2': { id: 'day3_kitchen_ten_4_2', speaker: '李老头', content: '“当年俺小孙子病得只剩一口气，大雪封山，是铁牛这汉子，光着膀子跑了几十里山路，生生把郎中给背上山的.”', background: CG_BUNS_10, nextId: 'day3_kitchen_ten_4_3' },
  'day3_kitchen_ten_4_3': { id: 'day3_kitchen_ten_4_3', speaker: '李老头', content: '“这种舍命救人的义气，山上谁不服他？来，多吃点，这些都是专门给你们这些辛苦人备下的.”', background: CG_BUNS_10, nextId: 'day3_kitchen_ten_5' },
  'day3_kitchen_ten_5': { id: 'day3_kitchen_ten_5', speaker: '李老头', content: '“铁牛这人呐，看着凶，其实最是见不得旁人受难. 他那对板斧是劈恶人的，可他这脊梁，是用来扛咱这些苦命人的.”', background: CG_BUNS_5, nextId: 'day3_kitchen_ten_5_2' },
  'day3_kitchen_ten_5_2': { id: 'day3_kitchen_ten_5_2', speaker: '李老头', content: '“就说那年闹饥荒，铁牛背着这一袋米一袋面的，挨家挨户送. 大家都说他是黑旋风，俺倒觉得他是及时雨派来的救苦天神.”', background: CG_BUNS_5, nextId: 'day3_kitchen_ten_5_3' },
  'day3_kitchen_ten_5_3': { id: 'day3_kitchen_ten_5_3', speaker: '李老头', content: '“你瞅瞅你手里的馒头，那可是他亲自挑的山泉水和的面. 这粗汉子细心起来，比谁都像个样儿. 快，趁热吃！”', background: CG_BUNS_5, nextId: 'day3_kitchen_ten_6' },
  'day3_kitchen_ten_6': { id: 'day3_kitchen_ten_6', speaker: '李老头', content: '“还有鲁大师，虽然嗜酒如命，却是一副侠义心肠. 有一回他偷了俺攒的陈酿，被发现后不仅没动粗，反倒乐呵呵地在这帮俺劈了一个月的柴火.”', background: CG_BUNS_3, nextId: 'day3_kitchen_ten_7' },
  'day3_kitchen_ten_7': { id: 'day3_kitchen_ten_7', speaker: '李老头', content: '“这山上的汉子啊，有的来自王侯将相，有的来自市井屠苏，但在这一笸箩大白馒头面前，大家伙都是一样的赤诚兄弟.”', background: CG_BUNS_1, nextId: 'day3_kitchen_ten_8_1' },
  'day3_kitchen_ten_8_1': { id: 'day3_kitchen_ten_8_1', speaker: '李老头', content: '“你这娃娃多吃点，把这灵气补得足足的. 公孙先生说了，你的劫数也是咱们梁山的劫数，咱老头子没别的本事，管够你的肚子！”', background: CG_BUNS_EMPTY, nextId: 'day3_kitchen_ten_8_2' },
  'day3_kitchen_ten_8_2': { id: 'day3_kitchen_ten_8_2', speaker: '李老头', content: '“看着你这吃相，俺就想起那些凯旋而归的好汉们. 这笸箩虽空了，只要灶火不灭，梁山的魂就散不了. 你说是不是这个理儿？”', background: CG_BUNS_EMPTY, nextId: 'day3_kitchen_ten_8_3' },
  'day3_kitchen_ten_8_3': { id: 'day3_kitchen_ten_8_3', speaker: '{playerName}', content: '你摸着圆滚滚的肚子，最后一口馒头的余香还在唇齿间缭绕. 李老头的故事和这沉甸甸的食物，竟让你在乱世中感到了一丝莫名的安稳. ', background: CG_BUNS_EMPTY, nextId: 'day4_start' },

  // --- 沂岭路径等后续 ---
  'day3_kui_yiling_1': { id: 'day3_kui_yiling_1', speaker: '系统', content: '第三天. 天刚蒙蒙亮，李逵就火急火燎地把你拽出了被窝. ', background: BG_CAVE, nextId: 'day3_kui_yiling_2' },
  'day3_kui_yiling_2': { id: 'day3_kui_yiling_2', speaker: '李逵', characterId: 'likui', content: '“快走！俺要回沂岭接老娘上山，这路上不平，你心思细，陪俺走一趟！”', background: BG_CAVE, nextId: 'day3_kui_yiling_3' },
  'day3_kui_yiling_3': { id: 'day3_kui_yiling_3', speaker: '系统', content: '你们一路疾行至沂州境内的沂岭. 山路崎岖，林木幽深，隐约透着股不安的寂静.', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_4' },
  'day3_kui_yiling_4': { id: 'day3_kui_yiling_4', speaker: '李逵', characterId: 'likui', content: '“娘！俺铁牛回来接您了！”（李逵背着眼盲的老母，步履轻快）', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_5' },
  'day3_kui_yiling_5': { id: 'day3_kui_yiling_5', speaker: '李母', content: '“铁牛啊……这位小友是？”', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_6' },
  'day3_kui_yiling_6': { id: 'day3_kui_yiling_6', speaker: '{playerName}', content: '“老人家，我是李大哥在山上的朋友，陪他一起来接您。”', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_7' },
  'day3_kui_yiling_7': { id: 'day3_kui_yiling_7', speaker: '系统', content: '夕阳偏西，李逵背着母亲走得满头大汗. 老母突然说口渴难耐.', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_8' },
  'day3_kui_yiling_8': { id: 'day3_kui_yiling_8', speaker: '李逵', characterId: 'likui', content: '“小文书，你且看好俺老娘，俺去山脚寻些净水，片刻就回！”', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_wait_1' },
  'day3_kui_yiling_wait_1': { id: 'day3_kui_yiling_wait_1', speaker: '系统', content: '。。。', background: BG_BLACK, nextId: 'day3_kui_yiling_wait_2' },
  'day3_kui_yiling_wait_2': { id: 'day3_kui_yiling_wait_2', speaker: '系统', content: '。。。', background: BG_BLACK, nextId: 'day3_kui_yiling_9' },
  'day3_kui_yiling_9': { id: 'day3_kui_yiling_9', speaker: '系统', content: '李逵匆匆离去. 林中突然刮起一阵腥风，落叶漫天卷起.', background: BG_FOREST, nextId: 'day3_kui_yiling_10' },
  'day3_kui_yiling_10': { id: 'day3_kui_yiling_10', speaker: '系统', content: '（吼——！）灌木丛中猛地窜出两头斑斓大虎，直扑惊控的老母！', background: BG_FOREST, choices: [
    { text: '【拿起枯枝冲上去】哪怕力量微弱，也要为铁牛拖延时间！', nextId: 'day3_kui_help_1', affectionBonus: { charId: 'likui', points: 3 }, attributeBonus: { strength: 10 } },
    { text: '【在一旁恐惧观望】双腿发软动弹不得，只能凄厉呼救。', nextId: 'day3_kitchen_one_start', affectionBonus: { charId: 'likui', points: -30 } }
  ]},
  'day3_kui_help_1': { id: 'day3_kui_help_1', speaker: '{playerName}', content: '“畜生！滚开！！”你抓起地上一截粗壮的枯枝，发疯似地挥舞，挡在老母身前。', background: BG_FOREST, nextId: 'day3_kui_help_2' },
  'day3_kui_help_2': { id: 'day3_kui_help_2', speaker: '系统', content: '猛虎被你的气势震慑了一瞬，转而愤怒地向你扑来，腥臭的口气近在咫尺。', background: BG_FOREST, nextId: 'day3_kui_help_3' },
  'day3_kui_help_3': { id: 'day3_kui_help_3', speaker: '李逵', characterId: 'likui', content: '“尔敢动俺的人！！！哇呀呀呀呀！！！”', background: BG_FOREST, sprite: LIKUI_ANGRY_PNG, nextId: 'day3_kui_help_4' },
  'day3_kui_help_4': { id: 'day3_kui_help_4', speaker: '系统', content: '李逵拎着朴刀如黑色雷霆般坠落，瞬间将一头大虎劈成两半！', background: BG_FOREST, nextId: 'day3_kui_help_5' },
  'day3_kui_help_5': { id: 'day3_kui_help_5', speaker: '系统', content: '此时又有两头幼虎与另一头母虎杀出，李逵杀红了眼，朴刀飞旋如血色风暴。', background: BG_FOREST, nextId: 'day3_kui_help_6' },
  'day3_kui_help_6': { id: 'day3_kui_help_6', speaker: '系统', content: '你在后方不断投掷石块干扰，李逵则像头真正的野兽在虎群中肉搏，鲜血染红了他的整张脸。', background: BG_FOREST, nextId: 'day3_kui_help_7' },
  'day3_kui_help_7': { id: 'day3_kui_help_7', speaker: '系统', content: '终于，最后一头猛虎在李逵的铁拳下脑浆迸裂，沉重地倒在血泊中。', background: BG_FOREST, nextId: 'day3_kui_help_8' },
  'day3_kui_help_8': { id: 'day3_kui_help_8', speaker: '系统', content: '他喘着粗气回过头看向被吓坏的你，眼神瞬间从野兽变成了做错事的孩子。', background: BG_FOREST, nextId: 'day3_kui_help_9' },
  'day3_kui_help_9': { id: 'day3_kui_help_9', speaker: '李逵', content: '“{playerName}，别怕，有俺在，刚才。。。谢谢你护着俺娘”', background: CG_KUI_HEARTBEAT, nextId: 'day3_kui_bond_up' },
  'day3_kui_bond_up': { id: 'day3_kui_bond_up', speaker: '系统', content: '和李逵羁绊+3', background: CG_KUI_HEARTBEAT, nextId: 'day3_kui_help_10' },
  'day3_kui_help_10': { id: 'day3_kui_help_10', speaker: '李逵', characterId: 'likui', content: '“等回了梁山，俺一定教你更多真本事！俺李逵这条命，以后也是你的！”', background: BG_FOREST, nextId: 'day4_start' },

  'day4_start': { id: 'day4_start', speaker: '系统', content: '第四天，你想跟随哪位英雄开启今日的专项特训？', background: BG_CAMP, choices: [ { text: '林冲：研习“枪法要义”', nextId: 'day4_lu_1', attributeBonus: { intelligence: 10 } }, { text: '燕青：研习“潜伏谍报”', nextId: 'day4_yan_1', attributeBonus: { intelligence: 5, spirit: 5 } }, { text: '鲁智深：研习“禅意守护”', nextId: 'day4_luzhishen_branch', attributeBonus: { spirit: 10 } }, { text: '李逵：研习“极致体魄”', nextId: 'day4_kui_train_1', attributeBonus: { strength: 10 } } ] },
  'day4_kui_train_1': { id: 'day4_kui_train_1', speaker: '李逵', characterId: 'likui', content: '“走走走，俺带你去校场！今天呼延将军在那，正好让他见识见识俺带出来的小文书！”', background: BG_BLACK, nextId: 'day4_kui_drill_pan_start' },
  'day4_kui_drill_pan_start': { id: 'day4_kui_drill_pan_start', speaker: '{playerName}', content: '（你跟着铁牛来到校场的高台……）', background: BG_DRILL_SCALE, nextId: 'day4_kui_drill_desc' },
  'day4_kui_drill_desc': { id: 'day4_kui_drill_desc', speaker: '系统', content: '校场上烟尘腾卷，兵器架列如林。吼声、金铁交鸣声、箭矢破空声织成一片. 远处呼延灼双鞭舞作一团银光，气度森严. 汗水砸在夯土上洇开深色斑痕，空气里满是草屑与铁锈的味道.', background: BG_HUYAN_CG, nextId: 'day4_kui_train_2' },
  'day4_kui_train_2': { id: 'day4_kui_train_2', speaker: '呼延灼', characterId: 'huyanzhuo', content: '“铁牛，这就是那位异人？步履虚浮，气息不稳，若要随军，怕是连马背都爬不上去。”', background: BG_DRILL, nextId: 'day4_kui_train_3' },
  'day4_kui_train_3': { id: 'day4_kui_train_3', speaker: '系统', content: '呼延灼那双如鹰隼般的眼睛扫过你，让你感到一股战场上的肃杀之气向你逼近.', background: BG_DRILL, choices: [
    { text: '看什么啊？！', nextId: 'day4_huyan_impressed_1', affectionBonus: { charId: 'likui', points: 10 } },
    { text: '哆哆嗦嗦不吱声', nextId: 'day4_kui_train_4' }
  ]},
  'day4_huyan_impressed_1': { id: 'day4_huyan_impressed_1', speaker: '呼延灼', characterId: 'huyanzhuo', content: '“虽是一介女流，胆识倒不小，那我就看看你到底有什么本事！”', background: BG_DRILL, nextId: 'day4_kui_plead_1' },
  'day4_kui_plead_1': { id: 'day4_kui_plead_1', speaker: '李逵', characterId: 'likui', content: '“哥哥，手下留情啊！”', background: BG_DRILL, nextId: 'day4_kui_train_4_bold' },
  'day4_kui_train_4_bold': { id: 'day4_kui_train_4_bold', speaker: '呼延灼', characterId: 'huyanzhuo', content: '“听好了！马术求稳，箭术求准，体力则是万兵之本！上马！”', background: BG_DRILL, nextId: 'day4_kui_train_4_player_bold' },
  'day4_kui_train_4_player_bold': { id: 'day4_kui_train_4_player_bold', speaker: '{playerName}', content: '“啊？？。。。不是我就装一下怎么还认真了。。。？”', background: BG_DRILL, nextId: 'day4_kui_train_5' },
  'day4_kui_train_4': { id: 'day4_kui_train_4', speaker: '呼延灼', characterId: 'huyanzhuo', content: '“听好了！马术求稳，箭术求准，体力则是万兵之本！上马！”', background: BG_DRILL, nextId: 'day4_kui_train_4_player' },
  'day4_kui_train_4_player': { id: 'day4_kui_train_4_player', speaker: '{playerName}', content: '“啊？？。。。饶了我吧。。。”', background: BG_DRILL, nextId: 'day4_kui_train_5' },
  'day4_kui_train_5': { id: 'day4_kui_train_5', speaker: '系统', content: '在李逵的起哄和呼延灼的严厉喝斥下，你先是被推上颠簸的战马，双腿被磨得生疼；随后又被迫拉开沉重的牛角弓，双臂颤抖如筛糠...', background: BG_DRILL },

  'day4_kui_train_archery_win_1': { id: 'day4_kui_train_archery_win_1', speaker: '李逵', characterId: 'likui', content: '“哈哈哈！好样的！俺就说这Y头有灵性，这第一箭射得真是有模有样，没给俺丢脸！”', background: BG_DRILL, nextId: 'day4_kui_train_archery_win_2' },
  'day4_kui_train_archery_win_2': { id: 'day4_kui_train_archery_win_2', speaker: '呼延灼', characterId: 'huyanzhuo', content: '“哼，不过是运气好罢了. 战场上瞬息万变，既然第一关过了，那就加大点难度！”', background: BG_DRILL, nextId: 'day4_kui_train_archery_level2_trigger' },
  'day4_kui_train_archery_level2_trigger': { id: 'day4_kui_train_archery_level2_trigger', speaker: '系统', content: '呼延灼命人调整了箭靶的位置，虽然靶子看起来变小了一些，但周围的风似乎也静了. 准备好迎接更高强度的挑战了吗？', background: BG_DRILL },

  'day4_kui_train_archery_win_2_success': { id: 'day4_kui_train_archery_win_2_success', speaker: '李逵', characterId: 'likui', content: '“哈哈哈！痛快！俺铁牛带出来的兵，就是比这帮憨鸟强！两回都中了红心，呼延将军，这下你没话说了吧！”', background: BG_DRILL, nextId: 'day4_kui_train_archery_win_2_huyan' },
  'day4_kui_train_archery_win_2_huyan': { id: 'day4_kui_train_archery_win_2_huyan', speaker: '呼延灼', characterId: 'huyanzhuo', content: '“莫要得意得太早！最后的考验：远处将有三个移动靶横向疾驰，你需在十息之内将其全部击落！”', background: BG_DRILL, nextId: 'day4_kui_train_archery_level3_trigger' },
  'day4_kui_train_archery_level3_trigger': { id: 'day4_kui_train_archery_level3_trigger', speaker: '系统', content: '校场尽头，三个木制靶标开始飞速左右平移. 你的呼吸变得急促，手指死死扣住弓弦. 准星此刻由你的意志直接操控，务必在限时内全灭目标！', background: BG_DRILL },

  // --- 第三关全通剧情 ---
  'day4_kui_train_archery_all_win_player': { id: 'day4_kui_train_archery_all_win_player', speaker: '{playerName}', content: '你放下长弓，潇洒地擦了擦额头的细汗，回头看向呼延灼，语气不屑：“呼延将军，这也太简单了吧？这就是名将之后设计的‘最高难度’？我甚至还没用力呢。”', background: BG_DRILL, nextId: 'day4_kui_train_archery_all_win_kui' },
  'day4_kui_train_archery_all_win_kui': { id: 'day4_kui_train_archery_all_win_kui', speaker: '李逵', characterId: 'likui', content: '“哇哈哈！痛快！太给俺铁牛长脸了！呼延老哥，瞧见没？这丫头动动手指，你那些个靶子就全碎了！我看你这双鞭大将军的名头，不如让给咱们小文书当当？”', background: BG_DRILL, nextId: 'day4_kui_train_archery_all_win_huyan' },
  'day4_kui_train_archery_all_win_huyan': { id: 'day4_kui_train_archery_all_win_huyan', speaker: '呼延灼', characterId: 'huyanzhuo', content: '“（被堵得老脸一红，恼羞成怒）胡闹！这只是基本功！既然这点难度难不倒你，那便再上一层！来人！把箭靶挂在飞奔的劣马尾巴上，再给这位异人蒙上双眼，让她听声辨位射个倒挂金钩……”', background: BG_DRILL, nextId: 'day4_kui_train_archery_all_win_kui_stop' },
  'day4_kui_train_archery_all_win_kui_stop': { id: 'day4_kui_train_archery_all_win_kui_stop', speaker: '李逵', characterId: 'likui', content: '“（赶紧一把捂住呼延灼的嘴）去去去！老哥哥你疯魔了不成！她只是个写文书的，又不是那能上天入地的公孙先生！走走走，小文书，别理这憨鸟，俺带你加练‘极致跑操’去！”', background: BG_DRILL, sprite: LIKUI_ANGRY_PNG, nextId: 'day4_player_resistance_1' },

  // --- 反抗与昏迷剧情链 ---
  'day4_player_resistance_1': { id: 'day4_player_resistance_1', speaker: '{playerName}', content: '“等等……极致跑操？！不，我不去！我是文书，不是牲口！”你发疯似的挣扎，试图逃离这个魔鬼训练场。', background: BG_DRILL, nextId: 'day4_player_resistance_2' },
  'day4_player_resistance_2': { id: 'day4_player_resistance_2', speaker: '李逵', characterId: 'likui', content: '“嘿！这丫头刚才赢靶子的那股子狂劲儿哪去了？俺这是为了磨砺你的筋骨，走你！”说罢，他像拎麻袋一样把你再次扛了起来，根本不理会你的拳打脚踢，大步流星地奔向跑道。', background: BG_DRILL, nextId: 'day4_player_resistance_3' },
  'day4_player_resistance_3': { id: 'day4_player_resistance_3', speaker: '系统', content: '你在李逵厚实的肩膀上徒劳地挣扎着，视线随着他的步伐剧烈晃动。原本清朗的天空开始出现重影，胃里更是一阵翻江倒海，夕阳的余辉在你模糊的视野中拉成了一道道扭曲的金色虚影。', background: BG_DRILL, nextId: 'day4_kui_train_7' },

  'day4_kui_train_7': { id: 'day4_kui_train_7', speaker: '系统', content: '慢慢的，你逐渐感觉视线开始模糊，耳边的喧嚣渐渐远去..', background: BG_DRILL, nextId: 'day4_kui_train_8' },
  'day4_kui_train_8': { id: 'day4_kui_train_8', speaker: '李逵', content: '“小文书，你怎么了？！”', background: BG_FAINT_CG, nextId: 'day4_kui_train_8_player' },
  'day4_kui_train_8_player': { id: 'day4_kui_train_8_player', speaker: '{playerName}', content: '“不行了。。。好累。。。”', background: BG_FAINT_CG, nextId: 'day4_kui_train_faint' },
  'day4_kui_train_faint': { id: 'day4_kui_train_faint', speaker: '系统', content: '由于高强度透支，你眼前一黑，彻底昏厥了过去. 系统提示：过度劳累导致元气损伤，体重 -1，灵力 -1.', background: BG_BLACK, choices: [ { text: '（陷入沉睡）', nextId: 'day5_start', attributeBonus: { weight: -1, spirit: -1 } } ] },

  'day4_lu_1': { id: 'day4_lu_1', speaker: '系统', content: '你来到了林冲的府邸. ', background: BG_LIN_ROOM, nextId: 'day4_lu_2' },
  'day4_lu_2': { id: 'day4_lu_2', speaker: '系统', content: '书房内，林冲正忙于调度. ', background: BG_LIN_ROOM, nextId: 'day4_lu_3' },
  'day4_lu_3': { id: 'day4_lu_3', speaker: '{playerName}', content: '“林教头，打扰了. ”', background: BG_LIN_ROOM, nextId: 'day4_lu_4' },
  'day4_lu_4': { id: 'day4_lu_4', speaker: '林冲', characterId: 'linchong', content: '“是你啊. 今天不凑巧. ”\n\n（林冲看起来很疲惫。）', background: BG_LIN_ROOM, choices: [ { text: '【体贴行事】沏茶。', nextId: 'day4_lu_9_success', affectionBonus: { charId: 'linchong', points: 15 }, attributeBonus: { intelligence: 5 } }, { text: '【强硬坚持】催促。', nextId: 'day4_lu_9_fail', affectionBonus: { charId: 'linchong', points: -15 }, attributeBonus: { strength: 5 } } ] },
  'day4_lu_9_success': { id: 'day4_lu_9_success', speaker: '林冲', content: '“有心了.”', background: BG_LIN_ROOM, nextId: 'day5_start' },
  'day4_lu_9_fail': { id: 'day4_lu_9_fail', speaker: '林冲', content: '“出去！”', background: BG_LIN_ROOM, nextId: 'day5_start' },
  'day4_yan_1': { id: 'day4_yan_1', speaker: '系统', content: '燕青下山了。', background: BG_MARKET, nextId: 'day5_start' },
  'day4_luzhishen_branch': { id: 'day4_luzhishen_branch', speaker: '鲁智深', content: '“洒家就知道你防不下那竹林.”', background: BG_BAMBOO, nextId: 'day5_start' },
  'day5_start': { id: 'day5_start', speaker: '{playerName}', content: '（眼皮沉重得像灌了铅，你费力地睁开眼，视线由模糊逐渐变得清晰……）', background: BG_CAVE, nextId: 'day5_where_am_i' },
  'day5_where_am_i': { id: 'day5_where_am_i', speaker: '{playerName}', content: '“这里是……我的房间？我记得我在校场……”你揉着隐隐作痛的太阳穴，试图回忆昏迷前发生的事。', background: BG_CAVE, nextId: 'day5_kui_entry' },
  'day5_kui_entry': { id: 'day5_kui_entry', speaker: '李逵', characterId: 'likui', content: '“你醒啦！{playerName}！俺就说你这丫头命硬，出不了事！”李逵端着一碗黑乎乎的药汁，风风火火地闯了进来，脸上满是掩饰不住的欣喜。', background: BG_CAVE, nextId: 'day5_kui_medicine' },
  'day5_kui_medicine': { id: 'day5_kui_medicine', speaker: '李逵', characterId: 'likui', content: '“快，趁热把这药喝了！这是公孙先生特意给你熬的。”', background: BG_CAVE, choices: [{ text: '喝下药汤', nextId: 'day5_drink_medicine' }] },
  'day5_drink_medicine': { id: 'day5_drink_medicine', speaker: '{playerName}', content: '（你皱着眉喝下了那碗苦涩的药汁，一股暖流随即在体内散开……）', background: BG_CAVE, nextId: 'day5_gongsun_visit' },
  'day5_gongsun_visit': { id: 'day5_gongsun_visit', speaker: '李逵', characterId: 'likui', content: '“公孙先生来看过你了，他说你是因为太劳累，导致魂魄里的灵力受损，这才晕倒的。都怪俺，不该拉着你拼命练那劳什子跑操……”', background: BG_CAVE, choices: [
    { text: '“没关系，我也想变强。”', nextId: 'day5_kui_happy', affectionBonus: { charId: 'likui', points: 10 } },
    { text: '“下次能不能温柔点？”', nextId: 'day5_kui_scratch', affectionBonus: { charId: 'likui', points: 5 } }
  ]},
  'day5_kui_happy': { id: 'day5_kui_happy', speaker: '李逵', characterId: 'likui', content: '“哈哈！不愧是俺器重的人！等你好了，俺带你去吃好吃的补补！”', background: BG_CAVE, nextId: 'day5_gongsun_real_entry' },
  'day5_kui_scratch': { id: 'day5_kui_scratch', speaker: '李逵', characterId: 'likui', content: '“（挠挠头）俺这粗人，手脚重了些……下次俺一定注意，一定注意！”', background: BG_CAVE, nextId: 'day5_gongsun_real_entry' },
  'day5_gongsun_real_entry': { id: 'day5_gongsun_real_entry', speaker: '系统', content: '正说着，门外传来一阵轻盈的脚步声，公孙胜身披道袍，仙风道骨地走了进来。', background: BG_CAVE, nextId: 'day5_gongsun_check' },
  'day5_gongsun_check': { id: 'day5_gongsun_check', speaker: '公孙胜', content: '“看来药力已经散开，气色好多了。”公孙胜微微颔首，目光深邃地看着你。', background: BG_CAVE, nextId: 'day5_gongsun_explain' },
  'day5_gongsun_explain': { id: 'day5_gongsun_explain', speaker: '公孙胜', content: '“你本非此界之人，肉身虽在，魂魄却如风中残烛。昨日你在校场强行引动星力，却不知你的‘灵力’便是维系魂魄与这具躯壳的粘合之物。灵力一旦透支，魂魄便会产生脱壳之兆，这便是你昏厥的真相。”', background: BG_CAVE, nextId: 'day5_gongsun_home' },
  'day5_gongsun_home': { id: 'day5_gongsun_home', speaker: '公孙胜', content: '“你要明白，灵力不仅是你在此界生存的‘本钱’，更是开启归家星门所需的‘引子’。每损耗一分，你离故乡便远了一分。若灵力彻底散尽，你的神魂将永远迷失在位面缝隙之中，再无归期。更重要的是，你的灵力盈亏亦牵动着我梁山泊的安危气运，你我早已是休戚与共。”', background: BG_CAVE, nextId: 'day5_gongsun_invite' },
  'day5_gongsun_invite': { id: 'day5_gongsun_invite', speaker: '公孙胜', content: '“以后若有闲暇，可多来我处坐坐。贫道不仅可以教你一些提升灵力的法门，若你心有迷茫，贫道亦可为你卜上一卦，窥一窥天机。”', background: BG_CAVE, nextId: 'day5_afternoon_start' },
  'day5_afternoon_start': { id: 'day5_afternoon_start', speaker: '系统', content: '下午，你感觉身体轻快了许多，灵力似乎也在药力的作用下慢慢恢复。你试着下地走了几步，虽然还有些虚弱，但已无大碍。', background: BG_CAVE, nextId: 'day5_ask_kui_tour' },
  'day5_ask_kui_tour': { id: 'day5_ask_kui_tour', speaker: '{playerName}', content: '“铁牛，俺在屋里憋坏了，你带俺去山下转转吧？”你对正坐在一旁啃果子的李逵说道。', background: BG_CAVE, nextId: 'day5_kui_agree' },
  'day5_kui_agree': { id: 'day5_kui_agree', speaker: '李逵', characterId: 'likui', content: '“嘿！你这丫头倒是个闲不住的！行，俺带你去水泊边上透透气，那里的景色可比这闷屋子强多了！”', background: BG_CAVE, nextId: 'day5_marsh_intro' },
  'day5_marsh_intro': { id: 'day5_marsh_intro', speaker: '系统', content: '李逵领着你穿过几道山径，眼前豁然开朗。只见烟波浩渺，芦苇摇曳，这便是闻名天下的梁山水泊。', background: BG_MARSH, nextId: 'day5_marsh_desc' },
  'day5_marsh_desc': { id: 'day5_marsh_desc', speaker: '{playerName}', content: '“好壮阔的水域……这就是梁山的天然屏障吗？”你深深吸了一口带着水汽的清凉空气，感觉精神为之一振。', background: BG_MARSH, nextId: 'day5_marsh_unlock' },
  'day5_marsh_unlock': { id: 'day5_marsh_unlock', speaker: '李逵', characterId: 'likui', content: '“那是自然！以后你想来，随时跟俺说，或者你自己顺着这条路溜达过来也成。这水泊大得很，够你逛的！”', background: BG_MARSH, nextId: 'day6_start' },
  'stroll_marsh_start': { id: 'stroll_marsh_start', speaker: '系统', content: '你独自来到梁山水泊边。微风拂过，水面波光粼粼，芦苇丛中偶尔惊起几只水鸟。在这里闲逛，你的心情变得舒畅了许多。', background: BG_MARSH, choices: [{ text: '返回', nextId: 'back' }] },
  'day6_start': { id: 'day6_start', speaker: '系统', content: '（清晨，你还在梦乡，门外突然传来一阵震天响的砸门声，“砰砰砰”地仿佛要把门板直接卸下来……）', background: BG_CAVE, nextId: 'day6_kui_noise_1' },
  'day6_kui_noise_1': { id: 'day6_kui_noise_1', speaker: '李逵', content: '“小文书！快起！快起！俺在后山发现个巨大的马蜂窝，快随俺去收蜜，去晚了那帮憨鸟就要来抢了！”', background: BG_CAVE, nextId: 'day6_player_silent' },
  'day6_player_silent': { id: 'day6_player_silent', speaker: '{playerName}', content: '......', background: BG_CAVE, nextId: 'day6_kui_noise_2' },
  'day6_kui_noise_2': { id: 'day6_kui_noise_2', speaker: '李逵', content: '“咦？怎么没动静？莫不是睡死了？你这丫头，有好吃的俺都是记挂着你！”', background: BG_CAVE, nextId: 'day6_player_silent_2' },
  'day6_player_silent_2': { id: 'day6_player_silent_2', speaker: '{playerName}', content: '......', background: BG_CAVE, nextId: 'day6_kui_noise_3' },
  'day6_kui_noise_3': { id: 'day6_kui_noise_3', speaker: '李逵', content: '“不说话俺就当你答应了，俺先去准备火把，你快些出来！”', background: BG_CAVE, nextId: 'day6_decision' },
  'day6_decision': { id: 'day6_decision', speaker: '{playerName}', content: '“怎么会有精力这么充沛的人，难道忘了我最近刚晕倒过一次吗......”', background: BG_CAVE, nextId: 'day6_get_ready' },
  'day6_get_ready': { id: 'day6_get_ready', speaker: '{playerName}', content: '（……与其在这里等着被他第二次破门而入，还不如主动出击找个清静地方躲躲。去找鲁大师吧。）', background: BG_CAVE, nextId: 'day6_get_up' },
  'day6_get_up': { id: 'day6_get_up', speaker: '系统', content: '你在床上盯着天花板又发了一会儿呆，终于认命地翻身下床，慢吞吞地穿好衣服，悄悄推开房门往后山走去。', background: BG_CAVE, nextId: 'day6_mountain_path' },
  'day6_mountain_path': { id: 'day6_mountain_path', speaker: '系统', content: '清晨的山间小路被薄雾笼罩，空气中弥漫着泥土与草木的芬芳。', background: BG_BAMBOO, nextId: 'day6_mountain_path_2' },
  'day6_mountain_path_2': { id: 'day6_mountain_path_2', speaker: '系统', content: '脚下的落叶还带着晶莹的露珠，踩上去发出轻微的沙沙声。远处偶尔传来几声清脆的鸟鸣，让这静谧的早晨显得格外清新。', background: BG_BAMBOO, nextId: 'day6_lu_roar' },
  'day6_lu_roar': { id: 'day6_lu_roar', speaker: '鲁智深', content: '“大哥！洒家真看不下去了！”', background: BG_BAMBOO, nextId: 'day6_player_stunned' },
  'day6_player_stunned': { id: 'day6_player_stunned', speaker: '系统', content: '你停下了脚步。原本正要靠近与鲁大师约定好的禅修地点，却被这突如其来的吼声震在了原地。', background: BG_BAMBOO, nextId: 'linchong_demo_1' },
  'linchong_demo_intro': { id: 'linchong_demo_intro', speaker: '系统', content: '梁山泊的日常仍在继续，新的星宿羁绊即将开启。', background: BG_CAMP, choices: [ { text: '点击开始进入林冲部分demo', nextId: 'day6_start' } ] },
  'linchong_demo_1': { id: 'linchong_demo_1', speaker: '系统', content: '当你走近翠竹林时，却听到深处传来一阵激烈的争吵声。其中一个声音粗犷豪迈，正是鲁智深；而另一个声音则显得低沉而压抑。', background: BG_BAMBOO, choices: [{ text: '藏在石头后偷听', nextId: 'linchong_demo_2' }] },
  'linchong_demo_2': { id: 'linchong_demo_2', speaker: '鲁智深', content: '“大哥！如今全梁山都在为攻打大名府做准备，人人摩拳擦掌，唯独你整日消沉！”', background: BG_BAMBOO, nextId: 'linchong_demo_2_1' },
  'linchong_demo_2_1': { id: 'linchong_demo_2_1', speaker: '鲁智深', content: '“你再这样下去，只会越来越边缘化！现在连那些新上山的小喽啰，都快不把你放在眼里了！”', background: BG_BAMBOO, nextId: 'linchong_demo_3' },
  'linchong_demo_3': { id: 'linchong_demo_3', speaker: '神秘人', content: '那素色身影沉默良久，发出一声轻叹：“智深兄弟，大名府也好，梁山也罢，不过是换个地方苟活。”', background: BG_BAMBOO, nextId: 'linchong_demo_3_1' },
  'linchong_demo_3_1': { id: 'linchong_demo_3_1', speaker: '神秘人', content: '“那些虚名，丢了便丢了吧。血海深仇……提它又有何用？”', background: BG_BAMBOO, nextId: 'linchong_demo_3_2' },
  'linchong_demo_3_2': { id: 'linchong_demo_3_2', speaker: '鲁智深', content: '“洒家知道，你是看到了过去那个自己的不幸，才一直这么消沉……觉得争也没用，斗也没用。”', background: BG_BAMBOO, nextId: 'linchong_demo_3_2_1' },
  'linchong_demo_3_2_1': { id: 'linchong_demo_3_2_1', speaker: '鲁智深', content: '“但你不能一直这样下去啊！你是林教头，不是这山里的缩头乌龟！”', background: BG_BAMBOO, nextId: 'linchong_demo_3_3' },
  'linchong_demo_3_3': { id: 'linchong_demo_3_3', speaker: '系统', content: '那素色身影没有回答，只是紧了紧手中的长枪，步履沉重地向竹林深处走去。', background: BG_BAMBOO, nextId: 'linchong_demo_3_4' },
  'linchong_demo_3_4': { id: 'linchong_demo_3_4', speaker: '鲁智深', content: '“林冲！你给洒家站住！”', background: BG_BAMBOO, nextId: 'linchong_demo_3_5' },
  'linchong_demo_3_5': { id: 'linchong_demo_3_5', speaker: '{playerName}', content: '（林冲？！那个传说中的“豹子头”林冲……竟然就是他？）', background: BG_BAMBOO, nextId: 'linchong_demo_4' },
  'linchong_demo_4': { id: 'linchong_demo_4', speaker: '系统', content: '鲁智深气得直跺脚，可林冲却仍然没有回头，提着长枪没入竹林深处。你正想再多看几句，却只看到一个落寞的背影渐行渐远。', background: BG_BAMBOO, nextId: 'linchong_demo_5' },
  'linchong_demo_5': { id: 'linchong_demo_5', speaker: '{playerName}', content: '你从竹林后走出，看着鲁智深大师无奈的神情，忍不住问道：“大师……刚才那位，真的是‘豹子头’林教头吗？”', background: BG_BAMBOO, nextId: 'linchong_demo_6' },
  'linchong_demo_6': { id: 'linchong_demo_6', speaker: '鲁智深', characterId: 'luzhishen', content: '鲁智深叹了口气，看向你：“没错，他就是林冲。曾是京城八十万禁军教头，人称‘豹子头’。”', background: BG_BAMBOO, nextId: 'linchong_demo_6_1' },
  'linchong_demo_6_1': { id: 'linchong_demo_6_1', speaker: '鲁智深', characterId: 'luzhishen', content: '“可惜，一个顶天立地的汉子，却被这世道折磨成了这副模样。”', background: BG_BAMBOO, nextId: 'linchong_demo_7' },
  'linchong_demo_7': { id: 'linchong_demo_7', speaker: '{playerName}', content: '你忍不住问道：“大师，刚才听您说……林教头他，在山上过得并不好吗？”', background: BG_BAMBOO, nextId: 'linchong_demo_7_1' },
  'linchong_demo_7_1': { id: 'linchong_demo_7_1', speaker: '鲁智深', characterId: 'luzhishen', content: '鲁智深怒道：“何止是不好！那些小喽啰在校场上，竟敢当面嘲笑他是‘缩头豹子’。洒家实在看不下去，当场就把那几个鸟人打得满地找牙！”', background: BG_BAMBOO, nextId: 'linchong_demo_7_2' },
  'linchong_demo_7_2': { id: 'linchong_demo_7_2', speaker: '{playerName}', content: '你皱眉道：“那宋公明哥哥呢？他身为梁山之主，难道就不出来主持公道吗？”', background: BG_BAMBOO, nextId: 'linchong_demo_7_3' },
  'linchong_demo_7_3': { id: 'linchong_demo_7_3', speaker: '鲁智深', characterId: 'luzhishen', content: '“公明哥哥？哼，他只会两边和稀泥，说什么‘兄弟和睦为重’，反倒劝洒家莫要冲动，坏了山寨规矩！”', background: BG_BAMBOO, nextId: 'linchong_demo_8' },
  'linchong_demo_8': { id: 'linchong_demo_8', speaker: '{playerName}', content: '（不应该啊……在原著里，林教头火并王伦后地位极高，宋江对他也是礼遇有加。怎么在这个世界，宋江反而不重视他了？）', background: BG_BAMBOO, nextId: 'linchong_demo_9' },
  'linchong_demo_9': { id: 'linchong_demo_9', speaker: '{playerName}', content: '你试探着开口：“大师，林教头之前到底发生什么了，你能说说吗？”', background: BG_BAMBOO, nextId: 'linchong_demo_9_a' },
  'linchong_demo_9_a': { id: 'linchong_demo_9_a', speaker: '鲁智深', characterId: 'luzhishen', content: '鲁智深微微一愣，疑惑道：“咦？你这天降异人，不是说通晓古今吗？怎地连林兄弟的过往都不知道？”', background: BG_BAMBOO, nextId: 'linchong_demo_9_b' },
  'linchong_demo_9_b': { id: 'linchong_demo_9_b', speaker: '{playerName}', content: '你忙道：“我只知道林教头在山神庙有一场惊天动地的英雄行径，之后去了柴进东庄...”', background: BG_BAMBOO, nextId: 'linchong_demo_10' },
  'linchong_demo_10': { id: 'linchong_demo_10', speaker: '鲁智深', characterId: 'luzhishen', content: '鲁智深叹了口气打断道，苦笑道：“英雄？洒家倒希望那是真的。可现实是，那贼人陆谦至今还在京城享着荣华富贵。”', background: BG_BAMBOO, nextId: 'linchong_demo_10_1' },
  'linchong_demo_10_1': { id: 'linchong_demo_10_1', speaker: '鲁智深', characterId: 'luzhishen', content: '“当年风雪山神庙，林兄弟眼见草屋失火，走投无路之下，只能选择了遁逃。那陆谦不仅没死，如今还在京城花天酒地呢。”', background: BG_BAMBOO, nextId: 'linchong_demo_10_2' },
  'linchong_demo_10_2': { id: 'linchong_demo_10_2', speaker: '鲁智深', characterId: 'luzhishen', content: '“可怜那林娘子，终究是没能等到他回去，早已在那场变故中香消玉殒了。林兄弟上山后，更是受尽了王伦的百般刁难。”', background: BG_BAMBOO, nextId: 'linchong_demo_10_2_a' },
  'linchong_demo_10_2_a': { id: 'linchong_demo_10_2_a', speaker: '{playerName}', content: '（这和自己印象里的水浒完全不一样……）', background: BG_BAMBOO, nextId: 'linchong_demo_10_3' },
  'linchong_demo_10_3': { id: 'linchong_demo_10_3', speaker: '鲁智深', characterId: 'luzhishen', content: '“好在后来王伦那厮莫名其妙地死了，林兄弟这才算是在山上站稳了脚跟。”', background: BG_BAMBOO, nextId: 'linchong_demo_10_4' },
  'linchong_demo_10_4': { id: 'linchong_demo_10_4', speaker: '{playerName}', content: '“那王伦……到底是怎么死的？”', background: BG_BAMBOO, nextId: 'linchong_demo_10_5' },
  'linchong_demo_10_5': { id: 'linchong_demo_10_5', speaker: '鲁智深', characterId: 'luzhishen', content: '鲁智深皱了皱眉：“洒家也不甚清楚，只听说是跟那‘智多星’吴用有些干系。具体的，怕是只有当事人才知道了。”', background: BG_BAMBOO, nextId: 'linchong_demo_11' },
  'linchong_demo_11': { id: 'linchong_demo_11', speaker: '{playerName}', content: '你一边听着鲁大师的讲述，一边在心里暗自思忖：这和书里写的一点都不一样。这到底是为什么。', background: BG_BAMBOO, nextId: 'gongsun_visit_1' },
  'gongsun_visit_1': { id: 'gongsun_visit_1', speaker: '系统', content: '下午，你怀着满腹疑虑，来到了公孙胜的住处。', background: BG_CAVE, nextId: 'gongsun_visit_2' },
  'gongsun_visit_2': { id: 'gongsun_visit_2', speaker: '系统', content: '公孙胜正盘膝而坐，闭目养神。见你到来，他缓缓睁开眼，目光深邃，仿佛早已洞悉你的来意。', background: BG_CAVE, characterId: 'gongsunsheng', nextId: 'gongsun_visit_3' },
  'gongsun_visit_3': { id: 'gongsun_visit_3', speaker: '{playerName}', content: '你开门见山地问道：“一清先生，我有一事不明。为何林教头等人的过往，与我所知晓的完全不同？”', background: BG_CAVE, nextId: 'gongsun_visit_4' },
  'gongsun_visit_4': { id: 'gongsun_visit_4', speaker: '公孙胜', content: '公孙胜微微一笑，指了指窗外的流云：“你可知这梁山一百单八将，皆是上界星辰感应下凡？”', background: BG_CAVE, characterId: 'gongsunsheng', nextId: 'gongsun_visit_5' },
  'gongsun_visit_5': { id: 'gongsun_visit_5', speaker: '公孙胜', content: '“星辰之位虽定，但下界之人的心境与气数却会受外力干扰。如今林冲星光黯淡，隐忍太过，已失了那份‘豹子头’的锐气。”', background: BG_CAVE, characterId: 'gongsunsheng', nextId: 'gongsun_visit_6' },
  'gongsun_visit_6': { id: 'gongsun_visit_6', speaker: '公孙胜', content: '“若他继续这般消沉下去，天罡地煞之气便无法汇聚。到那时，梁山必将四分五裂，而你作为‘天降异人’，也将因气数断绝而魂飞魄散。”', background: BG_CAVE, characterId: 'gongsunsheng', nextId: 'gongsun_visit_7' },
  'gongsun_visit_7': { id: 'gongsun_visit_7', speaker: '{playerName}', content: '（你听得冷汗直流，原来这不仅关乎林冲的命运，更关乎自己的性命……）', background: BG_CAVE, nextId: 'gongsun_visit_8' },
  'gongsun_visit_8': { id: 'gongsun_visit_8', speaker: '公孙胜', content: '“唯有唤醒他内心的热血，让他重拾英雄本色，方能保住梁山，亦能保住你自己。”', background: BG_CAVE, characterId: 'gongsunsheng', nextId: 'gongsun_visit_9' },
  'gongsun_visit_9': { id: 'gongsun_visit_9', speaker: '{playerName}', content: '你深吸一口气，追问道：“那林教头……他真的就是那颗星宿转世之人吗？”', background: BG_CAVE, nextId: 'gongsun_visit_10' },
  'gongsun_visit_10': { id: 'gongsun_visit_10', speaker: '公孙胜', content: '公孙胜的目光变得有些暧昧不明，他轻轻摩挲着指尖：“这梁山之上的好汉，皆是星辰转世，这一点毋庸置疑。”', background: BG_CAVE, characterId: 'gongsunsheng', nextId: 'gongsun_visit_11' },
  'gongsun_visit_11': { id: 'gongsun_visit_11', speaker: '公孙胜', content: '“但究竟谁才是真正的‘天选之人’，还需要你自己去发现。因为，只有特定的人，才会与你手中的‘星魂坠’产生感应。”', background: BG_CAVE, characterId: 'gongsunsheng', nextId: 'gongsun_visit_12' },
  'gongsun_visit_12': { id: 'gongsun_visit_12', speaker: '{playerName}', content: '你下意识地握紧了胸前的吊坠，心中波澜起伏。原来，一切的答案，都藏在未来的相处之中。', background: BG_CAVE, nextId: 'night_thought_1' },
  'night_thought_1': { id: 'night_thought_1', speaker: '{playerName}', content: '（深夜，你躺在床上，翻来覆去无法入眠。窗外的月光洒在被褥上，冷清而寂静。）', background: BG_NIGHT, nextId: 'night_thought_2' },
  'night_thought_2': { id: 'night_thought_2', speaker: '{playerName}', content: '（脑海里全是公孙胜的话，还有鲁智深描述的那个“隐忍”的林教头。他到底经历了多少痛苦，才会变成现在这种麻木的样子？）', background: BG_NIGHT, nextId: 'night_thought_3' },
  'night_thought_3': { id: 'night_thought_3', speaker: '{playerName}', content: '（好奇心和一种说不清道不明的心疼在胸腔里交织。那个曾经意气风发的豹子头，真的回不来了吗……）', background: BG_NIGHT, nextId: 'day7_start' },
  'day7_start': { id: 'day7_start', speaker: '系统', content: '第七天。清晨的阳光透过窗棂，你顶着淡淡的黑眼圈坐了起来。为了让自己精神一点，你决定去校场活动下筋骨。', background: BG_CAMP, nextId: 'day7_drill_1' },
  'day7_drill_1': { id: 'day7_drill_1', speaker: '呼延灼', characterId: 'huyanzhuo', content: '“哦？今日起得倒是早。既然来了，便别闲着，随我操练一番！”', background: BG_DRILL, nextId: 'day7_player_annoyed' },
  'day7_player_annoyed': { id: 'day7_player_annoyed', speaker: '{playerName}', content: '“你有毛病吧？我才刚起床，还没吃早饭呢，操练什么操练！”你翻了个白眼，没好气地怼了回去。', background: BG_DRILL, nextId: 'day7_huyan_nagging' },
  'day7_huyan_nagging': { id: 'day7_huyan_nagging', speaker: '呼延灼', characterId: 'huyanzhuo', content: '“你这丫头，简直不可理喻！身为梁山一员，怎能如此懈怠？想当年我统领连环马时，将士们闻鸡起舞……”', background: BG_DRILL, nextId: 'day7_drill_3' },
  'day7_drill_3': { id: 'day7_drill_3', speaker: '{playerName}', content: '（你根本没心思听他啰嗦，正要转身离开，眼角的余光却忽然瞥见校场最偏僻的角落里，有一个熟悉的身影。）', background: BG_DRILL, nextId: 'day7_drill_4' },
  'day7_drill_4': { id: 'day7_drill_4', speaker: '系统', content: '那是林冲。他正一个人对着木桩练习枪法，动作虽然缓慢，却透着一种近乎自虐的执着。', background: BG_DRILL, nextId: 'day7_drill_5' },
  'day7_drill_5': { id: 'day7_drill_5', speaker: '{playerName}', content: '（你心中暗想：看来林教头还没有完全堕落嘛，至少他还没有放下手中的枪。）', background: BG_DRILL, nextId: 'day7_drill_5_1' },
  'day7_drill_5_1': { id: 'day7_drill_5_1', speaker: '系统', content: '只见他身形微晃，手中长枪如银龙出海，带起阵阵劲风，每一式都沉稳有力。', background: BG_DRILL, nextId: 'day7_drill_6' },
  'day7_drill_6': { id: 'day7_drill_6', speaker: '系统', content: '突然，林冲的枪尖在木桩上剧烈一震，他的虎口似乎被震裂了，鲜血瞬间染红了手掌。', background: CG_LIN_BLEED, nextId: 'day7_drill_7' },
  'day7_drill_7': { id: 'day7_drill_7', speaker: '系统', content: '但他只是麻木地看了看伤口，眼神中没有任何波澜，随即像没事人一样继续挥枪练习。', background: CG_LIN_BLEED, nextId: 'day7_drill_8' },
  'day7_drill_8': { id: 'day7_drill_8', speaker: '{playerName}', content: '（你愣住了。鲜血顺着枪杆一滴滴落在地上，他却连眉头都没皱一下，仿佛那具身体根本不是他自己的一样……）', background: CG_LIN_BLEED, nextId: 'day7_linchong_approach' },
  'day7_linchong_approach': { id: 'day7_linchong_approach', speaker: '{playerName}', content: '你忍不住停下脚步，鬼使神差般地朝着那个偏僻的角落走去。', background: CG_LIN_BLEED, nextId: 'day7_linchong_call' },
  'day7_linchong_call': { id: 'day7_linchong_call', speaker: '{playerName}', content: '“林教头……”你轻声唤道，声音里带着一丝连你自己都没察觉的颤抖。', background: CG_LIN_BLEED, nextId: 'day7_linchong_response_1' },
  'day7_linchong_response_1': { id: 'day7_linchong_response_1', speaker: '林冲', characterId: 'linchong', content: '林冲手中的长枪猛地一顿，他缓缓转过头，那双曾经锐利如电的眼睛此刻却像是一潭死水，毫无生气。', background: BG_DRILL, nextId: 'day7_linchong_dialogue_1' },
  'day7_linchong_dialogue_1': { id: 'day7_linchong_dialogue_1', speaker: '{playerName}', content: '“你的手……在流血。”你指了指他那只被鲜血染红的右手，心里一阵揪紧。”', background: BG_DRILL, nextId: 'day7_linchong_response_2' },
  'day7_linchong_response_2': { id: 'day7_linchong_response_2', speaker: '林冲', characterId: 'linchong', content: '他低头看了看，仿佛那是别人的手一样，语气平淡得令人心惊：“无碍，习惯了。”', background: BG_DRILL, nextId: 'day7_linchong_dialogue_2' },
  'day7_linchong_dialogue_2': { id: 'day7_linchong_dialogue_2', speaker: '{playerName}', content: '“可是……”你还想说些什么，却被他冷淡的目光堵了回去。', background: BG_DRILL, nextId: 'day7_linchong_response_3' },
  'day7_linchong_response_3': { id: 'day7_linchong_response_3', speaker: '林冲', characterId: 'linchong', content: '“姑娘若是来练武的，便去寻呼延将军。林某还有事，先行告退。”', background: BG_DRILL, nextId: 'day7_linchong_leave' },
  'day7_linchong_leave': { id: 'day7_linchong_leave', speaker: '系统', content: '他微微颔首，甚至没有等你回应，便提着那杆染血的长枪，步履蹒跚地消失在校场的尽头。', background: BG_DRILL, nextId: 'day7_pendant_react' },
  'day7_pendant_react': { id: 'day7_pendant_react', speaker: '{playerName}', content: '你呆呆地立在原地，被他那股近乎死寂的冷峻气场震得半晌说不出话来。就在这时，你紧紧握在手心里的星魂坠忽然微微跳动了一下。', background: BG_DRILL, nextId: 'day7_monologue_1' },
  'day7_monologue_1': { id: 'day7_monologue_1', speaker: '{playerName}', content: '咦？星魂坠动了...我记得公孙先生说过...', background: BG_DRILL, nextId: 'day7_flashback_9' },
  'day7_flashback_9': { id: 'day7_flashback_9', speaker: '公孙胜', content: '“唯有唤醒他内心的热血，让他重拾英雄本色，方能保住梁山，亦能保住你自己。”', background: BG_CAVE, characterId: 'gongsunsheng', nextId: 'day7_flashback_10' },
  'day7_flashback_10': { id: 'day7_flashback_10', speaker: '{playerName}', content: '你深吸一口气，追问道：“那林教头……他真的就是那颗星宿转世之人吗？”', background: BG_CAVE, nextId: 'day7_flashback_11' },
  'day7_flashback_11': { id: 'day7_flashback_11', speaker: '公孙胜', content: '公孙胜的目光变得有些暧昧不明，他轻轻摩挲着指尖：“这梁山之上的好汉，皆是星辰转世，这一点毋庸置疑。”', background: BG_CAVE, characterId: 'gongsunsheng', nextId: 'day7_flashback_12' },
  'day7_flashback_12': { id: 'day7_flashback_12', speaker: '公孙胜', content: '“但究竟谁才是真正的‘天选之人’，还需要你自己去发现。因为，只有特定的人，才会与你手中的‘星魂坠’产生感应。”', background: BG_CAVE, characterId: 'gongsunsheng', nextId: 'day7_monologue_2' },
  'day7_monologue_2': { 
    id: 'day7_monologue_2', 
    speaker: '{playerName}', 
    content: '林教头，难道...', 
    contentEn: 'Instructor Lin, could it be...',
    contentJa: '林教頭、まさか……',
    background: BG_DRILL, 
    characterId: null, 
    nextId: 'day7_huyanzhuo_shout_1' 
  },
  'day7_huyanzhuo_shout_1': {
    id: 'day7_huyanzhuo_shout_1',
    speaker: '呼延灼',
    speakerEn: 'Huyan Zhuo',
    speakerJa: '呼延灼',
    content: '“喂！那个魂不守舍的丫头！你在那儿对着空气发什么愁呢？没看到后边马队过来了吗！想被踩成柿子饼吗！”',
    contentEn: '"Hey! You there, girl with your head in the clouds! What are you fretting about into thin air? Didn\'t you see the cavalry coming up behind you! Do you want to be flattened like a persimmon cake?!"',
    contentJa: '「おい！そこの魂の抜けたような小娘！空中を見つめて何をボサっとしているんだ？後ろから馬隊が来ているのが見えないのか！柿の種みたいに踏みつぶされたいのか！」',
    background: BG_DRILL,
    characterId: 'huyanzhuo',
    nextId: 'day7_huyanzhuo_shout_2'
  },
  'day7_huyanzhuo_shout_2': {
    id: 'day7_huyanzhuo_shout_2',
    speaker: '{playerName}',
    content: '“啊...是！呼延将军！”',
    contentEn: '"Ah... Yes! General Huyan!"',
    contentJa: '「あ……はい！呼延将軍！」',
    background: BG_DRILL,
    characterId: null,
    nextId: 'day7_night_1'
  },
  'day7_night_1': {
    id: 'day7_night_1',
    speaker: '系统',
    speakerEn: 'System',
    speakerJa: 'システム',
    content: '深夜，你回到了房间。窗外的月光清冷如霜，照在简陋的床铺上。',
    contentEn: 'Late at night, you returned to your room. The cold moonlight shone like frost upon the simple bedding.',
    contentJa: '深夜、あなたは部屋に戻った。窓の外の冷たい月光が、質素な寝床に霜のように降り注いでいる。',
    background: BG_NIGHT,
    nextId: 'day7_night_2'
  },
  'day7_night_2': {
    id: 'day7_night_2',
    speaker: '{playerName}',
    content: '你翻来覆去，却怎么也睡不着。一闭上眼，白天的画面就在脑海中乱转。',
    contentEn: 'You tossed and turned, unable to sleep. Every time you closed your eyes, the day\'s images spun through your mind.',
    contentJa: '何度も寝返りを打つばかりで、どうしても眠れない。目を閉じると、昼間の光景が脳裏を駆け巡る。',
    background: BG_NIGHT,
    nextId: 'day7_night_3'
  },
  'day7_night_3': {
    id: 'day7_night_3',
    speaker: '{playerName}',
    content: '脑海中挥之不去的，是林教头那只紧握着长枪、却满是鲜血的手。',
    contentEn: 'What haunts my mind is Instructor Lin\'s hand, gripping the spear tightly yet covered in blood.',
    contentJa: '脳裏から離れないのは、長槍を固く握りしめ、血にまみれた林教頭の手だ。',
    background: BG_NIGHT,
    nextId: 'day7_night_4'
  },
  'day7_night_4': {
    id: 'day7_night_4',
    speaker: '{playerName}',
    content: '鲜血顺着冰冷的枪头滑落，一滴，两滴……他却像是感觉不到痛一般，只是机械地挥舞。',
    contentEn: 'Blood slid down the cold spearhead, drop by drop... yet he seemed to feel no pain, only swinging mechanically.',
    contentJa: '血が冷たい矛先を伝って滴る。一滴、二滴……彼は痛みを感じていないかのように、ただ機械的に槍を振るっていた。',
    background: BG_NIGHT,
    nextId: 'day7_night_6'
  },
  'day7_night_6': {
    id: 'day7_night_6',
    speaker: '鲁智深',
    speakerEn: 'Lu Zhishen',
    speakerJa: '魯智深',
    content: '“但你不能一直这样下去啊！你是林教头，不是这山里的缩头乌龟！”',
    contentEn: '"But you can\'t go on like this! You are Instructor Lin, not some shrinking turtle in these mountains!"',
    contentJa: '「だが、いつまでもこうしているわけにはいかん！お主は林教頭だ、この山の縮こまった亀ではないのだ！」',
    background: BG_NIGHT,
    nextId: 'day7_night_7'
  },
  'day7_night_7': {
    id: 'day7_night_7',
    speaker: '{playerName}',
    content: '小时候看《水浒传》电视剧和连环画里，林冲火并王伦后，在梁山明明有很高的地位，是位极重要的元老……',
    contentEn: 'In the Water Margin TV shows and picture books I saw as a kid, Lin Chong had a high status on Liangshan after killing Wang Lun, a very important veteran...',
    contentJa: '子供の頃に見た「水滸伝」のドラマや絵本では、林冲は王倫を火並（かへい）した後に梁山で高い地位にあり、非常に重要な元老だったはずなのに……',
    background: BG_NIGHT,
    nextId: 'day7_night_8'
  },
  'day7_night_8': {
    id: 'day7_night_8',
    speaker: '{playerName}',
    content: '为什么在这个梁山，他会变成被小喽啰嘲笑、甚至被排挤到边缘的存在？',
    contentEn: 'Why on this Liangshan has he become someone mocked by low-level grunts and pushed to the fringes?',
    contentJa: 'なぜこの梁山では、彼は下っ端の者たちに嘲笑され、縁に追いやられる存在になってしまったのだろうか？',
    background: BG_NIGHT,
    nextId: 'day7_night_8_1'
  },
  'day7_night_8_1': {
    id: 'day7_night_8_1',
    speaker: '{playerName}',
    content: '难道我穿越的这个梁山，不是书里那个梁山...',
    contentEn: 'Could it be that this Liangshan I\'ve traveled to isn\'t the one from the books...',
    contentJa: '私がタイムスリップしたこの梁山は、本の中の梁山ではないのだろうか……',
    background: BG_NIGHT,
    nextId: 'day7_night_8_2'
  },
  'day7_night_8_2': {
    id: 'day7_night_8_2',
    speaker: '{playerName}',
    content: '难道...',
    contentEn: 'Could it be...',
    contentJa: 'まさか……',
    background: BG_NIGHT,
    nextId: 'day7_night_9'
  },
  'day7_night_9': {
    id: 'day7_night_9',
    speaker: '{playerName}',
    content: '这觉彻底睡不了了，我还是去校场散步消消食吧...',
    contentEn: 'I clearly can\'t sleep at all; I might as well go for a stroll at the drill grounds...',
    contentJa: 'もう全然眠れそうにない。演武場にでも行って散歩してこようかな……',
    background: BG_NIGHT,
    nextId: 'day7_walk_1'
  },
  'day7_walk_1': {
    id: 'day7_walk_1',
    speaker: '系统',
    speakerEn: 'System',
    speakerJa: 'システム',
    content: '深夜的演武场空旷而寂静。寒风呼啸着穿过兵器架，发出阵阵如咽如泣的声响。',
    contentEn: 'The drill grounds at night were vast and silent. The cold wind whistled through the weapon racks, making a weeping sound.',
    contentJa: '深夜の演武場は広々としていて静まり返っている。寒風が兵器棚を吹き抜け、すすり泣くような音を立てている。',
    background: BG_NIGHT_DRILL,
    nextId: 'day7_walk_2'
  },
  'day7_walk_2': {
    id: 'day7_walk_2',
    speaker: '{playerName}',
    content: '“嘶……好冷……”你不堪严寒，缩了缩肩膀，重重地打了两个冷颤。',
    contentEn: '"Hiss... so cold..." You huddled your shoulders against the biting cold, shivering violently twice.',
    contentJa: '「くっ……寒い……」寒さに耐えかねて、肩をすぼめ、激しく二度身震いした。',
    background: BG_NIGHT_DRILL,
    nextId: 'day7_walk_3'
  },
  'day7_walk_3': {
    id: 'day7_walk_3',
    speaker: '{playerName}',
    content: '以前我上班的时候连上司的一句重话都不敢顶撞，现在竟然敢在深夜的梁山泊校场散步，我也太勇了。',
    contentEn: 'Back when I was working, I didn\'t even dare to talk back to my boss. Now I\'m actually strolling in the Liangshan drill grounds late at night... I\'m so brave.',
    contentJa: '会社員だった頃は上司に言い返すこともできなかったのに、今は深夜の梁山泊で散歩してるなんて……私、勇気ありすぎ。',
    background: BG_NIGHT_DRILL,
    nextId: 'day7_flashback_1'
  },
  'day7_flashback_1': {
    id: 'day7_flashback_1',
    speaker: '主管',
    speakerEn: 'Supervisor',
    speakerJa: '上司',
    content: '“如果你连这点强度都吃不消，你可以现在就卷铺盖走人！公司不养闲人，你的KPI达标了吗？”',
    contentEn: '"If you can\'t even handle this intensity, you can pack your bags and leave right now! The company doesn\'t feed idlers. Have you met your KPIs?"',
    contentJa: '「この程度の強度も耐えられないなら、今すぐ荷物をまとめて出て行け！会社は無能を養わない。KPIは達成したのか？」',
    background: BG_BLACK,
    nextId: 'day7_flashback_1_1'
  },
  'day7_flashback_1_1': {
    id: 'day7_flashback_1_1',
    speaker: '主管',
    speakerEn: 'Supervisor',
    speakerJa: '上司',
    content: '“看什么看？还不快滚回去干活！明早我看不到报告，你就别干了！”',
    contentEn: '"What are you looking at? Get back to work! If I don\'t see the report tomorrow morning, you\'re finished!"',
    contentJa: '「何を見ている？さっさと仕事に戻れ！明日の朝までに報告書が間に合わなければ、もう来なくていい！」',
    background: BG_BLACK,
    nextId: 'day7_flashback_3'
  },
  'day7_flashback_3': {
    id: 'day7_flashback_3',
    speaker: '{playerName}',
    content: '（……明明他在胡说八道，明明全是他在甩锅……可我除了默默生闷气，竟然什么都不敢做。）',
    contentEn: '(...Clearly he was talking nonsense, clearly he was shifting the blame... yet besides silently fuming, I didn\'t dare do anything.)',
    contentJa: '（……明らかに彼はデタラメを言っていたし、責任転嫁をしていただけなのに……私は黙って腹を立てる以外、何もできなかった。）',
    background: BG_BLACK,
    nextId: 'day7_night_walk_1'
  },
  'day7_night_walk_1': {
    id: 'day7_night_walk_1',
    speaker: '系统',
    speakerEn: 'System',
    speakerJa: 'システム',
    content: '你从压抑的回忆中抽离神来，发现自己不知不觉已绕着校场走了一大圈。',
    contentEn: 'Snapping out of your oppressive memories, you find you\'ve unconsciously walked a full circle around the drill grounds.',
    contentJa: '重苦しい記憶から意識を戻すと、知らず知らずのうちに演武場を大きく一周していたことに気づいた。',
    background: BG_NIGHT_DRILL,
    nextId: 'day7_night_walk_1_1'
  },
  'day7_night_walk_1_1': {
    id: 'day7_night_walk_1_1',
    speaker: '{playerName}',
    content: '“嘶...好冷，不会有鬼吧...”',
    contentEn: '"Hiss... so cold, there won\'t be ghosts, right...?"',
    contentJa: '「くっ……寒い、お化けとか出ないよね……？」',
    background: BG_NIGHT_DRILL,
    nextId: 'day7_night_walk_2'
  },
  'day7_night_walk_2': {
    id: 'day7_night_walk_2',
    speaker: '系统',
    speakerEn: 'System',
    speakerJa: 'システム',
    content: '在那排漆黑的兵器架后面，你隐约看到一个模糊的身影，在惨淡的月光下缓缓晃动。',
    contentEn: 'Behind that row of pitch-black weapon racks, you vaguely see a blurry figure swaying slowly in the dismal moonlight.',
    contentJa: '真っ暗な兵器棚の列の向こうに、惨澹たる月光を浴びてゆっくりと動く人影がぼんやりと見えた。',
    background: BG_NIGHT_DRILL,
    nextId: 'day7_night_walk_3'
  },
  'day7_night_walk_3': {
    id: 'day7_night_walk_3',
    speaker: '{playerName}',
    content: '（那是……林教头？）你屏住呼吸，悄悄躲在阴影里，果然看到林冲正独自一人在那里默默练枪。',
    contentEn: '(Is that... Instructor Lin?) Holding your breath, you hide quietly in the shadows and sure enough, see Lin Chong practicing his spear alone.',
    contentJa: '（あれは……林教頭？）息を殺して影に隠れると、案の定、林冲が一人で黙々と槍の稽古をしていた。',
    background: BG_NIGHT_DRILL,
    nextId: 'day7_night_walk_4'
  },
  'day7_night_walk_4': {
    id: 'day7_night_walk_4',
    speaker: '系统',
    speakerEn: 'System',
    speakerJa: 'システム',
    content: '只见长枪在他手中如银龙穿梭，枪尖划破寒风发出阵阵厉响。他的身形在夜色中既极快又极稳，每一记突刺都带着排山倒海般的决绝，仿佛要将眼前的黑暗彻底贯穿。',
    contentEn: 'The long spear in his hand moved like a silver dragon weaving through the air, the tip whistling and cutting through the cold wind. His form in the darkness was both lightning-fast and rock-steady, each thrust carrying an overwhelming decisiveness, as if to pierce through the darkness entirely.',
    contentJa: '長槍は彼の手の中で銀龍が往来するように舞い、矛先が寒風を切り裂いて鋭い音を立てている。夜闇の中の彼の身のこなしは極めて速く、かつ極めて安定しており、一突き一突きが山を崩し海を覆すような断固とした勢いを帯び、目の前の闇を完全に貫こうとしているかのようだった。',
    background: BG_NIGHT_DRILL,
    nextId: 'linchong_demo_15'
  },
  'linchong_demo_15': { 
    id: 'linchong_demo_15', 
    speaker: '系统', 
    speakerEn: 'System',
    speakerJa: 'システム',
    content: '第七天。未完待续...', 
    contentEn: 'Day 7. To be continued...',
    contentJa: '七日目。続く……',
    background: BG_CAMP, 
    choices: [ 
      { 
        text: '重新开始', 
        textEn: 'Restart',
        textJa: 'リスタート',
        nextId: 'start' 
      } 
    ] 
  }
};
