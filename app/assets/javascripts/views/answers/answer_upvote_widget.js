QuoraClone.Views.AnswerUpvoteWidget = Backbone.View.extend({
  template: JST["answers/answerUpvoteWidget"],

  events: {
    "click .upvote-button": "toggleUpvote",
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  toggleUpvote: function (e) {
    e.preventDefault();
    this.model.toggleUpvote(e);
    this.model.fetch();
  },

  render: function () {
      var renderedContent = this.template({
      upvote: this.model.upvote(),
      answer: this.model
    });

    this.$el.html(renderedContent);
    return this;
  }
})
