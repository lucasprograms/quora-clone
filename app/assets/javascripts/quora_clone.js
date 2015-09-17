window.QuoraClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new QuoraClone.Routers.Router();
    Backbone.history.start();
  }
};
