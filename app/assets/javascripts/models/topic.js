QuoraClone.Models.Topic = Backbone.Model.extend({
  urlRoot: 'api/topics',

  questions: function () {
    if (!this._questions) {
      this._questions = new QuoraClone.Collections.Questions([], {topic: this});
    }

    return this._questions;
  },

  questionTopics: function () {
    if (!this._questionTopics) {
      this._questionTopics = new QuoraClone.Collections.QuestionTopics([], {question: this});
    }

    return this._questionTopics;
  },

  userTopics: function () {
    if (!this._userTopics) {
      this._userTopics = new QuoraClone.Collections.UserTopics([], {user: this});
    }

    return this._userTopics;
  },

  parse: function (response) {

    if (response.questions) {
      this.questions().set(response.questions, { parse: true });
      delete response.questions;
    }
    if (response.questionTopics) {
      this.questionTopics().set(response.questionTopics, { parse: true });
      delete response.questionTopics;
    }
    if (response.userTopics) {
      this.userTopics().set(response.userTopics, { parse: true });
      delete response.userTopics;
    }
    return response;
  }
});
