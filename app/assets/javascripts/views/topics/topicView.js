QuoraClone.Views.TopicView = Backbone.CompositeView.extend({
  template: JST['topics/topicView'],
  tagName: 'ul',
  className: 'topic-list-item',

  addQuestionAnswerItem: function (question, answer) {
    var questionAnswerItemView = new QuoraClone.Views.QuestionAnswerItemView({
      question: question,
      answer: answer
    });

    this.$el.append(questionAnswerItemView.$el);
  },

  addQuestion: function (question) {
    if (question.answers()) {
      question.answers().each(function (answer) {
        this.addQuestionAnswerItem(question, answer);
      }.bind(this));
    }
  },

  render: function () {
    this.model.questions().each(function(question) {
      this.addQuestion(question);
    }.bind(this));
  }
});
