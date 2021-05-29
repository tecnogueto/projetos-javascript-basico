// Pegando Botão para calcular o IMC
const botaoCalcular = document.getElementById("botaoCalcular");

// Vigiando o clique do botão de calculo do IMC
botaoCalcular.addEventListener('click', function(){
    // Pegando valores dos campos de texto
    const nome = document.getElementById("nome").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    // Validando nosso formulário
    if (nome != '' && peso != '' && altura != '') {
        // Pegando div da mensagem de sucesso
        const mensagemSucesso = document.getElementById("mensagemSucesso");

        // Fazendo calculo do IMC
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

        // Colocando texto na mensagem de sucesso do IMC
        // mensagemSucesso.textContent = nome + " seu imc é: " + resultadoDoCalculoDoIMC;
        mensagemSucesso.textContent = `${nome} seu imc é: ${resultadoDoCalculoDoIMC} e você esta ${classificacao}`;

        // Mostrando Mensagem de IMC
        mensagemSucesso.setAttribute("class", "alert alert-primary mt-5 mb-5 mostrar");
    } else {
        const mensagemDeErro = document.getElementById("mensagemErro");
        mensagemDeErro.textContent = "Preencha todos os campos";
        mensagemDeErro.setAttribute("class", "alert alert-warning mt-5 mb-5 mostrar");
    }


});