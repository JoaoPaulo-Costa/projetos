// Criar Construction function que cria objetos que tenham:
// Titulo, mensagem, autor, visualizações
// Comentário (autor, mensagem), estaAoVivo

function CriaPost(titulo,mensagem,autor){ // focar em colocar no máximo 3 propriedades na função construtor
        this.titulo = titulo, 
        this.mensagem = mensagem,
        this.autor = autor,
        this.vizualizacoes = 0,
        this.comentarios = [],
        this.estaAoVivo = false
    
}

let post1 = new CriaPost (
    'Jesus Salva',
    `Olá
    Jesus Salva, meu amigo
    Abs.`,
    'Jusé',
)

let post2 = new CriaPost (
    'Jesus Mata',
    `Olá
    Jesus Mata, seu seu puto
    Abs.`,
    'Judas',
)

console.log(post1);
console.log(post2);
