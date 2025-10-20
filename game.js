 //Dados do jogo
const storyData = {
    start: {
        text: "Ao cair pelo buraco, você começa a ver objetos flutuando ao seu redor e vê um livro, você toca?",
        choices: [
            { text: "Você toca no livro", next: "toca_no_livro" },
            { text: "Você ignora o livro e continua caindo", next: "ignora_o_livro" }
        ]
    },
    
    ignora_o_livro: {
        text: "As imagens ganham vida e um portal se abre, transportando você para um novo cenário onde encontra o Coelho Branco. Ele está com pressa e diz para você o seguir para não se atrasar.",
        choices: [
            { text: "Você segue o Coelho Branco sem questioná-lo", next: "sem_questionar" },
            { text: "Ignorando o coelho, você dispara para o lado contrário.", next: "Seguir" }
        ]
    },
    
    sem_questionar: {
        text: "Seguindo o Coelho, você chega a uma mesa de chá maluca. O Chapeleiro Louco e seus amigos excêntricos a convidam para se juntar a eles, mas primeiro você deve resolver um enigma. A decisão de aceitar o desafio para participar é sua.",
        choices: [
            { text: "Você aceita o desafio e se concentra para decifrar o enigma.", next: "Aceita" },
            { text: "Você tenta sair correndo da sala.", next: "Não_aceita" }
        ]
    },
    
    Não_aceita: {
        text: "Em um movimento sincronizado, os gêmeos batem as portas, bloqueando sua saída um instante antes que você escape.",
        choices: [
            { text: "Correr para o outro lado", next: "Desvio" },
            { text: "aceitar o desafio ", next: "Aceita" }
        ]
    },
    
    Desvio: {
  text: "Ao correr para o lado oposto, você se depara com um grande espelho de moldura dourada. Seu reflexo parece assustado, mas por um instante, ele pisca para você, algo que você tem certeza que não fez.",
  choices: [
    { text: "Tocar o espelho.", next: "atravessa_o_espelho" },
    { text: "Se render e aceitar o desafio", next: "Aceita" }
        ]
    },
    
atravessa_o_espelho: {
    text: "Ao atravessar o espelho, você acorda de repente. O alívio de ter sido apenas um sonho é quebrado por um sussurro em seu ouvido: O enigma ainda estará te esperando",
    choices: [
        { text: "Esquecer de tudo o que aconteceu e viver normalmente", next: "fim_de_jogo" },
        { text: "Voltar e resolver o enigma", next: "Aceita" }
      ]
    },
    
    Aceita: {
        text: "Dizem que sou rei e não tenho reino, dizem que sou loiro mas cabelo não tenho, dizem que ando mas não me movo, acerto relógios sem ser relojoeiro. Quem sou eu?",
        choices: [
            { text: "sol", next: "Acertou" },
            { text: "marte", next: "Errou" }
        ]
    },
    
    Errou:{
      text: "Você errou! Como consequência, você é condenada a um lugar permanente na mesa de chá, presa em um ciclo eterno de enigmas e loucuras.",
      choices: [
        {text: "Tente novamente", next: "Aceita"},
        {text: "Ficar presa na festa do chá para sempre", next: "fim_de_jogo2"}
        ]
    },
    
    fim_de_jogo2:{
      text: "Você foi condenada a uma eternidade naquela sala, presa em um ciclo sem fim: o chá que nunca acaba, os enigmas que a perseguem, a loucura do Chapeleiro como trilha sonora e o sarcasmo do Gato como sua única e torturante companhia.",
    },
    
    Acertou:{
      text: "Parabéns, você acertou! Em troca de sua companhia para uma rodada de chá, o Chapeleiro Maluco lhe presenteia com um mapa encantado, cujo destino é o grandioso castelo da Rainha de Copas.",
      choices: [
        {text: "Você segue as direções do mapa", next: "Seguir"},
        {text: "Confiando na sua intuição, você ignora o mapa e segue seu próprio caminho.", next: "Intuição"}
        ]
    },
    
     Intuição: {
        text: "Após o que pareceu uma longa caminhada, um som caótico quebra o silêncio: uma verdadeira guerra de xícaras de chá. Com um arrepio, você percebe que andou em círculos e está, inevitavelmente, de volta à sala do Chapeleiro Maluco.",
        choices: [
            { text: "Usar o mapa", next: "Seguir" },
            { text: "Ficar e participar da guerra do chá", next: "guerra_do_chá" }
            ]
     },
     
    guerra_do_chá: {
      text: "Parabéns! Sua habilidade e jogo limpo impressionaram a todos. Como prêmio, o Chapeleiro e seus companheiros a escoltaram pessoalmente através dos jardins, garantindo que chegasse em segurança ao castelo.",
      choices: [
        {text: "Você aceita a ajuda deles", next: "Acompanhada"},
        {text: "Você vai sozinha seguindo o mapa", next: "Seguir"}
        ]
    },
    
    Acompanhada: {
        text: "Você consegue chegar rapidamente ao castelo da Rainha de copas. O que faz agora?",
        choices: [
            { text: "Chama-la para jogar croquet", next: "croquet" },
            { text: "Você a confronta, exigindo respostas sobre todas as maravilhas e loucuras que presenciou neste lugar.", next: "confronta" }
        ]
    },
    
    confronta:{
      text: "Você deixou a rainha irritada!",
      choices:[
        {text: "Continuar questionando", next: "raivosa"},
        {text: "Chama-la para uma partida de croquet", next: "croquet"}
        ]
    },
    
    raivosa:{
      text: "Ela chamou o batalhão de cartas para prende-la por desacato",
      choices:[
        {text: "correr", next: "Cartas"},
        {text: "Pedir perdão", next: "Vida"}
        ]
    },
    
    Cartas:{
      text: "As cartas marcham em perfeita sincronia, fechando um círculo ao seu redor e bloqueando qualquer rota de fuga. Você é pega e arrastada até o trono, onde a Rainha, com um sorriso cruel, a declara seu novo 'animal de estimação'",
    choices:[
      {text: "Jogar Novamente", next: "start"},
      {text: "Fim de jogo", next: "fim_de_jogo"}
      ]
    },
    
    Seguir: {
    text: "No caminho você encontra flores falantes que tentam te convencer a ficar com elas para fofocar.",
    choices: [
      {text: "Ficar para convversar com elas", next: "fofocar"},
      {text: "Seguir seu caminho sem distrações", next: "Acompanhada"} 
        ]
    },
    
    fofocar: {
    text: "A fofoca termina com uma traição: a flor com quem você falava a devora.Você está morta",
    choices: [
      {text: "Tentar novamente", next: "start"},
      {text: "Finalizar o jogo", next: "fim_de_jogo"} 
        ]
    },
    
    croquet: {
        text: "Sua única chance de retornar ao seu mundo é superar a Rainha. Você a enfrenta, apostando tudo na vitória.",
        choices: [
            { text: "Aproveitando um momento de distração, você arrisca um movimento desonesto, torcendo para não ser descoberta", next: "Desonesto" },
            { text: "Apesar da pressão, você escolhe a honestidade e joga limpo.", next: "Honesto" }
        ]
    },
    
    Honesto:{
    text: "Você perde o jogo, mas a Rainha, impressionada com sua rara honestidade, poupa sua cabeça. Em vez disso, ela lhe entrega um frasco com o sangue do Jaguadarte e decreta: 'Beba. É a sua passagem de volta para casa.'",
    choices: [
      {text: "Beber o liquído", next: "líguido"},
      {text: "Por que eu voltaria para um mundo sem enigmas ou gatos sorridentes? - você questiona, devolvendo o frasco. Eu escolho ficar.", next: "fim_de_jogo3"}
      ]
    },
    fim_de_jogo3: {
        text: "Sua resposta atrevida faz a Rainha rir. Em vez de raiva, ela fica impressionada por você ter finalmente entendido a lógica do lugar. Ela a declara uma deles e a aceita na corte. Você não é mais uma intrusa, mas sim uma residente permanente, exatamente como escolheu.",
    },
      
    líguido:{
    text: "Ao beber, você sente uma leveza e é puxada para cima, refazendo o caminho da queda em reverso. Os cenários passam rapidamente até você aterrissar suavemente na grama, de volta ao seu mundo.",
    choices:[
      {text: "Jogar Novamente", next: "start"},
      {text: "Fim de jogo", next: "fim_de_jogo"}
      ]
    },
    
    Desonesto: {
        text: "A rainha percebe sua jogada e fica furiosa! Ela imediatamente ordena que contem a sua cabeça",
        choices: [
            { text: "Você tenta correr", next: "Escapar" },
            { text: "Implora pela sua vida", next: "Vida" }
        ]
    },
    
    Vida:{
      text: "A Rainha decide poupar sua cabeça, mas decreta uma sentença diferente: em vez da morte, você é banida permanentemente do País das Maravilhas e exilada no reino de sua irmã, a Rainha Branca.",
    choices:[
      {text: "Jogar Novamente", next: "start"},
      {text: "Fim de jogo", next: "fim_de_jogo"}
      ]
      },
    
    Escapar: {
        text: "O exército de cartas a capturou e, sem demora, a sentença da Rainha foi executada: Cortem-lhe a cabeça",
        choices: [
            { text: "Não desista, você está quase lá!", next: "start" },
            { text: "Finalizar o jogo", next: "fim_de_jogo"}
        ]
    },
    
  toca_no_livro: {
        text: "O livro começa a girar, e você é puxada junto. Você se vê agora em um ambiente onde tudo gira como um carrossel. As paredes se tornam onduladas, e a gravidade parece não existir. Você precisa encontrar uma forma de parar o movimento para poder sair.",
        choices: [
            { text: "Você tenta segurar um objeto flutuante para se estabilizar.", next: "estabilizar" },
            { text: "Você grita pedindo ajuda.", next: "grita"}
        ]
    },
    
    estabilizar: {
        text: "Você consegue se estabilizar com a ajuda de uma corda flutuante. A gravidade começa a voltar aos poucos, mas ela encontra uma chave dourada flutuando, que pode ser útil para o próximo passo. O que ela faz com a chave?",
        choices: [
            { text: "Você tenta usar a chave para abrir uma porta invisível no ambiente.", next: "invisible" },
            { text: "Você guarda a chave e começa a explorar mais o ambiente, procurando uma saída.", next: "chave"}
        ]
    },
    
       invisible: {
        text: "Ao usar a chave, uma porta secreta se revela, levando você para uma sala cheia de espelhos. você deve resolver um enigma sobre identidade para continuar sua jornada. -Se me bater com força posso até rachar, mas você nunca poderá me impedir de devolver o seu olhar.-",
        choices: [
            { text: "espelho", next: "espelho" },
            { text: "reflexo", next: "reflexo"}
        ]
    },
  
  espelho: {
     text: "Você sussurra a resposta correta. O espelho central vibra e sua superfície se torna líquida, revelando uma nova passagem.",
     choices: [
        
         { text: "Atravessar a passagem", next: "ignora_o_livro" } 
     ]
  },
  
  reflexo: {
     text: "Sua voz ecoa... 'Reflexo'. Os espelhos permanecem frios e imóveis. A resposta está próxima, mas não é essa. A passagem continua selada.",
     choices: [
         
         { text: "Tentar 'espelho'", next: "espelho" },
         { text: "Desistir e tentar achar outra saída", next: "chave"} 
     ]
  },
};
   

// Elementos do DOM
const introScreen = document.getElementById('intro');
const gameScreen = document.getElementById('game');
const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const startButton = document.getElementById('start-button');

// Função para mostrar o jogo
function showGame() {
    introScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    loadStory('start');
}

// Função para carregar a história
function loadStory(nodeId) {
    const node = storyData[nodeId];
    storyElement.innerHTML = `<p>${node.text}</p>`;
    choicesElement.innerHTML = '';
    
    node.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.addEventListener('click', () => loadStory(choice.next));
        choicesElement.appendChild(button);
    });
}

// Evento do botão iniciar
startButton.addEventListener('click', showGame);


