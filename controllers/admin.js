const Product = require("../models/product");
const Category = require("../models/category");
const category = require("../models/category");

exports.getProducts = (req, res, next) => {
  Product.find()
    .populate("userId")
    .select("name price userId imageurl")
    .then((products) => {
      console.log(products);
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
  Category.find().then((categories) => {
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
  const categories = req.body.categoryids;

  const product = new Product({
    name: name,
    price: price,
    imageurl: imageurl,
    description: description,
    categories: categories,
    userId: req.user,
  });
  product
    .save()
    .then((result) => {
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  Product.findById(req.params.productid)
    .then((product) => {
      return product;
    })
    .then((product) => {
      Category.find().then((categories) => {
        categories = categories.map((category) => {
          if (product.categories) {
            product.categories.find((item) => {
              if (item.toString() === category._id.toString()) {
                category.selected = true;
              }
            });
          }
          return category;
        });

        res.render("admin/edit-product", {
          title: "Edit Product",
          path: "/admin/products",
          product: product,
          categories: categories,
        });
      });
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
  const ids = req.body.categoryids;

  Product.findById(id)
    .then((product) => {
      product.name = name;
      product.price = price;
      product.description = description;
      product.imageurl = imageurl;
      product.categories = ids;
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
  Product.deleteOne({ _id: id })
    .then(res.redirect("/admin/products?action=delete"))
    .catch((err) => {
      console.log(err);
    });
};

exports.getCategories = (req, res, next) => {
  Category.find()
    .then((categories) => {
      res.render("admin/categories", {
        title: "Categories",
        path: "/admin/categories",
        categories: categories,
        action: req.query.action,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAddCategory = (req, res, next) => {
  res.render("admin/add-category", {
    title: "add-category",
    path: "/admin/add-category",
    action: req.query.action,
  });
};

exports.postAddCategory = (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;

  const category = new Category({ name: name, description: description });
  category
    .save()
    .then(() => {
      res.redirect("/admin/categories?action=create");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEditCategory = (req, res, next) => {
  Category.findById(req.params.categoryid).then((category) => {
    res.render("admin/edit-category", {
      title: "Edit Category",
      path: "/admin/categories",
      category: category,
    });
  });
};

exports.postEditCategory = (req, res, next) => {
  const id = req.body.id;
  const name = req.body.name;
  const description = req.body.description;

  Category.findById(id)
    .then((category) => {
      category.name = name;
      category.description = description;
      return category.save();
    })
    .then(res.redirect("/admin/categories?action=edit"))
    .catch((err) => {
      console.log(err);
    });
};

exports.postDeleteCategory = (req, res, next) => {
  const id = req.body.categoryid;
  Category.deleteOne({ _id: id })
    .then(() => {
      res.redirect("/admin/categories?action=delete");
    })
    .catch((err) => {
      console.log(err);
    });
};
