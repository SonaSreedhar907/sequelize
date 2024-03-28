const Sequelize = require('sequelize')


const sequelize = new Sequelize('sys','root','root',{
    dialect : 'mysql'
})  

const Users = sequelize.define('user',{
    username:{
       type : Sequelize.DataTypes.STRING,
       allowNull : false
    },
    password:{
       type : Sequelize.DataTypes.STRING,
    },
    age:{
       type : Sequelize.DataTypes.INTEGER,
       defaultValue : 21
    }
})

Users.sync().then((data)=>{
    console.log("Table and model synced succesffuly")
}).catch((err)=>{
    console.log("error syncing the table and model")
})

console.log('hi')