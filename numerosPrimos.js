//Mostrar apenas números primos

exibirNumerosPrimos(15);

function exibirNumerosPrimos(entrada){
    for(let numero = 2;numero<=entrada;numero++){    
        
        if(numeroPrimo(numero)) console.log(numero);
    }
}

function numeroPrimo(numero){
    for(let j = 2; j< numero;j++){
        if(numero%j === 0){
            return false;
        }
    }
    return true;
}