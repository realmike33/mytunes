// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  // initialize: function() {
  //   console.log(this);
  // },
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
        // console.log('SongModel - Playing: ' + this.attributes.title);

  },
  enqueue: function() {
    this.trigger('enqueue', this);
    // console.log('SongModel - In the queue: ' + this.attributes.title);
  },
  dequeue: function() {
    this.trigger('dequeue', this);
    // console.log('SongModel - Dequeued: ' + this.attributes.title);
  },
  ended: function() {
    this.trigger('ended', this);
    // console.log('SongModel - Ended: ' + this.attributes.title);

  }

});
