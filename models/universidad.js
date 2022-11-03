const Sequelize = require('sequelize');

const Universidad = (sequelize) =>{
    sequelize.define('Universidad',{
        nombreUniversidad: Sequelize.STRING,
        paisUniversidad: Sequelize.STRING,
        descripcionUniversidad: Sequelize.STRING
    })
}

module.exports = Universidad;