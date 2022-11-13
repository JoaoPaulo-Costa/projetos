//Receber uma quantidade de valores para avaliar quais são par e impar

parImpar(7);

function parImpar(entrada){
    for(let i = 0 ; i<=entrada ; i++){
        if(i % 2 === 0){
            console.log(i + ' PAR')
        }
        else{
            console.log(i + ' IMPAR');
        }
    }
}