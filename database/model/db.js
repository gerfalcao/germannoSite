const { STRING } = require('sequelize');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mensagens', 'root', '37b4a1060', {
  host: "localhost",
  dialect: 'mysql'
})

sequelize.authenticate().then(()=>{console.log('Conectado com sucesso')}).catch(()=>{console.log('Falha ao se conectar: '+erro)})


module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}