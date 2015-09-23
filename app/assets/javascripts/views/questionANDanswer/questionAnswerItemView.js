QuoraClone.Views.QuestionAnswerItemView = Backbone.CompositeView.extend({
  template: JST['questionANDanswer/questionAnswerItem'],
  tagName: 'li',
  className: 'feed question-answer-item',

  initialize: function(options) {
    this.answer = options.answer;
    if (options.question) {
      this.question = options.question;
      this.render();
    } else {
      this.listenTo(
        this.answer,
        'sync',
        this.setQuestion
      );
    }
  },

  events: {
    'click .show-comments' : 'toggleComments',
    'click .submit-comment' : 'submit',
    'click .cancel' : 'cancel'
  },

  setQuestion: function () {
    this.question = this.answer.question();
    this.render();
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
