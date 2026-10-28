const menu = [
  {id:1,name:"Sweet Onion Chicken Teriyaki",desc:"Teriyaki chicken, crisp vegetables and sweet onion flavour on a standard 6-inch sub.",price:14.9,cal:450,protein:30,carbs:53,tags:["high-protein","lighter"],badge:"High protein",emoji:"🥪",tone:1},
  {id:2,name:"Steak & Cheese",desc:"Steak, cheese and fresh vegetables for a satisfying post-workout lunch.",price:17.9,cal:500,protein:29,carbs:39,tags:["high-protein"],badge:"Post-workout",emoji:"🥖",tone:2},
  {id:3,name:"Tuna",desc:"Creamy tuna with vegetables. Rich and filling, with a higher standard-recipe calorie count.",price:15.9,cal:470,protein:20,carbs:40,tags:["lighter"],badge:"Filling",emoji:"🥪",tone:3},
  {id:4,name:"Veggie Delite",desc:"A crisp mix of fresh vegetables with sauces customised to your taste.",price:9.9,cal:220,protein:10,carbs:40,tags:["lighter","vegetarian"],badge:"Light choice",emoji:"🥬",tone:5},
  {id:5,name:"Oven Roasted Chicken",desc:"A simple, balanced combination of roasted chicken breast and vegetables.",price:14.5,cal:280,protein:21,carbs:41,tags:["high-protein","lighter"],badge:"AI pick",emoji:"🥪",tone:4},
  {id:6,name:"Meatball Marinara",desc:"Meatballs and tomato sauce for days when you need a little more energy.",price:16.5,cal:460,protein:20,carbs:54,tags:["lighter"],badge:"Popular classic",emoji:"🥖",tone:6}
];
let cart = {}; let filter = "all"; let mode = "delivery";
const $ = s => document.querySelector(s); const $$ = s => [...document.querySelectorAll(s)];
const money = n => `RM ${n.toFixed(2)}`;

function showView(name){
  $$('.view').forEach(v=>v.classList.remove('active')); $(`#${name}View`).classList.add('active');
  $$('.nav-link').forEach(n=>n.classList.toggle('active',n.dataset.go===name)); window.scrollTo({top:0,behavior:'smooth'});
}
$$('[data-go]').forEach(el=>el.addEventListener('click',()=>showView(el.dataset.go)));
$$('.feature-card').forEach(el=>el.addEventListener('keydown',e=>{if(e.key==='Enter')showView(el.dataset.go)}));

$('#registerForm').addEventListener('submit',e=>{
  e.preventDefault(); const name=$('#username').value.trim(); const pass=$('#password').value; const confirm=$('#confirmPassword').value;
  if(pass!==confirm){$('#formError').textContent='The passwords do not match. Please try again.';return}
  $('#formError').textContent=''; $('#displayName').textContent=name; $('#profileName').textContent=name;
  const initial=(name[0]||'H').toUpperCase(); $('#avatarInitial').textContent=initial; $('#profileInitial').textContent=initial;
  $('#authScreen').classList.add('hidden'); $('#app').classList.remove('hidden'); localStorage.setItem('healthfit-demo-user',name);
});
$$('[data-eye]').forEach(b=>b.addEventListener('click',()=>{const i=$('#'+b.dataset.eye);i.type=i.type==='password'?'text':'password'}));

function renderMenu(){
  const q=$('#menuSearch').value.toLowerCase(); const items=menu.filter(i=>(filter==='all'||i.tags.includes(filter))&&(i.name.toLowerCase().includes(q)||i.desc.includes(q)));
  $('#menuCount').textContent=`${items.length} meals`;
  $('#menuGrid').innerHTML=items.map(i=>`<article class="menu-item"><div class="food-illustration tone-${i.tone}"><span>${i.emoji}</span></div><div class="menu-content"><div class="item-head"><h3>${i.name}</h3><span class="item-price">${money(i.price)}</span></div><p>${i.desc}</p><div class="nutrition"><span><b>${i.cal}</b>kcal</span><span><b>${i.protein}g</b>protein</span><span><b>${i.carbs}g</b>carbs</span></div><div class="menu-footer"><span class="goal-badge">${i.badge}</span><button class="add-btn" data-add="${i.id}" aria-label="Add ${i.name}">+</button></div></div></article>`).join('') || '<p>No meals match your search.</p>';
  $$('[data-add]').forEach(b=>b.addEventListener('click',()=>{const id=+b.dataset.add;cart[id]=(cart[id]||0)+1;renderCart();b.textContent='✓';setTimeout(()=>b.textContent='+',500)}));
}
$('#menuSearch').addEventListener('input',renderMenu); $$('#categoryChips button').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;$$('#categoryChips button').forEach(x=>x.classList.toggle('active',x===b));renderMenu()}));

function renderCart(){
  const entries=Object.entries(cart).filter(([,q])=>q>0); const count=entries.reduce((s,[,q])=>s+q,0); $('#cartCount').textContent=count;
  $('#cartEmpty').classList.toggle('hidden',!!count); $('#fulfilment').classList.toggle('hidden',!count); $('#cartSummary').classList.toggle('hidden',!count);
  $('#cartItems').innerHTML=entries.map(([id,q])=>{const i=menu.find(x=>x.id==id);return `<div class="cart-line"><b>${i.name}</b><b>${money(i.price*q)}</b><small>${i.cal*q} kcal</small><div class="qty"><button data-dec="${id}">−</button><span>${q}</span><button data-inc="${id}">+</button><button class="remove" data-remove="${id}">Remove</button></div></div>`}).join('');
  const sub=entries.reduce((s,[id,q])=>s+menu.find(i=>i.id==id).price*q,0); const fee=count?(mode==='delivery'?2.5:mode==='dinein'?1:0):0;
  $('#subtotal').textContent=money(sub);$('#fee').textContent=money(fee);$('#total').textContent=money(sub+fee);
  $$('[data-inc]').forEach(b=>b.onclick=()=>{cart[b.dataset.inc]++;renderCart()});$$('[data-dec]').forEach(b=>b.onclick=()=>{cart[b.dataset.dec]--;renderCart()});$$('[data-remove]').forEach(b=>b.onclick=()=>{delete cart[b.dataset.remove];renderCart()});
}
$$('#fulfilment button').forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.mode;$$('#fulfilment button').forEach(x=>x.classList.toggle('active',x===b));renderCart()}));

function openModal(id){$('#modalBackdrop').classList.add('open');$('#'+id).classList.add('open')}
function closeModals(){$('#modalBackdrop').classList.remove('open');$$('.modal').forEach(m=>m.classList.remove('open'))}
$$('[data-close]').forEach(b=>b.addEventListener('click',closeModals));$('#modalBackdrop').addEventListener('click',closeModals);
$('#checkoutButton').addEventListener('click',()=>{const count=Object.values(cart).reduce((a,b)=>a+b,0);$('#payItems').textContent=`${count} item${count===1?'':'s'}`;$('#payMode').textContent={delivery:'Delivery',pickup:'Takeaway',dinein:'Dine in'}[mode];$('#payTotal').textContent=$('#total').textContent;openModal('paymentModal')});
$('#payButton').addEventListener('click',()=>{$('#paymentModal').classList.remove('open');$('#successModal').classList.add('open');cart={};renderCart()});
$('#trialButton').addEventListener('click',()=>openModal('subscriptionModal'));$('#profileButton').addEventListener('click',()=>openModal('profileModal'));$('#openSubscription').addEventListener('click',()=>{$('#profileModal').classList.remove('open');$('#subscriptionModal').classList.add('open')});$('#subscribeButton').addEventListener('click',()=>{$('#subscribeButton').textContent='✓ Trial activated';setTimeout(closeModals,900)});

$('#fitnessForm').addEventListener('submit',e=>{
  e.preventDefault();const goal=$('input[name="goal"]:checked').value;const days=+$('#days').value;const weight=+$('#weight').value;const target=Math.round((weight*30+(goal==='Muscle gain'?250:goal==='Fat loss'?-150:0))/50)*50;
  $('#planGoal').textContent=goal;$('#calorieTarget').textContent=target.toLocaleString();$('#planSummary').textContent=`With ${days} training days each week, alternate full-body sessions with recovery. Start at an intensity you can sustain.`;
  const plans=[['DAY 01','Full-body foundations',['Squat 3 × 10','Push-up 3 × 8','Dumbbell row 3 × 10','Plank 3 × 30 sec']],['DAY 02','Low-intensity cardio',['Brisk walk or jog 25 min','Dynamic mobility 8 min','Focus on breathing and pace']],['DAY 03','Strength and core',['Reverse lunge 3 × 10','Shoulder press 3 × 10','Glute bridge 3 × 12','Dead bug 3 × 10']]];
  $('#weekGrid').innerHTML=plans.slice(0,Math.min(days,3)).map(p=>`<article class="day-card"><span>${p[0]}</span><h3>${p[1]}</h3><ul>${p[2].map(x=>`<li>${x}</li>`).join('')}</ul></article>`).join('');$('#planResult').classList.remove('hidden');$('#planResult').scrollIntoView({behavior:'smooth',block:'start'});
});

$('#chatFab').addEventListener('click',()=>{$('#chatPanel').classList.add('open');$('#chatFab').classList.add('hidden')});$('#closeChat').addEventListener('click',()=>{$('#chatPanel').classList.remove('open');$('#chatFab').classList.remove('hidden')});
function aiReply(text){const t=text.toLowerCase();if(t.includes('500')||t.includes('lunch'))return 'Try Oven Roasted Chicken at 280 kcal, Veggie Delite at 220 kcal, or Chicken Teriyaki at 450 kcal. For better satiety, the roasted chicken offers more protein.';if(t.includes('train')||t.includes('workout'))return 'Based on your demo profile, try a 35-minute full-body session: squats, push-ups, rows and core work. Warm up for 5–8 minutes first.';if(t.includes('protein'))return 'Build each meal around a clear protein source such as chicken, tuna, eggs or beans. Compare protein per serving as well as total calories.';return 'I can help compare menu items, explain calories or plan a workout. This demo assistant does not provide medical diagnosis; speak with a qualified professional about injuries or health conditions.'}
function sendChat(text){if(!text.trim())return;$('#chatBody').insertAdjacentHTML('beforeend',`<div class="message user">${text.replace(/[<>]/g,'')}</div>`);setTimeout(()=>{$('#chatBody').insertAdjacentHTML('beforeend',`<div class="message ai">${aiReply(text)}</div>`);$('#chatBody').scrollTop=$('#chatBody').scrollHeight},350);$('#chatBody').scrollTop=$('#chatBody').scrollHeight}
$('#chatForm').addEventListener('submit',e=>{e.preventDefault();sendChat($('#chatInput').value);$('#chatInput').value=''});$$('.quick-prompts button').forEach(b=>b.addEventListener('click',()=>sendChat(b.textContent)));

renderMenu();renderCart();
