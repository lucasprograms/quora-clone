QuoraClone.Collections.QuestionComments = Backbone.Collection.extend({
  url: "/api/question_comments",
  model: QuoraClone.Models.QuestionComment,

  getOrFetch: function(id) {
    var collection = this;
    var questionComment = collection.get(id);

    if (questionComment) {
      questionComment.fetch();
    } else {
      questionComment = new collection.model({ id: id });
      collection.add(questionComment);
      questionComment.fetch({
        error: function () {
          collection.remove(questionComment);
        }
      });
    }

    return questionComment;
  }

});
