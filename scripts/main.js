// Project metadata used by detail dialogs.
const projects= {
  "wick": {
    "name": "Wick",
    "label": "CODENECTION 2026 · 2-PERSON TEAM",
    "intro": "A stress and workload manager with camera-based pulse estimation, adaptive focus sessions, guided breathing and peer support.",
    "tech": [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "VisionCamera"
    ],
    "url": "https://github.com/shino-c/Wick",
    "prototype": "https://goodquestion-wick.expo.app/",
    "contributions": [
      "Developed front-camera rPPG and fingertip PPG processing for pulse estimation, signal-quality checks and personal baseline calibration, integrated with adaptive focus sessions and guided breathing.",
      "Implemented invite-code connections, peer support and shared recovery challenges for the Circles module as part of a two-person team."
    ]
  },
  "geo": {
    "name": "GeoQoE Pulse",
    "label": "ASEAN GEOAI FUSION 2026 · 3-PERSON TEAM · TOP 17 FINALIST",
    "intro": "A mobile QoE intelligence system integrating network and geospatial datasets for network quality analysis.",
    "tech": [
      "Python",
      "GeoPandas",
      "GIS",
      "H3",
      "JavaScript",
      "LLM APIs"
    ],
    "url": "https://github.com/weiru917/geoqoe_pulse",
    "prototype": "https://weiru917.github.io/geoqoe_pulse/",
    "contributions": [
      "Built a Python GIS pipeline combining network and geospatial datasets; standardised coordinate systems and aggregated spatial layers into H3 cells to support network quality analysis.",
      "Integrated LLM APIs with web retrieval to surface source-linked events and holidays as possible context for network planning."
    ]
  },
  "aegis": {
    "name": "AegisAI",
    "label": "HACK ATTACK 2026 · 2-PERSON TEAM",
    "intro": "An enterprise AI governance gateway with sensitive-data detection and masking, LLM-provider routing and stored audit logs.",
    "tech": [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Microsoft Presidio",
      "spaCy"
    ],
    "url": "https://github.com/Yanjie0910/AegisAI",
    "contributions": [
      "Developed a FastAPI backend for sensitive-data detection and masking using regex and Presidio/spaCy, with LLM-provider routing and fallback handling.",
      "Implemented JWT authentication, role-based access checks and stored audit logs."
    ]
  },
  "rental": {
    "name": "KeretaSewa AI",
    "label": "UMHACKATHON 2026 · 2-PERSON TEAM",
    "intro": "A decision intelligence dashboard for SME car rentals, presenting revenue, utilisation, idle days and booking patterns.",
    "tech": [
      "React",
      "Firebase Firestore",
      "Firebase Authentication",
      "Recharts",
      "PapaParse",
      "jsPDF"
    ],
    "url": "https://github.com/weiru917/keretasewa-ai",
    "contributions": [
      "Developed the React frontend and analytics dashboard to present monthly revenue, utilisation, idle-day summaries and booking patterns from rental records.",
      "Implemented CSV import with duplicate checks against stored bookings, Firestore data operations, Firebase Authentication and PDF report generation."
    ]
  }
}
;
// Local resume asset. Keep this relative for GitHub Pages project sites.
const resumeUrl = './assets/documents/Tan-Wei-Ru-Resume.pdf?v=20261101';
// Project dialogs and shared modal behavior.
const dialog=document.getElementById('detail'),
content=document.getElementById('modalContent');
function openModal(html) {
  content.innerHTML=html;
  dialog.showModal()
}
function showProject(key) {
  const p=projects[key];
  const art=document.querySelector('.projectcard[data-project="'+key+'"] .projectart').innerHTML
    .replace(/id="([^"]+)"/g,'id="modal-$1"').replace(/url\(#/g,'url(#modal-');
  const prototype=p.prototype?`<a class="btn secondary" href="${p.prototype}" target="_blank" rel="noopener noreferrer">Try the prototype ↗</a>`:'';
  const repository=`<a class="btn" href="${p.url}" target="_blank" rel="noopener noreferrer">Explore the repository ↗</a>`;
  const note=key==='wick'?'<p class="modalnote">Pulse estimates are for personal wellness; no clinical validation is claimed.</p>':'';
  openModal(`<div class="eyebrow">${p.label}</div><h2 id="modalTitle">${p.name}</h2><div class="modalart">${art}</div><p>${p.intro}</p><h4>My contribution</h4><ul class="contributions">${p.contributions.map(text=>`<li>${text}</li>`).join('')}</ul><div class="tags">${p.tech.map(text=>`<span>${text}</span>`).join('')}</div><div class="modalactions">${prototype}${repository}</div>${note}`)
}

document.querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>showProject(b.dataset.project)));
document.querySelector('.modalclose').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=> {
  if(e.target===dialog) {
    const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()
  }
}
);
document.getElementById('resumeButton').addEventListener('click',()=>openModal('<div class="eyebrow">RÉSUMÉ / A QUICK INTRODUCTION</div><h2 id="modalTitle">Tan Wei Ru</h2><p>Final-year Software Engineering student at Universiti Malaya with internship experience in software testing and Odoo ERP development. Builds web and mobile applications using Python, React and React Native, translating user requirements into working features.</p><h4>Education</h4><p>Bachelor of Computer Science (Software Engineering), Universiti Malaya · 2023–2027 (Expected).<br>CGPA: 3.79/4.0.</p><h4>Experience</h4><p>QA &amp; ERP Developer Intern at Keyway Digital Labs Sdn. Bhd. · July–September 2026.<br>916 black-box test cases, 130+ bugs reported, and Odoo HR customisation.</p><h4>Competitions</h4><p>ASEAN GeoAI Fusion 2026 — Top 17 Finalist.<br>Programming League National (PLN) 2025 — Open Category National Finalist.</p><p><a href="mailto:tanweiru2004@gmail.com">tanweiru2004@gmail.com</a></p><div class="modalactions"><a class="btn" href="'+resumeUrl+'" download="Tan-Wei-Ru-Resume.pdf">Download résumé ↓</a><a class="btn secondary" href="mailto:tanweiru2004@gmail.com">Say hello ↗</a></div>'));
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
