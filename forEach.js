// Iterando um Array

const numeros = [1,2,3,4,5,6];

for(numero of numeros){
    console.log(numero)
};

numeros.forEach(function(numero){
    console.log(numero)
});

// Arrow Function

numeros.forEach((numero,indice) => console.log(numero,indice));