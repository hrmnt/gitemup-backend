const ShopItem = require("../models/shopItem");
const Delivery = require("../models/delivery");
const Order = require("../models/order");

exports.create_order = (req, res, next) => {
  console.log("OFFER", req.body);

  const order = new Order({
    name: req.body.name,
    surname: req.body.surname,
    phone: req.body.phone,
    email: req.body.email,
    product: req.body.product,
    city: req.body.city,
    address: req.body.address,
    delivery: req.body.delivery,
    items: req.body.items,
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
};

exports.get_delivery = (req, res, next) => {
  Delivery.find()
    .exec()
    .then((docs) => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log("EVENT_GET:", err);
      res.status(500).json({
        error: err,
      });
    });
};
