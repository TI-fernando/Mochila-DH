const express = require('express')
const app = express()

app.get('/clientes', (req, res)=> {

    console.log('bateu na rota de listar todos os clientes')
    const todosOsClientes = [{
        nome: "Fernando",
        email: "fernandoagro.654@gmail.com",
        idade: 27
    },
        {
        nome: "Maxcilainy",
        email: "maxcilainyinacio@gmail.com",
        idade: 25
        }]

    res.json(todosOsClientes)

})

    app.post("/clientes", (req, res) => {
        console.log("Bateu na minha rota de post")
    })


app.listen(3000, ()=> {
    console.log('O servidor foi iniciado com sucesso!')
})