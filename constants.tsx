import { Character, StoryNode, DivinationBuff } from './types';

// --- 资源常量 ---
const LIKUI_PNG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%9D%8E%E9%80%B5png.png?raw=true"; 
const LIKUI_JPG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%9D%8E%E9%80%B5.jpg?raw=true";
const LUZHISHEN_IMAGE = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E9%B2%81%E6%99%BA%E6%B7%B1%E5%AF%B9%E8%AF%9D.jpg?raw=true";
const LUZHISHEN_PNG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E9%B2%81%E6%99%BA%E6%B7%B1png.png?raw=true";
const LUJUNYI_IMAGE = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/lujunyiduihua.jpg?raw=true";
const LUJUNYI_PNG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%8D%A2%E4%BF%8A%E4%B9%89png.png?raw=true";
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
const BG_KITCHEN_REALLY_NEW = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%8E%A8%E6%88%BF.png?raw=true";
const BG_LU_ROOM = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%8D%A2%E4%BF%8A%E4%B9%89%E6%88%BF.png?raw=true";
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
  { id: 'lujunyi', name: '卢俊义', title: '玉麒麟', description: '河北首富，懂生活更懂你。', avatar: LUJUNYI_IMAGE, portrait: LUJUNYI_IMAGE, sprite: LUJUNYI_PNG, personality: '优雅、严谨、深情', affection: 0, interactionCount: 0, difficulty: 3, archetype: '导师', heartbeatEvents: [] },
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
  'hall_song_ask': { id: 'hall_song_ask', speaker: '宋江', content: '“你是何人？从何而来？为何突然现于我聚义厅？”', background: BG_CAMP, nextId: 'hall_name_input' },
  'hall_name_input': { id: 'hall_name_input', speaker: '系统', content: '请在这尺素纸上写下你的姓名：', background: BG_CAMP, isNameInput: true, nextId: 'hall_self_intro' },
  'hall_self_intro': { id: 'hall_self_intro', speaker: '{playerName}', content: '“我叫{playerName}，来自遥远的未来。我认识你们每一个人，梁山一百零八将的事迹在未来家喻晓。”', background: BG_CAMP, nextId: 'hall_song_test' },
  'hall_song_test': { id: 'hall_song_test', speaker: '宋江', content: '（堂下一片哗然，众人议论纷纷，宋江微微眯起眼）“既然你自称认识我们，那我且问你，宋江当年究竟是如何上的这梁山？”', background: BG_CAMP, choices: [
    { text: '因怒杀阎婆惜被发配江州，后在浔阳楼题反诗被救上山。', nextId: 'hall_song_verdict' },
    { text: '因为在京城卖保险赔个精光，为了躲债才跑来投奔晁盖。', nextId: 'game_over_hall' }
  ]},
  'hall_song_verdict': { id: 'hall_song_verdict', speaker: '宋江', content: '“嗯。。。有点意思。诸位兄弟怎么看？”', background: BG_CAMP, nextId: 'hall_song_verdict_next' },
  'hall_song_verdict_next': { id: 'hall_song_verdict_next', speaker: '系统', content: '宋江手捋胡须，神情缓和了些。', background: BG_CAMP, nextId: 'hall_kui_support' },
  'hall_kui_support': { id: 'hall_kui_support', speaker: '李逵', characterId: 'likui', content: '“我看{playerName}还算机灵，不如留在梁山干活，正好我们缺人手。”', background: BG_CAMP, nextId: 'hall_lu_support' },
  'hall_lu_support': { id: 'hall_lu_support', speaker: '卢俊义', characterId: 'lujunyi', content: '“宋公明哥哥所言极是。我这儿正有许多积压的账目需要打理，确实需要个识文断字的帮手。”', background: BG_CAMP, nextId: 'hall_kui_leg' },
  'game_over_hall': { id: 'game_over_hall', speaker: '宋江', content: '“满口胡言！宋某一生忠义，岂容你这厮在此瞎编乱造！来人，把这骗子赶出山寨，永世不得踏入！”', background: BG_BLACK, nextId: 'restart_game' },
  'restart_game': { id: 'restart_game', speaker: '系统', content: '【游戏结束】宋江最讨厌骗子。', background: BG_BLACK, choices: [{ text: '重新开始', nextId: 'start' }] },
  'hall_kui_leg': { id: 'hall_kui_leg', speaker: '李逵', characterId: 'likui', content: '“哥哥！问这许多作甚！你看{playerName}吓得脸都白了，定是好人！饿不饿？俺那儿有刚烤好的羊腿！”', background: BG_CAMP, nextId: 'hall_lu_stop' },
  'hall_lu_stop': { id: 'hall_lu_stop', speaker: '鲁智深', characterId: 'luzhishen', content: '“铁牛休得莽撞！{playerName}姑娘，莫怕，洒家这儿有凳子。”', background: BG_CAMP, nextId: 'hall_gongsun_entry' },
  'hall_gongsun_entry': { id: 'hall_gongsun_entry', speaker: '公孙胜', content: '“且慢！铁牛兄弟，此人动不得！……哥哥，大事！此子非凡间之人！贫道方才观星，见天狗食月，星宿移位，一道异芒坠于后山……竟应在此处！”', background: BG_CAMP, nextId: 'hall_song_scene_desc' },
  'hall_song_scene_desc': { id: 'hall_song_scene_desc', speaker: '系统', content: '只见一位道人疾步入厅。厅中一阵骚动。宋江抬手示意众人安静。', background: BG_CAMP, nextId: 'hall_song_ask_detail' },
  'hall_song_ask_detail': { id: 'hall_song_ask_detail', speaker: '宋江', content: '“公孙先生，且细说。”', background: BG_CAMP, nextId: 'hall_gongsun_reveal' },
  'hall_gongsun_reveal': { id: 'hall_gongsun_reveal', speaker: '公孙胜', content: '“此子魂魄之中，竟蕴天罡地煞之气！此乃我梁山一百单八将之本命星力. 百日之内若不调和，必魂飞魄散！”', background: BG_CAMP, nextId: 'hall_kui_comment' },
  'hall_kui_comment': { id: 'hall_kui_comment', speaker: '李逵', characterId: 'likui', content: '“俺就说！俺扛他回来时，觉着背上暖烘烘的，像扛了个小火炉！原来不是细作，是个小星宿？！”', background: BG_CAMP, nextId: 'hall_lu_comment' },
  'hall_lu_comment': { id: 'hall_lu_comment', speaker: '鲁智深', characterId: 'luzhishen', content: '“洒家方才也觉得稀奇. 若真与我梁山有这等缘分……见死不救，岂是好汉所为？”', background: BG_CAMP, nextId: 'hall_yan_comment' },
  'hall_yan_comment': { id: 'hall_yan_comment', speaker: '燕青', characterId: 'yanqing', content: '“有趣，实在有趣.”', background: BG_CAMP, nextId: 'hall_lujunyi_ask' },
  'hall_lujunyi_ask': { id: 'hall_lujunyi_ask', speaker: '卢俊义', characterId: 'lujunyi', content: '“先生之意，是必须救？如何救？”', background: BG_CAMP, nextId: 'hall_gongsun_solution' },
  'hall_gongsun_solution': { id: 'hall_gongsun_solution', speaker: '公孙胜', content: '“唯有寻回散落四方的《水浒秘籍》残卷. 方能引动本命星力共鸣调和.”', background: BG_CAMP, nextId: 'hall_song_command' },
  'hall_song_command': { id: 'hall_song_command', speaker: '宋江', content: '“众位兄弟都听到了. 卢俊义、燕青、鲁智深、李逵听令！命你四人协同寻访残篇. 百日之内，务必功成！”', background: BG_CAMP, nextId: 'hall_song_welcome' },
  'hall_song_welcome': { id: 'hall_song_welcome', speaker: '宋江', content: '“{playerName}小友，从今日起，梁山便是你安身之所. 望你同心协力.”', background: BG_CAMP, choices: [
    { text: '为了活命，我愿意留在梁山！', nextId: 'hall_player_sigh' }
  ]},
  'hall_player_sigh': { id: 'hall_player_sigh', speaker: '{playerName}', content: '“啊？好。。。我还能说什么呢。。。。”', background: BG_CAMP, nextId: 'day2_start' },

  // --- 第二天：特训 ---
  'day2_start': { id: 'day2_start', speaker: '系统', content: '第二天清晨。门砰地一声被撞开了，李逵闯了进来。', background: BG_CAVE, nextId: 'day2_kui_naked' },
  'day2_kui_naked': { id: 'day2_kui_naked', speaker: '{playerName}', content: '“哇！李铁牛你进屋不敲门吗！”你还没穿好衣服，手忙脚乱地抓过外褂。', background: BG_CAVE, nextId: 'day2_kui_oblivious' },
  'day2_kui_oblivious': { id: 'day2_kui_oblivious', speaker: '李逵', characterId: 'likui', content: '“敲甚么门！俺要带你去特训！快穿上衣服，迟了俺就扛你走！”', background: BG_CAVE, nextId: 'day2_kui_monologue' },
  'day2_kui_monologue': { id: 'day2_kui_monologue', speaker: '{playerName}', content: '“。。。真是无语。”', background: BG_CAVE, nextId: 'day2_kui_pre_1' },
  'day2_kui_pre_1': { id: 'day2_kui_pre_1', speaker: '李逵', characterId: 'likui', content: '“跑起来！别磨蹭！”', background: BG_FOREST, nextId: 'day2_kui_pre_2' },
  'day2_kui_pre_2': { id: 'day2_kui_pre_2', speaker: '{playerName}', content: '“呼……呼……铁牛大哥，我的腿快断了……”', background: BG_FOREST, nextId: 'day2_kui_pre_3' },
  'day2_kui_pre_3': { id: 'day2_kui_pre_3', speaker: '李逵', characterId: 'likui', content: '“断了俺给你接上！”', background: BG_FOREST, nextId: 'day2_kui_run_stat' },
  'day2_kui_run_stat': { id: 'day2_kui_run_stat', speaker: '系统', content: '体重属性 -1', background: BG_FOREST, choices: [{ text: '（呼...）', nextId: 'day2_kui_pre_11', attributeBonus: { weight: -1 } }] },
  'day2_kui_pre_11': { id: 'day2_kui_pre_11', speaker: '李逵', content: '“吼出来！大喊一声——”', background: BG_FOREST, nextId: 'day2_kui_shout_choice' },
  'day2_kui_shout_choice': { id: 'day2_kui_shout_choice', speaker: '系统', content: '你要喊吗？', background: BG_FOREST, choices: [
    { text: '滚！！', nextId: 'day2_kui_shout_success', affectionBonus: { charId: 'likui', points: 1 } },
    { text: '（算了）', nextId: 'day2_kui_shout_response_fail' }
  ]},
  'day2_kui_shout_success': { id: 'day2_kui_shout_success', speaker: '{playerName}', content: '“滚！！！”', background: BG_FOREST, nextId: 'day2_kui_tease_lu' },
  'day2_kui_shout_response_fail': { id: 'day2_kui_shout_response_fail', speaker: '李逵', content: '“真没出息！”', background: BG_FOREST, nextId: 'day2_kui_tease_lu' },
  'day2_kui_tease_lu': { id: 'day2_kui_tease_lu', speaker: '系统', content: '远远看见鲁智深。', background: BG_FOREST, nextId: 'day2_lu_chat' },
  'day2_lu_chat': { id: 'day2_lu_chat', speaker: '鲁智深', characterId: 'luzhishen', content: '“{playerName}姑娘，明日可愿来竹林寻洒家禅修？”', background: BG_FOREST, choices: [
    { text: '我想跟铁牛大哥多学学。', nextId: 'day3_kui_yiling_1', affectionBonus: { charId: 'likui', points: 15 } },
    { text: '好，明天我去。', nextId: 'day3_lu_training_start', affectionBonus: { charId: 'luzhishen', points: 1 } }
  ]},

  // --- 第三天 ---
  'day3_lu_training_start': { id: 'day3_lu_training_start', speaker: '鲁智深', characterId: 'luzhishen', content: '“洒家教你的是‘静’.”', background: CG_LU_MEDITATION, nextId: 'day3_lu_spirit_gain' },
  'day3_lu_spirit_gain': { id: 'day3_lu_spirit_gain', speaker: '系统', content: '灵力 +1', background: BG_BAMBOO, nextId: 'day3_kitchen_1' },
  'day3_kitchen_1': { id: 'day3_kitchen_1', speaker: '系统', content: '寻馒头吃。', background: BG_KITCHEN_REALLY_NEW, nextId: 'day3_kitchen_choice' },
  'day3_kitchen_choice': { id: 'day3_kitchen_choice', speaker: '李老头', content: '“要吃几个？”', background: BG_KITCHEN_REALLY_NEW, choices: [
    { text: '吃一个', nextId: 'day4_start' },
    { text: '吃十个', nextId: 'day4_start', attributeBonus: { weight: 1 } }
  ]},
  'day3_kui_yiling_1': { id: 'day3_kui_yiling_1', speaker: '李逵', content: '接老娘上山。', background: BG_MOUNTAIN, nextId: 'day3_kui_tiger' },
  'day3_kui_tiger': { id: 'day3_kui_tiger', speaker: '系统', content: '老虎出现！', background: BG_FOREST, choices: [
    { text: '冲上去！', nextId: 'day4_start', affectionBonus: { charId: 'likui', points: 10 } },
    { text: '恐惧', nextId: 'day4_start', affectionBonus: { charId: 'likui', points: -20 } }
  ]},

  // --- 第四天：校场特训 ---
  'day4_start': { id: 'day4_start', speaker: '系统', content: '第四天。', background: BG_CAMP, choices: [
    { text: '李逵：极致体魄', nextId: 'day4_kui_train_1' }
  ]},
  'day4_kui_train_1': { id: 'day4_kui_train_1', speaker: '李逵', content: '“走，见呼延将军！”', background: BG_BLACK, nextId: 'day4_kui_drill_pan_start' },
  'day4_kui_drill_pan_start': { id: 'day4_kui_drill_pan_start', speaker: '{playerName}', content: '（来到高台）', background: BG_DRILL_SCALE, nextId: 'day4_kui_drill_desc' },
  'day4_kui_drill_desc': { id: 'day4_kui_drill_desc', speaker: '呼延灼', characterId: 'huyanzhuo', content: '“开始箭术训练！”', background: BG_DRILL, nextId: 'day4_kui_train_5' },
  'day4_kui_train_5': { id: 'day4_kui_train_5', speaker: '系统', content: '你拉开牛角弓...', background: BG_DRILL },

  'day4_kui_train_archery_win_1': { id: 'day4_kui_train_archery_win_1', speaker: '李逵', content: '“好样的！”', background: BG_DRILL, nextId: 'day4_kui_train_archery_win_2' },
  'day4_kui_train_archery_win_2': { id: 'day4_kui_train_archery_win_2', speaker: '呼延灼', content: '“第二关，远靶！”', background: BG_DRILL, nextId: 'day4_kui_train_archery_level2_trigger' },
  'day4_kui_train_archery_level2_trigger': { id: 'day4_kui_train_archery_level2_trigger', speaker: '系统', content: '靶子变小了。', background: BG_DRILL },

  'day4_kui_train_archery_win_2_success': { id: 'day4_kui_train_archery_win_2_success', speaker: '李逵', content: '“又中了！”', background: BG_DRILL, nextId: 'day4_kui_train_archery_win_2_huyan' },
  'day4_kui_train_archery_win_2_huyan': { id: 'day4_kui_train_archery_win_2_huyan', speaker: '呼延灼', content: '“第三关，移动靶！”', background: BG_DRILL, nextId: 'day4_kui_train_archery_level3_trigger' },
  'day4_kui_train_archery_level3_trigger': { id: 'day4_kui_train_archery_level3_trigger', speaker: '系统', content: '限时十秒击落三个移动靶。', background: BG_DRILL },

  'day4_kui_train_archery_all_win_player': { id: 'day4_kui_train_archery_all_win_player', speaker: '{playerName}', content: '你放下长弓，语气不屑：“呼延将军，这也太简单了吧？这就是名将之后设计的‘最高难度’？”', background: BG_DRILL, nextId: 'day4_kui_train_archery_all_win_kui' },
  'day4_kui_train_archery_all_win_kui': { id: 'day4_kui_train_archery_all_win_kui', speaker: '李逵', characterId: 'likui', content: '“哇哈哈！痛快！瞧见没？这丫头动动手指，你那些个靶子就全碎了！”', background: BG_DRILL, nextId: 'day4_kui_train_archery_all_win_huyan' },
  'day4_kui_train_archery_all_win_huyan': { id: 'day4_kui_train_archery_all_win_huyan', speaker: '呼延灼', characterId: 'huyanzhuo', content: '“（羞恼）胡闹！既然如此，再上一层！来人！给这位异人蒙上双眼射倒挂金钩……”', background: BG_DRILL, nextId: 'day4_kui_train_archery_all_win_kui_stop' },
  'day4_kui_train_archery_all_win_kui_stop': { id: 'day4_kui_train_archery_all_win_kui_stop', speaker: '李逵', characterId: 'likui', content: '“（捂住呼延灼的嘴）去去去！老哥哥你疯魔了不成！再练下去俺的小文书就要被你练成烤家雀了！走走走，小文书，别理这憨鸟，俺带你加练‘极致跑操’去！”', background: BG_DRILL, nextId: 'day4_player_resist_funny' },

  // --- 新增：玩家反抗与逐渐昏倒剧情 ---
  'day4_player_resist_funny': { id: 'day4_player_resist_funny', speaker: '{playerName}', content: '“我不跑！李铁牛你杀了我吧！我抗议！我要去宋公明哥哥那里投诉你暴力教学！”你一屁股坐在地上，死活不肯挪窝。', background: BG_DRILL, nextId: 'day4_player_resist_kui_force' },
  'day4_player_resist_kui_force': { id: 'day4_player_resist_kui_force', speaker: '李逵', characterId: 'likui', content: '“嘿！投诉？俺铁牛最不怕的就是投诉！既然你不想走，那俺就发发慈悲，扛着你跑！”还没等你说完，你只觉腰间一紧，整个人被李逵像扛麻袋一样甩到了肩膀上。', background: BG_DRILL, nextId: 'day4_player_resist_system_shaking' },
  'day4_player_resist_system_shaking': { id: 'day4_player_resist_system_shaking', speaker: '系统', content: '你在李逵肩膀上剧烈挣扎，视野随着他的狂奔上下起伏。原本清朗的天空开始出现重影，胃里更是一阵翻江倒海。“快……放我下来……我真的要……呕……”', background: BG_DRILL, nextId: 'day4_kui_train_7' },

  'day4_kui_train_7': { id: 'day4_kui_train_7', speaker: '系统', content: '太阳底下，你拖着灌了铅的双腿机械地挪动. 视线开始模糊，耳边的喧嚣渐渐远去...', background: BG_DRILL, nextId: 'day4_kui_train_8' },
  'day4_kui_train_8': { id: 'day4_kui_train_8', speaker: '李逵', content: '“小文书，你怎么了？！”', background: BG_FAINT_CG, nextId: 'day4_kui_train_8_player' },
  'day4_kui_train_8_player': { id: 'day4_kui_train_8_player', speaker: '{playerName}', content: '“不行了。。。好累。。。”', background: BG_FAINT_CG, nextId: 'day4_kui_train_faint' },
  'day4_kui_train_faint': { id: 'day4_kui_train_faint', speaker: '系统', content: '你眼前一黑，彻底昏厥了过去.', background: BG_BLACK, choices: [ { text: '（陷入沉睡）', nextId: 'day5_start', attributeBonus: { weight: -1, spirit: -1 } } ] },
  'day5_start': { id: 'day5_start', speaker: '系统', content: '第五天。', background: BG_CAMP, choices: [ { text: '重新开始', nextId: 'start' } ] }
};
