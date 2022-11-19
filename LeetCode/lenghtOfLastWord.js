// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

let s = new String;

function lengthLW(s) {
    console.log(s.trim().split(' ').pop().length);
   }