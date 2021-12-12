
const start = document.getElementById('start')
const round = document.getElementById('round')
const clicks = document.getElementById('clicks')

const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const blue = document.getElementById('blue')
const green = document.getElementById('green')


let listaGerada = [];
let listaJogador = [];
let rodada = 0
let clicksRestantes = 0

function sortearNumero () {
  let numeroSortedo = ((Math.floor(Math.random() * 4))+1)
  console.log(numeroSortedo)
  gerarLista(numeroSortedo)
  return numeroSortedo, listaGerada
}
function gerarLista(numeroSortedo) {
  listaGerada.push(numeroSortedo)
  return listaGerada
}
function adicionarNumeroDoJogador(numero) {
    listaJogador.push(numero)
    if(clicksRestantes != 0 ) {
      reduzirClicks()
      compararListas()
    } 
}
function compararListas() {
  for(i=0;i<listaJogador.length;i++){
  if(listaGerada[i]==listaJogador[i]) {
     console.log('bateu')
  } else {
    console.log('errou')
    reset()
  }
 }
}
function reset() {
  round.innerText = ''
  clicks.innerText = ''
  listaGerada = []
  rodada = 0
  clicksRestantes = 0

  return rodada,clicksRestantes,listaGerada
}
function começar () {
  rodada++
  clicksRestantes = rodada

  atualizarTexto(rodada,clicksRestantes)

  sortearNumero()

  lerLista()

  listaJogador = []

  return rodada,clicksRestantes,listaJogador
}
function atualizarTexto (numeroDaRodada,clicksRestantes) {
  round.innerText = "Round:"+ numeroDaRodada
  clicks.innerText = "Clicks Restantes:"+ clicksRestantes
}
function reduzirClicks () {
  clicksRestantes--
  clicks.innerText = "Clicks Restantes:"+ clicksRestantes
  if (clicksRestantes == 0) {
    começar()
  }
}
function lerLista () {
  for (let i=0;i<listaGerada.length;i++) {
    let numero = listaGerada[i]
    loop(i,numero)
  }
}
function loop(i,numero) {
  setTimeout(()=> {
     acenderDiv(numero)
  }, 1000 * i);
}

function acenderDiv(numero) {
 setTimeout(()=>{ 
   if (numero == 1) {
      red.classList.add('ativo')
      setTimeout(() => {
        red.classList.remove('ativo');
      }, 300);
    } else if (numero == 2) {
      yellow.classList.add('ativo')
      setTimeout(() => {
        yellow.classList.remove('ativo');
      }, 300);
    } else if (numero == 3) {
      blue.classList.add('ativo')
      setTimeout(() => {
        blue.classList.remove('ativo');
      }, 300);
    }else if (numero == 4) {
      green.classList.add('ativo')
      setTimeout(() => {
        green.classList.remove('ativo');
      }, 300)
    }},700)
}