const lodash = require("lodash");

const ShopItem = require("../models/shopItem");

exports.shopItems_get_all = (req, res, next) => {
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

exports.shopItems_get = (req, res, next) => {
  const params = req.params;
  ShopItem.findById(params.id)
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
