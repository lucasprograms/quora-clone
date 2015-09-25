QuoraClone.Views.SignIn = Backbone.View.extend({

  initialize: function(options){
    this.callback = options.callback;
    this.listenTo(QuoraClone.currentUser, "signIn", this.signInCallback);
  },

  events: {
    "submit form": "submit",
    "click .demo-user" : "signInDemoUser"
  },

  template: JST['shared/sign_in'],

  render: function(){
    this.$el.html(this.template());

    return this;
  },

  submit: function(event){
    event.preventDefault();
    var $form = $(event.currentTarget);
    var formData = $form.serializeJSON().user;

    QuoraClone.currentUser.signIn({
      email: formData.email,
      password: formData.password,
      error: function(){
        alert("Wrong username/password combination. Please try again.");
      }
    });
  },

  signInCallback: function(event){
    $("html div.cover-background-picture").remove();
    if(this.callback) {
      this.callback();
    } else {
      QuoraClone.userCollection.fetch();
      Backbone.history.navigate("", { trigger: true });
    }
  },

  signInDemoUser: function (e) {
    e.preventDefault();
    QuoraClone.currentUser.signIn({
      email: "demo@demo.demo",
      password: "demodemo",
      error: function(){
        alert("Something went wrong. Hire me anyways?");
      }
    });
  }

});
