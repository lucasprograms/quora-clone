QuoraClone.Views.TopicSelect = Backbone.CompositeView.extend({
  template: JST['topics/topicSelect'],

  initialize: function () {
    this.listenTo(
      this.collection,
      'sync',
      this.render
    );

    this.coverBackground();
  },

  events : {
    'click .submit-topics' : 'submit'
  },

  coverBackground: function() {
    $("html").prepend("<div class='cover-background'></div>");
  },

  render: function () {
    var ids = [];

    if (QuoraClone.currentUser.get('subscribed_topic_ids')) {
      QuoraClone.currentUser.get('subscribed_topic_ids').forEach( function(topic_id){
        ids.push(topic_id.toString());
      });
    }

    this.$el.html(this.template({
      topics: this.collection,
      ids: ids
    }));
    return this;
  },

  submit: function () {
    $(".error-message").empty();

    var topic_ids = [];
    $("input:checked").each(function () {
      topic_ids.push(this.value);
    });

    if (topic_ids.length < 3) {

      this._errorMess = new QuoraClone.Views.ErrorMessage({
        errorText: "Please Select at Least 3 Topics!"
      });

      this.addSubview(".error-message", this._errorMess);
      $(".error-message").css('font-style', 'italic');
    } else {
      $.ajax({
        url: "/api/users/" + QuoraClone.currentUser.get('id'),
        type: "PATCH",
        data: {
          "user[subscribed_topic_ids]" : topic_ids,
          "user[has_ever_logged_in]" : true
        },
        dataType: "json",
        success: function(data) {
          QuoraClone.currentUser.set(data);
          Backbone.history.navigate("", {trigger: true});
        }
      });

      $("html div.cover-background").remove();
    }
  }
});
