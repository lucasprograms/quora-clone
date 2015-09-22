QuoraClone.Views.QuestionAnswerItemView = Backbone.CompositeView.extend({
  template: JST['questionANDanswer/questionAnswerItem'],
  tagName: 'li',
  className: 'feed question-answer-item',

  initialize: function(options) {
    this.topics = options.topics;
    this.answer = options.answer;
    this.question = options.question;

    this.render();
  },

  events: {
    'click .show-comments' : 'toggleComments',
    'click .submit-comment' : 'submit',
    'click .cancel' : 'cancel'
  },

  render: function () {

    this.$el.html(this.template({
      topic: this.question.topics().first(),
      question: this.question
    }));

    var _answerSubview = new QuoraClone.Views.AnswerShowView({
      model: this.answer
    });

    this.addSubview(".answer-show", _answerSubview);

    return this;
  },

});
