/* ============================================================
   GrammarEnglish Kids – Main JS
   Navigation, topic filtering, utilities
   ============================================================ */

// ── Utilities ──
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalize(str) {
  return str.trim().toLowerCase().replace(/\s+/g, ' ').replace(/['']/g, "'");
}

function topicBadge(topicKey) {
  const t = TOPICS[topicKey];
  if (!t) return '';
  return `<span class="topic-badge" style="background:${t.color};color:#fff;padding:2px 8px;border-radius:20px;font-size:.7rem;font-weight:700;margin-left:6px;">${t.emoji} ${t.label}</span>`;
}

// ── Navigation ──
const navBtns = document.querySelectorAll('.nav-btn');
const panels  = document.querySelectorAll('.game-panel');
const topicFilter = document.getElementById('topicFilter');
let currentGame = 'home';
let currentTopic = 'all';

function switchGame(game) {
  currentGame = game;
  navBtns.forEach(b => b.classList.toggle('active', b.dataset.game === game));
  panels.forEach(p => p.classList.toggle('active', p.id === `panel-${game}`));
  topicFilter.style.display = (game === 'home' || game === 'learning-guide') ? 'none' : 'flex';

  // trigger init
  if (game === 'learning-guide' && window.initLearningGuide) {
    window.initLearningGuide();
  } else if (game !== 'home' && window[`init_${game.replace(/-/g, '_')}`]) {
    window[`init_${game.replace(/-/g, '_')}`](currentTopic);
  }
}

navBtns.forEach(btn => btn.addEventListener('click', () => switchGame(btn.dataset.game)));

// Exercise cards on home
document.querySelectorAll('.exercise-card').forEach(card => {
  card.addEventListener('click', () => switchGame(card.dataset.game));
});

// ── Topic Filter ──
document.querySelectorAll('.topic-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentTopic = btn.dataset.topic;
    document.querySelectorAll('.topic-btn').forEach(b => b.classList.toggle('active', b.dataset.topic === currentTopic));
    if (currentGame !== 'home' && window[`init_${currentGame.replace(/-/g, '_')}`]) {
      window[`init_${currentGame.replace(/-/g, '_')}`](currentTopic);
    }
  });
});

// ── Build Topics Grid on Home ──
function buildTopicsGrid() {
  const grid = document.getElementById('topicsGrid');
  if (!grid) return;
  let html = '';
  for (const [key, topic] of Object.entries(TOPICS)) {
    const tips = GRAMMAR_TIPS[key] || [];
    html += `<div class="topic-card" style="border-left-color:${topic.color}">
      <div class="topic-card-header">
        <span class="emoji">${topic.emoji}</span>
        <h3>${topic.label}</h3>
      </div>`;
    tips.forEach(tip => {
      html += `<div class="tip-item">
        <strong>${tip.title}</strong>
        <span class="tip-rule">${tip.rule}</span>
        <span class="tip-example">e.g. ${tip.example}</span>
      </div>`;
    });
    html += '</div>';
  }
  grid.innerHTML = html;
}

buildTopicsGrid();

// ── Filter data by topic ──
function filterByTopic(data, topic) {
  if (topic === 'all') return [...data];
  return data.filter(item => item.topic === topic);
}
