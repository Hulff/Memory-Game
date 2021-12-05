
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

function mostrarCor2(i) {
  if (listaNumeros[i]=== 1) {
    cor1.style.backgroundColor = 'red'
    cor1.ontransitionend = () => {
      cor1.style.backgroundColor = 'maroon'
      console.log('terminou')
    };
  } else if  (listaNumeros[i]===2) {
    cor2.style.backgroundColor = 'yellow'
    cor2.ontransitionend = () => {
      cor2.style.backgroundColor = 'gold'
      console.log('terminou')

    };
  } else if  (listaNumeros[i]===3) {
    cor3.style.backgroundColor = 'blue'
    cor3.ontransitionend = () => {
      cor3.style.backgroundColor = 'midnightblue'
      console.log('terminou')

    }
  } else if  (listaNumeros[i]===4) {
    cor4.style.backgroundColor = 'lightgreen'
    cor4.ontransitionend = () => {
      cor4.style.backgroundColor = 'green'
      console.log('terminou')

    }
  }
}

function mostrarCor(item,index) {
  mostrarCor2(index)
}

function start() {

  sortear();  

  cor1.style.backgroundColor = 'maroon'
  cor2.style.backgroundColor = 'gold'
  cor3.style.backgroundColor = 'midnightblue'
  cor4.style.backgroundColor = 'green'

  numeroRodada++
  numeroTentativa = numeroRodada


  contarTentativas(numeroTentativa)
  console.log("rodada:"+numeroRodada)
  
  setTimeout(listaNumeros.forEach(mostrarCor),1500)

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
      for(i=0;i<listaJogador.length;i++) {
        if (listaNumeros[i] == listaJogador[i]) {
          console.log("bateu")
        } else if  (listaNumeros[i] != listaJogador[i]) {
          Trys.innerHTML ='errou'
        }
      }
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
      for(i=0;i<listaJogador.length;i++) {
        if (listaNumeros[i] == listaJogador[i]) {
          console.log("bateu")
        } else if  (listaNumeros[i] != listaJogador[i]) {
          Trys.innerHTML ='errou'
        }
      }
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
      for(i=0;i<listaJogador.length;i++) {
        if (listaNumeros[i] == listaJogador[i]) {
          console.log("bateu")
        } else if  (listaNumeros[i] != listaJogador[i]) {
          Trys.innerHTML ='errou'
        }
      }
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
      for(i=0;i<listaJogador.length;i++) {
        if (listaNumeros[i] == listaJogador[i]) {
          console.log("bateu")
        } else if  (listaNumeros[i] != listaJogador[i]) {
          Trys.innerHTML ='errou'
        }
      }
    }
    return numeroTentativa
}