QuoraClone.Collections.Topics = Backbone.Collection.extend({
  url: 'api/topics',
  model: QuoraClone.Models.Topic,

  getOrFetch: function(id) {
    var collection = this;
    var topic = collection.get(id)

    if (topic) {
      topic.fetch();
    } else {
      topic = new collection.model({ id: id });
      collection.add(topic);
      topic.fetch({
        error: function () {
          collection.remove(topic)
        }
      });
    }

    return topic;
  }

})
