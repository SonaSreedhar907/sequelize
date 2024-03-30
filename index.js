const Sequelize = require('sequelize')
const { DataTypes,Op } = Sequelize
const bcrypt = require('bcrypt')
const zlib = require('zlib')

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
       },
       get(){
        const rawValue = this.getDataValue('username')
        return rawValue.toUpperCase()
       }
    },
    password:{
       type : DataTypes.STRING,
       set(value){
        const salt = bcrypt.genSaltSync(12)
        const hash = bcrypt.hashSync(value,salt)
        this.setDataValue('password',hash)
       }
    },
    age:{
       type : DataTypes.INTEGER,
       defaultValue : 21
    },
    wittCodeRocks:{
        type : DataTypes.BOOLEAN,
        defaultValue : false
    },
    description:{
        type:DataTypes.STRING,
        set(value){
            const compressed = zlib.deflateSync(value).toString('base64')
            this.setDataValue('description',compressed)
        },
        get(){
            const value = this.getDataValue('description')
            const uncompressed = zlib.inflateSync(Buffer.from(value,'base64'))
            return uncompressed.toString()
        }
    },
    aboutUser:{
        type:DataTypes.VIRTUAL,
        get(){
            return `${this.username} ${this.description}`
        }
    }
},{
    freezeTableName : true,
    timestamps : false
})

console.log(sequelize.models.user)

User.sync({ alter: true })
    .then(() => {
        return User.findOne({where:{username:'surya'}})
    })
    .then((data) => {
        console.log(data.aboutUser)
        
    })
    .catch((err) => {
        console.log(err);
    });

console.log('hi')