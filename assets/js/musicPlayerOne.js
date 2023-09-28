/*
Autor: Jorge Marcelo
Data de Criação: 27/09/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/

/*Pegando todos os elementos pelo DOM*/
const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const anteriorButton = document.getElementById("anterior");
const proximoButton = document.getElementById("proximo");
const timer = document.getElementById("timer");
const musicName = document.getElementById("musicName");
const progressBar = document.getElementById("progress-bar");
const progress = document.getElementById("progress");

/*Array com as musicas*/
const redStudio = [
"assets/music/Red (Deluxe Edition)/CD 1/1-1. State Of Grace.mp3",
"assets/music/Red (Deluxe Edition)/CD 1/1-2. Red.mp3",
"assets/music/Red (Deluxe Edition)/CD 1/1-3. Treacherous.mp3",
"assets/music/Red (Deluxe Edition)/CD 1/1-4. I Knew You Were Trouble..mp3",
"assets/music/Red (Deluxe Edition)/CD 1/1-5. All Too Well.mp3",
"assets/music/Red (Deluxe Edition)/CD 1/1-6. 22.mp3",
"assets/music/Red (Deluxe Edition)/CD 1/1-7. I Almost Do.mp3",
"assets/music/Red (Deluxe Edition)/CD 1/1-8. We Are Never Ever Getting Back Together.mp3",
"assets/music/Red (Deluxe Edition)/CD 1/1-9. Stay Stay Stay.mp3",
"assets/music/Red (Deluxe Edition)/CD 1/1-10. The Last Time [feat. Gary Lightbody of Snow Patrol].mp3",
"assets/music/Red (Deluxe Edition)/CD 1/1-11. Holy Ground.mp3",
"assets/music/Red (Deluxe Edition)/CD 1/1-12. Sad Beautiful Tragic.mp3",
"assets/music/Red (Deluxe Edition)/CD 1/1-13. The Lucky One.mp3",
"assets/music/Red (Deluxe Edition)/CD 1/1-14. Everything Has Changed [feat. Ed Sheeran].mp3",
"assets/music/Red (Deluxe Edition)/CD 1/1-15. Starlight.mp3",
"assets/music/Red (Deluxe Edition)/CD 1/1-16. Begin Again.mp3",
"assets/music/Red (Deluxe Edition)/CD 2/2-1. The Moment I Knew.mp3",
"assets/music/Red (Deluxe Edition)/CD 2/2-2. Come Back… Be Here.mp3",
"assets/music/Red (Deluxe Edition)/CD 2/2-3. Girl At Home.mp3",
"assets/music/Red (Deluxe Edition)/CD 2/2-4. Treacherous (Original Demo Recording).mp3",
"assets/music/Red (Deluxe Edition)/CD 2/2-5. Red (Original Demo Recording).mp3",
"assets/music/Red (Deluxe Edition)/CD 2/2-6. State Of Grace (Acoustic version).mp3",
];

let musicaAtual = 0; //Variavel da musica atual

/*Funções de play e pause*/
function play() {
audio.play();
}
function pause() {
audio.pause();
}

/*Função de proximo, anterior e caregar a muisca*/
function anterior() {
musicaAtual = (musicaAtual - 1 + redStudio.length) % redStudio.length;
carregarMusica();
}
function proximo() {
musicaAtual = (musicaAtual + 1) % redStudio.length;
carregarMusica();
}
function carregarMusica() {
audio.src = redStudio[musicaAtual];
audio.load();
play();

const nomeArquivo = redStudio[musicaAtual].split("/").pop(); // Extrai o nome do arquivo da última parte do caminho
const nomeSemNumeros = nomeArquivo.replace(/^\d+\s*-\s*/, ""); // Remove o número com hífen da frente
const nomeSemExtensao = nomeSemNumeros.replace(/\.mp3$/, ""); // Remove a extensão .mp3
musicName.textContent = nomeSemExtensao; // Exibe apenas o nome da música
}

function atualizarTimer() {
const tempoAtual = formatarTimer(audio.currentTime); //Pegar o timer baseado na musica selecionada
const duracao = formatarTimer(audio.duration); // Duração baseada na musica selecionada
timer.textContent = `${tempoAtual} / ${duracao}`; // Conteudo do textContent
}

function atualizarBarraProgresso() {
const porcentagem = (audio.currentTime / audio.duration) * 100; //Barra de progresso baseado na musica selecionada
progress.style.width = `${porcentagem}%`; // Largura da barra de progresso baseado na muisca selecionada
progress.style.backgroundColor = "#0400ff;"; // Cor da barra baseado na musica selecionada
}

/*Calculo dos minutos e segundos da musica */
function formatarTimer(time) {
const minutos = Math.floor(time / 60);
const segundos = Math.floor(time % 60);
return `${minutos}:${segundos < 10 ? "0" : ""}${segundos}`;
}

/*Escutadores de eventos para as funções do player*/
playButton.addEventListener("click", play);
pauseButton.addEventListener("click", pause);
anteriorButton.addEventListener("click", anterior);
proximoButton.addEventListener("click", proximo);
audio.addEventListener("timeupdate", () => {
atualizarTimer();
atualizarBarraProgresso();
});

/*Função para atualizar a barra de progresso baseado no click da barra*/
progressBar.addEventListener("click", (evento) => {
const porcentagem = evento.offsetX / progressBar.offsetWidth;
audio.currentTime = audio.duration * porcentagem;
atualizarBarraProgresso();
});

/*Chamando a função carregar musica */
carregarMusica();
