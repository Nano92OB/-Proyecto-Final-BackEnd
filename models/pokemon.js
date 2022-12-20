'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pokemon.belongsToMany(models.Users, {through: 'PokeUser'})
    }
  }
  Pokemon.init({
    id: {
      allowNull: false,
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    type: DataTypes.ARRAY(DataTypes.STRING),
    weight: DataTypes.FLOAT,
    height: DataTypes.FLOAT,
    moves: DataTypes.ARRAY(DataTypes.STRING),
    description: DataTypes.TEXT,
    base: DataTypes.JSON,
    creatorId: DataTypes.BIGINT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pokemon',
  });
  return Pokemon;
};