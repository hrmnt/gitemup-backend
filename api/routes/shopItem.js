const express = require("express");
const router = express.Router();

const EventController = require("../controllers/shopItems");

router.get("/", EventController.shopItems_get_all);
router.get("/:id", EventController.shopItems_get);

module.exports = router;
