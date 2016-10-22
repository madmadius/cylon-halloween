var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cylon Index' });
});

router.get('/2', function(req, res, next) {
  res.render('../node_modules/jade-bootstrap/layouts/dashboard', { title: 'Cylon Index' });
});

module.exports = router;
