import { Character, StoryNode, DivinationBuff } from './types';

// --- 资源常量 ---
const LIKUI_PNG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%9D%8E%E9%80%B5png.png?raw=true"; 
const LIKUI_JPG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%9D%8E%E9%80%B5.jpg?raw=true";
const LUZHISHEN_IMAGE = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E9%B2%81%E6%99%BA%E6%B7%B1%E5%AF%B9%E8%AF%9D.jpg?raw=true";
const LUZHISHEN_PNG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E9%B2%81%E6%99%BA%E6%B7%B1png.png?raw=true";
const LINCHONG_IMAGE = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/lujunyiduihua.jpg?raw=true";
const LINCHONG_PNG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%8D%A2%E4%BF%8A%E4%B9%89png.png?raw=true";
const YANQING_IMAGE = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E7%87%95%E9%9D%92lihui.jpg?raw=true";
const YANQING_PNG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E7%87%95%E9%9D%92png.png?raw=true";
const HUYANZHUO_PNG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%91%BC%E5%BB%B6%E7%81%BC.png?raw=true";

const BG_MOUNTAIN = "https://images.unsplash.com/photo-1505506005708-3058a94639e7?auto=format&fit=crop&q=80&w=2000";
const BG_CAMP = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E8%81%9A%E4%B9%89%E5%8E%85.png?raw=true";
const BG_DRILL = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%A2%81%E5%B1%B1%E6%A0%A1%E5%9C%BA.png?raw=true";
const BG_DRILL_SCALE = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%91%BC%E5%BB%B6%E7%81%BCscalenew.jpg?raw=true";
const BG_HUYAN_CG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%91%BC%E5%BB%B6%E7%81%BC.jpg?raw=true";
const BG_FAINT_CG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/jiaochang.jpg?raw=true";
const BG_FOREST = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%A3%AE%E6%9E%97.png?raw=true";
const BG_BAMBOO = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E7%AB%B9%E6%9E%97.png?raw=true";
const BG_MARKET = "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=2000";
const BG_CAVE = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%B1%8B%E5%86%85.png?raw=true";
const BG_NIGHT = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%A4%9C%E9%97%B4.png?raw=true";
const BG_KITCHEN_REALLY_NEW = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%8E%A8%E6%88%BF.png?raw=true";
const BG_LIN_ROOM = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%8D%A2%E4%BF%8A%E4%B9%89%E6%88%BF.png?raw=true";
const BG_MARSH = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%A2%81%E5%B1%B1%E6%B0%B4%E6%B3%8A.png?raw=true";
const BG_BLACK = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQACAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
const CG_KUI_HEARTBEAT = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%9D%8E%E9%80%B5%E5%BF%83%E5%8A%A8%E7%89%B9%E5%85%B81.png?raw=true";
const CG_LU_MEDITATION = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E7%AB%B9%E6%9E%97%E7%A6%85%E4%BF%AE1.png?raw=true";

// --- 吃馒头 CG ---
const CG_BUNS_10 = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%8D%81%E4%B8%AA%E9%A6%92%E5%A4%B4.png?raw=true";
const CG_BUNS_5 = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E9%A6%92%E5%A4%B4%E4%BA%94%E4%B8%AA.png?raw=true";
const CG_BUNS_3 = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E4%B8%83%E4%B8%AA%E9%A6%92%E5%A4%B4.png?raw=true"; 
const CG_BUNS_1 = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E4%B8%80%E4%B8%AA%E9%A6%92%E5%A4%B4.png?raw=true";
const CG_BUNS_EMPTY = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E8%92%B8%E7%AC%BC.png?raw=true";

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
  { id: 'huyanzhuo', name: '呼延灼', title: '双鞭', description: '名将后人，治军极严。', avatar: HUYANZHUO_PNG, portrait: HUYANZHUO_PNG, sprite: HUYANZHUO_PNG, personality: '冷酷、坚毅', affection: 0, interactionCount: 0, difficulty: 5, archetype: '教官', heartbeatEvents: [] }
];

export const STORY_DATA: Record<string, StoryNode> = {
  // --- 第一章：林中初遇 ---
  'start': { id: 'start', speaker: '{playerName}', content: '（意识像被卷入了一台失控的碎纸机，五彩斑斓的黑暗在眼前疯狂旋转……）', background: BG_MOUNTAIN, nextId: 'trans_os_2' },
  'trans_os_2': { id: 'trans_os_2', speaker: '{playerName}', content: '（最后的记忆是主管那张吐着唾沫星子的脸，还有永远写不完的KPI……）', background: BG_MOUNTAIN, nextId: 'trans_os_3' },
  'trans_os_3': { id: 'trans_os_3', speaker: '{playerName}', content: '（渐渐地，耳边的嘈杂消失了，取而值之的是泥土的芬芳，以及一种沉重的呼吸声。）', background: BG_MOUNTAIN, nextId: 'woods_1' },
  'woods_1': { id: 'woods_1', speaker: '{playerName}', content: '（猛地睁开眼，首先映入眼帘的是一片遮天蔽日的古怪森林，然后是一张黑得像锅底一样的巨脸。）', background: BG_FOREST, nextId: 'woods_2' },
  'woods_2': { id: 'woods_2', speaker: '{playerName}', content: '“哇啊啊啊啊！！鬼啊!！”（你连滚带爬地向后缩去）', background: BG_FOREST, nextId: 'woods_3' },
  'woods_3': { id: 'woods_3', speaker: '黑大汉', content: '“嚷甚么！闭嘴！再嚷俺一斧头劈了你这丫头！”（你眼前的黑大汉瞪圆了牛眼，腰间板斧泛着寒光）', background: BG_FOREST, characterId: 'likui', nextId: 'woods_4' },
  'woods_4': { id: 'woods_4', speaker: '{playerName}', content: '“别劈我! 这是哪? 我是不是加班加疯了产生的幻觉?”', background: BG_FOREST, nextId: 'woods_5' },
  'woods_5': { id: 'woods_5', speaker: '李逵', characterId: 'likui', content: '“甚么班不班的? 这里是俺们梁山泊的地界! 俺看你这Y头穿得古怪，倒长得像个俏文书。”', background: BG_FOREST, nextId: 'woods_5_os' },
  'woods_5_os': { id: 'woods_5_os', speaker: '{playerName}', content: '“梁山，什么梁山。。。这是什么朝代，你穿的什么衣服这是？啊啊啊啊啊！救命啊！”', background: BG_FOREST, nextId: 'woods_new_1' },
  'woods_new_1': { id: 'woods_new_1', speaker: '李逵', characterId: 'likui', content: '“嚷甚！现在是大宋宣和年间！俺这身是好汉穿的劲装，你这Y头懂个屁！别在这没命地叫，省得招来野兽！”', background: BG_FOREST, nextId: 'woods_new_2' },
  'woods_new_2': { id: 'woods_new_2', speaker: '{playerName}', content: '“大宋。。。宣和。。。（头好痛，像炸开了一样。。。我想起来了，刚才下班路上电闪雷鸣，我好像被一道雷直接劈中了。。。难道我没死，而是穿越了？！）”', background: BG_FOREST, nextId: 'woods_new_3' },
  'woods_new_3': { id: 'woods_new_3', speaker: '{playerName}', content: '“宋朝。。。梁山。。。黑脸大汉。。。天哪，我这是掉进《水浒传》的故事里了？！”', background: BG_FOREST, nextId: 'woods_new_3_inner' },
  'woods_new_3_inner': { id: 'woods_new_3_inner', speaker: '{playerName}', content: '（不可能，怎么会有这种事情！这一定是在电视剧拍摄现场，对，一定是那种整蛊综艺或者秘密剧组。我难道是被拐卖到什么深山老林的影城了？）', background: BG_FOREST, nextId: 'woods_new_4' },
  'woods_new_4': { id: 'woods_new_4', speaker: '李逵', characterId: 'likui', content: '“甚么书不书的！听好了，俺乃梁山泊黑旋风李逵！你这Y头到底叫甚名字？看你这打扮，非僧非俗的，莫不又是山下派来的奸细？”', background: BG_FOREST, nextId: 'woods_new_5' },
  'woods_new_5': { id: 'woods_new_5', speaker: '{playerName}', content: '“无可奉告！我凭什么告诉你？谁知道你们是不是什么非法组织？少拿这种吓人的剧本忽悠我，赶紧把导演叫出来，否则我报警了！”', background: BG_FOREST, nextId: 'woods_6' },
  'woods_6': { id: 'woods_6', speaker: '李逵', characterId: 'likui', content: '“啧，净说些疯话！甚么警察导游的，俺听不懂！既然你不肯自报家门，那正好，哥哥最近正缺个端茶递水、誊写账目的。你这细身板虽然砍不了人，派点文书用场倒也行。”', background: BG_FOREST, nextId: 'woods_7' },
  'woods_7': { id: 'woods_7', speaker: '{playerName}', content: '“文书? 你是说宋江缺个秘书? 我……我不入伙! 你们这是非法拘禁！我要回去写报告……”', background: BG_FOREST, nextId: 'woods_8' },
  'woods_8': { id: 'woods_8', speaker: '李逵', characterId: 'likui', content: '“啰嗦甚! 由不得你! 走你! 把你一人留在这等下就要叫大虫给叼走了!”', background: BG_FOREST, nextId: 'woods_9' },
  'woods_9': { id: 'woods_9', speaker: '系统', content: '李逵像拎小鸡一样把你扛到肩上，不顾你的抗议，大步流星地往山上跑去。', background: BG_FOREST, nextId: 'hall_entry' },

  // --- 聚义厅：对话与公孙胜预言 ---
  'hall_entry': { id: 'hall_entry', speaker: '系统', content: '（你就这样地扛进了聚义厅，直到被李逵砰地一声丢在地砖上。）', background: BG_CAMP, nextId: 'hall_kui_explain' },
  'hall_kui_explain': { id: 'hall_kui_explain', speaker: '李逵', characterId: 'likui', content: '“哥哥，俺在林子里打旋，见这丫头从天上‘啪嗒’一下掉在俺脚跟前，俺还以为是个甚么野果，凑近一看才见是个活人！”', background: BG_CAMP, nextId: 'hall_reaction_crowd' },
  'hall_reaction_crowd': { id: 'hall_reaction_crowd', speaker: '系统', content: '堂上众人面面相觑。宋江手捋胡须，神色复杂地打量着你。', background: BG_CAMP, nextId: 'hall_song_ask' },
  'hall_song_ask': { id: 'hall_song_ask', speaker: '宋江', content: '“你是何人？从何而来？为何突然现于我梁山泊？”', background: BG_CAMP, nextId: 'hall_inner_monologue' },
  'hall_inner_monologue': { id: 'hall_inner_monologue', speaker: '系统', content: '你揉了揉眼睛，抬头看了看大厅上方的牌匾，那上面赫然写着“聚义厅”三个大字', background: BG_CAMP, nextId: 'hall_inner_shock' },
  'hall_inner_shock': { id: 'hall_inner_shock', speaker: '{playerName}', content: '（不会吧...这地方怎么跟我在电视剧里看到的聚义厅完全长一样啊...上面坐着的那个黑哥不会是宋江吧...那个秃子不会是鲁智深吧...我不会真穿进水浒传了吧）', background: BG_CAMP, nextId: 'hall_inner_monologue_2' },
  'hall_inner_monologue_2': { id: 'hall_inner_monologue_2', speaker: '{playerName}', content: '（冷静，一定要冷静。现在硬碰硬只有死路一条。看宋江的神色，似乎还在权衡。既然如此，不如先暂时配合，保住性命再寻良策……）', background: BG_CAMP, nextId: 'hall_name_input' },
  'hall_name_input': { id: 'hall_name_input', speaker: '系统', content: '请在这尺素纸上写下你的姓名：', background: BG_CAMP, isNameInput: true, nextId: 'hall_self_intro' },
  'hall_self_intro': { id: 'hall_self_intro', speaker: '{playerName}', content: '“我叫{playerName}，来自遥远的未来。我认识你们每一个人，梁山一百零八将的事迹在未来家喻户晓。”', background: BG_CAMP, nextId: 'hall_crowd_doubt_1' },
  'hall_crowd_doubt_1': { id: 'hall_crowd_doubt_1', speaker: '众好汉', content: '“来自未来？简直是一派胡言！我看这丫头满口疯话，定是官府派来的细作，想以此脱身！”', background: BG_CAMP, nextId: 'hall_crowd_doubt_2' },
  'hall_crowd_doubt_2': { id: 'hall_crowd_doubt_2', speaker: '刘唐', content: '“就是！瞧她这身奇装异服，非僧非俗，若不是妖人，便是奸细！哥哥，莫要听她胡诌，先关进大牢审个明白！”', background: BG_CAMP, nextId: 'hall_song_test' },
  'hall_song_test': { id: 'hall_song_test', speaker: '宋江', content: '（堂下一片哗然，众人议论纷纷，宋江微微眯起眼）“既然你自称认识我们，那我且问你，宋江当年究竟是如何上的这梁山？”', background: BG_CAMP, choices: [
    { text: '因怒杀阎婆惜被发配江州，后在浔阳楼题反诗被救上山。', nextId: 'hall_song_verdict' },
    { text: '因为在京城卖保险赔个精光，为了躲债才跑来投奔晁盖。', nextId: 'game_over_hall' }
  ]},
  'hall_song_verdict': { id: 'hall_song_verdict', speaker: '宋江', content: '“嗯。。。有点意思。诸位兄弟怎么看？”', background: BG_CAMP, nextId: 'hall_song_verdict_next' },
  'hall_song_verdict_next': { id: 'hall_song_verdict_next', speaker: '系统', content: '宋江手捋胡须，神情缓和了些。', background: BG_CAMP, nextId: 'hall_kui_support' },
  'hall_kui_support': { id: 'hall_kui_support', speaker: '李逵', characterId: 'likui', content: '“我看{playerName}还算机灵，不如留在梁山干活，正好我们缺人手。”', background: BG_CAMP, nextId: 'hall_hero_oppose' },
  'hall_hero_oppose': { id: 'hall_hero_oppose', speaker: '石秀', content: '“铁牛，你莫要胡闹！咱们梁山好汉顶天立地，虽不杀妇道人家，但山寨重地岂能容来路不明之人久留？依我看，打发她下山便是！”', background: BG_CAMP, nextId: 'hall_kui_rebuttal' },
  'hall_kui_rebuttal': { id: 'hall_kui_rebuttal', speaker: '李逵', characterId: 'likui', content: '“石秀兄弟，你这厮好生不爽利！这丫头从天而降，定是老天爷送来的，你赶她走，岂不是违了天意？俺偏要留她！”', background: BG_CAMP, nextId: 'hall_kui_leg' },
  'game_over_hall': { id: 'game_over_hall', speaker: '宋江', content: '“满口胡言！宋某一生忠义，岂容你这厮在此瞎编乱造！来人，把这骗子赶出山寨，永世不得踏入！”', background: BG_BLACK, nextId: 'restart_game' },
  'restart_game': { id: 'restart_game', speaker: '系统', content: '【游戏结束】宋江最讨厌骗子。', background: BG_BLACK, choices: [{ text: '重新开始', nextId: 'start' }] },
  'hall_kui_leg': { id: 'hall_kui_leg', speaker: '李逵', characterId: 'likui', content: '“哥哥！问这许多作甚！你看{playerName}吓得脸都白了，定是好人！饿不饿？俺那儿有刚烤好的羊腿！”', background: BG_CAMP, nextId: 'hall_song_expel' },
  'hall_song_expel': { id: 'hall_song_expel', speaker: '宋江', content: '“石秀兄弟所言亦有理。我梁山虽广纳贤才，却也不留底细不明之人。铁牛，莫要再闹。来人，将这位姑娘带下去，送出山寨，莫要伤了她。”\n\n（两名校尉走上前来，一左一右架住了你的胳膊。）', background: BG_CAMP, choices: [
    { text: '“等等！我真的没有撒谎！”', nextId: 'hall_expel_plead_1' },
    { text: '（拼命挣扎）“放开我！你们这群土匪！”', nextId: 'hall_expel_struggle_1' }
  ]},
  'hall_expel_plead_1': { id: 'hall_expel_plead_1', speaker: '{playerName}', content: '“等等！我真的没有撒谎！我说的每一个字都是真的！你们不能就这样把我赶走！”你急切地大喊，试图挣脱校尉的束缚。', background: BG_CAMP, nextId: 'hall_expel_plead_2' },
  'hall_expel_plead_2': { id: 'hall_expel_plead_2', speaker: '系统', content: '堂上众人或是冷笑，或是摇头，宋江面无表情，只是挥了挥手示意校尉动作快些。', background: BG_CAMP, nextId: 'hall_gongsun_entry' },
  'hall_expel_struggle_1': { id: 'hall_expel_struggle_1', speaker: '{playerName}', content: '“放开我！你们这群土匪！这就是你们所谓的‘替天行道’吗？欺负一个弱女子算什么英雄好汉！”你一边挣扎一边愤怒地控诉。', background: BG_CAMP, nextId: 'hall_expel_struggle_2' },
  'hall_expel_struggle_2': { id: 'hall_expel_struggle_2', speaker: '系统', content: '“土匪”二字一出，厅内气氛瞬间降至冰点。几名脾气火爆的好汉已经按住了刀柄，李逵更是急得直跳脚，想上前求情却被石秀拦住。', background: BG_CAMP, nextId: 'hall_gongsun_entry' },
  'hall_gongsun_entry': { id: 'hall_gongsun_entry', speaker: '公孙胜', content: '“且慢！动不得，万万动不得！……哥哥，快叫校尉退下！此子非凡间之人！贫道方才观星，见天狗食月，星宿移位，一道异芒坠于后山……竟应在此处！”', background: BG_CAMP, nextId: 'hall_song_scene_desc' },
  'hall_song_scene_desc': { id: 'hall_song_scene_desc', speaker: '系统', content: '只见一位道人疾步入厅。厅中一阵骚动。宋江抬手示意众人安静。', background: BG_CAMP, nextId: 'hall_song_ask_detail' },
  'hall_song_ask_detail': { id: 'hall_song_ask_detail', speaker: '宋江', content: '“公孙先生，且细说。”', background: BG_CAMP, nextId: 'hall_gongsun_reveal' },
  'hall_gongsun_reveal': { id: 'hall_gongsun_reveal', speaker: '公孙胜', content: '“此子魂魄之中，竟蕴含着极其浓郁的天罡地煞之气！此乃我梁山一百单八将之本命星力。如今星力无主，在其魂中如怒涛般冲撞不休。若放任不管……一则，此子肉身凡胎，百日之内必被星力撑爆，魂飞魄散；二则，星力暴走，恐会反噬我梁山诸位兄弟的本命星，致使气运衰败，性命堪忧！”', background: BG_CAMP, choices: [
    { text: '我就跟你们说了我不是一般人！', nextId: 'hall_kui_comment' },
    { text: '啊？？我吗....?', nextId: 'hall_kui_comment' }
  ]},
  'hall_kui_comment': { id: 'hall_kui_comment', speaker: '李逵', characterId: 'likui', content: '“俺就说！俺扛他回来时，觉着背上暖烘烘的，像扛了个小火炉！原来不是细作，是个小星宿？！”', background: BG_CAMP, nextId: 'hall_lu_comment' },
  'hall_lu_comment': { id: 'hall_lu_comment', speaker: '鲁智深', characterId: 'luzhishen', content: '“洒家方才也觉得稀奇，正想劝哥哥莫要急着赶人。寻常人见了铁牛这黑厮，早吓得尿裤子。{playerName}虽然狼狈，眼里却有光，不似奸邪之辈。若真与我梁山有这等缘分……见死不救，岂是好汉所为？”', background: BG_CAMP, nextId: 'hall_yan_comment' },
  'hall_yan_comment': { id: 'hall_yan_comment', speaker: '燕青', characterId: 'yanqing', content: '“铁牛哥哥扛人时，我瞧见了。此人衣着裁剪奇异，面料非丝非麻，口音更是闻所未闻。公孙先生说是‘非凡间之人’，我看……倒像从天外掉下来的。有趣，实在有趣。”', background: BG_CAMP, nextId: 'hall_lujunyi_ask' },
  'hall_lujunyi_ask': { id: 'hall_lujunyi_ask', speaker: '林冲', characterId: 'linchong', content: '“先生之意，是必须救？如何救？”', background: BG_CAMP, nextId: 'hall_lujunyi_ask_next' },
  'hall_lujunyi_ask_next': { id: 'hall_lujunyi_ask_next', speaker: '系统', content: '林冲看向公孙胜。', background: BG_CAMP, nextId: 'hall_gongsun_solution' },
  'hall_gongsun_solution': { id: 'hall_gongsun_solution', speaker: '公孙胜', content: '“唯有寻回散落四方的《水浒秘籍》四卷残章。此书乃是上应天命、下契地脉的奇书，记载着一百单八将的真元轨迹。你身为异界之人，魂魄如无根浮萍，唯有集齐这四卷残章，借其中蕴含的‘四象星元’之力，方能构筑起跨越虚空的‘星桥’。若无此桥，纵使你有通天之能，也无法穿透这重重位面，寻回故土。”', background: BG_CAMP, nextId: 'hall_player_ask_home' },
  'hall_player_ask_home': { id: 'hall_player_ask_home', speaker: '{playerName}', content: '“公孙先生，如果我真的集齐了那四卷残章，是不是就一定能回到我原来的世界？”你紧紧盯着公孙胜，声音中带着一丝颤抖和希冀。', background: BG_CAMP, nextId: 'hall_gongsun_uncertain' },
  'hall_gongsun_uncertain': { id: 'hall_gongsun_uncertain', speaker: '公孙胜', content: '公孙胜沉默了片刻，轻轻摇了摇头：“天机变幻莫测，贫道亦不敢断言。集齐残章只是给了你一个‘可能’，至于最终能否功成……唯有尽人事，听天命。但若不试这一试，你便连这万分之一的机会也将失去。”', background: BG_CAMP, nextId: 'hall_song_command' },
  'hall_song_command': { id: 'hall_song_command', speaker: '宋江', content: '“众位兄弟都听到了。此事，关乎这位小友的生死，亦关乎我梁山气运根基. 小友，你虽来路奇异，但既怀我梁山星力，便与我等有了因果. 我梁山泊替天行道，讲的是一个‘义’字. 今日，这桩事，宋江管了。”', background: BG_CAMP, nextId: 'hall_song_welcome' },
  'hall_song_welcome': { id: 'hall_song_welcome', speaker: '宋江', content: '“{playerName}小友，从今日起，梁山便是你暂时安身之所. 望你与我等兄弟，同心协力，共渡此劫.”', background: BG_CAMP, choices: [
    { text: '为了活命，我愿意留在梁山！', nextId: 'hall_player_sigh' }
  ]},
  'hall_player_sigh': { id: 'hall_player_sigh', speaker: '{playerName}', content: '“啊？？???。。。。。。啊。。。好。。。我还能说什么呢。。。。”', background: BG_CAMP, nextId: 'day2_start' },

  // --- 第二天：特训 ---
  'day2_start': { id: 'day2_start', speaker: '系统', content: '第二天清晨。门砰地一声被撞开了，李逵闯了进来。', background: BG_CAVE, nextId: 'day2_kui_naked' },
  'day2_kui_naked': { id: 'day2_kui_naked', speaker: '{playerName}', content: '“哇！李铁牛你进屋不敲门吗！”你还没穿好衣服，手忙脚乱地抓过外褂。', background: BG_CAVE, nextId: 'day2_kui_oblivious' },
  'day2_kui_oblivious': { id: 'day2_kui_oblivious', speaker: '李逵', characterId: 'likui', content: '“敲甚么门！俺要带你去特训！快穿上衣服，迟了俺就扛你走！”', background: BG_CAVE, nextId: 'day2_kui_monologue' },
  'day2_kui_monologue': { id: 'day2_kui_monologue', speaker: '{playerName}', content: '“。。。真是无语。”看着铁牛风风火火的背影，你叹了口气，只能认命地跟上。', background: BG_CAVE, nextId: 'day2_kui_black_forest' },
  'day2_kui_black_forest': { id: 'day2_kui_black_forest', speaker: '系统', content: '树林中', background: BG_BLACK, nextId: 'day2_kui_pre_1' },
  'day2_kui_pre_1': { id: 'day2_kui_pre_1', speaker: '李逵', characterId: 'likui', content: '“跑起来！别磨蹭！这山路要是都走不动，以后怎么跟着俺杀敌！”', background: BG_FOREST, nextId: 'day2_kui_pre_2' },
  'day2_kui_pre_2': { id: 'day2_kui_pre_2', speaker: '{playerName}', content: '“呼……呼……铁牛大哥，我的腿快断了……”你喘得像拉风箱一样。', background: BG_FOREST, nextId: 'day2_kui_pre_3' },
  'day2_kui_pre_3': { id: 'day2_kui_pre_3', speaker: '李逵', characterId: 'likui', content: '“断了俺给你接上！瞧你这细身板，非得好好练练这底气不可。”', background: BG_FOREST, nextId: 'day2_kui_pre_4' },
  'day2_kui_pre_4': { id: 'day2_kui_pre_4', speaker: '系统', content: '李逵在前面健步如飞，你虽然累得半死，却发现跟着他的节奏，体内的灵气似乎也在有规律地律动。', background: BG_FOREST, nextId: 'day2_kui_pre_5' },
  'day2_kui_pre_5': { id: 'day2_kui_pre_5', speaker: '李逵', characterId: 'likui', content: '“快快快！前面那个坡，冲上去！冲不上去俺就在后面用板斧给你‘助推’！”', background: BG_FOREST, nextId: 'day2_kui_pre_6' },
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
  'day2_kui_shout_response_fail': { id: 'day2_kui_shout_response_fail', speaker: '李逵', characterId: 'likui', content: '“害臊什么！真没出息！”', background: BG_FOREST, nextId: 'day2_kui_shout_next_sys' },
  'day2_kui_shout_next_sys': { id: 'day2_kui_shout_next_sys', speaker: '系统', content: '突然，你们远远看见一道魁梧的身影从对面走来——你与李逵同时回过头来', background: BG_FOREST, nextId: 'day2_kui_tease_lu' },
  'day2_kui_tease_lu': { id: 'day2_kui_tease_lu', speaker: '李逵', characterId: 'likui', content: '“哈哈！那边的秃和尚，挑这几担水晃晃悠悠的，莫不如昨日又偷喝了哥哥的陈年好酒，腿软了？”', background: BG_FOREST, nextId: 'day2_see_lu' },
  'day2_see_lu': { id: 'day2_see_lu', speaker: '系统', content: '你正憋足了劲，忽然看到远处的鲁智深挑着两桶水稳步走来。', background: BG_FOREST, nextId: 'day2_lu_chat' },
  'day2_lu_chat': { id: 'day2_lu_chat', speaker: '鲁智深', characterId: 'luzhishen', content: '“铁牛休要胡说. 洒家这是去后山竹林禅修，顺便躲个清静. {playerName}姑娘若是有意，明日可来竹林寻洒家，教你几招定心的本事，总好过在这林子里乱吼. 怎么样，明日可愿来？”', background: BG_FOREST, choices: [
    { text: '（坚定地）我想跟铁牛大哥多学学。', nextId: 'day2_choice_stay_kui_lu_msg', affectionBonus: { charId: 'likui', points: 15 } },
    { text: '（礼貌地）好，明天我去竹林找大师。', nextId: 'day2_choice_accept_lu', affectionBonus: { charId: 'luzhishen', points: 1 } }
  ]},
  'day2_choice_stay_kui_lu_msg': { id: 'day2_choice_stay_kui_lu_msg', speaker: '鲁智深', characterId: 'luzhishen', content: '“既然如此，洒家也不强求. 你若想听禅定心，随时可来寻洒家.”', background: BG_FOREST, nextId: 'day2_choice_stay_kui' },
  'day2_choice_stay_kui': { id: 'day2_choice_stay_kui', speaker: '李逵', characterId: 'likui', content: '“哈哈！够意思！还是俺带你练带劲！”', background: BG_FOREST, nextId: 'day2_choice_stay_kui_t' },
  'day2_choice_stay_kui_t': { id: 'day2_choice_stay_kui_t', speaker: '李逵', characterId: 'likui', content: '“来，接着吼！别像个娘们似的. 要把肚子里那口恶气全撒出来！”理论上，这一天就在这震天的吼声中结束了。', background: BG_FOREST, nextId: 'day2_night_kui_1' },

  // --- 第二天夜晚：独自复盘与思乡 ---
  'day2_night_kui_1': { id: 'day2_night_kui_1', speaker: '系统', content: '夜深了，梁山的喧嚣渐渐散去。你独自回到房间，坐在桌前，看着摇曳的烛火。', background: BG_NIGHT, nextId: 'day2_night_kui_3' },
  'day2_night_kui_3': { id: 'day2_night_kui_3', speaker: '{playerName}', content: '（如果是在家里，这时候我应该正刷着手机，喝着冰可乐，吐槽着无脑的剧集吧？而不是在这里担心什么星力暴走，还要被铁牛拽着去跑操，甚至还要学什么“吼出来”……）', background: BG_NIGHT, nextId: 'day2_night_kui_4' },
  'day2_night_kui_4': { id: 'day2_night_kui_4', speaker: '{playerName}', content: '（公孙胜说我的命运和梁山息息相关。这到底意味着什么？我真的能集齐残卷回家吗？还是说，我会永远留在这个充满杀伐与义气的时代，直到神魂俱灭？）', background: BG_NIGHT, nextId: 'day2_night_kui_5' },
  'day2_night_kui_5': { id: 'day2_night_kui_5', speaker: '系统', content: '你叹了口气，吹灭蜡烛躺在床上。在不安与思念中，你渐渐进入了梦乡。', background: BG_BLACK, nextId: 'day2_night_attack_start_kui' },

  // --- 分支：答应鲁智深后的后续 ---
  'day2_choice_accept_lu': { id: 'day2_choice_accept_lu', speaker: '李逵', characterId: 'likui', content: '“呸！那老和尚除了喝酒就是念经，有甚么好见的！”李逵虽然嘴上骂着，还是没松开拽着你手腕的手。', background: BG_FOREST, nextId: 'day2_lu_kui_1' },
  'day2_lu_kui_1': { id: 'day2_lu_kui_1', speaker: '李逵', characterId: 'likui', content: '“答应归答应，今天你还是俺的人！来，给俺扎半个时辰马步！”', background: BG_FOREST, nextId: 'day2_lu_kui_2' },
  'day2_lu_kui_2': { id: 'day2_lu_kui_2', speaker: '{playerName}', content: '“半个时辰？铁牛大哥，我的腿会断的……”你惨叫着被强行按了下去。', background: BG_FOREST, nextId: 'day2_lu_kui_3' },
  'day2_lu_kui_3': { id: 'day2_lu_kui_3', speaker: '李逵', characterId: 'likui', content: '“断了俺背你！这腰给俺挺直了！扎够了，明天爱找谁找谁去！”', background: BG_FOREST, nextId: 'day2_night_lu_1' },

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

  'day2_night_attack_rescue_kui': { id: 'day2_night_attack_rescue_kui', speaker: '系统', content: '就在歹徒即将攻击你的刹那，黑暗中一道银光破窗而入！那是长枪的尖刃，精准地挑开了歹徒的短刀。', background: BG_BLACK, nextId: 'day2_night_attack_lin_silhouette_kui' },
  'day2_night_attack_rescue_lu': { id: 'day2_night_attack_rescue_lu', speaker: '系统', content: '就在歹徒即将攻击你的刹那，黑暗中一道银光破窗而入！那是长枪的尖刃，精准地挑开了歹徒的短刀。', background: BG_BLACK, nextId: 'day2_night_attack_lin_silhouette_lu' },

  'day2_night_attack_lin_silhouette_kui': { id: 'day2_night_attack_lin_silhouette_kui', speaker: '系统', content: '月光透过的瞬间，你能看到一个披着素色斗篷、身形修长稳健的剪影。他出招极快且克制，仅用枪尖扫过歹徒手腕，便令其痛呼倒地。', background: BG_NIGHT, nextId: 'day2_night_attack_lin_voice_kui' },
  'day2_night_attack_lin_silhouette_lu': { id: 'day2_night_attack_lin_silhouette_lu', speaker: '系统', content: '月光透过的瞬间，你能看到一个披着素色斗篷、身形修长稳健的剪影。他出招极快且克制，仅用枪尖扫过歹徒手腕，便令其痛呼倒地。', background: BG_NIGHT, nextId: 'day2_night_attack_lin_voice_lu' },

  'day2_night_attack_lin_voice_kui': { id: 'day2_night_attack_lin_voice_kui', speaker: '神秘人', content: '“梁山禁地，岂容尔等作乱？滚。”对方声音低沉且带有某种由于压抑而产生的磁性。', background: BG_NIGHT, nextId: 'day2_night_attack_flee_kui' },
  'day2_night_attack_lin_voice_lu': { id: 'day2_night_attack_lin_voice_lu', speaker: '神秘人', content: '“梁山禁地，岂容尔等作乱？滚。”对方声音低沉且带有某种由于压抑而产生的磁性。', background: BG_NIGHT, nextId: 'day2_night_attack_flee_lu' },

  'day2_night_attack_flee_kui': { id: 'day2_night_attack_flee_kui', speaker: '系统', content: '歹徒连滚带爬逃走。神秘人站在暗处，并没有上前扶起你，而是保持着礼貌而疏远的距离。', background: BG_NIGHT, nextId: 'day2_night_attack_heroes_arrive_kui' },
  'day2_night_attack_flee_lu': { id: 'day2_night_attack_flee_lu', speaker: '系统', content: '歹徒连滚带爬逃走。神秘人站在暗处，并没有上前扶起你，而是保持着礼貌而疏远的距离。', background: BG_NIGHT, nextId: 'day2_night_attack_heroes_arrive_lu' },

  'day2_night_attack_heroes_arrive_kui': { id: 'day2_night_attack_heroes_arrive_kui', speaker: '系统', content: '就在此时，一阵急促的脚步声传来。梁山的其他好汉被惊动，纷纷跑来查看情况。神秘人见状，趁乱悄然离开了。', background: BG_NIGHT, nextId: 'day2_night_attack_interrogation_1_kui' },
  'day2_night_attack_heroes_arrive_lu': { id: 'day2_night_attack_heroes_arrive_lu', speaker: '系统', content: '就在此时，一阵急促的脚步声传来。梁山的其他好汉被惊动，纷纷跑来查看情况。神秘人见状，趁乱悄然离开了。', background: BG_NIGHT, nextId: 'day2_night_attack_interrogation_1_lu' },

  'day2_night_attack_interrogation_1_kui': { id: 'day2_night_attack_interrogation_1_kui', speaker: '系统', content: '以李逵为首的众好汉将那两名还没跑远的歹徒团团围住。李逵瞪着铜铃般的大眼，一把揪住其中一人的衣领。', background: BG_NIGHT, nextId: 'day2_night_attack_interrogation_2_kui' },
  'day2_night_attack_interrogation_2_kui': { id: 'day2_night_attack_interrogation_2_kui', speaker: '李逵', characterId: 'likui', content: '“说！哪个借你们的胆子，敢在梁山上撒野？！”', background: BG_NIGHT, nextId: 'day2_night_attack_reveal_1_kui' },
  
  'day2_night_attack_interrogation_1_lu': { id: 'day2_night_attack_interrogation_1_lu', speaker: '系统', content: '以李逵为首的众好汉将那两名还没跑远的歹徒团团围住。李逵瞪着铜铃般的大眼，一把揪住其中一人的衣领。', background: BG_NIGHT, nextId: 'day2_night_attack_interrogation_2_lu' },
  'day2_night_attack_interrogation_2_lu': { id: 'day2_night_attack_interrogation_2_lu', speaker: '李逵', characterId: 'likui', content: '“说！哪个借你们的胆子，敢在梁山上撒野？！”', background: BG_NIGHT, nextId: 'day2_night_attack_reveal_1_lu' },

  'day2_night_attack_reveal_1_kui': { id: 'day2_night_attack_reveal_1_kui', speaker: '系统', content: '经过一番就地审问，真相大白。原来这两人是山寨中尚未被完全收服的小喽啰。', background: BG_NIGHT, nextId: 'day2_night_attack_reveal_2_kui' },
  'day2_night_attack_reveal_2_kui': { id: 'day2_night_attack_reveal_2_kui', speaker: '歹徒', content: '“饶命啊铁牛哥哥！我们……我们只是觉得这异人既然是‘天罡星命定之人’，身上定有宝贝。而且见您白天训练她时那么上心，肯定手里攥着好东西……”', background: BG_NIGHT, nextId: 'day2_night_attack_reveal_3_kui' },
  'day2_night_attack_reveal_3_kui': { id: 'day2_night_attack_reveal_3_kui', speaker: '系统', content: '原来，从白天的训练开始，这两个贪婪的家伙就已经跟了你们一路了。', background: BG_NIGHT, nextId: 'day2_night_attack_kui_action_kui' },

  'day2_night_attack_reveal_1_lu': { id: 'day2_night_attack_reveal_1_lu', speaker: '系统', content: '经过一番就地审问，真相大白。原来这两人是山寨中尚未被完全收服的小喽啰。', background: BG_NIGHT, nextId: 'day2_night_attack_reveal_2_lu' },
  'day2_night_attack_reveal_2_lu': { id: 'day2_night_attack_reveal_2_lu', speaker: '歹徒', content: '“饶命啊铁牛哥哥！我们……我们只是觉得这异人既然是‘天罡星命定之人’，身上定有宝贝。而且见您白天训练她时那么上心，肯定手里攥着好东西……”', background: BG_NIGHT, nextId: 'day2_night_attack_reveal_3_lu' },
  'day2_night_attack_reveal_3_lu': { id: 'day2_night_attack_reveal_3_lu', speaker: '系统', content: '原来，从白天的训练开始，这两个贪婪的家伙就已经跟了你们一路了。', background: BG_NIGHT, nextId: 'day2_night_attack_kui_action_lu' },

  'day2_night_attack_kui_action_kui': { id: 'day2_night_attack_kui_action_kui', speaker: '李逵', characterId: 'likui', content: '“呸！没出息的鸟人！敢动俺的人，活腻歪了！带走，关进地牢去！”', background: BG_NIGHT, nextId: 'day2_night_attack_kui_comfort_kui' },
  'day2_night_attack_kui_comfort_kui': { id: 'day2_night_attack_kui_comfort_kui', speaker: '李逵', characterId: 'likui', content: '“小文书，别怕！有俺铁牛在，看谁还敢来触霉头。你安心睡，俺这就叫几个兄弟在门口守着！”', background: BG_NIGHT, nextId: 'day2_night_attack_end_kui' },

  'day2_night_attack_kui_action_lu': { id: 'day2_night_attack_kui_action_lu', speaker: '李逵', characterId: 'likui', content: '“呸！没出息的鸟人！敢动俺的人，活腻歪了！带走，关进地牢去！”', background: BG_NIGHT, nextId: 'day2_night_attack_kui_comfort_lu' },
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
  'day3_kui_help_3': { id: 'day3_kui_help_3', speaker: '李逵', characterId: 'likui', content: '“尔敢动俺的人！！！哇呀呀呀呀！！！”', background: BG_FOREST, nextId: 'day3_kui_help_4' },
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
  'day4_kui_train_archery_all_win_kui_stop': { id: 'day4_kui_train_archery_all_win_kui_stop', speaker: '李逵', characterId: 'likui', content: '“（赶紧一把捂住呼延灼的嘴）去去去！老哥哥你疯魔了不成！她只是个写文书的，又不是那能上天入地的公孙先生！走走走，小文书，别理这憨鸟，俺带你加练‘极致跑操’去！”', background: BG_DRILL, nextId: 'day4_player_resistance_1' },

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
  'day6_start': { id: 'day6_start', speaker: '系统', content: '第六天。未完待续...', background: BG_CAMP, choices: [ { text: '重新开始', nextId: 'start' } ] }
};
