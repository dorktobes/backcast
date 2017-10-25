
var Videos = Backbone.Collection.extend({

  model: Video,
  search: function (query) {
    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        part: 'snippet',
        key: YOUTUBE_API_KEY, 
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: true,
//        chart: 'mostPopular'
      },    
      success: function (data) {
        // var videos = new Videos(data);
        console.log('got data', data);
      },
      error: function (data) {
        console.log('no data received', data);
      },
    });
  },
});
