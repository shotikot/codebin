const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const newBin = require("./controllers/newBin");
const fetchBin = require("./controllers/fetchBin");
const Bin = require("./models/bin");
const recentBins = require("./controllers/recentBins");
const port = process.env.port || 4000;
require("dotenv").config({
  path: __dirname + "/.env",
});

const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true },
  err => {
      if(err) throw err
      console.log('connected to db');
    }
);

router.post('/add-bin', newBin);
router.get('/recent-bins', recentBins);
router.get('/fetch-bin/:filename', fetchBin);
app.use(router);

app.listen(port, () => {
  console.log(`Runing on Port ${port}`);
});
