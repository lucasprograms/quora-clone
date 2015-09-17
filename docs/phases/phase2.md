# Phase 2: Viewing Questions and Answers

## Rails
### Models

### Controllers
Api::QuestionsController (create, destroy, index, show)
Api::AnswersController (create, destroy, index, show)

### Views
* questions/show.json.jbuilder

## Backbone
### Models
* Question (parses nested `answers` association)
* Answer

### Collections
* Questions
* Answers

### Views
* AnswerIndex
* AnswerIndexItem
* AnswerShow
* AnswerForm
* QuestionShow (composite view, contains AnswerIndex subview)
* QuestionForm

## Gems/Libraries
