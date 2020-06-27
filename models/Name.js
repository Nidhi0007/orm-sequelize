const Sequelize = require('sequelize');
const db =require('../config/database')

const Name = db.define('names',{
    id:{
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
        type:Sequelize.INTEGER
    },
    Fname:{
        type:Sequelize.STRING,
 
    },
    Lname:{
        type:Sequelize.STRING,
     
    }

},
{
timestamps: false

})
module.exports =Name;