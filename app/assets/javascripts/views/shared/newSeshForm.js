QuoraClone.Views.NewSeshForm = Backbone.CompositeView.extend({
  template: JST['shared/newSeshForm'],

  initialize: function () {
    this.render()
  },

  render: function () {
    this.$el.html(this.template)

    var _signUpView = new QuoraClone.Views.UsersForm({
      model: this.model,
      collection: this.collection
    });

    var _signInView = new QuoraClone.Views.SignIn({
      model: this.model,
      collection: this.collection
    })

    this.addSubview(".sign-up", _signUpView)
    this.addSubview(".sign-in", _signInView)
  }
})
