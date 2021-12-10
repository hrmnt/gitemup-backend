const express = require("express");
const router = express.Router();
const Order = require("../models/order");

const OrderController = require("../controllers/order");

router.post("/create", (req, res, next) => {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log("OFFER", req, fruits.join());

  const order = new Order({
    name: req.body.name,
    surname: req.body.surname,
    phone: req.body.phone,
    email: req.body.email,
    product: req.body.product,
    city: req.body.city,
    address: req.body.address,
    delivery: req.body.delivery,
    items: req.body.items.split(","),
  });

  order
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
});

router.get("/delivery", OrderController.get_delivery);

module.exports = router;
