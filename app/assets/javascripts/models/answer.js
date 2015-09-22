QuoraClone.Models.Answer = Backbone.Model.extend({
//  _.extend({}, QuoraClone.Mixins.Upvotable, {
    urlRoot: 'api/answers',

    answerComments: function () {
      if (!this._answerComments) {
        this._answerComments = new QuoraClone.Collections.AnswerComments([], {answerComments: this});
      }

      return this._answerComments;
    },

    answerUpvotes: function () {
      if (!this._answerUpvotes) {
        this._answerUpvotes = new QuoraClone.Collections.AnswerUpvotes([], {answerUpvotes: this});
      }

      return this._answerUpvotes;
    },

    parse: function (response) {

      if (response.answer_comments) {
        this.answerComments().set(response.answer_comments);
        delete response.answer_comments;
      }

      if (response.answer_upvotes) {
        this.answerUpvotes().set(response.answer_upvotes);
        delete response.answer_upvotes;
      }

      return response;
    },

    upvote: function () {

      if (!this._upvote) {
        this._upvote = new QuoraClone.Models.AnswerUpvote();
      }

      return this._upvote;
    },

    createUpvote: function (e) {

      var model = this;
      var credentials = {
        "answer_upvote[answer_id]": $(e.currentTarget).data('id'),
        "answer_upvote[user_id]": QuoraClone.currentUser.get('id')
      };

      $.ajax({
        url: "/api/answer_upvotes",
        type: "POST",
        data: credentials,
        dataType: "json",
        success: function(data){
          model.set(data);
        }
      });

    },

    destroyUpvote: function (e) {
      upvote = this.answerUpvotes().findWhere({user_id: QuoraClone.currentUser.get('id')});

      upvote.destroy();
    },

    toggleUpvote: function (e) {

      if (!this.get('has_upvoted')) {
        this.createUpvote(e);
      } else {
        this.destroyUpvote(e);
      }
    },

    updateUpvoteCount: function (delta) {
      this.set("num_upvotes", this.get("num_upvotes") + delta);
    },

    parseUpvote: function (response) {
      // Call this inside the model's #parse method.
      if (response.upvote) {
        this.upvote().set(response.upvote);
        delete response.upvote;
      }
    },


//  })
});
