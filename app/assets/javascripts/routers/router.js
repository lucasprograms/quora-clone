QuoraClone.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.user_topics = QuoraClone.currentUser.topics();
    this.all_topics =  new QuoraClone.Collections.Topics();

    this.questions = new QuoraClone.Collections.Questions();
    this.answers = new QuoraClone.Collections.Answers();

    this.$rootEl = options.$rootEl;

    this.collection = new QuoraClone.Collections.Users();
  },

  routes: {
    '' : 'userFeed',
    '_=_' : 'fbLanding',
    'questions' : 'indexQuestions',
    'questions/new' : 'newQuestion',
    'questions/:id' : 'showQuestion',
    "users/new": "newSesh",
    "users/:id": "show",
    "session/new" : "newSesh",
    "topics/new" : "topicSelect",
    "search/:query" : "search",
    "answers/:id" : "showQuestionAnswer",
    "user/bio" : "editBio"
  },

  editBio: function () {
    var callback = this.editBio.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var _userBio = new QuoraClone.Views.UserEditBio();

    this._swapView(_userBio);
  },

  search: function (query) {
    var callback = this.search.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var _searchView = new QuoraClone.Views.Search({
      query: query
    });

    this._swapView(_searchView);
  },

  topicSelect: function () {
    var callback = this.topicSelect.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var topics = new QuoraClone.Collections.Topics();
    topics.fetch();

    var selectTopicView = new QuoraClone.Views.TopicSelect({
      collection: topics
    });

    this._swapView(selectTopicView);
  },

  newSesh: function (callback) {
    if (!this._requireSignedOut()) { return; }

    var model = new QuoraClone.userCollection.model();

    var newSeshView = new QuoraClone.Views.NewSeshForm({
      callback: callback,
      collection: QuoraClone.userCollection,
      model: model
    });

    this._swapView(newSeshView);
  },

  new: function(){
    if (!this._requireSignedOut()) { return; }

    var model = new QuoraClone.userCollection.model();
    var formView = new QuoraClone.Views.UsersForm({
      collection: QuoraClone.userCollection,
      model: model
    });
    this._swapView(formView);
  },

  show: function(id){
    var callback = this.show.bind(this, id);
    if (!this._requireSignedIn(callback)) { return; }

    var model = QuoraClone.userCollection.getOrFetch(id);

    var showView = new QuoraClone.Views.UsersShow({
      model: model
    });

    this._swapView(showView);
  },

  fbLanding: function () {
    var callback = this.fbLanding.bind(this);
    if (!this._requireSignedIn(callback)) { return; }

    var _landing = new QuoraClone.Views.fbLanding();
    QuoraClone.currentUser.fetch();

    this._swapView(_landing);
  },

  signIn: function(callback){
    if (!this._requireSignedOut(callback)) { return; }

    var signInView = new QuoraClone.Views.SignIn({
      callback: callback,
      collection: QuoraClone.userCollection
    });

    this._swapView(signInView);
  },

  userFeed: function () {
    if (!QuoraClone.currentUser.get('has_ever_logged_in')) {
      Backbone.history.navigate("_=_", { trigger: true });
    } else {
      var callback = this.userFeed.bind(this);
      if (!this._requireSignedIn(callback)) { return; }

      var _feed = new QuoraClone.Views.FeedShow({
        collection: this.user_topics
      });

      QuoraClone.currentUser.fetch();

      this._swapView(_feed);
    }
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
      topics: this.all_topics,
      model: question,
      users: QuoraClone.userCollection
    });

    this._swapView(_questionShow);
  },

  showQuestionAnswer: function (id) {
    var callback = this.showQuestionAnswer.bind(this, id);
    if (!this._requireSignedIn(callback)) { return; }

    var answer = this.answers.getOrFetch(id);

    var _questionAnswerShow = new QuoraClone.Views.QuestionAnswerItemView({
      answer: answer
    });

    this._swapView(_questionAnswerShow);
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
