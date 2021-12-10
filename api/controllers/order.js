const ShopItem = require("../models/shopItem");
const Delivery = require("../models/delivery");

exports.create_order = (req, res, next) => {
  console.log(req.body);
  ShopItem.find()
    .populate("size delivery currency collectionCloth clothType gender machine")
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
