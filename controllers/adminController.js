const db = require('../database/model/db');
const Mensagens = require("../database/model/Mensagem");

const controller = {
  admin: (req, res) => {
    res.send("Rotas que começam com admin");
    console.log("Rotas que começam com admin");
  },

  mensagens: (req, res) => {
    Mensagens.findAll().then(function(posts) {
    res.render("mensagens", {mensagens: posts});
    });
   
  },
};

module.exports = controller