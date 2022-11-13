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

// Arrow Funcion

const marcass = [
    {id: 1, nome: 'a'}, // segura ALT + SHIFT + ARROW DOWN pra copiar pra baixo
    {id: 2, nome: 'b'},
    {id: 3, nome: 'c'},
    {id: 4, nome: 'd'},
];

console.log(marcass.find((marcaa) => marcaa.nome === 'c'));