
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
  // --- 第一章：林中初遇 ---
  'start': { id: 'start', speaker: '你', content: '（意识像被卷入了一台失控的碎纸机，五彩斑斓的黑暗在眼前疯狂旋转……）', background: BG_MOUNTAIN, nextId: 'trans_os_2' },
  'trans_os_2': { id: 'trans_os_2', speaker: '你', content: '（最后的记忆是主管那张吐着唾沫星子的脸，还有永远写不完的KPI……）', background: BG_MOUNTAIN, nextId: 'trans_os_3' },
  'trans_os_3': { id: 'trans_os_3', speaker: '你', content: '（渐渐地，耳边的嘈杂消失了，取而代之的是泥土的芬芳，以及一种沉重的呼吸声。）', background: BG_MOUNTAIN, nextId: 'woods_1' },
  'woods_1': { id: 'woods_1', speaker: '你', content: '（猛地睁开眼，首先映入眼帘的是一片遮天蔽日的古怪森林，然后是一张黑得像锅底一样的巨脸。）', background: BG_FOREST, nextId: 'woods_2' },
  'woods_2': { id: 'woods_2', speaker: '你', content: '“哇啊啊啊啊！！鬼啊！！”（你连滚带爬地向后缩去）', background: BG_FOREST, nextId: 'woods_3' },
  'woods_3': { id: 'woods_3', speaker: '黑大汉', content: '“嚷甚么！闭嘴！再嚷俺一斧头劈了你这小后生！”（李逵瞪圆了牛眼，腰间板斧泛着寒光）', background: BG_FOREST, characterId: 'likui', nextId: 'woods_4' },
  'woods_4': { id: 'woods_4', speaker: '{playerName}', content: '“别劈我！这是哪？我是不是加班加疯了产生的幻觉？”', background: BG_FOREST, nextId: 'woods_5' },
  'woods_5': { id: 'woods_5', speaker: '李逵', characterId: 'likui', content: '“甚么班不班的？这里是俺们梁山泊的地界！俺看你这厮穿得古怪，倒长得像个俏文书。”', background: BG_FOREST, nextId: 'woods_6' },
  'woods_6': { id: 'woods_6', speaker: '李逵', characterId: 'likui', content: '“正好，哥哥最近正缺个端茶递水、誊写账目的。你这细身板虽然砍不了人，派点用场倒也行。”', background: BG_FOREST, nextId: 'woods_7' },
  'woods_7': { id: 'woods_7', speaker: '{playerName}', content: '“文书？你是说宋江缺个秘书？我……我不入伙！我还要回去写报告……”', background: BG_FOREST, nextId: 'woods_8' },
  'woods_8': { id: 'woods_8', speaker: '李逵', characterId: 'likui', content: '“啰嗦甚！由不得你！走你！”', background: BG_FOREST, nextId: 'woods_9' },
  'woods_9': { id: 'woods_9', speaker: '系统', content: '李逵像拎小鸡一样把你扛到肩上，不顾你的抗议，大步流星地往山上跑去。', background: BG_FOREST, nextId: 'hall_entry' },

  // --- 聚义厅：对话与公孙胜预言 ---
  'hall_entry': { id: 'hall_entry', speaker: '系统', content: '（你就这样被头朝下地扛进了聚义厅，直到被李逵砰地一声丢在地砖上。）', background: BG_CAMP, nextId: 'hall_os_lu' },
  'hall_os_lu': { id: 'hall_os_lu', speaker: '卢俊义', characterId: 'lujunyi', content: '（内心OS：天降异人？衣着古怪，身无法力波动…是祸是福？且看兄长如何处置。）', background: BG_CAMP, nextId: 'hall_os_yan' },
  'hall_os_yan': { id: 'hall_os_yan', speaker: '燕青', characterId: 'yanqing', content: '（内心OS：哟，从天而降？有趣，这梁山是越来越热闹了。）', background: BG_CAMP, nextId: 'hall_os_lu_da' },
  'hall_os_lu_da': { id: 'hall_os_lu_da', speaker: '鲁智深', characterId: 'luzhishen', content: '（内心OS：嗯？！哪里来的小后生？瞧着细皮嫩肉，可别摔坏了。）', background: BG_CAMP, nextId: 'hall_os_kui' },
  'hall_os_kui': { id: 'hall_os_kui', speaker: '李逵', characterId: 'likui', content: '（内心OS：啊呀！天上掉下个人来！是神仙还是点心？！）', background: BG_CAMP, nextId: 'hall_song_ask' },

  'hall_song_ask': { id: 'hall_song_ask', speaker: '宋江', content: '“你是何人？从何而来？为何突然现于我聚义厅？”', background: BG_CAMP, nextId: 'hall_name_input' },
  'hall_name_input': { id: 'hall_name_input', speaker: '系统', content: '请在这尺素纸上写下你的姓名：', background: BG_CAMP, isNameInput: true, nextId: 'hall_kui_leg' },
  
  'hall_kui_leg': { id: 'hall_kui_leg', speaker: '李逵', characterId: 'likui', content: '“哥哥！问这许多作甚！你看他吓得脸都白了，定是好人！饿不饿？俺那儿有刚烤的羊腿！”', background: BG_CAMP, nextId: 'hall_lu_stop' },
  'hall_lu_stop': { id: 'hall_lu_stop', speaker: '鲁智深', characterId: 'luzhishen', content: '“铁牛休得莽撞！小后生，莫怕，洒家这儿有凳子。”', background: BG_CAMP, nextId: 'hall_yan_greet' },
  'hall_yan_greet': { id: 'hall_yan_greet', speaker: '燕青', characterId: 'yanqing', content: '“小可燕青，见过阁下。观阁下服饰奇异，言谈失措，莫非……并非此世之人？”', background: BG_CAMP, nextId: 'hall_junyi_stern' },
  'hall_junyi_stern': { id: 'hall_junyi_stern', speaker: '卢俊义', characterId: 'lujunyi', content: '“小乙休要妄言。此子来历不明，当有个交代。”', background: BG_CAMP, nextId: 'hall_gongsun_entry' },

  'hall_gongsun_entry': { id: 'hall_gongsun_entry', speaker: '公孙胜', content: '“慢着！”（入云龙公孙胜缓步上前，双目如炬盯着你）“诸位兄弟且慢，此子身上缠绕着一股极为浓烈的‘天罡灵气’。”', background: BG_CAMP, nextId: 'hall_gongsun_reveal' },
  'hall_gongsun_reveal': { id: 'hall_gongsun_reveal', speaker: '公孙胜', content: '“他并非此界凡人，乃是受星辰感召穿越而来。然而异界之身难容星宿之力，百零八日内若无法引星宿之力调和，必将魂飞魄散！”', background: BG_CAMP, nextId: 'hall_reaction_song' },
  'hall_reaction_song': { id: 'hall_reaction_song', speaker: '宋江', content: '“竟有此事？既然是上天送来的缘分，梁山绝无见死不救之理！”', background: BG_CAMP, nextId: 'hall_reaction_all' },
  'hall_reaction_all': { id: 'hall_reaction_all', speaker: '系统', content: '堂下英雄听闻纷纷动容。李逵大吼着要第一个教你劈山，鲁智深也表示愿意护你周全，燕青与卢俊义亦当场表态支持。', background: BG_CAMP, nextId: 'day2_start' },

  // --- 第二天：李逵特训 ---
  'day2_start': { id: 'day2_start', speaker: '系统', content: '第二天清晨。门砰地一声被撞开了，李逵闯了进来。', background: BG_CAVE, nextId: 'day2_kui_naked' },
  'day2_kui_naked': { id: 'day2_kui_naked', speaker: '{playerName}', content: '“哇！李铁牛你进屋不敲门吗！”你还没穿好衣服，手忙脚乱地抓过外褂。', background: BG_CAVE, nextId: 'day2_kui_oblivious' },
  'day2_kui_oblivious': { id: 'day2_kui_oblivious', speaker: '李逵', characterId: 'likui', content: '“敲甚么门！都是汉子……走，俺带你练嗓子去，免得见着官军就被吓尿了。”', background: BG_CAVE, nextId: 'day2_kui_training_start' },
  'day2_kui_training_start': { id: 'day2_kui_training_start', speaker: '系统', content: '（场景切换：渐暗，再亮起时已是林中。）', background: BG_FOREST, nextId: 'day2_kui_吼_1' },
  'day2_kui_吼_1': { id: 'day2_kui_吼_1', speaker: '李逵', characterId: 'likui', content: '“吼出来！气沉丹田，大喊一声——滚！！”', background: BG_FOREST, nextId: 'day2_lu_interrupt' },
  'day2_lu_interrupt': { id: 'day2_lu_interrupt', speaker: '鲁智深', characterId: 'luzhishen', content: '“铁牛休要胡闹！孩子，明日来竹林找洒家，教你禅意。”', background: BG_FOREST, choices: [
    { text: '（坚定地）我想跟铁牛大哥多学学。', nextId: 'day2_choice_stay_kui', affectionBonus: { charId: 'likui', points: 15 } },
    { text: '（礼貌地）好，明天我去竹林找大师。', nextId: 'day2_choice_accept_lu', affectionBonus: { charId: 'luzhishen', points: 15 } }
  ]},

  // 分支：跟李逵继续学 (10页特训)
  'day2_choice_stay_kui': { id: 'day2_choice_stay_kui', speaker: '李逵', characterId: 'likui', content: '“哈哈！够意思！那老和尚只会打坐，闷得死人。还是俺带你练带劲！”', background: BG_FOREST, nextId: 'day2_kui_t_1' },
  'day2_kui_t_1': { id: 'day2_kui_t_1', speaker: '李逵', characterId: 'likui', content: '“来，接着吼！别像个娘们似的。要把肚子里那口恶气全撒出来！”', background: BG_FOREST, nextId: 'day2_kui_t_2' },
  'day2_kui_t_2': { id: 'day2_kui_t_2', speaker: '{playerName}', content: '你深吸一口气，学着他的样子，“哇——呀！！”', background: BG_FOREST, nextId: 'day2_kui_t_3' },
  'day2_kui_t_3': { id: 'day2_kui_t_3', speaker: '李逵', characterId: 'likui', content: '“不对！再大声点！想象那老虎要叼走你的奖金！”（他比划着夸张的手势）', background: BG_FOREST, nextId: 'day2_kui_t_4' },
  'day2_kui_t_4': { id: 'day2_kui_t_4', speaker: '{playerName}', content: '“为了年终奖！！滚！！！”你用尽全身力气咆哮，惊起一片飞鸟。', background: BG_FOREST, nextId: 'day2_kui_t_5' },
  'day2_kui_t_5': { id: 'day2_kui_t_5', speaker: '李逵', characterId: 'likui', content: '“好！就是这股狠劲！走，带你去搬大石头，练练力气！”', background: BG_FOREST, nextId: 'day2_kui_t_6' },
  'day2_kui_t_6': { id: 'day2_kui_t_6', speaker: '系统', content: '你费力地搬着磨盘大的青石，李逵在一旁轻巧地抛接他的板斧，眼神里难得露出一丝关切。', background: BG_FOREST, nextId: 'day2_kui_t_7' },
  'day2_kui_t_7': { id: 'day2_kui_t_7', speaker: '李逵', characterId: 'likui', content: '“娃娃，俺其实觉得你这文弱样也挺好，像个读书人。但梁山乱，你得能护住自己。”', background: BG_FOREST, nextId: 'day2_kui_t_8' },
  'day2_kui_t_8': { id: 'day2_kui_t_8', speaker: '{playerName}', content: '“铁牛大哥，没想到你还会关心人。”', background: BG_FOREST, nextId: 'day2_kui_t_9' },
  'day2_kui_t_9': { id: 'day2_kui_t_9', speaker: '李逵', characterId: 'likui', content: '“呸！谁关心你了！俺是怕你死了，没人给哥哥写账目！”（他涨红了脸，转过头去）', background: BG_FOREST, nextId: 'day2_kui_t_10' },
  'day2_kui_t_10': { id: 'day2_kui_t_10', speaker: '系统', content: '夕阳西下，你们并肩走回营地。李逵偷偷往你手里塞了一块刚烤好的肉饼。', background: BG_BLACK, nextId: 'day3_kui_yiling_1' },

  // --- 第三天：李逵心动剧情 - 沂岭杀四虎 (15页) ---
  'day3_kui_yiling_1': { id: 'day3_kui_yiling_1', speaker: '系统', content: '第三天。天刚蒙蒙亮，李逵就火急火燎地把你从被窝里拽了出来。', background: BG_CAVE, nextId: 'day3_kui_yiling_2' },
  'day3_kui_yiling_2': { id: 'day3_kui_yiling_2', speaker: '李逵', characterId: 'likui', content: '“快走！俺要回沂岭接老娘上山，这路上不平，俺怕俺这粗手笨脚的照顾不好，你心思细，陪俺走一趟！”', background: BG_CAVE, nextId: 'day3_kui_yiling_3' },
  'day3_kui_yiling_3': { id: 'day3_kui_yiling_3', speaker: '系统', content: '你们一路疾行至沂州境内的沂岭。山路崎岖，林木幽深，隐约透着股不安的寂静。', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_4' },
  'day3_kui_yiling_4': { id: 'day3_kui_yiling_4', speaker: '李逵', characterId: 'likui', content: '“娘！俺铁牛回来接您了！”（李逵背着老母，步履轻快。老母眼盲，只是不住地抚摸着他的头）', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_5' },
  'day3_kui_yiling_5': { id: 'day3_kui_yiling_5', speaker: '李母', content: '“铁牛啊，你慢些……这位小友是？”', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_6' },
  'day3_kui_yiling_6': { id: 'day3_kui_yiling_6', speaker: '{playerName}', content: '“老人家，我是李大哥的朋友，叫我{playerName}就行。”', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_7' },
  'day3_kui_yiling_7': { id: 'day3_kui_yiling_7', speaker: '系统', content: '午后时分，老母口渴。李逵让你陪着老母坐在一块青石上，自己拎着朴刀去寻水。', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_8' },
  'day3_kui_yiling_8': { id: 'day3_kui_yiling_8', speaker: '系统', content: '突然，腥风扑面！林中猛地窜出两头斑斓猛虎，直扑惊恐的老母！', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_9' },
  'day3_kui_yiling_9': { id: 'day3_kui_yiling_9', speaker: '{playerName}', content: '“救命！！铁牛大哥！！老虎！！！”你下意识护在老母身前，心脏快要跳出喉咙。', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_10' },
  'day3_kui_yiling_10': { id: 'day3_kui_yiling_10', speaker: '李逵', characterId: 'likui', content: '“畜生敢尔！！！”一声雷鸣般的暴喝从崖下炸响，黑色的人影瞬间而至！', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_11' },
  'day3_kui_yiling_11': { id: 'day3_kui_yiling_11', speaker: '系统', content: '那是你从未见过的李逵。他的双目通红，甚至比猛虎还要狂暴。他手起刀落，瞬间劈开一头大虎的头骨。', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_12' },
  'day3_kui_yiling_12': { id: 'day3_kui_yiling_12', speaker: '系统', content: '草丛里竟还伏着两头幼虎！李逵杀得性起，朴刀翻飞，温热的鲜血溅了一地，染红了他的整张脸。', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_13' },
  'day3_kui_yiling_13': { id: 'day3_kui_yiling_13', speaker: '系统', content: '他在血泊中击毙最后一头猛虎，朴刀深深没入泥土。整座山似乎都被他的杀气震慑，变得死一般寂静。', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_14' },
  'day3_kui_yiling_14': { id: 'day3_kui_yiling_14', speaker: '系统', content: '他喘着粗气回过头看向被吓坏的你，眼神瞬间从野兽变成了做错事的孩子。那种极度的凶狠突然消失，取而代之的是一种手足无措的温柔。', background: BG_MOUNTAIN, nextId: 'day3_kui_yiling_15' },
  'day3_kui_yiling_15': { id: 'day3_kui_yiling_15', speaker: '李逵', characterId: 'likui', content: '他小心翼翼地走到你面前，递过一只还带着体温的虎爪，呐呐道：“娃娃，别怕，有俺在。这虎爪拿着压惊……没伤着吧？”', background: BG_MOUNTAIN, nextId: 'day4_start' },

  // 分支：答应鲁智深 (按用户指令不变)
  'day2_choice_accept_lu': { id: 'day2_choice_accept_lu', speaker: '李逵', characterId: 'likui', content: '“呸！大师抢俺徒弟！说明天就明天，今天还没完呢！”', background: BG_FOREST, nextId: 'day2_kui_cont_1' },
  'day2_kui_cont_1': { id: 'day2_kui_cont_1', speaker: '系统', content: '李逵为了“赢”过鲁智深，接下来半天对你疯狂特训，教你如何像野兽一样感知危险。', background: BG_FOREST, nextId: 'day2_kui_cont_2' },
  'day2_kui_cont_2': { id: 'day2_kui_cont_2', speaker: '李逵', characterId: 'likui', content: '“不错，你这娃儿学得还挺快。明天虽然去那老和尚那，但可别忘了俺教你的！”', background: BG_FOREST, nextId: 'day3_lu_path_start' },

  'day3_lu_path_start': { id: 'day3_lu_path_start', speaker: '系统', content: '第三天。你如约来到后山竹林，鲁智深已等候多时。', background: BG_FOREST, nextId: 'day3_lu_1' },
  'day3_lu_1': { id: 'day3_lu_1', speaker: '鲁智深', characterId: 'luzhishen', content: '“来，随洒家静坐。修行不仅是力，更是心。感受这林间的一草一木。”', background: BG_FOREST, nextId: 'day3_lu_2' },
  'day3_lu_2': { id: 'day3_lu_2', speaker: '鲁智深', characterId: 'luzhishen', content: '“闭上眼。试着引导你体内那些乱窜的‘星气’。别去压它，随它去。”', background: BG_FOREST, nextId: 'day3_lu_3' },
  'day3_lu_3': { id: 'day3_lu_3', speaker: '{playerName}', content: '你屏气凝神，在他的引导下，体内的灼烧感逐渐平复。', background: BG_FOREST, nextId: 'day3_lu_4' },
  'day3_lu_4': { id: 'day3_lu_4', speaker: '鲁智深', characterId: 'luzhishen', content: '“洒家这辈子，最后才明白，真正的强大是‘不动如山’。”', background: BG_FOREST, nextId: 'day3_lu_5' },
  'day3_lu_5': { id: 'day3_lu_5', speaker: '系统', content: '接下来的几个时辰，他耐心地向你展示如何将禅意融入防御。', background: BG_FOREST, nextId: 'day3_lu_15' },
  'day3_lu_15': { id: 'day3_lu_15', speaker: '鲁智深', characterId: 'luzhishen', content: '“好！今日就练到这。肚子在抗议了吧？去伙房吧，那儿刚蒸好了梁山最好吃的白面大馒头！”', background: BG_CAMP, nextId: 'day3_kitchen_1' },

  'day3_kitchen_1': { id: 'day3_kitchen_1', speaker: '系统', content: '梁山后厨。麦香和柴火味扑面而来。', background: BG_CAMP, nextId: 'day3_kitchen_2' },
  'day3_kitchen_2': { id: 'day3_kitchen_2', speaker: '老厨师', content: '“哟！是那位未来的小官人啊！鲁大师刚打过招呼。快，刚出锅的馒头，热乎着呢。”', background: BG_CAMP, nextId: 'day3_kitchen_3' },
  'day3_kitchen_3': { id: 'day3_kitchen_3', speaker: '{playerName}', content: '“谢谢大叔。您在山上待很久了吧？能跟我讲讲李逵和鲁大师吗？”', background: BG_CAMP, nextId: 'day3_kitchen_4' },
  'day3_kitchen_4': { id: 'day3_kitchen_4', speaker: '老厨师', content: '“那黑旋风李逵，看着凶，其实就是个长不大的大孩子，心里藏不住事，对人那是一片赤诚。”', background: BG_CAMP, nextId: 'day3_kitchen_5' },
  'day3_kitchen_5': { id: 'day3_kitchen_5', speaker: '老厨师', content: '“至于鲁大师，那是天上的罗汉下凡，一颗菩萨心肠。他在山上，大伙儿心里都踏实。”', background: BG_CAMP, nextId: 'day3_kitchen_10' },
  'day3_kitchen_10': { id: 'day3_kitchen_10', speaker: '系统', content: '你听着老陶的絮叨，吃着暄软的馒头，心中泛起阵阵暖意。饱餐一顿后，你回到房间。', background: BG_BLACK, nextId: 'day4_start' },

  // --- 第四天：导师正式选择 ---
  'day4_start': { id: 'day4_start', speaker: '系统', content: '第四天。这一日，你需要正式决定跟随哪位英雄开启正式的专项特训。', background: BG_CAMP, nextId: 'day4_choice' },
  'day4_choice': { id: 'day4_choice', speaker: '系统', content: '谁将成为你这段修行之旅的引路人？', background: BG_CAMP, choices: [
    { text: '卢俊义：研习“格物鉴宝”', nextId: 'day4_lu_branch' },
    { text: '燕青：研习“潜伏谍报”', nextId: 'day4_yan_branch' },
    { text: '鲁智深：研习“禅意守护”', nextId: 'day4_luzhishen_branch' },
    { text: '李逵：研习“极致体魄”', nextId: 'day4_kui_branch' }
  ]},

  // 卢俊义 10页分支
  'day4_lu_branch': { id: 'day4_lu_branch', speaker: '系统', content: '你穿过朱红大门，来到了卢员外的府邸。院内陈设考究，却透着股肃穆。', background: BG_CAMP, nextId: 'day4_lu_2' },
  'day4_lu_2': { id: 'day4_lu_2', speaker: '系统', content: '大厅内，卢俊义正坐在堆积如山的账册后，眉头紧锁，手中的朱砂笔迟迟未落。', background: BG_CAMP, nextId: 'day4_lu_3' },
  'day4_lu_3': { id: 'day4_lu_3', speaker: '{playerName}', content: '“卢员外，打扰了。我来履行约定，跟您学艺。”你小心翼翼地开口。', background: BG_CAMP, nextId: 'day4_lu_4' },
  'day4_lu_4': { id: 'day4_lu_4', speaker: '卢俊义', characterId: 'lujunyi', content: '（他连眼皮都没抬，声音冷淡且疲惫）“是你啊。今日公文繁重，treasury 的账目出了些差错。”', background: BG_CAMP, nextId: 'day4_lu_5' },
  'day4_lu_5': { id: 'day4_lu_5', speaker: '卢俊义', characterId: 'lujunyi', content: '“那些军饷调度比戏文复杂得多。我现在没心思教你那些‘格物’之道。”', background: BG_CAMP, nextId: 'day4_lu_6' },
  'day4_lu_6': { id: 'day4_lu_6', speaker: '{playerName}', content: '“那我可以等，或者帮您分担一些……”', background: BG_CAMP, nextId: 'day4_lu_7' },
  'day4_lu_7': { id: 'day4_lu_7', speaker: '卢俊义', characterId: 'lujunyi', content: '“分担？你这未来人懂大宋的钱粮制度？休要添乱。去，把屏风后那本‘通鉴’看了。”', background: BG_CAMP, nextId: 'day4_lu_8' },
  'day4_lu_8': { id: 'day4_lu_8', speaker: '卢俊义', characterId: 'lujunyi', content: '（他再次伏案疾书，完全把你晾在一边）“看完了就自行回去吧，莫要吵闹。”', background: BG_CAMP, nextId: 'day4_lu_choice' },
  'day4_lu_choice': { id: 'day4_lu_choice', speaker: '系统', content: '看着他疲惫的神色，你决定：', background: BG_CAMP, choices: [
    { text: '默默地为他沏一盏温茶放在案头。', nextId: 'day4_lu_success', affectionBonus: { charId: 'lujunyi', points: 10 } },
    { text: '坚持要他现在就教你，说时间不等人。', nextId: 'day4_lu_fail', affectionBonus: { charId: 'lujunyi', points: -10 } }
  ]},
  'day4_lu_success': { id: 'day4_lu_success', speaker: '卢俊义', characterId: 'lujunyi', content: '（他端起茶抿了一口，神色微动）“……茶香清冽。没想到你还有这份心，且退下吧，明日再议。”', background: BG_CAMP, nextId: 'day5_start' },
  'day4_lu_fail': { id: 'day4_lu_fail', speaker: '卢俊义', characterId: 'lujunyi', content: '（他重重放下笔，眼中闪过一丝愠色）“我说了我现在没空！看来你并不懂得什么叫‘克己礼让’。出去！”', background: BG_CAMP, nextId: 'day5_start' },

  // 燕青 扑空分支
  'day4_yan_branch': { id: 'day4_yan_branch', speaker: '系统', content: '你兴冲冲地来到燕青经常流连的酒肆和靶场。', background: BG_MARKET, nextId: 'day4_yan_2' },
  'day4_yan_2': { id: 'day4_yan_2', speaker: '系统', content: '然而四处空空如也。只有风卷起地上的残叶。', background: BG_MARKET, nextId: 'day4_yan_3' },
  'day4_yan_3': { id: 'day4_yan_3', speaker: '小厮', content: '“官人找燕小乙哥？不凑巧，他今早受了宋江哥哥密令，下山探查官军动向去了，不知何时归。”', background: BG_MARKET, nextId: 'day4_yan_4' },
  'day4_yan_4': { id: 'day4_yan_4', speaker: '{playerName}', content: '你扑了个空，心里莫名有些空落落的。看来今天只能自己修行了。', background: BG_MARKET, nextId: 'day5_start' },

  'day4_luzhishen_branch': { id: 'day4_luzhishen_branch', speaker: '鲁智深', characterId: 'luzhishen', content: '“哈哈！洒家就知道你放不下那竹林。”', background: BG_FOREST, nextId: 'day5_start' },
  'day4_kui_branch': { id: 'day4_kui_branch', speaker: '李逵', characterId: 'likui', content: '“嘿嘿！俺就知道你会选俺！”', background: BG_MOUNTAIN, nextId: 'day5_start' },

  'day5_start': { id: 'day5_start', speaker: '系统', content: '第五天。你感觉到体内的“天罡灵气”稳固了许多。', background: BG_CAMP, nextId: 'ch1_final_node' },
  'ch1_final_node': { id: 'ch1_final_node', speaker: '系统', content: '第一章：天罡初醒 · 完。', background: BG_CAMP, nextId: 'free_talk_intro' },
  'free_talk_intro': { id: 'free_talk_intro', speaker: '系统', content: '现在可以自由传信互动了。（点击“名册”查看英雄状态）', background: BG_CAMP, nextId: 'free_talk_intro' }
};
