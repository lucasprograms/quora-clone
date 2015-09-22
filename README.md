# Quora Clone

[Heroku link][heroku]

[heroku]: http://flux-capacitr.herokuapp.com

## Barely Viable Product
A clone of Quora built on Rails and Backbone. Users can:

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Create questions
- [x] Answer questions
- [x] View questions and answers
- [x] Follow topics
- [x] View a feed of followed topics
- [ ] Search for questions by title
- [ ] Search for questions by topic
- [x] Comment on question or answer

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/wireframes
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Questions Creation (~1 day)
Note: I'm not sure on the timeline but given that the template seems to

• User Authenication
  - (xxWRITTEN IN leSS ThaaN 2HRS!!!1xx)
• Questions
  - form
    - text for title
    - text for body
    - dropdown for topic
      - this will end up being something different, probably a (guided) search
  - button to answer form
• Answers
  - form reached by clicking a question's 'answer' button
  - form
    - text for body


The most important part of this phase will be pushing the app to Heroku and ensuring that everything works.

[Details][phase-one]

### Phase 2: Viewing Questions and Answers (~2 days)

• API Routes
  - using jBuilder, I'll build up the json that the collections/models will use
    - questions
    - answers

• Backbone collections/models
  - questions/answers

• Backbone views/templates
  - build views/templates to display questions/answers

By the end of this phase, users will be able to create and view questions, answers, and comments on a single page Backbone app. The most important part of this phase will be pushing the app to Heroku and ensuring that everything works.

[Details][phase-two]

### Phase 3: User Feeds (~2 days)

• answers feed
  - landing page for logged in users
  - add route that uses the current_user's 'subscribed_topics' association to serve a list of answered questions. For now the questions will be served in chronological order.
  - add AnswersFeedShow view. The answers collection will fetch from the route described above.

• questions feed
  - page when 'write' link in header is clicked
  - add route that uses the current_user's 'subscribed_topics' association to serve a list of questions. For now the questions will be served in chronological order.
  - add QuestionsFeedShow view. The questions collection will fetch from the route described above.

[Details][phase-three]

### Phase 4: Form Functionality (~1 day)

• question and answer forms
  - add markdown to
  - add styling options


[Details][phase-four]

### Phase 5: Searching for Questions, Answers (~2 days)

• Search
  - create route that returns json of both questions and answers
  - create view that has both QuestionItemShow and AnswerItemShow Views
    - they will fetch from the search route

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Comments
- [ ] Upvote/Downvote and counter for questions and answers
- [ ] infinite scroll
- [ ] Follows
- [ ] Notifications
- [ ] More advanced search (typeahead search bar, filter options)
- [ ] Multiple sessions/session management
- [ ] User images

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
