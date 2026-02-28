/* ============================================================
   Multiple Choice Exercise
   ============================================================ */
(function () {
  let questions = [];
  let current = 0;
  let score = 0;

  const body       = document.getElementById('mc-body');
  const complete   = document.getElementById('mc-complete');
  const questionEl = document.getElementById('mc-question');
  const optionsEl  = document.getElementById('mc-options');
  const feedbackEl = document.getElementById('mc-feedback');
  const nextBtn    = document.getElementById('mc-next');
  const progressEl = document.getElementById('mc-progress');
  const scoreEl    = document.getElementById('mc-score');
  const finalScore = document.getElementById('mc-final-score');
  const restartBtn = document.getElementById('mc-restart');

  window.init_multiple_choice = function (topic) {
    questions = shuffleArray(filterByTopic(MULTIPLE_CHOICE, topic)).slice(0, 10);
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
    questionEl.innerHTML = q.question + topicBadge(q.topic);

    const opts = shuffleArray(q.options);
    optionsEl.innerHTML = opts.map(o =>
      `<button class="option-btn" data-val="${o}">${o}</button>`
    ).join('');

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
      feedbackEl.innerHTML = `✅ Correct! <br><small>${q.explain}</small>`;
      feedbackEl.className = 'feedback-box correct';
    } else {
      btn.classList.add('wrong');
      feedbackEl.innerHTML = `❌ Wrong. The answer is: <strong>${q.answer}</strong><br><small>${q.explain}</small>`;
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
    window.init_multiple_choice(currentTopic);
  });
})();
