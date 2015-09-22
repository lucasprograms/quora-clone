QuoraClone.Views.QuestionShow = Backbone.CompositeView.extend({
  template: JST['questions/questionShow'],

  initialize: function (options) {
    this.topics = options.topics;
    this.users = options.users;
    this.listenTo(
      this.model,
      'sync',
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
      question: this.model
    }));

    this.model.answers().each(function(answer) {
      this.addAnswer(answer);
    }.bind(this));

    return this;
  },

  addAnswer: function (answer) {

    var answerShowView = new QuoraClone.Views.AnswerShowView({
      model: answer
    });

    this.addSubview(".answers-to-question", answerShowView);
  },

  newAnswer: function () {
    this.answer = new QuoraClone.Models.Answer();
    this.answerNewView = new QuoraClone.Views.AnswerNewView({
      model: this.answer,
      question: this.model
    });

    $("button.answer-question").css("display", "none");

    this.addSubview(".new-answer-to-question", this.answerNewView);
  },

  cancel: function () {
    $("button.answer-question").css("display", "block");
    this.removeSubview(".new-answer-to-question", this.answerNewView);
  },

  submit: function () {
    this.answer.set({
      body: $(body).val(),
      question_id: this.model.escape('id')
    });

    this.answer.save({}, {

      success: function () {
        var collection = new QuoraClone.Collections.Answers();
        collection.add(this.answer, { merge: true });
        Backbone.history.navigate("#/questions/" + this.model.escape('id'), {trigger: true});
      }.bind(this)

    });

    return this;
  }
});
