let a = 'vermelho';
let b = 'azul';
let c = 'vermelho';
let d = 'azul';

console.log(a);
console.log(b);

function trocarVariavel(c,d){
    array = [c,d];
    c = array[1];
    d = array[0];
    console.log(c);
    console.log(d);
}

trocarVariavel(c,d);

// video

let e = 'vermelho';
let f = 'azul';

let g = e;

e = f;
f = g;

console.log(e);
console.log(f)