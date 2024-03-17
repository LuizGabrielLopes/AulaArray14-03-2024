//Exemplo 1 .map
let numeros = [5, 14, 43, 32]; // Criei um array com 4 elementos 

console.log(numeros) // Exibi o array com os 4 elemenos iniciais

let multiplicacao = numeros.map((x) => x * 2); // criei uma variavel multiplicação e igualei ela ao array com o .map que retorna um novo array baseado na função dada a ele

console.log(multiplicacao); // Exibi o novo array com todos os elementos multiplicados por 2

//Exemplo 2 .map
console.log('');//Espaço entre os exemplos
console.log('');//Espaço entre os exemplos

let valores = [3,6,9,12] // Criei um array com quatro elementos

console.log(valores); // Exibi o array com todos os 4 valores iniciais

let potencia = valores.map((x) => x ** 3); // Criei uma variavel potencia e igualei ela ao array com

console.log(potencia); // Exibi o novo array com todos os elementos elevados ao cubo