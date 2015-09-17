QuoraClone.Views.QuestionAnswerItemView = Backbone.View.extend({
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

    this.answer.answerComments().each(function (answerComment) {
      var _answerCommentShowView = new QuoraClone.Views.AnswerCommentShowView({
        model: answerComment
      })

      this.addSubview(".answer-comments", _answerCommentShowView)
    })
  },

  newAnswerComment: function (e) {
    e.preventDefault()

    var _answerCommentNewView = new QuoraClone.Views.AnswerCommentNewView({
      model: new QuoraClone.Models.AnswerComment()
    });

    this.addSubview(".new-comment-to-answer", _answerCommentNewView);
  },

  submit: function (e) {
    e.preventDefault()
    var id = $(e.currentTarget).data('id')

    this.answer.set({
      body: $(body).val(),
      question_id: id
    });

    this.answer.save({}, {

      success: function () {
        var collection = new QuoraClone.Collections.Answers();
        collection.add(this.answer, { merge: true });
        Backbone.history.navigate("#/questions/" + id, {trigger: true});
      }.bind(this)

    });

    return this;
  }
})
