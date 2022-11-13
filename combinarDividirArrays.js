// Juntando e Recortando Arrays

const primeiro = [1,2,3];
const segundo = [4,5,6];

const combinado = primeiro.concat(segundo);
console.log(combinado);
const combinado2 = primeiro.concat(segundo);
const combinado3 = primeiro.concat(segundo);

const dividido = combinado.slice(1,3); // Sempre vai até o último indice - 1
console.log(dividido);

const dividido2 = combinado2.slice(1); // Extrai todos desde o índice até o final
console.log(dividido2);

const dividido3 = combinado3.slice(); // Copiar todos os valores para dentro da sua variável
console.log(dividido3);

