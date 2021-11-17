var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  
});

/* Nova Rota */
router.get('/contato', indexController.viewContato);

console.log('Servidor rodando na porta 3000...')
module.exports = router;
