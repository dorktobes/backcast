var VideoPlayerView = Backbone.View.extend({

  el: '.player',
  
  initialize: function () {
    var thisCollection = this.collection;
    this.render(thisCollection.models[0]);
    this.collection.on('select', this.render, this);
  },

  render: function(model) {
    this.model = model;
    this.el = this.model.attributes.title;
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
