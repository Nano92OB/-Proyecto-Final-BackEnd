'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PokeUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  PokeUser.init({
    PokemonId: DataTypes.BIGINT,
    UserId: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'PokeUser',
  });
  return PokeUser;
};