const Sequelize = require('sequelize')


const sequelize = new Sequelize('sys','root','root',{
    dialect : 'mysql'
})  


sequelize.authenticate().then(()=>{
    console.log('connection successfull')
}).catch((err)=>{
    console.log('error connecting to database')
})

console.log('hi')