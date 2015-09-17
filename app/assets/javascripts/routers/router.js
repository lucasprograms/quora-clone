QuoraClone.Routers.Router = Backbone.Router.extend({
  initialize: function () {
    this.topics = new QuoraClone.Collections.Topics();
    this.questions = new QuoraClone.Collections.Questions()
    this.$rootEl = $('div#main');
  },

  routes: {
    '' : 'userFeed',
    'questions' : 'indexQuestions',
    'questions/new' : 'newQuestion',
    'questions/:id' : 'showQuestion'
  },

  userFeed: function () {
    var _feed = new QuoraClone.Views.FeedShow({
      collection: this.topics
    });

    this.topics.fetch();

    this._swapView(_feed);
  },

  indexQuestions: function () {
    var _index = new QuoraClone.Views.QuestionsIndex({
      collection: this.questions
    });

    this.questions.fetch();

    this._swapView(_index);
  },

  newQuestion: function () {
    var _questionNew = new QuoraClone.Views.QuestionNew({
      model: new QuoraClone.Models.Question(),
      collection: this.topics
    });

    this.topics.fetch();

    this._swapView(_questionNew)
  },

  showQuestion: function (id) {
    var question = this.questions.getOrFetch(id);

    var _questionShow = new QuoraClone.Views.QuestionShow({
      model: question
    });

    this._swapView(_questionShow);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }

})
