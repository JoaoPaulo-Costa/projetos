// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same.

let numbers = [];

function removeDuplicates (numbers) {
    console.log(numbers.lastIndexOf(2));
    console.log(numbers.indexOf(2));

    for (let i = 0; i < numbers.length; i++) {
        if (numbers.lastIndexOf(numbers[i]) !== numbers.indexOf(numbers[i])) {
            numbers.splice(numbers.lastIndexOf(numbers[i]));
        }
    }

    console.log(numbers);

}

function removeDuplicatess (numbers) {
    let set = new Set(numbers); // o Set vai ser inicializado com o array numbers e já vai automaticamente retirar as duplicatas.
    numbers.length = 0; // depois a gente seta o numbers para zera e preenche ele com o set que foi inicializado com os numbers sem duplicatas
    numbers.push(...set.values());
    return console.log(numbers);
}