// alert("Olá mundo");
const imagemBloqueada = document.getElementById("imagemBloqueada");
const imagemDesbloqueada = document.getElementById("imagemDesbloqueada");
const botaoBloquear = document.getElementById("botaoBloquear");
const botaoDesbloquear = document.getElementById("botaoDesbloquear");
const titulo = document.getElementById("titulo");

botaoDesbloquear.addEventListener("click", function(){
    imagemBloqueada.setAttribute("class", "esconder"); 
    imagemDesbloqueada.setAttribute("class", "mostrar");
    botaoDesbloquear.setAttribute("disabled", true);
    botaoBloquear.removeAttribute("disabled");
    titulo.innerHTML = "Projeto Tablet (Desloqueado)";
});

botaoBloquear.addEventListener("click", function(){
    imagemBloqueada.setAttribute("class", "mostrar");
    imagemDesbloqueada.setAttribute("class", "esconder");
    botaoDesbloquear.removeAttribute("disabled");
    botaoBloquear.setAttribute("disabled", true);
    titulo.innerHTML = "Projeto Tablet (Bloqueado)";
});