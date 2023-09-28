/*
Autor: Jorge Marcelo
Data de Criação: 27/09/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/

/*Constante que vai armazenar o id que vai alterar os temas*/
const changeTheme = document.getElementById("change");

/*Função que fara a alteração de light para dark e virce e versa*/
changeTheme.addEventListener("change", function () {
document.querySelector("body").classList.toggle("light-mode");
});
