const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const holdingsSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

const HoldingsModel = new mongoose.model("holding", holdingsSchema);

module.exports = HoldingsModel;
