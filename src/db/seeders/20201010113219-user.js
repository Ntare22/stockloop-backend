// 'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
    {
      first_name: 'John',
      last_name: 'Doe',
      email: 'example@example.com',
      role: 'admin',
      isAuthorized: true,
      password: bcrypt.hashSync('safdage', Number(process.env.SALT)),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Jane',
      last_name: 'Doe',
      email: 'jane@stockloop.com',
      role: 'operator',
      isAuthorized: true,
      password: bcrypt.hashSync('jane1234', Number(process.env.SALT)),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Jim',
      last_name: 'Doe',
      email: 'jim@stockloop.com',
      role: 'super admin',
      isAuthorized: true,
      password: bcrypt.hashSync('jim1234', Number(process.env.SALT)),
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
