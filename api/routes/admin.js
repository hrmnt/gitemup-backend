const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");
const AdminBroMongoose = require("@admin-bro/mongoose");
const AdminBroSequelizejs = require("@admin-bro/sequelize");

AdminBro.registerAdapter(AdminBroMongoose);
AdminBro.registerAdapter(AdminBroSequelizejs);

const ShopItem = require("../models/shopItem");
const ShopItemOptions = require("../models/shopItem.option");

const Delivery = require("../models/delivery");
const Size = require("../models/size");
const Currency = require("../models/currency");
const CollectionCloth = require("../models/collection");
const ClothType = require("../models/clothType");
const Gender = require("../models/gender");
const Machine = require("../models/machine");

const contentNavigation = {
  name: "",
  icon: "",
};

const AdminBroOptions = {
  resources: [
    {
      resource: ShopItem,
      customLabel: "Продукты",
      options: { ...ShopItemOptions, navigation: contentNavigation },
    },
    {
      resource: Delivery,
      customLabel: "Продукты",
      options: { navigation: contentNavigation },
    },
    {
      resource: Size,
      customLabel: "Продукты",
      options: { navigation: contentNavigation },
    },
    {
      resource: Currency,
      options: { navigation: contentNavigation },
    },
    {
      resource: CollectionCloth,
      options: { navigation: contentNavigation },
    },
    {
      resource: ClothType,
      options: { navigation: contentNavigation },
    },
    {
      resource: Gender,
      options: { navigation: contentNavigation },
    },
    {
      resource: Machine,
      options: { navigation: contentNavigation },
    },
  ],
};

const adminBro = new AdminBro(AdminBroOptions);

adminBro.watch();

const router = AdminBroExpress.buildRouter(adminBro);

module.exports = router;
