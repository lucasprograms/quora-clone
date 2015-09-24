QuoraClone.Views.UserMenu = Backbone.View.extend({
  template: JST['shared/userMenu'],

  initialize: function () {
    this.render();
  },

  events : {
    'click .signout' : 'signOut',
    'click html' : 'leaveMenu'
  },

  render: function () {
    this.$el.html(this.template({user: this.model}));
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

});
