
const btnStart = document.querySelector('#btn-start')
const Trys = document.querySelector('#tentativas')

const cor1 = document.querySelector('#cor1')
const cor2 = document.querySelector('#cor2')
const cor3 = document.querySelector('#cor3')
const cor4 = document.querySelector('#cor4')

let listaNumeros = [0]
listaNumeros = []; 
let listaJogador = [0]
listaJogador = [];
let numeroRodada = 0;
let numeroTentativa = 0;
 

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sortear() {
  let numeroSorteado = getRandomIntInclusive(1,4)
  listaNumeros.push(numeroSorteado)
  console.log(listaNumeros)
  return listaNumeros
}

function contarTentativas(numeroTentativas) {
  Trys.innerHTML = "clicks restantes :"+ numeroTentativas
} 
function lerLista() {
}
function mostrarCor(){
  for (i=0;i<listaNumeros.length;i++) {
    if (listaNumeros[i] == 1 ) {
    cor1.style.backgroundColor = 'lightred'
    } else if (listaNumeros[i] == 2 ) {
    cor2.style.backgroundColor = 'lightyellow'
    } else if (listaNumeros[i] == 3 ) {
    cor3.style.backgroundColor = 'lightblue'
    } else if (listaNumeros[i] == 4 ) {
    cor4.style.backgroundColor = 'lightgreen'
    }
  }
}

function start() {

  sortear();

  numeroRodada++
  numeroTentativa = numeroRodada


  contarTentativas(numeroTentativa)
  console.log("rodada:"+numeroRodada)

  return numeroRodada,numeroTentativa
}
function clickRed() {

  console.log("red")
    listaJogador.push(1)
    numeroTentativa--
    contarTentativas(numeroTentativa)
    if (numeroTentativa == 0) {
      if (JSON.stringify(listaNumeros)===JSON.stringify(listaJogador)) {
        start()
        listaJogador = []
      } else if  (listaNumeros!=listaJogador) {
        Trys.innerHTML ='errou'
      }
    } else {
    }
    return numeroTentativa
}
   
function clickYellow() {
  console.log("yellow")
  
    listaJogador.push(2)
    numeroTentativa--
    contarTentativas(numeroTentativa)
    if (numeroTentativa == 0) {
      if (JSON.stringify(listaNumeros)===JSON.stringify(listaJogador)) {
        start()
        listaJogador = []
      } else if  (listaNumeros!=listaJogador) {
        Trys.innerHTML ='errou'
      }
    } else {
    }
    return numeroTentativa
}
function clickBlue() {
  console.log("blue")

    listaJogador.push(3)
    numeroTentativa--
    contarTentativas(numeroTentativa)

    if (numeroTentativa == 0) {
      if (JSON.stringify(listaNumeros)===JSON.stringify(listaJogador)) {
        start()
        listaJogador = []
      } else if  (listaNumeros!=listaJogador) {
        Trys.innerHTML ='errou'
      }
    } else {
    }
    return numeroTentativa
}

function clickGreen() {
  console.log("green")

    listaJogador.push(4)
    numeroTentativa--
    contarTentativas(numeroTentativa)
    if (numeroTentativa == 0) {
      if (JSON.stringify(listaNumeros)===JSON.stringify(listaJogador)) {
        start()
        listaJogador = []
      } else if  (listaNumeros!=listaJogador) {
        Trys.innerHTML ='errou'
      }
    } else {
    }
    return numeroTentativa
}