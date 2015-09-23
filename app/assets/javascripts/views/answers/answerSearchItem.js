QuoraClone.Views.AnswerSearchItem = Backbone.View.extend({
  template: JST['answers/answerSearchItem'],
  className: 'search-item',

  initialize: function () {
    this.listenTo(
      this.model,
      'reset',
      this.render
    );
    this.model.fetch({reset: true});

  },

  render: function () {
    this.$el.html(this.template({
      answer: this.model,
      author: this.model.author()
    }));
    return this;
  }
});
