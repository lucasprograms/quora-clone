QuoraClone.Views.AnswerCommentNewView = Backbone.View.extend({
  template: JST['answerComments/answerCommentNewView'],
  tagName: 'div',
  className: 'new-comment-to-answer',

  initialize: function(options) {
    this.answer = options.answer;
  },

  render: function () {
    this.$el.html(this.template({
      answerComment: this.model,
      answer: this.answer
    }));
    return this;
  }
});
