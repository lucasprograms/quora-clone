QuoraClone.Views.QuestionAnswerItemView = Backbone.CompositeView.extend({
  template: JST['questionANDanswer/questionAnswerItem'],
  tagName: 'li',
  className: 'feed question-answer-item',

  initialize: function(options) {
    this.answer = options.answer;
    this.question = options.question;
    this.render();
  },

  events: {
    'click .show-comments' : 'showComments',
    'click .submit' : 'submit'
  },

  render: function () {
    this.$el.html(this.template({
      answer: this.answer,
      question: this.question
    }))
    return this;
  },

  showComments: function (e) {
    e.preventDefault()

    this.newAnswerComment(e)
    debugger
    this.answer.answerComments().each(function (answerComment) {
      var _answerCommentShowView = new QuoraClone.Views.AnswerCommentShowView({
        model: answerComment
      })
      debugger
      this.addSubview(".comments-to-answer", _answerCommentShowView)
    })
  },

  newAnswerComment: function (e) {
    e.preventDefault()

    var _answerCommentNewView = new QuoraClone.Views.AnswerCommentNewView({
      model: new QuoraClone.Models.AnswerComment(),
      answer: this.answer
    });

    this.addSubview(".new-comment-to-answer", _answerCommentNewView);
  },

  submit: function (e) {
    e.preventDefault()
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

        this.render()
      }.bind(this)

    });

    return this;
  }
})
