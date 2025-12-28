module.exports = (sequelize, Sequelize) => {
  const Dish_group = sequelize.define("dish_group", {
    name: {
      type: Sequelize.STRING
    },
    
    id_parent_group: {
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.STRING
    },
  });
  return Dish_group ;
};
