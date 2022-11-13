// Criar uma função para mostrar quantidade de *

exibirAsteristicos(9);
console.log('__//__');
exibirAsteristicos2(9);

function exibirAsteristicos(linhas){
    let resultado = '';
    for(i = 0; i < linhas; i++){
        resultado += '*'
    }
    console.log(resultado);
}



function exibirAsteristicos2(linhas){
    for(let j = 0; j < linhas; j++){
        let resultado2 = '';
        for(let a = 0; a < j; a++){
            resultado2 += '*'            
        }
        console.log(resultado2);
    }
    
}