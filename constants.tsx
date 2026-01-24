import { Character, StoryNode, DivinationBuff } from './types';

// --- 资源常量 ---
const LIKUI_IMAGE = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%9D%8E%E9%80%B5png.png?raw=true"; 
const LUZHISHEN_IMAGE = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E9%B2%81%E6%99%BA%E6%B7%B1%E5%AF%B9%E8%AF%9D.jpg?raw=true";
const LUJUNYI_IMAGE = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/lujunyiduihua.jpg?raw=true";
const YANQING_IMAGE = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E7%87%95%E9%9D%92lihui.jpg?raw=true";

const BG_MOUNTAIN = "https://images.unsplash.com/photo-1505506005708-3058a94639e7?auto=format&fit=crop&q=80&w=2000";
const BG_CAMP = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%A2%81%E5%B1%B1%E6%A0%A1%E5%9C%BA.png?raw=true";
const BG_FOREST = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000";
const BG_MARKET = "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=2000";
const BG_FESTIVAL = "https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&q=80&w=2000";
const BG_CAVE = "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000";

export const DIVINATION_BUFFS: DivinationBuff[] = [
  { id: 'tianxi', name: '上上签 · 天喜星动', description: '鸿运当头！今日传信互动好感额外+5。', effectType: 'affection', icon: '🏮' },
  { id: 'yima', name: '中签 · 驿马星驰', description: '偶遇英雄的几率提升。', effectType: 'speed', icon: '🐎' },
  { id: 'wuyun', name: '下签 · 乌云盖顶', description: '传信鸽子可能会迷路。', effectType: 'funny', icon: '☁️' },
  { id: 'taohua', name: '桃花煞', description: '修罗场触发几率大幅提升！', effectType: 'random', icon: '🌸' }
];

export const CHARACTERS: Character[] = [
  { id: 'lujunyi', name: '卢俊义', title: '玉麒麟', description: '河北首富，懂生活更懂你。', avatar: LUJUNYI_IMAGE, portrait: LUJUNYI_IMAGE, personality: '优雅、严谨、深情', affection: 0, interactionCount: 0, difficulty: 3, archetype: '导师', heartbeatEvents: [] },
  { id: 'yanqing', name: '燕青', title: '浪子', description: '梁山第一特工，情趣大师。', avatar: YANQING_IMAGE, portrait: YANQING_IMAGE, personality: '狡黠、浪漫', affection: 0, interactionCount: 0, difficulty: 4, archetype: '竹马', heartbeatEvents: [] },
  { id: 'luzhishen', name: '鲁智深', title: '花和尚', description: '大智若愚，你的随身保镖。', avatar: LUZHISHEN_IMAGE, portrait: LUZHISHEN_IMAGE, personality: '豪爽、赤诚', affection: 0, interactionCount: 0, difficulty: 2, archetype: '守护者', heartbeatEvents: [] },
  { id: 'likui', name: '李逵', title: '黑旋风', description: '直球之王，单纯得让人头疼。', avatar: LIKUI_IMAGE, portrait: LIKUI_IMAGE, personality: '狂放、憨直', affection: 0, interactionCount: 0, difficulty: 1, archetype: '犬系', heartbeatEvents: [
    {
      id: 101,
      title: "沂岭狂旋风",
      description: "在血色夕阳下，他为你斩断了四头恶虎的喉咙。",
      cgImage: "https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?auto=format&fit=crop&q=80&w=1500",
      imagePrompt: "A fierce warrior with two axes fighting four tigers in a sunset forest, high contrast, cinematic light",
      requiredAffection: 20,
      isUnlocked: false
    }
  ] }
];

export const STORY_DATA: Record<string, StoryNode> = {
  // --- 第1天：穿越与聚义厅初遇 ---
  'start': { id: 'start', speaker: '系统', content: '（伴随着剧烈的眩晕感，你感到世界在崩塌……）', background: BG_MOUNTAIN, nextId: 'ch1_p2' },
  'ch1_p2': { id: 'ch1_p2', speaker: '你', content: '头好痛……最后记得的是公司年会的假酒，还有主管那张催周报的脸。这里是哪？', background: BG_MOUNTAIN, nextId: 'ch1_p3' },
  'ch1_p3': { id: 'ch1_p3', speaker: '系统', content: '你尝试着睁开眼，视线模糊不清。耳边传来沉重的脚步声，泥土的芬芳中夹杂着一丝生肉的腥气。', background: BG_MOUNTAIN, nextId: 'ch1_p4' },
  'ch1_p4': { id: 'ch1_p4', speaker: '系统', content: '当你视线终于聚焦时，一张漆黑如炭、胡须虬结的巨脸赫然出现在你眼前！', background: BG_MOUNTAIN, nextId: 'ch1_p5' },
  'ch1_p5': { id: 'ch1_p5', speaker: '你', content: '（吓得魂飞魄散，发出一声惨叫）鬼、鬼啊！！救命啊！！', background: BG_MOUNTAIN, nextId: 'ch1_p6' },
  'ch1_p6': { id: 'ch1_p6', speaker: '黑壮大汉', characterId: 'likui', content: '（瞪圆了铜铃眼）闭嘴！嚎丧呢？俺长得这么精神，哪点像鬼了？再喊俺一斧头劈了你！', background: BG_MOUNTAIN, nextId: 'ch1_p7' },
  'ch1_p7': { id: 'ch1_p7', speaker: '你', content: '（瞬间噤声，浑身发抖）别……别劈。敢问这位大侠，这……这是哪？', background: BG_MOUNTAIN, nextId: 'ch1_p8' },
  'ch1_p8': { id: 'ch1_p8', speaker: '黑壮大汉', characterId: 'likui', content: '哼，听好了！这里是梁山！俺乃黑旋风李逵！你这厮怎地趴在枯叶堆里装死？', background: BG_MOUNTAIN, nextId: 'ch1_p9' },
  'ch1_p9': { id: 'ch1_p9', speaker: '你', content: '（脑中嗡的一声）梁山？李逵？穿越……这种事居然真的发生了？！', background: BG_MOUNTAIN, nextId: 'ch1_p10' },
  'ch1_p10': { id: 'ch1_p10', speaker: '李逵', characterId: 'likui', content: '嘿，看你这小模样，白白净净，细皮嫩肉的。山上正好缺个使唤的，我看你倒是好使唤！走，带你去见哥哥！', background: BG_MOUNTAIN, nextId: 'ch1_p13' },
  'ch1_p13': { id: 'ch1_p13', speaker: '系统', content: '他蒲扇大的手一张，像拎小鸡仔一样把你拎起来，直接扛在了宽阔的肩膀上。一路上山风凛冽，你几乎被颠晕过去。', background: BG_CAMP, nextId: 'ch1_p14' },
  'ch1_p14': { id: 'ch1_p14', speaker: '系统', content: '终于，你被重重摔在一座宏伟的大厅中央。四周光线略暗，无数道锐利的目光如同针扎一般刺向你。', background: BG_CAMP, nextId: 'ch1_p15' },
  'ch1_p15': { id: 'ch1_p15', speaker: '系统', content: '你抬头望去，正中央那块“聚义厅”的匾额巍峨如山。', background: BG_CAMP, nextId: 'ch1_p16' },
  'ch1_p16': { id: 'ch1_p16', speaker: '宋江', content: '铁牛，这又是你从哪掳回来的孩子？看起来惊魂未定的。', background: BG_CAMP, nextId: 'ch1_os_intro' },
  
  'ch1_os_intro': { id: 'ch1_os_intro', speaker: '系统', content: '面对主座上威严的询问，你正惊慌失措地试图解释，厅内四角传来了不同的心思……', background: BG_CAMP, nextId: 'ch1_p17_os' },
  'ch1_p17_os': { id: 'ch1_p17_os', speaker: '卢俊义', characterId: 'lujunyi', content: '（内心OS：天降异人？衣着古怪，不似作伪。且看兄长如何安置。）', background: BG_CAMP, nextId: 'ch1_p18_os' },
  'ch1_p18_os': { id: 'ch1_p18_os' , speaker: '燕青', characterId: 'yanqing', content: '（内心OS：哟，这小身板，落在铁牛手里怕是要折腾坏了。有趣。）', background: BG_CAMP, nextId: 'ch1_p19_os' },
  'ch1_p19_os': { id: 'ch1_p19_os', speaker: '鲁智深', characterId: 'luzhishen', content: '（内心OS：哪里来的小家伙？瞧着文弱，可别被铁牛吓破了胆。）', background: BG_CAMP, nextId: 'ch1_p20_os' },
  'ch1_p20_os': { id: 'ch1_p20_os', speaker: '李逵', characterId: 'likui', content: '（内心OS：俺老铁牛捡回来的，就是俺的人了！）', background: BG_CAMP, nextId: 'ch1_p21' },
  'ch1_p21': { id: 'ch1_p21', speaker: '系统', content: '公孙胜认定你是天罡灵气的承载者。宋江决定让你暂住梁山，接受训练。', background: BG_CAMP, nextId: 'ch1_d2_1' },

  // --- 第2天：抉择与深化 ---
  'ch1_d2_1': { id: 'ch1_d2_1', speaker: '系统', content: '第2天。林子里，李逵正教你如何“大喊”来威慑野兽。', background: BG_FOREST, nextId: 'ch1_d2_11' },
  'ch1_d2_11': { id: 'ch1_d2_11', speaker: '鲁智深', characterId: 'luzhishen', content: '（大步走来）铁牛！你教这孩子嗓门有甚用？不如教点实在的。', background: BG_FOREST, nextId: 'ch1_d2_12' },
  'ch1_d2_12': { id: 'ch1_d2_12', speaker: '鲁智深', characterId: 'luzhishen', content: '孩子，别理这黑厮了。随洒家去后山静修，教你调理灵气的禅意。', background: BG_FOREST, choices: [
    { text: '（对鲁智深）多谢大师，明天一定去。', nextId: 'ch1_d2_likui_sad', affectionBonus: { charId: 'luzhishen', points: 10 } },
    { text: '（对李逵）其实铁牛教得也……挺带劲的。', nextId: 'ch1_d2_likui_happy', affectionBonus: { charId: 'likui', points: 20 } }
  ]},

  'ch1_d2_likui_sad': { id: 'ch1_d2_likui_sad', speaker: '李逵', characterId: 'likui', content: '（嘴巴一瘪）哎呀！你这没良心的小文书，俺不依！', background: BG_FOREST, nextId: 'ch1_d3_1' },

  'ch1_d2_likui_happy': { id: 'ch1_d2_likui_happy', speaker: '李逵', characterId: 'likui', content: '（狂喜，围着你转圈）哈哈！大师你听见没？小文书说俺教得带劲！', background: BG_FOREST, nextId: 'ch1_d2_luzhishen_leave' },
  'ch1_d2_luzhishen_leave': { id: 'ch1_d2_luzhishen_leave', speaker: '鲁智深', characterId: 'luzhishen', content: '那好吧，既然你执意要跟这黑厮学，洒家也不强求。洒家平时都在竹林里，若被他吵烦了，随时来找洒家。', background: BG_FOREST, nextId: 'ch1_d2_kui_extra_1' },
  
  // --- 李逵特训扩充（10页） ---
  'ch1_d2_kui_extra_1': { id: 'ch1_d2_kui_extra_1', speaker: '李逵', characterId: 'likui', content: '好兄弟！既然留下了，俺老铁牛绝不亏待你。先教你这使斧头的“旋风三十六劈”……第一式，抡圆了！', background: BG_FOREST, nextId: 'ch1_d2_kui_extra_2' },
  'ch1_d2_kui_extra_2': { id: 'ch1_d2_kui_extra_2', speaker: '你', content: '（由于斧头太重，一个踉跄差点栽进沟里）停停停！李大哥，我这胳膊都要脱臼了……', background: BG_FOREST, nextId: 'ch1_d2_kui_extra_3' },
  'ch1_d2_kui_extra_3': { id: 'ch1_d2_kui_extra_3', speaker: '李逵', characterId: 'likui', content: '（一把拉住你的后颈领子）嘿，真像只小鸡仔。没劲儿是因为没吃肉！走，俺带你烤肉去！', background: BG_CAVE, nextId: 'ch1_d2_kui_extra_4' },
  'ch1_d2_kui_extra_4': { id: 'ch1_d2_kui_extra_4', speaker: '系统', content: '他带你来到一个隐蔽的山洞口，麻利地架起火堆，从腰间解下一大块野猪肉。', background: BG_CAVE, nextId: 'ch1_d2_kui_extra_5' },
  'ch1_d2_kui_extra_5': { id: 'ch1_d2_kui_extra_5', speaker: '李逵', characterId: 'likui', content: '给，咬一大口！这可是俺昨天刚打的新鲜货，吃了它才有力气砍人……不是，练功！', background: BG_CAVE, nextId: 'ch1_d2_kui_extra_6' },
  'ch1_d2_kui_extra_6': { id: 'ch1_d2_kui_extra_6', speaker: '你', content: '（虽然卖相粗犷，但味道竟然出奇的好）唔……确实很好吃。李大哥，你平时除了打架还喜欢做什么？', background: BG_CAVE, nextId: 'ch1_d2_kui_extra_7' },
  'ch1_d2_kui_extra_7': { id: 'ch1_d2_kui_extra_7', speaker: '李逵', characterId: 'likui', content: '俺？俺喜欢陪哥哥喝酒。不过现在……俺觉得陪你在这儿烤火，也不赖。', background: BG_CAVE, nextId: 'ch1_d2_kui_extra_8' },
  'ch1_d2_kui_extra_8': { id: 'ch1_d2_kui_extra_8', speaker: '系统', content: '火光映照在他漆黑的脸上，那双平日里凶悍的铜铃眼，此时竟显得有些温柔。', background: BG_CAVE, nextId: 'ch1_d2_kui_extra_9' },
  'ch1_d2_kui_extra_9': { id: 'ch1_d2_kui_extra_9', speaker: '你', content: '（心跳漏了一拍）李大哥……', background: BG_CAVE, nextId: 'ch1_d2_kui_extra_10' },
  'ch1_d2_kui_extra_10': { id: 'ch1_d2_kui_extra_10', speaker: '李逵', characterId: 'likui', content: '快吃快吃，吃完俺再教你第二式：“旋风卷残云”！明天俺要带你去个好地方！', background: BG_CAVE, nextId: 'ch1_d3_tiger_start' },

  // --- 第3天：心动剧情 - 沂岭杀四虎 ---
  'ch1_d3_tiger_start': { id: 'ch1_d3_tiger_start', speaker: '系统', content: '第3天。夕阳如血。李逵执意要带你翻越沂岭，说是要带你见识真正的山川。', background: BG_MOUNTAIN, nextId: 'ch1_d3_tiger_1' },
  'ch1_d3_tiger_1': { id: 'ch1_d3_tiger_1', speaker: '你', content: '这天都要黑了，林子里总觉得阴森森的……李大哥，我们要不先回去？', background: BG_MOUNTAIN, nextId: 'ch1_d3_tiger_2' },
  'ch1_d3_tiger_2': { id: 'ch1_d3_tiger_2', speaker: '李逵', characterId: 'likui', content: '怕个甚！有俺老铁牛在，甚么牛鬼蛇神敢近身？', background: BG_MOUNTAIN, nextId: 'ch1_d3_tiger_3' },
  'ch1_d3_tiger_3': { id: 'ch1_d3_tiger_3', speaker: '系统', content: '话音未落，一阵腥风掠过。四双幽绿的眼睛在灌木丛中浮现。', background: BG_MOUNTAIN, nextId: 'ch1_d3_tiger_4' },
  'ch1_d3_tiger_4': { id: 'ch1_d3_tiger_4', speaker: '你', content: '（尖叫）是虎！四头老虎！！', background: BG_MOUNTAIN, nextId: 'ch1_d3_tiger_5' },
  'ch1_d3_tiger_5': { id: 'ch1_d3_tiger_5', speaker: '系统', content: '猛虎咆哮着扑来。李逵发出一声狂吼，那声音竟比虎啸还要震人心魄！', background: BG_MOUNTAIN, nextId: 'ch1_d3_tiger_6' },
  'ch1_d3_tiger_6': { id: 'ch1_d3_tiger_6', speaker: '李逵', characterId: 'likui', content: '畜生！敢动俺的人？！拿命来！！', background: BG_MOUNTAIN, nextId: 'ch1_d3_tiger_7' },
  'ch1_d3_tiger_7': { id: 'ch1_d3_tiger_7', speaker: '系统', content: '【心动剧场开启：沂岭杀四虎】', background: BG_MOUNTAIN, nextId: 'ch1_d3_tiger_8' },
  'ch1_d3_tiger_8': { id: 'ch1_d3_tiger_8', speaker: '系统', content: '板斧挥舞如墨色旋风，血光四溅。他在虎群中狂舞，每一击都重逾千钧。', background: BG_MOUNTAIN, nextId: 'ch1_d3_tiger_9' },
  'ch1_d3_tiger_9': { id: 'ch1_d3_tiger_9', speaker: '系统', content: '最后一头大虎倒下时，李逵单膝跪地，喘着粗气，浑身被虎血染红。', background: BG_MOUNTAIN, nextId: 'ch1_d3_tiger_10' },
  'ch1_d3_tiger_10': { id: 'ch1_d3_tiger_10', speaker: '李逵', characterId: 'likui', content: '（急促地看向你）小文书……没、没吓着吧？别看……俺这一身脏。', background: BG_MOUNTAIN, nextId: 'ch1_d3_tiger_11' },
  'ch1_d3_tiger_11': { id: 'ch1_d3_tiger_11', speaker: '你', content: '（冲上去紧紧抱住他）你个大笨蛋！吓死我了……', background: BG_MOUNTAIN, nextId: 'ch1_d4_1' },

  // --- 接续主线 ---
  'ch1_d3_1': { id: 'ch1_d3_1', speaker: '系统', content: '第3天。竹林。鲁智深正赤着上身对着一棵老槐树静坐。', background: BG_FOREST, nextId: 'ch1_d3_2' },
  'ch1_d3_2': { id: 'ch1_d3_2', speaker: '你', content: '大师，这坐着就能学技能？', background: BG_FOREST, nextId: 'ch1_d3_3' },
  'ch1_d3_3': { id: 'ch1_d3_3', speaker: '鲁智深', characterId: 'luzhishen', content: '坐个甚！洒家在感受这树的力。', background: BG_FOREST, nextId: 'ch1_d3_4' },
  'ch1_d3_4': { id: 'ch1_d3_4', speaker: '你', content: '（闭眼）除了蚊子叫，我什么都听不到……', background: BG_FOREST, nextId: 'ch1_d3_10' },
  'ch1_d3_10': { id: 'ch1_d3_10', speaker: '小厮', content: '报！卢员外请星引者大人明日午后前往校场。', background: BG_FOREST, nextId: 'ch1_d4_1' },

  'ch1_d4_1': { id: 'ch1_d4_1', speaker: '系统', content: '第4天。校场。卢俊义正等着你。', background: BG_CAMP, nextId: 'ch1_d4_2' },
  'ch1_d4_2': { id: 'ch1_d4_2', speaker: '卢俊义', characterId: 'lujunyi', content: '来了。', background: BG_CAMP, nextId: 'ch1_d4_9' },
  'ch1_d4_9': { id: 'ch1_d4_9', speaker: '你', content: '谢、谢谢员外……', background: BG_CAMP, nextId: 'ch1_d5_1' },
  'ch1_d5_1': { id: 'ch1_d5_1', speaker: '系统', content: '第5天。一张画着墨点的纸条。', background: BG_MARKET, nextId: 'ch1_d5_4' },
  'ch1_d5_4': { id: 'ch1_d5_4', speaker: '燕青', characterId: 'yanqing', content: '慢了三息。', background: BG_MARKET, nextId: 'ch1_end' },

  'ch1_end': { id: 'ch1_end', speaker: '系统', content: '第一章：天罡附体 · 完。', background: BG_CAMP, nextId: 'free_talk_intro' },
  'free_talk_intro': { id: 'free_talk_intro', speaker: '系统', content: '现在可以传信互动了。', background: BG_CAMP, nextId: 'free_talk_intro' }
};
