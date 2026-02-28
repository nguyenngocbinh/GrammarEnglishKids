/* ============================================================
   GrammarEnglish Kids – Data
   Grammar exercises for children 10+
   Topics: Tenses, Parts of Speech, Sentence Structure,
           Articles & Determiners, Comparisons, Modal Verbs,
           Conditionals, Passive Voice, Prepositions,
           Conjunctions, Relative Clauses, Gerunds & Infinitives
   ============================================================ */

// ── Topic metadata ──
const TOPICS = {
  tenses:      { label: 'Tenses',               emoji: '⏰', color: '#6C63FF' },
  parts:       { label: 'Parts of Speech',       emoji: '🏷️', color: '#FF6584' },
  structure:   { label: 'Sentence Structure',    emoji: '🏗️', color: '#00BCD4' },
  articles:    { label: 'Articles & Determiners', emoji: '📎', color: '#FF9800' },
  comparisons: { label: 'Comparisons',           emoji: '⚖️', color: '#4CAF50' },
  modals:      { label: 'Modal Verbs',           emoji: '🔑', color: '#9C27B0' },
  conditionals:{ label: 'Conditionals',          emoji: '🔀', color: '#E91E63' },
  passive:     { label: 'Passive Voice',         emoji: '🔄', color: '#607D8B' },
  prepositions:{ label: 'Prepositions',          emoji: '📍', color: '#795548' },
  conjunctions:{ label: 'Conjunctions',          emoji: '🔗', color: '#009688' },
  relatives:   { label: 'Relative Clauses',      emoji: '🧩', color: '#3F51B5' },
  gerunds:     { label: 'Gerunds & Infinitives', emoji: '🎯', color: '#F44336' },
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

  // ── Conditionals ──
  { sentence: 'If you heat water to 100°C, it ___.', answer: 'boils', options: ['boils', 'will boil', 'would boil', 'boiled'], topic: 'conditionals', hint: 'Zero Conditional – general truth: if + present, present' },
  { sentence: 'If it rains tomorrow, we ___ stay home.', answer: 'will', options: ['will', 'would', 'could', 'did'], topic: 'conditionals', hint: 'First Conditional – real future: if + present, will + verb' },
  { sentence: 'If I ___ rich, I would travel the world.', answer: 'were', options: ['were', 'am', 'will be', 'was'], topic: 'conditionals', hint: 'Second Conditional – imaginary: if + past, would + verb' },
  { sentence: 'If she studies hard, she ___ pass the exam.', answer: 'will', options: ['will', 'would', 'did', 'can'], topic: 'conditionals', hint: 'First Conditional – likely future' },
  { sentence: 'If I ___ you, I would apologize.', answer: 'were', options: ['were', 'am', 'will be', 'have been'], topic: 'conditionals', hint: 'Second Conditional – "If I were you" (advice)' },
  { sentence: 'If you mix red and blue, you ___ purple.', answer: 'get', options: ['get', 'will get', 'would get', 'got'], topic: 'conditionals', hint: 'Zero Conditional – fact: if + present, present' },
  { sentence: 'If he ___ the bus, he will be late.', answer: 'misses', options: ['misses', 'missed', 'will miss', 'would miss'], topic: 'conditionals', hint: 'First Conditional – if + present simple' },
  { sentence: 'If I had wings, I ___ fly.', answer: 'would', options: ['would', 'will', 'can', 'do'], topic: 'conditionals', hint: 'Second Conditional – unreal/imaginary situation' },

  // ── Passive Voice ──
  { sentence: 'English ___ spoken in many countries.', answer: 'is', options: ['is', 'are', 'was', 'has'], topic: 'passive', hint: 'Present Simple Passive – is/are + past participle' },
  { sentence: 'The cake ___ baked by my mother.', answer: 'was', options: ['was', 'is', 'were', 'has'], topic: 'passive', hint: 'Past Simple Passive – was/were + past participle' },
  { sentence: 'The letters ___ delivered every morning.', answer: 'are', options: ['are', 'is', 'was', 'has'], topic: 'passive', hint: 'Present Simple Passive – plural subject + are' },
  { sentence: 'The window ___ broken by the ball.', answer: 'was', options: ['was', 'is', 'were', 'did'], topic: 'passive', hint: 'Past Simple Passive – was + past participle' },
  { sentence: 'This song ___ sung by millions of people.', answer: 'is', options: ['is', 'are', 'was', 'were'], topic: 'passive', hint: 'Present Simple Passive – this song (singular) + is' },
  { sentence: 'The homework ___ been completed.', answer: 'has', options: ['has', 'have', 'is', 'was'], topic: 'passive', hint: 'Present Perfect Passive – has/have + been + past participle' },
  { sentence: 'A new school ___ being built near our house.', answer: 'is', options: ['is', 'are', 'was', 'has'], topic: 'passive', hint: 'Present Continuous Passive – is/are + being + past participle' },

  // ── Prepositions ──
  { sentence: 'She was born ___ March 15th.', answer: 'on', options: ['on', 'in', 'at', 'by'], topic: 'prepositions', hint: 'on + specific date' },
  { sentence: 'The meeting starts ___ 9 o\'clock.', answer: 'at', options: ['at', 'on', 'in', 'by'], topic: 'prepositions', hint: 'at + specific time' },
  { sentence: 'We go swimming ___ summer.', answer: 'in', options: ['in', 'on', 'at', 'during'], topic: 'prepositions', hint: 'in + season' },
  { sentence: 'The cat jumped ___ the box.', answer: 'into', options: ['into', 'on', 'at', 'by'], topic: 'prepositions', hint: 'into = movement inside' },
  { sentence: 'She walked ___ the bridge to the other side.', answer: 'across', options: ['across', 'into', 'under', 'at'], topic: 'prepositions', hint: 'across = from one side to the other' },
  { sentence: 'The painting is hanging ___ the wall.', answer: 'on', options: ['on', 'in', 'at', 'by'], topic: 'prepositions', hint: 'on + surface' },
  { sentence: 'He has been waiting ___ two hours.', answer: 'for', options: ['for', 'since', 'in', 'at'], topic: 'prepositions', hint: 'for + duration of time' },
  { sentence: 'She has lived here ___ 2015.', answer: 'since', options: ['since', 'for', 'in', 'at'], topic: 'prepositions', hint: 'since + point in time' },

  // ── Conjunctions ──
  { sentence: 'I like tea ___ coffee.', answer: 'and', options: ['and', 'but', 'or', 'so'], topic: 'conjunctions', hint: 'and = adding/joining' },
  { sentence: 'She is tired ___ she keeps working.', answer: 'but', options: ['but', 'and', 'so', 'because'], topic: 'conjunctions', hint: 'but = contrast/opposite' },
  { sentence: 'He stayed home ___ he was sick.', answer: 'because', options: ['because', 'but', 'and', 'or'], topic: 'conjunctions', hint: 'because = reason' },
  { sentence: 'It was raining, ___ we took an umbrella.', answer: 'so', options: ['so', 'but', 'and', 'because'], topic: 'conjunctions', hint: 'so = result/consequence' },
  { sentence: 'Would you like tea ___ coffee?', answer: 'or', options: ['or', 'and', 'but', 'so'], topic: 'conjunctions', hint: 'or = choice between options' },
  { sentence: '___ it was cold, she went out without a jacket.', answer: 'Although', options: ['Although', 'Because', 'So', 'And'], topic: 'conjunctions', hint: 'Although = despite the fact' },
  { sentence: 'I will wait ___ you are ready.', answer: 'until', options: ['until', 'because', 'but', 'and'], topic: 'conjunctions', hint: 'until = up to the point when' },
  { sentence: 'She sings ___ she dances at the same time.', answer: 'while', options: ['while', 'but', 'so', 'because'], topic: 'conjunctions', hint: 'while = at the same time' },

  // ── Relative Clauses ──
  { sentence: 'The boy ___ lives next door is my friend.', answer: 'who', options: ['who', 'which', 'where', 'what'], topic: 'relatives', hint: 'who = for people' },
  { sentence: 'The book ___ I read was very interesting.', answer: 'which', options: ['which', 'who', 'where', 'when'], topic: 'relatives', hint: 'which/that = for things' },
  { sentence: 'This is the place ___ we met.', answer: 'where', options: ['where', 'which', 'who', 'when'], topic: 'relatives', hint: 'where = for places' },
  { sentence: 'The teacher ___ teaches us English is kind.', answer: 'who', options: ['who', 'which', 'where', 'what'], topic: 'relatives', hint: 'who = for people (subject)' },
  { sentence: 'The car ___ is parked outside is mine.', answer: 'that', options: ['that', 'who', 'where', 'when'], topic: 'relatives', hint: 'that/which = for things' },
  { sentence: 'I remember the day ___ we first met.', answer: 'when', options: ['when', 'where', 'which', 'who'], topic: 'relatives', hint: 'when = for time' },
  { sentence: 'The girl ___ bag was stolen called the police.', answer: 'whose', options: ['whose', 'who', 'which', 'that'], topic: 'relatives', hint: 'whose = possession (her bag)' },

  // ── Gerunds & Infinitives ──
  { sentence: 'She enjoys ___ books.', answer: 'reading', options: ['reading', 'to read', 'read', 'reads'], topic: 'gerunds', hint: 'enjoy + verb-ing' },
  { sentence: 'I want ___ a new computer.', answer: 'to buy', options: ['to buy', 'buying', 'buy', 'bought'], topic: 'gerunds', hint: 'want + to + verb' },
  { sentence: 'He avoids ___ junk food.', answer: 'eating', options: ['eating', 'to eat', 'eat', 'eats'], topic: 'gerunds', hint: 'avoid + verb-ing' },
  { sentence: 'They decided ___ to the beach.', answer: 'to go', options: ['to go', 'going', 'go', 'went'], topic: 'gerunds', hint: 'decide + to + verb' },
  { sentence: 'I don\'t mind ___ you with your homework.', answer: 'helping', options: ['helping', 'to help', 'help', 'helped'], topic: 'gerunds', hint: 'mind + verb-ing' },
  { sentence: 'She promised ___ on time.', answer: 'to come', options: ['to come', 'coming', 'come', 'came'], topic: 'gerunds', hint: 'promise + to + verb' },
  { sentence: '___ is good exercise.', answer: 'Swimming', options: ['Swimming', 'To swim', 'Swim', 'Swam'], topic: 'gerunds', hint: 'Gerund as subject of a sentence' },
  { sentence: 'He keeps ___ the same mistake.', answer: 'making', options: ['making', 'to make', 'make', 'made'], topic: 'gerunds', hint: 'keep + verb-ing' },
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

  // ── Conditionals ──
  { question: 'Which conditional talks about general truths?', answer: 'Zero Conditional', options: ['Zero Conditional', 'First Conditional', 'Second Conditional', 'Third Conditional'], topic: 'conditionals', explain: 'Zero Conditional: If + present, present – for facts and truths.' },
  { question: '"If I won the lottery, I would buy a house." What type is this?', answer: 'Second Conditional', options: ['Second Conditional', 'First Conditional', 'Zero Conditional', 'Third Conditional'], topic: 'conditionals', explain: 'Second Conditional uses past tense + would for unreal situations.' },
  { question: 'Which is correct for First Conditional?', answer: 'If it rains, I will stay home.', options: ['If it rains, I will stay home.', 'If it rains, I would stay home.', 'If it rained, I will stay home.', 'If it rained, I stay home.'], topic: 'conditionals', explain: 'First Conditional: If + present simple, will + base verb.' },
  { question: 'In "If I were you, I would study more," why "were" not "was"?', answer: 'Subjunctive mood in conditionals', options: ['Subjunctive mood in conditionals', 'Past tense rule', 'Plural subject rule', 'British English rule'], topic: 'conditionals', explain: 'In Second Conditional, we use "were" for all subjects (subjunctive).' },
  { question: '"If you freeze water, it turns to ice." This is:', answer: 'Zero Conditional', options: ['Zero Conditional', 'First Conditional', 'Second Conditional', 'Past Simple'], topic: 'conditionals', explain: 'Zero Conditional describes scientific facts: if + present, present.' },

  // ── Passive Voice ──
  { question: 'Which sentence is in the passive voice?', answer: 'The letter was written by Tom.', options: ['The letter was written by Tom.', 'Tom wrote the letter.', 'Tom is writing a letter.', 'Tom will write a letter.'], topic: 'passive', explain: 'Passive: subject + be + past participle (+ by agent).' },
  { question: 'How do you form the passive voice?', answer: 'be + past participle', options: ['be + past participle', 'have + past participle', 'do + base verb', 'be + verb-ing'], topic: 'passive', explain: 'Passive = form of "be" + past participle of the main verb.' },
  { question: '"The cake is eaten by the children." What is the subject?', answer: 'The cake', options: ['The cake', 'The children', 'is eaten', 'by'], topic: 'passive', explain: 'In passive, the object of the action becomes the subject.' },
  { question: 'Which sentence is active?', answer: 'The dog chased the cat.', options: ['The dog chased the cat.', 'The cat was chased by the dog.', 'The cat is being chased.', 'The cat has been chased.'], topic: 'passive', explain: 'Active: subject does the action. Dog (subject) chased (verb) cat (object).' },
  { question: '"These books ___ read by many students." Present Simple Passive:', answer: 'are', options: ['are', 'is', 'was', 'were'], topic: 'passive', explain: 'Plural subject "books" + are + past participle.' },

  // ── Prepositions ──
  { question: 'Which preposition is for a specific time?', answer: 'at', options: ['at', 'in', 'on', 'by'], topic: 'prepositions', explain: '"At" is used for specific times: at 5 o\'clock, at noon.' },
  { question: '"She arrived ___ Monday." Which preposition?', answer: 'on', options: ['on', 'in', 'at', 'by'], topic: 'prepositions', explain: '"On" is used for days and dates.' },
  { question: 'Which preposition completes: "I was born ___ 2010"?', answer: 'in', options: ['in', 'on', 'at', 'by'], topic: 'prepositions', explain: '"In" is used for years, months, and seasons.' },
  { question: '"The cat is ___ the table." (below)', answer: 'under', options: ['under', 'on', 'in', 'at'], topic: 'prepositions', explain: '"Under" means below/beneath something.' },
  { question: 'Which is a preposition of movement?', answer: 'through', options: ['through', 'at', 'in', 'on'], topic: 'prepositions', explain: '"Through" = moving in one side and out the other.' },

  // ── Conjunctions ──
  { question: 'Which conjunction shows contrast?', answer: 'but', options: ['but', 'and', 'so', 'because'], topic: 'conjunctions', explain: '"But" connects contrasting ideas.' },
  { question: '"I study hard ___ I want to pass." Which conjunction?', answer: 'because', options: ['because', 'but', 'and', 'or'], topic: 'conjunctions', explain: '"Because" gives a reason.' },
  { question: 'Which conjunction shows a result?', answer: 'so', options: ['so', 'but', 'and', 'because'], topic: 'conjunctions', explain: '"So" introduces a result or consequence.' },
  { question: '"___ she was tired, she finished the race."', answer: 'Although', options: ['Although', 'Because', 'So', 'And'], topic: 'conjunctions', explain: '"Although" means despite the fact that.' },
  { question: 'FANBOYS stands for:', answer: 'For, And, Nor, But, Or, Yet, So', options: ['For, And, Nor, But, Or, Yet, So', 'First, After, Next, Before, Only, Yes, Still', 'For, Also, Not, Before, Or, Yes, So', 'From, And, Nor, By, Over, Yet, Since'], topic: 'conjunctions', explain: 'FANBOYS is a mnemonic for the 7 coordinating conjunctions.' },

  // ── Relative Clauses ──
  { question: 'Which relative pronoun is for people?', answer: 'who', options: ['who', 'which', 'where', 'when'], topic: 'relatives', explain: '"Who" refers to people in relative clauses.' },
  { question: '"The house ___ is on the hill is old." Which word?', answer: 'which', options: ['which', 'who', 'where', 'whose'], topic: 'relatives', explain: '"Which/that" is used for things.' },
  { question: 'Which is a relative adverb?', answer: 'where', options: ['where', 'who', 'which', 'whose'], topic: 'relatives', explain: '"Where", "when", "why" are relative adverbs.' },
  { question: '"The man ___ car was stolen called the police." Which word?', answer: 'whose', options: ['whose', 'who', 'which', 'that'], topic: 'relatives', explain: '"Whose" shows possession in relative clauses.' },

  // ── Gerunds & Infinitives ──
  { question: 'Which verb is followed by a GERUND (-ing)?', answer: 'enjoy', options: ['enjoy', 'want', 'decide', 'hope'], topic: 'gerunds', explain: 'Enjoy + verb-ing: "I enjoy reading."' },
  { question: 'Which verb is followed by an INFINITIVE (to + verb)?', answer: 'want', options: ['want', 'enjoy', 'avoid', 'finish'], topic: 'gerunds', explain: 'Want + to + verb: "I want to go."' },
  { question: '"She stopped ___ (smoke)." Correct form?', answer: 'smoking', options: ['smoking', 'to smoke', 'smoke', 'smoked'], topic: 'gerunds', explain: '"Stop + gerund" means quit the activity.' },
  { question: 'A gerund is:', answer: 'a verb form ending in -ing used as a noun', options: ['a verb form ending in -ing used as a noun', 'a past tense verb', 'a verb with "to" before it', 'a helping verb'], topic: 'gerunds', explain: 'Gerund = verb-ing functioning as a noun in a sentence.' },
  { question: '"I look forward to ___ you." Correct form?', answer: 'seeing', options: ['seeing', 'see', 'to see', 'saw'], topic: 'gerunds', explain: '"Look forward to" is followed by a gerund.' },
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

  // ── Conditionals ──
  { words: ['If', 'it', 'rains', 'I', 'will', 'stay', 'home'], answer: 'If it rains I will stay home', topic: 'conditionals' },
  { words: ['If', 'I', 'were', 'rich', 'I', 'would', 'travel'], answer: 'If I were rich I would travel', topic: 'conditionals' },
  { words: ['If', 'you', 'heat', 'ice', 'it', 'melts'], answer: 'If you heat ice it melts', topic: 'conditionals' },
  { words: ['If', 'she', 'studies', 'she', 'will', 'pass'], answer: 'If she studies she will pass', topic: 'conditionals' },
  { words: ['I', 'would', 'help', 'if', 'I', 'could'], answer: 'I would help if I could', topic: 'conditionals' },

  // ── Passive Voice ──
  { words: ['The', 'letter', 'was', 'written', 'by', 'Tom'], answer: 'The letter was written by Tom', topic: 'passive' },
  { words: ['English', 'is', 'spoken', 'around', 'the', 'world'], answer: 'English is spoken around the world', topic: 'passive' },
  { words: ['The', 'cake', 'was', 'baked', 'by', 'my', 'mother'], answer: 'The cake was baked by my mother', topic: 'passive' },
  { words: ['The', 'homework', 'has', 'been', 'completed'], answer: 'The homework has been completed', topic: 'passive' },
  { words: ['A', 'new', 'bridge', 'is', 'being', 'built'], answer: 'A new bridge is being built', topic: 'passive' },

  // ── Prepositions ──
  { words: ['She', 'arrived', 'at', 'the', 'airport', 'on', 'time'], answer: 'She arrived at the airport on time', topic: 'prepositions' },
  { words: ['The', 'book', 'is', 'on', 'the', 'table'], answer: 'The book is on the table', topic: 'prepositions' },
  { words: ['He', 'walked', 'across', 'the', 'bridge'], answer: 'He walked across the bridge', topic: 'prepositions' },
  { words: ['We', 'played', 'in', 'the', 'park', 'until', 'dark'], answer: 'We played in the park until dark', topic: 'prepositions' },

  // ── Conjunctions ──
  { words: ['I', 'like', 'pizza', 'and', 'pasta'], answer: 'I like pizza and pasta', topic: 'conjunctions' },
  { words: ['She', 'was', 'tired', 'but', 'she', 'kept', 'working'], answer: 'She was tired but she kept working', topic: 'conjunctions' },
  { words: ['He', 'stayed', 'home', 'because', 'he', 'was', 'sick'], answer: 'He stayed home because he was sick', topic: 'conjunctions' },
  { words: ['Although', 'it', 'rained', 'we', 'went', 'out'], answer: 'Although it rained we went out', topic: 'conjunctions' },

  // ── Relative Clauses ──
  { words: ['The', 'boy', 'who', 'lives', 'here', 'is', 'my', 'friend'], answer: 'The boy who lives here is my friend', topic: 'relatives' },
  { words: ['The', 'book', 'which', 'I', 'read', 'was', 'great'], answer: 'The book which I read was great', topic: 'relatives' },
  { words: ['This', 'is', 'the', 'place', 'where', 'we', 'met'], answer: 'This is the place where we met', topic: 'relatives' },
  { words: ['The', 'man', 'whose', 'car', 'broke', 'called', 'help'], answer: 'The man whose car broke called help', topic: 'relatives' },

  // ── Gerunds & Infinitives ──
  { words: ['She', 'enjoys', 'reading', 'books'], answer: 'She enjoys reading books', topic: 'gerunds' },
  { words: ['I', 'want', 'to', 'learn', 'English'], answer: 'I want to learn English', topic: 'gerunds' },
  { words: ['He', 'avoids', 'eating', 'junk', 'food'], answer: 'He avoids eating junk food', topic: 'gerunds' },
  { words: ['They', 'decided', 'to', 'go', 'home', 'early'], answer: 'They decided to go home early', topic: 'gerunds' },
  { words: ['Swimming', 'is', 'good', 'for', 'your', 'health'], answer: 'Swimming is good for your health', topic: 'gerunds' },
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

  // ── Conditionals ──
  { wrong: 'If it will rain, I will stay home.', correct: 'If it rains, I will stay home.', errorWord: 'will rain', fixWord: 'rains', topic: 'conditionals', rule: 'First Conditional: if + present simple (not "will")' },
  { wrong: 'If I was you, I would study harder.', correct: 'If I were you, I would study harder.', errorWord: 'was', fixWord: 'were', topic: 'conditionals', rule: 'Second Conditional: use "were" for all subjects' },
  { wrong: 'If she will study, she will pass.', correct: 'If she studies, she will pass.', errorWord: 'will study', fixWord: 'studies', topic: 'conditionals', rule: 'First Conditional: if-clause uses present simple' },
  { wrong: 'If I would be rich, I would buy a car.', correct: 'If I were rich, I would buy a car.', errorWord: 'would be', fixWord: 'were', topic: 'conditionals', rule: 'Second Conditional: if + past simple, not "would"' },

  // ── Passive Voice ──
  { wrong: 'The cake baked by my mother.', correct: 'The cake was baked by my mother.', errorWord: 'baked', fixWord: 'was baked', topic: 'passive', rule: 'Passive needs "be" + past participle' },
  { wrong: 'The letter was wrote by Tom.', correct: 'The letter was written by Tom.', errorWord: 'wrote', fixWord: 'written', topic: 'passive', rule: 'Passive uses past participle (write → written)' },
  { wrong: 'English are spoken in many countries.', correct: 'English is spoken in many countries.', errorWord: 'are', fixWord: 'is', topic: 'passive', rule: '"English" is singular → is spoken' },
  { wrong: 'The windows was broken by the storm.', correct: 'The windows were broken by the storm.', errorWord: 'was', fixWord: 'were', topic: 'passive', rule: '"Windows" is plural → were broken' },

  // ── Prepositions ──
  { wrong: 'She was born in March 15th.', correct: 'She was born on March 15th.', errorWord: 'in', fixWord: 'on', topic: 'prepositions', rule: 'Use "on" for specific dates' },
  { wrong: 'I wake up on 7 o\'clock.', correct: 'I wake up at 7 o\'clock.', errorWord: 'on', fixWord: 'at', topic: 'prepositions', rule: 'Use "at" for specific times' },
  { wrong: 'He has lived here since five years.', correct: 'He has lived here for five years.', errorWord: 'since', fixWord: 'for', topic: 'prepositions', rule: '"For" + duration; "since" + point in time' },
  { wrong: 'The cat is in the table.', correct: 'The cat is on the table.', errorWord: 'in', fixWord: 'on', topic: 'prepositions', rule: 'Use "on" for surfaces' },

  // ── Conjunctions ──
  { wrong: 'She is tired so she keeps working.', correct: 'She is tired but she keeps working.', errorWord: 'so', fixWord: 'but', topic: 'conjunctions', rule: 'Use "but" for contrast, "so" for result' },
  { wrong: 'I study hard so I want to pass.', correct: 'I study hard because I want to pass.', errorWord: 'so', fixWord: 'because', topic: 'conjunctions', rule: '"Because" gives a reason, "so" gives a result' },
  { wrong: 'Because it was cold, but she still went out.', correct: 'Although it was cold, she still went out.', errorWord: 'Because', fixWord: 'Although', topic: 'conjunctions', rule: 'Don\'t use "because" + "but" together; use "although"' },

  // ── Relative Clauses ──
  { wrong: 'The boy which lives next door is kind.', correct: 'The boy who lives next door is kind.', errorWord: 'which', fixWord: 'who', topic: 'relatives', rule: 'Use "who" for people, "which" for things' },
  { wrong: 'The place who we visited was beautiful.', correct: 'The place which we visited was beautiful.', errorWord: 'who', fixWord: 'which', topic: 'relatives', rule: 'Use "which/that" for places and things' },
  { wrong: 'The girl who bag was stolen was sad.', correct: 'The girl whose bag was stolen was sad.', errorWord: 'who', fixWord: 'whose', topic: 'relatives', rule: 'Use "whose" for possession' },

  // ── Gerunds & Infinitives ──
  { wrong: 'She enjoys to read books.', correct: 'She enjoys reading books.', errorWord: 'to read', fixWord: 'reading', topic: 'gerunds', rule: 'enjoy + verb-ing (not to + verb)' },
  { wrong: 'I want going to the park.', correct: 'I want to go to the park.', errorWord: 'going', fixWord: 'to go', topic: 'gerunds', rule: 'want + to + verb (not verb-ing)' },
  { wrong: 'He avoids to eat junk food.', correct: 'He avoids eating junk food.', errorWord: 'to eat', fixWord: 'eating', topic: 'gerunds', rule: 'avoid + verb-ing (not to + verb)' },
  { wrong: 'They decided going home early.', correct: 'They decided to go home early.', errorWord: 'going', fixWord: 'to go', topic: 'gerunds', rule: 'decide + to + verb (not verb-ing)' },
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

  // ── Conditionals ──
  { instruction: 'Rewrite as First Conditional:', original: 'Maybe it will rain. I will take an umbrella.', answer: 'If it rains, I will take an umbrella.', alt: ['If it rains, I will take an umbrella.', 'If it rains I will take an umbrella.'], topic: 'conditionals', hint: 'If + present simple, will + base verb' },
  { instruction: 'Rewrite as Second Conditional:', original: 'I am not rich. I cannot travel the world.', answer: 'If I were rich, I would travel the world.', alt: ['If I were rich, I would travel the world.', 'If I were rich I would travel the world.'], topic: 'conditionals', hint: 'If + past simple, would + base verb' },
  { instruction: 'Rewrite as Zero Conditional:', original: 'When you heat water to 100°C, it boils.', answer: 'If you heat water to 100°C, it boils.', alt: ['If you heat water to 100°C, it boils.', 'If you heat water to 100 degrees, it boils.'], topic: 'conditionals', hint: 'If + present, present (general truth)' },

  // ── Passive Voice ──
  { instruction: 'Change to PASSIVE:', original: 'Tom wrote the letter.', answer: 'The letter was written by Tom.', alt: ['The letter was written by Tom.'], topic: 'passive', hint: 'Object + was/were + past participle + by + agent' },
  { instruction: 'Change to PASSIVE:', original: 'She cleans the house every day.', answer: 'The house is cleaned every day.', alt: ['The house is cleaned every day.', 'The house is cleaned by her every day.'], topic: 'passive', hint: 'Object + is/are + past participle' },
  { instruction: 'Change to ACTIVE:', original: 'The cake was eaten by the children.', answer: 'The children ate the cake.', alt: ['The children ate the cake.'], topic: 'passive', hint: 'Agent becomes subject + active verb + object' },
  { instruction: 'Change to PASSIVE:', original: 'They are building a new school.', answer: 'A new school is being built.', alt: ['A new school is being built.', 'A new school is being built by them.'], topic: 'passive', hint: 'is/are + being + past participle' },

  // ── Prepositions ──
  { instruction: 'Fill the correct preposition:', original: 'She arrived ___ the station ___ 9 AM.', answer: 'She arrived at the station at 9 AM.', alt: ['She arrived at the station at 9 AM.'], topic: 'prepositions', hint: '"at" for specific places and times' },
  { instruction: 'Fill the correct preposition:', original: 'I have been waiting ___ two hours.', answer: 'I have been waiting for two hours.', alt: ['I have been waiting for two hours.'], topic: 'prepositions', hint: '"for" + duration' },

  // ── Conjunctions ──
  { instruction: 'Join using "because":', original: 'He stayed home. He was sick.', answer: 'He stayed home because he was sick.', alt: ['He stayed home because he was sick.'], topic: 'conjunctions', hint: 'because gives the reason' },
  { instruction: 'Join using "although":', original: 'It was raining. We went out.', answer: 'Although it was raining, we went out.', alt: ['Although it was raining, we went out.', 'We went out although it was raining.'], topic: 'conjunctions', hint: '"Although" shows contrast' },
  { instruction: 'Join using "so":', original: 'She was hungry. She ate a sandwich.', answer: 'She was hungry, so she ate a sandwich.', alt: ['She was hungry, so she ate a sandwich.', 'She was hungry so she ate a sandwich.'], topic: 'conjunctions', hint: '"so" shows result' },

  // ── Relative Clauses ──
  { instruction: 'Join using a relative pronoun:', original: 'I know a girl. She speaks five languages.', answer: 'I know a girl who speaks five languages.', alt: ['I know a girl who speaks five languages.', 'I know a girl that speaks five languages.'], topic: 'relatives', hint: 'who/that for people' },
  { instruction: 'Join using a relative pronoun:', original: 'This is the book. I bought it yesterday.', answer: 'This is the book which I bought yesterday.', alt: ['This is the book which I bought yesterday.', 'This is the book that I bought yesterday.'], topic: 'relatives', hint: 'which/that for things' },
  { instruction: 'Join using "where":', original: 'This is the park. We play here.', answer: 'This is the park where we play.', alt: ['This is the park where we play.'], topic: 'relatives', hint: '"where" for places' },

  // ── Gerunds & Infinitives ──
  { instruction: 'Rewrite using a GERUND:', original: 'To swim is fun.', answer: 'Swimming is fun.', alt: ['Swimming is fun.'], topic: 'gerunds', hint: 'Gerund (verb-ing) as subject' },
  { instruction: 'Complete with gerund or infinitive:', original: 'I enjoy ___ (cook).', answer: 'I enjoy cooking.', alt: ['I enjoy cooking.'], topic: 'gerunds', hint: 'enjoy + verb-ing' },
  { instruction: 'Complete with gerund or infinitive:', original: 'She decided ___ (leave) early.', answer: 'She decided to leave early.', alt: ['She decided to leave early.'], topic: 'gerunds', hint: 'decide + to + verb' },
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

  // ── Conditionals ──
  {
    title: 'Match the conditional type with its structure',
    topic: 'conditionals',
    pairs: [
      { left: 'Zero Conditional', right: 'If + present, present' },
      { left: 'First Conditional', right: 'If + present, will + verb' },
      { left: 'Second Conditional', right: 'If + past, would + verb' },
    ]
  },
  {
    title: 'Match the sentence with its conditional type',
    topic: 'conditionals',
    pairs: [
      { left: 'If you heat ice, it melts.', right: 'Zero Conditional' },
      { left: 'If it rains, I will stay home.', right: 'First Conditional' },
      { left: 'If I were rich, I would travel.', right: 'Second Conditional' },
      { left: 'If you press this button, the door opens.', right: 'Zero Conditional' },
      { left: 'If she studies, she will pass.', right: 'First Conditional' },
    ]
  },

  // ── Passive Voice ──
  {
    title: 'Match the active sentence with its passive form',
    topic: 'passive',
    pairs: [
      { left: 'Tom wrote the letter.', right: 'The letter was written by Tom.' },
      { left: 'She cleans the house.', right: 'The house is cleaned by her.' },
      { left: 'They built the bridge.', right: 'The bridge was built by them.' },
      { left: 'He paints pictures.', right: 'Pictures are painted by him.' },
      { left: 'She has finished the work.', right: 'The work has been finished by her.' },
    ]
  },

  // ── Prepositions ──
  {
    title: 'Match the preposition with its usage',
    topic: 'prepositions',
    pairs: [
      { left: 'at', right: 'Specific time (at 9 AM)' },
      { left: 'on', right: 'Day or date (on Monday)' },
      { left: 'in', right: 'Month/year/season (in June)' },
      { left: 'for', right: 'Duration (for 2 hours)' },
      { left: 'since', right: 'Point in time (since 2020)' },
      { left: 'by', right: 'Deadline (by tomorrow)' },
    ]
  },
  {
    title: 'Match the preposition of place',
    topic: 'prepositions',
    pairs: [
      { left: 'on', right: 'Surface (on the table)' },
      { left: 'in', right: 'Inside (in the box)' },
      { left: 'under', right: 'Below (under the bed)' },
      { left: 'between', right: 'In the middle of two' },
      { left: 'behind', right: 'At the back of' },
      { left: 'next to', right: 'Beside (next to the door)' },
    ]
  },

  // ── Conjunctions ──
  {
    title: 'Match the conjunction with its function',
    topic: 'conjunctions',
    pairs: [
      { left: 'and', right: 'Addition' },
      { left: 'but', right: 'Contrast' },
      { left: 'or', right: 'Choice' },
      { left: 'so', right: 'Result' },
      { left: 'because', right: 'Reason' },
      { left: 'although', right: 'Concession/Despite' },
    ]
  },

  // ── Relative Clauses ──
  {
    title: 'Match the relative pronoun with what it refers to',
    topic: 'relatives',
    pairs: [
      { left: 'who', right: 'People (subject)' },
      { left: 'whom', right: 'People (object)' },
      { left: 'which', right: 'Things / Animals' },
      { left: 'whose', right: 'Possession' },
      { left: 'where', right: 'Places' },
      { left: 'when', right: 'Time' },
    ]
  },

  // ── Gerunds & Infinitives ──
  {
    title: 'Match the verb with gerund (-ing) or infinitive (to + verb)',
    topic: 'gerunds',
    pairs: [
      { left: 'enjoy', right: 'verb-ing (enjoy reading)' },
      { left: 'want', right: 'to + verb (want to go)' },
      { left: 'avoid', right: 'verb-ing (avoid eating)' },
      { left: 'decide', right: 'to + verb (decide to leave)' },
      { left: 'mind', right: 'verb-ing (mind waiting)' },
      { left: 'hope', right: 'to + verb (hope to win)' },
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
  conditionals: [
    { title: 'Zero Conditional', rule: 'If + present simple, present simple', example: 'If you heat water, it boils.' },
    { title: 'First Conditional', rule: 'If + present simple, will + base verb', example: 'If it rains, I will stay home.' },
    { title: 'Second Conditional', rule: 'If + past simple, would + base verb', example: 'If I were rich, I would travel.' },
  ],
  passive: [
    { title: 'Present Simple Passive', rule: 'is/are + past participle', example: 'English is spoken worldwide.' },
    { title: 'Past Simple Passive', rule: 'was/were + past participle', example: 'The letter was written by Tom.' },
    { title: 'Present Perfect Passive', rule: 'has/have + been + past participle', example: 'The work has been completed.' },
    { title: 'Present Continuous Passive', rule: 'is/are + being + past participle', example: 'A bridge is being built.' },
  ],
  prepositions: [
    { title: 'Time: at / on / in', rule: 'at = specific time, on = day/date, in = month/year/season', example: 'at 9 AM, on Monday, in June' },
    { title: 'Place: in / on / at', rule: 'in = inside, on = surface, at = specific point', example: 'in the box, on the table, at the door' },
    { title: 'Movement: to / into / across', rule: 'to = direction, into = entering, across = side to side', example: 'Go to school. Jump into the pool.' },
    { title: 'Duration: for / since', rule: 'for + duration, since + starting point', example: 'for 2 hours, since 2020' },
  ],
  conjunctions: [
    { title: 'Coordinating (FANBOYS)', rule: 'For, And, Nor, But, Or, Yet, So', example: 'I like tea and coffee.' },
    { title: 'Subordinating', rule: 'because, although, when, while, if, until, after, before', example: 'I stayed home because I was sick.' },
    { title: 'Correlative', rule: 'both...and, either...or, neither...nor, not only...but also', example: 'Both Tom and Jerry are funny.' },
  ],
  relatives: [
    { title: 'who / whom', rule: 'For people (who = subject, whom = object)', example: 'The boy who lives here is kind.' },
    { title: 'which / that', rule: 'For things and animals', example: 'The book which I read was great.' },
    { title: 'whose', rule: 'For possession', example: 'The girl whose bag was stolen cried.' },
    { title: 'where / when', rule: 'For places (where) and time (when)', example: 'This is where we met.' },
  ],
  gerunds: [
    { title: 'Gerund (-ing)', rule: 'Verb form used as a noun', example: 'Swimming is fun. I enjoy reading.' },
    { title: 'Infinitive (to + verb)', rule: 'Base form with "to"', example: 'I want to learn. She decided to go.' },
    { title: 'Gerund verbs', rule: 'enjoy, avoid, mind, keep, finish, suggest', example: 'He enjoys playing football.' },
    { title: 'Infinitive verbs', rule: 'want, decide, hope, promise, plan, offer', example: 'She plans to visit Paris.' },
  ],
};
