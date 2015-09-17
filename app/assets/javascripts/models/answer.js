QuoraClone.Models.Answer = Backbone.Model.extend({
  urlRoot: 'api/answers',

  answerComments: function () {
    if (!this._answerComments) {
      this._answerComments = new QuoraClone.Collections.AnswerComments([], {answerComments: this})
    }

    return this._answerComments
  },

  parse: function (response) {

    if (response.answerComments) {
      this.answerComments().set(response.answerComments);
      delete response.answerComments;
    }

    return response;
  }
})
