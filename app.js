//let  titulo = document.querySelector('h1');
//para manipular o trecho de titulo <h1></h1> do html
//titulo.innerHTML='Jogo do número secreto';

//let paragrafo = document.querySelector('p'); //nome da tag
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//função - trecho do código que executa/tem alguma responsabilidade (uma)
let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) { 
  let campo = document.querySelector(tag); //adicionando parâmetros 
  campo.innerHTML = texto;
  if ('speechSynthesis' in window) {
    let utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR'; 
    utterance.rate = 1.2; 
    window.speechSynthesis.speak(utterance); 
} else {
    console.log("Web Speech API não suportada neste navegador.");
}
}

function mensagemInicial(){
  exibirTextoNaTela('h1', 'Jogo do número secreto');//executando a função
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 50');
  }

exibirTextoNaTela('h1', 'Jogo do número secreto');//executando a função
exibirTextoNaTela('p', 'Escolha um número entre 1 e 50');

function verificarChute() {
  let chute = document.querySelector('input').value; //valor que ta dentro do campo
  
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'ACERTOU!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('p', 'O número secreto é menor');
    } else {
      exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativas++;
  }
}

function limparCampo() {
  let chute = document.querySelector('input');
  chute.value = ''; 
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;


  if (quantidadeDeElementosNaLista == 5 ) {
    listaDeNumerosSorteados =[];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
} else {
  listaDeNumerosSorteados.push(numeroEscolhido);
  console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  mensagemInicial()
 document.getElementById('reiniciar'). setAttribute('disabled', true)
}
