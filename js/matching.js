/* ============================================================
   Matching Exercise
   ============================================================ */
(function () {
  let sets = [];
  let current = 0;
  let score = 0;
  let totalPairs = 0;
  let matchedCount = 0;
  let selectedLeft = null;
  let selectedRight = null;

  const body       = document.getElementById('mt-body');
  const complete   = document.getElementById('mt-complete');
  const titleEl    = document.getElementById('mt-title');
  const leftCol    = document.getElementById('mt-left');
  const rightCol   = document.getElementById('mt-right');
  const feedbackEl = document.getElementById('mt-feedback');
  const nextBtn    = document.getElementById('mt-next');
  const progressEl = document.getElementById('mt-progress');
  const scoreEl    = document.getElementById('mt-score');
  const finalScore = document.getElementById('mt-final-score');
  const restartBtn = document.getElementById('mt-restart');

  window.init_matching = function (topic) {
    sets = shuffleArray(filterByTopic(MATCHING, topic));
    if (sets.length === 0) {
      body.innerHTML = '<p style="text-align:center;padding:2rem;font-weight:700;">No exercises for this topic. Try "All".</p>';
      complete.style.display = 'none';
      return;
    }
    current = 0;
    score = 0;
    totalPairs = sets.reduce((sum, s) => sum + s.pairs.length, 0);
    body.style.display = '';
    complete.style.display = 'none';
    show();
  };

  function show() {
    matchedCount = 0;
    selectedLeft = null;
    selectedRight = null;

    const set = sets[current];
    titleEl.textContent = set.title;

    const shuffledLeft = shuffleArray(set.pairs.map((p, i) => ({ text: p.left, idx: i })));
    const shuffledRight = shuffleArray(set.pairs.map((p, i) => ({ text: p.right, idx: i })));

    leftCol.innerHTML = shuffledLeft.map(item =>
      `<div class="match-item match-left" data-idx="${item.idx}">${item.text}</div>`
    ).join('');

    rightCol.innerHTML = shuffledRight.map(item =>
      `<div class="match-item match-right" data-idx="${item.idx}">${item.text}</div>`
    ).join('');

    feedbackEl.textContent = '';
    feedbackEl.className = 'feedback-box';
    nextBtn.style.display = 'none';

    progressEl.textContent = `Set ${current + 1} / ${sets.length}`;
    scoreEl.textContent = `Score: ${score}`;

    // Event listeners
    leftCol.querySelectorAll('.match-left').forEach(el => {
      el.addEventListener('click', () => selectLeft(el));
    });
    rightCol.querySelectorAll('.match-right').forEach(el => {
      el.addEventListener('click', () => selectRight(el));
    });
  }

  function selectLeft(el) {
    if (el.classList.contains('matched')) return;
    leftCol.querySelectorAll('.match-left').forEach(e => e.classList.remove('selected'));
    el.classList.add('selected');
    selectedLeft = el;
    tryMatch();
  }

  function selectRight(el) {
    if (el.classList.contains('matched')) return;
    rightCol.querySelectorAll('.match-right').forEach(e => e.classList.remove('selected'));
    el.classList.add('selected');
    selectedRight = el;
    tryMatch();
  }

  function tryMatch() {
    if (!selectedLeft || !selectedRight) return;

    const leftIdx = parseInt(selectedLeft.dataset.idx);
    const rightIdx = parseInt(selectedRight.dataset.idx);

    if (leftIdx === rightIdx) {
      // Correct match
      score++;
      matchedCount++;
      selectedLeft.classList.add('matched');
      selectedLeft.classList.remove('selected');
      selectedRight.classList.add('matched');
      selectedRight.classList.remove('selected');
      feedbackEl.textContent = '✅ Matched!';
      feedbackEl.className = 'feedback-box correct';
      scoreEl.textContent = `Score: ${score}`;

      if (matchedCount >= sets[current].pairs.length) {
        feedbackEl.textContent = '🎉 All matched!';
        nextBtn.style.display = 'inline-block';
      }
    } else {
      // Wrong match
      selectedLeft.classList.add('wrong-flash');
      selectedRight.classList.add('wrong-flash');
      feedbackEl.textContent = '❌ Try again!';
      feedbackEl.className = 'feedback-box wrong';

      const l = selectedLeft;
      const r = selectedRight;
      setTimeout(() => {
        l.classList.remove('wrong-flash', 'selected');
        r.classList.remove('wrong-flash', 'selected');
      }, 500);
    }

    selectedLeft = null;
    selectedRight = null;
  }

  nextBtn.addEventListener('click', () => {
    current++;
    if (current >= sets.length) {
      body.style.display = 'none';
      complete.style.display = '';
      finalScore.textContent = `You matched ${score} out of ${totalPairs} pairs! ${score === totalPairs ? '🌟 Perfect!' : score >= totalPairs * 0.7 ? '👏 Great job!' : '💪 Keep practicing!'}`;
    } else {
      show();
    }
  });

  restartBtn.addEventListener('click', () => {
    window.init_matching(currentTopic);
  });
})();
