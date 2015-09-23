QuoraClone.Views.Header = Backbone.CompositeView.extend({

  initialize: function(options){
    this.listenTo(QuoraClone.currentUser, "signIn signOut", this.render);
    this.render();
  },

  events: {
    "click #sign-out-link": "signOut",
    "click button" : "newQuestion",
    "submit .search" : "commenceSearch"
  },

  template: JST['shared/header'],

  render: function(){

    var html = this.template({ currentUser: QuoraClone.currentUser });
    this.$el.html(html);

    return this;
  },

  signOut: function(event){
    event.preventDefault();
    QuoraClone.currentUser.signOut({
      success: function(){
        Backbone.history.navigate("session/new", { trigger: true });
      }
    });
  },

  newQuestion: function () {
    Backbone.history.navigate("#questions/new", {trigger: true});
  },

  userMenu: function () {
    this.userMenuView = new QuoraClone.Views.UserMenu({
      model: QuoraClone.currentUser
    });

    this.addSubview(".menu-zone", this.userMenuView);
  },

  closeMenu: function () {
    this.removeSubview(".menu-zone", this.userMenuView);
  },

  commenceSearch: function (e) {
    e.preventDefault();

    Backbone.history.navigate("#search/" + $("input").val(), {trigger: true});
    $("input").val("");
  }
});
