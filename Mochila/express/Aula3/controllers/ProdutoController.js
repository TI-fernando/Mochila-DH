const ProdutoController = {
    criarProduto: (req, res) => {
        res.send("Criando um produto");
    },

    deletarProduto: (req, res) => {
        const {id} = req.params;

        res.send('Deletando um produto com id: ' + id);
    }
}

module.exports = ProdutoController;