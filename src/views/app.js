var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.on('reset', this.render, this);
    // this.render();    
  },

  render: function() {
    this.$el.html(this.template());
    new SearchView();
    if (this.videos.length > 0) {
      console.log(this.videos);
      new VideoPlayerView({ collection: this.videos});    
      var videoListView = new VideoListView({collection: this.videos});  
      videoListView.render();   
    }
    return this;
  },

  template: templateURL('src/templates/app.html')

});
