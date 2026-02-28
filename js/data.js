/* ============================================================
   GrammarEnglish Kids – Data
   Grammar exercises for children 10+
   Topics: Tenses, Parts of Speech, Sentence Structure,
           Articles & Determiners, Comparisons, Modal Verbs
   ============================================================ */

// ── Topic metadata ──
const TOPICS = {
  tenses:      { label: 'Tenses',               emoji: '⏰', color: '#6C63FF' },
  parts:       { label: 'Parts of Speech',       emoji: '🏷️', color: '#FF6584' },
  structure:   { label: 'Sentence Structure',    emoji: '🏗️', color: '#00BCD4' },
  articles:    { label: 'Articles & Determiners', emoji: '📎', color: '#FF9800' },
  comparisons: { label: 'Comparisons',           emoji: '⚖️', color: '#4CAF50' },
  modals:      { label: 'Modal Verbs',           emoji: '🔑', color: '#9C27B0' },
};

// ══════════════════════════════════════════════════════════════
// 1. FILL IN THE BLANK
// ══════════════════════════════════════════════════════════════
const FILL_BLANK = [
  // ── Tenses ──
  { sentence: 'She ___ to school every day.', answer: 'goes', options: ['goes', 'go', 'going', 'went'], topic: 'tenses', hint: 'Present Simple – she/he/it + verb-s' },
  { sentence: 'They ___ playing football right now.', answer: 'are', options: ['are', 'is', 'was', 'were'], topic: 'tenses', hint: 'Present Continuous – they + are' },
  { sentence: 'I ___ my homework yesterday.', answer: 'did', options: ['did', 'do', 'does', 'doing'], topic: 'tenses', hint: 'Past Simple – yesterday = past' },
  { sentence: 'He ___ a book at the moment.', answer: 'is reading', options: ['is reading', 'reads', 'read', 'was reading'], topic: 'tenses', hint: 'Present Continuous – at the moment' },
  { sentence: 'We ___ visit our grandparents next Sunday.', answer: 'will', options: ['will', 'did', 'are', 'were'], topic: 'tenses', hint: 'Future Simple – next Sunday = future' },
  { sentence: 'She ___ breakfast at 7 every morning.', answer: 'has', options: ['has', 'have', 'had', 'having'], topic: 'tenses', hint: 'Present Simple – she + has' },
  { sentence: 'The children ___ in the park when it started to rain.', answer: 'were playing', options: ['were playing', 'are playing', 'played', 'play'], topic: 'tenses', hint: 'Past Continuous – action interrupted by another event' },
  { sentence: 'My father ___ to work by car every day.', answer: 'drives', options: ['drives', 'drive', 'drove', 'is driving'], topic: 'tenses', hint: 'Present Simple – daily routine' },
  { sentence: 'Look! The cat ___ up the tree!', answer: 'is climbing', options: ['is climbing', 'climbs', 'climbed', 'climb'], topic: 'tenses', hint: 'Present Continuous – Look! = happening now' },
  { sentence: 'They ___ to London last summer.', answer: 'went', options: ['went', 'go', 'goes', 'are going'], topic: 'tenses', hint: 'Past Simple – last summer' },
  { sentence: 'I ___ never ___ to Japan.', answer: 'have been', options: ['have been', 'has been', 'was been', 'am been'], topic: 'tenses', hint: 'Present Perfect – life experience' },
  { sentence: 'She ___ her lunch already.', answer: 'has eaten', options: ['has eaten', 'have eaten', 'ate', 'eats'], topic: 'tenses', hint: 'Present Perfect – already = completed' },

  // ── Parts of Speech ──
  { sentence: 'The ___ boy ran quickly across the field.', answer: 'tall', options: ['tall', 'quickly', 'running', 'very'], topic: 'parts', hint: 'Adjective – describes the boy' },
  { sentence: 'She sings ___ in the choir.', answer: 'beautifully', options: ['beautifully', 'beautiful', 'beauty', 'beautify'], topic: 'parts', hint: 'Adverb – describes how she sings' },
  { sentence: 'The ___ is on the table.', answer: 'book', options: ['book', 'read', 'quickly', 'beautiful'], topic: 'parts', hint: 'Noun – a thing on the table' },
  { sentence: 'He ___ his bike to school.', answer: 'rides', options: ['rides', 'bike', 'school', 'his'], topic: 'parts', hint: 'Verb – action word' },
  { sentence: 'The cat sat ___ the mat.', answer: 'on', options: ['on', 'quickly', 'happy', 'sat'], topic: 'parts', hint: 'Preposition – shows position' },
  { sentence: 'She is a very ___ student.', answer: 'clever', options: ['clever', 'cleverly', 'cleverness', 'cleverest'], topic: 'parts', hint: 'Adjective – describes the student' },
  { sentence: 'He spoke ___ so everyone could hear.', answer: 'loudly', options: ['loudly', 'loud', 'louder', 'loudness'], topic: 'parts', hint: 'Adverb – describes how he spoke' },
  { sentence: 'The ball rolled ___ the hill.', answer: 'down', options: ['down', 'happy', 'run', 'ball'], topic: 'parts', hint: 'Preposition – direction' },

  // ── Sentence Structure ──
  { sentence: 'She ___ not like spinach.', answer: 'does', options: ['does', 'do', 'is', 'has'], topic: 'structure', hint: 'Negative – she + does not' },
  { sentence: '___ you like chocolate?', answer: 'Do', options: ['Do', 'Does', 'Is', 'Are'], topic: 'structure', hint: 'Question – you + do' },
  { sentence: '___ she play tennis every week?', answer: 'Does', options: ['Does', 'Do', 'Is', 'Are'], topic: 'structure', hint: 'Question – she + does' },
  { sentence: 'He ___ not go to the party last night.', answer: 'did', options: ['did', 'does', 'do', 'was'], topic: 'structure', hint: 'Negative past – did not' },
  { sentence: '___ is your favorite subject?', answer: 'What', options: ['What', 'Who', 'Where', 'When'], topic: 'structure', hint: 'Wh-question – asking about a thing' },
  { sentence: '___ did you go yesterday?', answer: 'Where', options: ['Where', 'What', 'Who', 'How'], topic: 'structure', hint: 'Wh-question – asking about a place' },

  // ── Articles & Determiners ──
  { sentence: 'I saw ___ elephant at the zoo.', answer: 'an', options: ['an', 'a', 'the', 'some'], topic: 'articles', hint: '"an" before vowel sounds' },
  { sentence: 'She is ___ best student in the class.', answer: 'the', options: ['the', 'a', 'an', 'some'], topic: 'articles', hint: '"the" for superlatives' },
  { sentence: 'Can I have ___ water, please?', answer: 'some', options: ['some', 'a', 'an', 'the'], topic: 'articles', hint: '"some" with uncountable nouns in requests' },
  { sentence: 'I don\'t have ___ money.', answer: 'any', options: ['any', 'some', 'a', 'the'], topic: 'articles', hint: '"any" in negative sentences' },
  { sentence: 'He wants to be ___ doctor.', answer: 'a', options: ['a', 'an', 'the', 'some'], topic: 'articles', hint: '"a" before consonant sounds' },
  { sentence: '___ books on the shelf are mine.', answer: 'Those', options: ['Those', 'That', 'This', 'A'], topic: 'articles', hint: 'Demonstrative – plural, far away' },
  { sentence: 'Is there ___ milk in the fridge?', answer: 'any', options: ['any', 'a', 'an', 'the'], topic: 'articles', hint: '"any" in questions' },
  { sentence: '___ sun rises in the east.', answer: 'The', options: ['The', 'A', 'An', 'Some'], topic: 'articles', hint: '"the" for unique things' },

  // ── Comparisons ──
  { sentence: 'An elephant is ___ than a cat.', answer: 'bigger', options: ['bigger', 'big', 'biggest', 'more big'], topic: 'comparisons', hint: 'Comparative – short adjective + -er' },
  { sentence: 'She is the ___ girl in the class.', answer: 'tallest', options: ['tallest', 'taller', 'tall', 'more tall'], topic: 'comparisons', hint: 'Superlative – the + -est' },
  { sentence: 'This book is ___ interesting than that one.', answer: 'more', options: ['more', 'most', 'much', 'very'], topic: 'comparisons', hint: 'Comparative – more + long adjective' },
  { sentence: 'Today is ___ than yesterday.', answer: 'hotter', options: ['hotter', 'hot', 'hottest', 'more hot'], topic: 'comparisons', hint: 'Comparative – double consonant + -er' },
  { sentence: 'This is the ___ beautiful painting in the gallery.', answer: 'most', options: ['most', 'more', 'much', 'very'], topic: 'comparisons', hint: 'Superlative – the most + long adjective' },
  { sentence: 'My house is as ___ as yours.', answer: 'big', options: ['big', 'bigger', 'biggest', 'more big'], topic: 'comparisons', hint: 'Equal comparison – as + adjective + as' },

  // ── Modal Verbs ──
  { sentence: 'You ___ brush your teeth before bed.', answer: 'should', options: ['should', 'can', 'may', 'could'], topic: 'modals', hint: 'Advice – should' },
  { sentence: 'She ___ speak three languages.', answer: 'can', options: ['can', 'must', 'should', 'may'], topic: 'modals', hint: 'Ability – can' },
  { sentence: 'You ___ not run in the hallway.', answer: 'must', options: ['must', 'can', 'may', 'should'], topic: 'modals', hint: 'Strong rule – must not' },
  { sentence: '___ I borrow your pen, please?', answer: 'May', options: ['May', 'Must', 'Should', 'Will'], topic: 'modals', hint: 'Polite permission – may I' },
  { sentence: 'He ___ swim when he was five.', answer: 'could', options: ['could', 'can', 'must', 'should'], topic: 'modals', hint: 'Past ability – could' },
  { sentence: 'You ___ wear a helmet when riding a bike.', answer: 'must', options: ['must', 'may', 'could', 'might'], topic: 'modals', hint: 'Obligation/necessity – must' },
  { sentence: 'It ___ rain later today.', answer: 'might', options: ['might', 'must', 'should', 'can'], topic: 'modals', hint: 'Possibility – might' },
  { sentence: 'Students ___ not use phones in class.', answer: 'must', options: ['must', 'can', 'may', 'could'], topic: 'modals', hint: 'Prohibition – must not' },
];

// ══════════════════════════════════════════════════════════════
// 2. MULTIPLE CHOICE
// ══════════════════════════════════════════════════════════════
const MULTIPLE_CHOICE = [
  // ── Tenses ──
  { question: 'Which sentence is in the Present Simple?', answer: 'She walks to school.', options: ['She walks to school.', 'She is walking to school.', 'She walked to school.', 'She will walk to school.'], topic: 'tenses', explain: 'Present Simple describes routines: subject + verb(s)' },
  { question: 'Which sentence uses the Past Simple correctly?', answer: 'They played soccer yesterday.', options: ['They played soccer yesterday.', 'They play soccer yesterday.', 'They are playing soccer yesterday.', 'They plays soccer yesterday.'], topic: 'tenses', explain: 'Past Simple: verb + -ed (regular) for completed past actions' },
  { question: '"Look! It ___." Choose the correct tense.', answer: 'is raining', options: ['is raining', 'rains', 'rained', 'will rain'], topic: 'tenses', explain: 'Present Continuous for actions happening right now (Look!)' },
  { question: 'Which word signals the Present Perfect?', answer: 'already', options: ['already', 'yesterday', 'tomorrow', 'every day'], topic: 'tenses', explain: '"Already" signals Present Perfect (have/has + past participle)' },
  { question: '"I ___ study harder next term." - Future Simple', answer: 'will', options: ['will', 'am', 'did', 'have'], topic: 'tenses', explain: 'Future Simple = will + base verb' },
  { question: 'Which sentence is in the Past Continuous?', answer: 'She was reading when I called.', options: ['She was reading when I called.', 'She reads every night.', 'She has read that book.', 'She will read tomorrow.'], topic: 'tenses', explain: 'Past Continuous: was/were + verb-ing' },

  // ── Parts of Speech ──
  { question: 'Which word is a NOUN in: "The happy dog chased the ball."?', answer: 'dog', options: ['dog', 'happy', 'chased', 'the'], topic: 'parts', explain: 'Nouns name people, places, things, or animals.' },
  { question: 'Which word is an ADJECTIVE in: "She wore a beautiful red dress."?', answer: 'beautiful', options: ['beautiful', 'wore', 'she', 'dress'], topic: 'parts', explain: 'Adjectives describe nouns (beautiful describes dress).' },
  { question: 'Which word is an ADVERB?', answer: 'slowly', options: ['slowly', 'slow', 'slower', 'slowness'], topic: 'parts', explain: 'Adverbs describe verbs and often end in -ly.' },
  { question: 'Which word is a PREPOSITION in: "The cat is under the table."?', answer: 'under', options: ['under', 'cat', 'is', 'table'], topic: 'parts', explain: 'Prepositions show position or relationship (under, on, in, at).' },
  { question: 'What part of speech is "quickly"?', answer: 'Adverb', options: ['Adverb', 'Adjective', 'Noun', 'Verb'], topic: 'parts', explain: 'Words ending in -ly that describe how something is done are adverbs.' },
  { question: 'Which is a VERB in: "The children played happily in the garden."?', answer: 'played', options: ['played', 'children', 'happily', 'garden'], topic: 'parts', explain: 'Verbs express actions (played = action of playing).' },

  // ── Sentence Structure ──
  { question: 'Which is the correct word order?', answer: 'She always drinks milk.', options: ['She always drinks milk.', 'She drinks always milk.', 'Always she drinks milk.', 'Drinks she always milk.'], topic: 'structure', explain: 'Adverbs of frequency go before the main verb.' },
  { question: 'Which is a correct negative sentence?', answer: 'He does not like fish.', options: ['He does not like fish.', 'He not like fish.', 'He do not likes fish.', 'He not does like fish.'], topic: 'structure', explain: 'Negative: subject + does/do + not + base verb' },
  { question: 'Which is a correctly formed question?', answer: 'Where does she live?', options: ['Where does she live?', 'Where she does live?', 'Where she live?', 'Where does she lives?'], topic: 'structure', explain: 'Question: Wh-word + does/do + subject + base verb' },
  { question: 'What type of sentence is: "Close the door!"?', answer: 'Imperative', options: ['Imperative', 'Interrogative', 'Declarative', 'Exclamatory'], topic: 'structure', explain: 'Imperative sentences give commands or instructions.' },
  { question: 'Which question uses correct subject-verb inversion?', answer: 'Is she coming tomorrow?', options: ['Is she coming tomorrow?', 'She is coming tomorrow?', 'Does she is coming?', 'Coming she is tomorrow?'], topic: 'structure', explain: 'Yes/No questions: Auxiliary + Subject + Verb' },

  // ── Articles & Determiners ──
  { question: 'When do we use "an"?', answer: 'Before a vowel sound', options: ['Before a vowel sound', 'Before a consonant sound', 'Before plural nouns', 'Before uncountable nouns'], topic: 'articles', explain: '"An" is used before words starting with a vowel sound (a, e, i, o, u).' },
  { question: '"I need ___ umbrella." What goes in the blank?', answer: 'an', options: ['an', 'a', 'the', 'some'], topic: 'articles', explain: '"umbrella" starts with a vowel sound, so use "an".' },
  { question: 'Which sentence uses "the" correctly?', answer: 'The moon is bright tonight.', options: ['The moon is bright tonight.', 'I want the water.', 'She is the doctor.', 'He goes to the school every day.'], topic: 'articles', explain: '"The" is used for unique things (only one moon).' },
  { question: '"There isn\'t ___ sugar." Which word fits?', answer: 'any', options: ['any', 'some', 'a', 'the'], topic: 'articles', explain: '"Any" is used with uncountable nouns in negative sentences.' },
  { question: 'Which determiner means "not one"?', answer: 'no', options: ['no', 'some', 'any', 'the'], topic: 'articles', explain: '"No" = not any, zero quantity.' },

  // ── Comparisons ──
  { question: 'What is the comparative form of "good"?', answer: 'better', options: ['better', 'gooder', 'more good', 'best'], topic: 'comparisons', explain: '"Good" is irregular: good → better → best.' },
  { question: '"She is ___ than her sister." (intelligent)', answer: 'more intelligent', options: ['more intelligent', 'intelligenter', 'most intelligent', 'intelligent'], topic: 'comparisons', explain: 'Long adjectives use "more" for comparatives.' },
  { question: 'What is the superlative of "bad"?', answer: 'the worst', options: ['the worst', 'the baddest', 'the more bad', 'the most bad'], topic: 'comparisons', explain: '"Bad" is irregular: bad → worse → the worst.' },
  { question: '"This test is ___ difficult ___ the last one."', answer: 'as ... as', options: ['as ... as', 'more ... than', 'the most ... than', 'less ... as'], topic: 'comparisons', explain: 'Equal comparison uses "as + adjective + as".' },
  { question: 'Which is correct?', answer: 'He is taller than me.', options: ['He is taller than me.', 'He is more tall than me.', 'He is tallest than me.', 'He is tall than me.'], topic: 'comparisons', explain: 'Short adjectives: adjective + -er + than.' },

  // ── Modal Verbs ──
  { question: 'Which modal expresses obligation?', answer: 'must', options: ['must', 'can', 'might', 'could'], topic: 'modals', explain: '"Must" expresses strong obligation or necessity.' },
  { question: '"___ you help me, please?"', answer: 'Could', options: ['Could', 'Must', 'Should', 'Shall'], topic: 'modals', explain: '"Could" is polite for requests.' },
  { question: 'Which modal expresses advice?', answer: 'should', options: ['should', 'must', 'can', 'will'], topic: 'modals', explain: '"Should" expresses advice or recommendation.' },
  { question: '"She ___ play the guitar very well." (ability)', answer: 'can', options: ['can', 'must', 'should', 'may'], topic: 'modals', explain: '"Can" expresses ability.' },
  { question: '"You ___ not cheat on the exam!" (prohibition)', answer: 'must', options: ['must', 'should', 'can', 'might'], topic: 'modals', explain: '"Must not" expresses strict prohibition.' },
  { question: '"It ___ be true – I don\'t believe it."', answer: 'can\'t', options: ['can\'t', 'mustn\'t', 'shouldn\'t', 'won\'t'], topic: 'modals', explain: '"Can\'t" expresses impossibility or disbelief.' },
];

// ══════════════════════════════════════════════════════════════
// 3. SENTENCE ORDER (arrange words into correct sentence)
// ══════════════════════════════════════════════════════════════
const SENTENCE_ORDER = [
  // ── Tenses ──
  { words: ['She', 'goes', 'to', 'school', 'every', 'day'], answer: 'She goes to school every day', topic: 'tenses' },
  { words: ['They', 'are', 'playing', 'in', 'the', 'garden'], answer: 'They are playing in the garden', topic: 'tenses' },
  { words: ['I', 'watched', 'a', 'movie', 'last', 'night'], answer: 'I watched a movie last night', topic: 'tenses' },
  { words: ['He', 'will', 'travel', 'to', 'Paris', 'next', 'week'], answer: 'He will travel to Paris next week', topic: 'tenses' },
  { words: ['We', 'have', 'already', 'eaten', 'dinner'], answer: 'We have already eaten dinner', topic: 'tenses' },
  { words: ['She', 'was', 'reading', 'when', 'I', 'arrived'], answer: 'She was reading when I arrived', topic: 'tenses' },

  // ── Parts of Speech ──
  { words: ['The', 'small', 'cat', 'sleeps', 'quietly'], answer: 'The small cat sleeps quietly', topic: 'parts' },
  { words: ['She', 'ran', 'quickly', 'to', 'the', 'store'], answer: 'She ran quickly to the store', topic: 'parts' },
  { words: ['A', 'beautiful', 'bird', 'sings', 'sweetly'], answer: 'A beautiful bird sings sweetly', topic: 'parts' },
  { words: ['The', 'children', 'played', 'happily', 'outside'], answer: 'The children played happily outside', topic: 'parts' },
  { words: ['He', 'carefully', 'opened', 'the', 'old', 'box'], answer: 'He carefully opened the old box', topic: 'parts' },

  // ── Sentence Structure ──
  { words: ['Does', 'she', 'like', 'chocolate', '?'], answer: 'Does she like chocolate ?', topic: 'structure' },
  { words: ['They', 'do', 'not', 'have', 'any', 'pets'], answer: 'They do not have any pets', topic: 'structure' },
  { words: ['Where', 'did', 'you', 'go', 'yesterday', '?'], answer: 'Where did you go yesterday ?', topic: 'structure' },
  { words: ['He', 'does', 'not', 'play', 'tennis'], answer: 'He does not play tennis', topic: 'structure' },
  { words: ['What', 'time', 'does', 'the', 'train', 'leave', '?'], answer: 'What time does the train leave ?', topic: 'structure' },
  { words: ['She', 'always', 'reads', 'before', 'bed'], answer: 'She always reads before bed', topic: 'structure' },

  // ── Articles & Determiners ──
  { words: ['I', 'saw', 'an', 'interesting', 'movie'], answer: 'I saw an interesting movie', topic: 'articles' },
  { words: ['The', 'children', 'ate', 'some', 'cake'], answer: 'The children ate some cake', topic: 'articles' },
  { words: ['There', 'is', 'no', 'milk', 'in', 'the', 'fridge'], answer: 'There is no milk in the fridge', topic: 'articles' },
  { words: ['This', 'is', 'the', 'best', 'day', 'ever'], answer: 'This is the best day ever', topic: 'articles' },
  { words: ['She', 'bought', 'a', 'new', 'dress', 'yesterday'], answer: 'She bought a new dress yesterday', topic: 'articles' },

  // ── Comparisons ──
  { words: ['He', 'is', 'taller', 'than', 'his', 'brother'], answer: 'He is taller than his brother', topic: 'comparisons' },
  { words: ['This', 'is', 'the', 'most', 'beautiful', 'garden'], answer: 'This is the most beautiful garden', topic: 'comparisons' },
  { words: ['She', 'runs', 'faster', 'than', 'her', 'friend'], answer: 'She runs faster than her friend', topic: 'comparisons' },
  { words: ['My', 'dog', 'is', 'as', 'big', 'as', 'yours'], answer: 'My dog is as big as yours', topic: 'comparisons' },
  { words: ['It', 'is', 'the', 'worst', 'movie', 'ever'], answer: 'It is the worst movie ever', topic: 'comparisons' },

  // ── Modal Verbs ──
  { words: ['You', 'should', 'eat', 'more', 'vegetables'], answer: 'You should eat more vegetables', topic: 'modals' },
  { words: ['She', 'can', 'speak', 'French', 'fluently'], answer: 'She can speak French fluently', topic: 'modals' },
  { words: ['May', 'I', 'go', 'to', 'the', 'toilet', '?'], answer: 'May I go to the toilet ?', topic: 'modals' },
  { words: ['We', 'must', 'not', 'be', 'late', 'for', 'school'], answer: 'We must not be late for school', topic: 'modals' },
  { words: ['He', 'could', 'swim', 'when', 'he', 'was', 'six'], answer: 'He could swim when he was six', topic: 'modals' },
];

// ══════════════════════════════════════════════════════════════
// 4. ERROR CORRECTION (find and fix the grammar mistake)
// ══════════════════════════════════════════════════════════════
const ERROR_CORRECTION = [
  // ── Tenses ──
  { wrong: 'She go to school every day.', correct: 'She goes to school every day.', errorWord: 'go', fixWord: 'goes', topic: 'tenses', rule: 'Present Simple: he/she/it + verb-s/es' },
  { wrong: 'They is playing in the park.', correct: 'They are playing in the park.', errorWord: 'is', fixWord: 'are', topic: 'tenses', rule: 'Present Continuous: they + are' },
  { wrong: 'I goed to the cinema yesterday.', correct: 'I went to the cinema yesterday.', errorWord: 'goed', fixWord: 'went', topic: 'tenses', rule: 'Past Simple: "go" is irregular → went' },
  { wrong: 'He have finished his homework.', correct: 'He has finished his homework.', errorWord: 'have', fixWord: 'has', topic: 'tenses', rule: 'Present Perfect: he/she/it + has' },
  { wrong: 'We was watching TV when she called.', correct: 'We were watching TV when she called.', errorWord: 'was', fixWord: 'were', topic: 'tenses', rule: 'Past Continuous: we + were' },
  { wrong: 'She don\'t like vegetables.', correct: 'She doesn\'t like vegetables.', errorWord: 'don\'t', fixWord: 'doesn\'t', topic: 'tenses', rule: 'Present Simple negative: she + doesn\'t' },

  // ── Parts of Speech ──
  { wrong: 'She sings beautiful.', correct: 'She sings beautifully.', errorWord: 'beautiful', fixWord: 'beautifully', topic: 'parts', rule: 'Use adverb (beautifully) to describe a verb' },
  { wrong: 'He runs very quick.', correct: 'He runs very quickly.', errorWord: 'quick', fixWord: 'quickly', topic: 'parts', rule: 'Use adverb (quickly) to describe how he runs' },
  { wrong: 'The happily children played in the park.', correct: 'The happy children played in the park.', errorWord: 'happily', fixWord: 'happy', topic: 'parts', rule: 'Use adjective (happy) before a noun' },
  { wrong: 'She is a well singer.', correct: 'She is a good singer.', errorWord: 'well', fixWord: 'good', topic: 'parts', rule: 'Use adjective (good) before a noun; "well" is an adverb' },

  // ── Sentence Structure ──
  { wrong: 'Do she like ice cream?', correct: 'Does she like ice cream?', errorWord: 'Do', fixWord: 'Does', topic: 'structure', rule: 'Questions with she/he/it use "Does"' },
  { wrong: 'He not likes coffee.', correct: 'He does not like coffee.', errorWord: 'not likes', fixWord: 'does not like', topic: 'structure', rule: 'Negative: subject + does not + base verb' },
  { wrong: 'Where you did go?', correct: 'Where did you go?', errorWord: 'you did', fixWord: 'did you', topic: 'structure', rule: 'Question word order: Wh + did + subject + verb' },
  { wrong: 'She always is late for class.', correct: 'She is always late for class.', errorWord: 'always is', fixWord: 'is always', topic: 'structure', rule: 'Adverbs of frequency go after "be"' },

  // ── Articles & Determiners ──
  { wrong: 'I saw a elephant at the zoo.', correct: 'I saw an elephant at the zoo.', errorWord: 'a', fixWord: 'an', topic: 'articles', rule: 'Use "an" before vowel sounds' },
  { wrong: 'She is a best student.', correct: 'She is the best student.', errorWord: 'a', fixWord: 'the', topic: 'articles', rule: 'Use "the" with superlatives' },
  { wrong: 'I don\'t have some money.', correct: 'I don\'t have any money.', errorWord: 'some', fixWord: 'any', topic: 'articles', rule: 'Use "any" in negative sentences' },
  { wrong: 'He is an university student.', correct: 'He is a university student.', errorWord: 'an', fixWord: 'a', topic: 'articles', rule: '"University" starts with /juː/ (consonant sound), use "a"' },

  // ── Comparisons ──
  { wrong: 'She is more tall than her sister.', correct: 'She is taller than her sister.', errorWord: 'more tall', fixWord: 'taller', topic: 'comparisons', rule: 'Short adjective: adjective + -er (not "more")' },
  { wrong: 'This is the most easy question.', correct: 'This is the easiest question.', errorWord: 'most easy', fixWord: 'easiest', topic: 'comparisons', rule: 'Short adjective: the + adjective-est' },
  { wrong: 'He is gooder than me at math.', correct: 'He is better than me at math.', errorWord: 'gooder', fixWord: 'better', topic: 'comparisons', rule: '"Good" is irregular: good → better → best' },
  { wrong: 'This is the more important rule.', correct: 'This is the most important rule.', errorWord: 'more', fixWord: 'most', topic: 'comparisons', rule: 'Superlative: the most + long adjective' },

  // ── Modal Verbs ──
  { wrong: 'She can to swim very well.', correct: 'She can swim very well.', errorWord: 'to swim', fixWord: 'swim', topic: 'modals', rule: 'Modal + base verb (no "to")' },
  { wrong: 'He must goes to school.', correct: 'He must go to school.', errorWord: 'goes', fixWord: 'go', topic: 'modals', rule: 'Modal + base verb (no -s/-es)' },
  { wrong: 'You should to study harder.', correct: 'You should study harder.', errorWord: 'to study', fixWord: 'study', topic: 'modals', rule: 'Modal + base verb (no "to")' },
  { wrong: 'Can she speaks English?', correct: 'Can she speak English?', errorWord: 'speaks', fixWord: 'speak', topic: 'modals', rule: 'Modal + base verb (no -s)' },
];

// ══════════════════════════════════════════════════════════════
// 5. SENTENCE TRANSFORMATION
// ══════════════════════════════════════════════════════════════
const TRANSFORMATION = [
  // ── Tenses ──
  { instruction: 'Change to NEGATIVE:', original: 'She likes pizza.', answer: 'She does not like pizza.', alt: ['She doesn\'t like pizza.', 'She does not like pizza.'], topic: 'tenses', hint: 'does not + base verb' },
  { instruction: 'Change to QUESTION:', original: 'They play tennis.', answer: 'Do they play tennis?', alt: ['Do they play tennis?', 'Do they play tennis ?'], topic: 'tenses', hint: 'Do + subject + base verb?' },
  { instruction: 'Change to PAST SIMPLE:', original: 'He goes to the park.', answer: 'He went to the park.', alt: ['He went to the park.'], topic: 'tenses', hint: 'go → went (irregular)' },
  { instruction: 'Change to PRESENT CONTINUOUS:', original: 'She reads a book.', answer: 'She is reading a book.', alt: ['She is reading a book.', 'She\'s reading a book.'], topic: 'tenses', hint: 'is/am/are + verb-ing' },
  { instruction: 'Change to FUTURE (will):', original: 'They visit their grandmother.', answer: 'They will visit their grandmother.', alt: ['They will visit their grandmother.', 'They\'ll visit their grandmother.'], topic: 'tenses', hint: 'will + base verb' },
  { instruction: 'Change to NEGATIVE:', original: 'He played football yesterday.', answer: 'He did not play football yesterday.', alt: ['He did not play football yesterday.', 'He didn\'t play football yesterday.'], topic: 'tenses', hint: 'did not + base verb' },

  // ── Sentence Structure ──
  { instruction: 'Change to QUESTION:', original: 'She can swim.', answer: 'Can she swim?', alt: ['Can she swim?', 'Can she swim ?'], topic: 'structure', hint: 'Move "can" before subject' },
  { instruction: 'Change to NEGATIVE:', original: 'He is tall.', answer: 'He is not tall.', alt: ['He is not tall.', 'He isn\'t tall.'], topic: 'structure', hint: 'is + not' },
  { instruction: 'Change to QUESTION:', original: 'They are happy.', answer: 'Are they happy?', alt: ['Are they happy?', 'Are they happy ?'], topic: 'structure', hint: 'Move "are" before subject' },
  { instruction: 'Change to NEGATIVE:', original: 'We have a dog.', answer: 'We do not have a dog.', alt: ['We do not have a dog.', 'We don\'t have a dog.'], topic: 'structure', hint: 'do not + base verb' },

  // ── Comparisons ──
  { instruction: 'Rewrite using COMPARATIVE:', original: 'Tom is tall. John is short.', answer: 'Tom is taller than John.', alt: ['Tom is taller than John.'], topic: 'comparisons', hint: 'adjective + -er + than' },
  { instruction: 'Rewrite using SUPERLATIVE:', original: 'Mary is the smart one in the class.', answer: 'Mary is the smartest in the class.', alt: ['Mary is the smartest in the class.', 'Mary is the smartest one in the class.'], topic: 'comparisons', hint: 'the + adjective-est' },
  { instruction: 'Rewrite using "as...as":', original: 'My bag is heavy. Your bag is heavy too.', answer: 'My bag is as heavy as your bag.', alt: ['My bag is as heavy as your bag.', 'My bag is as heavy as yours.'], topic: 'comparisons', hint: 'as + adjective + as' },

  // ── Modal Verbs ──
  { instruction: 'Rewrite using "must":', original: 'You need to finish your homework.', answer: 'You must finish your homework.', alt: ['You must finish your homework.'], topic: 'modals', hint: 'must + base verb' },
  { instruction: 'Rewrite using "should":', original: 'I think you need to see a doctor.', answer: 'You should see a doctor.', alt: ['You should see a doctor.'], topic: 'modals', hint: 'should + base verb (advice)' },
  { instruction: 'Change to NEGATIVE:', original: 'You must run in the hallway.', answer: 'You must not run in the hallway.', alt: ['You must not run in the hallway.', 'You mustn\'t run in the hallway.'], topic: 'modals', hint: 'must not + base verb' },

  // ── Articles ──
  { instruction: 'Add the correct article:', original: '___ sun is shining brightly.', answer: 'The sun is shining brightly.', alt: ['The sun is shining brightly.'], topic: 'articles', hint: '"The" for unique things' },
  { instruction: 'Add the correct article:', original: 'She wants to be ___ engineer.', answer: 'She wants to be an engineer.', alt: ['She wants to be an engineer.'], topic: 'articles', hint: '"an" before vowel sounds' },
];

// ══════════════════════════════════════════════════════════════
// 6. MATCHING (match items from two columns)
// ══════════════════════════════════════════════════════════════
const MATCHING = [
  // ── Tenses ──
  {
    title: 'Match the tense with its signal word',
    topic: 'tenses',
    pairs: [
      { left: 'every day', right: 'Present Simple' },
      { left: 'right now', right: 'Present Continuous' },
      { left: 'yesterday', right: 'Past Simple' },
      { left: 'tomorrow', right: 'Future Simple' },
      { left: 'already', right: 'Present Perfect' },
      { left: 'at that moment', right: 'Past Continuous' },
    ]
  },
  {
    title: 'Match the sentence with its tense',
    topic: 'tenses',
    pairs: [
      { left: 'She walks to school.', right: 'Present Simple' },
      { left: 'They are eating lunch.', right: 'Present Continuous' },
      { left: 'He went to the park.', right: 'Past Simple' },
      { left: 'I will come tomorrow.', right: 'Future Simple' },
      { left: 'We have seen that movie.', right: 'Present Perfect' },
    ]
  },

  // ── Parts of Speech ──
  {
    title: 'Match each word with its part of speech',
    topic: 'parts',
    pairs: [
      { left: 'dog', right: 'Noun' },
      { left: 'run', right: 'Verb' },
      { left: 'happy', right: 'Adjective' },
      { left: 'quickly', right: 'Adverb' },
      { left: 'under', right: 'Preposition' },
      { left: 'and', right: 'Conjunction' },
    ]
  },
  {
    title: 'Match the adjective to its adverb form',
    topic: 'parts',
    pairs: [
      { left: 'quick', right: 'quickly' },
      { left: 'happy', right: 'happily' },
      { left: 'careful', right: 'carefully' },
      { left: 'easy', right: 'easily' },
      { left: 'loud', right: 'loudly' },
    ]
  },

  // ── Sentence Structure ──
  {
    title: 'Match the question word with what it asks about',
    topic: 'structure',
    pairs: [
      { left: 'What', right: 'Thing / Action' },
      { left: 'Where', right: 'Place' },
      { left: 'When', right: 'Time' },
      { left: 'Who', right: 'Person' },
      { left: 'Why', right: 'Reason' },
      { left: 'How', right: 'Manner / Way' },
    ]
  },
  {
    title: 'Match the sentence type with its example',
    topic: 'structure',
    pairs: [
      { left: 'Declarative', right: 'The sky is blue.' },
      { left: 'Interrogative', right: 'Is the sky blue?' },
      { left: 'Imperative', right: 'Close the window.' },
      { left: 'Exclamatory', right: 'What a beautiful day!' },
    ]
  },

  // ── Articles & Determiners ──
  {
    title: 'Match the article rule with its example',
    topic: 'articles',
    pairs: [
      { left: '"a" + consonant sound', right: 'a cat' },
      { left: '"an" + vowel sound', right: 'an apple' },
      { left: '"the" + unique thing', right: 'the sun' },
      { left: '"some" + positive', right: 'I have some friends.' },
      { left: '"any" + negative', right: 'I don\'t have any books.' },
    ]
  },

  // ── Comparisons ──
  {
    title: 'Match the adjective with its comparative form',
    topic: 'comparisons',
    pairs: [
      { left: 'big', right: 'bigger' },
      { left: 'good', right: 'better' },
      { left: 'bad', right: 'worse' },
      { left: 'beautiful', right: 'more beautiful' },
      { left: 'far', right: 'farther / further' },
      { left: 'little', right: 'less' },
    ]
  },
  {
    title: 'Match the adjective with its superlative form',
    topic: 'comparisons',
    pairs: [
      { left: 'tall', right: 'the tallest' },
      { left: 'good', right: 'the best' },
      { left: 'bad', right: 'the worst' },
      { left: 'interesting', right: 'the most interesting' },
      { left: 'happy', right: 'the happiest' },
    ]
  },

  // ── Modal Verbs ──
  {
    title: 'Match the modal verb with its meaning',
    topic: 'modals',
    pairs: [
      { left: 'can', right: 'Ability' },
      { left: 'must', right: 'Obligation' },
      { left: 'should', right: 'Advice' },
      { left: 'may', right: 'Permission' },
      { left: 'might', right: 'Possibility' },
      { left: 'could', right: 'Past ability / Polite request' },
    ]
  },
];

// ── Grammar Tips (shown in topic info panels) ──
const GRAMMAR_TIPS = {
  tenses: [
    { title: 'Present Simple', rule: 'I/You/We/They + verb | He/She/It + verb-s', example: 'She plays tennis every Sunday.' },
    { title: 'Present Continuous', rule: 'am/is/are + verb-ing', example: 'They are studying now.' },
    { title: 'Past Simple', rule: 'verb-ed (regular) or irregular form', example: 'I visited London last year.' },
    { title: 'Future Simple', rule: 'will + base verb', example: 'We will go tomorrow.' },
    { title: 'Present Perfect', rule: 'have/has + past participle', example: 'She has already finished.' },
    { title: 'Past Continuous', rule: 'was/were + verb-ing', example: 'He was sleeping when I called.' },
  ],
  parts: [
    { title: 'Noun', rule: 'Names a person, place, thing, or idea', example: 'The dog chased the ball.' },
    { title: 'Verb', rule: 'Expresses an action or state', example: 'She runs every morning.' },
    { title: 'Adjective', rule: 'Describes a noun', example: 'The tall boy is my brother.' },
    { title: 'Adverb', rule: 'Describes a verb, adjective, or adverb (often -ly)', example: 'She sings beautifully.' },
    { title: 'Preposition', rule: 'Shows position or relationship', example: 'The cat is under the table.' },
  ],
  structure: [
    { title: 'Affirmative', rule: 'Subject + Verb + Object', example: 'She likes music.' },
    { title: 'Negative', rule: 'Subject + do/does/did + not + base verb', example: 'He does not like fish.' },
    { title: 'Question', rule: 'Do/Does/Did + Subject + base verb?', example: 'Do you like pizza?' },
    { title: 'Wh-Questions', rule: 'Wh-word + auxiliary + subject + verb?', example: 'Where do you live?' },
  ],
  articles: [
    { title: 'a / an', rule: 'Indefinite articles for singular countable nouns', example: 'I have a cat. She ate an apple.' },
    { title: 'the', rule: 'Definite article for specific or unique things', example: 'The sun is bright. Open the door.' },
    { title: 'some / any', rule: 'some = positive; any = negative/questions', example: 'I have some books. I don\'t have any pens.' },
    { title: 'this / that / these / those', rule: 'Demonstratives: near/far, singular/plural', example: 'This book is mine. Those cars are fast.' },
  ],
  comparisons: [
    { title: 'Comparative (-er / more)', rule: 'Short adj + -er + than | more + long adj + than', example: 'She is taller than me. It is more expensive than that.' },
    { title: 'Superlative (-est / most)', rule: 'the + short adj-est | the most + long adj', example: 'He is the fastest runner. This is the most interesting book.' },
    { title: 'Equal (as...as)', rule: 'as + adjective + as', example: 'She is as tall as her sister.' },
    { title: 'Irregular', rule: 'good→better→best, bad→worse→worst', example: 'This is better than that.' },
  ],
  modals: [
    { title: 'can', rule: 'Ability, permission, requests', example: 'I can swim. Can I go?' },
    { title: 'must', rule: 'Obligation, prohibition (must not), certainty', example: 'You must wear a seatbelt.' },
    { title: 'should', rule: 'Advice, recommendation', example: 'You should study more.' },
    { title: 'may / might', rule: 'Permission (may), possibility (might/may)', example: 'May I come in? It might rain.' },
    { title: 'could', rule: 'Past ability, polite requests, possibility', example: 'Could you help me?' },
  ],
};
