const sequelize = require("../sequelize");
const { Model, DataTypes } = require("sequelize");

class Provincia extends Model {
  static associate(models) {
    // Provincia.hasMany(models.Paquete, {foreignKey: "provinciaId"});
  }
}

Provincia.init(
  {
    nombre: DataTypes.STRING(50),
  },
  {
    sequelize,
    modelName: "provincia",
    tableName: "provincias",
  }
);

module.exports = Provincia;
