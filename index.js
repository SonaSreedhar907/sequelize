const Sequelize = require('sequelize')


const sequelize = new Sequelize('sys','root','root',{
    dialect : 'mysql'
})  


async function myFunction(){
  await sequelize.authenticate()
  console.log('connection succesffull sona')
}
myFunction()

console.log('hi')