const Sequelize = require('sequelize')
const {DataTypes,Op} = Sequelize

const sequelize = new Sequelize('sys','root','root',{
    dialect : 'mysql'
})  

const Student = sequelize.define('student',{
    student_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[4,20]
        }
    },
    favorite_class:{
        type:DataTypes.STRING(25),
        defaultValue:'computer'
    },
    school_year:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    subscribe_to_wittcode:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
},{
    freezeTableName:true,
    timestamps:false
})

Student.sync().then(()=>{
    return Student.findOne({where:{
        age:{
            [Op.or]:{
                [Op.lt]:28,
                [Op.eq]:null
            }
        }
    }})
}).then((data)=>{
   console.log(data.toJSON())
})
.catch((err)=>{
    console.log(err)
})