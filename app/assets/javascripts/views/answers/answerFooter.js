QuoraClone.Views.AnswerFooter = Backbone.View.extend({
  template: JST['answers/answerFooterView'],

  initialize: function () {
    this.render();
    this.listenTo(
      this.model,
      'add',
      this.render
    );
  },

  render: function () {
    this.$el.html(this.template({ answer: this.model }));
    return this;
  }
});
