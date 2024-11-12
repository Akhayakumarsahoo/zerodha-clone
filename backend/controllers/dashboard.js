const HoldingsModel = require("../models/Holdings");
const PositionsModel = require("../models/Positions");
const OrdersModel = require("../models/Orders");

module.exports.allHoldings = async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
};

module.exports.allPositions = async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
};

module.exports.newOrders = async (req, res) => {
  let newOrders = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrders.save();
  res.send("Order saved");
};
