//Criar método para ler propriedade de um objeto e
//Exibir somente o tipo string dentro dele

const filme = {
    titulo : 'John Wick',
    ano : 2014,
    diretor : 'Chad Stahelski',
    personagem : 'John'
}

exibirPropriedades(filme)

function exibirPropriedades(obj){
    for(prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop,obj[prop]);
}