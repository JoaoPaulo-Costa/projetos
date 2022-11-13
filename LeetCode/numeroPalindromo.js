const numero = 1441;

function ehPalindromo(numero){
    const num = String(numero).split('');
    
    let primeiro = 0;
    let ultimo = num.length - 1; // o length é 4, mas o último é o index 3, por isso -1

    while(primeiro < ultimo){
        if (num[primeiro] !== num[ultimo]){
            return false;
        }
        primeiro++;
        ultimo--;
    }    
    return true;    
}

ehPalindromo(numero);

function ehPalindromos(numero){
    const numm = String(numero).split('');
    console.log(numm)
    while(numm.length > 1){
        if (numm.shift()!==numm.pop()){
            return false;
        }
    }
    console.log(numm)
    return true;    
}