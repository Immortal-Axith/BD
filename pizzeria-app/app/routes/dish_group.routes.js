const { universal } = require("../models/index.js");
module.exports = app => {
    const universal = require("../controllers/dish_group.controller.js");
    
    var router = require("express").Router();

    /**
     * @swagger
     * components:
     *   schemas:
     *     Dish_group:
     *       type: object
     *       required:
     *         - name
     *       properties:
     *         id:
     *           type: integer
     *           description: Auto-incremented ID
     *           example: 1
     *         name:
     *           type: string
     *           description: Name of the  dish group
     *           example: "Flowers"
     *         description:
     *           type: string
     *           description: Description of the  dish group
     *           example: "All types of flowers"
     *         id_parent_group:
     *           type: integer
     *           description: Reference to id parent group
     *           example: 1
     *         createdAt:
     *           type: string
     *           format: date-time
     *           description: Creation timestamp
     *           example: "2024-01-01T10:30:00Z"
     *         updatedAt:
     *           type: string
     *           format: date-time
     *           description: Update timestamp
     *           example: "2024-01-01T10:30:00Z"
     */

    /**
     * @swagger
     * /api/dish_group:
     *   post:
     *     summary: Create a new  dish group
     *     tags: [Dish_group]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - name
     *             properties:
     *               name:
     *                 type: string
     *                 example: "Flowers"
     *               description:
     *                 type: string
     *                 example: "All types of flowers"
     *               id_parent_group:
     *                 type: integer
     *                 example: 1
     *     responses:
     *       201:
     *         description: Dish group created successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Dish_group'
     *       400:
     *         description: Bad request - missing required fields
     */
    router.post("/", universal.create);

    /**
     * @swagger
     * /api/dish_group:
     *   get:
     *     summary: Get all dish groups
     *     tags: [Dish_group]
     *     responses:
     *       200:
     *         description: List of all dish groups
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Dish_group'
     */
    router.get("/", universal.findAll);

    /**
     * @swagger
     * /api/dish_group/{id}:
     *   get:
     *     summary: Get dish group by ID
     *     tags: [Dish_group]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: Dish group ID
     *     responses:
     *       200:
     *         description: Dish group found
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Dish_group'
     *       404:
     *         description: Dish group not found
     */
    router.get("/:id", universal.findOne);

    /**
     * @swagger
     * /api/dish_group/{id}:
     *   put:
     *     summary: Update dish group
     *     tags: [Dish_group]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: Dish group ID
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *                 example: "Updated Flowers Group"
     *               description:
     *                 type: string
     *                 example: "Updated description"
     *               id_parent_group:
     *                 type: integer
     *                 example: 2
     *     responses:
     *       200:
     *         description: Dish group updated successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Dish_group'
     *       404:
     *         description: Dish group not found
     */
    router.put("/:id", universal.update);

    /**
     * @swagger
     * /api/dish_group/{id}:
     *   delete:
     *     summary: Delete dish group
     *     tags: [Dish_group]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: Dish group ID
     *     responses:
     *       200:
     *         description: Dish group deleted successfully
     *       404:
     *         description: Dish group not found
     */
    router.delete("/:id", universal.delete);

    /**
     * @swagger
     * /api/dish_group:
     *   delete:
     *     summary: Delete all dish groups
     *     tags: [Dish_group]
     *     responses:
     *       200:
     *         description: All dish groups deleted successfully
     *       500:
     *         description: Server error
     */
    router.delete("/", universal.deleteAll);

    app.use("/api/dish_group", router);
    console.log('router for /api/dish_group initialized');
}