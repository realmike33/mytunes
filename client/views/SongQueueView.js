// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.entry = new SongQueueEntryView();
  },

  render: function() {
    this.entry.render();
    return this.$el;
  }

});
