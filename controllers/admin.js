const Product = require("../models/product");
const Category = require("../models/category");
exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      console.log(products[0]);
      res.render("admin/products", {
        title: "Admin Products",
        products: products,
        path: "/admin/products",
        action: req.query.action,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAddProduct = (req, res, next) => {
  Category.findAll().then((categories) => {
    res.render("admin/add-product", {
      title: "New Product",
      path: "/admin/add-product",
      categories: categories,
    });
  });
};

exports.postAddProduct = (req, res, next) => {
  const name = req.body.name;
  const price = req.body.price;
  const imageurl = req.body.imageurl;
  const description = req.body.description;
  const categoryid = req.body.categoryid;
  const user = req.user;

  user
    .createProduct({
      name: name,
      price: price,
      imageurl: imageurl,
      description: description,
      categoryId: categoryid,
    })
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  Product.findByPk(req.params.productid)
    .then((product) => {
      if (!product) {
        return res.redirect("/");
      }
      Category.findAll()
        .then((categories) => {
          res.render("admin/edit-product", {
            title: "Edit Product",
            path: "/admin/products",
            product: product,
            categories: categories,
          });
        })
        .catch(console.log(err));
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postEditProduct = (req, res, next) => {
  const id = req.body.id;
  const name = req.body.name;
  const price = req.body.price;
  const description = req.body.description;
  const imageurl = req.body.imageurl;
  const categoryid = req.body.categoryid;

  Product.findByPk(id)
    .then((product) => {
      product.name = name;
      product.price = price;
      product.description = description;
      product.imageurl = imageurl;
      product.categoryId = categoryid;
      return product.save();
    })
    .then((result) => {
      console.log("updated");
      res.redirect("/admin/products?action=edit");
    })
    .catch((err) => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const id = req.body.productid;
  Product.destroy({ where: { id: id } })
    .then(res.redirect("/admin/products?action=delete"))
    .catch((err) => {
      console.log(err);
    });
};
