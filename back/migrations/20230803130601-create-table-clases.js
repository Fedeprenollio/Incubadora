'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('clases', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description:{
        type: Sequelize.TEXT,
      },
      date:{
        type: Sequelize.DATE
      },
      days:{
        type:Sequelize.STRING
        
      },
      hour:{
        type: Sequelize.INTEGER
      }
    
    
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('clases')
  }
};