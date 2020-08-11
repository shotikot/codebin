const Bin = require("../models/bin");

const recentBins = async (req, res) => {
    const bins = await Bin.find({private: false}).sort({createdAt: -1}).limit(5);
    res.send(bins);
}

module.exports = recentBins;