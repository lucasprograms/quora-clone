QuoraClone.Views.QuestionNew = Backbone.View.extend({
  template: JST['questions/questionNew'],

  events: {
    'click .submit' : 'submit',
    'click .to-index' : 'toIndex'
  },

  initialize: function () {
    this.listenTo(
      this.model,
      'sync',
      this.render
    );
    this.listenTo(
      this.collection,
      'sync',
      this.render
    );
  },

  render: function () {
    this.$el.html(this.template({
      question: this.model,
      topics: this.collection
     }));
    return this;
  },

  submit: function (e) {
    e.preventDefault();

    this.model.set({
      title: $(title).val(),
      body: $(body).val(),
      topic_ids: [$(topic).val()]
    });

    this.model.save({ }, {

      success: function () {

        var collection = new QuoraClone.Collections.Questions();
        collection.add(this.model, { merge: true });
        Backbone.history.navigate("#/questions/" + this.model.get('id'), {trigger: true});
      }.bind(this)

    });

    return this;
  },

  toIndex: function () {
    Backbone.history.navigate("#", {trigger: true});
  }
});
