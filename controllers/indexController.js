const Mensagem = require("../database/model/Mensagem");

const controller = {
  home: (req, res, next) => {
    res.render("index", { title: "Germanno Falcão" });
  },
  formacao: (req, res) => {
    res.render("formacao");
  },
  getContato: (req, res, next) => {
    res.render("form");
  },
  postRecebido: (req, res) => {
    Mensagem.create({
      nome: req.body.nome,
      email: req.body.email,
      mensagem: req.body.mensagem,
    });
    res.render("formRecebido");
  },
};

module.exports = controller;
