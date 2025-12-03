const pages = [
  { img: "imagem/lety.1.jpg", title: "", text: "Quero aproveitar esse momento para expressar toda a minha gratidão e amor por você. São tantos anos de amizade que, a cada dia, sinto mais orgulho de ter você ao meu lado. Eu lembro do início, quando éramos apenas duas pessoas tentando entender o mundo, e hoje vejo o quanto crescemos juntos. Cada risada, cada momento compartilhado, cada conversa e até mesmo os silêncios, tudo se transformou em uma memória que guardo com tanto carinho no coração. 💕" },
  { img: "imagem/lety.2.jpg", title: "", text: "Mesmo nos vendo apenas uma vez por ano, desde que você se mudou, nossa amizade nunca deixou de ser forte e especial. Não importa a distância ou o tempo que passa, nossa conexão continua firme como se o tempo não tivesse passado. A cada encontro, parece que nada mudou, e é como se estivéssemos na mesma sala o tempo todo. Nossa amizade é mais do que especial, é como o de irmãos, e isso nunca vai mudar. Eu te admiro demais, e sinto que, apesar da distância, você está sempre aqui, no meu coração, como uma irmã que a vida me deu. 💖" },
  { img: "imagem/lety.3.jpg", title: "", text: "às vezes eu paro pra pensar em como as coisas que antes me incomodavam agora fazem uma falta danada. Lembro das vezes que você me mordia, e na hora eu reclamava, mas hoje, tudo faz falta. O barulho das suas risadas, os beijos nos olhos, as brincadeiras e até aquele seu mal humor matinal... agora, são elas que fazem meu dia ser completo. A saudade de tudo isso é imensa, e eu percebo como você é essencial na minha vida. Mesmo com a distância, você continua sendo uma parte de mim, e é difícil não poder viver esses momentos do dia a dia com você." },
  { img: "imagem/lety.4.jpg", title: "", text: "Eu não consigo nem expressar o quanto estou orgulhoso de você. Ver você passar na faculdade, realizar o seu sonho, é uma das maiores alegrias que eu poderia ter. Eu sempre soube que você era capaz, mas ver essa conquista tão linda se tornando realidade, depois de tanto esforço e dedicação, é algo indescritível. Você batalhou tanto, passou por momentos de tristeza, cansaço, e até mesmo choros, e hoje está aí, realizando o seu sonho e conquistando o mundo. Era o meu sonho também ver você na faculdade, ver você alcançando o que sempre sonhou. E agora, aqui estamos, comemorando sua vitória, que é também minha. Eu não poderia estar mais feliz por você. Continue brilhando, porque você merece tudo o que conquistou e muito mais!" },
  { img:  "imagem/lety.5.jpg", title: "", text: "Eu não sei nem como te agradecer o suficiente por tudo o que você sempre fez por mim. Você sempre foi meu apoio, minha força quando eu estava desmoronando. Mesmo nos momentos em que eu não acreditava em mim, você estava lá, me colocando pra cima, me lembrando do meu valor, das minhas forças. Quando eu duvidava de mim mesmo, você nunca duvidou. Você sempre acreditou em mim, até quando eu não conseguia enxergar o meu próprio potencial. Eu sou muito grato por ter alguém como você ao meu lado, alguém que sempre me motivou a ser melhor e a seguir em frente. Sem você, muitas vitórias não teriam sido possíveis. Eu te agradeço do fundo do meu coração, por ser essa pessoa incrível, por ser minha pessoa e por nunca deixar de acreditar em mim. sou eternamente grato por isso. Feliz aniversario te amo mil milhões" }
];

let currentPage = 0;

// Função para atualizar o conteúdo da página (imagem, título e texto)
function updatePageContent() {
  // Atualiza a imagem
  document.getElementById("photo").src = pages[currentPage].img;
  
  // Atualiza o título
  document.getElementById("title").textContent = pages[currentPage].title;
  
  // Atualiza o texto
  document.getElementById("text").textContent = pages[currentPage].text;
}

// Função para ir para a próxima página
function nextPage() {
  // Aumenta o número da página
  currentPage++;
  
  // Se chegou na última página, volta para a primeira
  if (currentPage >= pages.length) {
    currentPage = 0;
  }

  // Atualiza o conteúdo da página
  updatePageContent();
}

// Carregar o conteúdo da primeira página ao carregar a página
updatePageContent();