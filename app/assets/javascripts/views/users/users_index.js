QuoraClone.Views.UsersIndex = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(this.collection, "sync", this.render);
  },

  template: JST['users/index'],

  render: function(){
    var html = this.template({ users: this.collection });
    this.$el.html(html);

    return this;
  }

});
