QuoraClone.Collections.AnswerComments = Backbone.Collection.extend({
  url: "/api/answer_comments",
  model: QuoraClone.Models.AnswerComment,

  getOrFetch: function(id) {
    var collection = this;
    var answerComment = collection.get(id);

    if (answerComment) {
      answerComment.fetch();
    } else {
      answerComment = new collection.model({ id: id });
      collection.add(answerComment);
      answerComment.fetch({
        error: function () {
          collection.remove(answerComment);
        }
      });
    }

    return answerComment;
  }
});
