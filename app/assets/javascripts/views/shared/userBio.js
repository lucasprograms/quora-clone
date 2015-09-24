QuoraClone.Views.UserBio = Backbone.View.extend({
  template: JST['shared/userBio'],

  initialize: function () {
    // this.render();
  },

  events : {
    'click .submit-bio' : 'submit'
  },

  render: function () {
    this.$el.append(this.template({ bio: QuoraClone.currentUser.get('bio')}));
    return this;
  },

  submit: function () {
    $.ajax({
      url: "/api/users/" + QuoraClone.currentUser.get('id'),
      type: "PATCH",
      data: {
        "user[bio]" : $(".user-bio").val()
      },
      dataType: "json",
      success: function(data) {
        debugger
        
        QuoraClone.currentUser.set(data);
        Backbone.history.navigate("", {trigger: true});
      }
    });
  }
});
