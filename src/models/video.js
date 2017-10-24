var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    this.set('title', video.snippet.title);
    this.set('description', video.snippet.description);
    this.set('thumbnailImageURL', video.snippet.thumbnails.default.url);
    this.set('largeThumbnailImageURL', video.snippet.thumbnails.high.url);
    this.set('videoURL', 'https://www.youtube.com/embed/' + this.get('id'));
  },

  select: function() {
    this.trigger('select', this);
  }

});
