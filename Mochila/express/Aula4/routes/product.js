var express = require('express');
var router = express.Router();

var {retornaTexto} = require('../controller/product')
var {seguranca} = require('../middlewares/seguranca')

/* GET users listing. */
router.get('/',retornaTexto);

router.get('/retorna-texto-1', seguranca ,retornaTexto);

router.get('/retorna-texto-2',retornaTexto);

router.get('/retorna-texto-3',retornaTexto);

router.get('/retorna-texto-4',retornaTexto);

router.get('/retorna-texto-5',retornaTexto);
module.exports = router;