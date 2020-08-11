const Bin = require("../models/bin");

const fetchBin = async (req, res) => {
    const code = await Bin.findOne({filename: req.params.filename});
    if(code){
        return res.send(code)
    }
    return res.status(404).send("Not Found");
}

module.exports = fetchBin;