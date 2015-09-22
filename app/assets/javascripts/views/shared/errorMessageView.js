QuoraClone.Views.ErrorMessage = Backbone.View.extend({
  template: JST['shared/errorMessage'],

  initialize: function (options) {
    this.errorText = options.errorText;
    this.render();
  },

  render: function () {
    this.$el.html(this.template({errorText: this.errorText}));
    return this;
  }
});
