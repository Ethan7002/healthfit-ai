const menu = [
  {id:1,name:"Sweet Onion Chicken Teriyaki",desc:"Teriyaki chicken, crisp vegetables and sweet onion flavour on a standard 6-inch sub.",price:14.9,cal:450,protein:30,carbs:53,tags:["high-protein","lighter"],badge:"High protein",emoji:"🥪",tone:1},
  {id:2,name:"Steak & Cheese",desc:"Steak, cheese and fresh vegetables for a satisfying post-workout lunch.",price:17.9,cal:500,protein:29,carbs:39,tags:["high-protein"],badge:"Post-workout",emoji:"🥖",tone:2},
  {id:3,name:"Tuna",desc:"Creamy tuna with vegetables. Rich and filling, with a higher standard-recipe calorie count.",price:15.9,cal:470,protein:20,carbs:40,tags:["lighter"],badge:"Filling",emoji:"🥪",tone:3},
  {id:4,name:"Veggie Delite",desc:"A crisp mix of fresh vegetables with sauces customised to your taste.",price:9.9,cal:220,protein:10,carbs:40,tags:["lighter","vegetarian"],badge:"Light choice",emoji:"🥬",tone:5},
  {id:5,name:"Oven Roasted Chicken",desc:"A simple, balanced combination of roasted chicken breast and vegetables.",price:14.5,cal:280,protein:21,carbs:41,tags:["high-protein","lighter"],badge:"AI pick",emoji:"🥪",tone:4},
  {id:6,name:"Meatball Marinara",desc:"Meatballs and tomato sauce for days when you need a little more energy.",price:16.5,cal:460,protein:20,carbs:54,tags:["lighter"],badge:"Popular classic",emoji:"🥖",tone:6}
];

const foods = {
  banana:{label:"one medium banana (about 118 g)",cal:105,protein:1.3,carbs:27,fat:.4,fibre:3.1,note:"useful before training because it is easy to digest and carbohydrate-rich"},
  apple:{label:"one medium apple with skin (about 182 g)",cal:95,protein:.5,carbs:25,fat:.3,fibre:4.4,note:"higher in fibre per serving and often more filling for fewer calories"},
  egg:{label:"one large egg",cal:72,protein:6.3,carbs:.4,fat:4.8,fibre:0,note:"a compact protein source"},
  orange:{label:"one medium orange",cal:62,protein:1.2,carbs:15.4,fat:.2,fibre:3.1,note:"a hydrating fruit with vitamin C"},
  rice:{label:"one cup of cooked white rice",cal:205,protein:4.3,carbs:44.5,fat:.4,fibre:.6,note:"a practical carbohydrate base; portion size changes calories quickly"},
  avocado:{label:"one half of a medium avocado",cal:120,protein:1.5,carbs:6,fat:11,fibre:5,note:"rich in unsaturated fat, so it is nutritious but energy-dense"},
  "chicken breast":{label:"100 g cooked skinless chicken breast",cal:165,protein:31,carbs:0,fat:3.6,fibre:0,note:"a high-protein, relatively lean option"}
};

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const money = n => `RM ${n.toFixed(2)}`;
const clean = value => String(value ?? "").replace(/[<>&"']/g, c => ({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;"}[c]));
const ACCOUNT_KEY = "healthfit-accounts-v2";
let accounts = JSON.parse(localStorage.getItem(ACCOUNT_KEY) || "{}");
let activeUser = null;
let profile = null;
let editingProfile = false;
let onboardingStep = 1;
let tourStep = 0;
let cart = {};
let filter = "all";
let mode = "delivery";

function saveAccounts(){ localStorage.setItem(ACCOUNT_KEY, JSON.stringify(accounts)); }
function showAuth(type="register"){
  $("#authScreen").classList.remove("hidden");
  $("#onboardingScreen").classList.add("hidden");
  $("#app").classList.add("hidden");
  $("#registerForm").classList.toggle("hidden", type !== "register");
  $("#loginForm").classList.toggle("hidden", type !== "login");
  location.hash = type === "login" ? "login" : "register";
}

$$('[data-auth]').forEach(button => button.addEventListener('click', () => showAuth(button.dataset.auth)));
$$('[data-eye]').forEach(button => button.addEventListener('click', () => {
  const input = $('#' + button.dataset.eye);
  input.type = input.type === 'password' ? 'text' : 'password';
  button.setAttribute('aria-label', input.type === 'password' ? 'Show password' : 'Hide password');
}));

$('#registerForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = $('#username').value.trim();
  const password = $('#password').value;
  const confirmPassword = $('#confirmPassword').value;
  if(accounts[name]) return $('#formError').textContent = 'That username already exists in this browser. Please log in or choose another name.';
  if(password !== confirmPassword) return $('#formError').textContent = 'The passwords do not match. Please try again.';
  $('#formError').textContent = '';
  accounts[name] = {password, profile:null, tourSeen:false, createdAt:new Date().toISOString()};
  activeUser = name;
  saveAccounts();
  openOnboarding(false);
});

$('#loginForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = $('#loginUsername').value.trim();
  const password = $('#loginPassword').value;
  if(!accounts[name] || accounts[name].password !== password){
    $('#loginError').textContent = 'Username or password is incorrect. Accounts are browser-specific.';
    return;
  }
  $('#loginError').textContent = '';
  activeUser = name;
  if(accounts[name].profile){ profile = accounts[name].profile; enterApp(false); }
  else openOnboarding(false);
});

function setOnboardingStep(step){
  onboardingStep = step;
  $$('.onboarding-step').forEach(el => el.classList.toggle('active', +el.dataset.step === step));
  $$('#onboardingProgress li').forEach((el, index) => el.classList.toggle('active', index + 1 <= step));
  $('#onboardBack').classList.toggle('hidden', step === 1);
  $('#onboardNext').classList.toggle('hidden', step === 3);
  $('#onboardFinish').classList.toggle('hidden', step !== 3);
}

function fillOnboarding(data){
  if(!data) return;
  const map = {onboardAge:'age',onboardGender:'gender',onboardHeight:'height',onboardWeight:'weight',onboardActivity:'activity',onboardTargetWeight:'targetWeight',onboardDays:'days',onboardFitness:'fitnessLevel',onboardIntensity:'intensity',onboardDuration:'duration',onboardDiet:'diet',onboardLimitations:'limitations',onboardAvoid:'avoid'};
  Object.entries(map).forEach(([id,key]) => { if(data[key] !== undefined) $('#'+id).value = data[key]; });
  const goal = document.querySelector(`input[name="onboardGoal"][value="${data.goal}"]`);
  if(goal) goal.checked = true;
}

function openOnboarding(isEdit){
  editingProfile = isEdit;
  $('#authScreen').classList.add('hidden');
  $('#app').classList.add('hidden');
  $('#onboardingScreen').classList.remove('hidden');
  fillOnboarding(isEdit ? profile : null);
  setOnboardingStep(1);
  window.scrollTo(0,0);
}

$('#onboardNext').addEventListener('click', () => {
  const current = $(`.onboarding-step[data-step="${onboardingStep}"]`);
  const invalid = [...current.querySelectorAll('input,select')].find(el => !el.checkValidity());
  if(invalid){ invalid.reportValidity(); return; }
  setOnboardingStep(Math.min(3, onboardingStep + 1));
});
$('#onboardBack').addEventListener('click', () => setOnboardingStep(Math.max(1, onboardingStep - 1)));

$('#onboardingForm').addEventListener('submit', event => {
  event.preventDefault();
  profile = {
    age:+$('#onboardAge').value, gender:$('#onboardGender').value, height:+$('#onboardHeight').value,
    weight:+$('#onboardWeight').value, activity:$('#onboardActivity').value,
    targetWeight:+$('#onboardTargetWeight').value, days:+$('#onboardDays').value,
    goal:$('input[name="onboardGoal"]:checked').value, fitnessLevel:$('#onboardFitness').value,
    intensity:$('#onboardIntensity').value, duration:+$('#onboardDuration').value,
    diet:$('#onboardDiet').value, limitations:$('#onboardLimitations').value.trim(), avoid:$('#onboardAvoid').value.trim()
  };
  accounts[activeUser].profile = profile;
  saveAccounts();
  enterApp(!editingProfile && !accounts[activeUser].tourSeen);
});

function activityLabel(value){ return ({sedentary:'Mostly seated',light:'Lightly active',moderate:'Moderately active',high:'Very active'})[value] || value; }
function calorieEstimate(data=profile){
  if(!data) return 2000;
  const sexOffset = data.gender === 'Male' ? 5 : data.gender === 'Female' ? -161 : -78;
  const bmr = 10*data.weight + 6.25*data.height - 5*data.age + sexOffset;
  const multiplier = ({sedentary:1.2,light:1.375,moderate:1.55,high:1.725})[data.activity] || 1.375;
  const change = data.goal === 'Fat loss' ? -300 : data.goal === 'Muscle gain' ? 250 : 0;
  return Math.max(1200, Math.round((bmr*multiplier + change)/50)*50);
}

function applyProfile(){
  if(!profile) return;
  const initial = (activeUser[0] || 'H').toUpperCase();
  ['#avatarInitial','#profileInitial','#profilePageInitial'].forEach(id => $(id).textContent = initial);
  ['#displayName','#profileName','#profilePageName'].forEach(id => $(id).textContent = activeUser);
  $('#homeGoal').textContent = profile.goal.toLowerCase();
  $('#homeCalories').textContent = calorieEstimate().toLocaleString();
  $('#profileGoal').textContent = profile.goal;
  $('#profileTarget').textContent = profile.targetWeight ? `Target ${profile.targetWeight} kg` : 'General wellness goal';
  $('#profileBody').textContent = `${profile.age} years · ${profile.height} cm · ${profile.weight} kg`;
  $('#profileActivity').textContent = activityLabel(profile.activity);
  $('#profileTraining').textContent = `${profile.days} days · ${profile.duration} minutes`;
  $('#profileLevel').textContent = `${profile.fitnessLevel} · ${profile.intensity} intensity`;
  $('#profileDiet').textContent = profile.diet;
  $('#profileAvoid').textContent = profile.avoid || 'No foods excluded';
  $('#profileLimitations').textContent = profile.limitations || 'No limitations provided';
  $('#profileCoachSummary').textContent = `${profile.intensity} ${profile.duration}-minute sessions, ${profile.days} days per week, built for ${profile.goal.toLowerCase()} with ${profile.diet.toLowerCase()} meal guidance.`;
  const formMap = {age:'age',height:'height',weight:'weight',days:'days',fitnessLevel:'fitnessLevel',intensity:'intensity',sessionLength:'duration',fitnessLimitations:'limitations'};
  Object.entries(formMap).forEach(([id,key]) => $('#'+id).value = profile[key] ?? '');
  const goal = document.querySelector(`input[name="goal"][value="${profile.goal}"]`);
  if(goal) goal.checked = true;
}

function enterApp(startTour){
  $('#authScreen').classList.add('hidden');
  $('#onboardingScreen').classList.add('hidden');
  $('#app').classList.remove('hidden');
  applyProfile();
  showView('home');
  if(startTour) openTour();
}

function showView(name){
  $$('.view').forEach(view => view.classList.remove('active'));
  const next = $(`#${name}View`);
  if(next) next.classList.add('active');
  $$('.nav-link').forEach(link => link.classList.toggle('active', link.dataset.go === name));
  window.scrollTo({top:0,behavior:'smooth'});
}
$$('[data-go]').forEach(el => el.addEventListener('click', () => showView(el.dataset.go)));
$$('.feature-card').forEach(el => el.addEventListener('keydown', event => { if(event.key === 'Enter') showView(el.dataset.go); }));

const tour = [
  {icon:'👋',title:'Welcome to HealthfitAI',text:'Your meals, workouts and progress now work together around one personal goal.',view:'home'},
  {icon:'🥪',title:'Order with calories upfront',text:'Compare Subway meals, filter by protein or calories, choose delivery, takeaway or dine-in, then use the demo checkout.',view:'food'},
  {icon:'🏋️',title:'Build a plan you can sustain',text:'Your AI Fitness space uses your level, intensity tolerance, available time and movement limitations.',view:'fitness'},
  {icon:'✦',title:'Ask your AI coach',text:'Use the chat button for food calories, meal comparisons and profile-aware workout guidance.',view:'home'},
  {icon:'👤',title:'Your profile stays editable',text:'Open Profile to review goals, food preferences, comfort limits and replay this tour at any time.',view:'profile'}
];
function renderTour(){
  const item = tour[tourStep];
  $('#tourProgress').textContent = `${tourStep+1} / ${tour.length}`;
  $('#tourIcon').textContent = item.icon; $('#tourTitle').textContent = item.title; $('#tourText').textContent = item.text;
  $('#nextTour').innerHTML = tourStep === tour.length-1 ? 'Start exploring <span>→</span>' : 'Next <span>→</span>';
  showView(item.view);
}
function openTour(){ tourStep=0; $('#tourOverlay').classList.remove('hidden'); renderTour(); }
function closeTour(){
  $('#tourOverlay').classList.add('hidden');
  if(activeUser && accounts[activeUser]){ accounts[activeUser].tourSeen=true; saveAccounts(); }
}
$('#nextTour').addEventListener('click', () => { if(tourStep >= tour.length-1){ closeTour(); showView('home'); } else { tourStep++; renderTour(); } });
$('#skipTour').addEventListener('click', () => { closeTour(); showView('home'); });
$('#restartTour').addEventListener('click', openTour);

function logOut(){ activeUser=null; profile=null; closeModals(); $('#chatPanel').classList.remove('open'); showAuth('login'); }
$('#signOutButton').addEventListener('click', logOut);
$('#modalLogout').addEventListener('click', logOut);
$('#editProfileButton').addEventListener('click', () => openOnboarding(true));

function renderMenu(){
  const q = $('#menuSearch').value.toLowerCase();
  const items = menu.filter(item => (filter === 'all' || item.tags.includes(filter)) && (item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)));
  $('#menuCount').textContent = `${items.length} meals`;
  $('#menuGrid').innerHTML = items.map(item => `<article class="menu-item"><div class="food-illustration tone-${item.tone}"><span>${item.emoji}</span></div><div class="menu-content"><div class="item-head"><h3>${item.name}</h3><span class="item-price">${money(item.price)}</span></div><p>${item.desc}</p><div class="nutrition"><span><b>${item.cal}</b>kcal</span><span><b>${item.protein}g</b>protein</span><span><b>${item.carbs}g</b>carbs</span></div><div class="menu-footer"><span class="goal-badge">${item.badge}</span><button class="add-btn" data-add="${item.id}" aria-label="Add ${item.name}">+</button></div></div></article>`).join('') || '<p>No meals match your search.</p>';
  $$('[data-add]').forEach(button => button.addEventListener('click', () => { const id=+button.dataset.add; cart[id]=(cart[id]||0)+1; renderCart(); button.textContent='✓'; setTimeout(()=>button.textContent='+',500); }));
}
$('#menuSearch').addEventListener('input', renderMenu);
$$('#categoryChips button').forEach(button => button.addEventListener('click', () => { filter=button.dataset.filter; $$('#categoryChips button').forEach(x=>x.classList.toggle('active',x===button)); renderMenu(); }));

function renderCart(){
  const entries = Object.entries(cart).filter(([,quantity]) => quantity > 0);
  const count = entries.reduce((sum,[,quantity]) => sum + quantity, 0);
  $('#cartCount').textContent=count; $('#cartEmpty').classList.toggle('hidden',!!count); $('#fulfilment').classList.toggle('hidden',!count); $('#cartSummary').classList.toggle('hidden',!count);
  $('#cartItems').innerHTML=entries.map(([id,quantity])=>{ const item=menu.find(x=>x.id==id); return `<div class="cart-line"><b>${item.name}</b><b>${money(item.price*quantity)}</b><small>${item.cal*quantity} kcal</small><div class="qty"><button data-dec="${id}">−</button><span>${quantity}</span><button data-inc="${id}">+</button><button class="remove" data-remove="${id}">Remove</button></div></div>`; }).join('');
  const subtotal=entries.reduce((sum,[id,quantity])=>sum+menu.find(item=>item.id==id).price*quantity,0);
  const fee=count?(mode==='delivery'?2.5:mode==='dinein'?1:0):0;
  $('#subtotal').textContent=money(subtotal); $('#fee').textContent=money(fee); $('#total').textContent=money(subtotal+fee);
  $$('[data-inc]').forEach(button=>button.onclick=()=>{cart[button.dataset.inc]++;renderCart();});
  $$('[data-dec]').forEach(button=>button.onclick=()=>{cart[button.dataset.dec]--;renderCart();});
  $$('[data-remove]').forEach(button=>button.onclick=()=>{delete cart[button.dataset.remove];renderCart();});
}
$$('#fulfilment button').forEach(button=>button.addEventListener('click',()=>{mode=button.dataset.mode;$$('#fulfilment button').forEach(x=>x.classList.toggle('active',x===button));renderCart();}));

function openModal(id){ $('#modalBackdrop').classList.add('open'); $('#'+id).classList.add('open'); }
function closeModals(){ $('#modalBackdrop').classList.remove('open'); $$('.modal').forEach(modal=>modal.classList.remove('open')); }
$$('[data-close]').forEach(button=>button.addEventListener('click',closeModals));
$('#modalBackdrop').addEventListener('click',closeModals);
$('#checkoutButton').addEventListener('click',()=>{const count=Object.values(cart).reduce((a,b)=>a+b,0);$('#payItems').textContent=`${count} item${count===1?'':'s'}`;$('#payMode').textContent={delivery:'Delivery',pickup:'Takeaway',dinein:'Dine in'}[mode];$('#payTotal').textContent=$('#total').textContent;openModal('paymentModal');});
$('#payButton').addEventListener('click',()=>{$('#paymentModal').classList.remove('open');$('#successModal').classList.add('open');cart={};renderCart();});
$('#trialButton').addEventListener('click',()=>openModal('subscriptionModal'));
$('#profileButton').addEventListener('click',()=>openModal('profileModal'));
$('#openSubscription').addEventListener('click',()=>{$('#profileModal').classList.remove('open');$('#subscriptionModal').classList.add('open');});
$('#profileSubscribe').addEventListener('click',()=>openModal('subscriptionModal'));
$('#openFullProfile').addEventListener('click',()=>{closeModals();showView('profile');});
$('#subscribeButton').addEventListener('click',()=>{$('#subscribeButton').textContent='✓ Trial activated';setTimeout(closeModals,900);});

function exercisePlan({days,level,intensity,duration,equipment,limitations}){
  const beginner = level === 'Beginner';
  const challenging = intensity === 'Challenging';
  const sets = beginner ? 2 : challenging ? 4 : 3;
  const reps = beginner ? '8' : challenging ? '8–12' : '10';
  const noJump = /knee|jump|impact/i.test(limitations || '');
  const strengthA = equipment === 'No equipment' ? [`Chair squat ${sets} × ${reps}`,`Incline push-up ${sets} × ${reps}`,`Glute bridge ${sets} × 12`,`Dead bug ${sets} × 8/side`] : [`Goblet squat ${sets} × ${reps}`,`Dumbbell press ${sets} × ${reps}`,`Cable row ${sets} × ${reps}`,`Plank ${sets} × 30 sec`];
  const strengthB = equipment === 'No equipment' ? [`Reverse lunge ${sets} × 8/side`,`Push-up ${sets} × ${reps}`,`Hip hinge ${sets} × 12`,`Side plank ${sets} × 20 sec`] : [`Romanian deadlift ${sets} × ${reps}`,`Lat pulldown ${sets} × ${reps}`,`Shoulder press ${sets} × ${reps}`,`Pallof press ${sets} × 10/side`];
  const cardio = noJump ? [`Brisk walk or cycle ${Math.max(15,duration-10)} min`,`Mobility flow 8 min`,`Keep a conversational pace`] : [`Walk–jog intervals ${Math.max(15,duration-10)} min`,`Dynamic mobility 8 min`,`Finish with easy breathing`];
  const recovery = [`Easy walk ${Math.max(15,duration-15)} min`,`Full-body mobility 10 min`,`Stop if pain increases`];
  return [
    ['DAY 01','Full-body foundations',strengthA],['DAY 02','Cardio and mobility',cardio],['DAY 03','Strength progression',strengthB],['DAY 04','Active recovery',recovery],['DAY 05','Full-body confidence',strengthA]
  ].slice(0,days);
}

$('#fitnessForm').addEventListener('submit',event=>{
  event.preventDefault();
  const settings={goal:$('input[name="goal"]:checked').value,days:+$('#days').value,weight:+$('#weight').value,level:$('#fitnessLevel').value,intensity:$('#intensity').value,duration:+$('#sessionLength').value,equipment:$('#equipment').value,limitations:$('#fitnessLimitations').value.trim()};
  const target=calorieEstimate({...profile,...settings,age:+$('#age').value,height:+$('#height').value,weight:settings.weight,goal:settings.goal});
  $('#planGoal').textContent=settings.goal; $('#calorieTarget').textContent=target.toLocaleString();
  $('#planSummary').textContent=`${settings.days} ${settings.intensity.toLowerCase()} sessions of about ${settings.duration} minutes, matched to your ${settings.level.toLowerCase()} level${settings.limitations ? ` and adapted around: ${settings.limitations}` : ''}.`;
  $('#weekGrid').innerHTML=exercisePlan(settings).map(day=>`<article class="day-card"><span>${day[0]}</span><h3>${day[1]}</h3><ul>${day[2].map(item=>`<li>${clean(item)}</li>`).join('')}</ul></article>`).join('');
  $('#planResult').classList.remove('hidden'); $('#planResult').scrollIntoView({behavior:'smooth',block:'start'});
});

$('#chatFab').addEventListener('click',()=>{$('#chatPanel').classList.add('open');$('#chatFab').classList.add('hidden');});
$('#closeChat').addEventListener('click',()=>{$('#chatPanel').classList.remove('open');$('#chatFab').classList.remove('hidden');});

function foodAnswer(key){
  const food=foods[key];
  const goalNote = profile?.goal === 'Fat loss' ? 'For fat loss, count the portion but keep fruit if it helps you stay satisfied.' : profile?.goal === 'Muscle gain' ? 'For muscle gain, pair it with yoghurt, milk or another protein source.' : 'It can fit easily in a balanced day.';
  return `<b>${clean(food.label)}</b> has about <b>${food.cal} kcal</b>, ${food.protein} g protein, ${food.carbs} g carbs, ${food.fat} g fat and ${food.fibre} g fibre. It is ${food.note}. ${goalNote} Values are estimates; size and preparation change the result.`;
}
function aiReply(text){
  const t=text.toLowerCase();
  const found=Object.keys(foods).filter(key=>t.includes(key));
  if(found.length>=2){
    const a=foods[found[0]],b=foods[found[1]];
    return `<b>${clean(a.label)}</b>: ${a.cal} kcal and ${a.fibre} g fibre.<br><b>${clean(b.label)}</b>: ${b.cal} kcal and ${b.fibre} g fibre.<br>${a.cal>b.cal?clean(b.label):clean(a.label)} is lower in calories, but both can fit your ${clean((profile?.goal||'wellness').toLowerCase())} goal. Choose by hunger, portion and the rest of the meal.`;
  }
  if(found.length===1) return foodAnswer(found[0]);
  if(t.includes('500')||t.includes('lunch')) return 'For lunch under 500 kcal, try Oven Roasted Chicken (280 kcal, 21 g protein), Veggie Delite (220 kcal) or Chicken Teriyaki (450 kcal, 30 g protein). Based on your profile, prioritise protein and check sauces because they can change the total.';
  if(t.includes('train')||t.includes('workout')) return profile ? `Your profile supports a <b>${profile.duration}-minute ${profile.intensity.toLowerCase()} session</b>. Today: 5–8 minutes warm-up, full-body strength, then an easy cool-down. ${profile.limitations ? `Adapt around “${clean(profile.limitations)}” and stop if pain increases.` : 'Use a weight that leaves 2–3 good repetitions in reserve.'}` : 'Complete your profile first so I can match duration and intensity to you.';
  if(t.includes('protein')) return `For your ${clean((profile?.goal||'fitness').toLowerCase())} goal, build meals around chicken, eggs, tofu, fish, beans or yoghurt. A practical target is 20–35 g at a main meal, adjusted for your body size and professional advice.`;
  if(t.includes('calorie')) return 'Tell me the food and portion, for example “one medium banana” or “100 g chicken breast”. I will give an approximate calorie and macro estimate. Portion size, brand and cooking method matter.';
  return 'I can estimate calories for common foods, compare campus meals, or adapt a workout to your profile. Try “How many calories are in a banana?” This is general wellness guidance, not medical diagnosis.';
}
function sendChat(text){
  if(!text.trim()) return;
  $('#chatBody').insertAdjacentHTML('beforeend',`<div class="message user">${clean(text)}</div>`);
  setTimeout(()=>{$('#chatBody').insertAdjacentHTML('beforeend',`<div class="message ai">${aiReply(text)}</div>`);$('#chatBody').scrollTop=$('#chatBody').scrollHeight;},300);
  $('#chatBody').scrollTop=$('#chatBody').scrollHeight;
}
$('#chatForm').addEventListener('submit',event=>{event.preventDefault();sendChat($('#chatInput').value);$('#chatInput').value='';});
$$('.quick-prompts button').forEach(button=>button.addEventListener('click',()=>sendChat(button.textContent)));

renderMenu();
renderCart();
showAuth(location.hash === '#login' ? 'login' : 'register');
