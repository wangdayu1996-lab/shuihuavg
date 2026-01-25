
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

const BG_MOUNTAIN = "https://images.unsplash.com/photo-1505506005708-3058a94639e7?auto=format&fit=crop&q=80&w=2000";
const BG_CAMP = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E8%81%9A%E4%B9%89%E5%8E%85.png?raw=true";
const BG_FOREST = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%A3%AE%E6%9E%97.png?raw=true";
const BG_BAMBOO = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E7%AB%B9%E6%9E%97.png?raw=true";
const BG_MARKET = "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=2000";
const BG_CAVE = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%B1%8B%E5%86%85.png?raw=true";
const BG_KITCHEN = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%8E%83%E6%88%BF.png?raw=true";
const BG_LU_ROOM = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E5%8D%A2%E4%BF%8A%E4%B9%89%E6%88%BF.png?raw=true";
const BG_BLACK = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

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
  { id: 'likui', name: '李逵', title: '黑旋风', description: '直球之王，单纯得让人头疼。', avatar: LIKUI_PNG, portrait: LIKUI_JPG, sprite: LIKUI_PNG, personality: '狂放、憨直', affection: 0, interactionCount: 0, difficulty: 1, archetype: '犬系', heartbeatEvents: [] }
];

export const STORY_DATA: Record<string, StoryNode> = {
  // --- 第一章：林中初遇 ---
  'start': { id: 'start', speaker: '你', content: '（意识像被卷入了一台失控的碎纸机，五彩斑斓的黑暗在眼前疯狂旋转……）', background: BG_MOUNTAIN, nextId: 'trans_os_2' },
  'trans_os_2': { id: 'trans_os_2', speaker: '你', content: '（最后的记忆是主管那张吐着唾沫星子的脸，还有永远写不完的KPI……）', background: BG_MOUNTAIN, nextId: 'trans_os_3' },
  'trans_os_3': { id: 'trans_os_3', speaker: '你', content: '（渐渐地，耳边的嘈杂消失了，取而代之的是泥土的芬芳，以及一种沉重的呼吸声。）', background: BG_MOUNTAIN, nextId: 'woods_1' },
  'woods_1': { id: 'woods_1', speaker: '你', content: '（猛地睁开眼，首先映入眼帘的是一片遮天蔽日的古怪森林，然后是一张黑得像锅底一样的巨脸。）', background: BG_FOREST, nextId: 'woods_2' },
  'woods_2': { id: 'woods_2', speaker: '你', content: '“哇啊啊啊啊！！鬼啊！！”（你连滚带爬地向后缩去）', background: BG_FOREST, nextId: 'woods_3' },
  'woods_3': { id: 'woods_3', speaker: '黑大汉', content: '“嚷甚么！闭嘴！再嚷俺一斧头劈了你这丫头！”（李逵瞪圆了牛眼，腰间板斧泛着寒光）', background: BG_FOREST, characterId: 'likui', nextId: 'woods_4' },
  'woods_4': { id: 'woods_4', speaker: '{playerName}', content: '“别劈我! 这是哪? 我是不是加班加疯了产生的幻觉?”', background: BG_FOREST, nextId: 'woods_5' },
  'woods_5': { id: 'woods_5', speaker: '李逵', characterId: 'likui', content: '“甚么班不班的? 这里是俺们梁山泊的地界! 俺看你这Y头穿得古怪，倒长得像个俏文书。”', background: BG_FOREST, nextId: 'woods_5_os' },
  'woods_5_os': { id: 'woods_5_os', speaker: '你', content: '（梁山。。。？？？难道我穿越到水浒传了？！）', background: BG_FOREST, nextId: 'woods_6' },
  'woods_6': { id: 'woods_6', speaker: '李逵', characterId: 'likui', content: '“正好，哥哥最近正缺个端茶递水、誊写账目的. 你这细身板虽然砍不了人，派点用场倒也行. ”', background: BG_FOREST, nextId: 'woods_7' },
  'woods_7': { id: 'woods_7', speaker: '{playerName}', content: '“文书? 你是说宋江缺个秘书? 我……我不入伙! 我还要回去写报告……”', background: BG_FOREST, nextId: 'woods_8' },
  'woods_8': { id: 'woods_8', speaker: '李逵', characterId: 'likui', content: '“啰嗦甚! 由不得你! 走你!”', background: BG_FOREST, nextId: 'woods_9' },
  'woods_9': { id: 'woods_9', speaker: '系统', content: '李逵像拎小鸡一样把你扛到肩上，不顾你的抗议，大步流星地往山上跑去。', background: BG_FOREST, nextId: 'hall_entry' },

  // --- 聚义厅：对话与公孙胜预言 ---
  'hall_entry': { id: 'hall_entry', speaker: '系统', content: '（你就这样被头朝下地扛进了聚义厅，直到被李逵砰地一声丢在地砖上。）', background: BG_CAMP, nextId: 'hall_os_lu' },
  'hall_os_lu': { id: 'hall_os_lu', speaker: '卢俊义', characterId: 'lujunyi', content: '（内心OS：天降异人？衣着古怪，身无法力波动…是祸是福？且看兄长如何处置。）', background: BG_CAMP, nextId: 'hall_os_yan' },
  'hall_os_yan': { id: 'hall_os_yan', speaker: '燕青', characterId: 'yanqing', content: '（内心OS：哟，从天而降？有趣，这梁山是越来越热闹了。）', background: BG_CAMP, nextId: 'hall_os_lu_da' },
  'hall_os_lu_da': { id: 'hall_os_lu_da', speaker: '鲁智深', characterId: 'luzhishen', content: '（内心OS：这丫头我好像在哪见过。。。）', background: BG_CAMP, nextId: 'hall_os_kui' },
  'hall_os_kui': { id: 'hall_os_kui', speaker: '李逵', characterId: 'likui', content: '（内心OS：啊呀！天上掉下个人来！是神仙还是点心？！）', background: BG_CAMP, nextId: 'hall_kui_explain' },

  'hall_kui_explain': { id: 'hall_kui_explain', speaker: '李逵', characterId: 'likui', content: '“哥哥，俺在林子里打旋，见这丫头从天上‘啪嗒’一下掉在俺脚跟前，俺还以为是个甚么野果，凑近一看才见是个活人！”', background: BG_CAMP, nextId: 'hall_reaction_crowd' },
  'hall_reaction_crowd': { id: 'hall_reaction_crowd', speaker: '系统', content: '堂上众人面面相觑。宋江手捋胡须，神色复杂地打量着你；旁边的头领们有的交头耳，有的嘿嘿干笑，显然对李逵这番“天上掉人”的说辞感到有些不可置信。', background: BG_CAMP, nextId: 'hall_song_ask' },

  'hall_song_ask': { id: 'hall_song_ask', speaker: '宋江', content: '“你是何人？从何而来？为何突然现于我聚义厅？”', background: BG_CAMP, nextId: 'hall_name_input' },
  'hall_name_input': { id: 'hall_name_input', speaker: '系统', content: '请在这尺素纸上写下你的姓名：', background: BG_CAMP, isNameInput: true, nextId: 'hall_self_intro' },

  'hall_self_intro': { id: 'hall_self_intro', speaker: '{playerName}', content: '“我叫{playerName}，来自遥远的未来。我认识你们每一个人，梁山一百零八将的事迹在未来家喻户晓。”', background: BG_CAMP, nextId: 'hall_crowd_disbelief' },
  'hall_crowd_disbelief': { id: 'hall_crowd_disbelief', speaker: '系统', content: '堂下一片哗然，众人议论纷纷，脸上写满了质疑。宋江微微眯起眼，缓缓开口：“未来？家喻户晓？既然如此，宋某考你一题。”', background: BG_CAMP, nextId: 'hall_song_test' },
  'hall_song_test': { id: 'hall_song_test', speaker: '宋江', content: '“你说你认识我们，那我且问你，宋某当年究竟是如何上的这梁山？”', background: BG_CAMP, choices: [
    { text: '因怒杀阎婆惜被发配江州，后在浔阳楼题反诗被救上山。', nextId: 'hall_song_verdict' },
    { text: '因为在京城卖保险赔个精光，为了躲债才跑来投奔晁盖。', nextId: 'game_over_hall' }
  ]},

  'hall_song_verdict': { id: 'hall_song_verdict', speaker: '宋江', content: '“嗯。。。有点意思。诸位兄弟怎么看？”', background: BG_CAMP, nextId: 'hall_kui_support' },
  'hall_kui_support': { id: 'hall_kui_support', speaker: '李逵', characterId: 'likui', content: '“我看这丫头还算机灵，不如留在梁山干活，正好我们缺人手。”', background: BG_CAMP, nextId: 'hall_lu_support' },
  'hall_lu_support': { id: 'hall_lu_support', speaker: '卢俊义', characterId: 'lujunyi', content: '“宋公明哥哥所言极是。我这儿正有许多积压的账目需要打理，确实需要个识文断字的帮手。”', background: BG_CAMP, nextId: 'hall_kui_leg' },

  'game_over_hall': { id: 'game_over_hall', speaker: '宋江', content: '“满口胡言！宋某一生忠义，岂容你这厮在此瞎编乱造！来人，把这骗子赶出山寨，永世不得踏入！”', background: BG_BLACK, nextId: 'restart_game' },
  'restart_game': { id: 'restart_game', speaker: '系统', content: '【游戏结束】宋江最讨厌骗子。', background: BG_BLACK, choices: [{ text: '重新开始', nextId: 'start' }] },

  'hall_kui_leg': { id: 'hall_kui_leg', speaker: '李逵', characterId: 'likui', content: '“哥哥！问这许多作甚！你看她吓得脸都白了，定是好人！饿不饿？俺那儿有刚烤的羊腿！”', background: BG_CAMP, nextId: 'hall_lu_stop' },
  'hall_lu_stop': { id: 'hall_lu_stop', speaker: '鲁智深', characterId: 'luzhishen', content: '“铁牛休得莽撞！姑娘，莫怕，洒家这儿有凳子。”', background: BG_CAMP, nextId: 'hall_yan_greet' },
  'hall_yan_greet': { id: 'hall_yan_greet', speaker: '燕青', characterId: 'yanqing', content: '“小可燕青，见过阁下。观阁下服饰奇异，言谈失措，莫非……并非此世之人？”', background: BG_CAMP, nextId: 'hall_junyi_stern' },
  'hall_junyi_stern': { id: 'hall_junyi_stern', speaker: '卢俊义', characterId: 'lujunyi', content: '“小乙休要妄言. 此子来历不明，当有个交代. ”', background: BG_CAMP, nextId: 'hall_gongsun_entry' },

  'hall_gongsun_entry': { id: 'hall_gongsun_entry', speaker: '公孙胜', content: '“慢着！”（入云龙公孙胜缓步上前，双目如炬盯着你）“诸位兄弟且慢，此子身上缠绕着一股极为浓烈的‘天罡灵气’。”', background: BG_CAMP, nextId: 'hall_gongsun_reveal' },
  'hall_gongsun_reveal': { id: 'hall_gongsun_reveal', speaker: '公孙胜', content: '“她并非此界凡人，乃是受星辰感召穿越而来。然而异界之身难容星宿之力，百零八日内若无法引星宿之力调和，必将魂飞魄散！”', background: BG_CAMP, nextId: 'hall_reaction_song' },
  'hall_reaction_song': { id: 'hall_reaction_song', speaker: '宋江', content: '“竟有此事？既然是上天送来的缘分，梁山绝无见死不救之理！”', background: BG_CAMP, nextId: 'hall_reaction_all' },
  'hall_reaction_all': { id: 'hall_reaction_all', speaker: '系统', content: '堂下英雄听闻纷纷动容。李逵大吼着要第一个教你劈山，鲁智深也表示愿意护你周全，燕青与卢俊义亦当场表态支持。', background: BG_CAMP, nextId: 'hall_monologue' },
  
  'hall_monologue': { id: 'hall_monologue', speaker: '你', content: '（内心OS：什么？！我不仅穿越了，还进入了生命倒计时？！没办法，只能留在这里想想接下来怎么办了。。。）', background: BG_CAMP, choices: [
    { text: '为了活命，我愿意留在梁山！', nextId: 'day2_start' }
  ]},

  // --- 第二天：特训 ---
  'day2_start': { id: 'day2_start', speaker: '系统', content: '第二天清晨。门砰地一声被撞开了，李逵闯了进来。', background: BG_CAVE, nextId: 'day2_kui_naked' },
  'day2_kui_naked': { id: 'day2_kui_naked', speaker: '{playerName}', content: '“哇！李铁牛你进屋不敲门吗！”你还没穿好衣服，手忙脚乱地抓过外褂。', background: BG_CAVE, nextId: 'day2_kui_oblivious' },
  'day2_kui_oblivious': { id: 'day2_kui_oblivious', speaker: '李逵', characterId: 'likui', content: '“敲甚么门！俺要带你去特训！快穿上衣服，迟了俺就扛你走！”', background: BG_CAVE, nextId: 'day2_kui_monologue' },
  'day2_kui_monologue': { id: 'day2_kui_monologue', speaker: '你', content: '“。。。真是无语。”看着铁牛风风火火的背影，你叹了口气，只能认命地跟上。', background: BG_CAVE, nextId: 'day2_kui_black_forest' },
  'day2_kui_black_forest': { id: 'day2_kui_black_forest', speaker: '系统', content: '树林中', background: BG_BLACK, nextId: 'day2_kui_training_start' },
  'day2_kui_training_start': { id: 'day2_kui_training_start', speaker: '系统', content: '（场景切换：清晨的林间，露水未干，光影斑驳。）', background: BG_FOREST, nextId: 'day2_kui_pre_1' },
  'day2_kui_pre_1': { id: 'day2_kui_pre_1', speaker: '李逵', characterId: 'likui', content: '“跑起来！别磨蹭！这山路要是都走不动，以后怎么跟着俺杀敌！”', background: BG_FOREST, nextId: 'day2_kui_pre_2' },
  'day2_kui_pre_2': { id: 'day2_kui_pre_2', speaker: '{playerName}', content: '“呼……呼……铁牛大哥，我的腿快断了……”你喘得像拉风箱一样。', background: BG_FOREST, nextId: 'day2_kui_pre_3' },
  'day2_kui_pre_3': { id: 'day2_kui_pre_3', speaker: '李逵', characterId: 'likui', content: '“断了俺给你接上！瞧你这细胳膊细腿，非得好好练练这底气不可。”', background: BG_FOREST, nextId: 'day2_kui_pre_4' },
  'day2_kui_pre_4': { id: 'day2_kui_pre_4', speaker: '系统', content: '李逵在前面健步如飞，你虽然累得半死，却发现跟着他的节奏，体内的灵气似乎也在有规律地律动。', background: BG_FOREST, nextId: 'day2_kui_pre_5' },
  'day2_kui_pre_5': { id: 'day2_kui_pre_5', speaker: '李逵', characterId: 'likui', content: '“快快快！前面那个坡，冲上去！冲不上去俺就在后面用板斧给你‘助推’！”', background: BG_FOREST, nextId: 'day2_kui_pre_6' },
  'day2_kui_pre_6': { id: 'day2_kui_pre_6', speaker: '{playerName}', content: '你看着他挥舞的斧子，求生欲爆发，居然真的拔腿狂奔。', background: BG_FOREST, nextId: 'day2_kui_run_stat' },
  'day2_kui_run_stat': { 
    id: 'day2_kui_run_stat', 
    speaker: '系统', 
    content: '系统提示：在狂奔十公里后，你的体重属性 -1', 
    background: BG_FOREST, 
    choices: [
      { text: '（呼...累死了）', nextId: 'day2_kui_pre_7', attributeBonus: { weight: -1 } }
    ]
  },
  'day2_kui_pre_7': { id: 'day2_kui_pre_7', speaker: '李逵', characterId: 'likui', content: '“嘿！这不是跑得挺快嘛！别停，再来两圈！”', background: BG_FOREST, nextId: 'day2_kui_pre_8' },
  'day2_kui_pre_8': { id: 'day2_kui_pre_8', speaker: '系统', content: '在这密林深处，你被李逵折腾得汗流浃背，但也感觉到体魄在一点点变强。', background: BG_FOREST, nextId: 'day2_kui_pre_9' },
  'day2_kui_pre_9': { id: 'day2_kui_pre_9', speaker: '李逵', characterId: 'likui', content: '“歇会！看俺这招，要是有人敢近身，你就拿石头砸他脑门！”', background: BG_FOREST, nextId: 'day2_kui_pre_10' },
  'day2_kui_pre_10': { id: 'day2_kui_pre_10', speaker: '{playerName}', content: '“这……这也太粗旷了吧……”', background: BG_FOREST, nextId: 'day2_kui_pre_11' },
  'day2_kui_pre_11': { id: 'day2_kui_pre_11', speaker: '李逵', characterId: 'likui', content: '“嘿！这汗出得透，是不是觉得精神多了？这就叫脱胎换骨！”', background: BG_FOREST, nextId: 'day2_kui_pre_12' },
  'day2_kui_pre_12': { id: 'day2_kui_pre_12', speaker: '{playerName}', content: '“我只觉得快脱皮了……大哥，我们能歇会吗？”', background: BG_FOREST, nextId: 'day2_kui_pre_13' },
  'day2_kui_pre_13': { id: 'day2_kui_pre_13', speaker: '李逵', characterId: 'likui', content: '“歇甚！来，俺教你怎么避开敌人的重兵器。瞧准俺的斧头，往左闪！”', background: BG_FOREST, nextId: 'day2_kui_pre_14' },
  'day2_kui_pre_14': { id: 'day2_kui_pre_14', speaker: '系统', content: '他虽然手握重斧，但每次挥下都精准地停在你身前一寸，这种极致的控制力让你心惊。', background: BG_FOREST, nextId: 'day2_kui_pre_15' },
  'day2_kui_pre_15': { id: 'day2_kui_pre_15', speaker: '{playerName}', content: '“原来大哥平时劈人……咳，练武，竟然这么细致。”', background: BG_FOREST, nextId: 'day2_kui_吼_1' },
  'day2_kui_吼_1': { id: 'day2_kui_吼_1', speaker: '李逵', characterId: 'likui', content: '“停！到这儿就行. 现在俺教你最重要的：吼出来！气沉丹田，大喊一声——”', background: BG_FOREST, nextId: 'day2_kui_shout_choice' },
  'day2_kui_shout_choice': { id: 'day2_kui_shout_choice', speaker: '系统', content: '你要喊吗？', background: BG_FOREST, choices: [
    { text: '滚！！', nextId: 'day2_kui_shout_success', attributeBonus: { strength: 1 } },
    { text: '（还是算了吧，太羞耻了）', nextId: 'day2_see_lu' }
  ]},
  'day2_kui_shout_success': { id: 'day2_kui_shout_success', speaker: '你', content: '“滚！！！”你用尽全身力气大喊，感觉一股热气从脚底直冲天灵盖。', background: BG_FOREST, nextId: 'day2_see_lu' },

  'day2_see_lu': { id: 'day2_see_lu', speaker: '系统', content: '你正憋足了劲准备大喊，忽然看到远处一个魁梧的身影挑着满满两桶水稳步走来，步伐虽然沉重却极有节奏。', background: BG_FOREST, nextId: 'day2_kui_call_lu' },
  'day2_kui_call_lu': { id: 'day2_kui_call_lu', speaker: '李逵', characterId: 'likui', content: '“嘿！智深兄弟！挑这么多水，是要去洗澡还是酿酒啊？过来聊两句！”', background: BG_FOREST, nextId: 'day2_lu_chat' },
  'day2_lu_chat': { id: 'day2_lu_chat', speaker: '鲁智深', characterId: 'luzhishen', content: '“铁牛休要胡说。洒家这是去后山竹林洒扫禅修。姑娘也在啊，看来这黑旋风没少折腾你。”', background: BG_FOREST, nextId: 'day2_player_curious' },
  'day2_player_curious': { id: 'day2_player_curious', speaker: '{playerName}', content: '“禅修？在竹林里吗？听起来很安静的样子...不知道在那特训会是什么感觉。”', background: BG_FOREST, nextId: 'day2_lu_invite' },
  'day2_lu_invite': { id: 'day2_lu_invite', speaker: '鲁智深', characterId: 'luzhishen', content: '“哈哈，倒也清静。姑娘若是有意，明日可来竹林寻洒家，教你几招定心的本事，总好过在这林子里乱吼。”', background: BG_FOREST, nextId: 'day2_lu_interrupt' },

  'day2_lu_interrupt': { id: 'day2_lu_interrupt', speaker: '鲁智深', characterId: 'luzhishen', content: '“怎么样，明日可愿来？”', background: BG_FOREST, choices: [
    { text: '（坚定地）我想跟铁牛大哥多学学。', nextId: 'day2_choice_stay_kui_lu_msg', affectionBonus: { charId: 'likui', points: 15 } },
    { text: '（礼貌地）好，明天我去竹林找大师。', nextId: 'day2_choice_accept_lu', affectionBonus: { charId: 'luzhishen', points: 15 } }
  ]},

  // 分支：跟李逵继续学
  'day2_choice_stay_kui_lu_msg': { id: 'day2_choice_stay_kui_lu_msg', speaker: '鲁智深', characterId: 'luzhishen', content: '“既然如此，洒家也不强求。洒家平日都在后山竹林禅修，你若想听禅定心，随时可来寻洒家。”', background: BG_FOREST, nextId: 'day2_choice_stay_kui' },
  'day2_choice_stay_kui': { id: 'day2_choice_stay_kui', speaker: '李逵', characterId: 'likui', content: '“哈哈！够意思！那老和尚只会打坐，闷得死人. 还是俺带你练带劲！”', background: BG_FOREST, nextId: 'day2_choice_stay_kui_t' },
  'day2_choice_stay_kui_t': { id: 'day2_choice_stay_kui_t', speaker: '李逵', characterId: 'likui', content: '“来，接着吼！别像个娘们似的. 要把肚子里那口恶气全撒出来！”', background: BG_FOREST, nextId: 'day2_kui_t_2' },
  'day2_kui_t_2': { id: 'day2_kui_t_2', speaker: '{playerName}', content: '你深吸一口气，学着他的样子，“哇——呀！！”', background: BG_FOREST, nextId: 'day2_kui_t_3' },
  'day2_kui_t_3': { id: 'day2_kui_t_3', speaker: '李逵', characterId: 'likui', content: '“不对！再大声点！想象那老虎要叼走你的奖金！”', background: BG_FOREST, nextId: 'day2_kui_t_4' },
  'day2_kui_t_4': { id: 'day2_kui_t_4', speaker: '{playerName}', content: '“为了年终奖！！滚！！！”你用尽全身力气咆哮，惊起一片飞鸟。', background: BG_FOREST, nextId: 'day2_kui_t_5' },
  'day2_kui_t_5': { id: 'day2_kui_t_5', speaker: '李逵', characterId: 'likui', content: '“好！就是这股狠劲！走，带你去搬大石头，练练力气！”', background: BG_FOREST, nextId: 'day2_kui_t_6' },
  'day2_kui_t_6': { id: 'day2_kui_t_6', speaker: '系统', content: '你费力地搬着磨盘大的青石，李逵在一旁轻巧地抛接他的板斧，眼神里难得露出一丝关切。', background: BG_FOREST, nextId: 'day2_kui_t_7' },
  'day2_kui_t_7': { id: 'day2_kui_t_7', speaker: '李逵', characterId: 'likui', content: '“娃娃，俺其实觉得你这文弱样也挺好，像个读书人. 但梁山乱，你得能护住自己. ”', background: BG_FOREST, nextId: 'day2_kui_t_8' },
  'day2_kui_t_8': { id: 'day2_kui_t_8', speaker: '{playerName}', content: '“铁牛大哥，没想到你还会关心人。”', background: BG_FOREST, nextId: 'day2_kui_t_9' },
  'day2_kui_t_9': { id: 'day2_kui_t_9', speaker: '李逵', characterId: 'likui', content: '“呸！谁关心你了！俺是怕你死了，没人给哥哥写账目！”', background: BG_FOREST, nextId: 'day2_kui_t_10' },
  'day2_kui_t_10': { id: 'day2_kui_t_10', speaker: '系统', content: '夕阳西下，你们并肩走回营地。李逵偷偷往你手里塞了一块刚烤好的肉饼。', background: BG_BLACK, nextId: 'day3_kui_yiling_1' },

  // --- 分支：答应鲁智深后的后续 ---
  'day2_choice_accept_lu': { id: 'day2_choice_accept_lu', speaker: '李逵', characterId: 'likui', content: '“呸！那老和尚除了喝酒就是念经，有甚么好见的！”李逵虽然嘴上骂着，还是没松开拽着你领子的手。', background: BG_FOREST, nextId: 'day2_lu_kui_1' },
  'day2_lu_kui_1': { id: 'day2_lu_kui_1', speaker: '李逵', characterId: 'likui', content: '“答应归答应，今天你还是俺的人！来，给俺扎半个时辰马步！”', background: BG_FOREST, nextId: 'day2_lu_kui_2' },
  'day2_lu_kui_2': { id: 'day2_lu_kui_2', speaker: '{playerName}', content: '“半个时辰？铁牛大哥，我的腿会断的……”你惨叫着被强行按了下去。', background: BG_FOREST, nextId: 'day2_lu_kui_3' },
  'day2_lu_kui_3': { id: 'day2_lu_kui_3', speaker: '李逵', characterId: 'likui', content: '“断了俺背你！梁山的爷们哪能没点下盘功夫. 腰挺直了！”', background: BG_FOREST, nextId: 'day2_lu_kui_4' },
  'day2_lu_kui_4': { id: 'day2_lu_kui_4', speaker: '系统', content: '烈日下，李逵居然耐着性子在你身边转圈，不时用斧柄纠正你的姿势，眼神虽然凶，却透着股认真的劲。', background: BG_FOREST, nextId: 'day2_lu_kui_5' },
  'day2_lu_kui_5': { id: 'day2_lu_kui_5', speaker: '李逵', characterId: 'likui', content: '“娃娃，俺跟你说，以后见着官兵，要是打不过，你就往泥坑里钻，他们爱惜那身狗皮，不敢追！”', background: BG_FOREST, nextId: 'day2_lu_kui_6' },
  'day2_lu_kui_6': { id: 'day2_lu_kui_6', speaker: '{playerName}', content: '你汗流浃背地苦笑：“这……这也是保命法则吗？”', background: BG_FOREST, nextId: 'day2_lu_kui_7' },
  'day2_lu_kui_7': { id: 'day2_lu_kui_7', speaker: '李逵', characterId: 'likui', content: '“废话！命没了，甚么都是虚的. 俺李逵天不怕地不怕，就怕老娘没人送终. ”', background: BG_FOREST, nextId: 'day2_lu_kui_8' },
  'day2_lu_kui_8': { id: 'day2_lu_kui_8', speaker: '系统', content: '他突然沉默了一下，大黑脸在阳光下显得有些落寞。你心中一动，感觉到这个粗汉子柔软的内心。', background: BG_FOREST, nextId: 'day2_lu_kui_9' },
  'day2_lu_kui_9': { id: 'day2_lu_kui_9', speaker: '李逵', characterId: 'likui', content: '“行了，今天就到这. 明天去见那和尚，要是他欺负你，你只管喊俺的名字！”', background: BG_FOREST, nextId: 'day2_lu_kui_10' },
  'day2_lu_kui_10': { id: 'day2_lu_kui_10', speaker: '系统', content: '李逵拍了拍你的肩膀，那力道差点让你直接散架。夕阳拉长了你们一高一矮的身影。', background: BG_BLACK, nextId: 'day3_lu_training_start' },

  // --- 第三天：鲁智深特训 ---
  'day3_lu_training_start': { id: 'day3_lu_training_start', speaker: '系统', content: '第三天。清晨的雾气还未散去，你如约来到了后山的翠竹林。', background: BG_BAMBOO, nextId: 'day3_lu_1' },
  'day3_lu_1': { id: 'day3_lu_1', speaker: '鲁智深', characterId: 'luzhishen', content: '“你来了，姑娘. 动作倒快，洒家这坛酒还没见底呢. ”', background: BG_BAMBOO, nextId: 'day3_lu_2' },
  'day3_lu_2': { id: 'day3_lu_2', speaker: '{playerName}', content: '“大师久等了。我们今天学什么？也是劈砖搬石吗？”', background: BG_BAMBOO, nextId: 'day3_lu_3' },
  'day3_lu_3': { id: 'day3_lu_3', speaker: '鲁智深', characterId: 'luzhishen', content: '“非也. 铁牛教你的是杀气，洒家要教你的是‘静’. ”', background: BG_BAMBOO, nextId: 'day3_lu_4' },
  'day3_lu_4': { id: 'day3_lu_4', speaker: '鲁智深', characterId: 'luzhishen', content: '“坐下. 听这林中的风声，听那竹叶落地的沙沙声. 心若不静，禅杖挥得再响也只是空力. ”', background: BG_BAMBOO, nextId: 'day3_lu_5' },
  'day3_lu_5': { id: 'day3_lu_5', speaker: '系统', content: '你盘腿坐下，鲁智深就坐在你对面。虽然他相貌魁梧，但此刻却散发出一种如山岳般沉稳的气息。', background: BG_BAMBOO, nextId: 'day3_lu_6' },
  'day3_lu_6': { id: 'day3_lu_6', speaker: '鲁智深', characterId: 'luzhishen', content: '“所谓‘格物’，先要格己. 你的天罡灵气浮躁难安，是因你心中尚有恐惧. ”', background: BG_BAMBOO, nextId: 'day3_lu_7' },
  'day3_lu_7': { id: 'day3_lu_7', speaker: '{playerName}', content: '“我确实害怕。我怕回不去，怕这百零八日后就成了云烟……”', background: BG_BAMBOO, nextId: 'day3_lu_8' },
  'day3_lu_8': { id: 'day3_lu_8', speaker: '鲁智深', characterId: 'luzhishen', content: '“哈哈！生死有命，富贵在天. 洒家以前杀人放火，现在修佛救人，求的就是个‘无愧’. ”', background: BG_BAMBOO, nextId: 'day3_lu_9' },
  'day3_lu_9': { id: 'day3_lu_9', speaker: '系统', content: '他突然起身，随手折下根竹枝，在你面前舞动。动作极慢，却隐隐有雷霆之势。', background: BG_BAMBOO, nextId: 'day3_lu_10' },
  'day3_lu_10': { id: 'day3_lu_10', speaker: '鲁智深', characterId: 'luzhishen', content: '“这叫‘降魔劲’. 不是为了杀敌，而是为了护人. 你要记着，空有一身武艺若无守护之心，不过是屠夫耳. ”', background: BG_BAMBOO, nextId: 'day3_lu_11' },
  'day3_lu_11': { id: 'day3_lu_11', speaker: '系统', content: '接下来的几个时辰，鲁智深纠正了你的呼吸法，并教了一套简单的防身拳路，一遍又一遍，极有耐心。', background: BG_BAMBOO, nextId: 'day3_lu_spirit_gain' },
  'day3_lu_spirit_gain': { id: 'day3_lu_spirit_gain', speaker: '系统', content: '（修行有感：你的呼吸逐渐平稳，与星宿之力产生了共鸣。灵力 +1）', background: BG_BAMBOO, choices: [
    { text: '继续修行', nextId: 'day3_lu_12', attributeBonus: { spirit: 1 } }
  ]},
  'day3_lu_12': { id: 'day3_lu_12', speaker: '{playerName}', content: '虽然累得满头大汗，但你确实感到体内那股乱窜的气息渐渐平复，与血脉交融。', background: BG_BAMBOO, nextId: 'day3_lu_13' },
  'day3_lu_13': { id: 'day3_lu_13', speaker: '鲁智深', characterId: 'luzhishen', content: '“好！悟性不错. 虽比不得林冲兄弟，倒也是个可造之材. ”', background: BG_BAMBOO, nextId: 'day3_lu_14' },
  'day3_lu_14': { id: 'day3_lu_14', speaker: '鲁智深', characterId: 'luzhishen', content: '“行了，练了一晌午，洒家肚子也饿了. 你且去梁山后厨，寻那李老头讨几个刚出锅的馒头. ”', background: BG_BAMBOO, nextId: 'day3_lu_15' },
  'day3_lu_15': { id: 'day3_lu_15', speaker: '鲁智深', characterId: 'luzhishen', content: '“洒家这就去找铁牛喝个痛快. 去吧！”', background: BG_BLACK, nextId: 'day3_kitchen_1' },

  // --- 后厨路径 ---
  'day3_kitchen_1': { id: 'day3_kitchen_1', speaker: '系统', content: '你循着炊烟找到了后厨，这里热气腾腾，一个慈眉善目的老厨师正在灶台忙活。', background: BG_KITCHEN, nextId: 'day3_kitchen_2' },
  'day3_kitchen_2': { id: 'day3_kitchen_2', speaker: '李老头', content: '“哟，是公孙先生说的那位异人吧？来来，大师打过招呼了，刚蒸好的大白馒头，还烫嘴呢！”', background: BG_KITCHEN, nextId: 'day3_kitchen_3' },
  'day3_kitchen_3': { id: 'day3_kitchen_3', speaker: '{playerName}', content: '你嗅着空气中浓郁的面香，李老头端出一个大笸箩，热气腾腾的馒头堆得像小山一样。', background: BG_KITCHEN, nextId: 'day3_kitchen_choice' },
  'day3_kitchen_choice': { id: 'day3_kitchen_choice', speaker: '李老头', content: '“饿坏了吧？快，趁热吃！你要吃几个？”', background: BG_KITCHEN, choices: [
    { text: '（矜持地）吃一个就够了。', nextId: 'day3_kitchen_one' },
    { text: '（豪迈地）给我来十个！', nextId: 'day3_kitchen_ten', attributeBonus: { weight: 1 } }
  ]},
  'day3_kitchen_one': { id: 'day3_kitchen_one', speaker: '李老头', content: '“哈哈，果然是文弱的女娃娃，不像我们梁山这些糙老爷们，一个个吃起饭来像饿狼投胎似的。”', background: BG_KITCHEN, nextId: 'day3_kitchen_4' },
  'day3_kitchen_ten': { id: 'day3_kitchen_ten', speaker: '李老头', content: '“（大惊失色）哎呀！你这小丫头看着细皮嫩肉，怎的胃口比铁牛还大？老头子在这灶台忙活大半辈子，从来没见过这么能吃女孩子！”', background: BG_KITCHEN, nextId: 'day3_kitchen_4' },

  'day3_kitchen_4': { id: 'day3_kitchen_4', speaker: '李老头', content: '“老头子在这待了五年咯. 看尽了这帮好汉的进进出出. 要说啊，大师和铁牛真是这山上最真的心. ”', background: BG_KITCHEN, nextId: 'day3_kitchen_5' },
  'day3_kitchen_5': { id: 'day3_kitchen_5', speaker: '李老头', content: '“前年冬雪，俺家孙子生了重病，是铁牛那憨子大半夜跑了几十里路背回的郎中. 虽然他嘴臭，可心里软着呢. ”', background: BG_KITCHEN, nextId: 'day3_kitchen_6' },
  'day3_kitchen_6': { id: 'day3_kitchen_6', speaker: '李老头', content: '“还有大师，他在伙房偷酒喝被老头子抓着，居然还帮俺劈了一个月的柴当酒钱. 这世道，好人难做，可他们做得极欢实. ”', background: BG_KITCHEN, nextId: 'day3_kitchen_7' },
  'day3_kitchen_7': { id: 'day3_kitchen_7', speaker: '{playerName}', content: '你听着老人的碎语，心中对这两位性格迥异的英雄有了更深的理解。', background: BG_KITCHEN, nextId: 'day3_kitchen_8' },
  'day3_kitchen_8': { id: 'day3_kitchen_8', speaker: '系统', content: '吃完馒头，你谢过李老头。远处的聚义厅传来了豪爽的笑笑声，那是英雄们的日常。', background: BG_BLACK, nextId: 'day4_start' },

  // --- 第三天：李逵心动剧情 - 沂岭杀四虎 ---
  'day3_kui_yiling_1': { id: 'day3_kui_yiling_1', speaker: '系统', content: '第三天. 天刚蒙蒙亮，李逵就火急火燎地把你拽出了被窝. ', background: BG_CAVE, nextId: 'day3_kui_yiling_2' },
  'day3_kui_yiling_2': { id: 'day3_kui_yiling_2', speaker: '李逵', characterId: 'likui', content: '“快走！俺要回沂岭接老娘上山，这路上不平，你心思细，陪俺走一趟！”', background: BG_CAVE, nextId: 'day3_kui_yiling_3' },
  'day3_kui_yiling_3': { id: 'day3_kui_yiling_3', speaker: '系统', content: '你们一路疾行至沂州境内的沂岭。山路崎岖，林木幽深，隐约透着股不安的寂静。', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_4' },
  'day3_kui_yiling_4': { id: 'day3_kui_yiling_4', speaker: '李逵', characterId: 'likui', content: '“娘！俺铁牛回来接您了！”（李逵背着眼盲的老母，步履轻快）', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_5' },
  'day3_kui_yiling_5': { id: 'day3_kui_yiling_5', speaker: '李母', content: '“铁牛啊……这位小友是？”', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_6' },
  'day3_kui_yiling_6': { id: 'day3_kui_yiling_6', speaker: '{playerName}', content: '“老人家，我是李大哥在山上的朋友，陪他一起来接您。”', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_7' },
  'day3_kui_yiling_7': { id: 'day3_kui_yiling_7', speaker: '系统', content: '夕阳偏西，李逵背着母亲走得满头大汗。老母突然说口渴难耐。', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_8' },
  'day3_kui_yiling_8': { id: 'day3_kui_yiling_8', speaker: '李逵', characterId: 'likui', content: '“小文书，你且看好俺老娘，俺去山脚寻些净水，片刻就回！”', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_wait_1' },
  'day3_kui_yiling_wait_1': { id: 'day3_kui_yiling_wait_1', speaker: '系统', content: '。。。', background: BG_BLACK, nextId: 'day3_kui_yiling_wait_2' },
  'day3_kui_yiling_wait_2': { id: 'day3_kui_yiling_wait_2', speaker: '系统', content: '。。。', background: BG_BLACK, nextId: 'day3_kui_yiling_9' },
  'day3_kui_yiling_9': { id: 'day3_kui_yiling_9', speaker: '系统', content: '李逵匆匆离去。林中突然刮起一阵腥风，落叶漫天卷起。', background: BG_FOREST, nextId: 'day3_kui_yiling_10' },
  'day3_kui_yiling_10': { id: 'day3_kui_yiling_10', speaker: '系统', content: '（吼——！）灌木丛中猛地窜出两头斑斓大虎，直扑惊恐的老母！', background: BG_FOREST, nextId: 'day3_kui_choice' },
  'day3_kui_choice': { id: 'day3_kui_choice', speaker: '系统', content: '危急时刻，你的抉择是：', background: BG_FOREST, choices: [
    { text: '【拿起枯枝冲上去】哪怕力量微弱，也要为铁牛拖延时间！', nextId: 'day3_kui_help_1', affectionBonus: { charId: 'likui', points: 40 }, attributeBonus: { strength: 10 } },
    { text: '【在一旁恐惧观望】双腿发软动弹不得，只能凄厉呼救。', nextId: 'day3_kui_watch_1', affectionBonus: { charId: 'likui', points: -30 } }
  ]},

  // --- 帮助路径 ---
  'day3_kui_help_1': { id: 'day3_kui_help_1', speaker: '{playerName}', content: '“畜生！滚开！！”你抓起地上一截粗壮的枯枝，发疯似地挥舞，挡在老母身前。', background: BG_FOREST, nextId: 'day3_kui_help_2' },
  'day3_kui_help_2': { id: 'day3_kui_help_2', speaker: '系统', content: '猛虎被你的气势震慑了一瞬，转而愤怒地向你扑来，腥臭的口气近在咫尺。', background: BG_FOREST, nextId: 'day3_kui_help_3' },
  'day3_kui_help_3': { id: 'day3_kui_help_3', speaker: '李逵', characterId: 'likui', content: '“尔敢动俺的人！！！哇呀呀呀呀！！！”', background: BG_FOREST, nextId: 'day3_kui_help_4' },
  'day3_kui_help_4': { id: 'day3_kui_help_4', speaker: '系统', content: '李逵拎着朴刀如黑色雷霆般坠落，瞬间将一头大虎劈成两半！', background: BG_FOREST, nextId: 'day3_kui_help_5' },
  'day3_kui_help_5': { id: 'day3_kui_help_5', speaker: '系统', content: '此时又有两头幼虎与另一头母虎杀出，李逵杀红了眼，朴刀飞旋如血色风暴。', background: BG_FOREST, nextId: 'day3_kui_help_6' },
  'day3_kui_help_6': { id: 'day3_kui_help_6', speaker: '系统', content: '你在后方不断投掷石块干扰，李逵则像头真正的野兽在虎群中肉搏，鲜血染红了他的整张脸。', background: BG_FOREST, nextId: 'day3_kui_help_7' },
  'day3_kui_help_7': { id: 'day3_kui_help_7', speaker: '系统', content: '终于，最后一头猛虎在李逵的铁拳下脑浆迸裂，沉重地倒在血泊中。', background: BG_FOREST, nextId: 'day3_kui_help_8' },
  'day3_kui_help_8': { id: 'day3_kui_help_8', speaker: '系统', content: '他喘着粗气回过头看向被吓坏的你，眼神瞬间从野兽变成了做错事的孩子。', background: BG_FOREST, nextId: 'day3_kui_help_9' },
  'day3_kui_help_9': { id: 'day3_kui_help_9', speaker: '李逵', characterId: 'likui', content: '他小心翼翼地递过一只还带着体温的虎爪：“娃娃，别怕，有俺在. 刚才……谢谢你护着俺娘. ”', background: BG_FOREST, nextId: 'day3_kui_help_10' },
  'day3_kui_help_10': { id: 'day3_kui_help_10', speaker: '李逵', characterId: 'likui', content: '“等回了梁山，俺一定教你更多真本事！俺李逵这条命，以后也是你的！”', background: BG_FOREST, nextId: 'day4_start' },

  // --- 观看路径 ---
  'day3_kui_watch_1': { id: 'day3_kui_watch_1', speaker: '系统', content: '你被眼前的庞然大物彻底吓傻了，瘫软在地，甚至发不出求救的声音。', background: BG_FOREST, nextId: 'day3_kui_watch_2' },
  'day3_kui_watch_2': { id: 'day3_kui_watch_2', speaker: '系统', content: '猛虎的利爪几乎要触及老母的衣襟. 这时李逵才拎着水坛狂奔而归. ', background: BG_FOREST, nextId: 'day3_kui_watch_3' },
  'day3_kui_watch_3': { id: 'day3_kui_watch_3', speaker: '李逵', characterId: 'likui', content: '“畜生！！！受死！！！”', background: BG_FOREST, nextId: 'day3_kui_watch_4' },
  'day3_kui_watch_4': { id: 'day3_kui_watch_4', speaker: '系统', content: '因为错过了最佳时机，李逵只能硬生生用背部挡住一记虎扑，后背顿时皮开肉绽。', background: BG_FOREST, nextId: 'day3_kui_watch_5' },
  'day3_kui_watch_5': { id: 'day3_kui_watch_5', speaker: '系统', content: '他像疯了一样挥舞朴刀，虽然最终击毙了四虎，彰显了过人武力，但整个人已是伤痕累累。', background: BG_FOREST, nextId: 'day3_kui_watch_6' },
  'day3_kui_watch_6': { id: 'day3_kui_watch_6', speaker: '系统', content: '战斗结束后，他拄着刀，在血泊中沉默了很久很久。', background: BG_FOREST, nextId: 'day3_kui_watch_7' },
  'day3_kui_watch_7': { id: 'day3_kui_watch_7', speaker: '李逵', characterId: 'likui', content: '（他回过头，眼神平淡得像一潭死水，没有愤怒，也没有劫后余生的喜悦）', background: BG_FOREST, nextId: 'day3_kui_watch_8' },
  'day3_kui_watch_8': { id: 'day3_kui_watch_8', speaker: '李逵', characterId: 'likui', content: '“……没事. 俺不怪你. 你这细身板，害怕也是常理. 咱们走吧. ”', background: BG_FOREST, nextId: 'day3_kui_watch_9' },
  'day3_kui_watch_9': { id: 'day3_kui_watch_9', speaker: '{playerName}', content: '你张了张嘴，却发现任何道歉都显得那么无力。', background: BG_FOREST, nextId: 'day3_kui_watch_10' },
  'day3_kui_watch_10': { id: 'day3_kui_watch_10', speaker: '李逵', characterId: 'likui', content: '（他自顾自地背起老娘，脚步比来时沉重了许多）“回山吧，别耽误了正事。”', background: BG_BLACK, nextId: 'day4_start' },

  // --- 第四天：导师正式选择 ---
  'day4_start': { id: 'day4_start', speaker: '系统', content: '第四天。这一日，你需要正式决定跟随哪位英雄开启正式的专项特训。', background: BG_CAMP, nextId: 'day4_choice' },
  'day4_choice': { id: 'day4_choice', speaker: '系统', content: '谁将成为你这段修行之旅的引路人？', background: BG_CAMP, choices: [
    { text: '卢俊义：研习“格物鉴宝”', nextId: 'day4_lu_1', attributeBonus: { intelligence: 10 } },
    { text: '燕青：研习“潜伏谍报”', nextId: 'day4_yan_1', attributeBonus: { intelligence: 5, spirit: 5 } },
    { text: '鲁智深：研习“禅意守护”', nextId: 'day4_luzhishen_branch', attributeBonus: { spirit: 10 } },
    { text: '李逵：研习“极致体魄”', nextId: 'day4_kui_branch', attributeBonus: { strength: 10 } }
  ]},

  // --- 李逵特训分歧：热情 vs 傲娇 ---
  'day4_kui_enth_1': { id: 'day4_kui_enth_1', speaker: '李逵', characterId: 'likui', content: '李逵老远就挥着手，大黑脸上满是止不住的笑意，那口白牙在阳光下晃得你眼晕。', background: BG_FOREST, nextId: 'day4_kui_enth_2' },
  'day4_kui_enth_2': { id: 'day4_kui_enth_2', speaker: '李逵', characterId: 'likui', content: '“娃娃！俺老娘说了，你是个顶好的姑娘，比梁山那些只知道喝酒的汉子强多了！来，今天俺教你压箱底的本事！”', background: BG_FOREST, nextId: 'day4_kui_enth_3' },
  'day4_kui_enth_3': { id: 'day4_kui_enth_3', speaker: '系统', content: '他细心地为你挑选了一把轻便的短朴刀，甚至还蹲下身子，笨手笨脚地帮你缠好了护手的布条。', background: BG_FOREST, nextId: 'day4_kui_enth_4' },
  'day4_kui_enth_4': { id: 'day4_kui_enth_4', speaker: '李逵', characterId: 'likui', content: '“记住喽，这步子要稳，就像那天咱在沂岭杀虎一样，心不能乱！手上有劲，心里有数，谁也伤不了你！”', background: BG_FOREST, nextId: 'day4_kui_enth_5' },
  'day4_kui_enth_5': { id: 'day4_kui_enth_5', speaker: '系统', content: '训练结束，他豪爽地拍着胸脯保证，以后在梁山只要喊一声“铁牛”，保准没人敢动你一根指头。', background: BG_FOREST, nextId: 'day5_start' },

  'day4_kui_sulk_1': { id: 'day4_kui_sulk_1', speaker: '系统', content: '你来到林子里，李逵正背对着你，用斧头狠狠地劈着一截已经稀碎的枯木，木屑乱飞。', background: BG_FOREST, nextId: 'day4_kui_sulk_2' },
  'day4_kui_sulk_2': { id: 'day4_kui_sulk_2', speaker: '你', content: '你试探着唤他一声：“铁牛大哥？”他只是闷声“哼”了一声，连头都没回，斧头劈得更响了。', background: BG_FOREST, nextId: 'day4_kui_sulk_3' },
  'day4_kui_sulk_3': { id: 'day4_kui_sulk_3', speaker: '李逵', characterId: 'likui', content: '“练功！看俺作甚！那边那堆大石头，去搬五十回。搬不动就早些下山，省得在这儿晃俺的眼。”', background: BG_FOREST, nextId: 'day4_kui_sulk_4' },
  'day4_kui_sulk_4': { id: 'day4_kui_sulk_4', speaker: '系统', content: '他在一旁自顾自地轮着板斧，每一下都带着泄愤般的势大力沉，空气中弥漫着一种尴尬而沉闷的气息。', background: BG_FOREST, nextId: 'day4_kui_sulk_5' },
  'day4_kui_sulk_5': { id: 'day4_kui_sulk_5', speaker: '你', content: '你看着他气鼓鼓的背影，知道他还在为沂岭时你袖手旁观的事耿耿于怀。你决定：', background: BG_FOREST, choices: [
    { text: '（直接质问）铁牛大哥，你是不是在生我的气？', nextId: 'day4_kui_sulk_ask', affectionBonus: { charId: 'likui', points: 10 } },
    { text: '（保持沉默）一言不发，默默去搬那些沉重的石头。', nextId: 'day4_kui_sulk_silent', affectionBonus: { charId: 'likui', points: 5 } }
  ]},
  'day4_kui_sulk_ask': { id: 'day4_kui_sulk_ask', speaker: '李逵', characterId: 'likui', content: '“谁、谁生气了！俺铁牛顶天立地，哪有工夫生你这小丫头的气！”他动作一僵，说话都有点结巴了。', background: BG_FOREST, nextId: 'day5_start' },
  'day4_kui_sulk_silent': { id: 'day4_kui_sulk_silent', speaker: '系统', content: '你费力地挪动着石块，李逵偷偷拿眼角扫你，见你真在练，才收了斧头，不情不愿地走过来帮你托了一把。', background: BG_FOREST, nextId: 'day5_start' },

  // --- 卢俊义特训剧情：使用新房间背景 ---
  'day4_lu_1': { id: 'day4_lu_1', speaker: '系统', content: '你穿过两道朱红大门，来到了卢俊义在梁山的临时府邸. 院内陈设虽然简约，却极有格调. ', background: BG_LU_ROOM, nextId: 'day4_lu_2' },
  'day4_lu_2': { id: 'day4_lu_2', speaker: '系统', content: '书房内，卢俊义正对着几本厚重的账册和军需调度令发愁. 他的眉头紧锁，笔尖在纸上悬而未落. ', background: BG_LU_ROOM, nextId: 'day4_lu_3' },
  'day4_lu_3': { id: 'day4_lu_3', speaker: '{playerName}', content: '“卢员外，打扰了. 我来履行约定，跟您研习‘格物’之道. ”你轻声开口. ', background: BG_LU_ROOM, nextId: 'day4_lu_4' },
  'day4_lu_4': { id: 'day4_lu_4', speaker: '卢俊义', characterId: 'lujunyi', content: '（他连头都没有抬，声音冷淡且透着一股疲惫）“是你啊. 今天不凑巧， treasury 的账目出了些岔子. ”', background: BG_LU_ROOM, nextId: 'day4_lu_5' },
  'day4_lu_5': { id: 'day4_lu_5', speaker: '卢俊义', characterId: 'lujunyi', content: '“这军饷的调度比京城的买卖还要繁琐. 我现在满脑子都是那些粮草数字，没工夫教你什么格物. ”', background: BG_LU_ROOM, nextId: 'day4_lu_6' },
  'day4_lu_6': { id: 'day4_lu_6', speaker: '{playerName}', content: '“可是……公孙胜先生说我的时间不多了，希望能尽早……”', background: BG_LU_ROOM, nextId: 'day4_lu_7' },
  'day4_lu_7': { id: 'day4_lu_7', speaker: '卢俊义', characterId: 'lujunyi', content: '（他有些不耐烦地搁下笔，朱砂墨溅到了他的袖口上）“我也希望能帮你，但此刻我身负全山兄弟的粮草命脉. ”', background: BG_LU_ROOM, nextId: 'day4_lu_8' },
  'day4_lu_8': { id: 'day4_lu_8', speaker: '系统', content: '看着卢俊义那双因熬夜而略显红肿的眼睛，以及桌上已经变凉的残茶，你决定：', background: BG_LU_ROOM, choices: [
    { text: '【体贴行事】默默走到一旁，为他沏上一盏温热的龙井。', nextId: 'day4_lu_9_success', affectionBonus: { charId: 'lujunyi', points: 15 }, attributeBonus: { intelligence: 5 } },
    { text: '【强硬坚持】坚持今天必须开始，提醒他梁山以诺言为重。', nextId: 'day4_lu_9_fail', affectionBonus: { charId: 'lujunyi', points: -15 }, attributeBonus: { strength: 5 } }
  ]},
  'day4_lu_9_success': { id: 'day4_lu_9_success', speaker: '卢俊义', characterId: 'lujunyi', content: '（他端起你沏的热茶，闻着清雅的香气，神色终于缓和了一些）“……有心了. 这茶温润得恰到好处. ”', background: BG_LU_ROOM, nextId: 'day4_lu_10_success' },
  'day4_lu_10_success': { id: 'day4_lu_10_success', speaker: '卢俊义', characterId: 'lujunyi', content: '“不过今日确实琐事缠身. 你且先回屋休息吧，明日清晨再来，我定会空出时间. ”（他虽然还是把你打发了，但语气温柔了许多）', background: BG_LU_ROOM, nextId: 'day5_start' },

  'day4_lu_9_fail': { id: 'day4_lu_9_fail', speaker: '卢俊义', characterId: 'lujunyi', content: '（他猛地抬头，眼中闪过一丝愠色，语气冷若冰霜）“诺言？我卢俊义一生行事问心无愧，若因私废公才是真的背信弃义. ”', background: BG_LU_ROOM, nextId: 'day4_lu_10_fail' },
  'day4_lu_10_fail': { id: 'day4_lu_10_fail', speaker: '卢俊义', characterId: 'lujunyi', content: '“出去. 我现在不想听任何大道理. 既然你觉得我不可靠，自便就是. ”（他摆了摆手，示意你离开，书房陷入了尴尬的死寂）', background: BG_LU_ROOM, nextId: 'day5_start' },

  'day4_yan_1': { id: 'day4_yan_1', speaker: '系统', content: '你扑了个空，燕青下山探查官军动向去了。', background: BG_MARKET, nextId: 'day5_start' },
  'day4_luzhishen_branch': { id: 'day4_luzhishen_branch', speaker: '鲁智深', characterId: 'luzhishen', content: '“哈哈！洒家就知道你放不下那竹林. ”', background: BG_BAMBOO, nextId: 'day5_start' },
  'day4_kui_branch': { id: 'day4_kui_branch', speaker: '李逵', characterId: 'likui', content: '“嘿嘿！俺就知道你会选俺！”', background: BG_MOUNTAIN, nextId: 'day5_start' },

  'day5_start': { id: 'day5_start', speaker: '系统', content: '第五天。你感觉到体内的“天罡灵气”稳固了许多。', background: BG_CAMP, nextId: 'ch1_final_node' },
  'ch1_final_node': { id: 'ch1_final_node', speaker: '系统', content: '第一章：天罡初醒 · 完. ', background: BG_CAMP, choices: [
    { text: '进入自由传信互动', nextId: 'free_talk_intro' },
    { text: '重新开始', nextId: 'start' }
  ]},
  'free_talk_intro': { id: 'free_talk_intro', speaker: '系统', content: '现在可以自由传信互动了. ', background: BG_CAMP, nextId: 'free_talk_intro' }
};
