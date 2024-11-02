const Sequelize = require("sequelize");

const sequelize = require("../utility/database");

const OrderItem = sequelize.define("orderItem", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  quantity: Sequelize.INTEGER,
  price: Sequelize.DOUBLE,
});

module.exports = OrderItem;
