QuoraClone.Views.QuestionIndexItemView = Backbone.CompositeView.extend({
  template: JST['questions/questionIndexItem'],
  tagName: 'li',
  className: 'question-index-item',

  initialize: function () {
    this.listenTo(
      this.model,
      'sync',
      this.render
    );
    this.listenTo(
      this.model.answers(),
      'add',
      this.render
    );

  },

  events: {
    'click .answer-question' : 'newAnswer',
    'click .submit' : 'submit',
    'click .cancel' : 'cancel'
  },

  render: function () {
    this.$el.html(this.template({
      topic: this.model.topics().first(),
      question: this.model
    }));
    return this;
  },

  newAnswer: function (e) {
    e.preventDefault();
    this.answer = new QuoraClone.Models.Answer();
    var id = $(e.currentTarget).data('id');

    this.answerNewView = new QuoraClone.Views.AnswerNewView({
      model: this.answer,
      question: this.model
    });

    this.$("button.answer-question").css("display", "none");

    this.addSubview(".new-answer-to-question", this.answerNewView);
  },

  submit: function (e) {
    e.preventDefault();
    var id = $(e.currentTarget).data('id');

    this.answer.set({
      body: $(body).val(),
      question_id: id
    });

    this.answer.save({}, {

      success: function () {
        this.model.answers().add(this.answer, { merge: true });

        this.removeSubview(".new-answer-to-question", this.answerNewView);
        this.$("button.answer-question").css("display", "block");
      }.bind(this)

    });

    return this;
  },

  cancel: function (e) {
    this.removeSubview(".new-answer-to-question", this.answerNewView);
    this.$("button.answer-question").css("display", "block");
  }
});
