const express = require('express');
const router = express.Router();

router.get('/formacao', function(req, res) {
  res.render('formacao');
})


module.exports = router;