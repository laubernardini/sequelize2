//Models
const { Camion, Camionero, Paquete, Provincia } = require("./models/models");
const { DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

const CamioneroCamion = sequelize.define(
  "CamioneroCamion",
  {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: DataTypes.DATE,
  },
  {
    timestamps: false,
    tableName: " camionerosCamion",
    modelName: "camioneroCamion",
  }
);

Camion.belongsToMany(Camionero, {through: CamioneroCamion, foreignKey: 'camionMatricula', as: 'camiones'});
Camionero.belongsToMany(Camion, {through: CamioneroCamion, foreignKey: 'camioneroDni', as: 'camioneros'});

 Paquete.belongsTo(Camionero, {foreignKey:'camioneroDni'});
 Camionero.hasMany(Paquete);

 Paquete.belongsTo(Provincia, {foreignKey: 'provinciaId', as: "provincias"});
 Provincia.hasMany(Paquete, {foreignKey: "provinciaId"});


