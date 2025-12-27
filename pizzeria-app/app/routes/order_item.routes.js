module.exports = app => {
    const universal = require("../controllers/order_item.controller.js");
    
    var router = require("express").Router();

    /**
     * @swagger
     * components:
     *   schemas:
     *     Order_item:
     *       type: object
     *       required:
     *         - id_dish
     *         - id_order
     *         - quanity
     *       properties:
     *         id:
     *           type: integer
     *           description: Auto-incremented ID
     *           example: 1
     *         id_dish:
     *           type: integer
     *           description: Product ID
     *           example: 5
     *         id_order:
     *           type: integer
     *           description: Sale ID
     *           example: 3
     *         quanity:
     *           type: integer
     *           description: Quantity of dishs on order
     *           example: 10
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
     * /api/order_item:
     *   post:
     *     summary: Create a new dish-order relationship
     *     tags: [Order_item]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - id_dish
     *               - id_order
     *               - quanity
     *             properties:
     *               id_dish:
     *                 type: integer
     *                 example: 5
     *               id_order:
     *                 type: integer
     *                 example: 3
     *               quanity:
     *                 type: integer
     *                 example: 10
     *     responses:
     *       201:
     *         description: Product added to order successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/order_item'
     *       400:
     *         description: Bad request - missing required fields
     *       500:
     *         description: Server error
     */
    router.post("/", universal.create);

    /**
     * @swagger
     * /api/order_item:
     *   get:
     *     summary: Get all dish-order relationships
     *     tags: [Order_item]
     *     responses:
     *       200:
     *         description: List of all dish-order relationships
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/order_item'
     */
    router.get("/", universal.findAll);

    /**
     * @swagger
     * /api/order_item/{id}:
     *   get:
     *     summary: Get dish-order relationship by ID
     *     tags: [Order_item]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: order_item record ID
     *     responses:
     *       200:
     *         description: Product-order relationship found
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/order_item'
     *       404:
     *         description: Record not found
     */
    router.get("/:id", universal.findOne);

    /**
     * @swagger
     * /api/order_item/{id}:
     *   put:
     *     summary: Update dish-order relationship
     *     tags: [Order_item]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: order_item record ID
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               id_dish:
     *                 type: integer
     *                 example: 5
     *               id_order:
     *                 type: integer
     *                 example: 3
     *               quanity:
     *                 type: integer
     *                 example: 15
     *     responses:
     *       200:
     *         description: Product-order relationship updated
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/order_item'
     *       404:
     *         description: Record not found
     *       400:
     *         description: Bad request
     */
    router.put("/:id", universal.update);

    /**
     * @swagger
     * /api/order_item/{id}:
     *   delete:
     *     summary: Delete dish-order relationship
     *     tags: [Order_item]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: order_item record ID
     *     responses:
     *       200:
     *         description: Record deleted successfully
     *       404:
     *         description: Record not found
     */
    router.delete("/:id", universal.delete);

    /**
     * @swagger
     * /api/order_item:
     *   delete:
     *     summary: Delete all dish-order relationships
     *     tags: [Order_item]
     *     responses:
     *       200:
     *         description: All records deleted successfully
     *       500:
     *         description: Server error
     */
    router.delete("/", universal.deleteAll);

    app.use("/api/order_item", router);
    console.log('router for /api/order_item initialized');
}