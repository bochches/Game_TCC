/* =====================================
   ÁREA DAS QUESTÕES

   ADICIONE SUAS QUESTÕES AQUI
===================================== */

const questoes = [

/* =====================================
       QUESTÃO 1
    ===================================== */

    {
        pergunta: "Quantas linhas tem a tabela de (p ∨ ¬p) ∧ (q → q)?",
        alternativas: {
            A: "8",
            B: "16",
        },

        resposta: "B",

        explicacoes: {
            A: "Oito linhas correspondem a três proposições distintas.",
            B: "Apenas p e q são distintas; repetições não acrescentam variáveis.",
        }
    },


    /* =====================================
       QUESTÃO 2
    ===================================== */

    {
        pergunta: "Uma tabela completa tem 64 linhas. Quantas variáveis distintas ela usa?",

        alternativas: {
            A: "6",
            B: "8",
        },

        resposta: "A",

        explicacoes: {
            A: "Como 2⁶ = 64, são seis variáveis.",
            B: "Oito variáveis geram 2⁸ = 256 linhas.",
        }
    },


    /* =====================================
       QUESTÃO 3
    ===================================== */

    {
        pergunta: "Para p, q e r, qual é a sequência da coluna p no padrão adotado?",

        alternativas: {
            A: "V V V V F F F F.",
            B: "V F V F V F V F.",
        },

        resposta: "A",

        explicacoes: {
            A: "A primeira coluna mantém cada valor por quatro linhas.",
            B: "A alternância a cada linha pertence à última coluna, r.",
        }
    },


    /* =====================================
       QUESTÃO 4
    ===================================== */

    {
        pergunta: "Qual é a quarta linha para p, q e r?",

        alternativas: {
            A: "V, F, F.",
            B: "F, V, V.",
        },

        resposta: "A",

        explicacoes: {
            A: "As quatro primeiras linhas mantêm p = V; a quarta tem q = F e r = F.",
            B: "F, V, V é a quinta linha.",
        }
    },


    /* =====================================
       QUESTÃO 5
    ===================================== */

    {
        pergunta: "Uma ordem diferente das linhas pode produzir uma tabela correta?",

        alternativas: {
            A: "Sim, se incluir cada combinação exatamente uma vez.",
            B: "Não, apenas o padrão adotado é válido.",
        },

        resposta: "A",

        explicacoes: {
            A: "A validade depende de cobrir todas as combinações e calcular corretamente as fórmulas.",
            B: "O padrão canônico facilita a organização, mas não é a única ordem possível.",
        }
    },


    /* =====================================
       QUESTÃO 6
    ===================================== */

    {
        pergunta: "Qual fórmula equivale a p → q?",

        alternativas: {
            A: "¬p ∨ q.",
            B: "p ∨ ¬q.",
        },

        resposta: "C",

        explicacoes: {
            A: "Ambas são falsas apenas quando p = V e q = F.",
            B: "A opção errada equivale à condicional inversa q → p.",
        }
    },


    /* =====================================
       QUESTÃO 7
    ===================================== */

    {
        pergunta: "Quando p → q é falsa?", 
        
        alternativas: {
            A: "Quando p = F e q = V.",
            B: "Quando p = V e q = F.",
        },

        resposta: "B",

        explicacoes: {
            A: "Com antecedente falso, a condicional material é verdadeira.",
            B: " A condicional falha apenas com antecedente verdadeiro e consequente falso.",
        },
    },


    /* =====================================
       QUESTÃO 8
    ===================================== */

    {
        pergunta: "Qual é o valor de (p → q) → (q → p) para p = F e q = V?",

        alternativas: {
            A: "V.",
            B: "F.",            
        },

        resposta: "B",

        explicacoes: {
            A: "Uma condicional externa com valores V → F não é verdadeira.",
            B: "p → q é V e q → p é F; a condicional externa é V → F.",
        }
    },


    /* =====================================
       QUESTÃO 9
    ===================================== */

    {
        pergunta: "Como classificar (p → q) → (q → p)?",

        alternativas: {
            A: "Contingência.",
            B: "Tautologia.",
        },

        resposta: "A",

        explicacoes: {
            A: "É falsa em p = F, q = V e verdadeira em p = V, q = V.",
            B: "A existência de uma linha falsa impede que seja tautologia.",
        }
    },


    /* =====================================
       QUESTÃO 10
    ===================================== */

    {
        pergunta: "Qual premissa adicional permite ligar p → q e g → r para obter p → r?",

        alternativas: {
            A: "r → p.",
            B: "q → g.",
        },

        resposta: "B",

        explicacoes: {
            A: "Com p = V, q = V, g = F e r = F, até r → p é V, mas p → r continua F.",
            B: "O encadeamento fica p → q → g → r.",
        }
    }
];


/* =====================================
   CONFIGURAÇÕES DO JOGO
===================================== */

let questaoAtual = 0;

let pontos = 0;

let respondeu = false;


/* =====================================
   ELEMENTOS DA TELA
===================================== */

const textoQuestao =
    document.getElementById("textoQuestao");

const numeroQuestao =
    document.getElementById("numeroQuestao");

const pontosElemento =
    document.getElementById("pontos");

const feedback =
    document.getElementById("feedback");

const botaoProxima =
    document.getElementById("botaoProxima");

const alternativas =
    document.querySelectorAll(".alternativa");

const barraProgresso =
    document.getElementById("barraProgresso");

const telaFinal =
    document.getElementById("telaFinal");

const pontuacaoFinal =
    document.getElementById("pontuacaoFinal");

const jogarNovamente =
    document.getElementById("jogarNovamente");


/* =====================================
   CARREGAR QUESTÃO
===================================== */

function carregarQuestao() {

    respondeu = false;

    const questao =
        questoes[questaoAtual];


    /* =========================
       PERGUNTA
    ========================= */

    textoQuestao.textContent =
        questao.pergunta;


    /* =========================
       NÚMERO DA QUESTÃO
    ========================= */

    numeroQuestao.textContent =
        `Questão ${questaoAtual + 1} de ${questoes.length}`;


    /* =========================
       ALTERNATIVAS
    ========================= */

    alternativas.forEach(function (botao) {

        const letra =
            botao.dataset.resposta;

        botao.textContent =
            `${letra}) ${questao.alternativas[letra]}`;

        botao.disabled = false;

        botao.classList.remove(
            "correta",
            "errada"
        );

    });


    /* =========================
       FEEDBACK
    ========================= */

    feedback.textContent = "";


    /* =========================
       BOTÃO PRÓXIMA
    ========================= */

    botaoProxima.style.display =
        "none";


    /* =========================
       PROGRESSO
    ========================= */

    atualizarProgresso();

}


/* =====================================
   VERIFICAR RESPOSTA
===================================== */

alternativas.forEach(function (botao) {

    botao.addEventListener(
        "click",
        function () {

            if (respondeu) {
                return;
            }

            respondeu = true;

            const respostaUsuario =
                botao.dataset.resposta;

            const questao =
                questoes[questaoAtual];


            alternativas.forEach(
                function (alternativa) {

                    alternativa.disabled = true;

                }
            );


            /* =========================
               RESPOSTA CORRETA
            ========================= */

            if (
                respostaUsuario ===
                questao.resposta
            ) {

                pontos += 100;

                botao.classList.add(
                    "correta"
                );


                feedback.innerHTML =
                    `✅ <strong>Correto!</strong><br>
                    ${questao.explicacoes[respostaUsuario]}`;

            }


            /* =========================
               RESPOSTA ERRADA
            ========================= */

            else {

                botao.classList.add(
                    "errada"
                );


                /* Mostra qual era a resposta correta */

                alternativas.forEach(
                    function (alternativa) {

                        if (
                            alternativa.dataset.resposta ===
                            questao.resposta
                        ) {

                            alternativa.classList.add(
                                "correta"
                            );

                        }

                    }
                );


                feedback.innerHTML =
                    `❌ <strong>Resposta incorreta.</strong><br>
                    ${questao.explicacoes[respostaUsuario]}`;

            }


            pontosElemento.textContent =
                pontos;


            botaoProxima.style.display =
                "inline-block";

        }
    );

});

/* =====================================
   PRÓXIMA QUESTÃO
===================================== */

botaoProxima.addEventListener(
    "click",
    function () {

        questaoAtual++;


        if (
            questaoAtual <
            questoes.length
        ) {

            carregarQuestao();

        } else {

            finalizarJogo();

        }

    }
);


/* =====================================
   ATUALIZAR BARRA
===================================== */

function atualizarProgresso() {

    const porcentagem =
        (questaoAtual / questoes.length)
        * 100;


    barraProgresso.style.width =
        `${porcentagem}%`;

}


/* =====================================
   FINALIZAR JOGO
===================================== */

function finalizarJogo() {

    barraProgresso.style.width =
        "100%";


    pontuacaoFinal.textContent =
        pontos;


    telaFinal.style.display =
        "flex";

}


/* =====================================
   JOGAR NOVAMENTE
===================================== */

jogarNovamente.addEventListener(
    "click",
    function () {

        questaoAtual = 0;

        pontos = 0;


        pontosElemento.textContent =
            pontos;


        telaFinal.style.display =
            "none";


        carregarQuestao();

    }
);


/* =====================================
   INICIAR O JOGO
===================================== */

carregarQuestao();