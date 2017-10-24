var VideoListView = Backbone.View.extend({

  el: '.list',
  
  initialize: function () {
    this.videos = new Videos(exampleVideoData);
    console.log(this.videos);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    for (var i = 0; i < this.videos.length; i++) {
      var thumbnailHTML = new VideoListEntryView({ model: this.videos.models[i] });
      thumbnailHTML = thumbnailHTML.render();
      console.log(thumbnailHTML);
      this.$el.children().append(thumbnailHTML);
    }
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
