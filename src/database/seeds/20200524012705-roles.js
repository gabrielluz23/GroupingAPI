'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('roles', 
    [
      {
        name: 'Normal',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Premium',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('roles', null, {}),
};


