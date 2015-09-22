QuoraClone.Views.TopicSelect = Backbone.CompositeView.extend({
  template: JST['topics/topicSelect'],

  initialize: function () {
    this.listenTo(
      this.collection,
      'sync',
      this.render
    )
  },

  events : {
    'click .submit-topics' : 'submit'
  },

  render () {
    this.$el.html(this.template({topics: this.collection}));
    return this;
  },

  submit: function () {
    var topic_ids = []
    $("input:checked").each(function () {
      topic_ids.push(this.value)
    });

    $.ajax({
      url: "/api/users/" + QuoraClone.currentUser.get('id'),
      type: "PATCH",
      data: {"user[subscribed_topic_ids]" : topic_ids},
      dataType: "json",
      success: function(data) {
        QuoraClone.currentUser.set(data);
        Backbone.history.navigate("", {trigger: true})
      }
    })
  }
})
