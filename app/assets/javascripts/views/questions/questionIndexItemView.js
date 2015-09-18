QuoraClone.Views.QuestionIndexItemView = Backbone.CompositeView.extend({
  template: JST['questions/questionIndexItem'],
  tagName: 'li',
  className: 'question-index-item',

  // initialize: function () {
  //   this.listenTo(
  //     this.model,
  //     'sync',
  //     this.render
  //   )
  // },

  events: {
    'click .answer-question' : 'newAnswer',
    'click .submit' : 'submit'
  },

  render: function () {
    this.$el.html(this.template({ question: this.model }))
    return this;
  },

  newAnswer: function (e) {
    e.preventDefault()
    this.answer = new QuoraClone.Models.Answer();
    var id = $(e.currentTarget).data('id')

    var answerNewView = new QuoraClone.Views.AnswerNewView({
      model: this.answer,
      question: this.model
    });

    $("button.answer-question").css("display", "none");

    this.addSubview(".new-answer-to-question", answerNewView);
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
