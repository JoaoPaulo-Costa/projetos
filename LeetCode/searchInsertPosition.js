// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

let numeros = [];
let target = 0;

function searchInsert(numeros, target) {

    let lo = 0, hi = numeros.length;

    while(lo < hi) { // breaks if lo == hi
        let mid = lo + Math.floor((hi-lo)/2); // always gives the lower mid
        if(target > numeros[mid]) { 
            lo = mid + 1; // no way mid is a valid option
        }
        else {
            hi = mid // it might be possibe to inseart @ mid
        }
    }
    return lo;
}

// 0 _ 4 
// 0 2 4
// 3 _ 4
// 3 3 4
// 4 _ 4
// 4
