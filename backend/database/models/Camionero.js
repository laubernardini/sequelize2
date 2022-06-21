const sequelize = require("../sequelize");
const { Model, DataTypes } = require("sequelize");

class Camionero extends Model {
  static associate(models) {
    // Camionero.belongsToMany(models.Camion);
    // Camionero.hasMany(models.Paquete);
  }
}

Camionero.init(
  {
    dni: { type: DataTypes.INTEGER(8), allowNull: false, primaryKey: true },
    nombre: DataTypes.STRING,
    telefono: DataTypes.INTEGER(13),
    direccion: DataTypes.STRING(25),
    salario: DataTypes.INTEGER(10),
    localidad: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "camionero",
    tableName: "camioneros",
  }
);

module.exports = Camionero;
