const { where, QueryTypes } = require("sequelize");
const db = require("../models");
const Dish = db.dish;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Connect can not be empty",
    });
    return;
  }
  const dish = {
    name: req.body.name,
    article: req.body.article,
    id_dish_group: req.body.id_dish_group,
    ingredients: req.body.ingredients,
    dough_type: req.body.dough_type,
    size: req.body.size,
    description: req.body.description,
  };
  Dish.create(dish)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred whil creating Dish",
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  Dish.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ошибка",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Dish.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `canon find Dish with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Ошибка" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Dish.update(req.body, {
    where: { id: id },
  })
    .then((nam) => {
      if (nam == 1) {
        res.send({
          message: "Dish was this.updatesuccessfully",
        });
      } else {
        res.send({
          message: `cannot update Dish with id = ${id}. 
        Maybe Dish was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Dish with id " + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Dish.destroy({
    where: { id: id },
  })
    .then((nam) => {
      if (num == 1) {
        res.send({
          messege: "Products was deleted successfully!",
        });
      } else {
        res.send({
          message: `cannot delete Dish with id = ${id}. 
        Maybe Dish was not found`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Dish with id " + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Dish.destroy({
    where: {},
    truncate: false,
  })
    .then((nams) => {
      res.send({
        message: `${nams} Dish were deleted successfully! `,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred whil creating Dish",
      });
    });
};

exports.getdishsgroup = (req, res) => {
  const id = req.params.id;
  db.sequelize
    .query(
      "SELECT dg.name  FROM dish_groups dg LEFT JOIN dishes d ON dg.id = d.id_dish_group WHERE d.id = :id",
      {
        model: Dish,
        mapToModels: true,
        replacements: { id: id },
        type: QueryTypes.SELECT,
      }
    )
    .then((result) => {
      res.send(result[0]);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while dish_group",
      });
    });
};
