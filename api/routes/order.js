const express = require("express");
const router = express.Router();

const OrderController = require("../controllers/order");

router.post("/", OrderController.create_order);
router.get("/delivery", OrderController.get_delivery);

module.exports = router;
