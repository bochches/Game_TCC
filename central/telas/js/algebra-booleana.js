/* =====================================
   ÁREA DAS QUESTÕES

   ADICIONE SUAS QUESTÕES AQUI
===================================== */

const questoes = [

    /* =====================================
    QUESTÃO 1
    ===================================== */

    {
        pergunta: "Na Álgebra Booleana, quais são os dois valores lógicos possíveis?",

        alternativas: {
            A: "0 e 2",
            B: "1 e 2",
            C: "0 e 1",
            D: "-1 e 1",
            E: "V e 2"
        },

        resposta: "C",

        explicacoes: {
            A: "Na Álgebra Booleana, os valores utilizados são 0 e 1, e não 0 e 2.",
            B: "Os valores básicos da Álgebra Booleana são 0 e 1.",
            C: "A Álgebra Booleana trabalha com apenas dois valores: 0, que representa falso, e 1, que representa verdadeiro.",
            D: "-1 não é um dos valores lógicos básicos da Álgebra Booleana.",
            E: "Embora V possa representar verdadeiro em lógica, na Álgebra Booleana normalmente utilizamos 1 para verdadeiro e 0 para falso."
        }
    },


    /* =====================================
    QUESTÃO 2
    ===================================== */

    {
        pergunta: "Qual operação booleana é representada pelo símbolo + em muitas expressões de Álgebra Booleana?",

        alternativas: {
            A: "NOT",
            B: "OR",
            C: "AND",
            D: "XOR",
            E: "NAND"
        },

        resposta: "B",

        explicacoes: {
            A: "A operação NOT representa a negação de uma variável, normalmente indicada por uma barra ou apóstrofo.",
            B: "Na Álgebra Booleana, o operador + é frequentemente utilizado para representar a operação OR (OU).",
            C: "A operação AND normalmente é representada por um ponto, justaposição ou símbolo equivalente.",
            D: "O operador + representa normalmente OR, e não XOR.",
            E: "NAND é uma operação composta que corresponde à negação do AND."
        }
    },


    /* =====================================
    QUESTÃO 3
    ===================================== */

    {
        pergunta: "Na Álgebra Booleana, qual é o resultado de A + 0?",

        alternativas: {
            A: "0",
            B: "1",
            C: "A",
            D: "¬A",
            E: "A + 1"
        },

        resposta: "C",

        explicacoes: {
            A: "Pela propriedade de identidade do OR, A + 0 mantém o valor de A.",
            B: "A + 0 não resulta sempre em 1. O resultado depende do valor de A.",
            C: "A + 0 = A. O zero é o elemento neutro da operação OR.",
            D: "¬A representa a negação de A, enquanto A + 0 mantém A.",
            E: "A + 1 é igual a 1. A + 0 é igual a A."
        }
    },


    /* =====================================
    QUESTÃO 4
    ===================================== */

    {
        pergunta: "Qual é o resultado da expressão A · 1 na Álgebra Booleana?",

        alternativas: {
            A: "0",
            B: "1",
            C: "A",
            D: "¬A",
            E: "A + 1"
        },

        resposta: "C",

        explicacoes: {
            A: "A · 1 não é sempre 0. O resultado mantém o valor de A.",
            B: "A · 1 só será 1 quando A for 1.",
            C: "A · 1 = A. O 1 é o elemento neutro da operação AND.",
            D: "A negação de A seria ¬A, e não A · 1.",
            E: "A + 1 é uma operação OR e resulta sempre em 1."
        }
    },


    /* =====================================
    QUESTÃO 5
    ===================================== */

    {
        pergunta: "Qual é o resultado de A + 1?",

        alternativas: {
            A: "A",
            B: "0",
            C: "¬A",
            D: "1",
            E: "A · 1"
        },

        resposta: "D",

        explicacoes: {
            A: "A + 1 não mantém A. Na operação OR, qualquer valor OR 1 resulta em 1.",
            B: "A + 1 não resulta em 0.",
            C: "¬A representa a negação de A.",
            D: "A + 1 = 1. Na operação OR, se uma das entradas for 1, o resultado será 1.",
            E: "A · 1 = A. A expressão A + 1 utiliza OR e resulta em 1."
        }
    },


    /* =====================================
    QUESTÃO 6
    ===================================== */

    {
        pergunta: "Qual é o resultado de A · 0?",

        alternativas: {
            A: "A",
            B: "1",
            C: "0",
            D: "¬A",
            E: "A + 0"
        },

        resposta: "C",

        explicacoes: {
            A: "A · 0 não mantém A. O resultado é sempre 0.",
            B: "A · 0 não pode resultar em 1.",
            C: "A · 0 = 0. Na operação AND, se uma das entradas for 0, o resultado será 0.",
            D: "¬A é a negação de A e não corresponde ao resultado de A · 0.",
            E: "A + 0 = A. Já A · 0 = 0."
        }
    },


    /* =====================================
    QUESTÃO 7
    ===================================== */

    {
        pergunta: "Qual é o resultado da expressão A + A na Álgebra Booleana?",

        alternativas: {
            A: "0",
            B: "1",
            C: "A",
            D: "¬A",
            E: "A · A"
        },

        resposta: "C",

        explicacoes: {
            A: "A + A não é necessariamente 0.",
            B: "O resultado não é necessariamente 1. Se A = 0, o resultado também será 0.",
            C: "Pela lei idempotente, A + A = A.",
            D: "¬A é a negação de A.",
            E: "Embora A · A também seja igual a A, a expressão apresentada é A + A."
        }
    },


    /* =====================================
    QUESTÃO 8
    ===================================== */

    {
        pergunta: "Qual é o resultado da expressão A · A?",

        alternativas: {
            A: "0",
            B: "1",
            C: "A",
            D: "¬A",
            E: "A + 1"
        },

        resposta: "C",

        explicacoes: {
            A: "A · A não é sempre 0.",
            B: "A · A não é sempre 1.",
            C: "Pela lei idempotente, A · A = A.",
            D: "¬A é a negação de A.",
            E: "A + 1 é uma expressão diferente e resulta sempre em 1."
        }
    },


    /* =====================================
    QUESTÃO 9
    ===================================== */

    {
        pergunta: "Qual é o resultado de A + ¬A?",

        alternativas: {
            A: "A",
            B: "0",
            C: "¬A",
            D: "1",
            E: "A · ¬A"
        },

        resposta: "D",

        explicacoes: {
            A: "A + ¬A não depende do valor de A. O resultado é sempre 1.",
            B: "A + ¬A é uma tautologia, portanto sempre resulta em 1.",
            C: "A + ¬A combina A com sua negação.",
            D: "A + ¬A = 1. Uma variável ou sua negação sempre terá pelo menos uma delas com valor 1.",
            E: "A · ¬A = 0. Já A + ¬A = 1."
        }
    },


    /* =====================================
    QUESTÃO 10
    ===================================== */

    {
        pergunta: "Qual é o resultado de A · ¬A?",

        alternativas: {
            A: "0",
            B: "1",
            C: "A",
            D: "¬A",
            E: "A + ¬A"
        },

        resposta: "A",

        explicacoes: {
            A: "A · ¬A = 0. Uma variável nunca pode ser simultaneamente verdadeira e falsa. Portanto, a operação AND sempre resulta em 0.",
            B: "A · ¬A é uma contradição e sempre resulta em 0.",
            C: "A · ¬A não mantém A porque A e ¬A nunca podem ser verdadeiros ao mesmo tempo.",
            D: "¬A é apenas a negação de A.",
            E: "A + ¬A = 1, enquanto A · ¬A = 0."
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