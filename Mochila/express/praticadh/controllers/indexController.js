let indexController = {
    viewContato: (req, res) => {
        let {nome, idade} = req.query;
        res.render('contato',{nomeUsuario:nome});
    }
}

module.exports = indexController;