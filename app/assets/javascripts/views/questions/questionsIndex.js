QuoraClone.Views.QuestionsIndex = Backbone.CompositeView.extend({
  template: JST['questions/questionsIndex'],

  initialize: function() {
    this.listenTo(
      this.collection,
      'sync',
      this.render
    )
  },

  render: function () {
    this.$el.html(this.template({
      questions: this.collection
    }));

    this.collection.each(function(question) {
      this.addQuestion(question)
    }.bind(this));

    return this;
  },

  addQuestion: function (question) {
    
    var questionIndexItemView = new QuoraClone.Views.QuestionIndexItemView({
      model: question
    });

    this.addSubview(".questions-index", questionIndexItemView);
  }

})
