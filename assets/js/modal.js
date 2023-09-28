/*
Autor: Jorge Marcelo
Data de Criação: 27/09/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/

/*Pegando os elementos pelo DOM*/
let modal = document.getElementById("myModal");
let modalImg = document.getElementById("modalImg");
let span = document.getElementById("close");
let miniaturas = document.querySelectorAll(".miniatura");

/*Função que vai abrir o modal*/
function abrirModal(imgSrc) {
modal.style.display = "block";
modalImg.src = imgSrc;
}

/*Função que pega todas as miniaturas e faz comunicação com a função abrir modal*/
function miniatura() {
miniaturas.forEach((miniatura) => {
miniatura.addEventListener("click", function () {
abrirModal(miniatura.src);
});
});
}

/*Função que vai fechar o modal quando clicar no X*/
function fecharModal() {
span.addEventListener("click", function () {
modal.style.display = "none";
});
}

/*Função que vai fechar o modal caso haja um clique fora*/
function cliqueFora(event) {
window.addEventListener("click", function (event) {
if (event.target === modal) {
modal.style.display = "none";
}
});
}

/*Chamando as funções*/
miniatura();
fecharModal();
cliqueFora();
