# Phase 3: User Feeds

## Rails
### Models

### Controllers
Api::AnswersController (feed)
Api::QuestionsController (feed)


### Views
questions/feed.json.jbuilder
answers/feed.json.jbuilder

## Backbone
### Models

### Collections

### Views
* QuestionFeedShow (composite view, contains QuestionIndex subview
  or collection of QuestionShow views)
* AnswerFeedShow (composite view, contains AnswerIndex subview
  or collection of AnswerShow views)

## Gems/Libraries
