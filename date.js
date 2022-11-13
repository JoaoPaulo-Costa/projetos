//Date - procurar métodos no developer mozilla

const data1 = new Date();
const data2 = new Date('March 06 2022 20:30')

const data3 = new Date(2022,03,30,9,30); // Janeiro é 0, Fevereiro é 1...

data3.setFullYear(2030);

console.log(data1.toDateString());
console.log(data2.toTimeString());
console.log(data3.toISOString());