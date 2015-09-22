QuoraClone.Models.Question = Backbone.Model.extend({
  urlRoot: 'api/questions',

  answers: function () {
    if (!this._answers) {
      this._answers = new QuoraClone.Collections.Answers([], {question: this});
    }

    return this._answers;
  },

  topics: function () {
    if (!this._topics) {
      this._topics = new QuoraClone.Collections.Topics([], {question: this});
    }

    return this._topics;
  },

  author: function () {
    if (!this._author) {
      this._author = new QuoraClone.Models.User();
    }

    return this._author;
  },

  parse: function (response) {

    if (response.answers) {
      this.answers().set(response.answers, { parse: true });
      delete response.answers;
    }

    if (response.topics) {
      this.topics().set(response.topics, { parse: true });
      delete response.topics;
    }

    if (response.author) {
      this.author().set(response.author, { parse: true });
      delete response.author;
    }

    return response;
  },

  toJSON: function() {
    return {question: _.clone(this.attributes)};
  }

});
