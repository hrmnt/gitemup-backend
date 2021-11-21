const mongoose = require("mongoose");

const clothType = mongoose.Schema({
  name_ru: {
    type: String,
    required: true,
  },
  name_en: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ClothType", clothType);
