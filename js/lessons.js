/* ============================================================
   GrammarEnglish Kids – Learning Guide & Lessons Modal
   ============================================================ */
(function () {
  'use strict';

  /* ── DOM refs ── */
  const guideTopicsGrid = document.getElementById('guideTopicsGrid');
  const tipsGrid        = document.getElementById('tipsGrid');
  const pathTimeline    = document.getElementById('pathTimeline');
  const modal           = document.getElementById('lessonModal');
  const modalClose      = document.getElementById('modalClose');
  const modalTitle      = document.getElementById('modalTitle');
  const modalIntro      = document.getElementById('modalIntro');
  const modalBody       = document.getElementById('modalBody');
  const modalQuiz       = document.getElementById('modalQuiz');
  const guideTabs       = document.querySelectorAll('.guide-tab');
  const guideContents   = document.querySelectorAll('.guide-content');
  const modalTabs       = document.querySelectorAll('.modal-tab');

  let initialized = false;

  /* ═══════════════════════════════════════
     Public init – called from switchGame
     ═══════════════════════════════════════ */
  window.initLearningGuide = function () {
    if (initialized) return;
    initialized = true;
    buildGuideTopics();
    buildStudyTips();
    buildLearningPath();
  };

  /* ═══════════════════════════════════════
     Guide Tabs
     ═══════════════════════════════════════ */
  guideTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      guideTabs.forEach(t => t.classList.remove('active'));
      guideContents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
    });
  });

  /* ═══════════════════════════════════════
     Build Guide Topics Grid
     ═══════════════════════════════════════ */
  function buildGuideTopics() {
    if (!guideTopicsGrid) return;
    let html = '';
    const levelMap = {};
    LEARNING_PATH.forEach(s => s.topics.forEach(t => { levelMap[t] = { level: s.level, color: s.color }; }));

    for (const [key, topic] of Object.entries(TOPICS)) {
      const lesson = GRAMMAR_LESSONS[key];
      if (!lesson) continue;
      const lvl = levelMap[key] || { level: '', color: '#999' };
      html += `
        <div class="guide-topic-card" data-topic-key="${key}">
          <div class="tc-icon">${topic.emoji}</div>
          <h3>${topic.label}</h3>
          <p>${lesson.intro.substring(0, 80)}…</p>
          <span class="tc-badge" style="background:${lvl.color}">${lvl.level}</span>
        </div>`;
    }
    guideTopicsGrid.innerHTML = html;

    /* attach click */
    guideTopicsGrid.querySelectorAll('.guide-topic-card').forEach(card => {
      card.addEventListener('click', () => openLessonModal(card.dataset.topicKey));
    });
  }

  /* ═══════════════════════════════════════
     Build Study Tips
     ═══════════════════════════════════════ */
  function buildStudyTips() {
    if (!tipsGrid) return;
    let html = '';
    STUDY_TIPS.forEach(tip => {
      html += `
        <div class="tip-card">
          <div class="tip-icon">${tip.icon}</div>
          <div>
            <h3>${tip.title}</h3>
            <p>${tip.text}</p>
          </div>
        </div>`;
    });
    tipsGrid.innerHTML = html;
  }

  /* ═══════════════════════════════════════
     Build Learning Path Timeline
     ═══════════════════════════════════════ */
  function buildLearningPath() {
    if (!pathTimeline) return;
    let html = '';
    LEARNING_PATH.forEach(step => {
      const topicLabels = step.topics.map(t => TOPICS[t] ? `${TOPICS[t].emoji} ${TOPICS[t].label}` : t).join(', ');
      html += `
        <div class="path-step" data-step="${step.step}" style="border-left-color:${step.color}" data-topics="${step.topics.join(',')}">
          <style>.path-step[data-step="${step.step}"]::before{background:${step.color}}</style>
          <div class="path-step-header">
            <span class="path-level" style="background:${step.color}">${step.level}</span>
            <h3>${topicLabels}</h3>
          </div>
          <p>${step.description}</p>
        </div>`;
    });
    pathTimeline.innerHTML = html;

    /* click to open first topic's lesson */
    pathTimeline.querySelectorAll('.path-step').forEach(el => {
      el.addEventListener('click', () => {
        const topics = el.dataset.topics.split(',');
        if (topics.length && GRAMMAR_LESSONS[topics[0]]) {
          openLessonModal(topics[0]);
        }
      });
    });
  }

  /* ═══════════════════════════════════════
     Open Lesson Modal
     ═══════════════════════════════════════ */
  function openLessonModal(topicKey) {
    const lesson = GRAMMAR_LESSONS[topicKey];
    if (!lesson) return;

    modalTitle.textContent = lesson.title;
    modalIntro.textContent = lesson.intro;

    /* render lesson content */
    let html = '';
    lesson.sections.forEach(sec => {
      html += `<div class="lesson-section">`;
      html += `<h3>${sec.heading}</h3>`;
      html += `<div class="lesson-explanation">${sec.explanation}</div>`;

      if (sec.formation && sec.formation.length) {
        html += `<ul class="formation-box">`;
        sec.formation.forEach(f => { html += `<li>${f}</li>`; });
        html += `</ul>`;
      }

      if (sec.examples && sec.examples.length) {
        html += `<div class="examples-box"><h4>Examples</h4><ul>`;
        sec.examples.forEach(e => { html += `<li>${e}</li>`; });
        html += `</ul></div>`;
      }

      if (sec.signals && sec.signals.length) {
        html += `<div class="signals-box">`;
        sec.signals.forEach(s => { html += `<span class="signal-tag">${s}</span>`; });
        html += `</div>`;
      }

      if (sec.warnings && sec.warnings.length) {
        html += `<ul class="warnings-box">`;
        sec.warnings.forEach(w => { html += `<li>${w}</li>`; });
        html += `</ul>`;
      }

      html += `</div>`; // .lesson-section
    });
    modalBody.innerHTML = html;

    /* render quiz */
    if (lesson.quiz && lesson.quiz.length) {
      let qhtml = '<h3 style="font-family:var(--font-display);color:var(--primary);margin-bottom:1rem;">🧩 Quick Quiz – Test Yourself!</h3>';
      lesson.quiz.forEach((item, i) => {
        qhtml += `
          <div class="quiz-item" id="qi-${i}">
            <div class="quiz-question">${i + 1}. ${item.q}</div>
            <div class="quiz-input-row">
              <input type="text" class="quiz-input" id="qa-${i}" placeholder="Your answer…" autocomplete="off">
              <button class="quiz-check-btn" data-idx="${i}">Check</button>
            </div>
            <div class="quiz-hint">💡 Hint: ${item.hint}</div>
            <div class="quiz-result" id="qr-${i}"></div>
          </div>`;
      });
      modalQuiz.innerHTML = qhtml;

      /* quiz check buttons */
      modalQuiz.querySelectorAll('.quiz-check-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.dataset.idx);
          const input = document.getElementById('qa-' + idx);
          const result = document.getElementById('qr-' + idx);
          const item = lesson.quiz[idx];
          const qItem = document.getElementById('qi-' + idx);
          const userAns = input.value.trim().toLowerCase();
          const correct = item.a.toLowerCase();

          if (!userAns) return;

          // check if answer contains the correct answer (flexible matching)
          if (userAns === correct || correct.includes(userAns) || userAns.includes(correct)) {
            result.className = 'quiz-result correct';
            result.textContent = '✅ Correct! ' + item.a;
            qItem.classList.add('answered-correct');
          } else {
            result.className = 'quiz-result wrong';
            result.textContent = '❌ The answer is: ' + item.a;
            qItem.classList.add('answered-wrong');
          }
          btn.disabled = true;
          input.disabled = true;
        });
      });

      /* enter key */
      modalQuiz.querySelectorAll('.quiz-input').forEach(input => {
        input.addEventListener('keydown', e => {
          if (e.key === 'Enter') {
            const btn = input.parentElement.querySelector('.quiz-check-btn');
            if (btn && !btn.disabled) btn.click();
          }
        });
      });
    } else {
      modalQuiz.innerHTML = '<p>No quiz available for this topic yet.</p>';
    }

    /* reset modal tabs to lesson view */
    modalTabs.forEach(t => t.classList.toggle('active', t.dataset.mtab === 'lesson'));
    modalBody.style.display = '';
    modalQuiz.style.display = 'none';

    /* show modal */
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    modal.scrollTop = 0;
  }

  /* ═══════════════════════════════════════
     Modal Tabs (Lesson / Quiz)
     ═══════════════════════════════════════ */
  modalTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      modalTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      if (tab.dataset.mtab === 'lesson') {
        modalBody.style.display = '';
        modalQuiz.style.display = 'none';
      } else {
        modalBody.style.display = 'none';
        modalQuiz.style.display = '';
      }
    });
  });

  /* ═══════════════════════════════════════
     Close Modal
     ═══════════════════════════════════════ */
  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  /* ═══════════════════════════════════════
     Hook: Topic cards on HOME page also open modal
     ═══════════════════════════════════════ */
  document.addEventListener('click', e => {
    const topicCard = e.target.closest('.topic-card');
    if (topicCard && topicCard.closest('#panel-home')) {
      // figure out the topic key from the card content
      const headerEl = topicCard.querySelector('h3');
      if (!headerEl) return;
      const label = headerEl.textContent.trim();
      for (const [key, topic] of Object.entries(TOPICS)) {
        if (topic.label === label) {
          openLessonModal(key);
          break;
        }
      }
    }
  });

})();
