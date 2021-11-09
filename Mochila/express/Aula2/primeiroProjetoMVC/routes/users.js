var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Alteração no retorno da rota.');
});

router.get('/rota-criada', function (req, res, next){
  //controller

  const valor1 = 10;
  const valor2 = 20;
  const resultado = valor1 * valor2;

  //Aqui eu poderia chamar meus metodos de Model para manipular banco de dados.

  res.send('Retornou minha primeira rota utilizada MVC' + resultado);
});

module.exports = router;
