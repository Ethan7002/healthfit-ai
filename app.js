const menu = [
  {id:1,name:"Sweet Onion Chicken Teriyaki",nameZh:"甜洋葱照烧鸡肉三明治",desc:"Teriyaki chicken, vegetables and sweet onion flavour on a standard 6-inch sub.",descZh:"照烧鸡肉、新鲜蔬菜与甜洋葱风味的标准6英寸三明治。",price:14.9,cal:450,protein:30,carbs:53,tags:["high-protein","lighter"],badge:"High protein",badgeZh:"高蛋白",emoji:"🥪",tone:1},
  {id:2,name:"Steak & Cheese",nameZh:"牛排芝士三明治",desc:"Steak, cheese and fresh vegetables for a satisfying meal.",descZh:"牛排、芝士与新鲜蔬菜组成的饱腹餐点。",price:17.9,cal:500,protein:29,carbs:39,tags:["high-protein"],badge:"High protein",badgeZh:"高蛋白",emoji:"🥖",tone:2},
  {id:3,name:"Tuna",nameZh:"金枪鱼三明治",desc:"Creamy tuna with vegetables and a richer standard-recipe calorie count.",descZh:"奶香金枪鱼搭配蔬菜，标准配方热量相对较高。",price:15.9,cal:470,protein:20,carbs:40,tags:["lighter"],badge:"Filling",badgeZh:"饱腹",emoji:"🥪",tone:3},
  {id:4,name:"Veggie Delite",nameZh:"蔬菜百味三明治",desc:"A crisp mix of fresh vegetables with sauces customised to your taste.",descZh:"爽脆新鲜蔬菜，可按口味选择酱料。",price:9.9,cal:220,protein:10,carbs:40,tags:["lighter","vegetarian"],badge:"Light choice",badgeZh:"轻盈选择",emoji:"🥬",tone:5},
  {id:5,name:"Oven Roasted Chicken",nameZh:"烤鸡肉三明治",desc:"A balanced combination of roasted chicken breast and vegetables.",descZh:"烤鸡胸肉与蔬菜组成的均衡选择。",price:14.5,cal:280,protein:21,carbs:41,tags:["high-protein","lighter"],badge:"AI pick",badgeZh:"AI推荐",emoji:"🥪",tone:4},
  {id:6,name:"Meatball Marinara",nameZh:"意式肉丸三明治",desc:"Meatballs and tomato sauce for days when you need more energy.",descZh:"肉丸与番茄酱，适合需要更多能量的日子。",price:16.5,cal:460,protein:20,carbs:54,tags:["lighter"],badge:"Popular",badgeZh:"热门",emoji:"🥖",tone:6}
];

const foods = {
  banana:{keys:["banana","香蕉"],label:"one medium banana (about 118 g)",labelZh:"一根中等大小的香蕉（约118克）",cal:105,protein:1.3,carbs:27,fat:.4,fibre:3.1},
  apple:{keys:["apple","苹果"],label:"one medium apple with skin (about 182 g)",labelZh:"一个带皮中等大小的苹果（约182克）",cal:95,protein:.5,carbs:25,fat:.3,fibre:4.4},
  egg:{keys:["egg","鸡蛋"],label:"one large egg",labelZh:"一个大鸡蛋",cal:72,protein:6.3,carbs:.4,fat:4.8,fibre:0},
  orange:{keys:["orange","橙子"],label:"one medium orange",labelZh:"一个中等大小的橙子",cal:62,protein:1.2,carbs:15.4,fat:.2,fibre:3.1},
  rice:{keys:["rice","米饭"],label:"one cup of cooked white rice",labelZh:"一杯熟白米饭",cal:205,protein:4.3,carbs:44.5,fat:.4,fibre:.6},
  avocado:{keys:["avocado","牛油果"],label:"half a medium avocado",labelZh:"半个中等大小的牛油果",cal:120,protein:1.5,carbs:6,fat:11,fibre:5},
  chicken:{keys:["chicken breast","鸡胸肉"],label:"100 g cooked skinless chicken breast",labelZh:"100克熟的去皮鸡胸肉",cal:165,protein:31,carbs:0,fat:3.6,fibre:0},
  sandwich:{keys:["sandwich","三明治","三文治"],label:"one standard filled sandwich",labelZh:"一个标准夹馅三明治",cal:380,protein:18,carbs:42,fat:15,fibre:4},
  porkRice:{keys:["braised pork rice","lu rou fan","卤肉饭","滷肉飯"],label:"one bowl of braised pork rice",labelZh:"一碗卤肉饭",cal:650,protein:22,carbs:78,fat:27,fibre:3},
  salmon:{keys:["salmon","三文鱼","鲑鱼"],label:"100 g cooked salmon",labelZh:"100克熟三文鱼",cal:208,protein:20,carbs:0,fat:13,fibre:0},
  tofu:{keys:["tofu","豆腐"],label:"100 g firm tofu",labelZh:"100克老豆腐",cal:145,protein:17,carbs:3,fat:9,fibre:2},
  oats:{keys:["oatmeal","oats","燕麦","燕麦粥"],label:"one bowl of cooked oatmeal",labelZh:"一碗熟燕麦粥",cal:160,protein:6,carbs:28,fat:3,fibre:4},
  yogurt:{keys:["yogurt","yoghurt","酸奶","优格"],label:"one 150 g cup of plain yogurt",labelZh:"一杯150克原味酸奶",cal:110,protein:8,carbs:12,fat:3,fibre:0},
  milk:{keys:["milk","牛奶"],label:"one 250 ml glass of milk",labelZh:"一杯250毫升牛奶",cal:150,protein:8,carbs:12,fat:8,fibre:0},
  nasiLemak:{keys:["nasi lemak","椰浆饭"],label:"one standard plate of nasi lemak",labelZh:"一份标准椰浆饭",cal:600,protein:18,carbs:80,fat:24,fibre:5},
  chickenRice:{keys:["chicken rice","海南鸡饭","鸡饭"],label:"one plate of chicken rice",labelZh:"一份鸡饭",cal:620,protein:28,carbs:82,fat:20,fibre:3},
  rotiCanai:{keys:["roti canai","印度煎饼"],label:"one plain roti canai",labelZh:"一张原味印度煎饼",cal:320,protein:7,carbs:45,fat:13,fibre:2}
};

const zh = {
  campus:"泰莱大学湖畔校区",authHero:"吃得更聪明。<br>更了解自己的身体。",authHeroText:"你的校园健康伙伴：BMR分析、清晰热量、校园点餐和个性化AI建议。",bmrPreview:"BMR预览",sevenDays:"免费7天",fullVip:"完整VIP功能",aiGoal:"AI目标建议",personalised:"根据你的情况生成",alreadyMember:"已有账户？",login:"登录",vipWelcomeTitle:"前7天免费享受VIP",vipWelcomeText:"解锁AI目标期限、强度建议、进度报告和无限聊天，无需银行卡。",createProfile:"创建你的账户",welcome:"欢迎使用 HealthfitAI",registerIntro:"创建账户后，只需提供计算BMR与目标建议所必需的信息。",username:"用户名",usernamePlaceholder:"例如 TaylorFit",createPassword:"设置密码",passwordPlaceholder:"至少6个字符",confirmPassword:"确认密码",confirmPlaceholder:"再次输入密码",terms:"我同意条款和隐私声明。本演示只在当前浏览器保存资料。",createTrial:"创建账户并免费开启VIP",wellnessOnly:"仅提供一般健康建议，不能替代医疗建议。",newHere:"还没有账户？",createAccount:"创建账户",welcomeBack:"欢迎回来",loginTitle:"登录你的计划",loginIntro:"继续查看你的BMR、目标与校园餐饮。",password:"密码",yourUsername:"你的用户名",yourPassword:"你的密码",browserStorage:"演示账户只保存在当前浏览器。",
  minimalData:"只收集必要信息",onboardHero:"了解身体。<br>明确目标。",onboardHeroText:"我们用年龄、性别、身高和体重计算BMR，再将你的期望时间与合理建议进行比较。",bodyBmr:"身体与BMR",goalTimeline:"目标与期限",intensityReview:"强度与确认",vipTrialIncluded:"已包含7天VIP试用",step1:"第1步，共3步",bodyTitle:"你的身体与BMR",bodyIntro:"只需填写四项资料。BMR是身体在完全休息时消耗的基础能量。",age:"年龄",ageHint:"用于BMR公式",sex:"生理性别",sexHint:"只用于公式中的常数",female:"女性",male:"男性",height:"身高（厘米）",heightHint:"例如：168",weight:"当前体重（公斤）",weightHint:"最近的大致体重",liveBmr:"实时BMR计算",bmrExplanation:"身体在休息状态下预计每天消耗的能量。",formulaUsed:"Mifflin-St Jeor公式",step2:"第2步，共3步",goalTitle:"选择一个明确目标",goalIntro:"选择你想达到的结果。图片和说明会清楚表达每个选项的含义。",fatLoss:"减少体脂",fatLossDesc:"在保持力量的同时逐步降低体重",maintain:"保持健康",maintainDesc:"保持稳定体重并建立长期习惯",muscleGain:"增加肌肉",muscleGainDesc:"配合力量训练逐步增加体重",targetWeight:"目标体重（公斤）",targetHint:"AI会与当前体重进行比较",desiredTime:"你希望多久达到？",timeHint:"这是期望，不是结果承诺",fourWeeks:"4周内",eightWeeks:"8周内",twelveWeeks:"12周内",flexible:"没有固定期限",aiRealityCheck:"AI合理性检查",step3:"第3步，共3步",intensityTitle:"选择舒适的强度",intensityIntro:"AI会根据目标和期望期限给出建议，最终由你决定。",gentle:"轻松",gentleDesc:"恢复压力较小，适合平稳开始",recommended:"AI推荐",moderate:"中等",moderateDesc:"有明显运动感，同时容易长期坚持",challenging:"较高",challengingDesc:"更高投入，更适合已经适应运动的人",whyRecommended:"AI为什么这样建议",yourBmr:"你的BMR",yourGoal:"你的目标",requestedTimeline:"期望期限",vipStartsNow:"你的7天免费VIP现在开始",vipStartsText:"VIP解锁完整AI分析、进度报告、目标调整和AI聊天。",back:"返回",continue:"继续",createPlan:"创建我的VIP计划",bmrDisclaimer:"BMR和目标期限都是一般健康估算，不构成医疗建议。",
  home:"首页",campusFood:"校园餐饮",aiGoalPlan:"AI目标计划",progress:"进度",profile:"个人资料",vipBannerTitle:"首次使用，所有VIP功能免费7天",vipBannerText:"体验AI目标期限、个性化强度、详细进度和无限聊天。",comparePlans:"比较免费版与VIP",hello:"你好",heroTitle:"了解身体。<br><em>更清晰地达到目标。</em>",heroText1:"你的BMR基准是",heroText2:"你选择的目标是",orderFood:"点餐",viewAiAdvice:"查看AI目标建议",freeBmr:"✓ 免费BMR计算器",clearCalories:"✓ 清晰热量",vipAi:"♛ VIP AI建议",restingEnergy:"静息能量",target:"目标",aiEstimate:"AI估算",membershipExperience:"两种会员体验",freeVsVipTitle:"免费基础功能，VIP智能分析。",freeVsVipText:"免费版满足日常基础需要，VIP把你的数据转化为个性化建议。",freePlanTitle:"日常基础功能",free1:"BMR计算器与公式",free2:"菜品热量与营养",free3:"校园点餐与模拟付款",previewFree:"预览普通界面",vipPlanTitle:"个性化AI建议",vip1:"目标期限合理性检查",vip2:"个性化强度建议",vip3:"进度报告与无限AI聊天",activateVip:"使用我的7天VIP",bodyBaseline:"你的身体基准",bmrResult:"BMR计算",seeFormula:"查看公式和个人资料 →",vipAiInsight:"VIP AI洞察",openGoalPlan:"打开完整目标计划 →",
  backHome:"← 返回首页",campusDining:"泰莱湖畔 · 校园餐饮",orderSubway:"在 Subway 点餐",foodDisclaimer:"热量采用标准配方，实际数值会因面包、酱料和份量而变化。",openNow:"营业中",deliveryEstimate:"预计12-25分钟",searchMeals:"搜索菜品",all:"全部",highProtein:"高蛋白",under500:"低于500千卡",vegetarian:"素食",selectedGoal:"为你的目标推荐",nutritionNote:"营养数值为标准配方近似值；马来西亚配方、酱料和份量可能不同，价格仅用于演示。",yourOrder:"你的订单",emptyBasket:"购物篮是空的",emptyBasketText:"选择适合你目标的餐点。",diningOption:"用餐方式",delivery:"外送",takeaway:"外带",dineIn:"堂食",subtotal:"小计",serviceFee:"配送/服务费",total:"总计",continuePayment:"继续付款",
  vipFeature:"这是VIP功能",vipLockText:"免费开启7天VIP，解锁个性化AI目标建议。",unlockVip:"免费解锁VIP",goalPlanHero:"从现在到目标，<br>有一条更清晰的路。",goalPlanText:"AI会比较当前体重、目标体重、期望期限和所选强度。",suggestedRange:"建议范围",currentToTarget:"当前 → 目标",yourRequest:"你的期望",chosenIntensity:"所选强度",vipPersonalAnalysis:"VIP个性化分析",bmrBaseline:"BMR基准",aiCoachNote:"AI教练提示",matchMeals:"根据目标匹配餐点 →",progressLockText:"详细趋势和AI调整在7天VIP试用期间开放。",vipProgress:"VIP进度报告",progressTitle:"看见正在发生的改变",progressIntro:"演示数据展示VIP如何把记录和订单转化为详细报告。",goalPace:"目标进度",onTrack:"正常",daysTarget:"达标天数",weightTrend:"体重趋势",past7:"过去7天",bmrIntakeTrend:"BMR与摄入趋势",
  wellnessProfile:"你的健康资料",profileTitle:"只保留真正有用的信息",profileIntro:"检查用于BMR和AI目标建议的资料。",replayTour:"重新播放新手介绍",campusMember:"泰莱湖畔校区用户",primaryGoal:"主要目标",editProfile:"编辑资料",logout:"退出登录",currentStatus:"当前状态",bmrFormulaLabel:"BMR与公式",timeline:"目标期限",intensity:"强度",userControlled:"由你选择，AI提供参考",aiCoachSummary:"VIP AI目标总结",refreshAnalysis:"查看完整分析 →",managePlan:"管理会员 →",askAi:"询问 Healthfit AI",vipCoachOnline:"VIP教练在线",askQuestion:"输入问题…",
  demoCheckout:"安全模拟结账",reviewPay:"确认并付款",order:"订单",amountDue:"应付金额",cardNumber:"卡号",expiry:"有效期",simulatePayment:"模拟付款",demoPaymentNote:"仅为互动演示，不会产生真实扣款。",orderConfirmed:"订单已确认",orderConfirmedText:"Subway正在准备餐点，预计18分钟送达。",done:"完成",chooseExperience:"选择你的HealthfitAI体验",trialModalText:"每个新账户均可免费使用7天完整VIP功能，本演示无需银行卡。",switchFree:"切换到普通版",perMonth:"/ 月（试用后）",startVip:"免费开启7天VIP",demoSubscription:"仅为订阅演示，不会产生扣款。",studentAccount:"学生账户 · 泰莱湖畔校区",membership:"会员",personalProfile:"个人资料",view:"查看 →",quickStart:"快速开始",skipTour:"跳过介绍",next:"下一步"
};

Object.assign(zh,{
  basicFirst:"先使用基础系统",vipChoiceLater:"完成设置后，你可以自行选择是否免费体验7天VIP。",previousStep:"上一步",basicReady:"你的基础计划已经准备好",basicReadyText:"完成后可选择继续使用基础版，或免费体验7天VIP。",createBasicPlan:"创建我的基础计划",manageMembership:"管理会员",
  tryVipCoach:"体验VIP AI教练",todayChecklist:"今日打卡",simplePlanTitle:"可以真正执行的简单计划",checkToTrack:"完成一项就勾选一项，记录会同步到进度页面。",vipDetailTitle:"需要真正的AI教练分析吗？",vipDetailText:"VIP提供更深入的节奏分析、动态周计划和不限次数的教练问答；你的基础计划仍会保留。",startVipTrial:"免费体验7天VIP",matchMealsPlain:"根据目标匹配餐点",
  progressTracker:"进度追踪",progressTitleReal:"从第一天开始记录每一天",progressIntroReal:"记录热量、体重和计划完成情况，图表会使用你的真实数据自动更新。",dailyCheckin:"每日记录",recordToday:"记录今天的结果",date:"日期",caloriesConsumed:"今日摄入热量",bodyWeight:"体重（公斤）",completedPlan:"我完成了今天的计划",saveCheckin:"保存今日记录",todayTarget:"今日参考",targetNote:"根据BMR和目标得到的一般估算，不是医疗处方。",currentWeight:"当前资料体重",entries:"已记录天数",calorieChart:"每日热量",calorieVsTarget:"摄入热量与目标对比",weightChart:"体重趋势",weightOverTime:"体重随时间变化",noEntries:"还没有记录，请先保存第一天的数据。",dailyHistory:"每日历史",yourRecordedDays:"你已经记录的日期",unlockDetailedCoach:"解锁VIP详细教练",
  optionalVip:"可选VIP试用",tryVipQuestion:"是否免费体验7天VIP？",tryVipExplain:"你的账户默认使用基础系统。基础版包含简单目标计划、每日打卡和进度图表；VIP提供更深入的AI分析和私人教练功能。",stayBasic:"继续使用基础版",tryVipSeven:"免费体验7天VIP",noCard:"本演示无需银行卡。",
  settings:"设置",systemSettings:"系统设置",settingsTitle:"让平台更符合你的风格",settingsIntro:"管理语言和显示偏好。VIP额外提供7套高级主题和环境音乐控制。",language:"语言",interfaceLanguage:"界面语言",languageExplain:"在英文与中文之间切换所有支持的页面。",display:"显示",reducedMotion:"减少动态效果",motionExplain:"减少页面过渡动画和脉冲高亮。",reduceAnimation:"减少动画",premiumThemes:"7套高级配色系统",themeExplain:"选择一套克制而有质感的视觉系统，包含金色、白色、曜石黑和另外四种高级配色。",themeRoyal:"皇家紫",themeGold:"香槟金",themeWhite:"画廊白",themeObsidian:"曜石黑",themeEmerald:"深祖母绿",themeSapphire:"午夜蓝宝石",themeRose:"柔雾玫瑰",themesVipOnly:"高级配色系统仅限VIP使用。",ambientMusic:"环境音乐",musicExplain:"选择低调的生成式专注音乐，只有点击播放后才会开始。",focusFlow:"专注律动",calmAir:"平静空气",lightEnergy:"轻盈能量",playMusic:"播放",volume:"音量",musicVipOnly:"环境音乐控制仅限VIP使用。"
});
Object.assign(zh,{vipWelcomeTitle:"先从基础版开始，之后再选择VIP",vipWelcomeText:"完成设置后，可自行选择免费体验7天完整VIP教练，无需银行卡。",createTrial:"创建基础版账户",free1:"简单目标计划与每日打卡",free2:"热量、体重与进度图表",free3:"校园点餐与基础助手",vip1:"自适应AI目标分析",vip2:"详细教练调整建议",vip3:"高级教练聊天、主题与音乐",switchFree:"使用基础版"});

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const money = value => `RM ${value.toFixed(2)}`;
const clean = value => String(value ?? "").replace(/[<>&"']/g, char => ({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;"}[char]));
const ACCOUNT_KEY = "healthfit-accounts-v3";
const LEGACY_ACCOUNT_KEY = "healthfit-accounts-v2";
const LANGUAGE_KEY = "healthfit-language";
let accounts = JSON.parse(localStorage.getItem(ACCOUNT_KEY) || localStorage.getItem(LEGACY_ACCOUNT_KEY) || "{}");
let locale = localStorage.getItem(LANGUAGE_KEY) || "en";
let activeUser = null;
let profile = null;
let editingProfile = false;
let onboardingStep = 1;
let tourStep = 0;
let cart = {};
let filter = "all";
let mode = "delivery";

function saveAccounts(){ localStorage.setItem(ACCOUNT_KEY, JSON.stringify(accounts)); }
function t(en, cn){ return locale === "zh" ? cn : en; }
function captureEnglish(){
  $$('[data-i18n]').forEach(el => { if(!el.dataset.enHtml) el.dataset.enHtml = el.innerHTML; });
  $$('[data-i18n-placeholder]').forEach(el => { if(!el.dataset.enPlaceholder) el.dataset.enPlaceholder = el.placeholder; });
}
function setLocale(next){
  locale = next;
  localStorage.setItem(LANGUAGE_KEY, locale);
  document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  $$('[data-i18n]').forEach(el => { const key=el.dataset.i18n; el.innerHTML = locale === "zh" ? (zh[key] || el.dataset.enHtml) : el.dataset.enHtml; });
  $$('[data-i18n-placeholder]').forEach(el => { const key=el.dataset.i18nPlaceholder; el.placeholder = locale === "zh" ? (zh[key] || el.dataset.enPlaceholder) : el.dataset.enPlaceholder; });
  $('#languageToggle span').textContent = locale === "zh" ? "EN" : "中文";
  $('#languageToggle i').textContent = locale === "zh" ? "中文" : "EN";
  updateBmrPreview(); updateGoalAdvice(); updateReview();
  if(profile){ applyProfile(); applyPlanMode(); }
  renderMenu(); renderCart(); renderChatIntro();
  if(!$('#tourOverlay').classList.contains('hidden')) renderTour();
}
$('#languageToggle').addEventListener('click', () => setLocale(locale === "en" ? "zh" : "en"));

function normaliseProfile(data={}){
  const goalMap={"Fat loss":"fat-loss","Muscle gain":"muscle-gain","Better fitness":"maintain"};
  return {
    age:+data.age || 21,
    gender:["Female","Male"].includes(data.gender) ? data.gender : "Female",
    height:+data.height || 168,
    weight:+data.weight || 64,
    goal:goalMap[data.goal] || data.goal || "fat-loss",
    targetWeight:+data.targetWeight || (+data.weight || 64),
    timeline:String(data.timeline || "8"),
    intensity:String(data.intensity || "moderate").toLowerCase()
  };
}
function showAuth(type="register"){
  $('#authScreen').classList.remove('hidden'); $('#onboardingScreen').classList.add('hidden'); $('#app').classList.add('hidden');
  $('#registerForm').classList.toggle('hidden', type !== 'register'); $('#loginForm').classList.toggle('hidden', type !== 'login');
  location.hash = type === 'login' ? 'login' : 'register';
}
$$('[data-auth]').forEach(button => button.addEventListener('click', () => showAuth(button.dataset.auth)));
$$('[data-eye]').forEach(button => button.addEventListener('click', () => { const input=$('#'+button.dataset.eye); input.type=input.type==='password'?'text':'password'; }));

$('#registerForm').addEventListener('submit', event => {
  event.preventDefault();
  const name=$('#username').value.trim(), password=$('#password').value, confirmation=$('#confirmPassword').value;
  if(accounts[name]) return $('#formError').textContent=t('That username already exists in this browser.','这个用户名已存在于当前浏览器。');
  if(password!==confirmation) return $('#formError').textContent=t('The passwords do not match.','两次密码不一致。');
  $('#formError').textContent='';
  accounts[name]={password,profile:null,tourSeen:false,vipOfferSeen:false,plan:'free',checkins:[],planChecks:{},settings:{theme:'royal',reducedMotion:false,musicTrack:'focus',musicVolume:24},createdAt:new Date().toISOString()};
  activeUser=name; saveAccounts(); openOnboarding(false);
});
$('#loginForm').addEventListener('submit', event => {
  event.preventDefault();
  const name=$('#loginUsername').value.trim(), password=$('#loginPassword').value;
  if(!accounts[name]||accounts[name].password!==password){ $('#loginError').textContent=t('Username or password is incorrect.','用户名或密码不正确。'); return; }
  $('#loginError').textContent=''; activeUser=name;
  accounts[name].plan ||= 'vip-trial'; accounts[name].trialStarted ||= new Date().toISOString();
  if(accounts[name].profile){ profile=normaliseProfile(accounts[name].profile); accounts[name].profile=profile; saveAccounts(); enterApp(false); } else openOnboarding(false);
});

function bmrData(data){
  const age=+data.age||21, height=+data.height||168, weight=+data.weight||64, constant=data.gender==='Male'?5:-161;
  const value=Math.round(10*weight+6.25*height-5*age+constant);
  return {value,formula:`10 × ${weight} + 6.25 × ${height} - 5 × ${age} ${constant>=0?'+':'-'} ${Math.abs(constant)}`};
}
function draftProfile(){
  return normaliseProfile({age:$('#onboardAge').value,gender:$('#onboardGender').value,height:$('#onboardHeight').value,weight:$('#onboardWeight').value,goal:$('input[name="onboardGoal"]:checked')?.value,targetWeight:$('#onboardTargetWeight').value,timeline:$('#onboardTimeline').value,intensity:$('input[name="onboardIntensity"]:checked')?.value});
}
function goalName(goal){ return ({'fat-loss':t('Lose body fat','减少体脂'),maintain:t('Maintain health','保持健康'),'muscle-gain':t('Build muscle','增加肌肉')})[goal] || goal; }
function intensityName(value){ return ({gentle:t('Gentle','轻松'),moderate:t('Moderate','中等'),challenging:t('Challenging','较高')})[value] || value; }
function timelineName(value){ return value==='flexible'?t('No fixed deadline','没有固定期限'):t(`${value} weeks`,`${value}周`); }
function goalAnalysis(data){
  const difference=Math.abs(data.targetWeight-data.weight);
  if(data.goal==='maintain') return {min:4,max:8,difference:0,valid:true};
  if(data.goal==='fat-loss'){
    const valid=data.targetWeight<data.weight;
    return {min:Math.max(4,Math.ceil(difference/.75)),max:Math.max(8,Math.ceil(difference/.25)),difference,valid};
  }
  const valid=data.targetWeight>data.weight;
  return {min:Math.max(8,Math.ceil(difference/.25)),max:Math.max(12,Math.ceil(difference/.1)),difference,valid};
}
function recommendedIntensity(data){ return data.age>=50?'gentle':'moderate'; }
function updateBmrPreview(){
  if(!$('#onboardAge')) return;
  const data=draftProfile(), bmr=bmrData(data);
  $('#bmrValue').textContent=bmr.value.toLocaleString(); $('#bmrFormula').textContent=bmr.formula; $('#bmrEquation').textContent=`= ${bmr.value.toLocaleString()} kcal/day`;
}
function updateGoalAdvice(){
  if(!$('#onboardTargetWeight')) return;
  const data=draftProfile(), analysis=goalAnalysis(data), desired=data.timeline==='flexible'?null:+data.timeline;
  $('#onboardTargetWeight').disabled=data.goal==='maintain';
  if(data.goal==='maintain') $('#onboardTargetWeight').value=data.weight;
  const current=draftProfile(), result=goalAnalysis(current);
  let title=t(`A sustainable starting phase is ${result.min}-${result.max} weeks`,`建议先用${result.min}-${result.max}周建立稳定节奏`);
  let text=t('Your request is a preference, not a guarantee. Progress varies by sleep, nutrition and consistency.','你的期限是期望而不是结果承诺；睡眠、饮食和坚持程度都会影响进展。');
  if(!result.valid){
    title=t('Check the direction of your target weight','请检查目标体重方向');
    text=current.goal==='fat-loss'?t('For fat loss, choose a target below your current weight.','减脂目标体重应低于当前体重。'):t('For muscle gain, choose a target above your current weight.','增肌目标体重应高于当前体重。');
  } else if(desired){
    const within=desired>=result.min&&desired<=result.max;
    title=within?t(`Your ${desired}-week request fits the general range`,`${desired}周期望处于一般建议范围内`):desired<result.min?t(`Your ${desired}-week request may be too aggressive`,`${desired}周期望可能过于激进`):t(`Your ${desired}-week request is deliberately gradual`,`${desired}周期望较为渐进`);
    text=within?t(`A general suggested range is ${result.min}-${result.max} weeks. Review progress every two weeks.`,`一般建议范围为${result.min}-${result.max}周，每两周复盘一次。`):t(`AI suggests ${result.min}-${result.max} weeks instead. Do not raise intensity just to force a shorter deadline.`,`AI更建议${result.min}-${result.max}周，不要只为缩短期限而盲目提高强度。`);
  }
  $('#goalAdviceTitle').textContent=title; $('#goalAdviceText').textContent=text;
}
function updateReview(){
  if(!$('#reviewBmr')) return;
  const data=draftProfile(), bmr=bmrData(data), recommended=recommendedIntensity(data), chosen=$('input[name="onboardIntensity"]:checked')?.value||'moderate';
  $$('.intensity-options label').forEach(label=>label.classList.toggle('recommended',label.querySelector('input').value===recommended));
  $('#reviewBmr').textContent=`${bmr.value.toLocaleString()} kcal/day`; $('#reviewGoal').textContent=goalName(data.goal); $('#reviewTimeline').textContent=timelineName(data.timeline);
  $('#intensityAdvice').textContent=chosen===recommended?t(`${intensityName(recommended)} intensity matches the AI starting suggestion for your age, goal and timeline.`,`${intensityName(recommended)}强度符合AI根据你的年龄、目标和期限给出的起始建议。`):t(`You selected ${intensityName(chosen)}. AI suggests ${intensityName(recommended)} as a starting point; you can still keep your choice.`,`你选择了${intensityName(chosen)}强度。AI建议从${intensityName(recommended)}开始，但最终选择权属于你。`);
}
['onboardAge','onboardGender','onboardHeight','onboardWeight'].forEach(id=>$('#'+id).addEventListener('input',()=>{updateBmrPreview();updateGoalAdvice();updateReview();}));
$$('input[name="onboardGoal"],input[name="onboardIntensity"],#onboardTargetWeight,#onboardTimeline').forEach(el=>el.addEventListener('change',()=>{updateGoalAdvice();updateReview();}));

function setOnboardingStep(step){
  onboardingStep=step; $$('.onboarding-step').forEach(el=>el.classList.toggle('active',+el.dataset.step===step)); $$('#onboardingProgress li').forEach((el,index)=>el.classList.toggle('active',index+1<=step));
  $('#onboardBack').classList.toggle('hidden',step===1); $('#onboardNext').classList.toggle('hidden',step===3); $('#onboardFinish').classList.toggle('hidden',step!==3);
  if(step===2) updateGoalAdvice(); if(step===3) updateReview();
}
function fillOnboarding(data){
  if(!data) return;
  const p=normaliseProfile(data); ['age','gender','height','weight','targetWeight','timeline'].forEach(key=>{ const id={age:'onboardAge',gender:'onboardGender',height:'onboardHeight',weight:'onboardWeight',targetWeight:'onboardTargetWeight',timeline:'onboardTimeline'}[key]; $('#'+id).value=p[key]; });
  const goal=$(`input[name="onboardGoal"][value="${p.goal}"]`), intensity=$(`input[name="onboardIntensity"][value="${p.intensity}"]`); if(goal) goal.checked=true; if(intensity) intensity.checked=true;
}
function openOnboarding(isEdit){ editingProfile=isEdit; $('#authScreen').classList.add('hidden'); $('#app').classList.add('hidden'); $('#onboardingScreen').classList.remove('hidden'); fillOnboarding(isEdit?profile:null); setOnboardingStep(1); updateBmrPreview(); window.scrollTo(0,0); }
$('#onboardNext').addEventListener('click',()=>{ const current=$(`.onboarding-step[data-step="${onboardingStep}"]`); const invalid=[...current.querySelectorAll('input:not(:disabled),select')].find(el=>!el.checkValidity()); if(invalid){invalid.reportValidity();return;} setOnboardingStep(Math.min(3,onboardingStep+1)); });
$('#onboardBack').addEventListener('click',()=>setOnboardingStep(Math.max(1,onboardingStep-1)));
$('#onboardingForm').addEventListener('submit',event=>{ event.preventDefault(); profile=draftProfile(); const account=accounts[activeUser]; account.profile=profile; account.plan ||= 'free'; account.checkins ||= []; account.planChecks ||= {}; account.settings ||= {theme:'royal',reducedMotion:false,musicTrack:'focus',musicVolume:24}; saveAccounts(); enterApp(false); if(editingProfile){showView('profile');}else if(!account.vipOfferSeen){openModal('vipOfferModal');}else if(!account.tourSeen){openTour();} });

function isVip(){ return activeUser && accounts[activeUser]?.plan!=='free'; }
function setPlan(plan){ if(!activeUser) return; const account=accounts[activeUser]; account.plan=plan; account.vipOfferSeen=true; if(plan==='vip-trial') account.trialStarted ||= new Date().toISOString(); if(plan==='free') stopMusic(); saveAccounts(); applyPlanMode(); closeModals(); }
function trialDaysLeft(){ if(!activeUser) return 7; const start=new Date(accounts[activeUser].trialStarted||Date.now()); return Math.max(0,7-Math.floor((Date.now()-start)/86400000)); }
function applyPlanMode(){
  if(!activeUser) return;
  const account=accounts[activeUser],vip=isVip(); account.checkins ||= []; account.planChecks ||= {}; account.settings ||= {theme:'royal',reducedMotion:false,musicTrack:'focus',musicVolume:24}; document.body.classList.toggle('vip-mode',vip); document.body.classList.toggle('free-mode',!vip);
  $('#trialButton > span').textContent=vip?'♛':'◆'; $('#planBadge').textContent=vip?t('VIP SYSTEM','VIP系统'):t('BASIC SYSTEM','基础系统'); $('#planDays').textContent=vip?t(`${trialDaysLeft()} days left`,`${trialDaysLeft()}天剩余`):t('Core tools','核心工具');
  $('#profilePlanLabel').textContent=vip?'VIP TRIAL':'FREE'; $('#profilePlanTitle').textContent=vip?t(`${trialDaysLeft()} days free`,`${trialDaysLeft()}天免费`):t('Everyday essentials','日常基础功能');
  $('#profilePlanText').textContent=vip?t('Detailed AI coaching, adaptive analysis and premium settings.','详细AI教练、动态分析和高级设置。'):t('Simple plan, daily check-ins, BMR and campus ordering.','简单计划、每日打卡、BMR和校园点餐。');
  $('#profileModalPlan').textContent=vip?t('VIP trial','VIP试用'):t('Basic','基础版');
  $('#homeSystemTitle').textContent=vip?t('VIP System','VIP系统'):t('Basic System','基础系统'); $('#homeSystemText').textContent=vip?t('Detailed AI coaching and premium customisation are active.','详细AI教练和高级个性化设置已启用。'):t('Simple plan, daily check-ins and progress charts are included.','包含简单计划、每日打卡和进度图表。');
  $('#planAccessLabel').textContent=vip?t('VIP COACH PLAN','VIP教练计划'):t('BASIC PLAN','基础计划'); $('#planAccessTitle').textContent=vip?t('Detailed, adaptive coaching plan','详细动态教练计划'):t('Your practical starting plan','你的实用起步计划'); $('#planAccessText').textContent=vip?t('Daily actions plus deeper pacing, trend and adjustment guidance.','每日行动配合更深入的节奏、趋势与调整建议。'):t('Use the checklist every day. Your progress is saved in this browser.','每天使用打卡清单，进度会保存在当前浏览器。');
  applyUserSettings(); renderPlanTasks(); renderProgress(); renderChatIntro();
}

function planCards(data){
  const analysis=goalAnalysis(data), intensity=intensityName(data.intensity);
  if(locale==='zh') return [
    ['01','目标节奏',data.goal==='maintain'?'先用4-8周建立稳定习惯':`一般建议${analysis.min}-${analysis.max}周`],
    ['02','强度建议',`${intensity}强度；不要仅为缩短期限而盲目加大强度`],
    ['03','复盘节点','每两周检查体重趋势、精力和执行情况，再决定是否调整']
  ];
  return [
    ['01','Goal pace',data.goal==='maintain'?'Use 4-8 weeks to build stable habits':`A general range is ${analysis.min}-${analysis.max} weeks`],
    ['02','Intensity guidance',`${intensity} intensity; do not force a shorter deadline by simply increasing effort`],
    ['03','Review point','Review weight trend, energy and consistency every two weeks before adjusting']
  ];
}
function applyProfile(){
  if(!profile) return;
  profile=normaliseProfile(profile); const bmr=bmrData(profile), analysis=goalAnalysis(profile), initial=(activeUser[0]||'H').toUpperCase(), desired=timelineName(profile.timeline), range=`${analysis.min}-${analysis.max}`;
  ['#avatarInitial','#profileInitial','#profilePageInitial'].forEach(id=>$(id).textContent=initial); ['#displayName','#profileName','#profilePageName'].forEach(id=>$(id).textContent=activeUser);
  $('#homeBmr').textContent=`${bmr.value.toLocaleString()} kcal`; $('#homeGoal').textContent=goalName(profile.goal).toLowerCase(); $('#heroBmr').textContent=bmr.value.toLocaleString(); $('#dashboardBmr').textContent=bmr.value.toLocaleString(); $('#calorieTarget').textContent=bmr.value.toLocaleString();
  $('#heroTarget').textContent=profile.goal==='maintain'?t('Maintain','保持'): `${profile.targetWeight} kg`; $('#heroWeeks').textContent=t(`${range} weeks`,`${range}周`); $('#fitVisualWeeks').textContent=t(`${range} weeks`,`${range}周`); $('#dashboardFormula').textContent=bmr.formula;
  $('#profileGoal').textContent=goalName(profile.goal); $('#profileTarget').textContent=profile.goal==='maintain'?t('Maintain current weight','保持当前体重'):t(`Target ${profile.targetWeight} kg`,`目标 ${profile.targetWeight} 公斤`); $('#profileBody').textContent=t(`${profile.age} years · ${profile.height} cm · ${profile.weight} kg`,`${profile.age}岁 · ${profile.height}厘米 · ${profile.weight}公斤`); $('#profileSex').textContent=profile.gender==='Male'?t('Male','男性'):t('Female','女性'); $('#profileBmr').textContent=`${bmr.value.toLocaleString()} kcal/day`; $('#profileFormula').textContent=bmr.formula; $('#profileTimeline').textContent=t(`${desired} requested`,`期望 ${desired}`); $('#profileSuggested').textContent=t(`AI suggests ${range} weeks`,`AI建议 ${range}周`); $('#profileIntensity').textContent=intensityName(profile.intensity);
  $('#analysisWeights').textContent=profile.goal==='maintain'?`${profile.weight} kg`: `${profile.weight} → ${profile.targetWeight} kg`; $('#analysisDifference').textContent=profile.goal==='maintain'?t('Stable weight goal','稳定体重目标'):t(`${analysis.difference} kg change`,`${analysis.difference}公斤变化`); $('#analysisRequest').textContent=desired; const requested=profile.timeline==='flexible'?null:+profile.timeline, within=requested&&requested>=analysis.min&&requested<=analysis.max; $('#analysisRequestNote').textContent=requested?(within?t('Inside suggested range','处于建议范围内'):requested<analysis.min?t('Faster than suggested','快于建议范围'):t('Gradual timeline','较为渐进')):t('AI can set the pace','由AI建议节奏'); $('#analysisIntensity').textContent=intensityName(profile.intensity); $('#analysisIntensityNote').textContent=profile.intensity===recommendedIntensity(profile)?t('AI recommended','AI推荐'):t(`AI suggests ${intensityName(recommendedIntensity(profile))}`,`AI建议${intensityName(recommendedIntensity(profile))}`);
  const realistic=!requested||requested>=analysis.min; $('#homeAdviceTitle').textContent=realistic?t(`Your ${desired} goal has a workable starting point`,`${desired}目标有可执行的起点`):t(`${desired} may be too aggressive`,`${desired}可能过于激进`); $('#homeAdviceText').textContent=t(`AI suggests ${range} weeks with ${intensityName(profile.intensity).toLowerCase()} intensity and a review every two weeks.`,`AI建议${range}周、采用${intensityName(profile.intensity)}强度，并每两周复盘。`); $('#profileCoachSummary').textContent=$('#homeAdviceText').textContent;
  $('#planGoal').textContent=t(`${goalName(profile.goal)} · suggested approach`,`${goalName(profile.goal)} · 建议方案`); $('#planSummary').textContent=t(`Your requested timeline is ${desired}. A general suggested range is ${range} weeks. BMR is a resting baseline, not a complete daily calorie prescription.`,`你的期望期限是${desired}，一般建议范围为${range}周。BMR只是静息基准，并不是完整的每日热量处方。`); $('#weekGrid').innerHTML=planCards(profile).map(card=>`<article class="day-card"><span>${card[0]}</span><h3>${card[1]}</h3><p>${card[2]}</p></article>`).join(''); $('#coachNote').textContent=t('Progress is individual. If you feel unwell or have a medical condition, seek qualified professional advice.','每个人的进展不同；如有身体不适或疾病，请咨询合格专业人士。');
}
function enterApp(startTour){ $('#authScreen').classList.add('hidden'); $('#onboardingScreen').classList.add('hidden'); $('#app').classList.remove('hidden'); applyProfile(); applyPlanMode(); showView('home'); if(startTour) openTour(); }
function showView(name){ $$('.view').forEach(view=>view.classList.remove('active')); const next=$(`#${name}View`); if(next) next.classList.add('active'); $$('.nav-link').forEach(link=>link.classList.toggle('active',link.dataset.go===name)); if(name==='fitness')renderPlanTasks();if(name==='progress')renderProgress();if(name==='settings')renderSettings();window.scrollTo({top:0,behavior:'smooth'}); }
$$('[data-go]').forEach(el=>el.addEventListener('click',()=>showView(el.dataset.go)));
$$('.feature-card').forEach(el=>el.addEventListener('keydown',event=>{if(event.key==='Enter')showView(el.dataset.go);}));

const tours={
  en:[
    {icon:'◆',label:'Platform system',title:'Switch or manage your system',text:'This badge shows whether you are using the Basic System or VIP System. Select it to compare both systems.',target:'#trialButton'},
    {icon:'🥪',label:'Campus ordering',title:'Order food with calories upfront',text:'Open the campus menu, compare calories and nutrition, then choose delivery, takeaway or dine-in.',target:'#tourOrderButton'},
    {icon:'✦',label:'VIP goal guidance',title:'Open your AI goal analysis',text:'VIP compares your current weight, target and requested timeline, then explains a reasonable starting pace.',target:'#tourAiButton'},
    {icon:'⚡',label:'BMR and profile',title:'See your formula and personal data',text:'Open your profile to review the BMR formula, current status, timeline and selected intensity.',target:'#tourProfileButton'},
    {icon:'👤',label:'Personal account',title:'Open your personal information',text:'Use this button for membership status, your full profile and account controls.',target:'#profileButton'},
    {icon:'💬',label:'VIP AI coach',title:'Ask about food or your goal',text:'Open the AI coach to ask about banana or apple calories, your BMR, or whether your timeline is realistic.',target:'#chatFab'}
  ],
  zh:[
    {icon:'◆',label:'平台系统',title:'切换或管理你的系统',text:'这里会显示你正在使用基础系统还是VIP系统。点击可比较两套系统并进行切换。',target:'#trialButton'},
    {icon:'🥪',label:'校园点餐',title:'查看热量后再点餐',text:'进入校园菜单，比较热量和营养，然后选择外送、外带或堂食。',target:'#tourOrderButton'},
    {icon:'✦',label:'VIP目标建议',title:'打开AI目标分析',text:'VIP会比较当前体重、目标体重和期望期限，并解释合理的起始节奏。',target:'#tourAiButton'},
    {icon:'⚡',label:'BMR与个人资料',title:'查看公式和个人数据',text:'进入个人资料，查看BMR公式、当前状态、目标期限和已选强度。',target:'#tourProfileButton'},
    {icon:'👤',label:'个人账户',title:'打开个人信息',text:'这里可以查看会员状态、完整个人资料以及账户功能。',target:'#profileButton'},
    {icon:'💬',label:'VIP AI教练',title:'询问食物或目标问题',text:'打开AI教练，可以询问香蕉或苹果热量、BMR，或者目标期限是否合理。',target:'#chatFab'}
  ]
};
function positionTour(){
  const item=tours[locale][tourStep], target=$(item.target), card=$('#tourCard'); if(!target||!card) return;
  const rect=target.getBoundingClientRect(), gap=18, margin=12, width=Math.min(390,window.innerWidth-margin*2);
  card.style.width=`${width}px`; card.style.left=`${margin}px`; card.style.top=`${margin}px`;
  const height=card.offsetHeight; let left,top,placement;
  if(rect.right+gap+width<=window.innerWidth-margin){left=rect.right+gap;top=rect.top+rect.height/2-height/2;placement='right';}
  else if(rect.left-gap-width>=margin){left=rect.left-gap-width;top=rect.top+rect.height/2-height/2;placement='left';}
  else if(rect.bottom+gap+height<=window.innerHeight-margin){left=rect.left+rect.width/2-width/2;top=rect.bottom+gap;placement='bottom';}
  else{left=rect.left+rect.width/2-width/2;top=rect.top-gap-height;placement='top';}
  card.style.left=`${Math.max(margin,Math.min(left,window.innerWidth-width-margin))}px`; card.style.top=`${Math.max(margin,Math.min(top,window.innerHeight-height-margin))}px`; card.dataset.placement=placement;
}
function renderTour(){
  const items=tours[locale], item=items[tourStep]; $$('.tour-target').forEach(el=>el.classList.remove('tour-target')); showView('home');
  $('#tourProgress').textContent=`${tourStep+1} / ${items.length}`; $('#tourIcon').textContent=item.icon; $('#tourFeatureLabel').textContent=item.label; $('#tourTitle').textContent=item.title; $('#tourText').textContent=item.text; $('#nextTour').textContent=tourStep===items.length-1?t('Start exploring','开始体验'):t('Next feature','下一个功能'); $('#prevTour').classList.toggle('hidden',tourStep===0);
  const target=$(item.target); if(!target) return; target.classList.add('tour-target'); target.scrollIntoView({behavior:'smooth',block:'center',inline:'center'}); window.setTimeout(positionTour,260);
}
function openTour(){tourStep=0;$('#tourOverlay').classList.remove('hidden');renderTour();}
function closeTour(){ $$('.tour-target').forEach(el=>el.classList.remove('tour-target')); $('#tourOverlay').classList.add('hidden'); if(activeUser&&accounts[activeUser]){accounts[activeUser].tourSeen=true;saveAccounts();} }
$('#nextTour').addEventListener('click',()=>{ const items=tours[locale]; if(tourStep>=items.length-1){closeTour();showView('home');}else{tourStep++;renderTour();} }); $('#prevTour').addEventListener('click',()=>{if(tourStep>0){tourStep--;renderTour();}}); $('#skipTour').addEventListener('click',()=>{closeTour();showView('home');}); $('#restartTour').addEventListener('click',openTour); window.addEventListener('resize',()=>{if(!$('#tourOverlay').classList.contains('hidden'))positionTour();});

function todayKey(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
function calorieTarget(data=profile){if(!data)return 2000;const base=bmrData(data).value*1.35,adjust=data.goal==='fat-loss'?-300:data.goal==='muscle-gain'?250:0;return Math.max(1200,Math.round((base+adjust)/50)*50);}
function simpleTasks(data=profile){
  const sets={
    'fat-loss':locale==='zh'?[['快走或低冲击有氧25分钟','保持可以说话但能感到运动的节奏'],['完成一份均衡餐盘','一半蔬菜、四分之一蛋白质、四分之一主食'],['完成恢复习惯','喝足水，并保证规律睡眠']]:[['25-minute brisk walk','Keep a pace where you can talk but still feel active'],['Build one balanced plate','Half vegetables, one-quarter protein, one-quarter starch'],['Complete a recovery habit','Hydrate well and protect your sleep routine']],
    'muscle-gain':locale==='zh'?[['完成全身力量训练','深蹲、推、拉各3组，保留2次余力'],['达到蛋白质重点餐','每餐加入一掌大小的优质蛋白质'],['完成恢复习惯','训练后补水，今晚保证充足睡眠']]:[['Complete a full-body strength session','Three sets each of squat, push and pull with two reps in reserve'],['Eat a protein-focused meal','Add a palm-sized quality protein serving to each meal'],['Complete a recovery habit','Rehydrate after training and protect tonight’s sleep']],
    maintain:locale==='zh'?[['活动30分钟','快走、骑行或轻量训练均可'],['完成两份蔬果','用不同颜色增加饮食多样性'],['保持日常步行','分散到全天完成，避免久坐']]:[['Move for 30 minutes','Walking, cycling or a light session all count'],['Complete two fruit or vegetable servings','Use different colours for dietary variety'],['Keep daily movement steady','Spread movement through the day and break up sitting']]
  }; return sets[data?.goal]||sets.maintain;
}
function renderPlanTasks(){
  if(!activeUser||!profile||!$('#planTaskList'))return;const account=accounts[activeUser],key=todayKey(),checks=account.planChecks[key]||{},tasks=simpleTasks();
  $('#planTaskList').innerHTML=tasks.map((task,index)=>`<label class="plan-task"><input type="checkbox" data-plan-check="${index}" ${checks[index]?'checked':''}><span class="task-check">✓</span><span><b>${task[0]}</b><small>${task[1]}</small></span></label>`).join('');
  function update(){const done=Object.values(account.planChecks[key]||{}).filter(Boolean).length,pct=Math.round(done/tasks.length*100);$('#planCompletionText').textContent=t(`${done} of ${tasks.length} completed`,`${done}/${tasks.length}项已完成`);$('#planCompletionBar').style.width=`${pct}%`;}
  $$('[data-plan-check]').forEach(input=>input.addEventListener('change',()=>{account.planChecks[key]||={};account.planChecks[key][input.dataset.planCheck]=input.checked;saveAccounts();update();renderProgress();}));update();
}
function renderProgress(){
  if(!activeUser||!profile||!$('#dailyCheckinForm'))return;const account=accounts[activeUser],entries=[...(account.checkins||[])].sort((a,b)=>a.date.localeCompare(b.date)),target=calorieTarget();
  $('#checkinDate').value||=todayKey();$('#checkinWeight').value||=profile.weight;$('#progressCalorieTarget').textContent=target.toLocaleString();$('#progressCurrentWeight').textContent=`${profile.weight} kg`;
  const completed=entries.filter(e=>e.planDone).length,trend=entries.length>1?+(entries.at(-1).weight-entries[0].weight).toFixed(1):0;$('#metricEntries').textContent=entries.length;$('#metricCompleted').textContent=`${completed} / ${entries.length}`;$('#metricWeight').textContent=`${trend>0?'+':''}${trend.toFixed(1)} kg`;$('#metricEntriesBar').style.width=`${Math.min(100,entries.length/7*100)}%`;$('#metricCompletedBar').style.width=`${entries.length?completed/entries.length*100:0}%`;$('#metricWeightBar').style.width=`${Math.min(100,Math.abs(trend)*35)}%`;
  const recent=entries.slice(-7);if(!recent.length){$('#calorieBars').innerHTML=`<p class="empty-state">${t('No entries yet. Save your first day above.','还没有记录，请先保存第一天的数据。')}</p>`;$('#weightChart').innerHTML=$('#calorieBars').innerHTML;$('#dailyLog').innerHTML=$('#calorieBars').innerHTML;}else{
    const maxCal=Math.max(target,...recent.map(e=>e.calories))*1.12;$('#calorieBars').innerHTML=recent.map(e=>`<div class="calorie-day"><div class="calorie-bar ${e.calories>target?'over':''}" style="height:${Math.max(4,e.calories/maxCal*100)}%"><b>${e.calories}</b></div><small>${e.date.slice(5).replace('-','/')}</small></div>`).join('');
    const weights=recent.map(e=>+e.weight),min=Math.min(...weights)-.5,max=Math.max(...weights)+.5,w=520,h=260,pad=34,points=recent.map((e,i)=>{const x=pad+(recent.length===1?(w-pad*2)/2:i/(recent.length-1)*(w-pad*2)),y=pad+(max-e.weight)/(max-min)*(h-pad*2);return{x,y,e};});const line=points.map(p=>`${p.x},${p.y}`).join(' '),area=`M ${points[0].x} ${h-pad} L ${points.map(p=>`${p.x} ${p.y}`).join(' L ')} L ${points.at(-1).x} ${h-pad} Z`;$('#weightChart').innerHTML=`<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Weight trend">${[0,1,2,3].map(i=>`<line class="grid-line" x1="${pad}" y1="${pad+i*(h-pad*2)/3}" x2="${w-pad}" y2="${pad+i*(h-pad*2)/3}"/>`).join('')}<path class="weight-area" d="${area}"/><polyline class="weight-line" points="${line}"/>${points.map(p=>`<circle cx="${p.x}" cy="${p.y}" r="5"/><text x="${p.x}" y="${p.y-12}" text-anchor="middle">${p.e.weight}kg</text><text x="${p.x}" y="${h-10}" text-anchor="middle">${p.e.date.slice(5)}</text>`).join('')}</svg>`;
    $('#dailyLog').innerHTML=[...entries].reverse().map(e=>`<div class="daily-row"><b>${e.date}</b><span><small>${t('Calories','热量')}</small><br>${e.calories} kcal</span><span><small>${t('Weight','体重')}</small><br>${e.weight} kg</span><strong class="${e.planDone?'done':''}">${e.planDone?t('Plan completed','计划已完成'):t('Not marked complete','未标记完成')}</strong><button data-delete-checkin="${e.date}">${t('Delete','删除')}</button></div>`).join('');$$('[data-delete-checkin]').forEach(button=>button.addEventListener('click',()=>{account.checkins=account.checkins.filter(e=>e.date!==button.dataset.deleteCheckin);saveAccounts();renderProgress();}));
  }
  const label=isVip()?t('VIP TREND ANALYSIS','VIP趋势分析'):t('BASIC TREND SUMMARY','基础趋势总结');$('#progressInsightLabel').textContent=label;if(!entries.length){$('#progressInsightTitle').textContent=t('Add your first check-in to begin','添加第一条记录即可开始');$('#progressInsightText').textContent=t('After several entries, the system will compare calorie consistency, completion and weight direction.','记录数天后，系统会比较热量稳定性、完成情况和体重方向。');}else{$('#progressInsightTitle').textContent=t(`${completed} completed plan day${completed===1?'':'s'} across ${entries.length} entries`,`${entries.length}天中有${completed}天完成计划`);$('#progressInsightText').textContent=isVip()?t(`Your average intake is ${Math.round(entries.reduce((s,e)=>s+e.calories,0)/entries.length)} kcal. The coach will use consistency and weight direction together, not a single day.`,`平均摄入为${Math.round(entries.reduce((s,e)=>s+e.calories,0)/entries.length)}千卡。教练会结合稳定性与体重方向，不会只看某一天。`):t('Basic tracking shows your recorded trend. VIP adds adaptive interpretation and coaching adjustments.','基础版显示真实记录趋势；VIP会进一步提供动态解释和教练调整。');}
  $('#progressInsightButton').style.display=isVip()?'none':'block';
}
$('#dailyCheckinForm').addEventListener('submit',event=>{event.preventDefault();const account=accounts[activeUser],entry={date:$('#checkinDate').value,calories:+$('#checkinCalories').value,weight:+$('#checkinWeight').value,planDone:$('#checkinPlanDone').checked};account.checkins||=[];const index=account.checkins.findIndex(e=>e.date===entry.date);if(index>=0)account.checkins[index]=entry;else account.checkins.push(entry);saveAccounts();$('#checkinMessage').textContent=t('Saved. Your charts have been updated.','已保存，图表已经更新。');renderProgress();});

let audioContext=null,musicGain=null,musicOscillators=[];
function stopMusic(){musicOscillators.forEach(node=>{try{node.stop();}catch{}});musicOscillators=[];if(musicGain){try{musicGain.disconnect();}catch{}};musicGain=null;if($('#musicToggle'))$('#musicToggle').textContent=t('Play','播放');}
function startMusic(){if(!isVip()){openModal('subscriptionModal');return;}stopMusic();audioContext ||= new (window.AudioContext||window.webkitAudioContext)();const settings=accounts[activeUser].settings,track=settings.musicTrack||'focus',sets={focus:[174.61,261.63,349.23],calm:[146.83,220,293.66],energy:[196,293.66,392]},frequencies=sets[track]||sets.focus;musicGain=audioContext.createGain();musicGain.gain.value=(settings.musicVolume||24)/100*.08;musicGain.connect(audioContext.destination);frequencies.forEach((frequency,index)=>{const oscillator=audioContext.createOscillator(),gain=audioContext.createGain();oscillator.type=index===0?'sine':'triangle';oscillator.frequency.value=frequency;gain.gain.value=index===0?.5:.22;oscillator.connect(gain);gain.connect(musicGain);oscillator.start();musicOscillators.push(oscillator);});$('#musicToggle').textContent=t('Pause','暂停');}
function applyUserSettings(){if(!activeUser)return;const account=accounts[activeUser];account.settings ||= {theme:'royal',reducedMotion:false,musicTrack:'focus',musicVolume:24};document.body.dataset.theme=isVip()?(account.settings.theme||'royal'):'';document.body.classList.toggle('reduced-motion',!!account.settings.reducedMotion);}
function renderSettings(){if(!activeUser||!$('#settingsLanguage'))return;const settings=accounts[activeUser].settings;$('#settingsLanguage').value=locale;$('#reducedMotionToggle').checked=!!settings.reducedMotion;$('#musicTrack').value=settings.musicTrack||'focus';$('#musicVolume').value=settings.musicVolume??24;$$('[data-theme]').forEach(button=>button.classList.toggle('active',button.dataset.theme===(settings.theme||'royal')));}
$('#settingsLanguage').addEventListener('change',event=>setLocale(event.target.value));$('#reducedMotionToggle').addEventListener('change',event=>{accounts[activeUser].settings.reducedMotion=event.target.checked;saveAccounts();applyUserSettings();});$$('[data-theme]').forEach(button=>button.addEventListener('click',()=>{if(!isVip()){openModal('subscriptionModal');return;}accounts[activeUser].settings.theme=button.dataset.theme;saveAccounts();applyUserSettings();renderSettings();}));$('#musicToggle').addEventListener('click',()=>{musicOscillators.length?stopMusic():startMusic();});$('#musicTrack').addEventListener('change',event=>{accounts[activeUser].settings.musicTrack=event.target.value;saveAccounts();if(musicOscillators.length)startMusic();});$('#musicVolume').addEventListener('input',event=>{accounts[activeUser].settings.musicVolume=+event.target.value;saveAccounts();if(musicGain)musicGain.gain.value=+event.target.value/100*.08;});


function logOut(){stopMusic();activeUser=null;profile=null;closeModals();$('#chatPanel').classList.remove('open');showAuth('login');}
$('#signOutButton').addEventListener('click',logOut); $('#modalLogout').addEventListener('click',logOut); $('#editProfileButton').addEventListener('click',()=>openOnboarding(true));

function renderMenu(){
  const q=$('#menuSearch').value.toLowerCase(); const items=menu.filter(item=>(filter==='all'||item.tags.includes(filter))&&(`${item.name} ${item.nameZh} ${item.desc} ${item.descZh}`.toLowerCase().includes(q)));
  $('#menuCount').textContent=t(`${items.length} meals`,`${items.length}款餐点`);
  $('#menuGrid').innerHTML=items.map(item=>{const name=locale==='zh'?item.nameZh:item.name,desc=locale==='zh'?item.descZh:item.desc,badge=locale==='zh'?item.badgeZh:item.badge;return `<article class="menu-item"><div class="food-illustration tone-${item.tone}"><span>${item.emoji}</span></div><div class="menu-content"><div class="item-head"><h3>${name}</h3><span class="item-price">${money(item.price)}</span></div><p>${desc}</p><div class="nutrition"><span><b>${item.cal}</b>kcal</span><span><b>${item.protein}g</b>${t('protein','蛋白质')}</span><span><b>${item.carbs}g</b>${t('carbs','碳水')}</span></div><div class="menu-footer"><span class="goal-badge">${badge}</span><button class="add-btn" data-add="${item.id}" aria-label="Add ${name}">+</button></div></div></article>`;}).join('')||`<p>${t('No meals match your search.','没有符合条件的餐点。')}</p>`;
  $$('[data-add]').forEach(button=>button.addEventListener('click',()=>{const id=+button.dataset.add;cart[id]=(cart[id]||0)+1;renderCart();}));
}
$('#menuSearch').addEventListener('input',renderMenu); $$('#categoryChips button').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter;$$('#categoryChips button').forEach(x=>x.classList.toggle('active',x===button));renderMenu();}));
function renderCart(){
  const entries=Object.entries(cart).filter(([,quantity])=>quantity>0),count=entries.reduce((sum,[,quantity])=>sum+quantity,0); $('#cartCount').textContent=count; $('#cartEmpty').classList.toggle('hidden',!!count); $('#fulfilment').classList.toggle('hidden',!count); $('#cartSummary').classList.toggle('hidden',!count);
  $('#cartItems').innerHTML=entries.map(([id,quantity])=>{const item=menu.find(x=>x.id==id),name=locale==='zh'?item.nameZh:item.name;return `<div class="cart-line"><b>${name}</b><b>${money(item.price*quantity)}</b><small>${item.cal*quantity} kcal</small><div class="qty"><button data-dec="${id}">−</button><span>${quantity}</span><button data-inc="${id}">+</button><button class="remove" data-remove="${id}">${t('Remove','移除')}</button></div></div>`;}).join('');
  const subtotal=entries.reduce((sum,[id,quantity])=>sum+menu.find(item=>item.id==id).price*quantity,0),fee=count?(mode==='delivery'?2.5:mode==='dinein'?1:0):0; $('#subtotal').textContent=money(subtotal);$('#fee').textContent=money(fee);$('#total').textContent=money(subtotal+fee);
  $$('[data-inc]').forEach(button=>button.onclick=()=>{cart[button.dataset.inc]++;renderCart();}); $$('[data-dec]').forEach(button=>button.onclick=()=>{cart[button.dataset.dec]--;renderCart();}); $$('[data-remove]').forEach(button=>button.onclick=()=>{delete cart[button.dataset.remove];renderCart();});
}
$$('#fulfilment button').forEach(button=>button.addEventListener('click',()=>{mode=button.dataset.mode;$$('#fulfilment button').forEach(x=>x.classList.toggle('active',x===button));renderCart();}));

function openModal(id){$('#modalBackdrop').classList.add('open');$('#'+id).classList.add('open');}
function closeModals(){$('#modalBackdrop').classList.remove('open');$$('.modal').forEach(modal=>modal.classList.remove('open'));}
$$('[data-close]').forEach(button=>button.addEventListener('click',closeModals)); $('#modalBackdrop').addEventListener('click',closeModals);
$('#checkoutButton').addEventListener('click',()=>{const count=Object.values(cart).reduce((a,b)=>a+b,0);$('#payItems').textContent=t(`${count} item${count===1?'':'s'}`,`${count}件商品`);$('#payMode').textContent=({delivery:t('Delivery','外送'),pickup:t('Takeaway','外带'),dinein:t('Dine in','堂食')})[mode];$('#payTotal').textContent=$('#total').textContent;openModal('paymentModal');});
$('#payButton').addEventListener('click',()=>{$('#paymentModal').classList.remove('open');$('#successModal').classList.add('open');cart={};renderCart();});
['trialButton','profileSubscribe','homeMembershipButton','planUpgradeButton','vipDetailButton','progressInsightButton'].forEach(id=>$('#'+id)?.addEventListener('click',()=>openModal('subscriptionModal')));$$('[data-settings-upgrade]').forEach(button=>button.addEventListener('click',()=>openModal('subscriptionModal')));$('#profileButton').addEventListener('click',()=>openModal('profileModal'));$('#openSubscription').addEventListener('click',()=>{$('#profileModal').classList.remove('open');$('#subscriptionModal').classList.add('open');});$('#openFullProfile').addEventListener('click',()=>{closeModals();showView('profile');});$('#openSettings').addEventListener('click',()=>{closeModals();showView('settings');});
$('#useFreeButton').addEventListener('click',()=>setPlan('free'));$('#subscribeButton').addEventListener('click',()=>setPlan('vip-trial'));$('#stayBasicButton').addEventListener('click',()=>{accounts[activeUser].vipOfferSeen=true;setPlan('free');if(!accounts[activeUser].tourSeen)openTour();});$('#startTrialButton').addEventListener('click',()=>{accounts[activeUser].vipOfferSeen=true;setPlan('vip-trial');if(!accounts[activeUser].tourSeen)openTour();});

function renderChatIntro(){
  if(!$('#chatBody')) return;
  const status=$('[data-i18n="vipCoachOnline"]');if(status)status.textContent=isVip()?t('VIP coach online','VIP教练在线'):t('Basic assistant online','基础助手在线');
  $('#chatBody').innerHTML=`<div class="message ai">${isVip()?t('Your VIP coach can use your profile, goal and progress records for more detailed guidance. Ask about food, calories, your body data, today’s plan or your progress trend.','VIP教练可以结合你的资料、目标和进度记录提供更详细建议。你可以询问食物、热量、身体数据、今日计划或进度趋势。'):t('The Basic assistant can answer common food calories, read your saved body data and explain your simple plan. VIP adds deeper coaching and adaptive analysis.','基础助手可以回答常见食物热量、读取你的身体资料并解释简单计划；VIP会增加更深入的教练分析。')}</div><div class="quick-prompts"><button>${t('How tall am I and what is my BMR?','我多高，我的BMR是多少？')}</button><button>${t('How many calories are in braised pork rice?','卤肉饭有多少千卡？')}</button><button>${t('What should I complete today?','我今天要完成什么？')}</button></div>`;
  $$('.quick-prompts button').forEach(button=>button.addEventListener('click',()=>sendChat(button.textContent)));
}
$('#chatFab').addEventListener('click',()=>{$('#chatPanel').classList.add('open');$('#chatFab').classList.add('hidden');}); $('#closeChat').addEventListener('click',()=>{$('#chatPanel').classList.remove('open');$('#chatFab').classList.remove('hidden');});
function foodAnswer(food){const label=locale==='zh'?food.labelZh:food.label;return locale==='zh'?`<b>${clean(label)}</b>约含<b>${food.cal}千卡</b>、${food.protein}克蛋白质、${food.carbs}克碳水、${food.fat}克脂肪和${food.fibre}克膳食纤维。数值会因大小和制作方式变化。`:`<b>${clean(label)}</b> has about <b>${food.cal} kcal</b>, ${food.protein} g protein, ${food.carbs} g carbs, ${food.fat} g fat and ${food.fibre} g fibre. Size and preparation change the result.`;}
function aiReply(text){
  const lower=text.toLowerCase(),found=Object.values(foods).filter(food=>food.keys.some(key=>lower.includes(key)));
  if(found.length>=2) return locale==='zh'?`${foodAnswer(found[0])}<br>${foodAnswer(found[1])}<br>两者都可以纳入均衡饮食，请结合份量和饱腹感选择。`:`${foodAnswer(found[0])}<br>${foodAnswer(found[1])}<br>Both can fit a balanced day; choose by portion and hunger.`;
  if(found.length===1) return foodAnswer(found[0]);
  if(/how tall|height|多高|身高/.test(lower)&&profile)return t(`Your saved height is <b>${profile.height} cm</b>. You can change it from Profile, then Edit profile.`,`你保存的身高是<b>${profile.height}厘米</b>，可在个人资料中点击“编辑资料”修改。`);
  if(/how much.*weigh|my weight|多重|体重/.test(lower)&&profile)return t(`Your saved current weight is <b>${profile.weight} kg</b>${profile.goal==='maintain'?'.':`, and your target is <b>${profile.targetWeight} kg</b>`}.`,`你保存的当前体重是<b>${profile.weight}公斤</b>${profile.goal==='maintain'?'。':`，目标体重是<b>${profile.targetWeight}公斤</b>。`}`);
  if(/how old|my age|年龄|多少岁/.test(lower)&&profile)return t(`Your saved age is <b>${profile.age}</b>. Age is used only in the BMR estimate.`,`你保存的年龄是<b>${profile.age}岁</b>，年龄只用于BMR估算。`);
  if(/goal|timeline|目标|期限/.test(lower)&&profile){const a=goalAnalysis(profile);return t(`Your goal is <b>${goalName(profile.goal)}</b> and your requested timeline is ${timelineName(profile.timeline)}. A general suggested range is <b>${a.min}-${a.max} weeks</b>. ${isVip()?'I would review calorie consistency, completion and weight trend every week before adjusting.':'Basic guidance keeps the pace simple; VIP adds adaptive review from your records.'}`,`你的目标是<b>${goalName(profile.goal)}</b>，期望期限为${timelineName(profile.timeline)}。一般建议范围是<b>${a.min}-${a.max}周</b>。${isVip()?'我会每周结合热量稳定性、完成率和体重趋势再决定是否调整。':'基础版提供简单节奏；VIP会结合记录进行动态复盘。'}`);}
  if(/bmr|基础代谢/.test(lower)&&profile){const b=bmrData(profile);return t(`Your estimated BMR is <b>${b.value} kcal/day</b> using ${b.formula}. This is resting energy, not a complete daily calorie prescription.`,`你的估算BMR是<b>${b.value}千卡/天</b>，公式为${b.formula}。这是静息能量，不是完整的每日热量处方。`);}
  if(/calorie target|calories.*eat|daily calories|每日热量|摄入多少|吃多少/.test(lower)&&profile)return t(`A general starting estimate is <b>${calorieTarget()} kcal/day</b>, based on your BMR and goal. Treat it as a reference, not a medical prescription, and use your Progress page to compare real results.`,`根据你的BMR和目标，一般起步参考约为<b>${calorieTarget()}千卡/天</b>。这不是医疗处方，请在进度页结合真实结果观察。`);
  if(/today|plan|workout|今天|计划|训练/.test(lower)&&profile){const tasks=simpleTasks();return t(`Today’s plan:<br>• ${tasks[0][0]}<br>• ${tasks[1][0]}<br>• ${tasks[2][0]}<br>Open AI Goal Plan to check them off.`,`今天的计划：<br>• ${tasks[0][0]}<br>• ${tasks[1][0]}<br>• ${tasks[2][0]}<br>进入“AI目标计划”即可逐项打卡。`);}
  if(/progress|trend|进度|趋势/.test(lower)&&activeUser){const entries=accounts[activeUser].checkins||[];if(!entries.length)return t('You have not saved a daily check-in yet. Open Progress and record calories, weight and whether you completed the plan.','你还没有保存每日记录。请进入“进度”，填写热量、体重和是否完成计划。');const done=entries.filter(e=>e.planDone).length;return t(`You have <b>${entries.length}</b> recorded day(s), with the plan completed on <b>${done}</b>. Open Progress for calorie bars and the weight line chart.`,`你已经记录<b>${entries.length}</b>天，其中<b>${done}</b>天完成计划。进入“进度”可查看热量柱状图和体重折线图。`);}
  if(/calorie|kcal|千卡|热量/.test(lower))return t('I do not have a reliable match for that food yet. Tell me the dish name, serving size and main ingredients—for example “one bowl of rice with 100 g pork”—so I can give a safer estimate.','我暂时没有可靠匹配。请告诉我菜名、份量和主要食材，例如“一碗饭加100克猪肉”，这样才能给出更安全的估算。');
  return t('I can answer about your saved height, weight, age, BMR, target, today’s plan, progress records, or common food calories such as sandwiches, braised pork rice, nasi lemak and chicken rice.','你可以询问已保存的身高、体重、年龄、BMR、目标、今日计划、进度记录，或三明治、卤肉饭、椰浆饭、鸡饭等常见食物热量。');
}
async function sendChat(text){if(!text.trim())return;$('#chatBody').insertAdjacentHTML('beforeend',`<div class="message user">${clean(text)}</div>`);let answer='';const endpoint=window.HEALTHFIT_AI_ENDPOINT;if(isVip()&&endpoint){try{const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:text,locale,profile,progress:accounts[activeUser].checkins||[]})});if(response.ok){const data=await response.json();answer=clean(data.answer||data.output||'');}}catch{answer='';}}answer ||= aiReply(text);$('#chatBody').insertAdjacentHTML('beforeend',`<div class="message ai">${answer}</div>`);$('#chatBody').scrollTop=$('#chatBody').scrollHeight;}
$('#chatForm').addEventListener('submit',event=>{event.preventDefault();const value=$('#chatInput').value;$('#chatInput').value='';sendChat(value);});

captureEnglish(); setLocale(locale); renderMenu(); renderCart(); showAuth(location.hash==='#login'?'login':'register'); updateBmrPreview(); updateGoalAdvice(); updateReview();
