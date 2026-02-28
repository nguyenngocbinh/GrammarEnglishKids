/* ============================================================
   Sentence Order Exercise
   ============================================================ */
(function () {
  let questions = [];
  let current = 0;
  let score = 0;
  let arranged = [];

  const body       = document.getElementById('so-body');
  const complete   = document.getElementById('so-complete');
  const arrangedEl = document.getElementById('so-arranged');
  const bankEl     = document.getElementById('so-bank');
  const feedbackEl = document.getElementById('so-feedback');
  const checkBtn   = document.getElementById('so-check');
  const clearBtn   = document.getElementById('so-clear');
  const nextBtn    = document.getElementById('so-next');
  const progressEl = document.getElementById('so-progress');
  const scoreEl    = document.getElementById('so-score');
  const finalScore = document.getElementById('so-final-score');
  const restartBtn = document.getElementById('so-restart');

  window.init_sentence_order = function (topic) {
    questions = shuffleArray(filterByTopic(SENTENCE_ORDER, topic)).slice(0, 10);
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
    arranged = [];
    const q = questions[current];
    const shuffled = shuffleArray(q.words);

    renderBank(shuffled);
    renderArranged();

    feedbackEl.textContent = '';
    feedbackEl.className = 'feedback-box';
    nextBtn.style.display = 'none';
    checkBtn.style.display = '';
    clearBtn.style.display = '';

    progressEl.textContent = `${current + 1} / ${questions.length}`;
    scoreEl.textContent = `Score: ${score}`;
  }

  function renderBank(words) {
    bankEl.innerHTML = words.map((w, i) => {
      const used = arranged.includes(i) ? 'used' : '';
      return `<span class="word-chip ${used}" data-idx="${i}">${w}</span>`;
    }).join('');

    bankEl.querySelectorAll('.word-chip:not(.used)').forEach(chip => {
      chip.addEventListener('click', () => {
        arranged.push(parseInt(chip.dataset.idx));
        chip.classList.add('used');
        renderArranged();
      });
    });
  }

  function renderArranged() {
    const q = questions[current];
    const shuffled = shuffleArray.__lastResult || shuffleArray(q.words);
    // Reconstruct from bank
    const bankChips = bankEl.querySelectorAll('.word-chip');
    const wordList = Array.from(bankChips).map(c => c.textContent);

    arrangedEl.innerHTML = arranged.map((idx, pos) =>
      `<span class="word-chip" data-pos="${pos}">${wordList[idx]}</span>`
    ).join('') || '<span style="color:#aaa;font-style:italic;">Click words below to build the sentence...</span>';

    arrangedEl.querySelectorAll('.word-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const pos = parseInt(chip.dataset.pos);
        const idx = arranged[pos];
        arranged.splice(pos, 1);
        // un-use in bank
        const bankChip = bankEl.querySelector(`[data-idx="${idx}"]`);
        if (bankChip) {
          bankChip.classList.remove('used');
          bankChip.addEventListener('click', () => {
            if (!bankChip.classList.contains('used')) {
              arranged.push(parseInt(bankChip.dataset.idx));
              bankChip.classList.add('used');
              renderArranged();
            }
          });
        }
        renderArranged();
      });
    });
  }

  checkBtn.addEventListener('click', () => {
    const q = questions[current];
    const bankChips = bankEl.querySelectorAll('.word-chip');
    const wordList = Array.from(bankChips).map(c => c.textContent);
    const userSentence = arranged.map(idx => wordList[idx]).join(' ');
    const correct = normalize(userSentence) === normalize(q.answer);

    if (correct) {
      score++;
      feedbackEl.textContent = '✅ Correct!';
      feedbackEl.className = 'feedback-box correct';
    } else {
      feedbackEl.innerHTML = `❌ Correct order: <strong>${q.answer}</strong>`;
      feedbackEl.className = 'feedback-box wrong';
    }

    scoreEl.textContent = `Score: ${score}`;
    checkBtn.style.display = 'none';
    clearBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
  });

  clearBtn.addEventListener('click', () => {
    arranged = [];
    bankEl.querySelectorAll('.word-chip').forEach(c => c.classList.remove('used'));
    // Re-setup click events
    bankEl.querySelectorAll('.word-chip').forEach(chip => {
      chip.replaceWith(chip.cloneNode(true));
    });
    bankEl.querySelectorAll('.word-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        arranged.push(parseInt(chip.dataset.idx));
        chip.classList.add('used');
        renderArranged();
      });
    });
    renderArranged();
  });

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
    window.init_sentence_order(currentTopic);
  });
})();
