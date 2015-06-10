Auction.NewItemController = Ember.Controller.extend ({
  actions: {
    save: function() {
      var newItem = this.store.createRecord('item', {
        itemName: this.get('itemName'),
        description: this.get('description')
      });
      newItem.save();
      this.setProperties({itemName: " ", description: " "});
      this.transitionToRoute('items');
    }
  }
});
