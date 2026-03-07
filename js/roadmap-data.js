/* ================================================================
   Grammar English Kids  Roadmap Data
   6 Phases (TOEFL-aligned), 5-7 sessions each
   Each session: lesson (explanation + rules + examples) + exercise IDs
================================================================ */

const ROADMAP = [

/* 
   PHASE 1  NOUNS & ARTICLES
 */
{
  id: 'phase1', phase: 1,
  title: 'Nouns & Articles',
  subtitle: 'The building blocks of sentences',
  icon: '',
  color: '#6C63FF',
  duration: '5 sessions',
  sessions: [
    {
      id: 'p1s1', phase: 'phase1', day: 1,
      title: 'Common & Proper Nouns',
      objectives: ['Identify common vs proper nouns', 'Capitalise proper nouns correctly'],
      lesson: {
        explanation: 'A <strong>noun</strong> is a word that names a person, place, thing, or idea. Nouns can be <em>common</em> (general names) or <em>proper</em> (specific names that need a capital letter).',
        rules: [
          { icon: '', text: 'Common nouns name general things: <em>dog, city, teacher</em>' },
          { icon: '', text: 'Proper nouns name specific things and always start with a capital: <em>Rex, London, Mrs Smith</em>' },
          { icon: '', text: 'A noun can be <strong>singular</strong> (one) or <strong>plural</strong> (more than one).' }
        ],
        examples: [
          { en: 'The dog played in the park.', note: '"dog" and "park" are common nouns' },
          { en: 'Rex played in Hyde Park.', note: '"Rex" and "Hyde Park" are proper nouns  capital letters' },
          { en: 'My teacher is very kind.', note: '"teacher" is common; if you wrote "Mrs Green" that is proper' }
        ]
      },
      exerciseIds: ['p1s1_mc1','p1s1_mc2','p1s1_fill1','p1s1_fill2','p1s1_err1','p1s1_write1']
    },
    {
      id: 'p1s2', phase: 'phase1', day: 2,
      title: 'Countable & Uncountable Nouns',
      objectives: ['Tell countable from uncountable nouns', 'Use much / many / a lot of correctly'],
      lesson: {
        explanation: '<strong>Countable nouns</strong> have a singular and a plural form  you can count them. <strong>Uncountable nouns</strong> cannot be counted individually and have no plural form.',
        rules: [
          { icon: '', text: 'Countable: <em>one apple  two apples / a book  many books</em>' },
          { icon: '', text: 'Uncountable: <em>water, rice, music, information</em>  no plural, no "a/an"' },
          { icon: '', text: 'Use <strong>many</strong> with countable; <strong>much</strong> with uncountable; <strong>a lot of</strong> with both.' }
        ],
        examples: [
          { en: 'How many apples do you want?', note: '"apples" is countable  many' },
          { en: 'I don\'t have much money.', note: '"money" is uncountable  much' },
          { en: 'There is a lot of traffic today.', note: '"traffic" uncountable  a lot of' }
        ]
      },
      exerciseIds: ['p1s2_mc1','p1s2_mc2','p1s2_fill1','p1s2_fill2','p1s2_err1','p1s2_sort1']
    },
    {
      id: 'p1s3', phase: 'phase1', day: 3,
      title: 'Articles: a, an, the',
      objectives: ['Use a / an / the correctly', 'Know when to use zero article'],
      lesson: {
        explanation: 'Articles tell us whether a noun is general or specific. <strong>A / an</strong> are indefinite articles; <strong>the</strong> is the definite article.',
        rules: [
          { icon: '', text: 'Use <strong>a</strong> before consonant sounds: <em>a book, a university</em>' },
          { icon: '', text: 'Use <strong>an</strong> before vowel sounds: <em>an apple, an hour</em>' },
          { icon: '', text: 'Use <strong>the</strong> for something specific, already mentioned, or unique: <em>the sun, the book I told you about</em>' },
          { icon: '', text: 'Zero article: no article with most proper nouns, languages, sports, meals: <em>She plays tennis.</em>' }
        ],
        examples: [
          { en: 'I saw a dog in the park.', note: '"a dog" = first mention (indefinite); "the park" = specific place' },
          { en: 'She is an engineer.', note: '"an" because "engineer" starts with a vowel sound' },
          { en: 'The Earth orbits the Sun.', note: '"the" for unique things' }
        ]
      },
      exerciseIds: ['p1s3_mc1','p1s3_mc2','p1s3_fill1','p1s3_fill2','p1s3_fill3','p1s3_err1']
    },
    {
      id: 'p1s4', phase: 'phase1', day: 4,
      title: 'Noun Plurals & Irregular Forms',
      objectives: ['Form regular and irregular plurals', 'Spell plurals correctly'],
      lesson: {
        explanation: 'Most nouns just add <strong>-s</strong> to make a plural, but many have special rules or completely irregular forms.',
        rules: [
          { icon: '', text: 'Most nouns: add <strong>-s</strong>  <em>cat  cats</em>' },
          { icon: '', text: 'Nouns ending in -s, -sh, -ch, -x, -z: add <strong>-es</strong>  <em>bus  buses, box  boxes</em>' },
          { icon: '', text: 'Nouns ending in consonant + y: change yi, add <strong>-es</strong>  <em>city  cities</em>' },
          { icon: '', text: 'Irregular: <em>manmen, childchildren, mousemice, footfeet, toothteeth</em>' },
          { icon: '', text: 'Same singular &amp; plural: <em>sheep, deer, fish</em>' }
        ],
        examples: [
          { en: 'Two children are playing.', note: 'child  children (irregular)' },
          { en: 'I brush my teeth twice a day.', note: 'tooth  teeth (irregular)' },
          { en: 'The library has many shelves.', note: 'shelf  shelves (-f  -ves)' }
        ]
      },
      exerciseIds: ['p1s4_mc1','p1s4_fill1','p1s4_fill2','p1s4_err1','p1s4_sort1','p1s4_write1']
    },
    {
      id: 'p1s5', phase: 'phase1', day: 5,
      title: 'Review & Quiz  Nouns & Articles',
      objectives: ['Review all noun types', 'Test article usage', 'Self-assess understanding'],
      lesson: {
        explanation: 'Let\'s review what we have learned about nouns and articles. This session combines all the rules you have studied so far.',
        rules: [
          { icon: '', text: 'Common vs proper nouns: proper nouns need capital letters' },
          { icon: '', text: 'Countable vs uncountable: use many/much/a lot of correctly' },
          { icon: '', text: 'Articles: a (consonant sound) / an (vowel sound) / the (specific) / zero' },
          { icon: '', text: 'Plurals: regular (-s, -es) and irregular (childchildren, etc.)' }
        ],
        examples: [
          { en: 'I ate an apple and a banana for breakfast.', note: 'articles: an (vowel sound), a (consonant sound)' },
          { en: 'The children have many books but not much time.', note: 'irregular plural; many (countable); much (uncountable)' }
        ]
      },
      exerciseIds: ['p1s5_mc1','p1s5_mc2','p1s5_fill1','p1s5_fill2','p1s5_err1','p1s5_sort1','p1s5_write1']
    }
  ]
},

/* 
   PHASE 2  PRONOUNS
 */
{
  id: 'phase2', phase: 2,
  title: 'Pronouns',
  subtitle: 'Replacing nouns smartly',
  icon: '',
  color: '#FF6B93',
  duration: '4 sessions',
  sessions: [
    {
      id: 'p2s1', phase: 'phase2', day: 1,
      title: 'Personal Pronouns',
      objectives: ['Use subject pronouns correctly', 'Use object pronouns correctly'],
      lesson: {
        explanation: '<strong>Personal pronouns</strong> replace nouns referring to people or things. They change form depending on whether they are the subject or object of a sentence.',
        rules: [
          { icon: '', text: 'Subject pronouns: <strong>I, you, he, she, it, we, they</strong>  come before the verb' },
          { icon: '', text: 'Object pronouns: <strong>me, you, him, her, it, us, them</strong>  come after the verb or preposition' },
          { icon: '', text: 'Do not mix subject and object: <em>"She gave it to me" NOT "She gave it to I"</em>' }
        ],
        examples: [
          { en: 'She is my best friend.', note: '"She" is subject pronoun  subject of the verb' },
          { en: 'I called him yesterday.', note: '"I" is subject; "him" is object of the verb "called"' },
          { en: 'They invited us to the party.', note: '"They" = subject; "us" = object' }
        ]
      },
      exerciseIds: ['p2s1_mc1','p2s1_mc2','p2s1_fill1','p2s1_fill2','p2s1_err1','p2s1_write1']
    },
    {
      id: 'p2s2', phase: 'phase2', day: 2,
      title: 'Possessive & Reflexive Pronouns',
      objectives: ['Use possessive pronouns and adjectives', 'Use reflexive pronouns'],
      lesson: {
        explanation: '<strong>Possessive pronouns</strong> show ownership. <strong>Reflexive pronouns</strong> refer back to the subject of the sentence.',
        rules: [
          { icon: '', text: 'Possessive adjectives (before noun): <em>my, your, his, her, its, our, their</em>' },
          { icon: '', text: 'Possessive pronouns (stand alone): <em>mine, yours, his, hers, ours, theirs</em>' },
          { icon: '', text: 'Reflexive: <em>myself, yourself, himself, herself, itself, ourselves, themselves</em>' },
          { icon: '', text: 'Use reflexive when subject = object: <em>He hurt himself.</em>' }
        ],
        examples: [
          { en: 'This book is mine. (NOT: "This book is my")', note: 'possessive pronoun stands alone' },
          { en: 'She cooked the meal herself.', note: 'reflexive  she did it alone (emphasis)' },
          { en: 'They made it themselves.', note: 'reflexive plural' }
        ]
      },
      exerciseIds: ['p2s2_mc1','p2s2_mc2','p2s2_fill1','p2s2_fill2','p2s2_err1','p2s2_sort1']
    },
    {
      id: 'p2s3', phase: 'phase2', day: 3,
      title: 'Demonstrative & Indefinite Pronouns',
      objectives: ['Use this/that/these/those', 'Use indefinite pronouns (someone, everybody, nothing)'],
      lesson: {
        explanation: '<strong>Demonstrative pronouns</strong> point to specific things. <strong>Indefinite pronouns</strong> refer to non-specific people or things.',
        rules: [
          { icon: '', text: 'Near, singular: <strong>this</strong>; near, plural: <strong>these</strong>' },
          { icon: '', text: 'Far, singular: <strong>that</strong>; far, plural: <strong>those</strong>' },
          { icon: '', text: 'Indefinite examples: <em>someone, anyone, no one, everyone, something, anything, nothing, everything</em>' },
          { icon: '', text: 'Indefinite pronouns take a singular verb: <em>Everyone is here.</em>' }
        ],
        examples: [
          { en: 'This is my cat; those are her kittens.', note: '"This" (near, singular); "those" (far, plural)' },
          { en: 'Everyone knows the answer.', note: '"Everyone" = singular  "knows" (not "know")' },
          { en: 'Is there anything I can help with?', note: '"anything" in a question' }
        ]
      },
      exerciseIds: ['p2s3_mc1','p2s3_mc2','p2s3_fill1','p2s3_fill2','p2s3_err1','p2s3_write1']
    },
    {
      id: 'p2s4', phase: 'phase2', day: 4,
      title: 'Review & Quiz  Pronouns',
      objectives: ['Review all pronoun types', 'Practise pronoun agreement'],
      lesson: {
        explanation: 'In this review session we will consolidate all pronoun types: personal (subject/object), possessive, reflexive, demonstrative, and indefinite.',
        rules: [
          { icon: '', text: 'Subject pronouns: I, you, he, she, it, we, they' },
          { icon: '', text: 'Object pronouns: me, you, him, her, it, us, them' },
          { icon: '', text: 'Possessives: my/mine, your/yours, his, her/hers, our/ours, their/theirs' },
          { icon: '', text: 'Reflexives: myself, yourself, himself' },
          { icon: '', text: 'Indefinite pronouns use singular verb agreement' }
        ],
        examples: [
          { en: 'She taught herself to play the piano.', note: 'subject pronoun + reflexive' },
          { en: 'Is this bag yours or hers?', note: 'demonstrative + possessive pronouns' }
        ]
      },
      exerciseIds: ['p2s4_mc1','p2s4_mc2','p2s4_fill1','p2s4_fill2','p2s4_err1','p2s4_sort1','p2s4_write1']
    }
  ]
},

/* 
   PHASE 3  VERBS & TENSES
 */
{
  id: 'phase3', phase: 3,
  title: 'Verbs & Tenses',
  subtitle: 'Expressing time and action',
  icon: '',
  color: '#00C9A7',
  duration: '7 sessions',
  sessions: [
    {
      id: 'p3s1', phase: 'phase3', day: 1,
      title: 'Present Simple',
      objectives: ['Form positive, negative, and question sentences', 'Use for habits and facts'],
      lesson: {
        explanation: 'The <strong>Present Simple</strong> describes habits, routines, facts, and permanent states.',
        rules: [
          { icon: '', text: 'Positive: subject + base verb. He/she/it  add <strong>-s / -es</strong>: <em>She eats. He goes.</em>' },
          { icon: '', text: 'Negative: do not / does not + base verb: <em>I do not eat meat. She does not go out.</em>' },
          { icon: '', text: 'Question: Do/Does + subject + base verb? <em>Do you play? Does he swim?</em>' },
          { icon: '', text: 'Time signals: <em>every day, usually, often, never, always, on Mondays</em>' }
        ],
        examples: [
          { en: 'She drinks coffee every morning.', note: 'habit  Present Simple; "she"  "drinks"' },
          { en: 'Water boils at 100C.', note: 'scientific fact' },
          { en: 'Does he know the answer?', note: 'question with "does" for he/she/it' }
        ]
      },
      exerciseIds: ['p3s1_mc1','p3s1_mc2','p3s1_fill1','p3s1_fill2','p3s1_err1','p3s1_sort1']
    },
    {
      id: 'p3s2', phase: 'phase3', day: 2,
      title: 'Present Continuous',
      objectives: ['Form present continuous', 'Distinguish from present simple'],
      lesson: {
        explanation: 'The <strong>Present Continuous</strong> describes actions happening right now, or temporary actions around now.',
        rules: [
          { icon: '', text: 'Positive: subject + am/is/are + verb-<strong>ing</strong>: <em>She is reading.</em>' },
          { icon: '', text: 'Negative: subject + am/is/are + not + verb-ing: <em>He is not sleeping.</em>' },
          { icon: '', text: 'Question: Am/Is/Are + subject + verb-ing? <em>Are you listening?</em>' },
          { icon: '', text: 'Signal words: <em>now, at the moment, right now, currently, look!</em>' }
        ],
        examples: [
          { en: 'They are playing football right now.', note: '"right now"  Present Continuous' },
          { en: 'Look! It is raining outside.', note: '"Look!" signals something happening at this moment' },
          { en: 'I am studying for my exams this week.', note: 'temporary situation around now' }
        ]
      },
      exerciseIds: ['p3s2_mc1','p3s2_mc2','p3s2_fill1','p3s2_fill2','p3s2_err1','p3s2_sort1']
    },
    {
      id: 'p3s3', phase: 'phase3', day: 3,
      title: 'Past Simple',
      objectives: ['Form regular and irregular past simple', 'Use for completed actions'],
      lesson: {
        explanation: 'The <strong>Past Simple</strong> describes completed actions at a specific time in the past.',
        rules: [
          { icon: '', text: 'Regular verbs: add <strong>-ed</strong>: <em>walk  walked, play  played</em>' },
          { icon: '', text: 'Irregular verbs: learn them! <em>go  went, see  saw, eat  ate, have  had</em>' },
          { icon: '', text: 'Negative: did not + base verb: <em>She did not come.</em>' },
          { icon: '', text: 'Question: Did + subject + base verb? <em>Did you see him?</em>' },
          { icon: '', text: 'Signal words: <em>yesterday, last week, in 2020, ago, when I was young</em>' }
        ],
        examples: [
          { en: 'I visited Paris last summer.', note: '"last summer"  Past Simple' },
          { en: 'She did not eat breakfast this morning.', note: 'negative Past Simple' },
          { en: 'Did they win the match?', note: 'question with "did"' }
        ]
      },
      exerciseIds: ['p3s3_mc1','p3s3_mc2','p3s3_fill1','p3s3_fill2','p3s3_err1','p3s3_sort1']
    },
    {
      id: 'p3s4', phase: 'phase3', day: 4,
      title: 'Past Continuous',
      objectives: ['Use past continuous for interrupted actions', 'Combine with past simple'],
      lesson: {
        explanation: 'The <strong>Past Continuous</strong> describes an action that was in progress at a specific time in the past, often interrupted by another (shorter) action.',
        rules: [
          { icon: '', text: 'Form: subject + was/were + verb-<strong>ing</strong>' },
          { icon: '', text: 'Interrupted action: <em>I was sleeping when the phone rang.</em>' },
          { icon: '', text: 'Two parallel past actions: <em>While she was cooking, he was reading.</em>' },
          { icon: '', text: 'Signal words: <em>while, when, at that moment, at 8 o\'clock yesterday</em>' }
        ],
        examples: [
          { en: 'It was raining when I left home.', note: 'past continuous (raining) interrupted by past simple (left)' },
          { en: 'While they were arguing, she was crying.', note: 'two simultaneous past continuous actions' }
        ]
      },
      exerciseIds: ['p3s4_mc1','p3s4_mc2','p3s4_fill1','p3s4_fill2','p3s4_err1','p3s4_sort1']
    },
    {
      id: 'p3s5', phase: 'phase3', day: 5,
      title: 'Future: will & going to',
      objectives: ['Use will for predictions and decisions', 'Use going to for plans and intentions'],
      lesson: {
        explanation: 'English has two main future forms: <strong>will</strong> (spontaneous decisions, predictions) and <strong>be going to</strong> (planned intentions, evidence-based predictions).',
        rules: [
          { icon: '', text: '<strong>Will</strong>: subject + will + base verb' },
          { icon: '', text: 'Will uses: spontaneous decision, prediction without evidence, offers, promises' },
          { icon: '', text: '<strong>Going to</strong>: subject + am/is/are + going to + base verb' },
          { icon: '', text: 'Going to uses: plans made before speaking, predictions based on present evidence' }
        ],
        examples: [
          { en: 'I will call you tonight. (promise)', note: '"will" for a promise decided now' },
          { en: 'She is going to study medicine.', note: '"going to" for a plan already decided' },
          { en: 'Look at those clouds  it is going to rain.', note: '"going to" = evidence-based prediction' }
        ]
      },
      exerciseIds: ['p3s5_mc1','p3s5_mc2','p3s5_fill1','p3s5_fill2','p3s5_err1','p3s5_sort1']
    },
    {
      id: 'p3s6', phase: 'phase3', day: 6,
      title: 'Present Perfect',
      objectives: ['Form present perfect', 'Use for life experiences and recent events'],
      lesson: {
        explanation: 'The <strong>Present Perfect</strong> connects the past to the present  an action happened at an unspecified time before now, or the result is still relevant.',
        rules: [
          { icon: '', text: 'Form: subject + have/has + <strong>past participle</strong>' },
          { icon: '', text: 'Life experience (ever/never): <em>I have never been to Japan.</em>' },
          { icon: '', text: 'Recent action with present result: <em>She has lost her keys.</em> (can\'t get in now)' },
          { icon: '', text: 'Signal words: <em>ever, never, just, already, yet, since, for</em>' }
        ],
        examples: [
          { en: 'Have you ever eaten sushi?', note: '"ever"  life experience question' },
          { en: 'I have just finished my homework.', note: '"just"  very recently completed' },
          { en: 'She has lived here for five years.', note: 'started in past, still true now  "for"' }
        ]
      },
      exerciseIds: ['p3s6_mc1','p3s6_mc2','p3s6_fill1','p3s6_fill2','p3s6_err1','p3s6_sort1']
    },
    {
      id: 'p3s7', phase: 'phase3', day: 7,
      title: 'Review & Quiz  Tenses',
      objectives: ['Identify correct tense for context', 'Mix all tenses studied'],
      lesson: {
        explanation: 'This final session in Phase 3 reviews all six tenses. Read each sentence carefully and choose the correct tense based on the time signal or context.',
        rules: [
          { icon: '', text: 'Present Simple: habits/facts  signal: every day, usually' },
          { icon: '', text: 'Present Continuous: now/temporary  signal: now, at the moment' },
          { icon: '', text: 'Past Simple: completed past  signal: yesterday, last year' },
          { icon: '', text: 'Past Continuous: interrupted/parallel  signal: while, when' },
          { icon: '', text: 'Future will/going to: predictions/plans' },
          { icon: '', text: 'Present Perfect: experience/recent result  signal: ever, just, already' }
        ],
        examples: [
          { en: 'She has already eaten but I am still cooking.', note: 'present perfect + present continuous' },
          { en: 'While he was driving, she was reading.', note: 'two past continuous for simultaneous actions' }
        ]
      },
      exerciseIds: ['p3s7_mc1','p3s7_mc2','p3s7_mc3','p3s7_fill1','p3s7_fill2','p3s7_err1','p3s7_sort1','p3s7_write1']
    }
  ]
},

/* 
   PHASE 4  ADJECTIVES & ADVERBS
 */
{
  id: 'phase4', phase: 4,
  title: 'Adjectives & Adverbs',
  subtitle: 'Describing and modifying',
  icon: '',
  color: '#FFAA00',
  duration: '5 sessions',
  sessions: [
    {
      id: 'p4s1', phase: 'phase4', day: 1,
      title: 'Adjectives: Types & Placement',
      objectives: ['Identify adjectives', 'Place adjectives correctly in a sentence'],
      lesson: {
        explanation: '<strong>Adjectives</strong> describe nouns. They usually come before the noun or after a linking verb.',
        rules: [
          { icon: '', text: 'Attributive (before noun): <em>a red car, an interesting book</em>' },
          { icon: '', text: 'Predicative (after linking verb): <em>The car is red. The book seems interesting.</em>' },
          { icon: '', text: 'Order when stacking: Opinion  Size  Age  Shape  Colour  Origin  Material  Noun' },
          { icon: '', text: 'Example order: <em>a lovely little old rectangular green French silver whittling knife</em>' }
        ],
        examples: [
          { en: 'She wore a beautiful red dress.', note: 'opinion (beautiful) before colour (red)' },
          { en: 'The old wooden table is broken.', note: 'age (old) before material (wooden)' }
        ]
      },
      exerciseIds: ['p4s1_mc1','p4s1_mc2','p4s1_fill1','p4s1_fill2','p4s1_err1','p4s1_sort1']
    },
    {
      id: 'p4s2', phase: 'phase4', day: 2,
      title: 'Comparison: Comparative & Superlative',
      objectives: ['Form comparatives and superlatives', 'Use asas for equal comparison'],
      lesson: {
        explanation: 'We use <strong>comparative</strong> adjectives to compare two things, and <strong>superlative</strong> adjectives to compare one thing with all others in a group.',
        rules: [
          { icon: '', text: 'Short adjectives (1-2 syllables): add <strong>-er / -est</strong>' },
          { icon: '', text: 'Long adjectives (3+ syllables): use <strong>more / most</strong>' },
          { icon: '', text: 'Irregular: <em>good  better  best; bad  worse  worst; far  farther  farthest</em>' },
          { icon: '', text: 'Equal comparison: <em>as + adjective + as</em>  <em>She is as tall as her brother.</em>' }
        ],
        examples: [
          { en: 'Mount Everest is the highest mountain in the world.', note: 'superlative with "the"' },
          { en: 'This test is more difficult than the last one.', note: '"more" before 3-syllable adjective' },
          { en: 'She is as clever as her sister.', note: 'equal comparison' }
        ]
      },
      exerciseIds: ['p4s2_mc1','p4s2_mc2','p4s2_fill1','p4s2_fill2','p4s2_err1','p4s2_sort1']
    },
    {
      id: 'p4s3', phase: 'phase4', day: 3,
      title: 'Adverbs: Types & Formation',
      objectives: ['Form adverbs from adjectives', 'Use manner, frequency, and degree adverbs'],
      lesson: {
        explanation: '<strong>Adverbs</strong> modify verbs, adjectives, or other adverbs. They answer when, where, how, or how much.',
        rules: [
          { icon: '', text: 'Manner (how?): usually formed by adj + <strong>-ly</strong>: <em>quick  quickly</em>' },
          { icon: '', text: 'Frequency (how often?): <em>always, usually, often, sometimes, rarely, never</em>' },
          { icon: '', text: 'Place (where?): <em>here, there, outside, upstairs</em>' },
          { icon: '', text: 'Degree (how much?): <em>very, quite, extremely, rather, fairly, too</em>' },
          { icon: '', text: 'Some don\'t add -ly: <em>fast, hard, late, early, well</em> (NOT fastly!)' }
        ],
        examples: [
          { en: 'She sings beautifully.', note: '"beautifully" = manner adverb' },
          { en: 'I always brush my teeth before bed.', note: '"always" = frequency adverb, placed before main verb' },
          { en: 'He runs very fast.', note: '"very" (degree) + "fast" (no -ly!)' }
        ]
      },
      exerciseIds: ['p4s3_mc1','p4s3_mc2','p4s3_fill1','p4s3_fill2','p4s3_err1','p4s3_sort1']
    },
    {
      id: 'p4s4', phase: 'phase4', day: 4,
      title: 'Adverb Position in a Sentence',
      objectives: ['Place frequency adverbs correctly', 'Place manner adverbs correctly'],
      lesson: {
        explanation: 'Adverb position in English is important and can affect meaning. Different types of adverbs have different natural positions.',
        rules: [
          { icon: '', text: 'Frequency adverbs: before the main verb, after "be": <em>She often reads. He is never late.</em>' },
          { icon: '', text: 'Manner adverbs: usually after the verb/object: <em>She speaks English well.</em>' },
          { icon: '', text: 'Degree adverbs: directly before the word they modify: <em>He is quite tall.</em>' },
          { icon: '', text: 'Sentence adverbs: at the start: <em>Unfortunately, we missed the train.</em>' }
        ],
        examples: [
          { en: 'He never tells lies.', note: '"never" before main verb "tells"' },
          { en: 'She speaks French fluently.', note: '"fluently" after the object "French"' },
          { en: 'Luckily, no one was hurt.', note: 'sentence adverb at the start' }
        ]
      },
      exerciseIds: ['p4s4_mc1','p4s4_fill1','p4s4_fill2','p4s4_err1','p4s4_sort1','p4s4_write1']
    },
    {
      id: 'p4s5', phase: 'phase4', day: 5,
      title: 'Review & Quiz  Adjectives & Adverbs',
      objectives: ['Distinguish adjectives from adverbs', 'Use comparison forms correctly'],
      lesson: {
        explanation: 'Final review of adjectives and adverbs. Key distinction: adjectives describe nouns; adverbs modify verbs, adjectives, or other adverbs.',
        rules: [
          { icon: '', text: 'Adjective  describes a noun: <em>a fast car</em>' },
          { icon: '', text: 'Adverb  describes a verb: <em>He drives fast</em>' },
          { icon: '', text: 'Comparatives: -er/more; Superlatives: -est/most; Equal: asas' },
          { icon: '', text: 'Frequency adverbs before main verb, after "be"' }
        ],
        examples: [
          { en: 'She is a careful driver. She drives carefully.', note: 'careful (adj)  carefully (adv)' },
          { en: 'This is the most expensive restaurant in town.', note: 'superlative with "most" for long adjective' }
        ]
      },
      exerciseIds: ['p4s5_mc1','p4s5_mc2','p4s5_fill1','p4s5_fill2','p4s5_err1','p4s5_sort1','p4s5_write1']
    }
  ]
},

/* 
   PHASE 5  SENTENCE STRUCTURE & PREPOSITIONS
 */
{
  id: 'phase5', phase: 5,
  title: 'Sentence Structure',
  subtitle: 'Prepositions, conjunctions & clauses',
  icon: '',
  color: '#E94560',
  duration: '6 sessions',
  sessions: [
    {
      id: 'p5s1', phase: 'phase5', day: 1,
      title: 'Prepositions of Time, Place & Direction',
      objectives: ['Use at/in/on for time', 'Use at/in/on for place and direction prepositions'],
      lesson: {
        explanation: '<strong>Prepositions</strong> show the relationship between a noun/pronoun and other words. The most common prepositions are <em>at, in, on</em>.',
        rules: [
          { icon: '', text: 'Time: <strong>at</strong> (exact time): <em>at 9 o\'clock, at night, at noon</em>' },
          { icon: '', text: 'Time: <strong>in</strong> (months, years, seasons, parts of day): <em>in May, in 2023, in the morning</em>' },
          { icon: '', text: 'Time: <strong>on</strong> (days, dates): <em>on Monday, on 5th June, on my birthday</em>' },
          { icon: '', text: 'Place: <strong>at</strong> (specific point); <strong>in</strong> (inside area); <strong>on</strong> (surface)' }
        ],
        examples: [
          { en: 'I was born in April, on a Thursday, at 6 am.', note: 'in (month) / on (day) / at (exact time)' },
          { en: 'The cat is sitting on the mat, in the corner.', note: 'on (surface) / in (enclosed space)' }
        ]
      },
      exerciseIds: ['p5s1_mc1','p5s1_mc2','p5s1_fill1','p5s1_fill2','p5s1_err1','p5s1_sort1']
    },
    {
      id: 'p5s2', phase: 'phase5', day: 2,
      title: 'Coordinating Conjunctions (FANBOYS)',
      objectives: ['Use for, and, nor, but, or, yet, so', 'Join two independent clauses'],
      lesson: {
        explanation: '<strong>Coordinating conjunctions</strong> (FANBOYS: For, And, Nor, But, Or, Yet, So) join two independent clauses of equal importance.',
        rules: [
          { icon: '', text: '<strong>And</strong>  adds information: <em>I like tea and coffee.</em>' },
          { icon: '', text: '<strong>But</strong>  shows contrast: <em>She is smart but shy.</em>' },
          { icon: '', text: '<strong>Or</strong>  shows alternative: <em>You can have cake or ice cream.</em>' },
          { icon: '', text: '<strong>So</strong>  shows result: <em>It was raining, so we stayed inside.</em>' },
          { icon: '', text: '<strong>Yet / But</strong>  unexpected contrast: <em>He tried hard yet he failed.</em>' }
        ],
        examples: [
          { en: 'I was tired, but I finished the work.', note: '"but" for contrast between two clauses' },
          { en: 'She studied hard, so she passed the exam.', note: '"so" shows the result' }
        ]
      },
      exerciseIds: ['p5s2_mc1','p5s2_mc2','p5s2_fill1','p5s2_fill2','p5s2_err1','p5s2_sort1']
    },
    {
      id: 'p5s3', phase: 'phase5', day: 3,
      title: 'Subordinating Conjunctions',
      objectives: ['Use because, although, when, if, while, unless', 'Form complex sentences'],
      lesson: {
        explanation: '<strong>Subordinating conjunctions</strong> introduce a dependent clause and connect it to a main clause. The dependent clause cannot stand alone.',
        rules: [
          { icon: '', text: '<strong>Because</strong>  reason: <em>She left because she was tired.</em>' },
          { icon: '', text: '<strong>Although / Even though</strong>  contrast: <em>Although it rained, we had fun.</em>' },
          { icon: '', text: '<strong>When / Before / After</strong>  time: <em>When I woke up, it was snowing.</em>' },
          { icon: '', text: '<strong>If / Unless</strong>  condition: <em>If you study, you will pass.</em>' },
          { icon: '', text: 'When the dependent clause comes first, add a comma after it.' }
        ],
        examples: [
          { en: 'Although she was tired, she kept working.', note: '"Although" clause first  comma after' },
          { en: 'I will call you when I arrive.', note: '"when" clause after the main clause  no comma needed' }
        ]
      },
      exerciseIds: ['p5s3_mc1','p5s3_mc2','p5s3_fill1','p5s3_fill2','p5s3_err1','p5s3_sort1']
    },
    {
      id: 'p5s4', phase: 'phase5', day: 4,
      title: 'Relative Clauses',
      objectives: ['Use who, which, that, where, whose correctly', 'Distinguish defining from non-defining clauses'],
      lesson: {
        explanation: '<strong>Relative clauses</strong> give more information about a noun in the main clause. They begin with a relative pronoun.',
        rules: [
          { icon: '', text: '<strong>who</strong>  refers to people: <em>the girl who won the prize</em>' },
          { icon: '', text: '<strong>which</strong>  refers to things/animals: <em>the book which I borrowed</em>' },
          { icon: '', text: '<strong>that</strong>  refers to people or things (defining only): <em>the car that I drive</em>' },
          { icon: '', text: '<strong>where</strong>  refers to places: <em>the school where I studied</em>' },
          { icon: '', text: '<strong>whose</strong>  shows possession: <em>the boy whose bag was lost</em>' }
        ],
        examples: [
          { en: 'The woman who lives next door is a doctor.', note: '"who" for people in a defining clause' },
          { en: 'My brother, who is a pilot, travels a lot.', note: 'non-defining: commas + "who" (not "that")' }
        ]
      },
      exerciseIds: ['p5s4_mc1','p5s4_mc2','p5s4_fill1','p5s4_fill2','p5s4_err1','p5s4_sort1']
    },
    {
      id: 'p5s5', phase: 'phase5', day: 5,
      title: 'Modal Verbs',
      objectives: ['Use can/could/will/would/should/must/may/might', 'Express ability, permission, obligation, and possibility'],
      lesson: {
        explanation: '<strong>Modal verbs</strong> express ability, permission, obligation, advice, or possibility. They are followed by the base verb (no -s, no -ing).',
        rules: [
          { icon: '', text: 'Ability: <strong>can</strong> (present) / <strong>could</strong> (past): <em>I can swim. She could read at age 4.</em>' },
          { icon: '', text: 'Permission: <strong>can / may</strong>: <em>Can I sit here? You may leave now.</em>' },
          { icon: '', text: 'Obligation: <strong>must / have to</strong>: <em>You must wear a seatbelt.</em>' },
          { icon: '', text: 'Advice: <strong>should / ought to</strong>: <em>You should see a doctor.</em>' },
          { icon: '', text: 'Possibility: <strong>may / might / could</strong>: <em>It might rain later.</em>' }
        ],
        examples: [
          { en: 'You should apologise to her.', note: '"should" for advice' },
          { en: 'She might come to the party, but she is not sure.', note: '"might" for weak possibility' }
        ]
      },
      exerciseIds: ['p5s5_mc1','p5s5_mc2','p5s5_fill1','p5s5_fill2','p5s5_err1','p5s5_sort1']
    },
    {
      id: 'p5s6', phase: 'phase5', day: 6,
      title: 'Review & Quiz  Sentence Structure',
      objectives: ['Use prepositions, conjunctions, relative clauses, and modals'], 
      lesson: {
        explanation: 'Final review of Phase 5. You have learned about prepositions, coordinating and subordinating conjunctions, relative clauses, and modal verbs.',
        rules: [
          { icon: '', text: 'Prepositions of time: at / in / on' },
          { icon: '', text: 'FANBOYS: For And Nor But Or Yet So' },
          { icon: '', text: 'Subordinators: because, although, when, if, unless' },
          { icon: '', text: 'Relatives: who (people), which (things), where (places), whose (possessive)' },
          { icon: '', text: 'Modals: can/could, may/might, must/should/would' }
        ],
        examples: [
          { en: 'The student who studies every day will succeed.', note: 'relative clause + will (future)' },
          { en: 'Although it was cold, she went out without a coat.', note: 'subordinator for contrast' }
        ]
      },
      exerciseIds: ['p5s6_mc1','p5s6_mc2','p5s6_fill1','p5s6_fill2','p5s6_err1','p5s6_sort1','p5s6_write1']
    }
  ]
},

/* 
   PHASE 6  ADVANCED STRUCTURES
 */
{
  id: 'phase6', phase: 6,
  title: 'Advanced Structures',
  subtitle: 'Passive, Conditionals & Gerunds',
  icon: '',
  color: '#4ECDC4',
  duration: '6 sessions',
  sessions: [
    {
      id: 'p6s1', phase: 'phase6', day: 1,
      title: 'Passive Voice',
      objectives: ['Form passive voice', 'Know when to prefer passive over active'],
      lesson: {
        explanation: 'In <strong>Active</strong> sentences the subject performs the action. In <strong>Passive</strong> sentences the subject receives the action. We use passive when the doer is unknown, unimportant, or obvious.',
        rules: [
          { icon: '', text: 'Form: subject + <strong>be</strong> (correct tense) + <strong>past participle</strong>' },
          { icon: '', text: 'Present simple passive: <em>English is spoken here.</em>' },
          { icon: '', text: 'Past simple passive: <em>The window was broken.</em>' },
          { icon: '', text: 'The agent (doer) is introduced with <strong>by</strong>: <em>The letter was written by Tom.</em>' }
        ],
        examples: [
          { en: 'The cake was eaten by the children.', note: 'past passive; agent = by the children' },
          { en: 'The results will be announced tomorrow.', note: 'future passive; no agent mentioned' }
        ]
      },
      exerciseIds: ['p6s1_mc1','p6s1_mc2','p6s1_fill1','p6s1_fill2','p6s1_err1','p6s1_sort1']
    },
    {
      id: 'p6s2', phase: 'phase6', day: 2,
      title: 'Conditional Sentences (0 & 1)',
      objectives: ['Use zero conditional for facts', 'Use first conditional for real possibilities'],
      lesson: {
        explanation: '<strong>Conditional sentences</strong> talk about conditions and their results. Zero conditional states general truths; First conditional discusses real, likely situations.',
        rules: [
          { icon: '0', text: 'Zero conditional: <strong>if + present simple, present simple</strong>  general truth: <em>If you heat ice, it melts.</em>' },
          { icon: '1', text: 'First conditional: <strong>if + present simple, will + base verb</strong>  real/likely: <em>If it rains, we will cancel the trip.</em>' },
          { icon: '', text: 'The if-clause can come first or second. If first, add comma.' }
        ],
        examples: [
          { en: 'If you mix red and blue, you get purple.', note: 'zero conditional  always true' },
          { en: 'If she passes the exam, she will celebrate.', note: 'first conditional  likely future' }
        ]
      },
      exerciseIds: ['p6s2_mc1','p6s2_mc2','p6s2_fill1','p6s2_fill2','p6s2_err1','p6s2_sort1']
    },
    {
      id: 'p6s3', phase: 'phase6', day: 3,
      title: 'Conditional Sentences (2 & 3)',
      objectives: ['Use second conditional for imaginary situations', 'Use third conditional for past regrets'],
      lesson: {
        explanation: 'Second conditional imagines an unlikely or unreal present/future. Third conditional imagines how the past could have been different.',
        rules: [
          { icon: '2', text: 'Second conditional: <strong>if + past simple, would + base verb</strong>  imaginary: <em>If I were rich, I would travel the world.</em>' },
          { icon: '3', text: 'Third conditional: <strong>if + past perfect, would have + past participle</strong>  past regret: <em>If I had studied harder, I would have passed.</em>' },
          { icon: '', text: 'Use <strong>were</strong> (not was) for all persons in second conditional (formal): <em>If I were you</em>' }
        ],
        examples: [
          { en: 'If I were taller, I would play basketball.', note: 'second conditional  unreal present' },
          { en: 'If she had left earlier, she would not have missed the bus.', note: 'third conditional  past unreal' }
        ]
      },
      exerciseIds: ['p6s3_mc1','p6s3_mc2','p6s3_fill1','p6s3_fill2','p6s3_err1','p6s3_sort1']
    },
    {
      id: 'p6s4', phase: 'phase6', day: 4,
      title: 'Gerunds & Infinitives',
      objectives: ['Use verb + gerund vs verb + infinitive', 'Understand the difference in meaning'],
      lesson: {
        explanation: 'Some verbs are followed by a <strong>gerund</strong> (verb-ing), some by an <strong>infinitive</strong> (to + verb), and some by either.',
        rules: [
          { icon: '', text: 'Verb + gerund: <em>enjoy, finish, avoid, mind, keep, deny, suggest + -ing</em>' },
          { icon: '', text: 'Verb + infinitive: <em>want, hope, decide, plan, agree, refuse, manage + to + base</em>' },
          { icon: '', text: 'Both (same meaning): <em>begin, start, like, love, hate + gerund or infinitive</em>' },
          { icon: '', text: 'Both (different meaning): <em>remember/forget + gerund (past) vs infinitive (future)</em>' }
        ],
        examples: [
          { en: 'She enjoys swimming in the sea.', note: '"enjoy" + gerund only' },
          { en: 'He decided to leave early.', note: '"decide" + infinitive only' },
          { en: 'I forgot to lock the door.', note: '"forget + infinitive" = I didn\'t do something (future task)' }
        ]
      },
      exerciseIds: ['p6s4_mc1','p6s4_mc2','p6s4_fill1','p6s4_fill2','p6s4_err1','p6s4_sort1']
    },
    {
      id: 'p6s5', phase: 'phase6', day: 5,
      title: 'Reported Speech',
      objectives: ['Change direct speech to reported speech', 'Apply tense backshift rules'],
      lesson: {
        explanation: '<strong>Reported (indirect) speech</strong> tells us what someone said without using their exact words. Verbs usually shift back one tense.',
        rules: [
          { icon: '', text: 'Present Simple  Past Simple: <em>"I eat meat."  She said she ate meat.</em>' },
          { icon: '', text: 'Present Continuous  Past Continuous: <em>"I am working."  He said he was working.</em>' },
          { icon: '', text: 'Will  Would; Can  Could; May  Might' },
          { icon: '', text: 'Pronouns and time words also change: <em>now  then; today  that day; here  there</em>' }
        ],
        examples: [
          { en: '"I will call you," she said.  She said she would call me.', note: 'will  would; "you"  "me"' },
          { en: '"I am busy now," he said.  He said he was busy then.', note: 'am  was; now  then' }
        ]
      },
      exerciseIds: ['p6s5_mc1','p6s5_mc2','p6s5_fill1','p6s5_fill2','p6s5_err1','p6s5_sort1']
    },
    {
      id: 'p6s6', phase: 'phase6', day: 6,
      title: 'Final Review & Master Quiz',
      objectives: ['Combine all grammar topics', 'Achieve mastery of the full roadmap'],
      lesson: {
        explanation: 'Congratulations on reaching the final session! This comprehensive review covers all six phases of the grammar roadmap.',
        rules: [
          { icon: '', text: 'Phase 1: Nouns & Articles  common/proper, countable/uncountable, a/an/the' },
          { icon: '', text: 'Phase 2: Pronouns  personal, possessive, reflexive, demonstrative, indefinite' },
          { icon: '', text: 'Phase 3: Tenses  all 6 main tenses with their signal words' },
          { icon: '', text: 'Phase 4: Adjectives & Adverbs  comparison, position, formation' },
          { icon: '', text: 'Phase 5: Sentence Structure  prepositions, conjunctions, relative clauses, modals' },
          { icon: '', text: 'Phase 6: Advanced  passive, conditionals, gerunds/infinitives, reported speech' }
        ],
        examples: [
          { en: 'The book that she had been reading was finally published.', note: 'relative clause + past perfect + passive' },
          { en: 'If she had studied harder, she would have been accepted into the university.', note: '3rd conditional + passive infinitive' }
        ]
      },
      exerciseIds: ['p6s6_mc1','p6s6_mc2','p6s6_mc3','p6s6_fill1','p6s6_fill2','p6s6_err1','p6s6_sort1','p6s6_write1']
    }
  ]
}

]; // end ROADMAP

/* Helper: get total sessions */
const TOTAL_SESSIONS = ROADMAP.reduce((acc, p) => acc + p.sessions.length, 0);

/* Helper: flat session lookup */
const SESSION_MAP = {};
ROADMAP.forEach(phase => {
  phase.sessions.forEach(session => {
    SESSION_MAP[session.id] = { ...session, phaseData: phase };
  });
});
