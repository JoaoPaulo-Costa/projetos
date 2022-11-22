// Given two binary strings a and b, return their sum as a binary string.

let a = '';
let b = '';

function addBinary(a,b) {
    const aBin = `0b${a}`; // “0b” lets you create a number using binary of the number directly.    
    const bBin = `0b${b}`;
    const sum = BigInt(aBin) + BigInt(bBin)
    return sum.toString(2);
} 
