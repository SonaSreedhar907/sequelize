const Sequelize = require('sequelize')
const { DataTypes } = Sequelize

const sequelize = new Sequelize('sys','root','root',{
    dialect : 'mysql'
})  

const User = sequelize.define('user',{
    user_id:{
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement : true
    },
    username:{
       type : DataTypes.STRING,
       allowNull : false,
       validate:{
        len:[4,6]
       }
    },
    password:{
       type : DataTypes.STRING,
    },
    age:{
       type : DataTypes.INTEGER,
       defaultValue : 21
    },
    wittCodeRocks:{
        type : DataTypes.BOOLEAN,
        defaultValue : false
    }
},{
    freezeTableName : true,
    timestamps : false
})

console.log(sequelize.models.user)

User.sync({ alter:true }).then((data)=>{
   return User.bulkCreate(
    [{
      username:'pu',
      age:12,
      password:"punya",
      wittCodeRocks:true
    },
    {
      username:"juhi",
      age:2,
      password:"juhi",
      wittCodeRocks:true
    },{
        username:"amaldavissdfafagagga"
    }],{validate:true}
   )
}).then((data)=>data.forEach(element => {
    console.log(element.toJSON())
}))
.catch((err)=>{
    console.log("error syncing the table and model")
})

console.log('hi')