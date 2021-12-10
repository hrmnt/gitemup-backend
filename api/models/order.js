const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  delivery: {
    type: String,
    required: true,
  },
  items: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "ShopItem",
  },
});

module.exports = mongoose.model("Order", orderSchema);
