const {
  allHoldings,
  allPositions,
  newOrders,
} = require("../controllers/dashboard");
const { signup } = require("../controllers/User");
const router = require("express").Router();

router.get("/allHoldings", allHoldings);
router.get("/allPositions", allPositions);
router.post("/newOrders", newOrders);
router.post("/signup", signup);

module.exports = router;
