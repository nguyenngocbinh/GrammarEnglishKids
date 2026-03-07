/* ================================================================
   Grammar English Kids  Exercises Data
   Keys match exerciseIds in roadmap-data.js
   Types: mc | fill | sort | err | write
================================================================ */

const EXERCISES = {

/* 
   PHASE 1 SESSION 1  Common & Proper Nouns
 */
p1s1_mc1: { id:'p1s1_mc1', type:'mc', topic:'nouns',
  question: 'Which word is a PROPER noun?',
  options: ['city','London','building','street'],
  answer: 'London', hint: 'Proper nouns name specific places and always start with a capital letter.' },

p1s1_mc2: { id:'p1s1_mc2', type:'mc', topic:'nouns',
  question: 'Which sentence uses a proper noun CORRECTLY?',
  options: ['I met my teacher today.','I met mrs green today.','I met Mrs Green today.','I met Mrs green today.'],
  answer: 'I met Mrs Green today.', hint: 'All parts of a person\'s title and name must be capitalised.' },

p1s1_fill1: { id:'p1s1_fill1', type:'fill', topic:'nouns',
  sentence: 'My favourite city is ___ . (the capital of France)',
  answer: 'Paris', hint: 'It is a specific place  a proper noun starting with P.' },

p1s1_fill2: { id:'p1s1_fill2', type:'fill', topic:'nouns',
  sentence: 'We have a new ___ at school. She teaches Maths. (general)',
  answer: 'teacher', hint: 'This is a general name for a person  a common noun.' },

p1s1_err1: { id:'p1s1_err1', type:'err', topic:'nouns',
  wrong: 'I want to visit france and spain next summer.',
  correct: 'I want to visit France and Spain next summer.',
  hint: 'Country names are proper nouns  they need capital letters.' },

p1s1_write1: { id:'p1s1_write1', type:'write', topic:'nouns',
  prompt: 'Write two sentences: one using a common noun and one using a proper noun for the same category (e.g. river / Amazon River).',
  example: 'A river runs through our town. The Amazon River is the widest river in the world.' },

/* 
   PHASE 1 SESSION 2  Countable & Uncountable
 */
p1s2_mc1: { id:'p1s2_mc1', type:'mc', topic:'nouns',
  question: 'Which sentence is CORRECT?',
  options: ['How many informations do you need?','How much information do you need?','How many information do you need?','How much informations do you need?'],
  answer: 'How much information do you need?', hint: '"Information" is uncountable  use "much" and no plural.' },

p1s2_mc2: { id:'p1s2_mc2', type:'mc', topic:'nouns',
  question: 'Which noun is UNCOUNTABLE?',
  options: ['book','idea','music','chair'],
  answer: 'music', hint: 'You cannot say "one music, two musics"  it is uncountable.' },

p1s2_fill1: { id:'p1s2_fill1', type:'fill', topic:'nouns',
  sentence: 'There are ___ students in our class. (many / much)',
  answer: 'many', hint: '"Students" is countable  use "many".' },

p1s2_fill2: { id:'p1s2_fill2', type:'fill', topic:'nouns',
  sentence: 'She doesn\'t have ___ time to finish the project. (many / much)',
  answer: 'much', hint: '"Time" is uncountable  use "much" in negatives.' },

p1s2_err1: { id:'p1s2_err1', type:'err', topic:'nouns',
  wrong: 'Can I have an advice from you?',
  correct: 'Can I have some advice from you?',
  hint: '"Advice" is uncountable  you cannot say "an advice". Use "some advice" or "a piece of advice".' },

p1s2_sort1: { id:'p1s2_sort1', type:'sort', topic:'nouns',
  words: ['We','need','a','lot','of','equipment','for','the','experiment','.'],
  answer: 'We need a lot of equipment for the experiment.', hint: '"A lot of" works with both countable and uncountable nouns.' },

/* 
   PHASE 1 SESSION 3  Articles
 */
p1s3_mc1: { id:'p1s3_mc1', type:'mc', topic:'articles',
  question: 'Choose the correct article: "___ honest person always tells the truth."',
  options: ['A','An','The','No article'],
  answer: 'An', hint: '"Honest" begins with a vowel sound (the h is silent)  use "an".' },

p1s3_mc2: { id:'p1s3_mc2', type:'mc', topic:'articles',
  question: 'Which is CORRECT?',
  options: ['She plays a piano.','She plays the piano.','She plays piano.','She plays an piano.'],
  answer: 'She plays the piano.', hint: 'Musical instruments are preceded by "the".' },

p1s3_fill1: { id:'p1s3_fill1', type:'fill', topic:'articles',
  sentence: 'I have ___ dog. ___ dog is very friendly.',
  answer: 'a / the', hint: 'First mention = "a" (indefinite); second mention = "the" (specific).' },

p1s3_fill2: { id:'p1s3_fill2', type:'fill', topic:'articles',
  sentence: '___ Nile is ___ longest river in Africa.',
  answer: 'The / the', hint: 'Use "the" for unique geographical features and superlatives.' },

p1s3_fill3: { id:'p1s3_fill3', type:'fill', topic:'articles',
  sentence: 'She is studying ___ medicine at university.',
  answer: 'no article', hint: 'No article before academic subjects used in general.' },

p1s3_err1: { id:'p1s3_err1', type:'err', topic:'articles',
  wrong: 'He wants to be a engineer when he grows up.',
  correct: 'He wants to be an engineer when he grows up.',
  hint: '"Engineer" begins with a vowel sound  "an".' },

/* 
   PHASE 1 SESSION 4  Plurals
 */
p1s4_mc1: { id:'p1s4_mc1', type:'mc', topic:'nouns',
  question: 'What is the CORRECT plural of "child"?',
  options: ['childs','childes','children','childrens'],
  answer: 'children', hint: '"child  children" is an irregular plural.' },

p1s4_fill1: { id:'p1s4_fill1', type:'fill', topic:'nouns',
  sentence: 'I have two ___ (tooth) that hurt.',
  answer: 'teeth', hint: '"tooth  teeth"  irregular plural (vowel change).' },

p1s4_fill2: { id:'p1s4_fill2', type:'fill', topic:'nouns',
  sentence: 'There are three ___ (mouse) in the shed.',
  answer: 'mice', hint: '"mouse  mice"  irregular plural.' },

p1s4_err1: { id:'p1s4_err1', type:'err', topic:'nouns',
  wrong: 'The sheeps are eating in the field.',
  correct: 'The sheep are eating in the field.',
  hint: '"sheep" has the same singular and plural form.' },

p1s4_sort1: { id:'p1s4_sort1', type:'sort', topic:'nouns',
  words: ['The','children','played','with','their','toy','boxes','.'],
  answer: 'The children played with their toy boxes.', hint: '"children" is the irregular plural of "child"; "boxes" uses -es plural.' },

p1s4_write1: { id:'p1s4_write1', type:'write', topic:'nouns',
  prompt: 'Write a sentence using at least one irregular plural noun (e.g. men, women, feet, teeth, mice, sheep, fish, geese).',
  example: 'The geese flew over the pond while the children watched from the bank.' },

/* 
   PHASE 1 SESSION 5  Review
 */
p1s5_mc1: { id:'p1s5_mc1', type:'mc', topic:'nouns',
  question: 'Choose the correct sentence:',
  options: ['I saw a interesting film.','I saw an interesting film.','I saw the interesting film.','I saw interesting film.'],
  answer: 'I saw an interesting film.', hint: '"Interesting" begins with a vowel sound  "an".' },

p1s5_mc2: { id:'p1s5_mc2', type:'mc', topic:'nouns',
  question: '"___  Sun rises in the east." Which article is correct?',
  options: ['A','An','The','No article'],
  answer: 'The', hint: '"The sun"  unique entity, there is only one.' },

p1s5_fill1: { id:'p1s5_fill1', type:'fill', topic:'nouns',
  sentence: 'She gave me ___ good advice. (a / some / any)',
  answer: 'some', hint: '"Advice" is uncountable  use "some" (positive sentence).' },

p1s5_fill2: { id:'p1s5_fill2', type:'fill', topic:'nouns',
  sentence: 'We saw two ___ (deer) in the forest.',
  answer: 'deer', hint: '"deer" has the same form in singular and plural.' },

p1s5_err1: { id:'p1s5_err1', type:'err', topic:'nouns',
  wrong: 'She is the best student in a class.',
  correct: 'She is the best student in the class.',
  hint: 'With superlatives ("the best") use "the" for the group  "the class".' },

p1s5_sort1: { id:'p1s5_sort1', type:'sort', topic:'nouns',
  words: ['An','elephant','is','the','largest','land','animal','.'],
  answer: 'An elephant is the largest land animal.', hint: '"an" before vowel sound; "the" before superlative.' },

p1s5_write1: { id:'p1s5_write1', type:'write', topic:'nouns',
  prompt: 'Write 3 sentences about things in your classroom or bedroom. Use a/an/the and at least one proper noun.',
  example: 'There is a desk near the window. My teacher, Mr Baker, gave us an exercise. The British flag is on the wall.' },

/* 
   PHASE 2 SESSION 1  Personal Pronouns
 */
p2s1_mc1: { id:'p2s1_mc1', type:'mc', topic:'pronouns',
  question: 'Choose the correct sentence:',
  options: ['Me and Tom went to school.','Tom and I went to school.','Tom and me went to school.','I and Tom went to school.'],
  answer: 'Tom and I went to school.', hint: '"I" is a subject pronoun. Use it when it is the subject. The other person goes first.' },

p2s1_mc2: { id:'p2s1_mc2', type:'mc', topic:'pronouns',
  question: '"She gave the letter to ___." Which pronoun is correct?',
  options: ['I','he','them','they'],
  answer: 'them', hint: 'After a preposition ("to") use an object pronoun: me, him, her, us, them.' },

p2s1_fill1: { id:'p2s1_fill1', type:'fill', topic:'pronouns',
  sentence: 'The teacher called ___ to her desk. (I / me)',
  answer: 'me', hint: '"Called" is a verb  after a verb use object pronoun "me".' },

p2s1_fill2: { id:'p2s1_fill2', type:'fill', topic:'pronouns',
  sentence: '___ is raining outside. (It / They)',
  answer: 'It', hint: 'For weather or time, use impersonal subject "It".' },

p2s1_err1: { id:'p2s1_err1', type:'err', topic:'pronouns',
  wrong: 'Between you and I, this is a secret.',
  correct: 'Between you and me, this is a secret.',
  hint: 'After prepositions like "between" always use object pronouns: me, him, her, us, them.' },

p2s1_write1: { id:'p2s1_write1', type:'write', topic:'pronouns',
  prompt: 'Write two sentences: one using a subject pronoun (I, he, she, they) and one using an object pronoun (me, him, her, them).',
  example: 'She called me this morning. I told him the good news.' },

/* 
   PHASE 2 SESSION 2  Possessive & Reflexive
 */
p2s2_mc1: { id:'p2s2_mc1', type:'mc', topic:'pronouns',
  question: 'Choose the correct sentence:',
  options: ['This bag is her.','This bag is hers.','This bag is she.','This bag is herself.'],
  answer: 'This bag is hers.', hint: 'Possessive pronoun standing alone (not before a noun): mine, yours, his, hers, ours, theirs.' },

p2s2_mc2: { id:'p2s2_mc2', type:'mc', topic:'pronouns',
  question: '"She hurt ___ while cooking." Which is correct?',
  options: ['her','she','herself','hers'],
  answer: 'herself', hint: 'The subject (she) did the action to herself  reflexive pronoun.' },

p2s2_fill1: { id:'p2s2_fill1', type:'fill', topic:'pronouns',
  sentence: 'The dog hurt ___ on the fence. (it / itself)',
  answer: 'itself', hint: 'Subject = the dog (it). It acted on itself  reflexive "itself".' },

p2s2_fill2: { id:'p2s2_fill2', type:'fill', topic:'pronouns',
  sentence: 'Is this your phone or ___? (his / him)',
  answer: 'his', hint: '"his" can be a possessive pronoun standing alone.' },

p2s2_err1: { id:'p2s2_err1', type:'err', topic:'pronouns',
  wrong: 'The children did the project by theirselves.',
  correct: 'The children did the project by themselves.',
  hint: '"Theirselves" does not exist. The correct reflexive is "themselves".' },

p2s2_sort1: { id:'p2s2_sort1', type:'sort', topic:'pronouns',
  words: ['He','taught','himself','to','play','the','guitar','.'],
  answer: 'He taught himself to play the guitar.', hint: 'Reflexive pronoun "himself"  he did it alone.' },

/* 
   PHASE 2 SESSION 3  Demonstrative & Indefinite
 */
p2s3_mc1: { id:'p2s3_mc1', type:'mc', topic:'pronouns',
  question: '"___ are my books over there." Which pronoun is correct?',
  options: ['This','That','These','Those'],
  answer: 'Those', hint: '"Over there" = far away; "books" = plural  "those".' },

p2s3_mc2: { id:'p2s3_mc2', type:'mc', topic:'pronouns',
  question: '"___ knows the answer." Which indefinite pronoun makes the sentence grammatically correct?',
  options: ['Everyone','All','Many','Some'],
  answer: 'Everyone', hint: '"Everyone" is singular  singular verb "knows". The others need plural context or special treatment.' },

p2s3_fill1: { id:'p2s3_fill1', type:'fill', topic:'pronouns',
  sentence: '___ at the party was wearing a costume. (Everyone / All)',
  answer: 'Everyone', hint: '"Everyone" = every single person; takes a singular verb.' },

p2s3_fill2: { id:'p2s3_fill2', type:'fill', topic:'pronouns',
  sentence: 'Is there ___ wrong? You look upset. (something / anything)',
  answer: 'something', hint: '"Something" is used in sensitive questions or when a positive answer is expected.' },

p2s3_err1: { id:'p2s3_err1', type:'err', topic:'pronouns',
  wrong: 'Nobody are allowed to enter the room.',
  correct: 'Nobody is allowed to enter the room.',
  hint: '"Nobody" is an indefinite pronoun that takes a singular verb: "is".' },

p2s3_write1: { id:'p2s3_write1', type:'write', topic:'pronouns',
  prompt: 'Write a short paragraph (2-3 sentences) about your class, using at least one demonstrative pronoun (this/that/these/those) and one indefinite pronoun (everyone/no one/something).',
  example: 'These are my classmates. Everyone works hard in our class. Something exciting is happening tomorrow!' },

/* 
   PHASE 2 SESSION 4  Pronouns Review
 */
p2s4_mc1: { id:'p2s4_mc1', type:'mc', topic:'pronouns',
  question: 'Which sentence is CORRECT?',
  options: ['He washed him.','He washed himself.','He washed his.','He washed he.'],
  answer: 'He washed himself.', hint: 'Subject = he, action on himself  reflexive "himself".' },

p2s4_mc2: { id:'p2s4_mc2', type:'mc', topic:'pronouns',
  question: '"Can you help ___ with this exercise?" (I / my / me / mine)',
  options: ['I','my','me','mine'],
  answer: 'me', hint: 'After a verb, use object pronoun "me".' },

p2s4_fill1: { id:'p2s4_fill1', type:'fill', topic:'pronouns',
  sentence: '___ is my sister Ana. (This / These)',
  answer: 'This', hint: '"This" for singular, near object.' },

p2s4_fill2: { id:'p2s4_fill2', type:'fill', topic:'pronouns',
  sentence: 'The prize is ___. She won it! (hers / her)',
  answer: 'hers', hint: 'Possessive pronoun standing alone (not before a noun): "hers".' },

p2s4_err1: { id:'p2s4_err1', type:'err', topic:'pronouns',
  wrong: 'Everybody have finished their work.',
  correct: 'Everybody has finished their work.',
  hint: '"Everybody" is singular  "has". (Note: "their" is accepted as singular gender-neutral).' },

p2s4_sort1: { id:'p2s4_sort1', type:'sort', topic:'pronouns',
  words: ['Nobody','told','me','about','the','meeting','.'],
  answer: 'Nobody told me about the meeting.', hint: '"Nobody" = indefinite pronoun (singular); "me" = object pronoun.' },

p2s4_write1: { id:'p2s4_write1', type:'write', topic:'pronouns',
  prompt: 'Write 3 sentences using different types of pronouns: one with a reflexive, one with a possessive, one with a demonstrative.',
  example: 'She painted that picture herself. That painting is hers. Those colours are amazing.' },

/* 
   PHASE 3 SESSION 1  Present Simple
 */
p3s1_mc1: { id:'p3s1_mc1', type:'mc', topic:'tenses',
  question: '"She ___ to work by bus every day."',
  options: ['go','goes','is going','went'],
  answer: 'goes', hint: 'Present Simple habit; she/he/it  add -s.' },

p3s1_mc2: { id:'p3s1_mc2', type:'mc', topic:'tenses',
  question: '"___ your brother like football?"',
  options: ['Do','Does','Is','Has'],
  answer: 'Does', hint: 'Present Simple question with "your brother" (3rd person singular)  "Does".' },

p3s1_fill1: { id:'p3s1_fill1', type:'fill', topic:'tenses',
  sentence: 'Water ___ (to freeze) at 0C.',
  answer: 'freezes', hint: 'Scientific fact  Present Simple; water (it)  freezes.' },

p3s1_fill2: { id:'p3s1_fill2', type:'fill', topic:'tenses',
  sentence: 'They ___ (not/eat) meat. They are vegetarians.',
  answer: 'do not eat', hint: 'Negative Present Simple: do not + base verb.' },

p3s1_err1: { id:'p3s1_err1', type:'err', topic:'tenses',
  wrong: 'My father work in a hospital.',
  correct: 'My father works in a hospital.',
  hint: '"My father" = he  Present Simple 3rd person singular: add -s.' },

p3s1_sort1: { id:'p3s1_sort1', type:'sort', topic:'tenses',
  words: ['The','sun','rises','in','the','east','every','morning','.'],
  answer: 'The sun rises in the east every morning.', hint: 'Fact  Present Simple; "sun" (it)  "rises".' },

/* 
   PHASE 3 SESSION 2  Present Continuous
 */
p3s2_mc1: { id:'p3s2_mc1', type:'mc', topic:'tenses',
  question: '"Look! The cat ___ up the tree."',
  options: ['climbs','climbed','is climbing','was climbing'],
  answer: 'is climbing', hint: '"Look!" signals something happening right now  Present Continuous.' },

p3s2_mc2: { id:'p3s2_mc2', type:'mc', topic:'tenses',
  question: 'Which sentence uses Present Continuous CORRECTLY?',
  options: ['She is knowing the answer.','She is liking fish.','She is studying for her exam now.','She is wanting a new phone.'],
  answer: 'She is studying for her exam now.', hint: 'Know, like, want are state verbs  they do not normally use continuous form.' },

p3s2_fill1: { id:'p3s2_fill1', type:'fill', topic:'tenses',
  sentence: 'Be quiet! I ___ (to watch) my favourite programme.',
  answer: 'am watching', hint: 'Action happening now  Present Continuous: am/is/are + -ing.' },

p3s2_fill2: { id:'p3s2_fill2', type:'fill', topic:'tenses',
  sentence: 'Why ___ you ___ (to cry)?',
  answer: 'are / crying', hint: 'Present Continuous question: Why are you crying?' },

p3s2_err1: { id:'p3s2_err1', type:'err', topic:'tenses',
  wrong: 'She is go to the market at the moment.',
  correct: 'She is going to the market at the moment.',
  hint: 'Present Continuous = is/am/are + verb-ing. "go"  "going".' },

p3s2_sort1: { id:'p3s2_sort1', type:'sort', topic:'tenses',
  words: ['They','are','building','a','new','bridge','in','the','city','.'],
  answer: 'They are building a new bridge in the city.', hint: 'Present Continuous: are + building (temporary action).' },

/* 
   PHASE 3 SESSION 3  Past Simple
 */
p3s3_mc1: { id:'p3s3_mc1', type:'mc', topic:'tenses',
  question: '"She ___ the prize at the competition last year."',
  options: ['win','wins','won','has won'],
  answer: 'won', hint: '"Last year" = specific past time  Past Simple. "win"  irregular past "won".' },

p3s3_mc2: { id:'p3s3_mc2', type:'mc', topic:'tenses',
  question: '"___ you finish the report yesterday?"',
  options: ['Do','Did','Have','Were'],
  answer: 'Did', hint: 'Past Simple question: Did + subject + base verb.' },

p3s3_fill1: { id:'p3s3_fill1', type:'fill', topic:'tenses',
  sentence: 'The children ___ (to play) in the park all afternoon yesterday.',
  answer: 'played', hint: 'Regular verb in Past Simple: play  played.' },

p3s3_fill2: { id:'p3s3_fill2', type:'fill', topic:'tenses',
  sentence: 'I ___ (not/see) that film. (Past Simple negative)',
  answer: 'did not see', hint: 'Past Simple negative: did not + base verb (NOT "did not saw").' },

p3s3_err1: { id:'p3s3_err1', type:'err', topic:'tenses',
  wrong: 'She goed to the cinema last Saturday.',
  correct: 'She went to the cinema last Saturday.',
  hint: '"go" is irregular: go  went (Past Simple).' },

p3s3_sort1: { id:'p3s3_sort1', type:'sort', topic:'tenses',
  words: ['He','did','not','come','to','school','yesterday','.'],
  answer: 'He did not come to school yesterday.', hint: 'Past Simple negative: did not + base verb.' },

/* 
   PHASE 3 SESSION 4  Past Continuous
 */
p3s4_mc1: { id:'p3s4_mc1', type:'mc', topic:'tenses',
  question: '"I ___ when you called me."',
  options: ['slept','was sleeping','am sleeping','have slept'],
  answer: 'was sleeping', hint: 'Action in progress when interrupted  Past Continuous: was + sleeping.' },

p3s4_mc2: { id:'p3s4_mc2', type:'mc', topic:'tenses',
  question: '"While they ___, the teacher came in."',
  options: ['talk','talked','were talking','have talked'],
  answer: 'were talking', hint: '"While" + ongoing action  Past Continuous: were + verb-ing.' },

p3s4_fill1: { id:'p3s4_fill1', type:'fill', topic:'tenses',
  sentence: 'At 8 pm last night, she ___ (to cook) dinner.',
  answer: 'was cooking', hint: 'Ongoing action at a specific past time  Past Continuous.' },

p3s4_fill2: { id:'p3s4_fill2', type:'fill', topic:'tenses',
  sentence: 'It ___ (to rain) when I left the house.',
  answer: 'was raining', hint: 'Past Continuous: was + raining (ongoing) interrupted by Past Simple (left).' },

p3s4_err1: { id:'p3s4_err1', type:'err', topic:'tenses',
  wrong: 'While I was walk to school, I saw an accident.',
  correct: 'While I was walking to school, I saw an accident.',
  hint: 'Past Continuous = was/were + verb-ing. "walk"  "walking".' },

p3s4_sort1: { id:'p3s4_sort1', type:'sort', topic:'tenses',
  words: ['He','was','reading','a','book','when','the','lights','went','out','.'],
  answer: 'He was reading a book when the lights went out.', hint: 'Past Continuous (was reading) interrupted by Past Simple (went out).' },

/* 
   PHASE 3 SESSION 5  Future
 */
p3s5_mc1: { id:'p3s5_mc1', type:'mc', topic:'tenses',
  question: 'Which sentence shows a PLANNED intention?',
  options: ['I will answer the phone.','She is going to study medicine.','I think it will snow.','He will probably be late.'],
  answer: 'She is going to study medicine.', hint: 'A plan decided before speaking  "going to".' },

p3s5_mc2: { id:'p3s5_mc2', type:'mc', topic:'tenses',
  question: '"Look at those dark clouds! It ___ rain."',
  options: ['will','is going to','was going to','would'],
  answer: 'is going to', hint: 'Evidence-based prediction (we can see the clouds)  "going to".' },

p3s5_fill1: { id:'p3s5_fill1', type:'fill', topic:'tenses',
  sentence: 'A: "The phone is ringing!" B: "I ___ get it." (will / going to)',
  answer: 'will', hint: 'Spontaneous decision made at the moment of speaking  "will".' },

p3s5_fill2: { id:'p3s5_fill2', type:'fill', topic:'tenses',
  sentence: 'They ___ (going to) move to Canada next year. They have already bought their tickets.',
  answer: 'are going to', hint: 'Already planned  "going to". "They" = are.' },

p3s5_err1: { id:'p3s5_err1', type:'err', topic:'tenses',
  wrong: 'She is going to visits her grandparents tomorrow.',
  correct: 'She is going to visit her grandparents tomorrow.',
  hint: '"Going to" is followed by the BASE VERB (no -s, no -ing).' },

p3s5_sort1: { id:'p3s5_sort1', type:'sort', topic:'tenses',
  words: ['I','think','it','will','be','a','sunny','day','tomorrow','.'],
  answer: 'I think it will be a sunny day tomorrow.', hint: '"I think" signals an opinion/prediction  "will".' },

/* 
   PHASE 3 SESSION 6  Present Perfect
 */
p3s6_mc1: { id:'p3s6_mc1', type:'mc', topic:'tenses',
  question: '"___ you ever ___ to Japan?"',
  options: ['Did / went','Have / been','Have / went','Did / been'],
  answer: 'Have / been', hint: 'Life experience question  Present Perfect: Have you ever been?' },

p3s6_mc2: { id:'p3s6_mc2', type:'mc', topic:'tenses',
  question: '"She ___ just ___ her homework."',
  options: ['did / finished','has / finished','was / finishing','had / finish'],
  answer: 'has / finished', hint: '"Just" = very recently  Present Perfect: has + past participle.' },

p3s6_fill1: { id:'p3s6_fill1', type:'fill', topic:'tenses',
  sentence: 'I ___ (to know) her ___ three years. (Present Perfect + for/since)',
  answer: 'have known / for', hint: 'State that started in the past and continues  Present Perfect + "for" (duration).' },

p3s6_fill2: { id:'p3s6_fill2', type:'fill', topic:'tenses',
  sentence: 'We haven\'t seen that film ___. (yet / already)',
  answer: 'yet', hint: '"Yet" is used in negatives and questions to talk about something expected.' },

p3s6_err1: { id:'p3s6_err1', type:'err', topic:'tenses',
  wrong: 'She has went to the shop and bought bread.',
  correct: 'She has gone to the shop and bought bread.',
  hint: '"go"  irregular past participle "gone" (not "went"). "went" is Past Simple.' },

p3s6_sort1: { id:'p3s6_sort1', type:'sort', topic:'tenses',
  words: ['He','has','already','eaten','his','lunch','.'],
  answer: 'He has already eaten his lunch.', hint: '"Already" + Present Perfect: has + past participle eaten.' },

/* 
   PHASE 3 SESSION 7  Tenses Review
 */
p3s7_mc1: { id:'p3s7_mc1', type:'mc', topic:'tenses',
  question: '"I ___ my keys. I can\'t find them anywhere."',
  options: ['lose','lost','have lost','was losing'],
  answer: 'have lost', hint: 'Recent event with present result  Present Perfect.' },

p3s7_mc2: { id:'p3s7_mc2', type:'mc', topic:'tenses',
  question: '"___ you at home when the storm started?"',
  options: ['Were','Did','Have','Are'],
  answer: 'Were', hint: 'Past state question  Past Simple of "be": were.' },

p3s7_mc3: { id:'p3s7_mc3', type:'mc', topic:'tenses',
  question: '"She ___ in Paris for 10 years before moving to London."',
  options: ['lives','is living','was living','lived'],
  answer: 'lived', hint: 'Completed past period of time  Past Simple.' },

p3s7_fill1: { id:'p3s7_fill1', type:'fill', topic:'tenses',
  sentence: 'He ___ (to read) a book when she ___ (to call) him.',
  answer: 'was reading / called', hint: 'Past Continuous for ongoing action + Past Simple for the interruption.' },

p3s7_fill2: { id:'p3s7_fill2', type:'fill', topic:'tenses',
  sentence: 'Every day she ___ (to wake up) at 7 and ___ (to go) for a run.',
  answer: 'wakes up / goes', hint: 'Daily routine  Present Simple.' },

p3s7_err1: { id:'p3s7_err1', type:'err', topic:'tenses',
  wrong: 'By the time I arrived, he already left.',
  correct: 'By the time I arrived, he had already left.',
  hint: '"By the time" shows one past event happened BEFORE another  Past Perfect: had + past participle.' },

p3s7_sort1: { id:'p3s7_sort1', type:'sort', topic:'tenses',
  words: ['She','has','been','studying','English','since','she','was','six','.'],
  answer: 'She has been studying English since she was six.', hint: 'Present Perfect Continuous: has been + -ing; "since" for a starting point.' },

p3s7_write1: { id:'p3s7_write1', type:'write', topic:'tenses',
  prompt: 'Write a short paragraph about your last holiday or a memorable day. Use at least 3 different tenses.',
  example: 'Last summer, I went to the beach with my family. We were swimming when a dolphin appeared. It was the most exciting thing I have ever seen!' },

/* 
   PHASE 4 SESSION 1  Adjectives
 */
p4s1_mc1: { id:'p4s1_mc1', type:'mc', topic:'adjectives',
  question: 'Which order is CORRECT?',
  options: ['a red small bag','a small red bag','a red small bag','a bag small red'],
  answer: 'a small red bag', hint: 'Adjective order: size before colour.' },

p4s1_mc2: { id:'p4s1_mc2', type:'mc', topic:'adjectives',
  question: '"The food ___ delicious." Which word completes it correctly?',
  options: ['taste','tastes','tasted','is'],
  answer: 'is', hint: 'After a linking verb (is, seem, look, feel) use a predicative adjective.' },

p4s1_fill1: { id:'p4s1_fill1', type:'fill', topic:'adjectives',
  sentence: 'She bought a ___ (Italian / small / beautiful) old painting. (correct order)',
  answer: 'beautiful small old Italian', hint: 'Opinion  Size  Age  Origin: beautiful small old Italian.' },

p4s1_fill2: { id:'p4s1_fill2', type:'fill', topic:'adjectives',
  sentence: 'He looks very ___. He should see a doctor. (tired / tiredly)',
  answer: 'tired', hint: 'After "looks" (linking verb) use an adjective, not an adverb.' },

p4s1_err1: { id:'p4s1_err1', type:'err', topic:'adjectives',
  wrong: 'She wore an red and white dress.',
  correct: 'She wore a red and white dress.',
  hint: '"red" starts with a consonant sound  "a", not "an".' },

p4s1_sort1: { id:'p4s1_sort1', type:'sort', topic:'adjectives',
  words: ['He','bought','two','lovely','little','silver','rings','.'],
  answer: 'He bought two lovely little silver rings.', hint: 'Number  Opinion  Size  Material  Noun.' },

/* 
   PHASE 4 SESSION 2  Comparison
 */
p4s2_mc1: { id:'p4s2_mc1', type:'mc', topic:'adjectives',
  question: '"Mount Everest is ___ mountain in the world."',
  options: ['the higher','the highest','higher','more high'],
  answer: 'the highest', hint: 'Superlative of "high" (short adjective): the + highest.' },

p4s2_mc2: { id:'p4s2_mc2', type:'mc', topic:'adjectives',
  question: '"This exam was ___ than the last one."',
  options: ['more difficult','difficulter','most difficult','the more difficult'],
  answer: 'more difficult', hint: '"Difficult" has 3 syllables  comparative with "more".' },

p4s2_fill1: { id:'p4s2_fill1', type:'fill', topic:'adjectives',
  sentence: 'She is not as ___ (tall) as her sister.',
  answer: 'tall', hint: 'Equal/unequal comparison: as + adjective (base form) + as.' },

p4s2_fill2: { id:'p4s2_fill2', type:'fill', topic:'adjectives',
  sentence: 'This summer is ___ (hot) than last year.',
  answer: 'hotter', hint: '"hot" (short adjective, double final consonant): hot  hotter.' },

p4s2_err1: { id:'p4s2_err1', type:'err', topic:'adjectives',
  wrong: 'He is the most tallest student in the class.',
  correct: 'He is the tallest student in the class.',
  hint: 'Do NOT use "most" with -est form. Just "the tallest".' },

p4s2_sort1: { id:'p4s2_sort1', type:'sort', topic:'adjectives',
  words: ['That','is','the','most','beautiful','sunset','I','have','ever','seen','.'],
  answer: 'That is the most beautiful sunset I have ever seen.', hint: 'Superlative (most beautiful) + present perfect (have ever seen).' },

/* 
   PHASE 4 SESSION 3  Adverbs
 */
p4s3_mc1: { id:'p4s3_mc1', type:'mc', topic:'adverbs',
  question: '"She dances ___." Which adverb is formed CORRECTLY?',
  options: ['beautiful','beautifully','beautifull','beautifully'],
  answer: 'beautifully', hint: 'beautiful  beautifully (change y to i, add -ly).' },

p4s3_mc2: { id:'p4s3_mc2', type:'mc', topic:'adverbs',
  question: '"He drives very ___. He never has accidents."',
  options: ['careful','carefully','more careful','caring'],
  answer: 'carefully', hint: 'Manner adverb: careful (adjective)  carefully (adverb).' },

p4s3_fill1: { id:'p4s3_fill1', type:'fill', topic:'adverbs',
  sentence: 'She works very ___ every day. (hard / hardly)',
  answer: 'hard', hint: '"Hard" = with great effort (adverb). "Hardly" = almost not (different meaning!).' },

p4s3_fill2: { id:'p4s3_fill2', type:'fill', topic:'adverbs',
  sentence: 'He is ___ tired. He needs a rest. (quite / quiet)',
  answer: 'quite', hint: '"Quite" is a degree adverb (= rather). "Quiet" is an adjective meaning silent.' },

p4s3_err1: { id:'p4s3_err1', type:'err', topic:'adverbs',
  wrong: 'She speaks French very good.',
  correct: 'She speaks French very well.', 
  hint: '"Good" is an adjective. The adverb form of "good" is "well".' },

p4s3_sort1: { id:'p4s3_sort1', type:'sort', topic:'adverbs',
  words: ['He','spoke','very','loudly','at','the','meeting','.'],
  answer: 'He spoke very loudly at the meeting.', hint: '"Very" (degree) modifies "loudly" (manner adverb).' },

/* 
   PHASE 4 SESSION 4  Adverb Position
 */
p4s4_mc1: { id:'p4s4_mc1', type:'mc', topic:'adverbs',
  question: 'Where does "often" go in: "She goes to the gym."?',
  options: ['She often goes to the gym.','She goes often to the gym.','Often she goes to the gym.','She goes to the gym often.'],
  answer: 'She often goes to the gym.', hint: 'Frequency adverbs go before the main verb (but after "be").' },

p4s4_fill1: { id:'p4s4_fill1', type:'fill', topic:'adverbs',
  sentence: 'He ___ is late. (never)  place the adverb correctly',
  answer: 'He is never late.', hint: '"Never" goes after the verb "be".' },

p4s4_fill2: { id:'p4s4_fill2', type:'fill', topic:'adverbs',
  sentence: '___, we managed to find the hotel. (Finally)',
  answer: 'Finally, we managed to find the hotel.', hint: 'Sentence adverbs can go at the beginning, followed by a comma.' },

p4s4_err1: { id:'p4s4_err1', type:'err', topic:'adverbs',
  wrong: 'She plays the piano well very.',
  correct: 'She plays the piano very well.', 
  hint: 'Degree adverb "very" must come directly before the adverb it modifies: very well.' },

p4s4_sort1: { id:'p4s4_sort1', type:'sort', topic:'adverbs',
  words: ['Fortunately',',','nobody','was','hurt','in','the','accident','.'],
  answer: 'Fortunately, nobody was hurt in the accident.', hint: 'Sentence adverb "Fortunately" comes first, followed by a comma.' },

p4s4_write1: { id:'p4s4_write1', type:'write', topic:'adverbs',
  prompt: 'Write 3 sentences about your daily routine using frequency adverbs (always, usually, often, sometimes, rarely, never).',
  example: 'I always wake up at 7 am. I usually have breakfast with my family. I sometimes walk to school.' },

/* 
   PHASE 4 SESSION 5  Adj & Adv Review
 */
p4s5_mc1: { id:'p4s5_mc1', type:'mc', topic:'adjectives',
  question: '"She is a ___ (careful) worker." Which form?',
  options: ['carefully','careful','more careful','carefulness'],
  answer: 'careful', hint: 'Before a noun  adjective form: a careful worker.' },

p4s5_mc2: { id:'p4s5_mc2', type:'mc', topic:'adjectives',
  question: '"This is the ___ (good) coffee I have ever had."',
  options: ['gooder','goodest','better','best'],
  answer: 'best', hint: 'Irregular superlative: good  better  best.' },

p4s5_fill1: { id:'p4s5_fill1', type:'fill', topic:'adjectives',
  sentence: 'She is a ___ driver. She drives ___. (careful / carefully)',
  answer: 'careful / carefully', hint: 'Before noun = adjective; after verb = adverb.' },

p4s5_fill2: { id:'p4s5_fill2', type:'fill', topic:'adjectives',
  sentence: 'My bag is twice as ___ (heavy) as yours.',
  answer: 'heavy', hint: 'Equal/proportional comparison: as + adjective (base form) + as.' },

p4s5_err1: { id:'p4s5_err1', type:'err', topic:'adjectives',
  wrong: 'He answered the question correct.',
  correct: 'He answered the question correctly.', 
  hint: '"Answered" is a verb  use adverb "correctly", not adjective "correct".' },

p4s5_sort1: { id:'p4s5_sort1', type:'sort', topic:'adjectives',
  words: ['She','always','performs','extremely','well','on','stage','.'],
  answer: 'She always performs extremely well on stage.', hint: '"always" before main verb; "extremely well" = degree + adverb.' },

p4s5_write1: { id:'p4s5_write1', type:'write', topic:'adjectives',
  prompt: 'Compare two things you know (e.g. two sports, two books, two cities). Use comparative and superlative forms.',
  example: 'Swimming is less expensive than tennis, but tennis is more exciting. Football is the most popular sport in my country.' },

/* 
   PHASE 5 SESSION 1  Prepositions
 */
p5s1_mc1: { id:'p5s1_mc1', type:'mc', topic:'prepositions',
  question: '"I was born ___ July."',
  options: ['at','in','on','by'],
  answer: 'in', hint: '"In" is used with months.' },

p5s1_mc2: { id:'p5s1_mc2', type:'mc', topic:'prepositions',
  question: '"The meeting is ___ Friday ___ 9 am."',
  options: ['on / at','in / at','at / on','on / in'],
  answer: 'on / at', hint: '"On" for days; "at" for exact times.' },

p5s1_fill1: { id:'p5s1_fill1', type:'fill', topic:'prepositions',
  sentence: 'She was waiting ___ the bus stop ___ a long time.',
  answer: 'at / for', hint: '"at" for a specific point; "for" expresses duration.' },

p5s1_fill2: { id:'p5s1_fill2', type:'fill', topic:'prepositions',
  sentence: 'The book is ___ the table, ___ the lamp.',
  answer: 'on / next to', hint: '"on" for surface; "next to" = beside.' },

p5s1_err1: { id:'p5s1_err1', type:'err', topic:'prepositions',
  wrong: 'She arrived at Monday morning.',
  correct: 'She arrived on Monday morning.',
  hint: '"On" for days (and parts of specific days like Monday morning).' },

p5s1_sort1: { id:'p5s1_sort1', type:'sort', topic:'prepositions',
  words: ['The','cat','sat','under','the','tree','in','the','garden','.'],
  answer: 'The cat sat under the tree in the garden.', hint: '"under" (position below); "in" (inside an area).' },

/* 
   PHASE 5 SESSION 2  Coordinating Conjunctions
 */
p5s2_mc1: { id:'p5s2_mc1', type:'mc', topic:'conjunctions',
  question: '"I wanted to go, ___ I was too tired."',
  options: ['and','so','but','or'],
  answer: 'but', hint: '"but" shows contrast between two ideas.' },

p5s2_mc2: { id:'p5s2_mc2', type:'mc', topic:'conjunctions',
  question: '"It was raining, ___ we decided to stay home."',
  options: ['but','or','so','nor'],
  answer: 'so', hint: '"so" shows that the second clause is the result of the first.' },

p5s2_fill1: { id:'p5s2_fill1', type:'fill', topic:'conjunctions',
  sentence: 'She is talented ___ works very hard.',
  answer: 'and', hint: '"and" adds information  both are positive qualities.' },

p5s2_fill2: { id:'p5s2_fill2', type:'fill', topic:'conjunctions',
  sentence: 'He studied hard ___ failed the exam. (contrast)',
  answer: 'yet', hint: '"yet" (or "but") shows a surprising contrast.' },

p5s2_err1: { id:'p5s2_err1', type:'err', topic:'conjunctions',
  wrong: 'She is not only clever, but also she is kind.',
  correct: 'She is not only clever but also kind.',
  hint: '"Not only  but also" is a correlative pair; both parts should have parallel structure.' },

p5s2_sort1: { id:'p5s2_sort1', type:'sort', topic:'conjunctions',
  words: ['She','was','tired',',','so','she','went','to','bed','early','.'],
  answer: 'She was tired, so she went to bed early.', hint: '"so" = result. A comma before "so" when joining two clauses.' },

/* 
   PHASE 5 SESSION 3  Subordinating Conjunctions
 */
p5s3_mc1: { id:'p5s3_mc1', type:'mc', topic:'conjunctions',
  question: '"___ she was ill, she went to work."',
  options: ['Because','Although','If','Since'],
  answer: 'Although', hint: '"Although" introduces contrast  she went to work DESPITE being ill.' },

p5s3_mc2: { id:'p5s3_mc2', type:'mc', topic:'conjunctions',
  question: '"You will get wet ___ you take an umbrella." (condition)',
  options: ['if','unless','although','because'],
  answer: 'unless', hint: '"unless" = if not. You will get wet if you do NOT take an umbrella.' },

p5s3_fill1: { id:'p5s3_fill1', type:'fill', topic:'conjunctions',
  sentence: 'I couldn\'t sleep ___ I was too excited.',
  answer: 'because', hint: '"because" introduces the reason.' },

p5s3_fill2: { id:'p5s3_fill2', type:'fill', topic:'conjunctions',
  sentence: '___ you arrive first, please save me a seat.',
  answer: 'If', hint: '"If" introduces a condition (it may or may not happen).' },

p5s3_err1: { id:'p5s3_err1', type:'err', topic:'conjunctions',
  wrong: 'Although she worked hard but she did not pass.',
  correct: 'Although she worked hard, she did not pass.',
  hint: 'Do NOT use "although" and "but" together. Use one or the other.' },

p5s3_sort1: { id:'p5s3_sort1', type:'sort', topic:'conjunctions',
  words: ['Because','it','was','late',',','we','decided','to','take','a','taxi','.'],
  answer: 'Because it was late, we decided to take a taxi.', hint: 'Subordinate clause first  comma before the main clause.' },

/* 
   PHASE 5 SESSION 4  Relative Clauses
 */
p5s4_mc1: { id:'p5s4_mc1', type:'mc', topic:'relatives',
  question: '"The man ___ won the race was exhausted."',
  options: ['which','who','whom','where'],
  answer: 'who', hint: '"who" refers to people as the subject of the relative clause.' },

p5s4_mc2: { id:'p5s4_mc2', type:'mc', topic:'relatives',
  question: '"London is the city ___ I was born."',
  options: ['which','who','that','where'],
  answer: 'where', hint: '"where" refers to a place.' },

p5s4_fill1: { id:'p5s4_fill1', type:'fill', topic:'relatives',
  sentence: 'She is the student ___ essay won first prize.',
  answer: 'whose', hint: '"whose" shows possession  the essay belongs to the student.' },

p5s4_fill2: { id:'p5s4_fill2', type:'fill', topic:'relatives',
  sentence: 'The film ___ we watched last night was brilliant.',
  answer: 'that / which', hint: '"that" or "which" for things in a defining relative clause.' },

p5s4_err1: { id:'p5s4_err1', type:'err', topic:'relatives',
  wrong: 'My mother, that is a nurse, works nights.',
  correct: 'My mother, who is a nurse, works nights.',
  hint: 'In non-defining clauses (with commas) use "who" for people, NOT "that".' },

p5s4_sort1: { id:'p5s4_sort1', type:'sort', topic:'relatives',
  words: ['The','school','where','I','studied','is','now','a','museum','.'],
  answer: 'The school where I studied is now a museum.', hint: '"where" for a place in a relative clause.' },

/* 
   PHASE 5 SESSION 5  Modal Verbs
 */
p5s5_mc1: { id:'p5s5_mc1', type:'mc', topic:'modals',
  question: '"You ___ wear a seatbelt. It\'s the law."',
  options: ['should','might','must','could'],
  answer: 'must', hint: '"must" expresses strong obligation or necessity (rules/laws).' },

p5s5_mc2: { id:'p5s5_mc2', type:'mc', topic:'modals',
  question: '"___ I open the window? It\'s very hot in here."',
  options: ['Must','Should','Could','Shall'],
  answer: 'Could', hint: '"Could I?" is a polite way to ask for permission.' },

p5s5_fill1: { id:'p5s5_fill1', type:'fill', topic:'modals',
  sentence: 'She ___ play chess when she was five. (ability in the past)',
  answer: 'could', hint: '"could" = past ability.' },

p5s5_fill2: { id:'p5s5_fill2', type:'fill', topic:'modals',
  sentence: 'It ___ rain tomorrow  the forecast is uncertain.',
  answer: 'might', hint: '"might" expresses weak possibility.' },

p5s5_err1: { id:'p5s5_err1', type:'err', topic:'modals',
  wrong: 'You should to see a doctor immediately.',
  correct: 'You should see a doctor immediately.',
  hint: 'Modal verbs (should, must, can, etc.) are followed by the BASE VERB without "to".' },

p5s5_sort1: { id:'p5s5_sort1', type:'sort', topic:'modals',
  words: ['You','should','always','look','both','ways','before','crossing','the','road','.'],
  answer: 'You should always look both ways before crossing the road.', hint: '"should" for advice + "always" (frequency adverb) before main verb.' },

/* 
   PHASE 5 SESSION 6  Structure Review
 */
p5s6_mc1: { id:'p5s6_mc1', type:'mc', topic:'structure',
  question: '"The book ___ I borrowed was very interesting."',
  options: ['who','which','where','whose'],
  answer: 'which', hint: '"which" refers to a thing (book) in a defining relative clause.' },

p5s6_mc2: { id:'p5s6_mc2', type:'mc', topic:'structure',
  question: '"___ you finish early, please wait for the others."',
  options: ['Although','Because','If','While'],
  answer: 'If', hint: '"If" introduces a condition.' },

p5s6_fill1: { id:'p5s6_fill1', type:'fill', topic:'structure',
  sentence: 'The meeting is ___ Thursday ___ 3 pm.',
  answer: 'on / at', hint: '"on" for days; "at" for specific times.' },

p5s6_fill2: { id:'p5s6_fill2', type:'fill', topic:'structure',
  sentence: 'She was tired, ___ she stopped working (result).',
  answer: 'so', hint: '"so" shows result.' },

p5s6_err1: { id:'p5s6_err1', type:'err', topic:'structure',
  wrong: 'Although he was hungry but he refused to eat.',
  correct: 'Although he was hungry, he refused to eat.',
  hint: 'Do not use "although" + "but" together. Remove "but".' },

p5s6_sort1: { id:'p5s6_sort1', type:'sort', topic:'structure',
  words: ['The','woman','who','lives','next','door','is','a','doctor','.'],
  answer: 'The woman who lives next door is a doctor.', hint: '"who" relative clause to define "the woman".' },

p5s6_write1: { id:'p5s6_write1', type:'write', topic:'structure',
  prompt: 'Write 3 sentences using: (1) a subordinating conjunction, (2) a relative clause, (3) a modal verb.',
  example: 'Although the weather was bad, we went hiking. The guide who led us knew the mountain very well. We could see the whole valley from the top.' },

/* 
   PHASE 6 SESSION 1  Passive Voice
 */
p6s1_mc1: { id:'p6s1_mc1', type:'mc', topic:'passive',
  question: '"English ___ all over the world." (passive)',
  options: ['speaks','is speaking','is spoken','was spoken'],
  answer: 'is spoken', hint: 'Present Simple Passive: is/are + past participle.' },

p6s1_mc2: { id:'p6s1_mc2', type:'mc', topic:'passive',
  question: '"The Mona Lisa ___ by Leonardo da Vinci."',
  options: ['is painted','was painted','has painted','painted'],
  answer: 'was painted', hint: 'Past Simple Passive: was/were + past participle.' },

p6s1_fill1: { id:'p6s1_fill1', type:'fill', topic:'passive',
  sentence: 'A new hospital ___ (to build) in our town next year. (Future passive)',
  answer: 'will be built', hint: 'Future Passive: will be + past participle.' },

p6s1_fill2: { id:'p6s1_fill2', type:'fill', topic:'passive',
  sentence: 'The windows ___ (to clean) every week. (Present simple passive)',
  answer: 'are cleaned', hint: 'Present Simple Passive (plural subject): are + past participle.' },

p6s1_err1: { id:'p6s1_err1', type:'err', topic:'passive',
  wrong: 'The letter was wrote by my grandmother.',
  correct: 'The letter was written by my grandmother.',
  hint: '"write"  irregular past participle "written" (not "wrote").' },

p6s1_sort1: { id:'p6s1_sort1', type:'sort', topic:'passive',
  words: ['The','exam','was','cancelled','by','the','teacher','.'],
  answer: 'The exam was cancelled by the teacher.', hint: 'Past Simple Passive: was + past participle + by + agent.' },

/* 
   PHASE 6 SESSION 2  Conditionals 0 & 1
 */
p6s2_mc1: { id:'p6s2_mc1', type:'mc', topic:'conditionals',
  question: '"If you ___ water, it boils." (Zero conditional)',
  options: ['heat','will heat','heated','would heat'],
  answer: 'heat', hint: 'Zero conditional: if + present simple, present simple (general truth).' },

p6s2_mc2: { id:'p6s2_mc2', type:'mc', topic:'conditionals',
  question: '"If she studies hard, she ___ the exam." (First conditional)',
  options: ['passed','would pass','will pass','passes'],
  answer: 'will pass', hint: 'First conditional: if + present simple, will + base verb.' },

p6s2_fill1: { id:'p6s2_fill1', type:'fill', topic:'conditionals',
  sentence: 'If you ___ (mix) yellow and blue, you ___ (get) green. (Zero conditional)',
  answer: 'mix / get', hint: 'Zero conditional: both clauses in Present Simple.' },

p6s2_fill2: { id:'p6s2_fill2', type:'fill', topic:'conditionals',
  sentence: 'If it ___ (to stop) raining, we ___ (go) to the park. (1st conditional)',
  answer: 'stops / will go', hint: 'First conditional: if + present simple  will + base verb.' },

p6s2_err1: { id:'p6s2_err1', type:'err', topic:'conditionals',
  wrong: 'If she will come, we will have a party.',
  correct: 'If she comes, we will have a party.',
  hint: 'In the if-clause of a first conditional, use Present Simple (NOT will).' },

p6s2_sort1: { id:'p6s2_sort1', type:'sort', topic:'conditionals',
  words: ['If','you','exercise','regularly',',','you','will','feel','much','better','.'],
  answer: 'If you exercise regularly, you will feel much better.', hint: 'First conditional: if-clause first + comma + main clause with "will".' },

/* 
   PHASE 6 SESSION 3  Conditionals 2 & 3
 */
p6s3_mc1: { id:'p6s3_mc1', type:'mc', topic:'conditionals',
  question: '"If I ___ you, I would apologise." (2nd conditional)',
  options: ['am','was','were','would be'],
  answer: 'were', hint: '2nd conditional: if + past simple. Use "were" for all persons in formal English.' },

p6s3_mc2: { id:'p6s3_mc2', type:'mc', topic:'conditionals',
  question: '"If they ___ earlier, they would have caught the train." (3rd conditional)',
  options: ['left','have left','had left','would leave'],
  answer: 'had left', hint: '3rd conditional: if + past perfect (had + past participle).' },

p6s3_fill1: { id:'p6s3_fill1', type:'fill', topic:'conditionals',
  sentence: 'If I ___ (have) a car, I would drive to work.',
  answer: 'had', hint: '2nd conditional: if + past simple. "have"  "had".' },

p6s3_fill2: { id:'p6s3_fill2', type:'fill', topic:'conditionals',
  sentence: 'If she ___ (study) harder, she would have passed the exam. (3rd conditional)',
  answer: 'had studied', hint: '3rd conditional: if + past perfect = had + past participle.' },

p6s3_err1: { id:'p6s3_err1', type:'err', topic:'conditionals',
  wrong: 'If he would come, I would be happy.',
  correct: 'If he came, I would be happy.',
  hint: '2nd conditional: if-clause uses PAST SIMPLE (not "would"). "If he came".' },

p6s3_sort1: { id:'p6s3_sort1', type:'sort', topic:'conditionals',
  words: ['If','she','had','arrived','on','time',',','she','would','not','have','missed','the','opening','.'],
  answer: 'If she had arrived on time, she would not have missed the opening.', hint: '3rd conditional: if + past perfect, would have + past participle.' },

/* 
   PHASE 6 SESSION 4  Gerunds & Infinitives
 */
p6s4_mc1: { id:'p6s4_mc1', type:'mc', topic:'gerunds',
  question: '"She enjoys ___ in the rain." (Gerund or infinitive?)',
  options: ['walk','to walk','walking','walked'],
  answer: 'walking', hint: '"enjoy" is always followed by a GERUND (verb-ing).' },

p6s4_mc2: { id:'p6s4_mc2', type:'mc', topic:'gerunds',
  question: '"He refused ___ our offer."',
  options: ['accepting','accepted','accept','to accept'],
  answer: 'to accept', hint: '"refuse" is followed by an INFINITIVE (to + base verb).' },

p6s4_fill1: { id:'p6s4_fill1', type:'fill', topic:'gerunds',
  sentence: 'I hope ___ (see) you soon.',
  answer: 'to see', hint: '"hope" is followed by infinitive: to + base verb.' },

p6s4_fill2: { id:'p6s4_fill2', type:'fill', topic:'gerunds',
  sentence: 'She avoided ___ (look) at him.',
  answer: 'looking', hint: '"avoid" is followed by gerund (verb-ing).' },

p6s4_err1: { id:'p6s4_err1', type:'err', topic:'gerunds',
  wrong: 'He suggested to go to the cinema.',
  correct: 'He suggested going to the cinema.',
  hint: '"suggest" requires a gerund, NOT an infinitive.' },

p6s4_sort1: { id:'p6s4_sort1', type:'sort', topic:'gerunds',
  words: ['She','decided','to','take','a','gap','year','after','finishing','school','.'],
  answer: 'She decided to take a gap year after finishing school.', hint: '"decide" + infinitive; "after" + gerund.' },

/* 
   PHASE 6 SESSION 5  Reported Speech
 */
p6s5_mc1: { id:'p6s5_mc1', type:'mc', topic:'reportedspeech',
  question: '"I am tired," he said.  He said that he ___ tired.',
  options: ['is','was','would be','were'],
  answer: 'was', hint: 'Tense backshift: Present Simple  Past Simple (is  was).' },

p6s5_mc2: { id:'p6s5_mc2', type:'mc', topic:'reportedspeech',
  question: '"I will help you," she promised.  She promised that she ___ help me.',
  options: ['will','would','can','could'],
  answer: 'would', hint: 'Tense backshift: will  would in reported speech.' },

p6s5_fill1: { id:'p6s5_fill1', type:'fill', topic:'reportedspeech',
  sentence: '"We are leaving now," they said.  They said that they ___ then.',
  answer: 'were leaving', hint: 'Backshift: Present Continuous  Past Continuous; "now"  "then".' },

p6s5_fill2: { id:'p6s5_fill2', type:'fill', topic:'reportedspeech',
  sentence: '"I can swim," he said.  He said that he ___ swim.',
  answer: 'could', hint: 'Backshift: can  could in reported speech.' },

p6s5_err1: { id:'p6s5_err1', type:'err', topic:'reportedspeech',
  wrong: 'She said that she will call me tomorrow.',
  correct: 'She said that she would call me.',
  hint: 'In reported speech: will  would; "tomorrow"  changes to "the next day" but can be omitted.' },

p6s5_sort1: { id:'p6s5_sort1', type:'sort', topic:'reportedspeech',
  words: ['He','told','me','that','he','had','been','working','all','day','.'],
  answer: 'He told me that he had been working all day.', hint: 'Backshift: Past Continuous  Past Perfect Continuous: had been working.' },

/* 
   PHASE 6 SESSION 6  Final Review
 */
p6s6_mc1: { id:'p6s6_mc1', type:'mc', topic:'mixed',
  question: '"The results ___ yet." (negative passive, present perfect)',
  options: ['haven\'t announced','have not been announced','were not announced','are not announced'],
  answer: 'have not been announced', hint: 'Present Perfect Passive: have/has + been + past participle.' },

p6s6_mc2: { id:'p6s6_mc2', type:'mc', topic:'mixed',
  question: '"If she ___ harder, she ___ the scholarship." (3rd conditional)',
  options: ['studied / would have got','had studied / would have got','studied / would get','had studied / would get'],
  answer: 'had studied / would have got', hint: '3rd conditional: had + past participle  would have + past participle.' },

p6s6_mc3: { id:'p6s6_mc3', type:'mc', topic:'mixed',
  question: '"He enjoys ___ but refuses ___ vegetables." (gerund / infinitive)',
  options: ['to cook / eating','cooking / to eat','to cook / to eat','cooking / eating'],
  answer: 'cooking / to eat', hint: '"enjoy" + gerund; "refuse" + infinitive.' },

p6s6_fill1: { id:'p6s6_fill1', type:'fill', topic:'mixed',
  sentence: '___ she was tired, she continued working. (contrast)',
  answer: 'Although', hint: '"Although" introduces a contrast (unexpected behaviour).' },

p6s6_fill2: { id:'p6s6_fill2', type:'fill', topic:'mixed',
  sentence: 'Three new schools ___ (to open) in the city last year. (passive)',
  answer: 'were opened', hint: 'Past Simple Passive: were + past participle.' },

p6s6_err1: { id:'p6s6_err1', type:'err', topic:'mixed',
  wrong: 'If I would study harder, I will pass the test.',
  correct: 'If I study harder, I will pass the test.',
  hint: 'First conditional: if + PRESENT SIMPLE (no "would" in if-clause) + will + base verb.' },

p6s6_sort1: { id:'p6s6_sort1', type:'sort', topic:'mixed',
  words: ['The','scientist','who','discovered','penicillin','was','awarded','the','Nobel','Prize','.'],
  answer: 'The scientist who discovered penicillin was awarded the Nobel Prize.', hint: 'Relative clause (who) + passive voice (was awarded).' },

p6s6_write1: { id:'p6s6_write1', type:'write', topic:'mixed',
  prompt: 'Write a short paragraph (4-5 sentences) about an important invention or discovery. Use passive voice, a conditional, and a relative clause.',
  example: 'The internet, which was developed in the 1960s, has changed the world forever. If it had not been invented, communication would have been much slower. Today, information is shared instantly around the globe. It can be argued that it is the most important invention of the 20th century.' }

}; // end EXERCISES
