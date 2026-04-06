'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PilotosF1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PilotosF1.init({
    nombre: DataTypes.STRING,
    equipos: DataTypes.STRING,
    numeros: DataTypes.STRING,
    nacionalidad: DataTypes.STRING,
    victorias: DataTypes.INTEGER,
    podios: DataTypes.INTEGER,
    campeonatos: DataTypes.INTEGER,
    debut: DataTypes.DATE,
    puntos_totales: DataTypes.INTEGER
	  }, {
    sequelize,
    modelName: 'PilotosF1',
    freezeTableName: true
  });
  return PilotosF1;
};
