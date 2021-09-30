//Array com sites
const sites = ['globo.com', 'digitalhouse.com', 'spotfy.com']
//Função que contatena o literal 'http://' com uma url que será recebida como parâmetro
function adicionarHttp(url) {
    return 'http://' + url
}
//Função que recebe um array (lista de filmes) e uma função de callback para executar a função de callback para cada ítem do array, e retornar um novo array com tais modificações
function processar(listaSites, cb) {
    const novoArray = listaSites.map((site)=> {
        const stringProcessada = cb(site)
        return stringProcessada
    })
    return novoArray
}
//Execução da função
console.log(processar(sites, adicionarHttp));