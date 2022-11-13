// Função que retorna maior entre 2 números

let valorMaior = max(-11,-10);
console.log(valorMaior);

let valorMaior2 = max2(-11,-12);
console.log(valorMaior2);

function max(numero1,numero2){
    if(numero1 > numero2){
        return numero1;
    }
    else{
        return numero2;
    }
}

//

function max2(numero3,numero4){
    return numero3 > numero4? numero3:numero4;
}