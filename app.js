const body = document.querySelector('#el-body')
const col3 = document.querySelector('.col-3')
const col2 = document.querySelector('.col-2')
const start = document.getElementById('start')
const hard = document.getElementById('hard')
const round = document.getElementById('round')
const clicks = document.getElementById('clicks')
const status = document.getElementById('status')
const recordeText = document.getElementById('recorde')
const redCircle = document.querySelector('.title-circle-1')
const blueCircle = document.querySelector('.title-circle-2')
const yellowCircle = document.querySelector('.title-circle-3')

const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const blue = document.getElementById('blue')
const green = document.getElementById('green')
const purple = document.getElementById('purple')
const orange = document.getElementById('orange')

let estado = "finished"

const listaCores = [red, yellow, blue, green, purple, orange]


let listaGerada = [];
let listaJogador = [];
let rodada = 0
let clicksRestantes = 0
let recorde = 0

let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;



if (width > 980) {
  console.log(width)
  col3.style.flexDirection = 'column'
  orange.style.marginLeft = '-10px'
  body.style.backgroundImage = " url(./imgs/backgroundBig.svg)"
}


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
  if (event.keyCode === 13) {
    if (start.style.visibility != 'hidden') {
      começar()
    }
  }
});

purple.classList.add('hidden')
orange.classList.add('hidden')

hard.classList.add('disabled')

hard.addEventListener('click', check())



function check() {
  if (hard.classList[1] == 'disabled') {
    console.log('complete a rodada 20 para liberar')
  } else {

  }
}


function sortearNumero(n) {
  let numeroSortedo = ((Math.floor(Math.random() * n)) + 1)
  gerarLista(numeroSortedo)
  return numeroSortedo, listaGerada
}
function gerarLista(numeroSortedo) {
  listaGerada.push(numeroSortedo)
  return listaGerada
}
function adicionarNumeroDoJogador(numero) {
  if (estado == "finished") {
    listaJogador.push(numero)
    acenderDiv(numero)
    if (clicksRestantes != 0 && compararListas() == true) {
      reduzirClicks()
    }
  } else if (estado == "reading") {
    console.log("reproduzindo sequencia")
  }
}
function compararListas() {
  let i = listaJogador.length - 1
  if (listaGerada[i] == listaJogador[i]) {
    console.log('bateu')
    return true
  } else {
    console.log('errou')
    reset()
    resetText()

    return false
  }
}

function reset() {
  listaGerada = []
  if (recorde < rodada) {
    recorde = rodada
    salvarRecorde(recorde)
    if (recorde > 19) {
      hard.classList.remove('disabled')
    }
  } else if (recorde > rodada) {
    salvarRecorde(recorde)
  }
  rodada = 0
  clicksRestantes = 0

  return rodada, clicksRestantes, listaGerada, recorde
}
function resetText() {
  round.innerText = ''
  clicks.innerText = ''
  start.classList.remove('disabled')
}
function salvarRecorde(recorde) {
  recordeText.innerHTML = "Maior Rodada:" + recorde
}
function começar() {

  recordeText.innerHTML = ""

  rodada++
  clicksRestantes = rodada

  atualizarTexto(rodada, clicksRestantes)

  sortearNumero(4)

  setTimeout(() => { lerLista() }, 500)

  listaJogador = [];

  start.classList.add('disabled')

  return rodada, clicksRestantes, listaJogador
}
function atualizarTexto(numeroDaRodada, clicksRestantes) {
  round.innerText = "Round:" + numeroDaRodada
  clicks.innerText = "Clicks Restantes:" + clicksRestantes
}
function reduzirClicks() {
  clicksRestantes--
  clicks.innerText = "Clicks Restantes:" + clicksRestantes
  if (clicksRestantes == 0) {
    começar()
  }
}
function lerLista() {
  acenderCirculos()
  for (let i = 0; i < listaGerada.length; i++) {
    let numero = listaGerada[i]
    loop(i, numero)
    status.classList.add("visible")
    estado = "reading"

  }
  setTimeout(() => {
    apagarCirculos()
    estado = "finished"
    status.classList.remove("visible");
    return estado
  }, ((1000 * rodada) + 500))
}
function loop(i, numero) {
  setTimeout(() => {
    setTimeout(() => {
      acenderDiv(numero)
    }, 700)
  }, 1000 * i);
}

function acenderDiv(numero) {
  listaCores[numero - 1].classList.add('ativo')
  setTimeout(() => {
    listaCores[numero - 1].classList.remove('ativo')
  }, 300);
}
function mostrarNovasCores() {
  col2.style.marginRight = "3%"

  purple.style.display = "initial"
  orange.style.display = "initial"

  purple.classList.remove('hidden')
  orange.classList.remove('hidden')
}
function acenderCirculos() {
  redCircle.style.animationName = "red"
  blueCircle.style.animationName = "blue"
  yellowCircle.style.animationName = "yellow"
}
function apagarCirculos() {
  redCircle.style.animationName = ""
  blueCircle.style.animationName = ""
  yellowCircle.style.animationName = ""  
}