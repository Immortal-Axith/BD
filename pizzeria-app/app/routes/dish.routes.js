const { universal } = require("../models/index.js");

module.exports = (app) => {
  const universal = require("../controllers/dish.controller.js");

  var router = require("express").Router();

  /**
   * @swagger
   * components:
   *   schemas:
   *     Dish:
   *       type: object
   *       required:
   *         - name
   *       properties:
   *         id:
   *           type: integer
   *           example: 1
   *         name:
   *           type: string
   *           example:  dishs1
   *          article:
   *           type: string
   *           example:  dishs1
   *         id_dish_group:
   *           type: integer
   *           example: 1
   *         ingredients:
   *           type: string
   *           example: provider1
   *         dough_type:
   *           type: string
   *           example: provider1
   *         size:
   *           type: decimal
   *           example: provider1
   *          description:
   *           type: string
   *           example: Dish 1.1 description
   */
  /**
   * @swagger
   * /api/dish:
   *   post:
   *     summary: Create new dish
   *     tags: [Dish]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/dish'
   *     responses:
   *       200:
   *         description: dish created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/dish'
   */
  router.post("/", universal.create);

  /**
   * @swagger
   * /api/dish:
   *   get:
   *     summary: Retrieve a list of  dishs
   *     tags: [Dish]
   *     responses:
   *       200:
   *         description: A list of  dishs
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/dish'
   */
  router.get("/", universal.findAll);

  /**
   * @swagger
   * /api/dish/{id}:
   *   get:
   *     summary: Get dish by ID
   *     tags: [Dish]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *           format: int64
   *         description: The dish ID
   *     responses:
   *       200:
   *         description: dish found
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/dish'
   *       404:
   *         description: dish not found
   */
  router.get("/:id", universal.findOne);

  /**
   * @swagger
   * /api/dish/{id}:
   *   put:
   *     summary: Update dish by ID
   *     tags: [Dish]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: The dish ID
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/dish'
   *     responses:
   *       200:
   *         description: dish updated
   */
  router.put("/:id", universal.update);

  /**
   * @swagger
   * /api/dish/{id}:
   *   delete:
   *     summary: Delete dish by ID
   *     tags: [Dish]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: The dish ID
   *     responses:
   *       200:
   *         description: dish deleted
   *       404:
   *         description: dish not found
   */
  router.delete("/:id", universal.delete);

  /**
   * @swagger
   * /api/dish:
   *   delete:
   *     summary: Delete all  dishs
   *     tags: [Dish]
   *     responses:
   *       200:
   *         description: All  dishs deleted
   */
  router.delete("/", universal.deleteAll);

  /**
   * @swagger
   * /api/dish/{id}/get dishsgroup:
   *   get:
   *     summary: Get dish group by dish ID
   *     tags: [Dish]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: The dish ID
   *     responses:
   *       200:
   *         description: dish group found
   */
  router.get("/:id/getdishsgroup", universal.getdishsgroup);

  app.use("/api/dish", router);
  console.log("router for /api/dish initialized");
};
