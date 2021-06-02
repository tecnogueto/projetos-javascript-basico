// Pegando Botão para calcular o IMC

// string = "textos" ex: "Rodrigo"
// boolean = /* verdeiro */true ou false /* falso */;
// const numero = numero ou inteiro Ex: 123321123
// const decimal = float Ex: 0.1;

// Pegando botão de calcular 
const botaoCalcular = document.getElementById("botaoCalcular");

// Pegando div da mensagem de sucesso
const mensagemSucesso = document.getElementById("mensagemSucesso");

function mostrarMensagemSucesso(nome, resultadoDoCalculo, classificacao) {
    // Colocando texto na mensagem de sucesso do IMC
    // mensagemSucesso.textContent = nome + " seu imc é: " + resultadoDoCalculoDoIMC;
    mensagemSucesso.textContent = `${nome} seu imc é: ${resultadoDoCalculo} e você esta ${classificacao}`;
    // Mostrando Mensagem de IMC
    mensagemSucesso.setAttribute("class", "alert alert-primary mt-5 mb-5 mostrar");
}

function mostrarMensagemErro(mensagemErro) {
    const mensagemDeErro = document.getElementById("mensagemErro");
    mensagemDeErro.textContent = mensagemErro;
    mensagemDeErro.setAttribute("class", "alert alert-danger mt-5 mb-5 mostrar");
}

function mensagemResultadoCalculoImc(nome, peso, altura) {
    const resultadoDoCalculoDoIMC = (peso / (altura * altura)).toFixed(1);
    let classificacao = '';

    if(resultadoDoCalculoDoIMC < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (resultadoDoCalculoDoIMC < 25) {
        classificacao = "Peso ideal";
    } else if (resultadoDoCalculoDoIMC < 30) {
        classificacao = "Acima do peso";
    } else if (resultadoDoCalculoDoIMC < 35 ) {
        classificacao = 'Com obesidade grau I';
    } else {
        classificacao = 'com obesidade alta';
    }

    mostrarMensagemSucesso(nome, resultadoDoCalculoDoIMC, classificacao);
}

function validarFormulario() {
    // Pegando valores dos campos de texto
    const nome = document.getElementById("nome").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    // Convertendo valores para numeros
    const convertendoPesoParaNumero = parseInt(peso);
    const convertendoAlturaParaNumero = parseInt(altura);

    // Validando nosso formulário
    if (nome != '' && peso != '' && altura != '') {
        
        if(Number.isInteger(convertendoPesoParaNumero) && Number.isInteger(convertendoAlturaParaNumero)) {
            // Fazendo calculo do IMC
            mensagemResultadoCalculoImc(nome, peso, altura);
         } else {
            mostrarMensagemErro("Os campos precisam ser números");
         }
    } else {
        // const mensagemDeErro = document.getElementById("mensagemErro");
        // mensagemDeErro.textContent = "Preencha todos os campos";
        // mensagemDeErro.setAttribute("class", "alert alert-warning mt-5 mb-5 mostrar");
        mostrarMensagemErro("Preencha todos os campos");
    }
}

// Vigiando o clique do botão de calculo do IMC
botaoCalcular.addEventListener('click', function(){
    validarFormulario();
});