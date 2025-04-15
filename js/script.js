const key = "f47fec7d24274be2d8dd35c36be3cc91"

window.onload = function inicio() {
    buscarCidade("Belo Horizonte")
}

function DadosNaTela(dados) {
    console.log(dados)
    document.querySelector("#cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector("#temp").innerHTML = Math.floor(dados.main.temp) + "C°"
    document.querySelector("#text-previsão").innerHTML = dados.weather[0].description
    document.querySelector("#Umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector("#img-previsão").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    DadosNaTela(dados)
}



function clickNoBotão() {
    const cidade = document.querySelector(".text-cidade").value
    buscarCidade(cidade)
}


