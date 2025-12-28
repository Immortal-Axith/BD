const { where } = require("sequelize");
const db = require("../models");
const Dish_group = db.dish_group;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Connect can not be empty",
    });
    return;
  }
  const dishGroup = {
    name: req.body.name,
    id_parent_group: req.body.id_parent_group,
    description: req.body.description,
  };
  Dish_group.create(dishGroup)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred whil creating Dish_group",
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  Dish_group.findAll({ where: condition })
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
  Dish_group.findByPk(id)
  .then(data => {
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `canon find Dish_group with id=${id}.`,
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
  Dish_group.update(req.body, {
    where: {id: id}
  })
  .then(nam =>{
    if (nam == 1){
      res.send({
        message: "Dish_group was this.updatesuccessfully"
      });
    }else {
      res.send({
        message: `cannot update Dish_group with id = ${id}. 
        Maybe Dish_group was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message:"Error updating Dish_group with id "+ id
    });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Dish_group.destroy({
    where: {id: id}
  })
  .then(nam =>{
    if (num == 1){
      res.send({
        messege: "ProductGroups was deleted successfully!"
      });
    }else {
      res.send({
        message: `cannot delete Dish_group with id = ${id}. 
        Maybe Dish_group was not found`
      })
    }
  })
  .catch(err => {
     res.status(500).send({
      message:"Could not delete Dish_group with id "+ id
    });
  })
};

exports.deleteAll = (req, res) => {
  Dish_group.destroy({
    where:{},
    truncate: false
  })
    .then(nams => {
      res.send({
        message: `${nams} Dish_group were deleted successfully! `
      });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred whil creating Dish_group",
      });
    });
};
