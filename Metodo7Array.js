//Exemplo 1 .find
let numeros = [14.4, 1.2, 8, 7.5, 44]; // Criei um array com varios numeros

let resto = numeros.find((x) => x % 1 == 0); // Criei uma variavel resto e igualei ao array com o .find que retorna um valor do array que satisfaz uma função atribuida a ele, que no caso é um valor cujo resto da divisão por 1 é igual a 0

console.log(resto); // Exibi a variavel resto para retornar o valor que atende a função dada ao find, no caso se o numero é inteiro

//Exemplo 2 .find
console.log(''); //Espaço entre os exemplos
console.log(''); //Espaço entre os exemplos

let valores = [17, 4.6, 5.3, 27]; // Criei um array com 4 elementos

let produto = valores.find((x) => x % 1 !== 0); // Criei uma variavel produto e igualei ao array com o .find que retorna um valor do array que satisfaz uma função atribuida a ele, que no caso é um valor cujo resto da divisão por 1 é diferente de 0

console.log(produto); // Exibi a variavel produto para retornar o valor que atende a função do find, que nesse caso seria se o numero é decimal