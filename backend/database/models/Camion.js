const sequelize = require("../sequelize");
const { Model, DataTypes } = require("sequelize");

class Camion extends Model {
  static associate(models) {
    Camion.belongsToMany(models.Camionero);
  }
}

Camion.init(
  {
    matricula: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
    },
    modelo: DataTypes.STRING(30),
    tipo: DataTypes.STRING(13),
    potencia: DataTypes.INTEGER(5),
  },
  {
    sequelize,
    modelName: "camion",
    tableName: "camiones",
  }
);

module.exports = Camion;
