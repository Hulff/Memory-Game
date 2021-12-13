
const start = document.getElementById('start')
const round = document.getElementById('round')
const clicks = document.getElementById('clicks')
const status = document.getElementById('status')
const recordeText = document.getElementById('recorde')

const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const blue = document.getElementById('blue')
const green = document.getElementById('green')


let listaGerada = [];
let listaJogador = [];
let rodada = 0
let clicksRestantes = 0

let recorde = 0 


document.addEventListener('keydown', function (event) {
  if (event.key === 'q') {
    adicionarNumeroDoJogador(1)
  }
  if (event.key === 'w') {
    adicionarNumeroDoJogador(2)
  }
  if (event.key === 'a') {
    adicionarNumeroDoJogador(3)
  }
  if (event.key === 's') {
    adicionarNumeroDoJogador(4)
  }
});



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
  if (recorde<rodada) {
  recorde = rodada
  salvarRecorde(recorde)
  } else if (recorde> rodada) {
    salvarRecorde(recorde)
  }
  rodada = 0
  clicksRestantes = 0

  start.style.visibility = "visible"

  return rodada,clicksRestantes,listaGerada,recorde
}
function salvarRecorde (recorde) {
  recordeText.innerHTML = "Maior Rodada:"+recorde
}
function começar () {
  
  recordeText.innerHTML = ""

  rodada++
  clicksRestantes = rodada

  atualizarTexto(rodada,clicksRestantes)

  sortearNumero()

  lerLista()

  listaJogador = [];

  start.style.visibility = "hidden"

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
    status.classList.add("visible")
  }
  setTimeout(() => {
    status.classList.remove("visible")
  }, ((1000*rodada)+500))
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
      }, 400);
    } else if (numero == 2) {
      yellow.classList.add('ativo')
      setTimeout(() => {
        yellow.classList.remove('ativo');
      }, 400);
    } else if (numero == 3) {
      blue.classList.add('ativo')
      setTimeout(() => {
        blue.classList.remove('ativo');
      }, 400);
    }else if (numero == 4) {
      green.classList.add('ativo')
      setTimeout(() => {
        green.classList.remove('ativo');
      }, 400)
    }},700)
}
