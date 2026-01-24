
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
  // --- 穿越内心OS (3页) ---
  'start': { id: 'start', speaker: '你', content: '（意识像被卷入了一台失控的碎纸机，五彩斑斓的黑暗在眼前疯狂旋转……）', background: BG_MOUNTAIN, nextId: 'trans_os_2' },
  'trans_os_2': { id: 'trans_os_2', speaker: '你', content: '（最后的记忆是主管那张吐着唾沫星子的脸，还有永远写不完的KPI……如果这就是死亡，请让我死在没有PPT的地方。）', background: BG_MOUNTAIN, nextId: 'trans_os_3' },
  'trans_os_3': { id: 'trans_os_3', speaker: '你', content: '（渐渐地，耳边的嘈杂消失了，取而代之的是泥土的芬芳，以及一种……沉重的、压迫感极强的呼吸声。）', background: BG_MOUNTAIN, nextId: 'woods_1' },

  // --- 林间初遇李逵 (10页) ---
  'woods_1': { id: 'woods_1', speaker: '你', content: '（猛地睁开眼，首先映入眼帘的是一片遮天蔽日的古怪森林，然后是一张……近在咫尺的、黑得像锅底一样的巨脸。）', background: BG_FOREST, nextId: 'woods_2' },
  'woods_2': { id: 'woods_2', speaker: '你', content: '“哇啊啊啊啊！！鬼啊！！”（你连滚带爬地向后缩去）', background: BG_FOREST, nextId: 'woods_3' },
  'woods_3': { id: 'woods_3', speaker: '黑大汉', content: '“嚷甚么！闭嘴！再嚷俺一斧头劈了你这小后生！”（大汉瞪圆了牛眼，腰间两柄板斧在阳光下泛着寒光）', background: BG_FOREST, characterId: 'likui', nextId: 'woods_4' },
  'woods_4': { id: 'woods_4', speaker: '你', content: '（吓得瞬间失声，浑身发抖）“你……你是谁？我这是在哪？”', background: BG_FOREST, nextId: 'woods_5' },
  'woods_5': { id: 'woods_5', speaker: '黑大汉', content: '“听好了，俺乃梁山黑旋风李逵！这里自然是梁山泊的地界。”', background: BG_FOREST, characterId: 'likui', nextId: 'woods_6' },
  'woods_6': { id: 'woods_6', speaker: '你', content: '“梁……梁山？《水浒传》？开什么玩笑，我一定是年终奖没拿够产生幻觉了……”', background: BG_FOREST, nextId: 'woods_7' },
  'woods_7': { id: 'woods_7', speaker: '李逵', characterId: 'likui', content: '“甚么传不传的，没听过！俺看你这厮穿得古里古怪，细皮嫩肉的，倒像个有钱人家的俏文书。”', background: BG_FOREST, nextId: 'woods_8' },
  'woods_8': { id: 'woods_8', speaker: '李逵', characterId: 'likui', content: '“正好，哥哥最近缺个端茶递水、誊写账目的。你这细身板虽然砍不了人，使唤起来倒也方便。”', background: BG_FOREST, nextId: 'woods_9' },
  'woods_9': { id: 'woods_9', speaker: '你', content: '“等等！你想干什么？我还没同意入职……不，入伙！”', background: BG_FOREST, nextId: 'woods_10' },
  'woods_10': { id: 'woods_10', speaker: '李逵', characterId: 'likui', content: '“由不得你！走你！”（他像拎小鸡一样把你扛到肩上，大步流星地往山上走去）', background: BG_FOREST, nextId: 'hall_entry' },

  // --- 聚义厅初遇 (扩充至20页) ---
  'hall_entry': { id: 'hall_entry', speaker: '系统', content: '（你就这样被头朝下地扛进了聚义厅，直到被李逵砰地一声丢在冰冷的地砖上。）', background: BG_CAMP, nextId: 'ch1_os_start' },
  
  // 四人内心OS
  'ch1_os_start': { id: 'ch1_os_start', speaker: '卢俊义', characterId: 'lujunyi', content: '（内心OS：天降异人？衣着古怪，身无法力波动…是祸是福？且看兄长如何处置。倒是这惊慌模样，不似作伪。）', background: BG_CAMP, nextId: 'ch1_os_yanqing' },
  'ch1_os_yanqing': { id: 'ch1_os_yanqing', speaker: '燕青', characterId: 'yanqing', content: '（内心OS：哟，从天而降？这出场比戏文还精彩。衣裳料子从未见过，面孔也生…有趣，这梁山是越来越热闹了。）', background: BG_CAMP, nextId: 'ch1_os_luzhishen' },
  'ch1_os_luzhishen': { id: 'ch1_os_luzhishen', speaker: '鲁智深', characterId: 'luzhishen', content: '（内心OS：嗯？！哪里来的小女娃？莫不是被甚么妖风刮来的？瞧着细皮嫩肉，可别摔坏了。）', background: BG_CAMP, nextId: 'ch1_os_likui' },
  'ch1_os_likui': { id: 'ch1_os_likui', speaker: '李逵', characterId: 'likui', content: '（内心OS：啊呀！天上掉下个人来！是神仙还是点心？！）', background: BG_CAMP, nextId: 'ch1_songjiang_ask' },

  // 第一轮对话
  'ch1_songjiang_ask': { id: 'ch1_songjiang_ask', speaker: '宋江', content: '“你是何人？从何而来？为何突然现于我聚义厅？”', background: BG_CAMP, nextId: 'ch1_player_stutter' },
  'ch1_player_stutter': { id: 'ch1_player_stutter', speaker: '你', content: '“我……我来自二十一世纪……我刚还在吃年会大餐……我是穿越来的！”', background: BG_CAMP, nextId: 'ch1_likui_interject' },
  'ch1_likui_interject': { id: 'ch1_likui_interject', speaker: '李逵', characterId: 'likui', content: '“哥哥！问这许多作甚！你看他/她吓得脸都白了，定是好人！饿不饿？俺那儿有刚烤的羊腿！”', background: BG_CAMP, nextId: 'ch1_luzhishen_stop_kui' },
  'ch1_luzhishen_stop_kui': { id: 'ch1_luzhishen_stop_kui', speaker: '鲁智深', characterId: 'luzhishen', content: '“铁牛休得莽撞！你这黑厮，没见人家惊魂未定？你那油手莫脏了人家衣裳！”（转头对你）“小后生，莫怕，洒家这儿有凳子。”', background: BG_CAMP, nextId: 'ch1_yanqing_glide' },
  'ch1_yanqing_glide': { id: 'ch1_yanqing_glide', speaker: '燕青', characterId: 'yanqing', content: '“鲁大师，您那冷板凳怕是也会吓着贵客。”（微微欠身）“小可燕青，见过姑娘。阁下服饰奇异，莫非……并非此世之人？”', background: BG_CAMP, nextId: 'ch1_lujunyi_stern' },
  'ch1_lujunyi_stern': { id: 'ch1_lujunyi_stern', speaker: '卢俊义', characterId: 'lujunyi', content: '“小乙，休要妄言。此子来历不明，且看他如何证明身份。”', background: BG_CAMP, nextId: 'ch1_future_reveals' },

  // 第二轮对话
  'ch1_future_reveals': { id: 'ch1_future_reveals', speaker: '你', content: '“我真的来自未来……我知道你们所有人，玉麒麟卢员外、浪子燕青、花和尚鲁大师……”', background: BG_CAMP, nextId: 'ch1_kui_future' },
  'ch1_kui_future': { id: 'ch1_kui_future', speaker: '李逵', characterId: 'likui', content: '“未来？是明天的意思不？那你知不知道明天俺和武松哥哥谁喝酒赢？”', background: BG_CAMP, nextId: 'ch1_lu_future' },
  'ch1_lu_future': { id: 'ch1_lu_future', speaker: '鲁智深', characterId: 'luzhishen', content: '“未来人都这般文弱么？洒家瞧你这身板，怕是连俺的禅杖都拎不动。”', background: BG_CAMP, nextId: 'ch1_yan_future' },
  'ch1_yan_future': { id: 'ch1_yan_future', speaker: '燕青', characterId: 'yanqing', content: '“有趣。若真来自未来，可知我燕青结局？”（圆场）“玩笑。眼下最重要的，是这位客官带了什么‘天命’。”', background: BG_CAMP, nextId: 'ch1_lujunyi_verdict' },
  'ch1_lujunyi_verdict': { id: 'ch1_lujunyi_verdict', speaker: '卢俊义', characterId: 'lujunyi', content: '“子不语怪力乱神。俊义之见，当暂且安置，严加看管。再作定夺。”', background: BG_CAMP, nextId: 'ch1_luzhishen_oppose' },
  'ch1_luzhishen_oppose': { id: 'ch1_luzhishen_oppose', speaker: '鲁智深', characterId: 'luzhishen', content: '“卢员外忒也小心！俺看不如先让公孙道长瞧瞧，是不是中了什么邪术。”', background: BG_CAMP, nextId: 'ch1_likui_protect' },
  'ch1_likui_protect': { id: 'ch1_likui_protect', speaker: '李逵', characterId: 'likui', content: '“对对对！肯定是神仙！你叫啥名字？以后俺李逵罩着你！”', background: BG_CAMP, nextId: 'ch1_yan_whisper' },
  'ch1_yan_whisper': { id: 'ch1_yan_whisper', speaker: '燕青', characterId: 'yanqing', content: '（低声对你说）“瞧瞧，你一来，这聚义厅可比听说书热闹多了。自求多福吧。”', background: BG_CAMP, nextId: 'ch1_end_summary' },
  'ch1_end_summary': { id: 'ch1_end_summary', speaker: '系统', content: '就这样，你稀里糊涂地在梁山泊落了脚。而你的‘梁山特训’，才刚刚开始……', background: BG_CAMP, nextId: 'day2_start' },

  // --- Day 2: 李逵特训与撞见 (10+对话) ---
  'day2_start': { id: 'day2_start', speaker: '系统', content: '第二天清晨，你正费劲地研究着那套复杂的宋代内衫……', background: BG_CAVE, nextId: 'day2_kui_barge' },
  'day2_kui_barge': { id: 'day2_kui_barge', speaker: '李逵', characterId: 'likui', content: '“小文书！快起！俺带你去……哎呀！妈呀！”（李逵一脚踹开门，正撞见衣冠不整的你）', background: BG_CAVE, nextId: 'day2_player_scream' },
  'day2_player_scream': { id: 'day2_player_scream', speaker: '你', content: '“李！逵！！出去！！滚出去！！”', background: BG_CAVE, nextId: 'day2_kui_clueless' },
  'day2_kui_clueless': { id: 'day2_kui_clueless', speaker: '李逵', characterId: 'likui', content: '“嘿，害臊甚？俺家那水牛洗澡都不避人。快穿上，俺要教你‘野兽直觉’！”', background: BG_CAVE, nextId: 'day2_training_1' },
  'day2_training_1': { id: 'day2_training_1', speaker: '李逵', characterId: 'likui', content: '“听好了！要想着有人抢了你的最后一块羊腿，气沉丹田，大喊一声——滚！！”', background: BG_FOREST, nextId: 'day2_lu_encounter' },
  'day2_lu_encounter': { id: 'day2_lu_encounter', speaker: '鲁智深', characterId: 'luzhishen', content: '“铁牛！你教这孩子嗓门有甚用？吓唬野猪呢？”', background: BG_FOREST, nextId: 'day2_lu_invite' },
  'day2_lu_invite': { id: 'day2_lu_invite', speaker: '鲁智深', characterId: 'luzhishen', content: '“孩子，明日来竹林找洒家。洒家教你‘禅意感知’，比这黑厮的破锣嗓子雅致多了。”', background: BG_FOREST, choices: [
    { text: '（坚定地）我还是想跟铁牛大哥多学学。', nextId: 'day2_stay_kui', affectionBonus: { charId: 'likui', points: 15 } },
    { text: '（礼貌地）好，明天我去竹林拜访大师。', nextId: 'day2_accept_lu', affectionBonus: { charId: 'luzhishen', points: 15 } }
  ]},

  'day2_accept_lu': { id: 'day2_accept_lu', speaker: '李逵', characterId: 'likui', content: '“哎呀！你这没良心的，俺不依！俺明天非把你扛回来不可！”', background: BG_FOREST, nextId: 'day3_lu_start' },
  
  'day2_stay_kui': { id: 'day2_stay_kui', speaker: '李逵', characterId: 'likui', content: '（狂喜，大巴掌拍你后背）“哈哈！够意思！俺就说你这小文书对俺胃口！”', background: BG_FOREST, nextId: 'day2_stay_kui_2' },
  'day2_stay_kui_2': { id: 'day2_stay_kui_2', speaker: '鲁智深', characterId: 'luzhishen', content: '“那好吧，既如此，洒家也不强求。洒家在竹林随时恭候。”（离去）', background: BG_FOREST, nextId: 'day2_kui_interaction' },
  'day2_kui_interaction': { id: 'day2_kui_interaction', speaker: '李逵', characterId: 'likui', content: '“别理那秃……大师。来，俺教你‘皮糙肉厚’。站稳了！”', background: BG_FOREST, nextId: 'day2_kui_3' },
  'day2_kui_3': { id: 'day2_kui_3', speaker: '李逵', characterId: 'likui', content: '（拿出一根小木棍轻轻敲你）“疼不？要憋住气，想象自己是个石墩子！”', background: BG_FOREST, nextId: 'day2_kui_4' },
  'day2_kui_4': { id: 'day2_kui_4', speaker: '你', content: '“李大哥，这样真的能刀枪不入吗？”', background: BG_FOREST, nextId: 'day2_kui_5' },
  'day2_kui_5': { id: 'day2_kui_5', speaker: '李逵', characterId: 'likui', content: '“那当然！俺老铁牛闯江湖就靠这个！心大，皮厚！”', background: BG_FOREST, nextId: 'day2_kui_6' },
  'day2_kui_6': { id: 'day2_kui_6', speaker: '你', content: '“那要是心碎了呢？”', background: BG_FOREST, nextId: 'day2_kui_7' },
  'day2_kui_7': { id: 'day2_kui_7', speaker: '李逵', characterId: 'likui', content: '“心碎？拿酒补补就不碎了！走，俺去哥哥那里偷坛好酒分你喝！”', background: BG_FOREST, nextId: 'day2_kui_8' },
  'day2_kui_8': { id: 'day2_kui_8', speaker: '你', content: '“噗，你真是个直球选手。”', background: BG_FOREST, nextId: 'day2_kui_9' },
  'day2_kui_9': { id: 'day2_kui_9', speaker: '李逵', characterId: 'likui', content: '“直球？那是啥斧头招式？管他呢，明天俺带你去个刺激的地方！”', background: BG_FOREST, nextId: 'day3_tiger_intro' },

  // --- Day 3: 李逵心动 - 沂岭杀四虎 ---
  'day3_tiger_intro': { id: 'day3_tiger_intro', speaker: '系统', content: '【心动剧场开启：沂岭杀四虎】夕阳如血。李逵带你翻越沂岭，却遭遇了虎群。', background: BG_MOUNTAIN, nextId: 'day3_tiger_1' },
  'day3_tiger_1': { id: 'day3_tiger_1', speaker: '李逵', characterId: 'likui', content: '“畜生！敢动俺的人？！拿命来！！”', background: BG_MOUNTAIN, nextId: 'day3_tiger_2' },
  'day3_tiger_2': { id: 'day3_tiger_2', speaker: '系统', content: '板斧如墨色旋风，血光四溅。他在虎群中狂舞，将你护在身后。', background: BG_MOUNTAIN, nextId: 'day3_tiger_3' },
  'day3_tiger_3': { id: 'day3_tiger_3', speaker: '李逵', characterId: 'likui', content: '（急促喘息，看向你）“没……没吓着吧？别看……俺这一身脏。”', background: BG_MOUNTAIN, nextId: 'day4_start' },

  // --- Day 4: 卢俊义特训 (贵族学) ---
  'day4_start': { id: 'day4_start', speaker: '系统', content: '第四天，一个小厮通报，让你去卢俊义府上。', background: BG_CAMP, nextId: 'day4_lu_1' },
  'day4_lu_1': { id: 'day4_lu_1', speaker: '卢俊义', characterId: 'lujunyi', content: '“万事皆有格。今日教你‘鉴宝’。价值不在物件，在故事。”', background: BG_CAMP, nextId: 'day4_lu_2' },
  'day4_lu_2': { id: 'day4_lu_2', speaker: '卢俊义', characterId: 'lujunyi', content: '（递给你一个破碗）“此碗虽粗，然是前朝民窑，值三贯。记住，气质便是金钱。”', background: BG_CAMP, nextId: 'day5_start' },

  // --- Day 5: 燕青特训 (谍报学) ---
  'day5_start': { id: 'day5_start', speaker: '系统', content: '第五天。一只飞鸽落在你窗前，是燕青。', background: BG_MARKET, nextId: 'day5_yan_1' },
  'day5_yan_1': { id: 'day5_yan_1', speaker: '燕青', characterId: 'yanqing', content: '“小可爱，寻宝游戏开始了。顺着兰草香，来城南老槐树下寻我。”', background: BG_MARKET, nextId: 'day5_yan_2' },
  'day5_yan_2': { id: 'day5_yan_2', speaker: '燕青', characterId: 'yanqing', content: '（他突然从你身后出现，蒙住你的眼）“潜伏的要义是——让目标永远猜不到你在哪。”', background: BG_MARKET, nextId: 'ch1_final_node' },

  'ch1_final_node': { id: 'ch1_final_node', speaker: '系统', content: '第一章：天罡初醒 · 完。', background: BG_CAMP, nextId: 'free_talk_intro' },
  'free_talk_intro': { id: 'free_talk_intro', speaker: '系统', content: '现在可以自由传信互动了。', background: BG_CAMP, nextId: 'free_talk_intro' }
};
