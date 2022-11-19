// Increment the large integer by one and return the resulting array of digits.

let numbers = [];

function plusOne(numbers) {

    for(let i = numbers.length - 1; i >=0; i--) {
        if (numbers[i] !== 9) {
            numbers[i]++;
            return numbers;
        }
        if (numbers[i] === 9) {
            numbers[i] = 1;
            numbers.push(0);
            return numbers;
        }
    }
}