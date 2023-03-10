const db = require('./db');

const Mensagem = db.sequelize.define('mensagens', {
  nome: {
    type: db.Sequelize.STRING
  },
  email: {
    type: db.Sequelize.STRING
  },
  mensagem: {
    type: db.Sequelize.TEXT
  }
})

module.exports = Mensagem;
