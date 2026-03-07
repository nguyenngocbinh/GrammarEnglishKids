/* ================================================================
   Grammar English Kids  Worksheet Builder
   Generates printable HTML into #worksheetPrint and triggers print
================================================================ */

function buildWorksheet(sessionId) {
  const session = SESSION_MAP[sessionId];
  if (!session) return;
  const phase   = session.phaseData;
  const lesson  = session.lesson;
  const exIds   = session.exerciseIds || [];
  const today   = new Date().toLocaleDateString('en-GB', { day:'2-digit', month:'long', year:'numeric' });

  // --- Lesson summary ---
  const rulesText = lesson.rules.map((r, i) =>
    `<p class="ws-lesson-rule">${i + 1}. ${r.text}</p>`).join('');
  const examplesText = lesson.examples.map(ex =>
    `<p class="ws-example"> ${ex.en} <em style="color:#555;">[${ex.note}]</em></p>`).join('');

  // --- Exercise items ---
  let exHtml = '';
  const filteredExs = exIds
    .map(id => EXERCISES[id])
    .filter(Boolean)
    .filter(ex => ex.type !== 'write' ? true : true); // include all

  filteredExs.forEach((ex, idx) => {
    exHtml += `<div class="ws-ex-item">`;
    exHtml += `<span class="ws-ex-num">${idx + 1}.</span> `;

    if (ex.type === 'mc') {
      exHtml += `<strong>${ex.question}</strong><br>`;
      const letters = ['A', 'B', 'C', 'D'];
      ex.options.forEach((opt, i) => {
        exHtml += `<p class="ws-mc-option">${letters[i]}. ${opt}</p>`;
      });
      exHtml += `<p class="ws-mc-option" style="color:#fff;">Answer: ______</p>`; // invisible placeholder for answer line

    } else if (ex.type === 'fill') {
      const q = ex.sentence.replace('___', '<span class="ws-blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>');
      exHtml += `${q}`;

    } else if (ex.type === 'sort') {
      exHtml += `<strong>Arrange the words:</strong> <em>${ex.words.sort(() => Math.random() - 0.5).join(' / ')}</em><br>`;
      exHtml += `<span class="ws-blank" style="width:140mm;">&nbsp;</span>`;

    } else if (ex.type === 'err') {
      exHtml += `<strong>Find and correct the mistake:</strong><br>"<em>${ex.wrong}</em>"<br>`;
      exHtml += `Correction: <span class="ws-blank" style="width:100mm;">&nbsp;</span>`;

    } else if (ex.type === 'write') {
      exHtml += `<strong>${ex.prompt}</strong>`;
      for (let i = 0; i < 4; i++) exHtml += `<div class="ws-write-line"></div>`;
    }

    exHtml += `</div>`;
  });

  // --- Answer Key (appears on page 2) ---
  let answerHtml = '';
  filteredExs.forEach((ex, idx) => {
    if (ex.type === 'mc' || ex.type === 'fill' || ex.type === 'sort' || ex.type === 'err') {
      const ans = ex.answer || ex.correct || '';
      answerHtml += `<p style="font-size:10pt; margin:1mm 0;"><strong>${idx + 1}.</strong> ${ans}</p>`;
    } else if (ex.type === 'write') {
      answerHtml += `<p style="font-size:10pt; margin:1mm 0;"><strong>${idx + 1}.</strong> <em>Open answer. Example: ${ex.example}</em></p>`;
    }
  });

  // --- Build full worksheet HTML ---
  const html = `
<div class="ws-page">
  <div class="ws-score-box">Score: _____ / ${filteredExs.length}</div>
  <div class="ws-logo"> Grammar English Kids</div>
  <div class="ws-title">${session.title}</div>
  <div class="ws-sub">Phase ${phase.phase}: ${phase.title}  Day ${session.day}</div>
  <hr class="ws-divider">
  <div class="ws-info-row">
    <div class="ws-info-field">Name: ___________________________</div>
    <div class="ws-info-field">Class: __________</div>
    <div class="ws-info-field">Date: ${today}</div>
  </div>

  <div class="ws-section-title">A. Grammar Notes</div>
  <div class="ws-lesson-box">
    <h3>${session.title}</h3>
    <p>${stripHtml(lesson.explanation)}</p>
    ${rulesText}
    <div class="ws-examples">
      <strong>Examples:</strong>
      ${examplesText}
    </div>
  </div>

  <div class="ws-section-title">B. Practice Exercises</div>
  ${exHtml}

  <div class="ws-footer">
    Grammar English Kids  Phase ${phase.phase}: ${phase.title}  Day ${session.day}  ${today}
  </div>
</div>

<div class="ws-page">
  <div class="ws-logo"> Grammar English Kids</div>
  <div class="ws-title">Answer Key  ${session.title}</div>
  <div class="ws-sub">Phase ${phase.phase}: ${phase.title}  Day ${session.day}</div>
  <hr class="ws-divider">
  <div class="ws-section-title">Answers</div>
  ${answerHtml}
  <div class="ws-footer">
    Grammar English Kids  Answer Key  ${today}
  </div>
</div>`;

  document.getElementById('worksheetPrint').innerHTML = html;
}

// Strip basic HTML tags for plain-text print context
function stripHtml(str) {
  return (str || '').replace(/<strong>/g, '').replace(/<\/strong>/g, '')
    .replace(/<em>/g, '').replace(/<\/em>/g, '')
    .replace(/<[^>]+>/g, '');
}
