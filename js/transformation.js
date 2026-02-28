/* ============================================================
   Sentence Transformation Exercise
   ============================================================ */
(function () {
  let questions = [];
  let current = 0;
  let score = 0;

  const body        = document.getElementById('tf-body');
  const complete    = document.getElementById('tf-complete');
  const instructEl  = document.getElementById('tf-instruction');
  const originalEl  = document.getElementById('tf-original');
  const inputEl     = document.getElementById('tf-input');
  const checkBtn    = document.getElementById('tf-check');
  const hintEl      = document.getElementById('tf-hint');
  const feedbackEl  = document.getElementById('tf-feedback');
  const nextBtn     = document.getElementById('tf-next');
  const progressEl  = document.getElementById('tf-progress');
  const scoreEl     = document.getElementById('tf-score');
  const finalScore  = document.getElementById('tf-final-score');
  const restartBtn  = document.getElementById('tf-restart');

  window.init_transformation = function (topic) {
    questions = shuffleArray(filterByTopic(TRANSFORMATION, topic)).slice(0, 10);
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
    instructEl.textContent = q.instruction;
    originalEl.innerHTML = q.original + topicBadge(q.topic);
    inputEl.value = '';
    inputEl.disabled = false;
    checkBtn.style.display = '';

    hintEl.innerHTML = `<button class="hint-toggle" onclick="this.nextElementSibling.classList.toggle('visible')">💡 Show Hint</button>
      <div class="hint-text">${q.hint}</div>`;

    feedbackEl.textContent = '';
    feedbackEl.className = 'feedback-box';
    nextBtn.style.display = 'none';

    progressEl.textContent = `${current + 1} / ${questions.length}`;
    scoreEl.textContent = `Score: ${score}`;

    inputEl.focus();
  }

  function check() {
    const q = questions[current];
    const userAnswer = normalize(inputEl.value);
    const allAnswers = q.alt.map(a => normalize(a));
    const isCorrect = allAnswers.includes(userAnswer) || userAnswer === normalize(q.answer);

    if (isCorrect) {
      score++;
      feedbackEl.textContent = '✅ Correct!';
      feedbackEl.className = 'feedback-box correct';
    } else {
      feedbackEl.innerHTML = `❌ Expected: <strong>${q.answer}</strong>`;
      feedbackEl.className = 'feedback-box wrong';
    }

    inputEl.disabled = true;
    checkBtn.style.display = 'none';
    scoreEl.textContent = `Score: ${score}`;
    nextBtn.style.display = 'inline-block';
  }

  checkBtn.addEventListener('click', check);
  inputEl.addEventListener('keydown', e => { if (e.key === 'Enter') check(); });

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
    window.init_transformation(currentTopic);
  });
})();
