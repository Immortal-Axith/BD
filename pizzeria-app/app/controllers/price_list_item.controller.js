const { where, QueryTypes } = require("sequelize");
const db = require("../models");
const Price_list_item = db.price_list_item;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.price) {
    res.status(400).send({
      message: "Connect can not be empty",
    });
    return;
  }
  const price_list_item = {
    id_price_list: req.body.id_price_list,
    id_dish: req.body.id_dish,
    price: req.body.price,
    
  };
  Price_list_item.create(price_list_item)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred whil creating Price_list_item",
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  Price_list_item.findAll({ where: condition })
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
  Price_list_item.findByPk(id)
  .then(data => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `canon find Price_list_item with id=${id}.`,
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
  Price_list_item.update(req.body, {
    where: {id: id}
  })
  .then(nam =>{
    if (nam == 1){
      res.send({
        message: "Price_list_item was this.updatesuccessfully"
      });
    }else {
      res.send({
        message: `cannot update Price_list_item with id = ${id}. 
        Maybe Price_list_item was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message:"Error updating Price_list_item with id "+ id
    });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Price_list_item.destroy({
    where: {id: id}
  })
  .then(nam =>{
    if (num == 1){
      res.send({
        messege: "ProdInListPrices was deleted successfully!"
      });
    }else {
      res.send({
        message: `cannot delete Price_list_item with id = ${id}. 
        Maybe Price_list_item was not found`
      })
    }
  })
  .catch(err => {
     res.status(500).send({
      message:"Could not delete Price_list_item with id "+ id
    });
  })
};

exports.deleteAll = (req, res) => {
  Price_list_item.destroy({
    where:{},
    truncate: false
  })
    .then(nams => {
      res.send({
        message: `${nams} Price_list_item were deleted successfully! `
      });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred whil creating Price_list_item",
      });
    });
};

exports.ProdandPrice = (req, res) => {
  const id = req.params.id;
  db.sequelize.query(`SELECT d.name, pli.price FROM price_list_items pli JOIN dishes d  ON d.id = pli.id_dish WHERE d.id = ${id}`,{
    type: QueryTypes.SELECT,
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ошибка",
      });
    });
};

exports.priceDATA = (req, res) => {
  const id = req.params.id;
  db.sequelize.query(`SELECT pl.effective_date, pli.price FROM price_list_items pli JOIN price_lists pl  ON pl.id = pli.id WHERE pl.id = ${id}`,{
    type: QueryTypes.SELECT,
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ошибка",
      });
    });
};
