//Velocidade Máxima de até 70 km/h
//A cada 5 km/h acima, ganha 1 ponto na carteira
//Carteira tem 20 pontos
//Math.Floor() - Arredonda valores

verificarVelocidade(170);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    const limite = 20;
    console.log('Velocidade registrada: '+ velocidade + ' km/h');
    if(velocidade<=velocidadeMaxima){
        console.log('Velocidade Permitida');
    }
    else{
        const pontos = (velocidade - velocidadeMaxima)/kmPorPonto;
        if(pontos>=limite){
            console.log('Carteira Suspensa');
        }
        else {
            console.log(Math.floor(pontos) + ' Pontos deduzidos da carteira');
            console.log(limite - Math.floor(pontos) + ' pontos restantes até suspensão');
        }
    }    
}