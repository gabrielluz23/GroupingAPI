'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('road_maps', 
    [
      {
        title: "Minha trilha de Historia",
        discipline_id: 1,
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Minha trilha de Português",
        discipline_id: 2,
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Minha trilha de Redações",
        discipline_id: 3,
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Minha trilha de Geografia",
        discipline_id: 4,
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Minha trilha de Fisica",
        discipline_id: 5,
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Minha trilha de Matematica",
        discipline_id: 6,
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('road_maps', null, {}),
};


