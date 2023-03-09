const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Germanno Falcão' });
});

router.get('/formacao', function(req, res) {
  res.render('formacao');
})


module.exports = router;
