const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const btnReiniciar = document.querySelector(".btn-reiniciar");

const perguntas = [
    {
        enunciado: "Qual civilização antiga construiu a cidade de Machu Picchu, localizada nas montanhas dos Andes?",
        alternativas: [
            { texto: "Os Maias", correta: false },
            { texto: "Os Incas", correta: true },
            { texto: "Os Astecas", correta: false }
        ]
    },
    {
        enunciado: "A Guerra dos Cem Anos, um dos conflitos mais famosos da Idade Média, durou exatamente 100 anos. Esta afirmação é:",
        alternativas: [
            { texto: "Verdadeira", correta: false },
            { texto: "Falsa (durou 116 anos)", correta: true }
        ]
    },
    {
        enunciado: "Quem foi a primeira mulher a ganhar um Prêmio Nobel e a única pessoa até hoje a ganhá-lo em duas áreas científicas diferentes (Física e Química)?",
        alternativas: [
            { texto: "Marie Curie", correta: true },
            { texto: "Rosalind Franklin", correta: false },
            { texto: "Ada Lovelace", correta: false }
        ]
    },
    {
        enunciado: "O Grande Incêndio de Roma, que destruiu boa parte da cidade em 64 d.C., ocorreu durante o reinado de qual imperador?",
        alternativas: [
            { texto: "Júlio César", correta: false },
            { texto: "Augusto", correta: false },
            { texto: "Nero", correta: true }
        ]
    },
    {
        enunciado: "Qual destas estruturas monumentais foi construída como um túmulo para o faraó Quéops no Egito Antigo e é a única Maravilha do Mundo Antigo ainda de pé?",
        alternativas: [
            { texto: "O Templo de Karnak", correta: false },
            { texto: "A Grande Pirâmide de Gizé", correta: true },
            { texto: "O Farol de Alexandria", correta: false }
        ]
    }
];

let atual = 0; 
let pontuacao = 0;

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    
    perguntaAtual.alternativas.forEach(alternativa => {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa.correta));
        caixaAlternativas.appendChild(botaoAlternativas);
    });
}

function respostaSelecionada(isCorreta){
    if (isCorreta) {
        pontuacao++;
    }
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Quiz Concluído!";
    
    let mensagem = "";
    if (pontuacao === 5) {
        mensagem = "Excelente! Você é um verdadeiro mestre da história!";
    } else if (pontuacao >= 3) {
        mensagem = "Muito bom! Você tem um ótimo conhecimento histórico.";
    } else {
        mensagem = "Você precisa estudar um pouco mais sobre o passado. Continue curioso!";
    }
    
    textoResultado.textContent = `Você acertou ${pontuacao} de 5 perguntas. \n${mensagem}`;
    caixaAlternativas.textContent = ""; 
    btnReiniciar.style.display = "block";
}

btnReiniciar.addEventListener("click", () => {
    atual = 0;
    pontuacao = 0;
    textoResultado.textContent = "";
    btnReiniciar.style.display = "none";
    mostraPergunta();
});

mostraPergunta();
