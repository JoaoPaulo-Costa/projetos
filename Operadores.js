// Operadores Aritiméticos(matemáticos) - +, -. *, **, ++, --

let salario = 100;

console.log(salario**2);

let idade = 18;

console.log(idade++); //exibe o 18 e depois soma 1
console.log(idade);
console.log(--salario); //tira 1 ao 18 antes

// Operadores de atribuição - =, +=, -=

let valorTeclado = 200;
valorTeclado += valorTeclado;
console.log(valorTeclado);

// Operadores de Comparação 

console.log( 1 === 1); // Igualdade estrita - compara valor e tipo
console.log('1' === 1);

console.log(1==1); // Igualdade solta - compara apenas valor
console.log('1'==1);

// Operadores ternário

//Tem um cliente, 100 premium, comum

let pontos = 101;
let tipo = pontos > 100 ? 'premium':'comum';
console.log(tipo);

// Operadores lógicos - e (&&), ou (||), not (!)

console.log(true && true);

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log('pode aplicar:', podeAplicar);

let maiorDeIdade2 = false;
let possuiCarteiraDeTrabalho2 = true;
let podeAplicar2 = maiorDeIdade2 || possuiCarteiraDeTrabalho2;

console.log('pode aplicar 2', podeAplicar2);

let candidatoRecusado = !podeAplicar;
console.log('canditado recusado', candidatoRecusado);

// Comparações lógicos com valores não booleanos
// Falsy - undefined, null, 0, false, '', NaN (Not a Number)

// Truthy - tudo que não é Falsy

let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corDoPerfil = corPersonalizada || corPadrao;

console.log(corDoPerfil); // no OR precisa do primeiro valor truthy para retornar

// Operadores Bitwise
