QuoraClone.Views.AnswerCommentShowView = Backbone.CompositeView.extend({
  template: JST['answerComments/answerCommentShowView'],
  tagName: 'li',
  className: 'comment-to-answer',

  initialize: function () {

    this.listenTo(
      this.model,
      'sync',
      this.render
    );
  },

  render: function () {
    this.$el.html(this.template({ answerComment: this.model }));
    return this;
  }
});
