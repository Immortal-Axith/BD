module.exports = (sequelize, Sequelize)=>{
    const Price_list_item = sequelize.define("price_list_item",{
        id_price_list:{
            type: Sequelize.INTEGER
        },
        id_dish:{
            type: Sequelize.INTEGER
        },

        price:{
            type: Sequelize.DECIMAL
        }

    });
  return Price_list_item ;
};