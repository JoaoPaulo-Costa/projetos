// Criar objeto qye tenha:
// Titulo, mensagem, autor, visualizações
// Comentário (autor, mensagem), estaAoVivo

let post = {
    titulo : 'Jesus Salva',
    mensagem : `Olá
    Jesus Salva, meu amigo
    Abs.`,
    autor : 'Jusé',
    vizualizacoes : 5000,
    comentarios : [
        {autor: 'a',mensagem: 'b'},
        {autor: 'c',mensagem: 'd'}
    ],
    estaAoVivo : true
}

console.log(post);