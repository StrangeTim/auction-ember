Auction.Router.map(function() {
  this.resource('items', {path: '/'});
  this.resource('newItem');
  this.resource('item', {path: 'items/:item_id'});
});
