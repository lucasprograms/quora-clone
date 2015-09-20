// Models extending this module must have a `upvotableOptions` property pointing
// to an object with the following attributes:
//   foreignKey (e.g., "answer_id")

// QuoraClone.Mixins.Upvotable = {
//
//   upvote: function () {
//     if (!this._upvote) {
//       this._upvote = new QuoraClone.Models.AnswerUpvote();
//     }
//     return this._upvote;
//   },
//
//   createUpvote: function () {
//     this.upvote().set(this.upvotableOptions.foreignKey, this.id);
//     this.upvote().save({}, {
//       success: function () {
//         this.updateUpvoteCount(1);
//       }.bind(this)
//     });
//   },
//
//   destroyUpvote: function () {
//     this.upvote().destroy({
//       success: function (model) {
//         model.unset("id");
//         this.updateUpvoteCount(-1);
//       }.bind(this)
//     });
//   },
//
//   toggleUpvote: function () {
//     if (this.upvote().isNew()) {
//       this.createUpvote();
//     } else {
//       this.destroyUpvote();
//     }
//   },
//
//   updateUpvoteCount: function (delta) {
//     this.set("upvotes", this.get("upvotes") + delta);
//   },
//
//   parseUpvote: function (response) {
//     // Call this inside the model's #parse method.
//     if (response.upvote) {
//       this.upvote().set(response.upvote);
//       delete response.upvote;
//     }
//   }
// }
