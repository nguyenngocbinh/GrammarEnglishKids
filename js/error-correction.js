/* ============================================================
   Error Correction Exercise
   ============================================================ */
(function () {
  let questions = [];
  let current = 0;
  let score = 0;
  let selectedWord = null;

  const body       = document.getElementById('ec-body');
  const complete   = document.getElementById('ec-complete');
  const sentenceEl = document.getElementById('ec-sentence');
  const wordsEl    = document.getElementById('ec-words');
  const fixArea    = document.getElementById('ec-fix-area');
  const fixInput   = document.getElementById('ec-fix-input');
  const fixCheck   = document.getElementById('ec-fix-check');
  const feedbackEl = document.getElementById('ec-feedback');
  const nextBtn    = document.getElementById('ec-next');
  const progressEl = document.getElementById('ec-progress');
  const scoreEl    = document.getElementById('ec-score');
  const finalScore = document.getElementById('ec-final-score');
  const restartBtn = document.getElementById('ec-restart');

  window.init_error_correction = function (topic) {
    questions = shuffleArray(filterByTopic(ERROR_CORRECTION, topic)).slice(0, 10);
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
    selectedWord = null;
    const q = questions[current];

    sentenceEl.innerHTML = `<span style="color:#c62828;">❌</span> "${q.wrong}" ${topicBadge(q.topic)}`;

    // Split sentence into clickable words
    const words = q.wrong.split(/\s+/);
    wordsEl.innerHTML = words.map((w, i) =>
      `<button class="word-btn" data-word="${w}" data-idx="${i}">${w}</button>`
    ).join('');

    wordsEl.querySelectorAll('.word-btn').forEach(btn => {
      btn.addEventListener('click', () => selectWord(btn, q));
    });

    fixArea.style.display = 'none';
    fixInput.value = '';
    feedbackEl.textContent = '';
    feedbackEl.className = 'feedback-box';
    nextBtn.style.display = 'none';

    progressEl.textContent = `${current + 1} / ${questions.length}`;
    scoreEl.textContent = `Score: ${score}`;
  }

  function selectWord(btn, q) {
    if (selectedWord !== null) return; // already selected
    wordsEl.querySelectorAll('.word-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');

    // Check if the clicked word is part of the error
    const clickedWord = btn.dataset.word;
    const errorWords = q.errorWord.split(/\s+/);

    if (errorWords.some(ew => normalize(clickedWord).includes(normalize(ew))) ||
        normalize(clickedWord) === normalize(errorWords[0])) {
      // Correct word identified – now ask for fix
      selectedWord = clickedWord;
      fixArea.style.display = 'flex';
      fixInput.focus();
    } else {
      btn.classList.add('selected');
      feedbackEl.textContent = `❌ That's not the error word. The error is in: "${q.errorWord}"`;
      feedbackEl.className = 'feedback-box wrong';
      selectedWord = 'wrong';

      // Highlight correct error word
      wordsEl.querySelectorAll('.word-btn').forEach(b => {
        if (errorWords.some(ew => normalize(b.dataset.word).includes(normalize(ew)))) {
          b.classList.add('correct-word');
        }
      });

      nextBtn.style.display = 'inline-block';
    }
  }

  fixCheck.addEventListener('click', checkFix);
  fixInput.addEventListener('keydown', e => { if (e.key === 'Enter') checkFix(); });

  function checkFix() {
    const q = questions[current];
    const userFix = normalize(fixInput.value);
    const correctFix = normalize(q.fixWord);

    if (userFix === correctFix) {
      score++;
      feedbackEl.innerHTML = `✅ Correct! "${q.correct}"<br><small>📌 ${q.rule}</small>`;
      feedbackEl.className = 'feedback-box correct';
    } else {
      feedbackEl.innerHTML = `❌ The correct fix is: <strong>${q.fixWord}</strong><br>"${q.correct}"<br><small>📌 ${q.rule}</small>`;
      feedbackEl.className = 'feedback-box wrong';
    }

    fixArea.style.display = 'none';
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
    window.init_error_correction(currentTopic);
  });
})();
