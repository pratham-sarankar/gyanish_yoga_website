const sequelize = require('../config/database')
const {DataTypes} = require('sequelize');

const User = sequelize.define("user",
    {
        username: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            primaryKey:true,
        },
        password: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
    }
);

User.sync().then(()=>{
    console.log("User Model Synced");
}).catch((error)=>{
    console.log("User Model Syncing Failed");
})

module.exports = User;