const barterService = require('../services/barterService');

exports.getAllBarters = async (req, res) => {
  try {
    const barters = await barterService.listAllBarters();
    res.json({ success: true, data: barters });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.postBarter = async (req, res) => {
  try {
    const barter = await barterService.addNewBarter(req.body);
    res.json({ success: true, data: barter });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.findMatch = async (req, res) => {
  try {
    const { item } = req.params;
    const matches = await barterService.searchBarterMatches(item);
    res.json({ success: true, data: matches });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
