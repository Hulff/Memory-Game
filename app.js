
const btnStart = document.querySelector('#btn-start')

const cor1 = document.querySelector('#cor1')
const cor2 = document.querySelector('#cor2')
const cor3 = document.querySelector('#cor3')
const cor4 = document.querySelector('#cor4')

let listaNumeros = [0]
 
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function sortear() {
  let numeroSorteado = (getRandomInt(4)+1);
  listaNumeros.push(numeroSorteado)
  return listaNumeros
}

function start() {

  console.log('start')
  btnStart.disabled = true;

  jogo()
}

function clickRed() {
  console.log("red")
}
function clickYellow() {
  console.log("yellow")
}
function clickBlue() {
  console.log("blue")
}
function clickGreen() {
  console.log("green")
}