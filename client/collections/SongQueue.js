// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.counter = 0;

  },

  playFirst: function() {
    if (this.counter < 1) {
      console.log(this);
      this.at(0).play();
    }

  }
  // change currentSong to nextSong when currenSong ends.  This should fire an event and autoplay next one

  // enqueue: function() {

  // }

});
