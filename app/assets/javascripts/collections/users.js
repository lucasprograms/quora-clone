QuoraClone.Collections.Users = Backbone.Collection.extend({
  url: 'api/users',
  model: QuoraClone.Models.User,

  getOrFetch: function(id) {
    var collection = this;
    var userTopic = collection.get(id)

    if (userTopic) {
      userTopic.fetch();
    } else {
      userTopic = new collection.model({ id: id });
      collection.add(userTopic);
      userTopic.fetch({
        error: function () {
          collection.remove(userTopic)
        }
      });
    }

    return userTopic;
  }
})
