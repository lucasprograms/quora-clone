QuoraClone.Views.QuestionAnswerItemView = Backbone.CompositeView.extend({
  addComments: function () {

    this.newAnswerComment();

    this.answer.answerComments().each(function (answerComment) {
      var _answerCommentShowView = new QuoraClone.Views.AnswerCommentShowView({
        model: answerComment
      });

      this.addSubview(".comments-to-answer", _answerCommentShowView);
    }.bind(this));

  },

  newAnswerComment: function () {

    this.answerCommentNewView = new QuoraClone.Views.AnswerCommentNewView({
      model: new QuoraClone.Models.AnswerComment(),
      answer: this.answer
    });

    this.addSubview(".new-comment-to-answer", this.answerCommentNewView);
  },

  submit: function (e) {
    e.preventDefault();
    this.answerComment = new QuoraClone.Models.AnswerComment();
    var id = $(e.currentTarget).data('id');

    this.answerComment.set({
      body: $(body).val(),
      answer_id: id
    });

    this.answerComment.save({}, {

      success: function () {
        var collection = new QuoraClone.Collections.AnswerComments();
        collection.add(this.answerComment, { merge: true });
        var _answerCommentShowView = new QuoraClone.Views.AnswerCommentShowView({
          model: this.answerComment
        });

        this.addSubview(".comments-to-answer", _answerCommentShowView);
        $(".new-comment-to-answer").empty();
      }.bind(this)

    });

    return this;
  },

  cancel: function () {
    toggleComments();
  },

  toggleComments: function () {
    if (this.$(".comments-to-answer").css("display") == ("none")) {
      this.$(".comments-to-answer").css("display", "block");
      this.$(".new-comment-to-answer").css("display", "block");
    } else {
      this.$(".comments-to-answer").css("display", "none");
      this.$(".new-comment-to-answer").css("display", "none");
    }
  }
});
