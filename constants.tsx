
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
const BG_BLACK = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

export const DIVINATION_BUFFS: DivinationBuff[] = [
  { id: 'tianxi', name: '上上签 · 天喜星动', description: '鸿运当头！今日传信互动好感额外+5。', effectType: 'affection', icon: '🏮' },
  { id: 'yima', name: '中签 · 驿马星驰', description: '偶遇英雄的几率提升。', effectType: 'speed', icon: '🐎' },
  { id: 'wuyun', name: '下签 · 乌云盖顶', description: '传信鸽子可能会迷路。', effectType: 'funny', icon: '☁️' },
  { id: 'taohua', name: '桃花煞', description: '修罗场触发几率大幅提升！', effectType: 'random', icon: '🌸' }
];

export const CHARACTERS: Character[] = [
  { id: 'lujunyi', name: '卢俊义', title: '玉麒麟', description: '河北首富，懂生活更懂你。', avatar: LUJUNYI_IMAGE, portrait: LUJUNYI_IMAGE, personality: '优雅、严谨、深情', affection: 0, interactionCount: 0, difficulty: 3, archetype: '导师', heartbeatEvents: [] },
  { id: 'yanqing', name: '燕青', title: '浪子', description: '梁山第一特工，情趣大师。', avatar: YANQING_IMAGE, portrait: YANQING_IMAGE, personality: '狡黠、浪漫', affection: 0, interactionCount: 0, difficulty: 4, archetype: '竹马', heartbeatEvents: [] },
  { id: 'luzhishen', name: '鲁智深', title: '花和响', description: '大智若愚，你的随身保镖。', avatar: LUZHISHEN_IMAGE, portrait: LUZHISHEN_IMAGE, personality: '豪爽、赤诚', affection: 0, interactionCount: 0, difficulty: 2, archetype: '守护者', heartbeatEvents: [] },
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
  'ch1_os_likui': { id: 'ch1_os_likui', speaker: '李逵', characterId: 'likui', content: '（内心OS：啊呀！天上掉下个人来！是神仙还是点心？！）', background: BG_CAMP, nextId: 'ch1_songjiang_ask' },

  'ch1_songjiang_ask': { id: 'ch1_songjiang_ask', speaker: '宋江', content: '“你是何人？从何而来？为何突然现于我聚义厅？你叫什么名字？”', background: BG_CAMP, nextId: 'ch1_name_input' },
  'ch1_name_input': { id: 'ch1_name_input', speaker: '系统', content: '请在这尺素纸上写下你的姓名：', background: BG_CAMP, isNameInput: true, nextId: 'ch1_player_stutter' },
  'ch1_player_stutter': { id: 'ch1_player_stutter', speaker: '{playerName}', content: '“我叫{playerName}……我来自二十一世纪……我刚还在吃年会大餐……我是穿越来的！”', background: BG_CAMP, nextId: 'ch1_likui_interject' },
  
  'ch1_likui_interject': { id: 'ch1_likui_interject', speaker: '李逵', characterId: 'likui', content: '“哥哥！问这许多作甚！你看他/她吓得脸都白了，定是好人！饿不饿？俺那儿有刚烤的羊腿！”', background: BG_CAMP, nextId: 'ch1_luzhishen_stop_kui' },
  'ch1_luzhishen_stop_kui': { id: 'ch1_luzhishen_stop_kui', speaker: '鲁智深', characterId: 'luzhishen', content: '“铁牛休得莽撞！你这黑厮，没见人家惊魂未定？你那油手莫脏了人家衣裳！”（转头对你）“小后生，莫怕，洒家这儿有凳子。”', background: BG_CAMP, nextId: 'ch1_yanqing_glide' },
  'ch1_yanqing_glide': { id: 'ch1_yanqing_glide', speaker: '燕青', characterId: 'yanqing', content: '“鲁大师，您那冷板凳怕是也会吓着贵客。”（微微欠身）“小可燕青，见过{playerName}姑娘。阁下服饰奇异，莫非……并非此世之人？”', background: BG_CAMP, nextId: 'ch1_lujunyi_stern' },
  'ch1_lujunyi_stern': { id: 'ch1_lujunyi_stern', speaker: '卢俊义', characterId: 'lujunyi', content: '“小乙，休要妄言。此子来历不明，且看他如何证明身份。”', background: BG_CAMP, nextId: 'ch1_future_reveals' },

  'ch1_future_reveals': { id: 'ch1_future_reveals', speaker: '{playerName}', content: '“我真的来自未来……我知道你们所有人，玉麒麟卢员外、浪子燕青、花和尚鲁大师……”', background: BG_CAMP, nextId: 'ch1_kui_future' },
  'ch1_kui_future': { id: 'ch1_kui_future', speaker: '李逵', characterId: 'likui', content: '“未来？是明天的意思不？那你知不知道明天俺和武松哥哥谁喝酒赢？”', background: BG_CAMP, nextId: 'ch1_lu_future' },
  'ch1_lu_future': { id: 'ch1_lu_future', speaker: '鲁智深', characterId: 'luzhishen', content: '“未来人都这般文弱么？洒家瞧你这身板，怕是连俺的禅杖都拎不动。”', background: BG_CAMP, nextId: 'ch1_yan_future' },
  'ch1_yan_future': { id: 'ch1_yan_future', speaker: '燕青', characterId: 'yanqing', content: '“有趣。若真来自未来，可知我燕青结局？”（圆场）“玩笑。眼下最重要的，是这位客官带了什么‘天命’。”', background: BG_CAMP, nextId: 'ch1_lujunyi_verdict' },
  'ch1_lujunyi_verdict': { id: 'ch1_lujunyi_verdict', speaker: '卢俊义', characterId: 'lujunyi', content: '“子不语怪力乱神。俊义之见，当暂且安置，严加看管。再作定夺。”', background: BG_CAMP, nextId: 'ch1_luzhishen_oppose' },
  'ch1_luzhishen_oppose': { id: 'ch1_luzhishen_oppose', speaker: '鲁智深', characterId: 'luzhishen', content: '“卢员外忒也小心！俺看不如先让公孙道长瞧瞧，是不是中了什么邪术。”', background: BG_CAMP, nextId: 'ch1_likui_protect' },
  'ch1_likui_protect': { id: 'ch1_likui_protect', speaker: '李逵', characterId: 'likui', content: '“对对对！肯定是神仙！管他是未来还是过去，到了梁山就是咱自家兄弟。以后俺李逵罩着你！”', background: BG_CAMP, nextId: 'ch1_gongsun_appears' },

  'ch1_gongsun_appears': { id: 'ch1_gongsun_appears', speaker: '系统', content: '（伴随着一阵鹤鸣，一位背负古剑、手挽拂尘的道士缓缓步入大厅。众人纷纷禁声，尊称其为“公孙道长”。）', background: BG_CAMP, nextId: 'ch1_gongsun_os' },
  'ch1_gongsun_os': { id: 'ch1_gongsun_os', speaker: '公孙胜', content: '（内心OS：紫微星移，异客天降。此子周身竟缠绕着丝丝缕缕的天罡残影，莫非……是那遁去的一？）', background: BG_CAMP, nextId: 'ch1_gongsun_stare' },
  'ch1_gongsun_stare': { id: 'ch1_gongsun_stare', speaker: '公孙胜', content: '（他走到你面前，一双如炬法眼直欲将你识海看穿，随后发出一声长叹。）', background: BG_CAMP, nextId: 'ch1_gongsun_prophecy_1' },
  'ch1_gongsun_prophecy_1': { id: 'ch1_gongsun_prophecy_1', speaker: '公孙胜', content: '“尔等肉眼凡胎看不见。此子周身盈满‘天罡灵气’，乃是星宿归位的关键催化。然，凡人之躯难承星力……”', background: BG_CAMP, nextId: 'ch1_gongsun_prophecy_2' },
  'ch1_gongsun_prophecy_2': { id: 'ch1_gongsun_prophecy_2', speaker: '公孙胜', content: '“灵气入骨，虽能让你短期内身轻如燕，但也如烈火烹油。若一百零八日内无法引星宿之力调和体内乱息……”', background: BG_CAMP, nextId: 'ch1_gongsun_prophecy_3' },
  'ch1_gongsun_prophecy_3': { id: 'ch1_gongsun_prophecy_3', speaker: '公孙胜', content: '“届时……你将魂飞魄散，消隐于六道之外，连这尘世的一丝痕迹都不会留下。”', background: BG_CAMP, nextId: 'ch1_hero_shock_1' },

  'ch1_hero_shock_1': { id: 'ch1_hero_shock_1', speaker: '李逵', characterId: 'likui', content: '“甚么？！魂飞魄散？！道长你莫要吓唬俺家小文书！一百零八天……那不是连过年都等不到了？！”', background: BG_CAMP, nextId: 'ch1_hero_shock_2' },
  'ch1_hero_shock_2': { id: 'ch1_hero_shock_2', speaker: '鲁智深', characterId: 'luzhishen', content: '“咄！这是什么狗屁天命！洒家平生最恨这些虚头巴脑的死期。{playerName}莫怕，洒家这一把骨头也要护你周全！”', background: BG_CAMP, nextId: 'ch1_hero_shock_3' },
  'ch1_hero_shock_3': { id: 'ch1_hero_shock_3', speaker: '卢俊义', characterId: 'lujunyi', content: '“引星宿之力调和……道长之意，是需我等梁山弟兄与其建立血脉相连的羁绊？（他看向你的目光深邃了几分）看来，确实不能让你随意离开了。”', background: BG_CAMP, nextId: 'ch1_hero_shock_4' },
  'ch1_hero_shock_4': { id: 'ch1_hero_shock_4', speaker: '燕青', characterId: 'yanqing', content: '“一百零八日么……（他把玩着短笛，嘴角笑意收敛，眼神透出一抹认真）在这倒计时结束前，小可定会想尽办法，把{playerName}姑娘留在人间。”', background: BG_CAMP, nextId: 'ch1_yan_whisper' },

  'ch1_yan_whisper': { id: 'ch1_yan_whisper', speaker: '燕青', characterId: 'yanqing', content: '（低声对你说）“瞧瞧，你一来，这聚义厅可比听说书热闹多了。命不久矣的感觉如何？若是怕了，可以先来抱抱我。”', background: BG_CAMP, nextId: 'ch1_end_summary' },
  'ch1_end_summary': { id: 'ch1_end_summary', speaker: '系统', content: '就这样，你稀里糊涂地在梁山泊落了脚。而你的‘梁山特训’与‘续命之旅’，才刚刚开始……', background: BG_CAMP, nextId: 'day2_start' },

  'day2_start': { id: 'day2_start', speaker: '系统', content: '第二天清晨，你正费劲地研究着那套复杂的宋代内衫……', background: BG_CAVE, nextId: 'day2_kui_barge' },
  'day2_kui_barge': { id: 'day2_kui_barge', speaker: '李逵', characterId: 'likui', content: '“小文书！快起！俺带你去……哎呀！妈呀！”（李逵一脚踹开门，正撞见衣冠不整的你）', background: BG_CAVE, nextId: 'day2_player_scream' },
  'day2_player_scream': { id: 'day2_player_scream', speaker: '{playerName}', content: '“李！逵！！出去！！滚出去！！”', background: BG_CAVE, nextId: 'day2_kui_clueless' },
  'day2_kui_clueless': { id: 'day2_kui_clueless', speaker: '李逵', characterId: 'likui', content: '“嘿，害臊甚？俺家那水牛洗澡都不避人。快穿上，俺要教你‘野兽直觉’！”', background: BG_CAVE, nextId: 'day2_player_silent' },
  'day2_player_silent': { id: 'day2_player_silent', speaker: '{playerName}', content: '。。。。真是无语', background: BG_CAVE, nextId: 'day2_transition_black' },
  'day2_transition_black': { id: 'day2_transition_black', speaker: '系统', content: '后山树林', background: BG_BLACK, nextId: 'day2_training_1' },
  'day2_training_1': { id: 'day2_training_1', speaker: '李逵', characterId: 'likui', content: '“听好了！要想着有人抢了你的最后一块羊腿，气沉丹田，大喊一声——滚！！”', background: BG_FOREST, nextId: 'day2_lu_encounter' },
  'day2_lu_encounter': { id: 'day2_lu_encounter', speaker: '鲁智深', characterId: 'luzhishen', content: '“铁牛！你教这孩子嗓门有甚用？吓唬野猪呢？”', background: BG_FOREST, nextId: 'day2_lu_invite' },
  'day2_lu_invite': { id: 'day2_lu_invite', speaker: '鲁智深', characterId: 'luzhishen', content: '“孩子，明日来竹林找洒家。洒家教你‘禅意感知’，比这黑厮的破锣嗓子雅致多了。”', background: BG_FOREST, choices: [
    { text: '（坚定地）我还是想跟铁牛大哥多学学。', nextId: 'day2_stay_kui', affectionBonus: { charId: 'likui', points: 15 } },
    { text: '（礼貌地）好，明天我去竹林拜访大师。', nextId: 'day2_accept_lu', affectionBonus: { charId: 'luzhishen', points: 15 } }
  ]},

  // --- 分支：答应鲁智深后的李逵赌气特训（10页） ---
  'day2_accept_lu': { id: 'day2_accept_lu', speaker: '鲁智深', characterId: 'luzhishen', content: '“哈哈，爽快！那洒家明天就在后山竹林备好清茶，等候{playerName}。铁牛，你那嗓门收收，莫要惊了孩子。”', background: BG_FOREST, nextId: 'day2_kui_pout' },
  'day2_kui_pout': { id: 'day2_kui_pout', speaker: '李逵', characterId: 'likui', content: '（瞪圆了眼，嘴巴撇得老高，把板斧往地上一跺）“呸！秃……大师！你这清茶淡水的，能顶甚么用？俺家小文书还没出师呢，不许走！”', background: BG_FOREST, nextId: 'day2_kui_pout_2' },
  'day2_kui_pout_2': { id: 'day2_kui_pout_2', speaker: '李逵', characterId: 'likui', content: '（不由分说，一把拎起你的后领）“走！明天归明天，今天还没完！俺非得在日落前教你点真本事，免得被那老和尚带坏了！”', background: BG_FOREST, nextId: 'day2_kui_stubborn_01' },
  'day2_kui_stubborn_01': { id: 'day2_kui_stubborn_01', speaker: '系统', content: '你像被一阵黑旋风卷走了一样，李逵拖着你一路狂奔，直到来到一处轰鸣的瀑布潭水前。', background: BG_MOUNTAIN, nextId: 'day2_kui_stubborn_02' },
  'day2_kui_stubborn_02': { id: 'day2_kui_stubborn_02', speaker: '李逵', characterId: 'likui', content: '“站这儿！看着那激流！老道说你命薄，俺看就是因为心气儿不够！给俺对着水流大声喊，把你心里那点PPT、年会甚么的腌臜气都喊出来！”', background: BG_MOUNTAIN, nextId: 'day2_kui_stubborn_03' },
  'day2_kui_stubborn_03': { id: 'day2_kui_stubborn_03', speaker: '{playerName}', content: '“啊……啊！！！”你被他那股倔强劲儿带偏了，对着空旷的山谷歇斯底里地吼叫着。别说，积攒了三年的班味儿似乎真的散了些。', background: BG_MOUNTAIN, nextId: 'day2_kui_stubborn_04' },
  'day2_kui_stubborn_04': { id: 'day2_kui_stubborn_04', speaker: '李逵', characterId: 'likui', content: '“没吃饭吗？！再大声点！要喊得那水流都不敢往下淌！喊得那星宿老儿都得低头瞧瞧你！”', background: BG_MOUNTAIN, nextId: 'day2_kui_stubborn_05' },
  'day2_kui_stubborn_05': { id: 'day2_kui_stubborn_05', speaker: '系统', content: '夕阳渐渐西斜。他在一旁挥舞板斧为你助威，斧风将周围的枯叶卷得漫天飞舞。那画面虽然狂野，却透着一种单纯的守护。', background: BG_MOUNTAIN, nextId: 'day2_kui_stubborn_06' },
  'day2_kui_stubborn_06': { id: 'day2_kui_stubborn_06', speaker: '李逵', characterId: 'likui', content: '（吼累了，他一屁股坐在石头上，从怀里掏出一个还温热的油纸包）“给，俺下午去炊事营偷的野猪肘子。多吃肉，皮才厚，才不容易死。”', background: BG_MOUNTAIN, nextId: 'day2_kui_stubborn_07' },
  'day2_kui_stubborn_07': { id: 'day2_kui_stubborn_07', speaker: '{playerName}', content: '你接过油腻腻的纸包，看着李逵那张黑脸上因为专注而流下的汗水。这家伙，明明是在吃那个“未来”导师的醋。', background: BG_MOUNTAIN, nextId: 'day2_kui_stubborn_08' },
  'day2_kui_stubborn_08': { id: 'day2_kui_stubborn_08', speaker: '李逵', characterId: 'likui', content: '（他突然压低了声音，粗声粗气道）“{playerName}，明天要是那老和尚教得不好，你尽管喊俺。俺老铁牛……俺一直都在。”', background: BG_MOUNTAIN, nextId: 'day2_kui_stubborn_09' },
  'day2_kui_stubborn_09': { id: 'day2_kui_stubborn_09', speaker: '{playerName}', content: '“李大哥，我知道了。谢谢你。”你第一次发现，这尊杀神也有如此细腻的一面。', background: BG_MOUNTAIN, nextId: 'day2_kui_stubborn_10' },
  'day2_kui_stubborn_10': { id: 'day2_kui_stubborn_10', speaker: '系统', content: '李逵哼了一声，大手按在你的头顶揉了揉，把你头发揉得乱七八糟。这一夜，你睡得出奇安稳。', background: BG_BLACK, nextId: 'day3_lu_lesson_01' },

  // --- 第三日：鲁智深竹林特训（20页） ---
  'day3_lu_lesson_01': { id: 'day3_lu_lesson_01', speaker: '系统', content: '第三天。清晨的雾气还未完全散去，你如约来到了后山竹林。这里静谧得只有偶尔的鸟鸣，空气清新怡人。', background: BG_FOREST, nextId: 'day3_lu_lesson_02' },
  'day3_lu_lesson_02': { id: 'day3_lu_lesson_02', speaker: '鲁智深', characterId: 'luzhishen', content: '（鲁智深正坐在一块青石上，手中端着一碗还冒着热气的粗茶）“来了？洒家等候多时了。喝了这碗苦茶，咱们就开始。”', background: BG_FOREST, nextId: 'day3_lu_lesson_03' },
  'day3_lu_lesson_03': { id: 'day3_lu_lesson_03', speaker: '{playerName}', content: '“大师，今天我们要学什么？也要像李大哥那样对着山头吼吗？”', background: BG_FOREST, nextId: 'day3_lu_lesson_04' },
  'day3_lu_lesson_04': { id: 'day3_lu_lesson_04', speaker: '鲁智深', characterId: 'luzhishen', content: '“哈哈哈！吼声那是泄气，洒家教你的是‘聚气’。身如修竹，根植大地，任他狂风暴雨，我自岿然不动。”', background: BG_FOREST, nextId: 'day3_lu_lesson_05' },
  'day3_lu_lesson_05': { id: 'day3_lu_lesson_05', speaker: '鲁智深', characterId: 'luzhishen', content: '“闭上眼。别去听那些杂音，去听你自个儿的心跳。你的‘天罡力’不是野兽，它是你的一部分。”', background: BG_FOREST, nextId: 'day3_lu_lesson_06' },
  'day3_lu_lesson_06': { id: 'day3_lu_lesson_06', speaker: '系统', content: '他在你身后缓缓走动，声音低沉有力，带有一种抚慰人心的魔力。', background: BG_FOREST, nextId: 'day3_lu_lesson_07' },
  'day3_lu_lesson_07': { id: 'day3_lu_lesson_07', speaker: '{playerName}', content: '你渐渐入定。周围的一切仿佛都远去了，只有鲁智深的呼吸声和偶尔掠过竹梢的风声。', background: BG_FOREST, nextId: 'day3_lu_lesson_08' },
  'day3_lu_lesson_08': { id: 'day3_lu_lesson_08', speaker: '鲁智深', characterId: 'luzhishen', content: '“挺胸，垂肩。洒家当年在五台山，看那些老僧坐禅，一看就是一整天。洒家坐不住，就去看那山下的云。”', background: BG_FOREST, nextId: 'day3_lu_lesson_09' },
  'day3_lu_lesson_09': { id: 'day3_lu_lesson_09', speaker: '鲁智深', characterId: 'luzhishen', content: '“云散了又聚，聚了又散。人这辈子，何尝不是这般？{playerName}，你要守住你的‘本心’。”', background: BG_FOREST, nextId: 'day3_lu_lesson_10' },
  'day3_lu_lesson_10': { id: 'day3_lu_lesson_10', speaker: '{playerName}', content: '“大师……本心是什么？”', background: BG_FOREST, nextId: 'day3_lu_lesson_11' },
  'day3_lu_lesson_11': { id: 'day3_lu_lesson_11', speaker: '鲁智深', characterId: 'luzhishen', content: '“就是你临死前最想抓紧的那点东西。洒家最想抓紧的，是这一腔快活，和这些个投缘的兄弟。”', background: BG_FOREST, nextId: 'day3_lu_lesson_12' },
  'day3_lu_lesson_12': { id: 'day3_lu_lesson_12', speaker: '系统', content: '他走到你面前，一掌轻轻按在你的天灵盖。一股温厚的气流瞬间传遍全身，平复了那躁动不安的星宿之力。', background: BG_FOREST, nextId: 'day3_lu_lesson_13' },
  'day3_lu_lesson_13': { id: 'day3_lu_lesson_13', speaker: '鲁智深', characterId: 'luzhishen', content: '“稳住了。以后不管遇到什么恶虎凶神，只要心不乱，你就立于不败之地。”', background: BG_FOREST, nextId: 'day3_lu_lesson_14' },
  'day3_lu_lesson_14': { id: 'day3_lu_lesson_14', speaker: '系统', content: '这一上午，没有任何人的打扰。竹影婆娑，你感受到了来到梁山后从未有过的宁静。', background: BG_FOREST, nextId: 'day3_lu_lesson_15' },
  'day3_lu_lesson_15': { id: 'day3_lu_lesson_15', speaker: '鲁智深', characterId: 'luzhishen', content: '“呵呵，收势吧。洒家瞧你这鼻尖都冒汗了。修行急不得，今日便到这里。”', background: BG_FOREST, nextId: 'day3_lu_lesson_16' },
  'day3_lu_lesson_16': { id: 'day3_lu_lesson_16', speaker: '{playerName}', content: '你睁开眼，只觉神清气爽。“谢谢大师指点！”', background: BG_FOREST, nextId: 'day3_lu_lesson_17' },
  'day3_lu_lesson_17': { id: 'day3_lu_lesson_17', speaker: '鲁智深', characterId: 'luzhishen', content: '“别急着谢。洒家这儿不兴这个。走，到晌午了，伙房该揭锅了，洒家带你去尝尝梁山的馒头。”', background: BG_FOREST, nextId: 'day3_lu_lesson_18' },
  'day3_lu_lesson_18': { id: 'day3_lu_lesson_18', speaker: '系统', content: '他拎起禅杖，迈开大步。你小跑着跟在后面，看着他宽阔的背影，心中倍感踏实。', background: BG_FOREST, nextId: 'day3_lu_lesson_19' },
  'day3_lu_lesson_19': { id: 'day3_lu_lesson_19', speaker: '鲁智深', characterId: 'luzhishen', content: '“记住了，孩子。修行是为了守护，不是为了杀戮。即便杀戮，也是为了更大的守护。”', background: BG_FOREST, nextId: 'day3_lu_lesson_20' },
  'day3_lu_lesson_20': { id: 'day3_lu_lesson_20', speaker: '系统', content: '你们一前一后穿过竹林小径。远处的炊烟已经升起。', background: BG_CAMP, nextId: 'day3_kitchen_01' },

  // --- 新增：伙房情节（与老厨师对话） ---
  'day3_kitchen_01': { id: 'day3_kitchen_01', speaker: '系统', content: '梁山泊大伙房。还没进门，一股浓郁的麦香便扑面而来。', background: BG_CAMP, nextId: 'day3_kitchen_02' },
  'day3_kitchen_02': { id: 'day3_kitchen_02', speaker: '老厨师', content: '“哟！鲁大师来了！快请坐快请坐！这位就是传闻中那位天外来客，{playerName}小官人吧？”', background: BG_CAMP, nextId: 'day3_kitchen_03' },
  'day3_kitchen_03': { id: 'day3_kitchen_03', speaker: '{playerName}', content: '一个白发苍苍、围着满是面粉围裙的老人家笑着从灶台后探出头，递过来两个热腾腾的、比脸还大的白面馒头。', background: BG_CAMP, nextId: 'day3_kitchen_04' },
  'day3_kitchen_04': { id: 'day3_kitchen_04', speaker: '鲁智深', characterId: 'luzhishen', content: '“老陶，给这孩子整碗热粥。这一上午站桩，怕是累坏了。”（鲁智深豪迈地抓起馒头大嚼）', background: BG_CAMP, nextId: 'day3_kitchen_05' },
  'day3_kitchen_05': { id: 'day3_kitchen_05', speaker: '老厨师', content: '“好嘞！小官人，你别看鲁大师平时凶，他可是咱山上心最慈的。上次俺腰疼，还是大师帮俺挑了三天的水呢。”', background: BG_CAMP, nextId: 'day3_kitchen_06' },
  'day3_kitchen_06': { id: 'day3_kitchen_06', speaker: '{playerName}', content: '“真的吗？鲁大师还会帮厨？”你惊讶地看着正努力对付馒头的鲁智深。', background: BG_CAMP, nextId: 'day3_kitchen_07' },
  'day3_kitchen_07': { id: 'day3_kitchen_07', speaker: '老厨师', content: '“那是！还有那个铁牛李逵。那厮虽然嘴臭，每次下山回来，总会给俺这老头子带点外面的新鲜玩意。虽然有时是抢来的……”', background: BG_CAMP, nextId: 'day3_kitchen_08' },
  'day3_kitchen_08': { id: 'day3_kitchen_08', speaker: '老厨师', content: '“他们这些英雄好汉啊，心思简单。谁对他们好，他们就掏心窝子对谁。小官人，你在山上，算是掉进福窝里喽。”', background: BG_CAMP, nextId: 'day3_kitchen_09' },
  'day3_kitchen_09': { id: 'day3_kitchen_09', speaker: '{playerName}', content: '听着老人的碎碎念，你心中对这群“杀人如麻”的强人有了全新的认识。他们不是书里的符号，而是有血有肉的人。', background: BG_CAMP, nextId: 'day3_kitchen_10' },
  'day3_kitchen_10': { id: 'day3_kitchen_10', speaker: '系统', content: '吃完午饭，暖洋洋的阳光洒在身上。你告别了老厨师和鲁大师，回到住所。', background: BG_CAVE, nextId: 'day3_rest' },
  'day3_rest': { id: 'day3_rest', speaker: '系统', content: '这一觉睡得沉稳而深长。梦里没有KPI，只有竹林的沙沙声。', background: BG_BLACK, nextId: 'day4_start' },

  // --- 第四日：导师选择机制 ---
  'day4_start': { id: 'day4_start', speaker: '系统', content: '第四天。你感到体内的“天罡灵气”稳固了许多。公孙道长说，你需要进一步强化专项修行。', background: BG_CAMP, nextId: 'day4_choice' },
  'day4_choice': { id: 'day4_choice', speaker: '系统', content: '今日清晨，四位英雄都已在不同地点等候。你要跟随哪位开启正式特训？', background: BG_CAMP, choices: [
    { text: '卢俊义：研习“格物鉴宝”与上位者威压', nextId: 'day4_lu_branch', affectionBonus: { charId: 'lujunyi', points: 15 } },
    { text: '燕青：研习“潜伏谍报”与百乐调和', nextId: 'day4_yan_branch', affectionBonus: { charId: 'yanqing', points: 15 } },
    { text: '鲁智深：研习“禅意与守护”与绝对防御', nextId: 'day4_luzhishen_branch', affectionBonus: { charId: 'luzhishen', points: 15 } },
    { text: '李逵：研习“野兽本能”与极致体魄', nextId: 'day4_kui_branch', affectionBonus: { charId: 'likui', points: 15 } }
  ]},

  'day4_lu_branch': { id: 'day4_lu_branch', speaker: '卢俊义', characterId: 'lujunyi', content: '“既然选择了俊义，那便从最基础的‘审视’开始。不仅要看宝物的光，更要看它的魂。”', background: BG_CAMP, nextId: 'day5_start' },
  'day4_yan_branch': { id: 'day4_yan_branch', speaker: '燕青', characterId: 'yanqing', content: '“聪明人的选择。走吧，今日教你如何在大庭广众之下，仅凭一个眼神就让对方缴械。”', background: BG_MARKET, nextId: 'day5_start' },
  'day4_luzhishen_branch': { id: 'day4_luzhishen_branch', speaker: '鲁智深', characterId: 'luzhishen', content: '“洒家就知道你这孩子有灵性！来，先把这十桶水挑到后坡，咱们再谈如何‘以禅入武’。”', background: BG_FOREST, nextId: 'day5_start' },
  'day4_kui_branch': { id: 'day4_kui_branch', speaker: '李逵', characterId: 'likui', content: '“哈哈！俺就说你这小文书离不开俺！走，俺今天教你怎么一斧头劈开水缸！”', background: BG_MOUNTAIN, nextId: 'day5_start' },

  'day5_start': { id: 'day5_start', speaker: '系统', content: '第五天。经过初期的修行，你感觉到体内的“天罡灵气”稳固了许多。', background: BG_CAMP, nextId: 'ch1_final_node' },

  'ch1_final_node': { id: 'ch1_final_node', speaker: '系统', content: '第一章：天罡初醒 · 完。', background: BG_CAMP, nextId: 'free_talk_intro' },
  'free_talk_intro': { id: 'free_talk_intro', speaker: '系统', content: '现在可以自由传信互动了。', background: BG_CAMP, nextId: 'free_talk_intro' },

  // --- 保留：李逵支线的杀四虎剧情（仅通过李逵好感度触发或特定支线） ---
  'day3_tiger_intro': { id: 'day3_tiger_intro', speaker: '系统', content: '【心动剧场：沂岭杀四虎】（注：若你选择了李逵分支，他将带你前往此处）夕阳如残血般泼洒在山脊上。', background: BG_MOUNTAIN, nextId: 'day3_tiger_02' },
  'day3_tiger_02': { id: 'day3_tiger_02', speaker: '{playerName}', content: '山风在林间穿梭，发出呜呜的咽气声。你紧紧拽着李逵那粗硬的衣角。', background: BG_MOUNTAIN, nextId: 'day3_tiger_15' },
  'day3_tiger_15': { id: 'day3_tiger_15', speaker: '李逵', characterId: 'likui', content: '“{playerName}……没吓着吧？别看……俺这一身脏。”', background: BG_MOUNTAIN, nextId: 'day4_start' }
};
