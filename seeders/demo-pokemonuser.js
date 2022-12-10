'use strict';

const {DataTypes} = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('PokemonUser',[
    {
      pokemonId: 2,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
       pokemonId: 4,
       userId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       pokemonId: 6,
       userId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     }
  ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

      await queryInterface.bulkDelete('PokemonUser',null,{})
  }
};
