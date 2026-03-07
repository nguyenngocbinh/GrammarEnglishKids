/* ================================================================
   Grammar English Kids  App.js
   SPA logic: login, navigation, dashboard, sessions, exercises
================================================================ */

//  APP STATE 
let STATE = {
  user: null,      // { name, level }
  progress: {},    // { sessionId: { done: bool, score: int, total: int, date: str } }
  currentPhaseId: null,
  currentSessionId: null
};

//  STORAGE HELPERS 
const STORAGE_KEY = 'grammarKids_v2';
function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ user: STATE.user, progress: STATE.progress }));
}
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const saved = JSON.parse(raw);
    STATE.user     = saved.user || null;
    STATE.progress = saved.progress || {};
    return !!STATE.user;
  } catch(e) { return false; }
}

//  BOOT 
window.addEventListener('DOMContentLoaded', () => {
  if (loadState() && STATE.user) {
    showApp();
    showDashboard();
  } else {
    document.getElementById('screenLogin').style.display = 'flex';
  }
  initLoginScreen();
  initTopBar();
});

//  LOGIN 
function initLoginScreen() {
  // Level toggle
  document.querySelectorAll('.level-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  document.getElementById('btnStart').addEventListener('click', () => {
    const name  = document.getElementById('inputName').value.trim();
    const level = document.querySelector('.level-btn.active')?.dataset.level || 'easy';
    if (!name) { document.getElementById('inputName').focus(); return; }
    STATE.user     = { name, level };
    STATE.progress = {};
    saveState();
    showApp();
    showDashboard();
  });

  document.getElementById('inputName').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('btnStart').click();
  });
}

//  TOP BAR 
function initTopBar() {
  document.getElementById('btnHome').addEventListener('click', () => {
    showView('screenDashboard');
    updateDashboard();
  });
  document.getElementById('btnLogout').addEventListener('click', () => {
    if (!confirm('Log out? Your progress is saved.')) return;
    STATE.user = null;
    document.getElementById('appWrapper').style.display  = 'none';
    document.getElementById('screenLogin').style.display = 'flex';
    document.getElementById('inputName').value = '';
  });
  document.getElementById('btnBackToDash').addEventListener('click', () => {
    showView('screenDashboard');
    updateDashboard();
  });
  document.getElementById('btnBackToPhase').addEventListener('click', () => {
    showView('screenPhase');
    renderPhase(STATE.currentPhaseId);
  });
  document.getElementById('btnCheckAll').addEventListener('click', checkAllAnswers);
  document.getElementById('btnRetry').addEventListener('click', () => {
    renderSession(STATE.currentSessionId);
  });
  document.getElementById('btnNextSession').addEventListener('click', goNextSession);
  document.getElementById('btnPrintWorksheet').addEventListener('click', () => {
    buildWorksheet(STATE.currentSessionId);
    setTimeout(() => window.print(), 300);
  });
}

//  SHOW / HIDE HELPERS 
function showApp() {
  document.getElementById('screenLogin').style.display = 'none';
  document.getElementById('appWrapper').style.display  = 'block';
  document.getElementById('displayName').textContent  = STATE.user.name;
  document.getElementById('displayLevel').textContent = STATE.user.level === 'easy' ? 'Beginner' : 'Standard';
}

function showView(viewId) {
  document.querySelectorAll('#appWrapper .view').forEach(v => v.classList.remove('active'));
  const el = document.getElementById(viewId);
  if (el) { el.classList.add('active'); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
}

function showDashboard() {
  showView('screenDashboard');
  updateDashboard();
}

//  DASHBOARD 
function updateDashboard() {
  const name = STATE.user?.name || 'Student';
  const hour = new Date().getHours();
  const greet = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
  document.getElementById('dashGreeting').textContent = `${greet}, ${name}! `;

  // Stats
  const done   = Object.values(STATE.progress).filter(p => p.done).length;
  const total  = TOTAL_SESSIONS;
  const score  = Object.values(STATE.progress).reduce((s, p) => s + (p.score || 0), 0);
  const streak = calcStreak();

  document.getElementById('statDone').textContent   = done;
  document.getElementById('statStreak').textContent = streak;
  document.getElementById('statScore').textContent  = score;

  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  document.getElementById('ringPct').textContent = pct + '%';
  // SVG ring: circumference = 2π50  314
  const offset = 314 - (314 * pct / 100);
  document.getElementById('ringFill').style.strokeDashoffset = offset;

  renderRoadmap();
}

function calcStreak() {
  const dates = Object.values(STATE.progress)
    .filter(p => p.done && p.date)
    .map(p => p.date)
    .sort()
    .reverse();
  if (!dates.length) return 0;
  const today = new Date().toISOString().slice(0, 10);
  let streak = 0;
  let check  = today;
  const unique = [...new Set(dates)];
  for (const d of unique) {
    if (d === check) {
      streak++;
      const dt = new Date(check);
      dt.setDate(dt.getDate() - 1);
      check = dt.toISOString().slice(0, 10);
    } else if (d < check) break;
  }
  return streak;
}

//  ROADMAP RENDER 
function renderRoadmap() {
  const el = document.getElementById('roadmapEl');
  el.innerHTML = '';

  // Determine which phases are unlocked: always unlock first; unlock next when previous done  50%
  ROADMAP.forEach((phase, phaseIdx) => {
    const sessionsDone  = phase.sessions.filter(s => STATE.progress[s.id]?.done).length;
    const sessionTotal  = phase.sessions.length;
    const phasePct      = sessionTotal > 0 ? Math.round((sessionsDone / sessionTotal) * 100) : 0;
    const isLocked      = phaseIdx > 0 && !isPhaseUnlocked(phaseIdx);
    const statusLabel   = isLocked ? 'Locked' : sessionsDone === sessionTotal ? 'Complete' : sessionsDone > 0 ? 'In Progress' : 'Not Started';
    const badgeColor    = isLocked ? '#9CA3AF' : sessionsDone === sessionTotal ? '#10B981' : sessionsDone > 0 ? phase.color : '#6B7280';

    // Session chips
    const chips = phase.sessions.map((s, si) => {
      const prog = STATE.progress[s.id];
      const cls  = prog?.done ? 'chip-done' : (!isLocked && si === sessionsDone) ? 'chip-active' : isLocked || si > sessionsDone ? 'chip-locked' : 'chip-done';
      return `<span class="session-chip ${cls}">Day ${si + 1}</span>`;
    }).join('');

    const card = document.createElement('div');
    card.className = `phase-card${isLocked ? ' locked' : ''}`;
    card.style.borderLeftColor = phase.color;
    card.innerHTML = `
      <div class="phase-card-header">
        <div class="phase-icon" style="background:${phase.color}22;">${phase.icon}</div>
        <div class="phase-meta">
          <div class="phase-title">Phase ${phase.phase}: ${phase.title}</div>
          <div class="phase-sub">${phase.subtitle}  ${phase.duration}</div>
        </div>
        <div class="phase-badge" style="background:${badgeColor};">${statusLabel}</div>
      </div>
      <div class="phase-progress-bar-wrap">
        <div class="phase-progress-bar">
          <div class="phase-progress-fill" style="width:${phasePct}%;background:${phase.color};"></div>
        </div>
      </div>
      <div class="phase-session-chips">${chips}</div>`;

    if (!isLocked) {
      card.addEventListener('click', () => {
        STATE.currentPhaseId = phase.id;
        renderPhase(phase.id);
        showView('screenPhase');
      });
    }
    el.appendChild(card);
  });
}

function isPhaseUnlocked(phaseIdx) {
  if (phaseIdx === 0) return true;
  const prev = ROADMAP[phaseIdx - 1];
  const done = prev.sessions.filter(s => STATE.progress[s.id]?.done).length;
  return done >= Math.ceil(prev.sessions.length * 0.5); // unlock next when 50% of previous done
}

//  PHASE DETAIL 
function renderPhase(phaseId) {
  const phase = ROADMAP.find(p => p.id === phaseId);
  if (!phase) return;

  document.getElementById('phaseHeaderInfo').innerHTML = `
    <h2>${phase.icon} Phase ${phase.phase}: ${phase.title}</h2>
    <p>${phase.subtitle}  ${phase.sessions.length} sessions</p>`;

  const list = document.getElementById('sessionsList');
  list.innerHTML = '';

  const phaseDone = phase.sessions.filter(s => STATE.progress[s.id]?.done).length;

  phase.sessions.forEach((session, idx) => {
    const prog      = STATE.progress[session.id];
    const done      = prog?.done || false;
    const isLocked  = !done && idx > 0 && !STATE.progress[phase.sessions[idx - 1].id]?.done;
    const phaseUnlocked = isPhaseUnlocked(ROADMAP.indexOf(phase));
    const locked    = !phaseUnlocked || isLocked;

    const statusIcon = done ? '' : locked ? '' : '';
    const badgeColor  = phase.color;
    const dayBg       = done ? '#D1FAE5' : locked ? '#F3F4F6' : phase.color + '22';
    const dayColor    = done ? '#065F46' : locked ? '#9CA3AF' : phase.color;

    const item = document.createElement('div');
    item.className = `session-item anim-slideIn${done ? ' completed' : ''}${locked ? ' locked' : ''}`;
    item.innerHTML = `
      <div class="session-day-badge" style="background:${dayBg};color:${dayColor};">
        Day ${session.day}
      </div>
      <div class="session-meta">
        <div class="session-title">${session.title}</div>
        <div class="session-objective">${session.objectives.join('  ')}</div>
      </div>
      ${done && prog.score !== undefined ? `<span class="session-score-badge">${prog.score}/${prog.total}</span>` : ''}
      <span class="session-status">${statusIcon}</span>`;

    if (!locked) {
      item.addEventListener('click', () => {
        STATE.currentSessionId  = session.id;
        STATE.currentPhaseId    = phaseId;
        renderSession(session.id);
        showView('screenSession');
      });
    }
    list.appendChild(item);
  });
}

//  SESSION VIEW 
function renderSession(sessionId) {
  const session = SESSION_MAP[sessionId];
  if (!session) return;
  const phase   = session.phaseData;

  // Header
  document.getElementById('sessionHeaderInfo').innerHTML = `
    <h2>${session.title}</h2>
    <p>${phase.icon} Phase ${phase.phase}: ${phase.title}  Day ${session.day}</p>`;

  // Lesson card
  const lesson = session.lesson;
  const rulesHtml = lesson.rules.map(r =>
    `<li class="lesson-rule-item"><span class="rule-icon">${r.icon}</span><span class="rule-text">${r.text}</span></li>`).join('');
  const examplesHtml = lesson.examples.map(ex =>
    `<div class="example-item"><div class="example-en">${ex.en}</div><div class="example-note">${ex.note}</div></div>`).join('');

  document.getElementById('lessonCard').innerHTML = `
    <div class="lesson-hero" style="background:linear-gradient(135deg,${phase.color},${phase.color}cc);">
      <div class="lesson-day-label">Day ${session.day}  Phase ${phase.phase}</div>
      <div class="lesson-title">${session.title}</div>
      <div class="lesson-objectives">
        ${session.objectives.map(o => `<span class="obj-tag">${o}</span>`).join('')}
      </div>
    </div>
    <div class="lesson-body">
      <p class="lesson-explain">${lesson.explanation}</p>
      <ul class="lesson-rules">${rulesHtml}</ul>
      <div class="lesson-examples">${examplesHtml}</div>
    </div>`;

  // Exercises
  const exIds = session.exerciseIds || [];
  const exList = document.getElementById('exercisesList');
  exList.innerHTML = '';
  document.getElementById('btnCheckAll').disabled = false;
  document.getElementById('btnRetry').style.display = 'none';
  document.getElementById('btnNextSession').style.display = 'none';
  document.getElementById('exResult').style.display = 'none';
  updateExScore(0, exIds.length);

  exIds.forEach((id, idx) => {
    const ex = EXERCISES[id];
    if (!ex) return;
    exList.appendChild(buildExerciseItem(ex, idx + 1));
  });

  // Sort items drag-and-drop
  document.querySelectorAll('.sort-container').forEach(initSortDnD);
}

//  BUILD EXERCISE ITEM 
const TYPE_LABELS = { mc:'Multiple Choice', fill:'Fill in the Blank', sort:'Sentence Order', err:'Error Correction', write:'Writing Practice' };

function buildExerciseItem(ex, num) {
  const wrapper = document.createElement('div');
  wrapper.className = 'exercise-item';
  wrapper.dataset.id   = ex.id;
  wrapper.dataset.type = ex.type;

  let bodyHtml = '';
  if (ex.type === 'mc') {
    const optLetters = ['A', 'B', 'C', 'D'];
    const opts = ex.options.map((o, i) =>
      `<div class="mc-option" data-val="${escHtml(o)}"><span class="opt-letter">${optLetters[i]}</span>${escHtml(o)}</div>`).join('');
    bodyHtml = `<div class="ex-question">${escHtml(ex.question)}</div>
      ${ex.hint ? `<div class="ex-hint"> ${escHtml(ex.hint)}</div>` : ''}
      <div class="mc-options">${opts}</div>`;
  } else if (ex.type === 'fill') {
    bodyHtml = `<div class="ex-question">${escHtml(ex.sentence).replace('___', '<input class="fill-input" type="text" placeholder="type answer..." autocomplete="off">')}</div>
      ${ex.hint ? `<div class="ex-hint"> ${escHtml(ex.hint)}</div>` : ''}`;
  } else if (ex.type === 'sort') {
    const shuffled = shuffleArr([...ex.words]);
    const poolHtml = shuffled.map(w => `<span class="sort-word" draggable="true">${escHtml(w)}</span>`).join('');
    bodyHtml = `<div class="ex-question">Arrange the words to make a correct sentence:</div>
      ${ex.hint ? `<div class="ex-hint"> ${escHtml(ex.hint)}</div>` : ''}
      <div class="sort-label">Your sentence:</div>
      <div class="sort-container" data-answer="${escHtml(ex.answer)}"></div>
      <div class="sort-label" style="margin-top:.5rem;">Word bank:</div>
      <div class="sort-pool">${poolHtml}</div>`;
  } else if (ex.type === 'err') {
    bodyHtml = `<div class="ex-question">Find and correct the mistake:<br><em>"${escHtml(ex.wrong)}"</em></div>
      ${ex.hint ? `<div class="ex-hint"> ${escHtml(ex.hint)}</div>` : ''}
      <input class="error-input" type="text" placeholder="Write the corrected sentence..." autocomplete="off">`;
  } else if (ex.type === 'write') {
    bodyHtml = `<div class="ex-question">${escHtml(ex.prompt)}</div>
      <textarea class="write-input" placeholder="Write your answer here..."></textarea>
      <div class="ex-hint" style="margin-top:.4rem;"> Example: <em>${escHtml(ex.example)}</em></div>`;
  }

  wrapper.innerHTML = `
    <div class="ex-item-header">
      <span class="ex-num">${num}</span>
      <span class="ex-type-label">${TYPE_LABELS[ex.type] || ex.type}</span>
      <span class="ex-topic-badge" style="background:${topicColor(ex.topic)}">${ex.topic}</span>
    </div>
    <div class="ex-item-body">${bodyHtml}<div class="ex-feedback"></div></div>`;

  // MC click handler
  if (ex.type === 'mc') {
    wrapper.querySelectorAll('.mc-option').forEach(opt => {
      opt.addEventListener('click', () => {
        if (wrapper.dataset.checked) return;
        wrapper.querySelectorAll('.mc-option').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
      });
    });
  }
  return wrapper;
}

//  SORT DRAG AND DROP 
function initSortDnD(container) {
  const pool = container.nextElementSibling?.nextElementSibling; // sort-pool
  if (!pool) return;

  function setupWord(word) {
    word.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', word.textContent);
      word.classList.add('dragging');
      word._src = word.parentElement;
    });
    word.addEventListener('dragend', () => word.classList.remove('dragging'));
  }

  function setupZone(zone) {
    zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      const dragging = document.querySelector('.dragging');
      if (dragging) zone.appendChild(dragging);
    });
  }

  pool.querySelectorAll('.sort-word').forEach(setupWord);
  setupZone(container);
  setupZone(pool);
}

//  CHECK ALL ANSWERS 
function checkAllAnswers() {
  const session  = SESSION_MAP[STATE.currentSessionId];
  const exIds    = session?.exerciseIds || [];
  let correct = 0, total = 0;

  exIds.forEach(id => {
    const ex      = EXERCISES[id];
    const wrapper = document.querySelector(`.exercise-item[data-id="${id}"]`);
    if (!ex || !wrapper) return;
    wrapper.dataset.checked = '1';

    const fb = wrapper.querySelector('.ex-feedback');
    fb.className = 'ex-feedback';

    if (ex.type === 'mc') {
      total++;
      const sel = wrapper.querySelector('.mc-option.selected');
      if (!sel) { fb.textContent = 'Please select an answer.'; fb.classList.add('wrong'); return; }
      const isOk = sel.dataset.val === ex.answer;
      sel.classList.add(isOk ? 'correct' : 'wrong');
      if (!isOk) {
        wrapper.querySelectorAll('.mc-option').forEach(o => { if (o.dataset.val === ex.answer) o.classList.add('correct'); });
      }
      fb.textContent = isOk ? ' Correct!' : ` Correct answer: "${ex.answer}"`;
      fb.classList.add(isOk ? 'correct' : 'wrong');
      if (isOk) correct++;

    } else if (ex.type === 'fill') {
      total++;
      const input = wrapper.querySelector('.fill-input');
      const val   = input?.value.trim().toLowerCase() || '';
      const ans   = ex.answer.trim().toLowerCase();
      // Accept multiple answers separated by /
      const answers = ans.split('/').map(a => a.trim());
      const isOk  = answers.some(a => val === a);
      input?.classList.add(isOk ? 'correct' : 'wrong');
      fb.textContent = isOk ? ' Correct!' : ` Correct answer: "${ex.answer}"`;
      fb.classList.add(isOk ? 'correct' : 'wrong');
      if (isOk) correct++;

    } else if (ex.type === 'sort') {
      total++;
      const sortCont = wrapper.querySelector('.sort-container');
      const words    = [...sortCont.querySelectorAll('.sort-word')].map(w => w.textContent).join(' ');
      const expected = ex.answer.trim();
      const isOk     = words.trim() === expected;
      fb.textContent = isOk ? ' Correct!' : ` Correct: "${expected}"`;
      fb.classList.add(isOk ? 'correct' : 'wrong');
      if (isOk) correct++;

    } else if (ex.type === 'err') {
      total++;
      const input  = wrapper.querySelector('.error-input');
      const val    = input?.value.trim().toLowerCase() || '';
      const isOk   = val === ex.correct.trim().toLowerCase();
      input?.classList.add(isOk ? 'correct' : 'wrong');
      fb.textContent = isOk ? ' Correct!' : ` Correct: "${ex.correct}"`;
      fb.classList.add(isOk ? 'correct' : 'wrong');
      if (isOk) correct++;

    } else if (ex.type === 'write') {
      // Writing is self-assessed
      const ta = wrapper.querySelector('.write-input');
      if (ta?.value.trim().length > 10) {
        total++;
        correct++; // Award point for any non-trivial response
        fb.textContent = ' Good effort! Compare with the example above.';
        fb.classList.add('correct');
      }
    }
  });

  updateExScore(correct, total);
  showResult(correct, total);

  // Save progress
  if (STATE.currentSessionId) {
    STATE.progress[STATE.currentSessionId] = {
      done: true,
      score: correct,
      total: total,
      date: new Date().toISOString().slice(0, 10)
    };
    saveState();
  }

  document.getElementById('btnCheckAll').disabled = true;
  document.getElementById('btnRetry').style.display = 'inline-block';

  // Show next session button if not last session
  const nextId = findNextSessionId(STATE.currentSessionId);
  if (nextId) {
    const btn = document.getElementById('btnNextSession');
    btn.style.display = 'inline-block';
    btn._nextId = nextId;
  }
}

function updateExScore(correct, total) {
  document.getElementById('exScore').innerHTML = `Score: <strong>${correct} / ${total}</strong>`;
}

function showResult(correct, total) {
  const el  = document.getElementById('exResult');
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  let cls, msg;
  if (pct >= 80) { cls = 'excellent'; msg = ` Excellent! You scored ${correct}/${total} (${pct}%). Great work!`; }
  else if (pct >= 50)  { cls = 'good';      msg = ` Good job! You scored ${correct}/${total} (${pct}%). Review the mistakes and try again.`; }
  else                 { cls = 'poor';      msg = ` You scored ${correct}/${total} (${pct}%). Review the lesson and try again!`; }
  el.className = `ex-result ${cls}`;
  el.textContent = msg;
  el.style.display = 'block';
  el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

//  NEXT SESSION 
function findNextSessionId(currentId) {
  for (const phase of ROADMAP) {
    const idx = phase.sessions.findIndex(s => s.id === currentId);
    if (idx === -1) continue;
    if (idx + 1 < phase.sessions.length) return phase.sessions[idx + 1].id;
    // Next phase
    const phaseIdx = ROADMAP.indexOf(phase);
    if (phaseIdx + 1 < ROADMAP.length) return ROADMAP[phaseIdx + 1].sessions[0].id;
    return null;
  }
  return null;
}

function goNextSession() {
  const btn    = document.getElementById('btnNextSession');
  const nextId = btn._nextId;
  if (!nextId) return;
  const nextSession = SESSION_MAP[nextId];
  if (nextSession) {
    STATE.currentPhaseId   = nextSession.phase;
    STATE.currentSessionId = nextId;
    renderSession(nextId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

//  UTILITIES 
function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function shuffleArr(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const TOPIC_COLORS = {
  nouns: '#6C63FF', articles: '#FF9800', pronouns: '#FF6B93',
  tenses: '#00C9A7', adjectives: '#FFAA00', adverbs: '#E91E63',
  prepositions: '#795548', conjunctions: '#009688', relatives: '#3F51B5',
  modals: '#9C27B0', passive: '#607D8B', conditionals: '#F44336',
  gerunds: '#E94560', reportedspeech: '#4ECDC4', mixed: '#6C63FF', structure: '#00BCD4'
};
function topicColor(t) { return TOPIC_COLORS[t] || '#6C63FF'; }
