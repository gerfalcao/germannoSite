const db = require('../database/model/db');
const Mensagens = require("../database/model/Mensagem");
const app = require('../app')

let login = 'admin';
let password = 123456;

const controller = {
  admin: (req, res) => {
    res.render("admin");
 },

  // mensagens: (req, res) => {
  //   Mensagens.findAll({order: [['id', 'DESC']]}).then((posts) => {
  //       res.render("mensagens", {mensagens: posts});
  //  })
  // }

  adminLog: (req,res) => {
    if(req.body.password == password && req.body.login == login){
      req.session.login = login;
      Mensagens.findAll({order: [['id', 'DESC']]}).then((posts) => {
         res.render("mensagens", {mensagens: posts});
    })
    } else {
    res.render('index')
    }
  },

  mensagens: (req, res) => {
    if (req.session.login){
      Mensagens.findAll({order: [['id', 'DESC']]}).then((posts) => {
        res.render("mensagens", {mensagens: posts});
   })
    } else {
    res.render('admin')
   }
  }
}

module.exports = controller