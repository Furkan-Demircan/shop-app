const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-app", "root", "KardesPayi", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
