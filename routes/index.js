const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController')


/* GET home page. */
router.get('/', controller.home)

router.get('/formacao', controller.formacao)

router.get('/contato', controller.getContato)

router.post('/recebido', controller.postRecebido)

module.exports = router;
