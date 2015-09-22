QuoraClone.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.user_topics = QuoraClone.currentUser.topics();
    this.all_topics =  new QuoraClone.Collections.Topics();

    this.questions = new QuoraClone.Collections.Questions();

    this.$rootEl = options.$rootEl;

    this.collection = new QuoraClone.Collections.Users();
    this.collection.fetch();
  },

  routes: {
    '' : 'userFeed',
    'questions' : 'indexQuestions',
    'questions/new' : 'newQuestion',
    'questions/:id' : 'showQuestion',
    "users/new": "newSesh",
    "users/:id": "show",
    "session/new" : "newSesh",
    "topics/new" : "topicSelect"
  },

  topicSelect: function () {
    var callback = this.topicSelect.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var selectTopicView = new QuoraClone.Views.TopicSelect({
      collection: this.all_topics
    });

    this.all_topics.fetch();

    this._swapView(selectTopicView);
  },

  newSesh: function (callback) {
    if (!this._requireSignedOut()) { return; }

    var model = new this.collection.model();
    var newSeshView = new QuoraClone.Views.NewSeshForm({
      callback: callback,
      collection: this.collection,
      model: model
    });

    this._swapView(newSeshView);
  },

  new: function(){
    if (!this._requireSignedOut()) { return; }

    var model = new this.collection.model();
    var formView = new QuoraClone.Views.UsersForm({
      collection: this.collection,
      model: model
    });
    this._swapView(formView);
  },

  show: function(id){
    var callback = this.show.bind(this, id);
    if (!this._requireSignedIn(callback)) { return; }

    var model = this.collection.getOrFetch(id);
    var showView = new QuoraClone.Views.UsersShow({
      model: model
    });

    this._swapView(showView);
  },

  signIn: function(callback){
    if (!this._requireSignedOut(callback)) { return; }

    var signInView = new QuoraClone.Views.SignIn({
      callback: callback,
      collection: this.collection
    });

    this._swapView(signInView);
  },

  userFeed: function () {
    var callback = this.userFeed.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var _feed = new QuoraClone.Views.FeedShow({
      collection: this.user_topics
    });

    QuoraClone.currentUser.fetch();

    this._swapView(_feed);
  },

  indexQuestions: function () {
    var callback = this.indexQuestions.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var _index = new QuoraClone.Views.QuestionsIndex({
      collection: this.questions
    });

    this.questions.fetch();

    this._swapView(_index);
  },

  newQuestion: function () {
    var callback = this.newQuestion.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var _questionNew = new QuoraClone.Views.QuestionNew({
      model: new QuoraClone.Models.Question(),
      collection: this.all_topics
    });

    this.all_topics.fetch();

    this._swapView(_questionNew);
  },

  showQuestion: function (id) {
    var callback = this.showQuestion.bind(this, id);
    if (!this._requireSignedIn(callback)) { return; }

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
  },

  _requireSignedIn: function(callback){
    if (!QuoraClone.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      this.newSesh(callback);
      return false;
    }

    return true;
  },

  _requireSignedOut: function(callback){
    if (QuoraClone.currentUser.isSignedIn()) {
      callback = callback || this._goHome.bind(this);
      callback();
      return false;
    }

    return true;
  },

  _goHome: function(){
    Backbone.history.navigate("", { trigger: true });
  }

});
