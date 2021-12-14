
const start = document.getElementById('start')
const round = document.getElementById('round')
const clicks = document.getElementById('clicks')
const status = document.getElementById('status')
const recordeText = document.getElementById('recorde')

const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const blue = document.getElementById('blue')
const green = document.getElementById('green')

let estado = "finished"


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
  gerarLista(numeroSortedo)
  return numeroSortedo, listaGerada
}
function gerarLista(numeroSortedo) {
  listaGerada.push(numeroSortedo)
  return listaGerada
}
function adicionarNumeroDoJogador(numero) {
  if ( estado == "finished") {
    listaJogador.push(numero)
    acenderDiv(numero)
    if(clicksRestantes != 0 ) {
      compararListas()
      reduzirClicks()
    } 
  } else if (estado == "reading") {
    console.log("reproduzindo sequencia")
  }
}
function compararListas() {
  let i = listaJogador.length-1
  if(listaGerada[i]==listaJogador[i]) {
     console.log('bateu')
  } else {
    console.log('errou')
    reset()
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

  setTimeout(()=>{lerLista()},500)

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
    
    estado = "reading"

  }
  setTimeout(() => {
    estado = "finished"
    status.classList.remove("visible");
    return estado
  }, ((1000*rodada)+500))
}
function loop(i,numero) {
  setTimeout(()=> {
    setTimeout(() => {
      acenderDiv(numero)
    },700)
  }, 1000 * i);
}

function acenderDiv(numero) {
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
    }
}

