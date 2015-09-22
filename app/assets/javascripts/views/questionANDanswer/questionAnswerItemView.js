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
      answer: this.answer,
      question: this.question
    }));



    var upvoteWidget = new QuoraClone.Views.AnswerUpvoteWidget({
      model: this.answer
    });

    this.addSubview(".answer-form-footer", upvoteWidget, true);

    this.addComments();



    return this;
  },

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
  },
});
