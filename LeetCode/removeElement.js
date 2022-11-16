// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

let numeros = [];
let val = 0;

function removeElement(numeros,val) {

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === val) {
            numeros.splice(i,1);
            i--;
        }
    }
    return console.log(numeros);
}