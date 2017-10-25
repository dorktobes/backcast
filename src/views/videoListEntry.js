var VideoListEntryView = Backbone.View.extend({
  
  initialize: function () {
    // this.model.on('change', this.render, this);
    var model = this.model;
    // this.$el.on('click', function () { new VideoPlayerView({model: model}); });
    // this.render();
    this.$el.on('click', this.model.select.bind(this.model));
  },
  render: function() {
    // debugger;
    this.el = this.model.attributes.title;
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
