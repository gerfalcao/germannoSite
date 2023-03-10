const express = require('express');
const router = express.Router();
const controller = require('../controllers/adminController')

router.get('/', controller.admin)

router.get('/mensagens', controller.mensagens)

router.post('/mensagens', controller.adminLog)

module.exports = router;
