/*
Autor: Jorge Marcelo
Data de Criação: 27/09/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/

/*Comunicação do JS com HTML com o DOM*/
const btnMobile = document.getElementById("btn-mobile");

//Função que vai realizar a ação do menu
function toggleMenu(event) {
if (event.type === "touchstart") event.preventDefault(); //Definindo para o menu ficar desativdo
const nav = document.getElementById("nav"); //Selecionando o conteudo da nav
nav.classList.toggle("active"); //Toggle adicione caso tenha remova caso não tenha (ou seja adicone a classe active)
}

btnMobile.addEventListener("click", toggleMenu); //Adicionando evento de click
btnMobile.addEventListener("touchstart", toggleMenu); //Adicionando vento de touch do Mobile
