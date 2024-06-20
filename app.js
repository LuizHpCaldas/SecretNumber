let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
function exbirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial(){

    exbirTextoNaTela('h1', 'Jogo do numero secreto');
    exbirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}
exibirMensagemInicial();
reinicarJogo();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exbirTextoNaTela('h1', 'Acertouu!');
       
        exbirTextoNaTela('p', 'O Mizeravel eh um genio!');
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exbirTextoNaTela('h1', 'Errou feio, Errou rude!');
            exbirTextoNaTela('p', 'O numero secreto e menor!');
        }else{
            exbirTextoNaTela('h1', 'Errou feio, Errou rude!');
            exbirTextoNaTela('p', 'O numero secreto e maior!');
        }
        limparCampo();
    }

}


function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
   if(quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
   }
   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reinicarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}