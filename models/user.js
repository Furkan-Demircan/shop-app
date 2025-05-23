const Product = require("./product");
const mongoose = require("mongoose");
const getDb = require("../utility/database");
const mongodb = require("mongodb");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  cart: {
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
});

userSchema.methods.addToCart = function (product) {
  const index = this.cart.items.findIndex((cp) => {
    return cp.productId.toString() === product._id.toString();
  });
  const updatedCartItems = [...this.cart.items];

  let itemQuantity = 1;
  if (index >= 0) {
    itemQuantity = this.cart.items[index].quantity + 1;
    updatedCartItems[index].quantity = itemQuantity;
  } else {
    updatedCartItems.push({
      productId: new mongodb.ObjectId(product._id),
      quantity: itemQuantity,
    });
  }
  this.cart = {
    items: updatedCartItems,
  };

  return this.save();
};

userSchema.methods.getCart = function () {
  const ids = this.cart.items.map((i) => {
    return i.productId;
  });

  return Product.find({
    _id: {
      $in: ids,
    },
  })
    .select("name price imageurl")
    .then((products) => {
      return products.map((p) => {
        return {
          name: p.name,
          price: p.price,
          imageurl: p.imageurl,
          quantity: this.cart.items.find((i) => {
            return i.productId.toString() === p._id.toString();
          }).quantity,
        };
      });
    });
};

userSchema.methods.deleteCartItem = function (productid) {
  const cartItems = this.cart.items.filter((item) => {
    item.productId.toString() !== productid.toString();
  });
  this.cart.items = cartItems;
  return this.save();
};

module.exports = mongoose.model("User", userSchema);
