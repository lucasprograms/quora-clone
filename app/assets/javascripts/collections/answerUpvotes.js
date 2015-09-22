QuoraClone.Collections.AnswerUpvotes = Backbone.Collection.extend({
  url: "/api/answer_upvotes",
  model: QuoraClone.Models.AnswerUpvote,

  getOrFetch: function(id) {
    var collection = this;
    var answerUpvote = collection.get(id)

    if (answerUpvote) {
      answerUpvote.fetch();
    } else {
      answerUpvote = new collection.model({ id: id });
      collection.add(answerUpvote);
      answerUpvote.fetch({
        error: function () {
          collection.remove(answerUpvote)
        }
      });
    }

    return answerUpvote;
  }
})
