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
       allowNull : false
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
     //working with our updated table
     return User.create({
        username : 'sona',
        age : 24 ,
        password : "sonaakhil",
        wittCodeRocks : true
     })
}).then((data)=>{
    console.log('user added to database',data.toJSON())
    data.username = 'mango'
    data.age = 45
    return data.save()
}).then((data)=>{
    console.log('data is ',data.toJSON())
})
.catch((err)=>{
    console.log("error syncing the table and model")
})

console.log('hi')