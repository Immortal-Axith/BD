const { underscoredIf } = require("sequelize/lib/utils");
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorsAliases: false,
  
  defaine:{
    underscored: true,
  },

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.dish = require("./dish.model.js")(sequelize, Sequelize);
db.dish_group = require("./dish_group.model.js")(sequelize, Sequelize);
db.order = require("./order.model.js")(sequelize, Sequelize);
db.price_list = require("./price_list.model.js")(sequelize, Sequelize);
db.order_item = require("./order_item.model.js")(sequelize, Sequelize);
db.price_list_item = require("./price_list_item.model.js")(sequelize, Sequelize);

require("./references.model.js")(db)

module.exports = db;