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
      var thumbnail = new VideoListEntryView({ model: this.videos.models[i] });
      thumbnailHTML = thumbnail.render();
      console.log(thumbnail);
      this.$el.children().append(thumbnailHTML);
    }
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
