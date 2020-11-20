/**
 * @swagger
 * definitions:
 *   raw-material:
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *         format: string
 *       quantity:
 *         type: number
 *         format: float/integer
 *       unit:
 *          type: string
 *          format: string
 *       unit_price:
 *          type: number
 *          format: float/integer
 */

/**
 * @swagger
 * /products/add/raw-material:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Products/Materials
 *     name: enter raw material
 *     summary: enables operator to add raw Materials
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/raw-material'
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             quantity:
 *               type: number
 *             unit:
 *               type: string
 *             unit_price:
 *               type: number
 *         required:
 *           - email
 *           - password
 *     produces:
 *       - application/json
 *     responses:
 *       '200':
 *             description: Raw Material has been added.
 *       '401':
 *             description: Server Error. Get in contact with super admin.
 *       '500':
 *             description: Server Error.
 * */