QuoraClone.Models.AnswerUpvote = Backbone.Model.extend({
  urlRoot: "api/answer_upvotes",

  author: function () {
    if (!this._author) {
      this._author = new QuoraClone.Models.User();
    }

    return this._author;
  },
});
