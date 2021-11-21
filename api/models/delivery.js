const mongoose = require("mongoose");

const deliverySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Delivery", deliverySchema);
