QuoraClone.Views.SelectTopic = Backbone.CompositeView.extend({
  template: JST['topics/selectTopic'],

  initialize: function () {
    this.listenTo(
      this.collection,
      'sync',
      this.render
    )
  },

  events : {
    'click submit' : 'submit'
  },

  render () {
    this.$el.html(this.template({collection: this.collection}));
    return this;
  },

  submit: function () {
    debugger
  }
})
