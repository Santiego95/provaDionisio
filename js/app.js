function mostraHora(){
let dataAtual = new Date()

let hora = dataAtual.getHours().toString().padStart(2, '0')
let minuto = dataAtual.getMinutes().toString().padStart(2, '0')
let segundo = dataAtual.getSeconds().toString().padStart(2, '0')

document.querySelector('#relogio').innerHTML = `${hora}:${minuto}:${segundo}`
}

mostraHora()
setInterval(mostraHora, 1)

