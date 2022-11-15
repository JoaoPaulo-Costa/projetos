// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

let s = '';

function isValid(s) {

    const stack = []; // Irá armazenar os parenteses que esperamos dependendo dos parenteses de abertura

    for (let i = 0; i < s.length; i++) {

        if (s[i] == '{') {
            stack.push('}');
        }
        else if(s[i] == '['){
            stack.push(']');
        }
        else if(s[i] == '('){
            stack.push(')');
        }
        else if(stack.pop() !== s[i]){
            return false;
        }
        //return !stack.length;
        return stack.length === 0;
    }
    console.log(stack);
}


function isValids(s) {

    const stack = [];
    const complement = { // cria uma lista com os complementes corretos para cada parenteses
        ')': '(',
        '}': '{',
        ']': '[',
    };
    for (let char of s) {
        if (!complement[char]) stack.push(char); // para cada caractere, vai preencher o stack com todos os complementes (os que não são inicios de parenteses)
        else if (stack.pop() !== complement[char]) return false; // caso o último caractere no stack for diferente do seu complemento, vai retornar falso,
    }
    console.log(complement);
    console.log(stack);
    return stack.length === 0;
}

isValids('()');

// function isValidss(s) {

//     const stack = [];
//     const complement = {
//         ')': '(',
//         '}': '{',
//         ']': '[',
//     };
//     for (let char of s) {
//         if (!complement[char]) stack.push(char);
//         //else if (stack.pop() !== complement[char]) return false;
//     }
//     console.log(stack)
//     ;
//     //return stack.length === 0;
// }

