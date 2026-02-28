/* ============================================================
   GrammarEnglish Kids – Floating Dictionary Widget
   Features: Google Translate & Oxford iframe, Web Speech API
             pronunciation, search history, topic word suggestions
   ============================================================ */
(function () {
  'use strict';

  /* ── DOM refs ── */
  const fab          = document.getElementById('dictFab');
  const widget       = document.getElementById('dictWidget');
  const closeBtn     = document.getElementById('dictClose');
  const input        = document.getElementById('dictInput');
  const speakBtn     = document.getElementById('dictSpeak');
  const googleBtn    = document.getElementById('dictGoogle');
  const oxfordBtn    = document.getElementById('dictOxford');
  const iframe       = document.getElementById('dictIframe');
  const fallback     = document.getElementById('dictFallback');
  const fallbackLink = document.getElementById('dictFallbackLink');
  const historyList  = document.getElementById('dictHistoryList');
  const clearHistBtn = document.getElementById('dictClearHistory');
  const suggestTopics = document.getElementById('dictSuggestTopics');
  const suggestWords  = document.getElementById('dictSuggestWords');
  const tabs         = document.querySelectorAll('.dict-tab');
  const panels       = document.querySelectorAll('.dict-panel');

  const HISTORY_KEY = 'grammarDict_history';
  const MAX_HISTORY = 30;

  /* ═════════════════════════════
     Toggle Widget
     ═════════════════════════════ */
  fab.addEventListener('click', () => {
    widget.classList.toggle('open');
    if (widget.classList.contains('open')) {
      input.focus();
      loadHistory();
      buildSuggestTopics();
    }
  });

  closeBtn.addEventListener('click', () => widget.classList.remove('open'));

  /* Close on Escape */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && widget.classList.contains('open')) {
      widget.classList.remove('open');
    }
  });

  /* ═════════════════════════════
     Tabs
     ═════════════════════════════ */
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('dpanel-' + tab.dataset.dtab).classList.add('active');
    });
  });

  /* ═════════════════════════════
     Speak (Web Speech API)
     ═════════════════════════════ */
  function speak(word) {
    if (!word) return;
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(word);
      utter.lang = 'en-US';
      utter.rate = 0.85;
      utter.pitch = 1;
      // Try to pick an English voice
      const voices = window.speechSynthesis.getVoices();
      const enVoice = voices.find(v => v.lang.startsWith('en'));
      if (enVoice) utter.voice = enVoice;
      window.speechSynthesis.speak(utter);
    } else {
      alert('Trình duyệt không hỗ trợ phát âm. Hãy dùng Google Translate.');
    }
  }

  // Preload voices
  if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  }

  speakBtn.addEventListener('click', () => {
    const word = input.value.trim();
    if (word) speak(word);
  });

  /* ═════════════════════════════
     Lookup: Google Translate
     ═════════════════════════════ */
  function lookupGoogle(word) {
    if (!word) return;
    addToHistory(word);
    switchToResultTab();
    const url = `https://translate.google.com/?sl=en&tl=vi&text=${encodeURIComponent(word)}&op=translate`;
    loadInIframe(url);
  }

  googleBtn.addEventListener('click', () => lookupGoogle(input.value.trim()));

  /* ═════════════════════════════
     Lookup: Oxford Learner's
     ═════════════════════════════ */
  function lookupOxford(word) {
    if (!word) return;
    addToHistory(word);
    switchToResultTab();
    const slug = word.toLowerCase().replace(/\s+/g, '-');
    const url = `https://www.oxfordlearnersdictionaries.com/definition/english/${encodeURIComponent(slug)}`;
    loadInIframe(url);
  }

  oxfordBtn.addEventListener('click', () => lookupOxford(input.value.trim()));

  /* ═════════════════════════════
     iframe loading with fallback
     ═════════════════════════════ */
  let currentUrl = '';

  function loadInIframe(url) {
    currentUrl = url;
    fallback.style.display = 'none';
    iframe.style.display = '';
    iframe.src = url;
  }

  // Detect iframe load failure via timeout
  // (X-Frame-Options / CSP blocking is hard to detect directly)
  iframe.addEventListener('load', () => {
    // Try to access iframe content – if blocked, show fallback
    try {
      // Cross-origin iframe will throw on accessing contentDocument
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      // If we can access it and it has content, it's likely fine
      if (doc && doc.body && doc.body.innerHTML.length > 0) {
        fallback.style.display = 'none';
      }
    } catch (e) {
      // Cross-origin – it loaded but we can't verify, keep showing
      // Most such pages actually blocked iframe, so show fallback after short delay
      setTimeout(() => {
        showFallback();
      }, 1500);
    }
  });

  iframe.addEventListener('error', () => {
    showFallback();
  });

  function showFallback() {
    fallbackLink.href = currentUrl;
    fallback.style.display = '';
    iframe.style.display = 'none';
  }

  /* ═════════════════════════════
     Enter key triggers Google
     ═════════════════════════════ */
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const word = input.value.trim();
      if (word) {
        speak(word);
        lookupGoogle(word);
      }
    }
  });

  /* ═════════════════════════════
     Switch to Result tab
     ═════════════════════════════ */
  function switchToResultTab() {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.dtab === 'result'));
    panels.forEach(p => p.classList.toggle('active', p.id === 'dpanel-result'));
  }

  /* ═════════════════════════════
     Search History (localStorage)
     ═════════════════════════════ */
  function getHistory() {
    try {
      return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
    } catch { return []; }
  }

  function saveHistory(arr) {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(arr));
  }

  function addToHistory(word) {
    const w = word.trim().toLowerCase();
    if (!w) return;
    let hist = getHistory();
    // Remove duplicate
    hist = hist.filter(h => h.word !== w);
    // Add to front
    hist.unshift({ word: w, time: Date.now() });
    // Limit
    if (hist.length > MAX_HISTORY) hist = hist.slice(0, MAX_HISTORY);
    saveHistory(hist);
    loadHistory();
  }

  function loadHistory() {
    const hist = getHistory();
    if (!hist.length) {
      historyList.innerHTML = '<p class="dict-empty">Chưa có lịch sử tra cứu</p>';
      return;
    }
    let html = '';
    hist.forEach(h => {
      const ago = timeAgo(h.time);
      html += `<div class="dict-history-item" data-word="${escHtml(h.word)}">
        <span class="dh-word">${escHtml(h.word)}</span>
        <span class="dh-time">${ago}</span>
      </div>`;
    });
    historyList.innerHTML = html;

    // Click history item → fill input and lookup
    historyList.querySelectorAll('.dict-history-item').forEach(item => {
      item.addEventListener('click', () => {
        input.value = item.dataset.word;
        speak(item.dataset.word);
        lookupGoogle(item.dataset.word);
      });
    });
  }

  clearHistBtn.addEventListener('click', () => {
    localStorage.removeItem(HISTORY_KEY);
    loadHistory();
  });

  function timeAgo(ts) {
    const diff = Math.floor((Date.now() - ts) / 1000);
    if (diff < 60) return 'vừa xong';
    if (diff < 3600) return Math.floor(diff / 60) + ' phút';
    if (diff < 86400) return Math.floor(diff / 3600) + ' giờ';
    return Math.floor(diff / 86400) + ' ngày';
  }

  function escHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* ═════════════════════════════
     Topic Word Suggestions
     ═════════════════════════════ */
  const TOPIC_WORDS = {
    tenses: ['go/went/gone', 'eat/ate/eaten', 'run/ran/run', 'see/saw/seen', 'write/wrote/written', 'take/took/taken', 'give/gave/given', 'come/came/come', 'make/made/made', 'know/knew/known', 'think/thought/thought', 'tell/told/told', 'find/found/found', 'begin/began/begun', 'buy/bought/bought', 'always', 'usually', 'sometimes', 'never', 'already', 'yet', 'since', 'ago', 'tomorrow', 'yesterday'],
    parts: ['noun', 'verb', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection', 'plural', 'singular', 'countable', 'uncountable', 'abstract', 'concrete', 'irregular', 'regular', 'syllable', 'prefix', 'suffix'],
    structure: ['subject', 'predicate', 'object', 'clause', 'phrase', 'statement', 'question', 'command', 'exclamation', 'affirmative', 'negative', 'interrogative', 'imperative', 'declarative', 'compound', 'complex'],
    articles: ['article', 'definite', 'indefinite', 'the', 'a', 'an', 'some', 'any', 'this', 'that', 'these', 'those', 'each', 'every', 'either', 'neither', 'enough', 'several'],
    comparisons: ['comparative', 'superlative', 'taller', 'tallest', 'better', 'best', 'worse', 'worst', 'more', 'most', 'less', 'least', 'further', 'furthest', 'bigger', 'biggest', 'easier', 'easiest'],
    modals: ['can', 'could', 'may', 'might', 'must', 'shall', 'should', 'will', 'would', 'ought to', 'have to', 'need to', 'ability', 'permission', 'obligation', 'advice', 'possibility', 'prohibition'],
    conditionals: ['condition', 'if', 'unless', 'provided', 'suppose', 'imagine', 'otherwise', 'in case', 'as long as', 'would', 'could', 'might', 'hypothetical', 'unreal', 'result'],
    passive: ['passive', 'active', 'agent', 'past participle', 'is done', 'was done', 'has been done', 'will be done', 'being done', 'by', 'transform', 'rewrite'],
    prepositions: ['in', 'on', 'at', 'under', 'above', 'between', 'behind', 'beside', 'across', 'through', 'towards', 'along', 'into', 'onto', 'from', 'during', 'until', 'since', 'for', 'by'],
    conjunctions: ['and', 'but', 'or', 'nor', 'yet', 'so', 'for', 'because', 'although', 'while', 'when', 'before', 'after', 'until', 'unless', 'whereas', 'however', 'therefore', 'moreover', 'furthermore'],
    relatives: ['who', 'whom', 'whose', 'which', 'that', 'where', 'when', 'why', 'whoever', 'whatever', 'defining', 'non-defining', 'clause', 'relative pronoun', 'relative adverb'],
    gerunds: ['gerund', 'infinitive', 'verb-ing', 'to + verb', 'enjoy', 'avoid', 'mind', 'finish', 'suggest', 'consider', 'want', 'need', 'decide', 'hope', 'promise', 'plan', 'offer', 'agree', 'refuse'],
  };

  function buildSuggestTopics() {
    if (!suggestTopics) return;
    let html = '';
    for (const [key, topic] of Object.entries(TOPICS)) {
      html += `<button class="dict-suggest-topic-btn" data-topic="${key}">${topic.emoji} ${topic.label}</button>`;
    }
    suggestTopics.innerHTML = html;

    suggestTopics.querySelectorAll('.dict-suggest-topic-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        suggestTopics.querySelectorAll('.dict-suggest-topic-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        showSuggestWords(btn.dataset.topic);
      });
    });
  }

  function showSuggestWords(topicKey) {
    const words = TOPIC_WORDS[topicKey];
    if (!words || !words.length) {
      suggestWords.innerHTML = '<p class="dict-empty">Không có gợi ý cho topic này</p>';
      return;
    }
    let html = '';
    words.forEach(w => {
      html += `<span class="dict-suggest-word" data-word="${escHtml(w)}">${escHtml(w)} <span class="sw-speak">🔊</span></span>`;
    });
    suggestWords.innerHTML = html;

    suggestWords.querySelectorAll('.dict-suggest-word').forEach(el => {
      el.addEventListener('click', () => {
        const word = el.dataset.word.split('/')[0]; // use first form for lookup
        input.value = word;
        speak(word);
        lookupGoogle(word);
      });
    });
  }

})();
