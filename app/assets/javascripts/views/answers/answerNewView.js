QuoraClone.Views.AnswerNewView = Backbone.View.extend({
  template: JST['answers/answerNewView'],
  tagName: 'div',
  className: 'new-answer-to-question',

  initialize: function(options) {
    this.question = options.question
  },

  render: function () {
    this.$el.html(this.template({
      answer: this.model,
      question: this.question
    }));
    return this;
  }
})
