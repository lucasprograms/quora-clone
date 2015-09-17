QuoraClone.Collections.QuestionTopics = Backbone.Collection.extend({
  url: 'api/question_topics',
  model: QuoraClone.Models.QuestionTopic,

  getOrFetch: function(id) {
    var collection = this;
    var questionTopic = collection.get(id)

    if (questionTopic) {
      questionTopic.fetch();
    } else {
      questionTopic = new collection.model({ id: id });
      collection.add(questionTopic);
      questionTopic.fetch({
        error: function () {
          collection.remove(questionTopic)
        }
      });
    }

    return questionTopic;
  }
})
