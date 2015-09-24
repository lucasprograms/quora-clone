QuoraClone.Views.FeedShow = Backbone.CompositeView.extend({
  template: JST['topics/feedShow'],

  initialize: function () {
    if (!QuoraClone.CurrentUser.get('HasEverLoggedIn')) {
      Backbone.history.navigate("topics/new", { trigger: true });
    }
    
    this.listenTo(
      QuoraClone.currentUser,
      'sync',
      this.render
    );
  },

  events: {
    'click .new-question' : 'newQuestion'
  },

  addTopic: function (topic) {
    var topicView = new QuoraClone.Views.TopicView({
      model: topic
    });

    this.addSubview(".topic-list", topicView);
  },

  render: function () {
    var content = this.template({ topics: this.collection });
    this.$el.html(content);

    this.collection.each(function(topic) {
      this.addTopic(topic);
    }.bind(this));

    return this;
  },

  newQuestion: function () {
    Backbone.history.navigate("/questions/new", {trigger: true});
  }
});
