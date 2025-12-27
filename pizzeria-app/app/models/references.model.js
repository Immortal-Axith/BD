module.exports = (db) => {
  // Связь dish_group (самореференс)
   db.dish_group.belongsTo(db.dish_group, { foreignKey: "id_parent_group"});

  // Связь dish -> dish_group
  db.dish.belongsTo(db.dish_group,{ foreignKey: "id_dish_group"});
  
  // Связи price_list_item
    db.price_list_item.belongsTo(db.dish,{ foreignKey: "id_dish"});
    db.price_list_item.belongsTo(db.prise_list,{foreignKey: "id_price_list"} );

  // Связь order -> prise_list
  db.order.belongsTo(db.prise_list,{ foreignKey: "id_price_list"});

  // Связи order_item  
  db.order_item.belongsTo(db.order,{ foreignKey: "id_order"});
  db.order_item.belongsTo(db.dish,{ foreignKey: "id_dish"});
};