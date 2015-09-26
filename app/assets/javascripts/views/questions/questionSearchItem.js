QuoraClone.Views.QuestionSearchItem = Backbone.View.extend({
  template: JST['questions/questionSearchItem'],
  className: 'question-search-item',

  initialize: function () {
    this.render();
  },

  events : {
    'click .question-answer-item-wrapper' : 'navigate'
  },

  navigate: function () {
    debugger
    Backbone.history.navigate("questions/" + this.model.get('id'), {trigger: true});
  },

  render: function () {
    this.$el.html(this.template({
      question: this.model,
      author: this.model.author(),
      bio: this.model.author().get('bio')
    }));
    return this;
  }
});
