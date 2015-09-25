QuoraClone.Views.UserEditBio = Backbone.View.extend({
  template: JST['shared/userBioEdit'],

  initialize: function () {
    this.listenTo(
      QuoraClone.currentUser,
      "sync",
      this.render
    );

  },

  events : {
    'click .submit-bio' : 'submitBio',
    'click .upload-image-button' : 'submitImg',
    'click .attach-image-button' : 'clickFileAttach',
    'change input:file' : 'uploadFileTrigger'
  },

  clickFileAttach: function () {
    $("input#input-image.real-file-upload" ).trigger( "click" );
  },

  uploadFileTrigger: function () {
    $(".upload-image-button" ).trigger( "click" );
    $(".status-msg-img").text("Successsssssss");
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
        "user[bio]" : $(".user-bio-textarea").val()
      },
      dataType: "json",
      success: function(data) {
        QuoraClone.currentUser.set(data);
        $(".status-msg-bio").text("Bio Updated!");
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
        QuoraClone.currentUser.fetch();
      }
    });
  }


});
