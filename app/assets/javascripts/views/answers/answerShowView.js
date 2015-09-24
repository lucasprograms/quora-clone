QuoraClone.Views.AnswerShowView = Backbone.CompositeView.extend({
  template: JST['answers/answerShowView'],
  tagName: 'li',
  className: 'answer-to-question',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.answerComments(), 'add remove', this.refreshFooter);
  },

  events: {
    'click .show-comments' : 'toggleComments',
    'click .submit-comment' : 'submit'
  },

  render: function () {
    debugger
    this.$el.html(this.template({
      answer: this.model,
      author: this.model.author(),
      bio: this.model.author().get('bio'),
      img: this.model.author().get('avatar')
    }));

    this.addUpvoteWidget();

    this.addComments();

    return this;
  },

  refreshFooter: function () {
    this.render();
    this.toggleComments();
  },

  addUpvoteWidget: function () {
    var upvoteWidget = new QuoraClone.Views.AnswerUpvoteWidget({
      model: this.model
    });

    this.addSubview(".answer-form-footer", upvoteWidget, true);
  },

  addComments: function () {

    this.newAnswerComment();

    this.model.answerComments().each(function (answerComment) {
      var _answerCommentShowView = new QuoraClone.Views.AnswerCommentShowView({
        model: answerComment
      });

      this.addSubview(".comments-to-answer", _answerCommentShowView);
    }.bind(this));

  },

  newAnswerComment: function () {
    this.answerCommentNewView = new QuoraClone.Views.AnswerCommentNewView({
      model: new QuoraClone.Models.AnswerComment(),
      answer: this.model
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
        this.model.answerComments().add(this.answerComment, { merge: true });
        $("textarea#body").val("");
      }.bind(this)
    });

    return this;
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
