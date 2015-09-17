QuoraClone.Collections.Questions = Backbone.Collection.extend({
  url: 'api/questions',
  model: QuoraClone.Models.Question,

  getOrFetch: function(id) {
    var collection = this;
    var question = collection.get(id)

    if (question) {
      question.fetch();
    } else {
      question = new collection.model({ id: id });
      collection.add(question);
      question.fetch({
        error: function () {
          collection.remove(question)
        }
      });
    }

    return question;
  }

})
