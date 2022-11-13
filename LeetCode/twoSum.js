const numeros = [2,7,11,15];
const soma = 26;
const nums = [2,7,11,15];
const target = 26;


console.time('twoSum2For');
twoSum2For(numeros,soma);
console.timeEnd('twoSum2For');

console.time('twoSumIndexOf');
twoSumIndexOf(numeros,soma);
console.timeEnd('twoSumIndexOf');

console.time('twoSumMap');
twoSumMap(numeros,soma);
console.timeEnd('twoSumMap');


function twoSum2For(numeros,soma) {
    for(let i = 0; i < numeros.length; i++){
        for(let j = 1; j < numeros.length; j++){
            if(numeros[i] + numeros [j] === soma){
                return [i,j];     
            }
        }
    }
};


function twoSumIndexOf(nums,target) {
    for(let a = 0; a < nums.length; a++){
        const indexOfComplement = nums.indexOf(target - nums[a]);
        if(indexOfComplement != -1){
            return [a, indexOfComplement];
        }        
    }    
};

function twoSumMap(nums, target) {
    let map = new Map();
    
    for(let a = 0; a < nums.length; a ++) {
        const complement = target - nums[a];
        if(map.has(complement)) {
            return [map.get(complement), a];
        } else {
            map.set(nums[a], a);
        }
    }
	return [];
};