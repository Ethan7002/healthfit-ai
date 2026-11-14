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
  chicken:{keys:["chicken breast","鸡胸肉"],label:"100 g cooked skinless chicken breast",labelZh:"100克熟的去皮鸡胸肉",cal:165,protein:31,carbs:0,fat:3.6,fibre:0}
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
  accounts[name]={password,profile:null,tourSeen:false,plan:'vip-trial',trialStarted:new Date().toISOString(),createdAt:new Date().toISOString()};
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
$('#onboardingForm').addEventListener('submit',event=>{ event.preventDefault(); profile=draftProfile(); accounts[activeUser].profile=profile; accounts[activeUser].plan ||= 'vip-trial'; accounts[activeUser].trialStarted ||= new Date().toISOString(); saveAccounts(); enterApp(!editingProfile&&!accounts[activeUser].tourSeen); });

function isVip(){ return activeUser && accounts[activeUser]?.plan!=='free'; }
function setPlan(plan){ if(!activeUser) return; accounts[activeUser].plan=plan; if(plan==='vip-trial') accounts[activeUser].trialStarted ||= new Date().toISOString(); saveAccounts(); applyPlanMode(); closeModals(); }
function trialDaysLeft(){ if(!activeUser) return 7; const start=new Date(accounts[activeUser].trialStarted||Date.now()); return Math.max(0,7-Math.floor((Date.now()-start)/86400000)); }
function applyPlanMode(){
  if(!activeUser) return;
  const vip=isVip(); document.body.classList.toggle('vip-mode',vip); document.body.classList.toggle('free-mode',!vip);
  $('#planBadge').textContent=vip?'VIP TRIAL':'FREE'; $('#planDays').textContent=vip?t(`${trialDaysLeft()} days left`,`${trialDaysLeft()}天剩余`):t('Essentials only','基础功能');
  $('#profilePlanLabel').textContent=vip?'VIP TRIAL':'FREE'; $('#profilePlanTitle').textContent=vip?t(`${trialDaysLeft()} days free`,`${trialDaysLeft()}天免费`):t('Everyday essentials','日常基础功能');
  $('#profilePlanText').textContent=vip?t('AI guidance, progress reports and unlimited chat.','AI建议、进度报告和无限聊天。'):t('BMR, meal calories and campus ordering.','BMR、餐点热量和校园点餐。');
  $('#profileModalPlan').textContent=vip?t('VIP trial →','VIP试用 →'):t('Free →','普通版 →');
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
function showView(name){ $$('.view').forEach(view=>view.classList.remove('active')); const next=$(`#${name}View`); if(next) next.classList.add('active'); $$('.nav-link').forEach(link=>link.classList.toggle('active',link.dataset.go===name)); window.scrollTo({top:0,behavior:'smooth'}); }
$$('[data-go]').forEach(el=>el.addEventListener('click',()=>showView(el.dataset.go)));
$$('.feature-card').forEach(el=>el.addEventListener('keydown',event=>{if(event.key==='Enter')showView(el.dataset.go);}));

const tours={en:[['👋','Welcome to HealthfitAI','Free essentials and VIP intelligence now have clearly different experiences.','home'],['⚡','Know your BMR','Your formula and resting-energy estimate stay visible in your profile.','profile'],['✦','Use VIP AI guidance','VIP compares your target and timeline, then explains an appropriate starting intensity.','fitness'],['🥪','Order with calories upfront','Browse Subway calories, choose delivery, takeaway or dine-in, then use demo checkout.','food']],zh:[['👋','欢迎使用 HealthfitAI','普通版和VIP版现在拥有明显不同的界面和功能。','home'],['⚡','了解你的BMR','公式和静息能量估算会保存在个人资料中。','profile'],['✦','使用VIP AI建议','VIP会比较目标与期限，并说明合适的起始强度。','fitness'],['🥪','看清热量再点餐','浏览Subway热量，选择外送、外带或堂食，再使用模拟结账。','food']]};
function renderTour(){ const items=tours[locale], item=items[tourStep]; $('#tourProgress').textContent=`${tourStep+1} / ${items.length}`; $('#tourIcon').textContent=item[0]; $('#tourTitle').textContent=item[1]; $('#tourText').textContent=item[2]; $('#nextTour').innerHTML=tourStep===items.length-1?t('Start exploring <span>→</span>','开始体验 <span>→</span>'):t('Next <span>→</span>','下一步 <span>→</span>'); showView(item[3]); }
function openTour(){tourStep=0;$('#tourOverlay').classList.remove('hidden');renderTour();}
function closeTour(){ $('#tourOverlay').classList.add('hidden'); if(activeUser&&accounts[activeUser]){accounts[activeUser].tourSeen=true;saveAccounts();} }
$('#nextTour').addEventListener('click',()=>{ const items=tours[locale]; if(tourStep>=items.length-1){closeTour();showView('home');}else{tourStep++;renderTour();} }); $('#skipTour').addEventListener('click',()=>{closeTour();showView('home');}); $('#restartTour').addEventListener('click',openTour);

function logOut(){activeUser=null;profile=null;closeModals();$('#chatPanel').classList.remove('open');showAuth('login');}
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
['trialButton','comparePlans','profileSubscribe'].forEach(id=>$('#'+id).addEventListener('click',()=>openModal('subscriptionModal'))); $('#profileButton').addEventListener('click',()=>openModal('profileModal')); $('#openSubscription').addEventListener('click',()=>{$('#profileModal').classList.remove('open');$('#subscriptionModal').classList.add('open');}); $('#openFullProfile').addEventListener('click',()=>{closeModals();showView('profile');});
$('#useFreeButton').addEventListener('click',()=>setPlan('free')); $('#previewFree').addEventListener('click',()=>setPlan('free')); $('#subscribeButton').addEventListener('click',()=>setPlan('vip-trial')); $('#activateVip').addEventListener('click',()=>setPlan('vip-trial')); $$('.unlock-vip').forEach(button=>button.addEventListener('click',()=>openModal('subscriptionModal')));

function renderChatIntro(){
  if(!$('#chatBody')) return;
  $('#chatBody').innerHTML=`<div class="message ai">${t('VIP coach is ready. Ask about a food calorie, compare an apple and banana, or ask whether your goal timeline is realistic.','VIP教练已准备好。你可以询问食物热量、比较苹果和香蕉，或询问目标期限是否合理。')}</div><div class="quick-prompts"><button>${t('How many calories are in a banana?','一根香蕉有多少热量？')}</button><button>${t('Compare an apple and a banana','比较苹果和香蕉')}</button><button>${t('Is my goal timeline realistic?','我的目标期限合理吗？')}</button></div>`;
  $$('.quick-prompts button').forEach(button=>button.addEventListener('click',()=>sendChat(button.textContent)));
}
$('#chatFab').addEventListener('click',()=>{if(!isVip()){openModal('subscriptionModal');return;}$('#chatPanel').classList.add('open');$('#chatFab').classList.add('hidden');}); $('#closeChat').addEventListener('click',()=>{$('#chatPanel').classList.remove('open');$('#chatFab').classList.remove('hidden');});
function foodAnswer(food){const label=locale==='zh'?food.labelZh:food.label;return locale==='zh'?`<b>${clean(label)}</b>约含<b>${food.cal}千卡</b>、${food.protein}克蛋白质、${food.carbs}克碳水、${food.fat}克脂肪和${food.fibre}克膳食纤维。数值会因大小和制作方式变化。`:`<b>${clean(label)}</b> has about <b>${food.cal} kcal</b>, ${food.protein} g protein, ${food.carbs} g carbs, ${food.fat} g fat and ${food.fibre} g fibre. Size and preparation change the result.`;}
function aiReply(text){
  const lower=text.toLowerCase(),found=Object.values(foods).filter(food=>food.keys.some(key=>lower.includes(key)));
  if(found.length>=2) return locale==='zh'?`${foodAnswer(found[0])}<br>${foodAnswer(found[1])}<br>两者都可以纳入均衡饮食，请结合份量和饱腹感选择。`:`${foodAnswer(found[0])}<br>${foodAnswer(found[1])}<br>Both can fit a balanced day; choose by portion and hunger.`;
  if(found.length===1) return foodAnswer(found[0]);
  if(/goal|timeline|目标|期限/.test(lower)&&profile){const a=goalAnalysis(profile);return t(`Your requested timeline is ${timelineName(profile.timeline)}. A general suggested range is <b>${a.min}-${a.max} weeks</b>. Do not increase intensity just to force a shorter deadline.`,`你的期望期限是${timelineName(profile.timeline)}，一般建议范围为<b>${a.min}-${a.max}周</b>。不要只为缩短期限而盲目增加强度。`);}
  if(/bmr|基础代谢/.test(lower)&&profile){const b=bmrData(profile);return t(`Your estimated BMR is <b>${b.value} kcal/day</b> using ${b.formula}. This is resting energy, not a complete daily calorie prescription.`,`你的估算BMR是<b>${b.value}千卡/天</b>，公式为${b.formula}。这是静息能量，不是完整的每日热量处方。`);}
  return t('Ask me about banana or apple calories, your BMR, or whether your goal timeline is realistic.','你可以询问香蕉或苹果热量、BMR，或目标期限是否合理。');
}
function sendChat(text){if(!text.trim())return;$('#chatBody').insertAdjacentHTML('beforeend',`<div class="message user">${clean(text)}</div><div class="message ai">${aiReply(text)}</div>`);$('#chatBody').scrollTop=$('#chatBody').scrollHeight;}
$('#chatForm').addEventListener('submit',event=>{event.preventDefault();sendChat($('#chatInput').value);$('#chatInput').value='';});

captureEnglish(); setLocale(locale); renderMenu(); renderCart(); showAuth(location.hash==='#login'?'login':'register'); updateBmrPreview(); updateGoalAdvice(); updateReview();
