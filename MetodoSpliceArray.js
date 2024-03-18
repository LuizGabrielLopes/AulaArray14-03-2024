//Exemplo 1 .splice adicionando elementos
let herois = ['Super choque', 'Homem Aranha', 'Homem de Ferro', 'Batman', 'Nick Fury']; // Criei a variavel herois com 5 elementos

herois.splice(1,0, 'Superman'); // utilizei o .splice para adicionar um elemento ao array

console.log(herois); // Exibi o array com o novo elemento 

//Exemplo 2 .splice excluindo elementos
console.log(''); //Espaço entre os exemplos
console.log(''); //Espaço entre os exemplos

let viloes = ['Thanos', 'Ultron', 'Coringa', 'Espantalho', 'Duende Verde']; // Criei um novo array com 5 elementos

viloes.splice(0,1); // Utilizei o .splice para excluir o primeiro elemento do array

console.log(viloes); // Exibi o novo array após a exclusão do primeiro elemento

//Exemplo 3 .splice substituindo elementos
let antiherois = ['Wolverine', 'Motoqueiro Fantasma', 'Deadpool', 'Loki', 'Soldado Invernal']; // Criei outro array com mais 5 elementos

antiherois.splice(0,1,'Arlequina'); // Utilizei o .splice para substituir o primeiro elemento do array

console.log(antiherois) // Exibi o novo array após a substituição