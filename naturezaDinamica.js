// Natureza dinâmica dos Objetos

const mouse = {
    cor: 'red',
    marca: 'dazz'
}

mouse.velocidade = 5000;
mouse.trocarDPI = function(){
    console.log('mudando DPI ');
}

console.log(mouse);

// Clona objeto e pode adicionar propriedades

const novoObjeto = Object.assign({
    bateria: '500'
},mouse);

console.log(novoObjeto);

const objeto2 = {...mouse};
console.log(objeto2);
