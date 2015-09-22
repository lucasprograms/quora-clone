QuoraClone.Views.AnswerShowView = Backbone.CompositeView.extend({
  template: JST['answers/answerShowView'],
  tagName: 'li',
  className: 'answer-to-question',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);

  },

  render: function () {
    this.$el.html(this.template({ answer: this.model }));

    this.model.answerComments().each(function(answerComment) {
      this.addAnswerComment(answerComment);
    }.bind(this));

    return this;
  },

  addAnswerComment: function (answerComment) {
    var answerCommentShowView = new QuoraClone.Views.AnswerCommentShowView({
      model: answerComment
    });

    this.addSubview(".comments-to-answer", answerCommentShowView);
  },

  newAnswerComment: function () {
    this.answerComment = new QuoraClone.Models.AnswerComment();
    var answerCommentNewView = new QuoraClone.Views.AnswerCommentNewView({
      model: this.answerComment,
      answer: this.model
    });

    $("button.comment-answer").css("display", "none");

    this.addSubview(".new-comment-to-answer", answerCommentNewView);
  }
});

//AnswerCommentShowView
//AnswerCommentNewView
