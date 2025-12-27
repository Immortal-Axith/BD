module.exports = (sequelize, Sequelize) => {
  const Dish = sequelize.define("dish", {
    name: {
      type: Sequelize.STRING,
    },
    article: {
      type: Sequelize.STRING,
    },
    id_dish_group: {
      type: Sequelize.INTEGER,
    },
    ingredients: {
      type: Sequelize.STRING,
    },
    dough_type: {
      type: Sequelize.STRING,
    },
    size: {
      type: Sequelize.DECIMAL,
    },
    description: {
      type: Sequelize.STRING,
    },
  });
  return Dish;
};
