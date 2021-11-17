const express = require('express') // require e para importar, esta importando o express
const app= express() //instanciando o express

app.get('/home',(req, res) => {  //Para acessar a pagina, somente sera aceito pelo servidor se passar pela pagina home.
    res.send('Ola Express!');
})

app.listen(3000); //Habilita o servidor na porta 3000, podendo ser declarada qualquer porta - acessando com:localhost://3000
console.log("Servidor rodando na porta 3000")