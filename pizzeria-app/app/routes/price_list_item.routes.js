module.exports = app => {
    const universal = require("../controllers/price_list_item.controller.js");
    
    var router = require("express").Router();

    /**
     * @swagger
     * components:
     *   schemas:
     *     Price_list_item:
     *       type: object
     *       required:
     *         - id_price_list
     *         - id_dish
     *         - price
     *       properties:
     *         id:
     *           type: integer
     *           description: Auto-incremented ID
     *           example: 1
     *         id_price_list:
                 type: integer
     *           description: dish ID
     *           example: 5
     *         id_dish:
     *           type: integer
     *           description: dish ID
     *           example: 5
     *         price:
     *           type: number
     *           format: float
     *           description: dish price
     *           example: 99.99
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
     * /api/price_list_item:
     *   post:
     *     summary: Create a new dish price record
     *     tags: [Price_list_item]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - id_price_list
     *               - id_dish
     *               - price
     *             properties:
     *               id_product:
     *                 type: integer
     *                 example: 5
     *               price:
     *                 type: number
     *                 format: float
     *                 example: 99.99
     *     responses:
     *       201:
     *         description: dish price created successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Price_list_item'
     *       400:
     *         description: Bad request - missing required fields
     */
    router.post("/", universal.create);
    /**
     * @swagger
     * /api/price_list_item:
     *   get:
     *     summary: Get all dish price records
     *     tags: [Price_list_item]
     *     responses:
     *       200:
     *         description: List of all dish prices
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Price_list_item'
     */
    router.get("/", universal.findAll);
    /**
     * @swagger
     * /api/price_list_item/{id}:
     *   get:
     *     summary: Get dish price by ID
     *     tags: [Price_list_item]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: dish price record ID
     *     responses:
     *       200:
     *         description: dish price record found
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Price_list_item'
     *       404:
     *         description: Record not found
     */
    router.get("/:id", universal.findOne);
    /**
     * @swagger
     * /api/price_list_item/{id}:
     *   put:
     *     summary: Update dish price
     *     tags: [Price_list_item]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: dish price record ID
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               id_price_list:
     *                 type: integer
     *                 example: 5
     *               id_dish:
     *                 type: integer
     *                 example: 5
     *               price:
     *                 type: number
     *                 format: float
     *                 example: 89.99
     *     responses:
     *       200:
     *         description: dish price updated
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Price_list_item'
     *       404:
     *         description: Record not found
     */
    router.put("/:id", universal.update);
    /**
     * @swagger
     * /api/price_list_item/{id}:
     *   delete:
     *     summary: Delete dish price record
     *     tags: [Price_list_item]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: dish price record ID
     *     responses:
     *       200:
     *         description: Record deleted successfully
     *       404:
     *         description: Record not found
     */
    router.delete("/:id", universal.delete);

    /**
     * @swagger
     * /api/price_list_item:
     *   delete:
     *     summary: Delete all dish price records
     *     tags: [Price_list_item]
     *     responses:
     *       200:
     *         description: All records deleted successfully
     *       500:
     *         description: Server error
     */
    router.delete("/", universal.deleteAll);

    /**
     * @swagger
     * /api/price_list_item/{id}/ProdandPrice:
     *   get:
     *     summary: Get dish and price information
     *     tags: [Price_list_item]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: dish ID
     *     responses:
     *       200:
     *         description: dish and price data retrieved
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 dish:
     *                   type: object
     *                 price:
     *                   type: number
     *       404:
     *         description: dish not found
     */
    router.get("/:id/ProdandPrice", universal.ProdandPrice);

    /**
     * @swagger
     * /api/price_list_item/{id}/Pricedata:
     *   get:
     *     summary: Get detailed price data
     *     tags: [Price_list_item]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: dish price record ID
     *     responses:
     *       200:
     *         description: Detailed price data retrieved
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Price_list_item'
     *       404:
     *         description: Price data not found
     */
    router.get("/:id/Pricedata", universal.priceDATA);

    app.use("/api/price_list_item", router);
    console.log('router for /api/price_list_item initialized');
}