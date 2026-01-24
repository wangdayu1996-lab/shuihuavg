
import { Character, StoryNode, DivinationBuff } from './types';

// --- 资源常量 ---
const LIKUI_PNG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%9D%8E%E9%80%B5png.png?raw=true"; 
const LIKUI_JPG = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E6%9D%8E%E9%80%B5.jpg?raw=true";
const LUZHISHEN_IMAGE = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E9%B2%81%E6%99%BA%E6%B7%B1%E5%AF%B9%E8%AF%9D.jpg?raw=true";
const LUJUNYI_IMAGE = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/lujunyiduihua.jpg?raw=true";
const YANQING_IMAGE = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E7%87%95%E9%9D%92lihui.jpg?raw=true";

const BG_MOUNTAIN = "https://images.unsplash.com/photo-1505506005708-3058a94639e7?auto=format&fit=crop&q=80&w=2000";
const BG_CAMP = "https://github.com/wangdayu1996-lab/mygameasset/blob/main/%E8%81%9A%E4%B9%89%E5%8E%85.png?raw=true";
const BG_FOREST = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000";
const BG_MARKET = "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=2000";
const BG_CAVE = "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000";
const BG_BLACK = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

export const DIVINATION_BUFFS: DivinationBuff[] = [
  { id: 'tianxi', name: '上上签 · 天喜星动', description: '鸿运当头！今日传信互动好感额外+5。', effectType: 'affection', icon: '🏮' },
  { id: 'yima', name: '中签 · 驿马星驰', description: '偶遇英雄的几率提升。', effectType: 'speed', icon: '🐎' },
  { id: 'wuyun', name: '下签 · 乌云盖顶', description: '传信鸽子可能会迷路。', effectType: 'funny', icon: '☁️' },
  { id: 'taohua', name: '桃花煞', description: '修罗场触发几率大幅提升！', effectType: 'random', icon: '🌸' }
];

export const CHARACTERS: Character[] = [
  { id: 'lujunyi', name: '卢俊义', title: '玉麒麟', description: '河北首富，懂生活更懂你。', avatar: LUJUNYI_IMAGE, portrait: LUJUNYI_IMAGE, sprite: LUJUNYI_IMAGE, personality: '优雅、严谨、深情', affection: 0, interactionCount: 0, difficulty: 3, archetype: '导师', heartbeatEvents: [] },
  { id: 'yanqing', name: '燕青', title: '浪子', description: '梁山第一特工，情趣大师。', avatar: YANQING_IMAGE, portrait: YANQING_IMAGE, sprite: YANQING_IMAGE, personality: '狡黠、浪漫', affection: 0, interactionCount: 0, difficulty: 4, archetype: '竹马', heartbeatEvents: [] },
  { id: 'luzhishen', name: '鲁智深', title: '花和尚', description: '大智若愚，你的随身保镖。', avatar: LUZHISHEN_IMAGE, portrait: LUZHISHEN_IMAGE, sprite: LUZHISHEN_IMAGE, personality: '豪爽、赤诚', affection: 0, interactionCount: 0, difficulty: 2, archetype: '守护者', heartbeatEvents: [] },
  { id: 'likui', name: '李逵', title: '黑旋风', description: '直球之王，单纯得让人头疼。', avatar: LIKUI_PNG, portrait: LIKUI_JPG, sprite: LIKUI_PNG, personality: '狂放、憨直', affection: 0, interactionCount: 0, difficulty: 1, archetype: '犬系', heartbeatEvents: [] }
];

export const STORY_DATA: Record<string, StoryNode> = {
  'start': { id: 'start', speaker: '你', content: '（意识像被卷入了一台失控的碎纸机，五彩斑斓的黑暗在眼前疯狂旋转……）', background: BG_MOUNTAIN, nextId: 'trans_os_2' },
  'trans_os_2': { id: 'trans_os_2', speaker: '你', content: '（最后的记忆是主管那张吐着唾沫星子的脸，还有永远写不完的KPI……如果这就是死亡，请让我死在没有PPT的地方。）', background: BG_MOUNTAIN, nextId: 'trans_os_3' },
  'trans_os_3': { id: 'trans_os_3', speaker: '你', content: '（渐渐地，耳边的嘈杂消失了，取而代之的是泥土的芬芳，以及一种……沉重的、压迫感极强的呼吸声。）', background: BG_MOUNTAIN, nextId: 'woods_1' },

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

  'hall_entry': { id: 'hall_entry', speaker: '系统', content: '（你就这样被头朝下地扛进了聚义厅，直到被李逵砰地一声丢在冰冷的地砖上。）', background: BG_CAMP, nextId: 'ch1_os_start' },
  
  'ch1_os_start': { id: 'ch1_os_start', speaker: '卢俊义', characterId: 'lujunyi', content: '（内心OS：天降异人？衣着古怪，身无法力波动…是祸是福？且看兄长如何处置。倒是这惊慌模样，不似作伪。）', background: BG_CAMP, nextId: 'ch1_os_yanqing' },
  'ch1_os_yanqing': { id: 'ch1_os_yanqing', speaker: '燕青', characterId: 'yanqing', content: '（内心OS：哟，从天而降？这出场比戏文还精彩。衣裳料子从未见过，有趣，这梁山是越来越热闹了。）', background: BG_CAMP, nextId: 'ch1_os_luzhishen' },
  'ch1_os_luzhishen': { id: 'ch1_os_luzhishen', speaker: '鲁智深', characterId: 'luzhishen', content: '（内心OS：嗯？！哪里来的小女娃？莫不过被甚么妖风刮来的？瞧着细皮嫩肉，可别摔坏了。）', background: BG_CAMP, nextId: 'ch1_os_likui' },
  'ch1_os_likui': { id: 'ch1_os_likui', speaker: '李逵', characterId: 'likui', content: '（内心OS：啊呀！天上掉下个人来！这身子骨瘦弱，倒是得让伙房多加两个馒头。）', background: BG_CAMP, nextId: 'ch1_songjiang_ask' },

  'ch1_songjiang_ask': { id: 'ch1_songjiang_ask', speaker: '宋江', content: '“你是何人？从何而来？为何突然现于我聚义厅？你叫什么名字？”', background: BG_CAMP, nextId: 'ch1_name_input' },
  'ch1_name_input': { id: 'ch1_name_input', speaker: '系统', content: '请在这尺素纸上写下你的姓名：', background: BG_CAMP, isNameInput: true, nextId: 'ch1_player_stutter' },
  'ch1_player_stutter': { id: 'ch1_player_stutter', speaker: '{playerName}', content: '“我叫{playerName}……我来自二十一世纪……我刚还在吃年会大餐……我是穿越来的！”', background: BG_CAMP, nextId: 'ch1_likui_interject' },
  
  'ch1_likui_interject': { id: 'ch1_likui_interject', speaker: '李逵', characterId: 'likui', content: '“哥哥！管他甚么未来过去的，这娃儿掉在俺们梁山，就是俺们的缘分！谁敢动他，先问过俺这一对斧头！”', background: BG_CAMP, nextId: 'ch1_luzhishen_stop_kui' },
  'ch1_luzhishen_stop_kui': { id: 'ch1_luzhishen_stop_kui', speaker: '鲁智深', characterId: 'luzhishen', content: '“铁牛休得莽撞！你这黑厮，没见人家惊魂未定？你那油手莫脏了人家衣裳！”（转头对你）“小后生，莫怕，洒家这儿有凳子。”', background: BG_CAMP, nextId: 'ch1_yanqing_glide' },
  'ch1_yanqing_glide': { id: 'ch1_yanqing_glide', speaker: '燕青', characterId: 'yanqing', content: '“鲁大师，您那冷板凳怕是也会吓着贵客。”（微微欠身）“小可燕青，见过{playerName}。阁下服饰奇异，莫非……并非此世之人？”', background: BG_CAMP, nextId: 'ch1_lujunyi_stern' },
  'ch1_lujunyi_stern': { id: 'ch1_lujunyi_stern', speaker: '卢俊义', characterId: 'lujunyi', content: '“小乙，休要妄言。此子来历不明，且看他如何证明身份。”', background: BG_CAMP, nextId: 'ch1_future_reveals' },

  'ch1_future_reveals': { id: 'ch1_future_reveals', speaker: '{playerName}', content: '“我真的来自未来……我知道你们所有人，玉麒麟卢员外、浪子燕青、花和尚鲁大师……”', background: BG_CAMP, nextId: 'ch1_end_summary' },
  'ch1_end_summary': { id: 'ch1_end_summary', speaker: '系统', content: '就这样，你稀里糊涂地在梁山泊落了脚。而你的‘梁山特训’与‘续命之旅’，才刚刚开始……', background: BG_CAMP, nextId: 'day2_start' },

  'day2_start': { id: 'day2_start', speaker: '系统', content: '第二天清晨，你正费劲地研究着那套复杂的宋代内衫……', background: BG_CAVE, nextId: 'day2_kui_barge' },
  'day2_kui_barge': { id: 'day2_kui_barge', speaker: '李逵', characterId: 'likui', content: '“小文书！快起！俺带你去练练！别磨蹭，梁山可不养懒汉！”', background: BG_CAVE, nextId: 'day2_training_1' },
  'day2_training_1': { id: 'day2_training_1', speaker: '李逵', characterId: 'likui', content: '“听好了！要想着有人抢了你的最后一块羊腿，气沉丹田，大喊一声——滚！！”', background: BG_FOREST, nextId: 'day2_lu_encounter' },
  'day2_lu_encounter': { id: 'day2_lu_encounter', speaker: '鲁智深', characterId: 'luzhishen', content: '“铁牛！你教这孩子嗓门有甚用？吓唬野猪呢？”', background: BG_FOREST, nextId: 'day2_lu_invite' },
  'day2_lu_invite': { id: 'day2_lu_invite', speaker: '鲁智深', characterId: 'luzhishen', content: '“孩子，明日来竹林找洒家。洒家教你‘禅意感知’，比这黑厮的破锣嗓子雅致多了。”', background: BG_FOREST, choices: [
    { text: '（坚定地）我还是想跟铁牛大哥多学学。', nextId: 'day2_stay_kui', affectionBonus: { charId: 'likui', points: 15 } },
    { text: '（礼貌地）好，明天我去竹林拜访大师。', nextId: 'day2_accept_lu', affectionBonus: { charId: 'luzhishen', points: 15 } }
  ]},

  // --- 分支：答应鲁智深后的李逵赌气特训（10页） ---
  'day2_accept_lu': { id: 'day2_accept_lu', speaker: '鲁智深', characterId: 'luzhishen', content: '“哈哈，爽快！那洒家明天就在后山竹林备好清茶，等候。铁牛，你那嗓门收收，莫要惊了孩子。”', background: BG_FOREST, nextId: 'day2_kui_pout' },
  'day2_kui_pout': { id: 'day2_kui_pout', speaker: '李逵', characterId: 'likui', content: '（瞪圆了眼，嘴巴撇得老高，把板斧往地上一跺）“呸！大师！你这清茶淡水的，能顶甚么用？俺家小文书还没出师呢，不许走！”', background: BG_FOREST, nextId: 'day2_kui_pout_2' },
  'day2_kui_pout_2': { id: 'day2_kui_pout_2', speaker: '李逵', characterId: 'likui', content: '（不由分说，一把拎起你的后领）“走！明天归明天，今天还没完！俺非得在日落前教你点真本事！”', background: BG_FOREST, nextId: 'day2_kui_stubborn_01' },
  'day2_kui_stubborn_01': { id: 'day2_kui_stubborn_01', speaker: '系统', content: '李逵拖着你一路狂奔，来到了后山一处悬崖边。', background: BG_MOUNTAIN, nextId: 'day2_kui_stubborn_02' },
  'day2_kui_stubborn_02': { id: 'day2_kui_stubborn_02', speaker: '李逵', characterId: 'likui', content: '“站这儿！看着那云海！给俺对着群山大声喊，把你心里那点腌臜气都喊出来！”', background: BG_MOUNTAIN, nextId: 'day2_kui_stubborn_03' },
  'day2_kui_stubborn_03': { id: 'day2_kui_stubborn_03', speaker: '{playerName}', content: '“啊……啊！！！”你像个疯子一样对着空旷的山谷大吼，胸口的闷气确实散了许多。', background: BG_MOUNTAIN, nextId: 'day2_kui_stubborn_04' },
  'day2_kui_stubborn_04': { id: 'day2_kui_stubborn_04', speaker: '李逵', characterId: 'likui', content: '“好！这才有梁山好汉的样子！看俺这招——旋风劈！”', background: BG_MOUNTAIN, nextId: 'day2_kui_stubborn_05' },
  'day2_kui_stubborn_05': { id: 'day2_kui_stubborn_05', speaker: '系统', content: '他在你面前舞起双斧，狂风卷起漫天红叶，画面既暴力又有一种奇特的壮美。', background: BG_MOUNTAIN, nextId: 'day2_kui_stubborn_06' },
  'day2_kui_stubborn_06': { id: 'day2_kui_stubborn_06', speaker: '李逵', characterId: 'likui', content: '（满头大汗）“呼……瞧见没？这才是男人该练的！那老和尚只会教你打坐，那是木头才干的事！”', background: BG_MOUNTAIN, nextId: 'day2_kui_stubborn_07' },
  'day2_kui_stubborn_07': { id: 'day2_kui_stubborn_07', speaker: '{playerName}', content: '你看着他认真的侧脸，突然觉得这黑大汉其实挺可爱的。', background: BG_MOUNTAIN, nextId: 'day2_kui_stubborn_08' },
  'day2_kui_stubborn_08': { id: 'day2_kui_stubborn_08', speaker: '李逵', characterId: 'likui', content: '“拿去！这是炊事营刚煮的卤肉，趁热吃了。补补身子，明天别在那老和尚面前丢了俺的人！”', background: BG_MOUNTAIN, nextId: 'day2_kui_stubborn_09' },
  'day2_kui_stubborn_09': { id: 'day2_kui_stubborn_09', speaker: '{playerName}', content: '你接过油纸包，心中泛起一丝暖意。', background: BG_MOUNTAIN, nextId: 'day2_kui_stubborn_10' },
  'day2_kui_stubborn_10': { id: 'day2_kui_stubborn_10', speaker: '系统', content: '夕阳西下，你们并排坐在岩石上吃肉。李逵的特训虽然野蛮，却让你感到一种前所未有的自由。', background: BG_BLACK, nextId: 'day3_lu_lesson_01' },

  // --- 第三日：鲁智深竹林特训（20页深度剧情） ---
  'day3_lu_lesson_01': { id: 'day3_lu_lesson_01', speaker: '系统', content: '第三天。清晨的雾气还在竹林间缭绕，你穿过幽静的小径，来到了约定地点。', background: BG_FOREST, nextId: 'day3_lu_lesson_02' },
  'day3_lu_lesson_02': { id: 'day3_lu_lesson_02', speaker: '鲁智深', characterId: 'luzhishen', content: '（正盘腿坐在青石上，手中拨弄着佛珠）“准时，好孩子。喝口这清晨的露茶，静一静昨日那铁牛带给你的燥气。”', background: BG_FOREST, nextId: 'day3_lu_lesson_03' },
  'day3_lu_lesson_03': { id: 'day3_lu_lesson_03', speaker: '{playerName}', content: '你接过茶杯，一股清冽的气息沁人心脾。“谢谢大师。”', background: BG_FOREST, nextId: 'day3_lu_lesson_04' },
  'day3_lu_lesson_04': { id: 'day3_lu_lesson_04', speaker: '鲁智深', characterId: 'luzhishen', content: '“禅，不是坐死，而是活。去听那竹叶落地的声音，去感受这林间的风。”', background: BG_FOREST, nextId: 'day3_lu_lesson_05' },
  'day3_lu_lesson_05': { id: 'day3_lu_lesson_05', speaker: '鲁智深', characterId: 'luzhishen', content: '“闭上眼。试着引导你体内那些乱窜的‘星气’。别去压它，随它去，直到它们像这流水一样顺滑。”', background: BG_FOREST, nextId: 'day3_lu_lesson_06' },
  'day3_lu_lesson_06': { id: 'day3_lu_lesson_06', speaker: '{playerName}', content: '你屏气凝神，在他的引导下，体内的灼烧感逐渐平复。', background: BG_FOREST, nextId: 'day3_lu_lesson_07' },
  'day3_lu_lesson_07': { id: 'day3_lu_lesson_07', speaker: '鲁智深', characterId: 'luzhishen', content: '“洒家这辈子，杀过人，救过火，最后才明白，真正的强大是‘不动如山’。哪怕天塌了，心也要稳。”', background: BG_FOREST, nextId: 'day3_lu_lesson_08' },
  'day3_lu_lesson_08': { id: 'day3_lu_lesson_08', speaker: '鲁智深', characterId: 'luzhishen', content: '“来，随洒家站桩。身如竹，根植地。这便是‘禅盾’的入门。”', background: BG_FOREST, nextId: 'day3_lu_lesson_09' },
  'day3_lu_lesson_09': { id: 'day3_lu_lesson_09', speaker: '系统', content: '他厚实的手掌轻轻纠正你的姿势。那种厚重如山岳的安全感再次包围了你。', background: BG_FOREST, nextId: 'day3_lu_lesson_10' },
  'day3_lu_lesson_10': { id: 'day3_lu_lesson_10', speaker: '鲁智深', characterId: 'luzhishen', content: '“好。保持这个姿势。洒家给你讲个关于‘放下’的故事。”', background: BG_FOREST, nextId: 'day3_lu_lesson_11' },
  'day3_lu_lesson_11': { id: 'day3_lu_lesson_11', speaker: '系统', content: '鲁智深讲述着他在五台山、在相国寺的往事。那些豪情万丈的杀戮背后，竟都藏着一份悲天悯人的慈悲。', background: BG_FOREST, nextId: 'day3_lu_lesson_12' },
  'day3_lu_lesson_12': { id: 'day3_lu_lesson_12', speaker: '{playerName}', content: '“大师……您是为了守护才战斗的吗？”', background: BG_FOREST, nextId: 'day3_lu_lesson_13' },
  'day3_lu_lesson_13': { id: 'day3_lu_lesson_13', speaker: '鲁智深', characterId: 'luzhishen', content: '“呵呵，不然呢？杀人如果是为了杀戮本身，那和畜生有甚分别？”', background: BG_FOREST, nextId: 'day3_lu_lesson_14' },
  'day3_lu_lesson_14': { id: 'day3_lu_lesson_14', speaker: '鲁智深', characterId: 'luzhishen', content: '“你的天命或许不在战场，但你要学会守护你自个儿，和你爱的那几个人。”', background: BG_FOREST, nextId: 'day3_lu_lesson_15' },
  'day3_lu_lesson_15': { id: 'day3_lu_lesson_15', speaker: '系统', content: '阳光穿过竹叶的缝隙，在你脚下跳跃。时光仿佛在这一刻静止。', background: BG_FOREST, nextId: 'day3_lu_lesson_16' },
  'day3_lu_lesson_16': { id: 'day3_lu_lesson_16', speaker: '{playerName}', content: '你感到一种前所未有的空灵。那些对死亡的恐惧、对KPI的焦虑，似乎都在这竹林的寂静中消散了。', background: BG_FOREST, nextId: 'day3_lu_lesson_17' },
  'day3_lu_lesson_17': { id: 'day3_lu_lesson_17', speaker: '鲁智深', characterId: 'luzhishen', content: '“收功吧。今日的灵气引导非常顺利。”', background: BG_FOREST, nextId: 'day3_lu_lesson_18' },
  'day3_lu_lesson_18': { id: 'day3_lu_lesson_18', speaker: '鲁智深', characterId: 'luzhishen', content: '“瞧你这细胳膊细腿，竟然站了一个时辰。洒家很欣慰。”（他开怀大笑）', background: BG_FOREST, nextId: 'day3_lu_lesson_19' },
  'day3_lu_lesson_19': { id: 'day3_lu_lesson_19', speaker: '{playerName}', content: '“我也觉得状态好了很多。肚子……好像也在抗议了。”', background: BG_FOREST, nextId: 'day3_lu_lesson_20' },
  'day3_lu_lesson_20': { id: 'day3_lu_lesson_20', speaker: '鲁智深', characterId: 'luzhishen', content: '“走！洒家带你去伙房。那儿刚蒸好了梁山最好吃的白面大馒头！”', background: BG_CAMP, nextId: 'day3_kitchen_01' },

  // --- 伙房吃馒头情节 ---
  'day3_kitchen_01': { id: 'day3_kitchen_01', speaker: '系统', content: '梁山伙房。这里充满了麦香和柴火的气息。', background: BG_CAMP, nextId: 'day3_kitchen_02' },
  'day3_kitchen_02': { id: 'day3_kitchen_02', speaker: '老厨师', content: '“哟！鲁大师来了！快快，这位就是那‘异界来客’吧？快尝尝俺老陶的手艺！”', background: BG_CAMP, nextId: 'day3_kitchen_03' },
  'day3_kitchen_03': { id: 'day3_kitchen_03', speaker: '{playerName}', content: '你咬下一口白胖的馒头，香气四溢。', background: BG_CAMP, nextId: 'day3_kitchen_04' },
  'day3_kitchen_04': { id: 'day3_kitchen_04', speaker: '老厨师', content: '（压低声音）“小官人，鲁大师和铁牛李逵虽然看着凶，其实都是顶好的热心肠。你在山上，他们定会护着你。”', background: BG_CAMP, nextId: 'day3_kitchen_05' },
  'day3_kitchen_05': { id: 'day3_kitchen_05', speaker: '{playerName}', content: '你听着老陶的絮叨，心中对这些英雄好汉有了更深的理解。', background: BG_CAMP, nextId: 'day3_kitchen_10' },
  'day3_kitchen_10': { id: 'day3_kitchen_10', speaker: '系统', content: '饱餐一顿后，你回到房间。明日，将是更正式的抉择之日。', background: BG_BLACK, nextId: 'day4_start' },

  'day4_start': { id: 'day4_start', speaker: '系统', content: '第四天。清晨的钟声响起，这一日，你需要决定跟随哪位英雄开启正式的专项特训。', background: BG_CAMP, nextId: 'day4_choice' },
  'day4_choice': { id: 'day4_choice', speaker: '系统', content: '谁将成为你这段修行之旅的引路人？', background: BG_CAMP, choices: [
    { text: '卢俊义：研习“格物鉴宝”与上位威压', nextId: 'day4_lu_branch', affectionBonus: { charId: 'lujunyi', points: 15 } },
    { text: '燕青：研习“潜伏谍报”与百乐调和', nextId: 'day4_yan_branch', affectionBonus: { charId: 'yanqing', points: 15 } },
    { text: '鲁智深：研习“禅意与守护”与绝对防御', nextId: 'day4_luzhishen_branch', affectionBonus: { charId: 'luzhishen', points: 15 } },
    { text: '李逵：研习“野兽本能”与极致体魄', nextId: 'day4_kui_branch', affectionBonus: { charId: 'likui', points: 15 } }
  ]},

  'day4_lu_branch': { id: 'day4_lu_branch', speaker: '卢俊义', characterId: 'lujunyi', content: '“俊义在此恭候多时。请坐。”', background: BG_CAMP, nextId: 'day5_start' },
  'day4_yan_branch': { id: 'day4_yan_branch', speaker: '燕青', characterId: 'yanqing', content: '“选我么？果然是明智的选择。”', background: BG_MARKET, nextId: 'day5_start' },
  'day4_luzhishen_branch': { id: 'day4_luzhishen_branch', speaker: '鲁智深', characterId: 'luzhishen', content: '“哈哈！洒家就知道你放不下那竹林。”', background: BG_FOREST, nextId: 'day5_start' },
  'day4_kui_branch': { id: 'day4_kui_branch', speaker: '李逵', characterId: 'likui', content: '“嘿嘿！小文书，俺就知道你会选俺！”', background: BG_MOUNTAIN, nextId: 'day5_start' },

  'day5_start': { id: 'day5_start', speaker: '系统', content: '第五天。经过初期的修行，你感觉到体内的“天罡灵气”稳固了许多。', background: BG_CAMP, nextId: 'ch1_final_node' },
  'ch1_final_node': { id: 'ch1_final_node', speaker: '系统', content: '第一章：天罡初醒 · 完。', background: BG_CAMP, nextId: 'free_talk_intro' },
  'free_talk_intro': { id: 'free_talk_intro', speaker: '系统', content: '现在可以自由传信互动了。', background: BG_CAMP, nextId: 'free_talk_intro' },
  'day2_stay_kui': { id: 'day2_stay_kui', speaker: '李逵', characterId: 'likui', content: '“哈哈！够意思！俺带你去练练真本事！”', background: BG_FOREST, nextId: 'day2_kui_stubborn_01' }
};
