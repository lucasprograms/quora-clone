QuoraClone.Views.AnswerCommentNewView = Backbone.View.extend({
  template: JST['answerComments/answerCommentNewView'],
  tagName: 'div',
  className: 'new-comment-to-answer',

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
