var VideoListView = Backbone.View.extend({

  el: '.list',
  
  initialize: function () {
    this.videos = new Videos();
    // this.render();
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    
    for (var i = 0; i < this.collection.length; i++) {
      var thumbnail = new VideoListEntryView({ model: this.collection.models[i] });
      this.$el.children().append(thumbnail.render());
    }
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
