module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("order", {
    id_price_list: {
      type: Sequelize.INTEGER
    },
    order_date: {
      type: Sequelize.DATE
    },
    order_time: {
      type: Sequelize.TIME
    },
    total_amount:{
        type: Sequelize.DECIMAL
    }  

  });
  return Order ;     
};