// Para nomear uma função, vai precisar de um verbo + um substantivo
let corSite = "azul";
function resetaCor(cor,tonalidade) {
    corSite = cor + ' ' +tonalidade; // o + vai juntar (serve como concatenar)
};

console.log(corSite);
resetaCor("Vrmelho","Claro");
console.log(corSite);