const express = require("express");
const router = express.Router();
const Order = require("../models/order");

const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: "la.dehram@gmail.com",
    pass: "Dada1212",
  },
});

const OrderController = require("../controllers/order");

router.post("/create", (req, res, next) => {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log("OFFER", req, fruits.join());

  const order = new Order({
    name: req.body.name,
    surname: req.body.surname,
    phone: req.body.phone,
    email: req.body.email,
    product: req.body.product,
    city: req.body.city,
    address: req.body.address,
    delivery: req.body.delivery,
    items: req.body.items.split(","),
  });

  order
    .save()
    .then((result) => {
      transporter.sendMail(
        {
          to: "hitemup.store@gmail.com",
          subject: "У вас новый заказ!",
        },
        (error, info) => {
          if (error) {
            res.status(500).json({
              error,
            });
          }
        }
      );
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      });
    });
});

router.get("/delivery", OrderController.get_delivery);

module.exports = router;
