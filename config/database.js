const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('manzil', 'root', 'linty2002',{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
})

sequelize.authenticate().then(()=>{
    console.log("Database Connection Established");
}).catch((error)=>{
    console.log("Database Connection Failed");
})

module.exports = sequelize;