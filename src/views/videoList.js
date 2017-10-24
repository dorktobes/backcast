var VideoListView = Backbone.View.extend({

  el: '.list',
  
  initialize: function () {
    this.videos = new Videos(exampleVideoData);
    console.log(this.videos);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.videos.forEach(function (videoElement) {
      console.log('here is video element: ', videoElement);
      var currentView = new VideoListEntryView(videoElement);
      // this.$el.append(currentView);
    });
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
