// alert("Olá mundo");
const imagemBloqueada = document.getElementById("imagemBloqueada");
const imagemDesbloqueada = document.getElementById("imagemDesbloqueada");

document.getElementById("botaoDesbloquear").addEventListener("click", function(){
    imagemBloqueada.setAttribute("class", "esconder"); 
    imagemDesbloqueada.setAttribute("class", "mostrar");
});

document.getElementById("botaoBloquear").addEventListener("click", function(){
    imagemBloqueada.setAttribute("class", "mostrar");
    imagemDesbloqueada.setAttribute("class", "esconder");
});