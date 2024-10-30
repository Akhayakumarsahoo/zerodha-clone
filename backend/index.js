require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

const mongoose = require("mongoose");
const HoldingsModel = require("./models/Holdings");
const PositionsModel = require("./models/Positions");
const OrdersModel = require("./models/Orders");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

app.get("/api/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/api/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/api/newOrders", async (req, res) => {
  let newOrders = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrders.save();
  res.send("Order saved");
});

app.listen(PORT, () => {
  console.log(`App is listining to port http://localhost:${PORT}`);
  mongoose.connect(uri);
  console.log("Connected to DB!");
});
