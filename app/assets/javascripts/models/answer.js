QuoraClone.Models.Answer = Backbone.Model.extend({
//  _.extend({}, QuoraClone.Mixins.Upvotable, {
    urlRoot: 'api/answers',

    answerComments: function () {
      if (!this._answerComments) {
        this._answerComments = new QuoraClone.Collections.AnswerComments([], {answerComments: this})
      }

      return this._answerComments
    },

    parse: function (response) {

      if (response.answer_comments) {
        this.answerComments().set(response.answer_comments);
        delete response.answer_comments;
      }

      this.parseUpvote(response);

      return response;
    },

    upvote: function () {

      if (!this._upvote) {
        this._upvote = new QuoraClone.Models.AnswerUpvote();
      }

      return this._upvote;
    },

    createUpvote: function (e) {

      this.upvote().set({
        answer_id: $(e.currentTarget).data('id')
      });

      this.upvote().save({}, {
        success: function () {
          this.updateUpvoteCount(1);
        }.bind(this)
      });
    },

    destroyUpvote: function (e) {
      this.upvote().destroy({
        success: function (model) {
          debugger
          model.unset("id");
          this.updateUpvoteCount(-1);
        }.bind(this)
      });
    },

    toggleUpvote: function (e) {
      if (this.upvote().isNew()) {
        this.createUpvote(e);
      } else {
        this.destroyUpvote(e);
      }
    },

    updateUpvoteCount: function (delta) {
      this.set("upvotes", this.get("upvotes") + delta);
    },

    parseUpvote: function (response) {
      // Call this inside the model's #parse method.
      if (response.upvote) {
        this.upvote().set(response.upvote);
        delete response.upvote;
      }
    },


//  })
})
