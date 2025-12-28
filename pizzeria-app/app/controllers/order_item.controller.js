const { where } = require("sequelize");
const db = require("../models");
const Order_item = db.order_item;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.quanity) {
    res.status(400).send({
      message: "Connect can not be empty",
    });
    return;
  }
  const order_item = {
    id_dish: req.body.id_dish,
    id_order: req.body. id_order,
    quanity: req.body.quanity,
    order_price: req.body.order_price
  };
  Order_item.create(order_item)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred whil creating Order_item",
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  Order_item.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ошибка",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Order_item.findByPk(id)
  .then(data => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `canon find Order_item with id=${id}.`,
      });
    }
  })
  .catch(err => {
    res.status(500).send({
        message:  "Ошибка" + id,
      });
  });

};

exports.update = (req, res) =>{
  const id = req.params.id;
  Order_item.update(req.body, {
    where: {id: id}
  })
  .then(nam =>{
    if (nam == 1){
      res.send({
        message: "Order_item was this.updatesuccessfully"
      });
    }else {
      res.send({
        message: `cannot update Order_item with id = ${id}. 
        Maybe Order_item was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message:"Error updating Order_item with id "+ id
    });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Order_item.destroy({
    where: {id: id}
  })
  .then(nam =>{
    if (num == 1){
      res.send({
        messege: "ProdIsOnSales was deleted successfully!"
      });
    }else {
      res.send({
        message: `cannot delete Order_item with id = ${id}. 
        Maybe Order_item was not found`
      })
    }
  })
  .catch(err => {
     res.status(500).send({
      message:"Could not delete Order_item with id "+ id
    });
  })
};

exports.deleteAll = (req, res) => {
  Order_item.destroy({
    where:{},
    truncate: false
  })
    .then(nams => {
      res.send({
        message: `${nams} Order_item were deleted successfully! `
      });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred whil creating Order_item",
      });
    });
};
