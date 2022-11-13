//For, While, Do..while, For..In, For..of

for (let i = 1;i <= 5; i++){
    if(i % 2 !== 0){ // operador modulus
        console.log(i);
    }
}

//

let j = 1;

while(j<=5){
    if(j % 2 !== 0){
        console.log(j);
    }
    j++;
}

//

a = 0;
do {
    console.log('Digitando');
    a++;
} while(a < 10);

//

const pessoa = {
    nome: 'Jusé',
    idade: 98
};

for(let chave in pessoa){
    console.log(chave,pessoa.idade);
}

const cores = ['Vermelho','Azul','Braco'];

for(let indice in cores){
    console.log(indice,cores[indice]);
}

//

for(let cor of cores){
    console.log(cor);
}

const pessoas = ['Jusé','Marco','Marineide'];

for(chave of pessoas){
    console.log(chave);
}