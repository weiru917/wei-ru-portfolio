// Project metadata used by detail dialogs.
const projects= {
  "pulse": {
    "name": "PulseCheck",
    "label": "FINAL-YEAR PROJECT · ONGOING",
    "intro": "A mobile cardiac-health application combining CVD risk prediction, explainable risk factors, and PPG signal processing.",
    "contribution": "Developing the Flutter frontend and FastAPI backend. Trained Logistic Regression, Random Forest, and XGBoost models and integrated SHAP explanations, alongside vitals tracking and medication scheduling.",
    "focus": "How can a mobile interface make prediction results and their contributing factors understandable to a non-technical user?",
    "tech": ["Flutter", "FastAPI", "XGBoost", "SHAP", "Firebase"],
    "category": "mobile ai"
  }
  ,
  "aegis": {
    "name": "AegisAI",
    "label": "HACK ATTACK 2026 · TWO-PERSON TEAM",
    "intro": "A vendor-neutral enterprise AI governance gateway with sensitive-data masking, model routing, audit logging, and compliance reporting.",
    "contribution": "Architected the backend and contributed to the frontend. The gateway uses Presidio and spaCy for PII masking and LiteLLM for routing prompts across models.",
    "focus": "How should a request move through masking, routing, and logging while keeping the system independent of a single model vendor?",
    "tech": ["Python", "FastAPI", "React", "TypeScript", "LiteLLM", "Presidio"],
    "category": "web ai"
  }
  ,
  "geo": {
    "name": "GeoQoE Pulse",
    "label": "ASEAN GEOAI FUSION 2026 · COMPLETED TEAM PROJECT",
    "intro": "A completed team project for network-quality intelligence, built around multi-source geospatial open data.",
    "contribution": "Built a 10-stage pipeline that processes seven geospatial datasets into unified spatial-temporal features. Standardised coordinate systems to EPSG:3375 and aggregated data using H3 at resolution 8.",
    "focus": "How do datasets with different spatial structures become consistent features for network-quality analysis?",
    "tech": ["Python", "GIS", "H3", "EPSG:3375", "Ookla Open Data", "OpenStreetMap"],
    "category": "ai"
  }
  ,
  "rental": {
    "name": "KeretaSewa AI",
    "label": "UMHACKATHON 2026",
    "intro": "A decision-support dashboard for SME car rentals, covering fleet performance and AI recommendations.",
    "contribution": "Built a React dashboard with Recharts visualisations. Implemented CSV ingestion with deduplication, Firestore CRUD and authentication, and PDF report export.",
    "focus": "How can a rental operator explore revenue, utilisation, idle days, and demand patterns in one interface?",
    "tech": ["React", "Vite", "Node.js", "Firebase", "Recharts", "Tailwind CSS"],
    "category": "web ai"
  }
  ,
  "kitchen": {
    "name": "Rhythm Kitchen",
    "label": "SOLO PROJECT · COMPUTER VISION",
    "intro": "A webcam-controlled cooking game using MediaPipe mesh tracking.",
    "contribution": "Designed and developed this solo game, integrating webcam input and MediaPipe mesh tracking into the gameplay.",
    "focus": "Turning camera input into a playable interaction.",
    "tech": ["MediaPipe", "Webcam", "Computer vision"],
    "category": "games ai",
    "symbol": "◉",
    "url": null
  }
  ,
  "wick": {
    "name": "Wick",
    "label": "TEAM PROJECT · STRESS & WORKLOAD",
    "intro": "A mobile stress and workload manager connecting camera sensing, focus sessions and community features.",
    "contribution": "Implemented PPG-based stress estimation, Desk Mode using rPPG and motion detection for stress-score estimation, and the Circles community function.",
    "focus": "Connecting physiological signals and motion cues to focus-session feedback.",
    "tech": ["React Native", "Expo", "PPG / rPPG", "Motion detection"],
    "category": "mobile ai",
    "symbol": "◌",
    "url": "https://github.com/shino-c/Wick"
  }
  ,
  "flood": {
    "name": "FloodSense",
    "label": "KITAHACK · TEAM PROJECT",
    "intro": "An AI-powered flood monitoring and emergency-response application focused on preparedness in Malaysia.",
    "contribution": "Implemented the rainfall anomaly service, safety checklists and nearest-shelter navigation.",
    "focus": "Making rainfall information and shelter access useful to people preparing for floods.",
    "tech": ["Flutter", "Weather APIs", "Google Maps"],
    "category": "mobile ai",
    "symbol": "≈",
    "url": "https://github.com/GuakLaLa/KitaHack_BalikKampung"
  }
  ,
  "meow": {
    "name": "MeowGotchi",
    "label": "SOLO PROJECT · GAME DEVELOPMENT",
    "intro": "A virtual-pet game built with Godot and GDScript.",
    "contribution": "Developed this solo project, with virtual-pet hunger, happiness and energy mechanics and feeding and play interactions.",
    "focus": "Bringing a virtual companion to life through state and interaction.",
    "tech": ["Godot", "GDScript", "2D gameplay"],
    "category": "games",
    "symbol": "ฅ",
    "url": "https://github.com/weiru917/MeowGotchi"
  }
  ,
  "fit": {
    "name": "FitWell",
    "label": "ACADEMIC TEAM PROJECT",
    "intro": "A health application with nutrition and progress-tracking features.",
    "contribution": "Responsible for implementing the trend charts.",
    "focus": "Helping users understand change over time through visualisation.",
    "tech": ["JavaScript", "HTML / CSS", "Trend charts"],
    "category": "web",
    "symbol": "↗",
    "url": "https://github.com/SHUHUI22/FitWell"
  }
  ,
  "path": {
    "name": "PathSeeker",
    "label": "ACADEMIC TEAM PROJECT · MOBILE",
    "intro": "A mobile application for employment discovery and skill development.",
    "contribution": "Implemented job matching based on keywords and Haversine distance rules.",
    "focus": "Combining relevance and geographic distance in job discovery.",
    "tech": ["Keyword matching", "Haversine distance", "Mobile development"],
    "category": "mobile",
    "symbol": "⌖",
    "url": "https://github.com/RextonRZ/JP-PathSeeker"
  }
}
;
// Local resume asset. Keep this relative for GitHub Pages project sites.
const resumeUrl = './assets/documents/Tan-Wei-Ru-Resume.pdf';
// Project dialogs and shared modal behavior.
const dialog=document.getElementById('detail'),
content=document.getElementById('modalContent');
function openModal(html) {
  content.innerHTML=html;
  dialog.showModal()
}
function showProject(key) {
  const p=projects[key];
  const art=document.querySelector('.librarycard[data-project="'+key+'"] .projectart').innerHTML;
  openModal('<div class="eyebrow">'+p.label+'</div><h2 id="modalTitle">'+p.name+'</h2><div class="modalart">'+art+'</div><p>'+p.intro+'</p><h4>My contribution</h4><p>'+p.contribution+'</p><h4>Engineering focus</h4><p>'+p.focus+'</p><div class="tags">'+p.tech.map(x=>'<span>'+x+'</span>').join('')+'</div>'+(p.url?'<div class="modalactions"><a class="btn" href="'+p.url+'" target="_blank" rel="noopener noreferrer">Explore the repository ↗</a></div>':'')+'<p class="modalnote">'+(key==='kitchen'?'Solo project · Private repository. A gameplay video can be added here.':'Decorative project artwork. Real screenshots and walkthroughs can be added as the portfolio develops.')+(key==='wick'?' Stress scores are estimates; no clinical validation is claimed.':'')+'</p>')
}
document.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>showProject(b.dataset.project)));
document.querySelector('.modalclose').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=> {
  if(e.target===dialog) {
    const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()
  }
}
);
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=> {
  document.querySelectorAll('.filter').forEach(x=> {
    x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))
  }
  );document.querySelectorAll('.librarycard').forEach(c=>c.hidden=b.dataset.filter!=='all'&&!c.dataset.category.split(' ').includes(b.dataset.filter));document.getElementById('projectCount').textContent=document.querySelectorAll('.librarycard:not([hidden])').length+' projects'
}
));
document.getElementById('resumeButton').addEventListener('click',()=>openModal('<div class="eyebrow">RÉSUMÉ / A QUICK INTRODUCTION</div><h2 id="modalTitle">Tan Wei Ru</h2><p>Final-year Bachelor of Computer Science (Software Engineering) student at Universiti Malaya. CGPA: 3.79/4.0. Expected graduation: 2027.</p><h4>Voluntary internship</h4><p>Software Engineering Intern (QA &amp; ERP Development) at Keyway Digital Labs Sdn. Bhd. · July–September 2026.</p><h4>International exchange</h4><p>Sejong University, South Korea · September–December 2025.</p><h4>Competitions</h4><p>ASEAN GeoAI Fusion 2026 — Top 17 finalist.<br>Programming League National 2025 — Open Category finalist.</p><div class="modalactions"><a class="btn" href="'+resumeUrl+'" download="Tan-Wei-Ru-Resume.pdf">Download résumé ↓</a><a class="btn secondary" href="mailto:tanweiru2004@gmail.com">Say hello ↗</a></div>'));
// Interactive studio cat.
const sayings=['A small cat for company. ♡','You found my little studio cat!','Tiny paws. Big project energy.','A little break is a good idea.','Thanks for stopping by! ♫'];
let petIndex=0;
document.getElementById('petButton').addEventListener('click',()=> {
  petIndex=(petIndex+1)%sayings.length;document.getElementById('petBubble').textContent=sayings[petIndex];const b=document.getElementById('petButton');b.classList.remove('dance');void b.offsetWidth;b.classList.add('dance');if(musicOn)playNote(880,audioContext.currentTime,.35,.05)
}
);
// Opt-in synthesized music. No audio plays until the visitor activates it.
let audioContext,
master,
musicOn=false,
timer,
nextNote=0,
nextTime=0;
const melody=[523.25,659.25,783.99,659.25,587.33,698.46,880,698.46,523.25,659.25,783.99,1046.5,880,783.99,659.25,587.33];
function playNote(f,t,d=.7,g=.07) {
  const o=audioContext.createOscillator(),
  a=audioContext.createGain();
  o.type='sine';
  o.frequency.value=f;
  a.gain.setValueAtTime(0,t);
  a.gain.linearRampToValueAtTime(g,t+.015);
  a.gain.exponentialRampToValueAtTime(.0001,t+d);
  o.connect(a);
  a.connect(master);
  o.start(t);
  o.stop(t+d+.04);
  const overtone=audioContext.createOscillator(),
  gain=audioContext.createGain();
  overtone.type='sine';
  overtone.frequency.value=f*2;
  gain.gain.setValueAtTime(g*.17,t);
  gain.gain.exponentialRampToValueAtTime(.0001,t+d*.6);
  overtone.connect(gain);
  gain.connect(master);
  overtone.start(t);
  overtone.stop(t+d)
}
function scheduleMusic() {
  if(!musicOn)return;
  while(nextTime<audioContext.currentTime+.25) {
    playNote(melody[nextNote%melody.length],nextTime,.9,.065);
    if(nextNote%4===0)playNote([130.81,146.83,130.81,174.61][Math.floor(nextNote/4)%4],nextTime,1.8,.04);
    nextNote++;
    nextTime+=.43
  }
}
const musicButton=document.getElementById('musicButton');
musicButton.addEventListener('click',async()=> {
  try {
    if(!audioContext) {
      const AC=window.AudioContext||window.webkitAudioContext;if(!AC)throw Error('Audio is unavailable');audioContext=new AC();master=audioContext.createGain();master.gain.value=.6;master.connect(audioContext.destination)
    }
    if(musicOn) {
      musicOn=false;clearInterval(timer);master.gain.setTargetAtTime(0,audioContext.currentTime,.08)
    }
    else {
      await audioContext.resume();musicOn=true;master.gain.setTargetAtTime(.6,audioContext.currentTime,.08);nextTime=audioContext.currentTime+.05;nextNote=0;scheduleMusic();timer=setInterval(scheduleMusic,100)
    }
    musicButton.textContent=musicOn?'♫ Music on · pause':'♫ Music off';musicButton.setAttribute('aria-pressed',String(musicOn))
  }
  catch(e) {
    const t=document.getElementById('toast');t.textContent='Audio is unavailable in this browser. Try opening the HTML in Chrome or Edge.';t.hidden=false;setTimeout(()=>t.hidden=true,5000)
  }
}
);
document.addEventListener('visibilitychange',()=> {
  if(document.hidden&&musicOn)musicButton.click()
}
);
