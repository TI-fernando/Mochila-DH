const express =  require('express');
const rotasProdutos = require('./router/rotasProdutos')

let app  =  express(); // declarar para poder usar o app.get ou app.use

app.get('/', (req, res) => res.send ("Ola mundo!"));
app.get('/contatos', (req, res) =>  res.send("Pagina contatos"));
app.get('/ajuda', (req, res) => res.send ("Lembrar que res.send e para imprimir."));
app.get('/eu', (req, res) => res.send ({nome:'Fernando', idade: 27}));

app.use('/produtos', rotasProdutos);
//Criando um servidor

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))