const express = require("express");
const app = express();
var cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const run = async () => {
  //   mongoose.connect("mongodb://localhost:27017/goviralbackend-test", {
  //     useUnifiedTopology: true,
  //   });
  mongoose.connect(
    "mongodb+srv://hrmnt:Violet925@cluster0.pekpz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  var db = mongoose.connection;

  db.on("connected", () => console.log("SUCCESS CONNECT TO DB"));
  db.on("error", (error) => console.log("ERROR CONNECT TO DB"));

  const adminRoutes = require("./api/routes/admin");
  const shopItem = require("./api/routes/shopItem");
  const order = require("./api/routes/order");

  app.use(morgan("dev"));
  app.use(cors());
  app.use("/admin", adminRoutes);
  app.use("/api/uploads", express.static("uploads"));
  app.use("/api/shopItem", shopItem);
  app.use("/api/order", order);

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
  });

  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  });

  // app.use(adminBro.options.rootPath, router);
  app.listen(8080, () => console.log("AdminBro is under localhost:8080/admin"));
};

run();

module.exports = app;
