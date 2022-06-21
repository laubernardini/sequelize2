//Models
const { Camion , Camionero } = require('./database/models/models')
const { DataTypes } = require("sequelize");
const sequelize = require('./database/sequelize');
//require('./database/associations')

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
  
  Camion.belongsToMany(Camionero, {through: CamioneroCamion, foreignKey: 'camionMatricula'})//, as: 'camioneros'})
  Camionero.belongsToMany(Camion, {through: CamioneroCamion, foreignKey: 'camioneroDni'})//, as: 'camiones'})
    

const Camiones = [
  { matricula: 15895, modelo: "Ford 4000", tipo: "Plano", potencia: 345 },
  { matricula: 15894, modelo: "Renault 460", tipo: "Plano", potencia: 460 },
  { matricula: 15892, modelo: "Scania 800", tipo: "Tractor", potencia: 650 },
];


const Camioneros = [
    {nombre: "Jose Antonio",  direccion: "Escondido@gmail.com", dni: 123445667, telefono: 543546588999, salario: 50000, localidad: "Cordoba"},
    {nombre: "Maria Ester",  direccion: "Escondido1@gmail.com", dni: 123445668, telefono: 543546588999, salario: 50000, localidad: "Iruya"},
    {nombre: "Alberto Raul",  direccion: "Escondido2@gmail.com", dni: 123445669, telefono: 543546588999, salario: 50000, localidad: "Santa Fe"},
    {nombre: "Maria Laura",  direccion: "Escondido3@gmail.com", dni: 123445670, telefono: 543546588999, salario: 50000,localidad: "Olavarria"},
    {nombre: "Jose Maria",  direccion: "Escondido4@gmail.com", dni: 123445671, telefono: 543546588999, salario: 50000,localidad: "Concordia"},
    {nombre: "Sofia Marta",  direccion: "Escondido5@gmail.com", dni: 123445672, telefono: 543546588999, salario: 50000,localidad: "Vicente Lopez"},
]


// sequelize.sync({force: true}).then(async() =>{
// const camion = await Camion.create( { matricula: 15895, modelo: "Ford 4000", tipo: "Plano", potencia: 345 })
// const camion1 = await Camion.create({matricula: 15894, modelo: "Renault 460", tipo: "Plano", potencia: 460})
// const camion2 = await Camion.create({matricula: 15892, modelo: "Scania 800", tipo: "Tractor", potencia: 650 })

// const Camionero0 = await Camionero.create({nombre: "Jose Antonio",  direccion: "Escondido@gmail.com", dni: 123445667, telefono: 543546588999, salario: 50000, localidad: "Cordoba"});
// const Camionero1 = await Camionero.create({nombre: "Maria Ester",  direccion: "Escondido1@gmail.com", dni: 123445668, telefono: 543546588999, salario: 50000, localidad: "Iruya"});
// const Camionero2 = await Camionero.create({nombre: "Alberto Raul",  direccion: "Escondido2@gmail.com", dni: 123445669, telefono: 543546588999, salario: 50000, localidad: "Santa Fe"});
// const Camionero3 = await Camionero.create({nombre: "Maria Laura",  direccion: "Escondido3@gmail.com", dni: 123445670, telefono: 543546588999, salario: 50000,localidad: "Olavarria"});
// const Camionero4 = await Camionero.create({nombre: "Jose Maria",  direccion: "Escondido4@gmail.com", dni: 123445671, telefono: 543546588999, salario: 50000,localidad: "Concordia"});
// const Camionero5 = await Camionero.create({nombre: "Sofia Marta",  direccion: "Escondido5@gmail.com", dni: 123445672, telefono: 543546588999, salario: 50000,localidad: "Vicente Lopez"});

// await camion.addCamionero(Camionero0)

// await Camionero2.addCamion(camion1)

// await Camionero3.addCamion(camion1, { through: { fecha: "12/12/2022" } })
// await Camionero4.addCamion(camion1)
// await Camionero5.addCamion(camion1)

// });


// const camionerocamion = [
//     {camioneroDni: 123445667, camionMatricula: 15895, fecha: "12/12/22"},
//     {camioneroDni: 123445667, camionMatricula: 15894, fecha: "13/12/22"},
//     {camioneroDni: 123445667, camionMatricula: 15892, fecha: "14/12/22"},
// ]

sequelize.sync({ force:true}).then(() => {
    Camiones.forEach(element => {
        Camion.create(element).then(obj => {
               console.log(`Camion Creada: ${obj}`)
           }).catch(error =>{
               console.log(error)
           })
       
   });
}).then(() =>{
    Camioneros.forEach(element => {
        Camionero.create(element).then(obj => {
           console.log(`Camionero Creada: ${obj}`)
       }).catch(error =>{
           console.log(error)
       })
   
   });
}).then( () =>{
    // Camionero.findAll().then(listCamionero => {
    //         Camion.findAll().then(listcamion => {
    //             listCamionero[0].addCamion(listcamion[0], {through: {fecha: "02/25/2022" }}).then(obj => {
    //                     console.log(obj)
    //                 }).catch(error =>{
    //                     console.log(error)
    //                 })
    //         })
    // })

    Camioneros.forEach(async (elemet, index) => {
            Camionero.findByPk(elemet.dni).then(camionero => {
                Camion.findAll().then(camion=> {
                    camionero.addCamion(camion[0]).then(obj =>{
                        console.log("Camion Añadido")
                    }).catch(err =>{
                        console.log(err)
                    })
            });
        });
    });
        
    //     await camionero.addCamion(camion[0])//, {through: CamioneroCamion})
    //     // CamioneroCamion.create(elemet).then(obj => {
    //     //     console.log(`CamioneroCamion Creada: ${obj}`)
    //     // }).catch(error => {
    //     //     console.log(error)
    //     // })
    // })
    
})

