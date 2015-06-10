Auction.NewItemController = Ember.Controller.extend ({
  actions: {
    save: function() {
      var newItem = this.store.createRecord('item', {
        itemName: this.get('itemName'),
        description: this.get('description'),
        owner: this.get('owner'),
        age: this.get('age'),
        imageURL: this.get('imageURL')
      });
      newItem.save();
      // var bidNumber = this.id;
      // newItem({bidNumber: bidNumber});
      this.setProperties({itemName: " ", description: " ", owner: " ", age: " ", imageURL: " "});
      this.transitionToRoute('items');
    }
  }
});
