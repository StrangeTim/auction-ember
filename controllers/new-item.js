Auction.NewItemController = Ember.Controller.extend ({
  actions: {
    save: function() {
      var newItem = this.store.createRecord('item', {
        item-name: this.get('item-name')
      });
      newItem.save();
      this.setProperties({item-name: " "});
      this.transitionToRoute('home');
    }
  }
});
