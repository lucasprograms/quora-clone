QuoraClone.Collections.Answers = Backbone.Collection.extend({
  url: 'api/answers',
  model: QuoraClone.Models.Answer,

  getOrFetch: function(id) {
    var collection = this;
    var answer = collection.get(id)

    if (answer) {
      answer.fetch();
    } else {
      answer = new collection.model({ id: id });
      collection.add(answer);
      answer.fetch({
        error: function () {
          collection.remove(answer)
        }
      });
    }

    return answer;
  }

})
