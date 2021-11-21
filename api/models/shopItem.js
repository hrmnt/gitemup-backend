const mongoose = require("mongoose");

const clothSchem = mongoose.Schema({
  name_ru: {
    type: String,
    required: true,
  },
  name_en: {
    type: String,
    required: true,
  },
});

const placeSchema = mongoose.Schema({
  name_ru: {
    type: String,
    required: true,
  },
  name_en: {
    type: String,
    required: true,
  },
  description_ru: {
    type: String,
    required: true,
  },
  description_en: {
    type: String,
    required: true,
  },
  gender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Gender",
  },
  uniqueSize: {
    type: String,
    required: true,
  },
  machine: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Machine",
  },
  collectionCloth: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CollectionCloth",
  },
  clothType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ClothType",
  },
  size: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Size",
    required: false,
  },
  delivery: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Delivery",
    required: false,
  },
  cloth: {
    type: [clothSchem],
  },
  currency: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Currency",
  },
  video: {
    type: String,
  },
  price: {
    type: String,
  },
  modelHeightMan: {
    type: String,
  },
  modelHeightGirl: {
    type: String,
  },
  images: {
    type: [String],
  },
  newStock: {
    type: Boolean,
  },
  stock: {
    type: Boolean,
  },
  order: {
    type: Boolean,
  },
  soldOut: {
    type: Boolean,
  },
});

module.exports = mongoose.model("ShopItem", placeSchema);
