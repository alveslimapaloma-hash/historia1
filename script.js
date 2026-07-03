const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em uma floresta encantada, quem iniciou a aventura?",
        alternativas: [
            {
                texto: "A coruja curiosa",
                afirmacao: "Uma coruja muito curiosa decidiu explorar a floresta encantada ao lado de seu melhor amigo, o coelho."
            },
            {
                texto: "O coelho aventureiro",
                afirmacao: "Um coelho muito aventureiro convidou sua amiga coruja para descobrir os segredos da floresta encantada."
            }
        ]
    },
    {
        enunciado: "Durante a caminhada, eles encontraram dois caminhos. Qual escolheram?",
        alternativas: [
            {
                texto: "A trilha das flores brilhantes",
                afirmacao: "Eles seguiram pela trilha das flores brilhantes, onde borboletas coloridas iluminavam o caminho."
            },
            {
                texto: "A ponte sobre o rio cristalino",
                afirmacao: "Eles atravessaram uma ponte de madeira sobre um rio cristalino cheio de peixes dourados."
            }
        ]
    },
    {
        enunciado: "No meio da floresta apareceu um animal mágico. O que eles fizeram?",
        alternativas: [
            {
                texto: "Conversaram com o unicórnio",
                afirmacao: "Com gentileza, conversaram com um unicórnio mágico, que revelou um mapa secreto da floresta."
            },
            {
                texto: "Ajudaram uma raposa encantada",
                afirmacao: "Ajudaram uma raposa encantada a encontrar seu lar, ganhando um cristal brilhante como agradecimento."
            }
        ]
    },
    {
        enunciado: "Ao chegarem a uma grande árvore encantada, qual desafio aceitaram?",
        alternativas: [
            {
                texto: "Resolver um enigma",
                afirmacao: "Resolveram um enigma antigo e abriram uma passagem para um jardim repleto de árvores luminosas."
            },
            {
                texto: "Encontrar uma chave dourada",
                afirmacao: "Procuraram uma chave dourada escondida entre as raízes e descobriram um baú cheio de sementes mágicas."
            }
        ]
    },
    {
        enunciado: "Como terminou a aventura da coruja e do coelho?",
        alternativas: [
            {
                texto: "Compartilharam a descoberta com todos os animais",
                afirmacao: "Eles dividiram suas descobertas com todos os animais da floresta, mostrando que a amizade e a cooperação tornam qualquer aventura inesquecível."
            },
            {
                texto: "Plantaram as sementes mágicas",
                afirmacao: "Eles plantaram as sementes mágicas, fazendo nascer uma nova floresta encantada e aprendendo que coragem e amizade podem transformar o mundo."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Fim da aventura!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();