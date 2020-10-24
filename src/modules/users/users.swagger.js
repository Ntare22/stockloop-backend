
/**
 * @swagger
 * definitions:
 *   user:
 *     type: object
 *     properties:
 *       first_name:
 *         type: string
 *       last_name:
 *          type: string
 *       email:
 *          type: string
 *          format: email
 *       role:
 *          type: string
 *       isAuthorized:
 *          type: boolean
 *       password:
 *          type: string
 *          format: password
 */
/**
 * @swagger
 * /user/list:
 *   get:
 *     tags:
 *       - fetch all users
 *     name: get
 *     summary: fetch all users
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     responses:
 *       '200':
 *              description: Success.
 *       '400':
 *             description: Bad request.
 *       '401':
 *             description: Unauthorised.
 *       '500':
 *             description: Internal server error.
 *       '404':
 *             description: Not Found
 * */

/**
 * @swagger
 * /user/create:
 *   post:
 *     tags:
 *       - Create new user
 *     name: create
 *     summary: Creating new user
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/user'
 *           type: object
 *           properties:
 *              first_name:
 *                 type: string
 *              last_name:
 *                 type: string
 *              email:
 *                 type: string
 *                 format: email
 *              role:
 *                 type: string
 *              isAuthorized:
 *                 type: boolean
 *              password:
 *                 type: string
 *                 format: password
 *     responses:
 *       '200':
 *              description: Success.
 *       '400':
 *             description: Bad request.
 *       '401':
 *             description: Unauthorised.
 *       '500':
 *             description: Internal server error.
 *       '404':
 *             description: Not Found
 * */

/**
 * @swagger
 * /user/update:id:
 *   put:
 *     tags:
 *       - Update user
 *     name: update
 *     summary: Updating  user
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/user'
 *           type: object
 *           properties:
 *              id:
 *                type: string
 *              first_name:
 *                 type: string
 *              last_name:
 *                 type: string
 *              email:
 *                 type: string
 *                 format: email
 *              role:
 *                 type: string
 *              isAuthorized:
 *                 type: boolean
 *              password:
 *                 type: string
 *                 format: password
 *     responses:
 *       '200':
 *              description: Success.
 *       '400':
 *             description: Bad request.
 *       '401':
 *             description: Unauthorised.
 *       '500':
 *             description: Internal server error.
 * */

/**
 * @swagger
 * /user/delete:id:
 *   delete:
 *     tags:
 *       - Delete User
 *     name: Delete
 *     summary: Deleting  user
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/user'
 *     responses:
 *       '200':
 *              description: Success.
 *       '400':
 *             description: Bad request.
 *       '401':
 *             description: Unauthorised.
 *       '500':
 *             description: Internal server error.
 * */