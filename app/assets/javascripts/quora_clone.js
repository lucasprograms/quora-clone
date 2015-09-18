window.QuoraClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.currentUser = new BackboneAuthDemo.Models.CurrentUser();
    this.currentUser.fetch();

    new QuoraClone.Routers.Router();
    Backbone.history.start();
  }
};
