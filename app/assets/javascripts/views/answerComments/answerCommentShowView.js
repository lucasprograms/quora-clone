QuoraClone.Views.AnswerCommentShowView = Backbone.CompositeView.extend({
  template: JST['answerComments/answerCommentShowView'],
  tagName: 'li',
  className: 'comment-to-answer group',

  initialize: function () {

    this.listenTo(
      this.model,
      'sync',
      this.render
    );
  },

  events : {
    'click .delete-comment' : 'deleteComment'
  },

  render: function () {
    this.$el.html(this.template({ answerComment: this.model }));
    return this;
  },

  deleteComment: function () {
    if (this.model.escape('author_id') === QuoraClone.currentUser.escape('id')) {
      this.model.destroy();
    }
  }
});
