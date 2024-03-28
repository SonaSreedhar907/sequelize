const Sequelize = require('sequelize')


const sequelize = new Sequelize('sys','root','root',{
    dialect : 'mysql'
})  

const User = sequelize.define('user',{
    user_id:{
      type : Sequelize.DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true
    },
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
    },
    district:{
        type:Sequelize.DataTypes.STRING
    },
    state :{
        type:Sequelize.DataTypes.STRING
    }
},{
    freezeTableName : true,
    timestamps : false
})

console.log(sequelize.models.user)

User.sync({ alter:true }).then((data)=>{
    console.log("Table and model synced succesffuly")
}).catch((err)=>{
    console.log("error syncing the table and model")
})

console.log('hi')