# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

topics = Topic.create([
  {subject: 'Ruby'},
  {subject: 'Rust'},
  {subject: "XxXmlgNoScopezXxX"},
  {subject: 'Lisp'},
  {subject: 'Pair Programming'},
  {subject: 'Swift'},
  {subject: 'Scala'},
  {subject:  'Perl'},
  {subject:  'PHP'},
  {subject:  'Python'},
  {subject:  'Apples'},
  {subject:  'Organs'},
  {subject:  'FloBots'},
  {subject:  'Dreads'},
  {subject:  'C++'},
  {subject:  'C'},
  {subject:  'B'},
  {subject:  'COBOL'}
  ])

users = User.create([
  {email: 'lambda@aa.io', password: 'lambda'},
  {email: 'lucasm@aa.io', password: 'lucasm'},
  {email: 'quimbies@aa.io', password: 'quimbies'}
  ])

questions = Question.create([
  {title: 'How can I use the "puts" method?', body: '', author_id: '1'},
  {title: 'What is the deal with COBOL?', body: 'WHat is with the capitalization?', author_id: '2'},
  {title: 'How do I tactfully mention to my partner that the timer is up?', body: '', author_id: '3'},
  {title: 'Why are there so many curly braces in Lisp?', body: '', author_id: '2'},
  ])


question_topics = QuestionTopic.create([
  {topic_id: 1, question_id: 1},
  {topic_id: 18, question_id: 2},
  {topic_id: 5, question_id: 3},
  {topic_id: 4, question_id: 4}


















  ])
