window.QuoraClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this.currentUser = new QuoraClone.Models.CurrentUser();
    this.currentUser.fetch();

    this.header = new QuoraClone.Views.Header({ el: "#header" });
    this.router = new QuoraClone.Routers.Router({ $rootEl: $("#main") });

    this.userCollection = new QuoraClone.Collections.Users(); 

    Backbone.history.start();
  }
};
