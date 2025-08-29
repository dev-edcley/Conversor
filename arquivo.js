

const botaoConverte = document.querySelector("button")
const resultado = document.querySelector("#resultadoFinal")
const valorInicial = document.querySelector(".valor")
const select = document.querySelector(".opcoes")
const select1 = document.querySelector(".opcoes1")

/* Aqui a baixo a funçao converter valroes, a funçao principal do codigo, quando o evento de click acontecer 'botaoConverte.addEventListener("click", converterValores)'
vais er chamada a funcao converterValores e quando essa funcao for chamada vai acontecer tudo que esta debtro da funcao, a funcao vai ver qual moeda esta no select1 e o no select, vai pegar o valor
colocado no input, e vai injetar nos paragrafos os valores tanto convertidos. */

function converterValores() {

    const valorInput = document.querySelector("#inputResultado").value
    const dolarDia = 5.2
    const euroDia = 6.2
    const euroDiaDolar = 1.17
    const euroDiaLibra = 1.16
    const libraDia = 7.2
    const libraDiaDolar = 1.35
    const libraDiaEuro = 1.16
    const libraDiaReal = 7.2
    const resultadoValor = valorInput / dolarDia
    const realDia = 1

    /* aqui a baixo estou fanzendo a seguinte logica: se o valor do selec1 for X valor e o select for Y valor, vai ser injetado na variavel 
    'resultado' a divisao do valor colocado no input pela moeda selecionada no select que no caso desse primeiro o EURO.
    
    ESSA A FORMULA DA DOCUMENTACAO DO INTL NUMBER FORMAT PARA RETIRAR VALORES QUEBRADOS E COLOCAR FORMATACAO LEGIVEL DA MOEDA.
    
    new Intl.NumberFormat("ed-ED", {
                style: "currency",
                currency: "EUR"
            }).format(valorInput / euroDiaDolar)*/


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

    if (select1.value == "dolar" && select.value == "libra") {

        resultado.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorInput / libraDiaDolar)


    }

    if (select1.value == "euro" && select.value == "libra") {

        resultado.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorInput / libraDiaEuro)


    }

    if (select1.value == "real" && select.value == "libra") {

        resultado.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorInput / libraDiaReal)


    }

    if (select1.value == "euro" && select.value == "dolar") {

        resultado.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorInput * euroDiaDolar)

    }

    if (select1.value == "libra" && select.value == "dolar") {

        resultado.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorInput * libraDiaDolar)

    }

    if (select1.value == "real" && select.value == "dolar") {

        resultado.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorInput / dolarDia)

    }

    if (select1.value == "dolar" && select.value == "real") {

        resultado.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(valorInput * dolarDia)

    }

    if (select1.value == "euro" && select.value == "real") {

        resultado.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(valorInput * euroDia)

    }

    if (select1.value == "libra" && select.value == "real") {

        resultado.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(valorInput * libraDia)

    }

    
    const valor22 = document.querySelector("#valor1")

    valor22.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(valorInput)


}

const imagemBandeira = document.querySelector('#imagemmmm')


function trocou() {

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

    if (select.value == "real") {
        textAlterado.innerHTML = "Real"
        imagemBandeira.src = './assets/BRA.png'
    }

    
    converterValores()
}

function trocou2() {

    const imagemBandeira1 = document.querySelector('.imagem1')
    const textAlterado1 = document.querySelector('#text1')
   



if (select1.value == "dolar") {
        textAlterado1.innerHTML = "Dólar americano"
        imagemBandeira1.src = './assets/dollar.png'
        
    }

    if (select1.value == "euro") {
        textAlterado1.innerHTML = "Euro"
        imagemBandeira1.src = './assets/euro.png'
    }

    if (select1.value == "libra") {
        textAlterado1.innerHTML = "Libra"
        imagemBandeira1.src = './assets/libra.png'
    }

    if (select1.value == "real") {
        textAlterado1.innerHTML = "Real"
        imagemBandeira1.src = './assets/BRA.png'
    }

  
}




select.addEventListener('change', trocou)
select1.addEventListener('change', trocou2)
botaoConverte.addEventListener("click", converterValores)




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





