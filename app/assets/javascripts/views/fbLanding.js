QuoraClone.Views.fbLanding = Backbone.View.extend({
  initialize: function () {
    this.listenTo(
      QuoraClone.currentUser,
      'sync',
      this.navigate
    );
  },

  navigate: function () {
    if (!QuoraClone.currentUser.get('has_ever_logged_in')) {
      Backbone.history.navigate("topics/new", { trigger: true });
    } else {
      Backbone.history.navigate("", { trigger: true });
    }
  }
});
