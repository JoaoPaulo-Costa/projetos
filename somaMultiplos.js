//Somar apenas múltiplos de 3 ou 5

somar(15);

function somar(entrada){
    let resultado = 0;
    for(let i = 0; i <=entrada; i++){
        if(i % 3 === 0){
            resultado += i;
        }
        else if(i % 5 === 0){
            resultado += i;
        }
    }
    console.log(resultado);
}