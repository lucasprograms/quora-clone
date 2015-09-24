QuoraClone.Views.fbLanding = Backbone.View.extend({
  initialize: function () {
    this.listenTo(
      QuoraClone.currentUser,
      'sync',
      this.navigate
    );
  },

  navigate: function () {
    Backbone.history.navigate("", { trigger: true });
  }
});
