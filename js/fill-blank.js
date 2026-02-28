/* ============================================================
   Fill in the Blank Exercise
   ============================================================ */
(function () {
  let questions = [];
  let current = 0;
  let score = 0;

  const body     = document.getElementById('fb-body');
  const complete  = document.getElementById('fb-complete');
  const questionEl = document.getElementById('fb-question');
  const optionsEl  = document.getElementById('fb-options');
  const hintEl     = document.getElementById('fb-hint');
  const feedbackEl = document.getElementById('fb-feedback');
  const nextBtn    = document.getElementById('fb-next');
  const progressEl = document.getElementById('fb-progress');
  const scoreEl    = document.getElementById('fb-score');
  const finalScore = document.getElementById('fb-final-score');
  const restartBtn = document.getElementById('fb-restart');

  window.init_fill_blank = function (topic) {
    questions = shuffleArray(filterByTopic(FILL_BLANK, topic)).slice(0, 10);
    if (questions.length === 0) {
      body.innerHTML = '<p style="text-align:center;padding:2rem;font-weight:700;">No questions for this topic. Try "All".</p>';
      complete.style.display = 'none';
      return;
    }
    current = 0;
    score = 0;
    body.style.display = '';
    complete.style.display = 'none';
    show();
  };

  function show() {
    const q = questions[current];
    const parts = q.sentence.split('___');
    questionEl.innerHTML = parts.map((p, i) =>
      i < parts.length - 1 ? `${p}<span class="blank">___</span>` : p
    ).join('') + topicBadge(q.topic);

    const opts = shuffleArray(q.options);
    optionsEl.innerHTML = opts.map(o =>
      `<button class="option-btn" data-val="${o}">${o}</button>`
    ).join('');

    hintEl.innerHTML = `<button class="hint-toggle" onclick="this.nextElementSibling.classList.toggle('visible')">💡 Show Hint</button>
      <div class="hint-text">${q.hint}</div>`;

    feedbackEl.textContent = '';
    feedbackEl.className = 'feedback-box';
    nextBtn.style.display = 'none';

    optionsEl.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => answer(btn));
    });

    progressEl.textContent = `${current + 1} / ${questions.length}`;
    scoreEl.textContent = `Score: ${score}`;
  }

  function answer(btn) {
    const q = questions[current];
    const isCorrect = btn.dataset.val === q.answer;

    optionsEl.querySelectorAll('.option-btn').forEach(b => {
      b.classList.add('disabled');
      if (b.dataset.val === q.answer) b.classList.add('correct');
    });

    if (isCorrect) {
      score++;
      btn.classList.add('correct');
      feedbackEl.textContent = '✅ Correct!';
      feedbackEl.className = 'feedback-box correct';
    } else {
      btn.classList.add('wrong');
      feedbackEl.textContent = `❌ The answer is: ${q.answer}`;
      feedbackEl.className = 'feedback-box wrong';
    }

    scoreEl.textContent = `Score: ${score}`;
    nextBtn.style.display = 'inline-block';
  }

  nextBtn.addEventListener('click', () => {
    current++;
    if (current >= questions.length) {
      body.style.display = 'none';
      complete.style.display = '';
      finalScore.textContent = `You got ${score} out of ${questions.length} correct! ${score === questions.length ? '🌟 Perfect!' : score >= questions.length * 0.7 ? '👏 Great job!' : '💪 Keep practicing!'}`;
    } else {
      show();
    }
  });

  restartBtn.addEventListener('click', () => {
    window.init_fill_blank(currentTopic);
  });
})();
