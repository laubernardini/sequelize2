const sequelize = require("../sequelize");
const { Model, DataTypes } = require("sequelize");

class Paquete extends Model {
  static associate(models) {
    // Paquete.belongsTo(models.Camionero, {foreignKey:'camioneroDni'}),
    // Paquete.belongsTo(models.Provincia, {foreignKey: 'provinciaId', as: "provincias"})
  }
}

Paquete.init(
  {
    direccion_destinatario: DataTypes.STRING(25),
    descripcion: DataTypes.STRING(50),
    destinatario: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "paquete",
    tableName: "paquetes",
  }
);

module.exports = Paquete;
