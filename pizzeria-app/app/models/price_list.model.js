module.exports = (sequelize, Sequelize) => {
  const Price_list = sequelize.define("price_list", {
    effective_date: {
      type: Sequelize.DATE
    },
  });
  return Price_list ;
};