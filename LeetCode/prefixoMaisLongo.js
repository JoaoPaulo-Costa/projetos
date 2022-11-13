// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

let strings = [];

// function prefixoMaisLongo(strings) {
//     maximo = [];
//     for(let i = 0; i < strings.length; i++){
//         maximo[i] = strings[i].length;              
//     }
//     // return Math.max(...maximo);
//     for (let j = 0; j < Math.max(...maximo); j++){
//         for (let a = 1; a < Math.max(...maximo); a++){
//             i
//         }

//     }
//     strings.every()
// }

function prefixoMaisLongo(strings){
    strings.sort();
    console.log(strings);
    console.log(strings[0][2]);
    for( let i = 0; i < strings[0].length; i++){
        if( strings[0][i] !== strings[strings.length - 1][i]) return strings[0].substr(0, i);
    }
    return strings[0];
}