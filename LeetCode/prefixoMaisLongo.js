// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

let strings = [];

// function prefixoMaisLongo(strings) {  
//     strings.sort(); // arranja as strings em ordem alfabética
//     console.log(strings);
//     console.log(strings[0][2]);
//     for (let i = 0; i < strings[0].length; i++){ // compara o primeiro com o último, pois os outros já vão ter correlação de qualquer forma
//         if(strings[0][i] !== strings[strings.length - 1][i]) return strings[0].substr(0, i);
                
//     }
//     return strings[0];
// }

function prefixoMaisLongo(strings) {  
    //strings.sort(); // arranja as strings em ordem alfabética
    console.log(strings);
    console.log(strings[0][2]);
    for (let i = 0; i < strings[0].length; i++){ // compara o primeiro com o último, pois os outros já vão ter correlação de qualquer forma
        if(strings[0][i] !== strings[strings.length - 1][i]) return strings[0].substr(0, i);
                
    }
    return strings[0];
}