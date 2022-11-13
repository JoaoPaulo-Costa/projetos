// Forma ruim

const celular1 = {
    marca : 'Asus',
    tamanho : {
        vertical : 155,
        horizontal : 80
    },
    bateria : 4000,
    ligar : function() {
        console.log('Fazendo ligação...')
    }
}

// Forma melhor = Funções de fábrica

function criarCelular(marca,tamanho,bateria){
    return {
        marca,
        tamanho,
        bateria,
        ligar () {
            console.log('Fazendo ligação...')
        }
    }

}
const celular2 = criarCelular('Asus',5.5,4500);
celular2.ligar;
console.log(celular2);

//Pasccal Case - UmDoisTresQuatro

function Celular(marca,tamanho,bateria){
    this.marca = marca,
    this.tamanho = tamanho,
    this.bateria = bateria,
    this.ligar = function(){
        console.log("Fazendo Ligação...");
    }
}
const celular = new Celular('Asus',5.5,5000);
console.log(celular);