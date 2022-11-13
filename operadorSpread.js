// MELHOR FORMA DE DIVIDIR E CONCATENAR ARRAYS

const primeiro = [1,2,3];
const segundo = [4,5,6];

// Operador SPREAD

const combinado = [...primeiro,...segundo];
console.log(combinado);

const combinado2 = [...primeiro,'a',...segundo];
console.log(combinado2);

const clonado = [...combinado];
console.log(clonado);