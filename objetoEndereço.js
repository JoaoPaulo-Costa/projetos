// Criar objeto Endereço que contém:
// Rua, CEP, Cidade, exibirEndereço(endereço);

let endereco = {
    rua: 'Valter Peters',
    cep: '89220-430',
    cidade: 'Joinville-SC'
}

function exibirEndereco(obj) {
    for(let prop in obj) {
        console.log(prop,obj[prop]);
    }
}

exibirEndereco(endereco);