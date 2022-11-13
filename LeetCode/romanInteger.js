let s = prompt('Digite um numeral romano');

function romanToInt(s) {
    let soma = 0;
    let somatorio = [];
   
    for(let j = 0; j < s.length ; j++) {
        if( s[j]==='I'){
        somatorio[j] = 1;
        }
        if( s[j]==='V'){
        somatorio[j] = 5;
        }
        if( s[j]==='X'){
        somatorio[j] = 10;
        }
        if( s[j]==='L'){
            somatorio[j] = 50;
        }                    
        if( s[j]==='C'){
            somatorio[j] = 100;
        }
        if( s[j]==='D'){
            somatorio[j] = 500;
        }
        if( s[j]==='M'){
            somatorio[j] = 1000;
        }        
    }
    for(let i = 0; i < s.length ; i++) {
        if(somatorio[i] < somatorio[i+1]){
            soma -= somatorio[i];
        }
        else {
            soma += somatorio[i];
        }        
    }

    console.log(somatorio);
    console.log(soma);
}

romanToInt(s);