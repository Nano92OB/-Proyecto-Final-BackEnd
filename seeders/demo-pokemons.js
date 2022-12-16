'use strict';

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
   await queryInterface.bulkInsert('Pokemons',[
     {
       id: 201,
       name: "Bulbasaur",
       weight: 6.9,
       height: 0.7,
       moves: ["Chlorophyl", "Overgrow"],
       description: "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
       type: [
         "Grass",
         "Poison"
       ],
       base: JSON.stringify({
         "HP": 39,
         "Attack": 52,
         "Defense": 43,
         "Spa": 60,
         "Spd": 50,
         "Speed": 65
       }),
       creatorId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       id: 202,
       name: "Charmander",
       weight: 8.5,
       height: 0.6,
       moves: ["Mega-Punch", "Fire-Punch"],
       description: "It has a preference for hot things. When it rains, steam is sold to spout from the tip of its tail.",
       type: [
         "Fire"
       ],
       base: JSON.stringify({
         "HP": 45,
         "Attack": 49,
         "Defense": 49,
         "Spa": 65,
         "Spd": 65,
         "Speed": 45
       }),
       creatorId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       id: 203,
       name: "Squirtle",
       weight: 9,
       height: 0.5,
       moves: ["Torrent", "Rain-Dish"],
       description: "When it retracts is long neck into its sell, it squirts out water with virorous force.",
       type: [
         "Water"
       ],
       base: JSON.stringify({
         "HP": 44,
         "Attack": 48,
         "Defense": 65,
         "Spa": 50,
         "Spd": 64,
         "Speed": 43
       }),
       creatorId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       id: 204,
       name: "Butterfree",
       weight: 32.0,
       height: 1.1,
       moves: ["Compound-Eyes", "Tinted-Lens"],
       description: "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
       type: [
         "Bug",
         "Flying"
       ],
       base: JSON.stringify({
         "HP": 60,
         "Attack": 45,
         "Defense": 50,
         "Spa": 90,
         "Spd": 80,
         "Speed": 70
       }),
       creatorId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       id: 205,
       name: "Pikachu",
       weight: 6.0,
       height: 0.4,
       moves: ["Mega-Punch", "Pay-Day"],
       description: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
       type: [
         "Electric"
       ],
       base: JSON.stringify({
         "HP": 35,
         "Attack": 55,
         "Defense": 40,
         "Spa": 50,
         "Spd": 50,
         "Speed": 90
       }),
       creatorId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       id: 206,
       name: "Gastly",
       weight: 0.1,
       height: 1.3,
       moves: ["Levitate"],
       description: "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.",
       type: [
         "Ghost",
         "Poison"
       ],
       base: JSON.stringify({
         "HP": 30,
         "Attack": 35,
         "Defense": 30,
         "Spa": 100,
         "Spd": 35,
         "Speed": 80
       }),
       creatorId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       id: 207,
       name: "Ditto",
       weight: 4.0,
       height: 0.3,
       moves: ["Limber", "Imposter"],
       description: "It can reconstitute its entire cellular structure to change into what it seed, but it returns to normal when it relaxes.",
       type: [
         "Normal"
       ],
       base: JSON.stringify({
         "HP": 48,
         "Attack": 48,
         "Defense": 48,
         "Spa": 48,
         "Spd": 48,
         "Speed": 48
       }),
       creatorId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       id: 208,
       name: "Mew",
       weight: 4.0,
       height: 0.4,
       moves: ["Synchronize"],
       description: "When viewed from a microscope, this Pokémon's short, fine, delicate hair can be seen.",
       type: [
         "Psychic"
       ],
       base: JSON.stringify({
         "HP": 100,
         "Attack": 100,
         "Defense": 100,
         "Spa": 100,
         "Spd": 100,
         "Speed": 100
       }),
       creatorId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       id: 209,
       name: "Aron",
       weight: 60.0,
       height: 0.4,
       moves: ["Sturdy", "Rock-Head"],
       description: "It eats iron ore - and sometimes railroad tracks - to build up the steel armor that protects its body.",
       type: [
         "Steel",
         "Rock"
       ],
       base: JSON.stringify({
         "HP": 50,
         "Attack": 70,
         "Defense": 100,
         "Spa": 40,
         "Spd": 40,
         "Speed": 30
       }),
       creatorId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
      },
     {
       id: 2010,
       name: "Aron",
       weight: 60.0,
       height: 0.4,
       moves: ["Sturdy", "Rock-Head"],
       description: "It eats iron ore - and sometimes railroad tracks - to build up the steel armor that protects its body.",
       type: [
         "Steel",
         "Rock"
       ],
       base: JSON.stringify({
         "HP": 50,
         "Attack": 70,
         "Defense": 100,
         "Spa": 40,
         "Spd": 40,
         "Speed": 30
       }),
       creatorId:1,
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ],{})
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Pokemon', null, {});
  }
};
