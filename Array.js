// ADICIONANDO ELEMENTOS AO ARRAY

const numeros = [1,2,3];

// 1 Início

numeros.unshift(0); // adiciona esse valor ao início do array
console.log(numeros);

// 2 No meio

numeros.splice(1,0,'a'); // Insere o 'a' ao índice 1
console.log(numeros);

// 3 No Final

numeros.push(1); // Adiciona o 5 na última posição do string
console.log(numeros);

// ENCONTRANDO ELEMENTOS PRIMITIVOS NO ARRAY

console.log(numeros.indexOf('a')); // se não encontrar, retorna -1
console.log(numeros.indexOf('1'));
console.log(numeros.lastIndexOf(1)); // retorna última ocorrência
console.log(numeros.includes(4));

//  ENCONTRANDO ELEMENTOS REFERÊNCIA NO ARRAY

const marcas = [
    {id: 1, nome: 'a'}, // segura ALT + SHIFT + ARROW DOWN pra copiar pra baixo
    {id: 2, nome: 'b'},
    {id: 3, nome: 'c'},
    {id: 4, nome: 'd'},
];

const marca = marcas.find(function(marca){
    return marca.nome === 'd';
});

console.log(marca);

//  REMOVENDO ELEMENTOS DO ARRAY

// 1 Final

const ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);

// 2 Inicio

const primeiro = numeros.shift();
console.log(primeiro);
console.log(numeros);

// Meio

const meio = numeros.splice(2,1);
console.log(meio);
console.log(numeros);

// ESVAZIANDO ARRAY

let numeross = [1,2,3];
let outros = numeross;

// Solução 1

// numeross = []; // Não apaga todas as referencias desse array, apenas a primeira
// console.log(outros);

// Solução 2

// numeross.length = 0;

// console.log(numeross);
// console.log(outros);

// Solução 3

// numeross.splice(0,numeros.length); // CTRL +K + C
// console.log(numeross);
// console.log(outros);

// Solução 4

while(numeross.length > 0)
    numeross.pop();
    
console.log(numeross);
console.log(outros);