//Configuración de sequelize
const Sequelize = require('sequelize');
const {applyRelations} = require('./relations');
//objeto de conexión

const sequelize = new Sequelize('examen_MAML2','admin','!mARCOALAN123',{
    dialect:'mysql',
    host:'database-1.cw0y2gdtoyc6.us-east-1.rds.amazonaws.com',
    dialectOptions:{
        options:{
            //Características especiales de la conexión
        }
    },
    define:{
        timestamps: false,
        freezeTableName:true
    }
});

//Cargar los modelos
const modelDefiners =[
    require('../models/universidad')
];

//Adherir los modelos al objeto de conexion
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);   
}

//Generar las relaciones entre las tablas
applyRelations(sequelize);

//Exportar el objeto sequelize

module.exports = sequelize;



/*const Consola = sequelize.define('consola',{
    //Atributos
    nombre:{
        type:Sequelize.STRING,
        allowNull: false
    },
    marca:{
        type:Sequelize.STRING,
        allowNull: false
    }
});*/

//Prueba de conexión
/*
sequelize.sync()
    .then(resultado=>{
        console.log("Conexión exitosa")
    })*/