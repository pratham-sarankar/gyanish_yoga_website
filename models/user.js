const sequelize = require('database')
const {DataTypes, Model } = require('sequelize');

class User extends Model {}

User.init(
    {
        username:{
            type:DataTypes.STRING,
        },
        email:{
            type:DataTypes.STRING,
        },
        phoneNumber:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING,
        },
    },{
        sequelize,
    }
);

await User.sync({ alter: true })

module.exports = User;