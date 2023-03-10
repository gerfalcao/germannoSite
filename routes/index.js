const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController')


/* GET home page. */
router.get('/', controller.home)

router.get('/formacao', controller.formacao)

router.get('/contato', controller.contato)

router.post('/recebido', controller.recebido)

module.exports = router;
