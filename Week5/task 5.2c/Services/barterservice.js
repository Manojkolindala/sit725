const Barter = require('../models/barterModel');

module.exports = {
  listAllBarters: async () => {
    return await Barter.find();
  },

  addNewBarter: async (barterData) => {
    const barter = new Barter(barterData);
    return await barter.save();
  },

  searchBarterMatches: async (itemName) => {
    return await Barter.find({ item: { $regex: itemName, $options: 'i' } });
  }
};
