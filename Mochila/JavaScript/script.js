/* var nome = 'Fernando'; // tipo string
var idade = 27; //tipo inteiro
var idadeDouble = 28.90;// tipo float
var bool = true; //tipo booleano

if(nome == 'Fernando') {
    console.log('Correto')
}
// Se o nome for var ou let ele pode ser alterado ao decorrer do codigo. Caso seja const ele NAO se altera.
nome = 'Pedro Miguel';

console.log(nome);

nome = 'Maxcilainy Inacio';
console.log(nome);

//Uma constante sempre vai ser uma constante, ela não se altera.
const obs  =  ('Não pode ser Alterado');
console.log(obs); */

//Função

//Primeira forma de usar
function teste(){
    console.log('Minha primeira função');
}
teste();

//ARROW FUNCTION
const teste2 = () => {
    console.log('Essa e uma função com arrow function')
}
teste2();