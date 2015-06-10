Auction.ItemsRoute = Ember.Route.extend ({
  model: function(params) {
    return this.store.find('item');
  }
});
