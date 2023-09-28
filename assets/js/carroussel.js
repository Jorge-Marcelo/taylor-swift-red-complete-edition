/*
Autor: Jorge Marcelo
Data de Criação: 27/09/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/

/*Variaveis*/
let i = 0; // Variavel de imagem atual
let j = 5; // Variavel de total de imagens

const dots = document.querySelectorAll(".dot-container button"); //Selecionando todos os circulos indicadores
const images = document.querySelectorAll("img"); //Selecionando todas  as iagens

/*Função de proximo*/
function next() {
document.getElementById("img" + (i + 1)).classList.remove("active"); //Remover a classe ativa da imagem atual
i = (j + i + 1) % j; //Quando o botão for clocado avança para a proxima imagem
document.getElementById("img" + (i + 1)).classList.add("active"); // Mostra a imagem como ativa
indicator(i + 1); //avança o botão indicador para o proximo
}

/*Essa função é a mesm que a outra mas com opção de voltar*/
function prev() {
document.getElementById("img" + (i + 1)).classList.remove("active");
i = (j + i - 1) % j;
document.getElementById("img" + (i + 1)).classList.add("active");
indicator(i + 1);
}

/*Função dos circulos indicadores*/
function indicator(num) {
dots.forEach(function (dot) {
//Pega todos os circulos indicadores
dot.style.backgroundColor = "transparent"; //Adiciona todos os circulos transparente
});
document.querySelector(
".dot-container button:nth-child(" + num + ")"
).style.backgroundColor = "red"; /*Adiciona a cor vermelha ao prieiro circulo*/
}

/*Essa Função faz com que os circulos estejam ativos junto a imagem ativa*/
function dot(index) {
images.forEach(function (image) {
image.classList.remove("active");
});
document.getElementById("img" + index).classList.add("active");
i = index - 1;
indicator(index);
}
