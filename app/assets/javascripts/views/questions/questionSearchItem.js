QuoraClone.Views.QuestionSearchItem = Backbone.View.extend({
  template: JST['questions/questionSearchItem'],
  className: 'search-item',

  initialize: function () {
    // this.listenTo(
    //   this.model,
    //   'sync',
    //   this.render
    // );
    // this.model.fetch();
    this.render();
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
