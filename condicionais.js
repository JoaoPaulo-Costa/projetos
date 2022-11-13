// If .. Else

// Se a hora estiver entre as 06:00 até 12:00 : Bom dia!
// Se a hora estiver entre 12:00 até 18:00 : Boa tarde!

// Caso contrário: Boa noite!

let hora = 9;

if(hora > 6 && hora < 12){
    console.log('Bom Dia!')
}
else if(hora > 12 && hora < 18){
    console.log('Boa Tarde!')
}
else{
    console.log('Boa Noite!')
}

// Switch..Case

let permissao = 'comun'; // usuário Comum, usuário Gerente, usuário Diretor

switch(permissao){
    case 'comum':
        console.log('Usuário Comum');
        break;
    case 'gerente':
        console.log('Usuário Gerente');
        break;
    case 'diretor':
        console.log('Usuário Diretor');
        break;
    
    default:
        console.log('Usuário não reconhecido');
}