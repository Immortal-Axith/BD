const { where, QueryTypes } = require("sequelize");
const db = require("../models");
const Order = db.order;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.sale_date) {
    res.status(400).send({
      message: "Connect can not be empty",
    });
    return;
  }
  const order = {
    id_price_list: req.body.id_price_list,
    order_date: req.body.order_date,
    order_time: req.body.order_time,
    total_amount: req.body.total_amount
  };
  Order.create(order)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred whil creating Order",
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  Order.findAll({ where: condition })
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
  Order.findByPk(id)
  .then(data => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `canon find Order with id=${id}.`,
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
  Order.update(req.body, {
    where: {id: id}
  })
  .then(nam =>{
    if (nam == 1){
      res.send({
        message: "Order was this.updatesuccessfully"
      });
    }else {
      res.send({
        message: `cannot update Order with id = ${id}. 
        Maybe Order was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message:"Error updating Order with id "+ id
    });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Order.destroy({
    where: {id: id}
  })
  .then(nam =>{
    if (num == 1){
      res.send({
        messege: "Sales was deleted successfully!"
      });
    }else {
      res.send({
        message: `cannot delete Order with id = ${id}. 
        Maybe Order was not found`
      })
    }
  })
  .catch(err => {
     res.status(500).send({
      message:"Could not delete Order with id "+ id
    });
  })
};

exports.deleteAll = (req, res) => {
  Order.destroy({
    where:{},
    truncate: false
  })
    .then(nams => {
      res.send({
        message: `${nams} Order were deleted successfully! `
      });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred whil creating Order",
      });
    });
};

exports.orderWithDish = (req, res) => {
  const id = req.params.id;
  db.sequelize.query(`SELECT s.*, p.name as product_name, pis.quanity FROM sales s 
   JOIN prod_is_on_sales pis ON s.id = pis.id_sale  JOIN products p ON pis.id_product = p.id WHERE s.id = ${id}`, {
    type: QueryTypes.SELECT,
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ошибка при получении данных продажи",
      });
    });
};