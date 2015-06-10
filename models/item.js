Auction.Item = DS.Model.extend({
  itemName: DS.attr(),
  description: DS.attr(),
  owner: DS.attr(),
  age: DS.attr(),
  imageURL: DS.attr(),
  bidNumber: DS.attr()
});
