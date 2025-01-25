const Product = require("../models/product");
const Category = require("../models/category");
const Order = require("../models/order");
exports.getIndex = (req, res, next) => {
  Product.find()
    .then((products) => {
      return products;
    })
    .then((products) => {
      Category.find()
        .then((categories) => {
          res.render("shop/index", {
            title: "Shopping",
            products: products,
            categories: categories,
            path: "/",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
};

exports.getProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      return products;
    })
    .then((products) => {
      Category.find()
        .then((categories) => {
          res.render("shop/products", {
            title: "Products",
            products: products,
            categories: categories,
            path: "/",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
};
exports.getProduct = (req, res, next) => {
  Product.findById(req.params.productid)
    .then((product) => {
      res.render("shop/product-detail", {
        title: product.name,
        product: product,
        path: "/product",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getProductsByCategoryId = (req, res, next) => {
  const categoryId = req.params.categoryid;
  const model = [];
  Category.find()
    .then((categories) => {
      model.categories = categories;
      return Product.find({
        categories: categoryId,
      });
    })
    .then((products) => {
      res.render("shop/products", {
        title: "Products",
        products: products,
        categories: model.categories,
        selectedCategory: categoryId,
        path: "/product",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then((products) => {
      console.log(products);
      res.render("shop/cart", {
        title: "Cart",
        path: "/cart",
        products: products,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postCart = (req, res, next) => {
  const productId = req.body.productId;
  Product.findById(productId)
    .then((product) => {
      return req.user.addToCart(product);
    })
    .then(() => {
      res.redirect("/cart");
    })
    .catch((err) => console.log(err));
};

exports.postCartItemDelete = (req, res, next) => {
  const productId = req.body.productid;

  req.user.deleteCartItem(productId).then((item) => {
    res.redirect("/cart");
  });
};

exports.getOrders = (req, res, next) => {
  req.user
    .getOrders({ include: ["products"] })
    .then((orders) => {
      console.log(orders);
      res.render("shop/orders", {
        title: "Orders",
        path: "/orders",
        orders: orders,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postOrder = (req, res, next) => {
  req.user
    .populate("cart.items.productId")
    .then((user) => {
      const order = new Order({
        user: {
          userId: req.user._id,
          name: req.user.name,
          email: req.user.email,
        },
        items: user.cart.items.map((p) => {
          return {
            product: {
              _id: p.productId._id,
              name: p.productId.name,
              price: p.productId.price,
              imageurl: p.productId.imageurl,
            },
            quantity: p.quantity,
          };
        }),
      });
      return order.save();
    })
    .then(() => {})
    .then(() => {
      res.redirect("/order");
    });
};
