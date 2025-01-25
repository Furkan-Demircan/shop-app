const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/shop");

const mongoose = require("mongoose");

const User = require("./models/user");

const errorController = require("./controllers/errors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", "./views");

app.use((req, res, next) => {
  User.findOne({ name: "furkan" })
    .then((user) => {
      req.user = user;
      console.log(req.user);
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

//routes
app.use("/admin", adminRoutes);
app.use(userRoutes);
app.use(errorController.get404Page);

mongoose
  .connect("mongodb://localhost/node-app")
  .then(() => {
    console.log("connected mongo db");

    User.findOne({ name: "furkan" })
      .then((user) => {
        if (!user) {
          user = new User({
            name: "furkan",
            mail: "furkan@gmail.com",
            cart: { items: [] },
          });
          return user.save();
        }
        return user;
      })
      .then((user) => {
        console.log(user);
        app.listen(3000);
      });
  })
  .catch((err) => {
    console.log(err);
  });
