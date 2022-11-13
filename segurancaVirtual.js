// Projeto 1 - Segurança Virtual

// Precisa pegar o nome da pessoa que está tentando entrar naquele lugar
// Perguntar a pessoa quem a convidou
// Precisa de um botão na tela que você quando clicar
// irá acesasar o seu código javascript para verificar se a pessoa
// que está tentando entrar foi convidada por quem ela diz que a 
// convidou
// Caso sim, alterar de 'Pesquisando' para "Pode entrar"
// Caso não, alterar de 'Pesquisando' para "Não pode entrar!

function VerificarEntrada() {
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosCristian = ['Amanda', 'Jusé','Marco','Cristina'];
    if (ConvidadosCristian.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode Entrar!'
    }
    else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Não pode Entrar!'
    }
}