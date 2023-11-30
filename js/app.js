function mostraHora(){
let dataAtual = new Date()

let hora = dataAtual.getHours().toString().padStart(2, '0')
let minuto = dataAtual.getMinutes().toString().padStart(2, '0')
let segundo = dataAtual.getSeconds().toString().padStart(2, '0')

document.querySelector('#relogio').innerHTML = `${hora}:${minuto}:${segundo}`
}

mostraHora()
setInterval(mostraHora, 1)

let arrayCervejas = document.getElementById('arrayCervejas')

function carregarArray (){
    arrayCervejas.innerHTML = ""

    for (let i = 0; i < dados.length; i++){
        arrayCervejas.innerHTML += `
        <div class="col-lg-3 col-md-4 col-6 mt-5 mb-5 pb-5">
            <img src="${dados[i].src}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${dados[i].titulo}</h5>
                <p class="card-text">${dados[i].descricao}</p>
            </div> 
        </div>
            
                    
        `
    }
}

carregarArray()
