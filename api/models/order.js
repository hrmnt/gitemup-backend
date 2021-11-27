const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  shopItem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ShopItem",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
