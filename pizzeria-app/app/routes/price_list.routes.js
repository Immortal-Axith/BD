const { universal } = require("../models/index.js");
module.exports = app => {
    const universal = require("../controllers/price_list.controller.js");
    
    var router = require("express").Router();

    /**
     * @swagger
     * components:
     *   schemas:
     *     Price_list:
     *       type: object
     *       required:
     *         - name
     *         - effective_date
     *       properties:
     *         id:
     *           type: integer
     *           description: Auto-incremented ID
     *           example: 1
     *         effective_date:
     *           type: string
     *           format: date-time
     *           description: Date when the price list becomes effective
     *           example: "2024-06-01T00:00:00Z"
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
     * /api/price_list:
     *   post:
     *     summary: Create a new price list
     *     tags: [Price_list]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - effective_date
     *             properties:
     *               effective_date:
     *                 type: string
     *                 format: date-time
     *                 example: "2024-06-01T00:00:00Z"
     *     responses:
     *       201:
     *         description: Price list created successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Price_list'
     *       400:
     *         description: Bad request - missing required fields
     */
    router.post("/", universal.create);

    /**
     * @swagger
     * /api/price_list:
     *   get:
     *     summary: Get all price lists
     *     tags: [Price_list]
     *     responses:
     *       200:
     *         description: List of all price lists
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Price_list'
     */
    router.get("/", universal.findAll);

    /**
     * @swagger
     * /api/price_list/{id}:
     *   get:
     *     summary: Get price list by ID
     *     tags: [Price_list]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: Price list ID
     *     responses:
     *       200:
     *         description: Price list found
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Price_list'
     *       404:
     *         description: Price list not found
     */
    router.get("/:id", universal.findOne);

    /**
     * @swagger
     * /api/price_list/{id}:
     *   put:
     *     summary: Update price list
     *     tags: [Price_list]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: Price list ID
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               effective_date:
     *                 type: string
     *                 format: date-time
     *                 example: "2024-07-01T00:00:00Z"
     *     responses:
     *       200:
     *         description: Price list updated successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Price_list'
     *       404:
     *         description: Price list not found
     */
    router.put("/:id", universal.update);

    /**
     * @swagger
     * /api/price_list/{id}:
     *   delete:
     *     summary: Delete price list
     *     tags: [Price_list]
     *     parameters:
     *       - in: path
     *         id: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: Price list ID
     *     responses:
     *       200:
     *         description: Price list deleted successfully
     *       404:
     *         description: Price list not found
     */
    router.delete("/:id", universal.delete);

    /** 
     * @swagger
     * /api/price_list:
     *   delete:
     *     summary: Delete all price lists
     *     tags: [Price_list]
     *     responses:
     *       200:
     *         description: All price lists deleted successfully
     *       500:
     *         description: Server error
     */
    router.delete("/", universal.deleteAll);

    app.use("/api/price_list", router);
    console.log('router for /api/price_list initialized');
}