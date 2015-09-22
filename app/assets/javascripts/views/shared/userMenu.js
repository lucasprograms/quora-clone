QuoraClone.Views.UserMenu = Backbone.View.extend({
  template: JST['shared/userMenu'],

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(this.template({user: this.model}));
    return this;
  }
});
