//Se divisivel por 3 => Fizz
//Se divisível por 5 => Buzz
//Se divisível por ambos => FizzBuzz
//Se negativa em ambos => retorna entrada
//Se não número => retorna "Não é número"

const resultado = fizzBuzz(107);
const resultado2 = fizzBuzz2(4);

console.log(resultado);
console.log(resultado2);

let numero = 0;

function fizzBuzz2(numero){
    switch(numero){
        case numero == 5:
            return 'FizzBuzz';
            break;
        case numero % 3 != 0 && numero % 5 != 0:
            return numero;
            break;
        case numero % 3 == 0:
            return 'Fizz';
            break
        case numero % 5 == 0:
            return 'Buzz';
            break
        default:
            'Não é número'
    }
}

function fizzBuzz(numero2){
    if(typeof numero2 != 'number'){
        return 'Não é número';
    }
    if(numero2 % 3 == 0 && numero2 % 5 == 0){
        return 'FizzBuzz';
    }
    if(numero2 % 3 != 0 && numero2 % 5 != 0){
        return numero2;
    }
    if(numero2 % 3 == 0){
        return 'Fizz';
    }
    if(numero2 % 5 == 0){
        return 'Buzz';
    }    
}