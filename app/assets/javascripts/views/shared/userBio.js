QuoraClone.Views.UserBio = Backbone.View.extend({
  template: JST['shared/userBio'],

  initialize: function () {
    this.listenTo(
      QuoraClone.currentUser,
      "sync",
      this.render
    );
  },

  events : {
    'click .submit-bio' : 'submitBio',
    'click .attach-image' : 'submitImg'
  },

  render: function () {
    this.$el.html(this.template({
      bio: QuoraClone.currentUser.get('bio'),
      img: QuoraClone.currentUser.get('avatar')
    }));
    return this;
  },

  submitBio: function (e) {
    e.preventDefault();
    $(".status-msg").empty();

    $.ajax({
      url: "/api/users/" + QuoraClone.currentUser.get('id'),
      type: "PATCH",
      data: {
        "user[bio]" : $(".user-bio").val()
      },
      dataType: "json",
      success: function(data) {
        QuoraClone.currentUser.set(data);
        $(".status-msg").text("Bio Updated!");
      }
    });
  },

  submitImg: function (e) {
    e.preventDefault();
    $(".status-msg").empty();

    var file = this.$("#input-image")[0].files[0];
    var formData = new FormData();
    formData.append('user[avatar]', file);
    var that = this;
    QuoraClone.currentUser.saveFormData(formData, {
      success: function () {
        $(".status-msg").text("Avatar Updated!");
        QuoraClone.currentUser.fetch();
      }
    });
  }


});
