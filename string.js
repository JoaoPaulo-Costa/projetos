// Tipo primitivo

const mensagem = 'Boa Noite';

// Tipo objeto - permite usar métodos padrão usando mensagem2.metódo

const mensagem2 = new String('Bom dia');

console.log(mensagem2[2]);
console.log(mensagem2.includes('dia'));
console.log(mensagem2.startsWith('Bão'));
console.log(mensagem2.endsWith('dia'));
console.log(mensagem2.indexOf('dia'));
console.log(mensagem2.replace('Bom','Ruim'));
const mensagem3 = new String(' Bom dia   ');
console.log(mensagem3);
console.log(mensagem3.trim());
console.log(mensagem3.split(' '));