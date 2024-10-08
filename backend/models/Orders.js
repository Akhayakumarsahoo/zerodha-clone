const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});

const OrdersModel = mongoose.model("order", OrdersSchema);

module.exports = OrdersModel;
