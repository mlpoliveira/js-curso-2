// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número de 1 a 10';
// 
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
mensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
        //console.log(chute == numeroSecreto);
        if (chute == numeroSecreto) {
            exibirTextoNaTela('h1', 'Você acertou!');
            let palavraTentativas = tentativas == 1 ? 'tentativa' : 'tentativas';
            let mensagemTentativas = `Você descobriu o numero secreto em ${tentativas} 
            ${palavraTentativas}`; 
            exibirTextoNaTela('p', mensagemTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
           } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);	
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ' ';
}   

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1; 
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


