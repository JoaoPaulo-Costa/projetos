// Criar um array de Objetos de faixa de preço para que
// ele possa ser usado em um site de compras
// faixas, tool,mínimo,máximo

// Primeira Opção

let faixa = [
    {tooltip: 'até R$ 500,00', minimo: 0, maximo: 500},
    {tooltip: 'até R$ 1.000,00', minimo: 500, maximo: 1000},
    {tooltip: 'acima de R$ 1.000,00', minimo: 1000, maximo: 99999999}
];

// Segunda Opção

function CriaFaixa(tooltip,minimo,maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas = [
    new CriaFaixa('até R$ 500,00',0,500),
    new CriaFaixa('até R$ 1.000,00',500,1000),
    new CriaFaixa('acima de R$ 1.000,00',1000,999999),
]

// Terceira Opção

function criaFaixas(tooltip,minimo,maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixas('até R$ 500,00',0,500),
    criaFaixas('até R$ 1.000,00',500,1000),
    criaFaixas('acima de R$ 1.000,00',1000,999999),
]

console.log(faixa),
console.log(faixas);
console.log(faixas2);