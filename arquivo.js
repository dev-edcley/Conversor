

const botaoConverte = document.querySelector("button")
const resultado = document.querySelector("#resultadoFinal")
const valorInicial = document.querySelector(".valor")
const select = document.querySelector(".opcoes")
const select1 = document.querySelector(".opcoes1")


function converterValores() {

    const valorInput = document.querySelector("#inputResultado").value
    const dolarDia = 5.2
    const euroDia = 6.2
    const euroDiaDolar = 1.17
     const euroDiaLibra = 1.16
    const libraDia = 7.2
    const resultadoValor = valorInput / dolarDia
    const realDia = 1
    

if (select1.value == "dolar" && select.value == "euro") {

        resultado.innerHTML = new Intl.NumberFormat("ed-ED", {
            style: "currency",
            currency: "EUR"
        }).format(valorInput / euroDiaDolar)


    }

    if (select1.value == "real" && select.value == "euro") {

        resultado.innerHTML = new Intl.NumberFormat("ed-ED", {
            style: "currency",
            currency: "EUR"
        }).format(valorInput / euroDia)


    }

     if (select1.value == "libra" && select.value == "euro") {

        resultado.innerHTML = new Intl.NumberFormat("ed-ED", {
            style: "currency",
            currency: "EUR"
        }).format(valorInput * euroDiaLibra)


    }



    







    /*if (select.value == "dolar") {

        resultado.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorInput / dolarDia)

    }

    if (select.value == "euro") {

        resultado.innerHTML = new Intl.NumberFormat("ed-ED", {
            style: "currency",
            currency: "EUR"
        }).format(valorInput / euroDia)

    }

    if (select.value == "libra") {

        resultado.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorInput / libraDia)

    }

    valorInicial.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(valorInput)

*/


}

const imagemBandeira = document.querySelector('#imagemmmm')

function trocou(){

    const textAlterado = document.querySelector('#DolarEuro')
    
    
    if (select.value == "dolar") {
        textAlterado.innerHTML = "Dólar americano"
        imagemBandeira.src = './assets/dollar.png'
    }

    if (select.value == "euro") {
        textAlterado.innerHTML = "Euro"
        imagemBandeira.src = './assets/euro.png'
    }

    if (select.value == "libra") {
        textAlterado.innerHTML = "Libra"
        imagemBandeira.src = './assets/libra.png'
    }

 converterValores()
}


select.addEventListener('change', trocou)
botaoConverte.addEventListener("click", converterValores)

