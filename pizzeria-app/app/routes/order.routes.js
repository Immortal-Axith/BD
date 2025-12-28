module.exports = app => {
    const universal = require("../controllers/order.controller.js");
    
    var router = require("express").Router();

    /**
     * @swagger
     * components:
     *   schemas:
     *     Order:
     *       type: object
     *       required:
     *         - id_price_list
     *         - order_date
     *         - total_amount
     *       properties:
     *         id:
     *           type: integer
     *           description: Auto-incremented ID
     *           example: 1
     *         id_price_list:
     *           type: integer
     *           description: Price list ID reference
     *           example: 1
     *         order_date:
     *           type: string
     *           format: date-time
     *           description: Date and time of the order
     *           example: "2024-01-15T14:30:00Z"
     *         payment_time:
     *           type: string
     *           format: time
     *           description: Time of payment
     *           example: "14:30:00"
     *         total_amount:
     *           type: number
     *           format: float
     *           description: Total amount of the order
     *           example: 299.99
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
     * /api/order:
     *   post:
     *     summary: Create a new order
     *     tags: [Order]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - id_price_list
     *               - order_date
     *               - total_amount
     *             properties:
     *               id_price_list:
     *                 type: integer
     *                 example: 1
     *               order_date:
     *                 type: string
     *                 format: date-time
     *                 example: "2024-01-15T14:30:00Z"
     *               payment_time:
     *                 type: string
     *                 format: time
     *                 example: "14:30:00"
     *               total_amount:
     *                 type: number
     *                 format: float
     *                 example: 299.99
     *     responses:
     *       201:
     *         description: Order created successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Order'
     *       400:
     *         description: Bad request - missing required fields
     */
    router.post("/", universal.create);

    /**
     * @swagger
     * /api/order:
     *   get:
     *     summary: Get all orders
     *     tags: [Order]
     *     responses:
     *       200:
     *         description: List of all orders
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Order'
     */
    router.get("/", universal.findAll);

    /**
     * @swagger
     * /api/order/{id}:
     *   get:
     *     summary: Get order by ID
     *     tags: [Order]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: Order ID
     *     responses:
     *       200:
     *         description: Order found
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Order'
     *       404:
     *         description: Order not found
     */
    router.get("/:id", universal.findOne);

    /**
     * @swagger
     * /api/order/{id}:
     *   put:
     *     summary: Update order
     *     tags: [Order]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: Order ID
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               id_price_list:
     *                 type: integer
     *                 example: 2
     *               order_date:
     *                 type: string
     *                 format: date-time
     *                 example: "2024-01-16T15:45:00Z"
     *               payment_time:
     *                 type: string
     *                 format: time
     *                 example: "15:45:00"
     *               total_amount:
     *                 type: number
     *                 format: float
     *                 example: 350.50
     *     responses:
     *       200:
     *         description: Order updated successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Order'
     *       404:
     *         description: Order not found
     */
    router.put("/:id", universal.update);

    /**
     * @swagger
     * /api/order/{id}:
     *   delete:
     *     summary: Delete order
     *     tags: [Order]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: Order ID
     *     responses:
     *       200:
     *         description: Order deleted successfully
     *       404:
     *         description: Order not found
     */
    router.delete("/:id", universal.delete);
    /**
     * @swagger
     * /api/order:
     *   delete:
     *     summary: Delete all orders
     *     tags: [Order]
     *     responses:
     *       200:
     *         description: All orders deleted successfully
     *       500:
     *         description: Server error
     */
    router.delete("/", universal.deleteAll);
    /**
     * @swagger
     * /api/order/{id}/orderWithDish:
     *   get:
     *     summary: Get order with related dishs
     *     tags: [Order]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: Order ID
     *     responses:
     *       200:
     *         description: Order with dish information
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 order:
     *                   $ref: '#/components/schemas/Order'
     *                 dish:
     *                   type: array
     *                   items:
     *                     type: object
     *                     properties:
     *                       id:
     *                         type: integer
     *                       name:
     *                         type: string
     *                       quantity:
     *                         type: integer
     *                       price:
     *                         type: number
     *                         format: float
     *       404:
     *         description: Order not found
     */
    router.get("/:id/orderWithDish", universal.orderWithDish);

    app.use("/api/order", router);
    console.log('router for /api/order initialized');
}