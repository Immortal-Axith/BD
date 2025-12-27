module.exports = (sequelize, Sequelize) => {
  const Prise_list = sequelize.define("prise_list", {
    effective_date: {
      type: Sequelize.DATE
    },
  });
  return Prise_list ;
};