module.exports = (sequelize, Sequelize) => {
  const Order_item = sequelize.define("order_item", {
    id_dish: {
      type: Sequelize.INTEGER
    },
    id_order: {
      type: Sequelize.INTEGER
    },
    quanity: {
      type: Sequelize.INTEGER
    },
     order_price: {
      type: Sequelize.INTEGER
    },
  });
  return Order_item ;     
};