/* =====================================
   ÁREA DAS QUESTÕES

   ADICIONE SUAS QUESTÕES AQUI
===================================== */

const questoes = [

/* =====================================
       QUESTÃO 1
    ===================================== */

    {
        pergunta: "Uma fórmula lógica possui 3 proposições simples diferentes: p, q e r. Quantas linhas terá sua tabela-verdade completa?",

        alternativas: {
            A: "3",
            B: "6",
            C: "8",
            D: "9",
            E: "12"
        },

        resposta: "C",

        explicacoes: {
            A: "3 é a quantidade de proposições simples, mas não é a quantidade de combinações possíveis. Para descobrir o número de linhas, usamos 2ⁿ.",
            B: "6 não representa todas as combinações possíveis de três proposições. O cálculo correto é 2³ = 8.",
            C: "O número de linhas é calculado por 2ⁿ. Como existem 3 proposições: 2³ = 8. Portanto, são necessárias 8 linhas para representar todas as combinações possíveis de V e F.",
            D: "9 não é o resultado de 2³. Como existem 3 proposições, temos 2³ = 8 linhas.",
            E: "12 não representa todas as combinações possíveis. Para 3 proposições, temos 2³ = 8 linhas."
        }
    },


    /* =====================================
       QUESTÃO 2
    ===================================== */

    {
        pergunta: "Considere p ∧ q. Em qual situação essa proposição será verdadeira?",

        alternativas: {
            A: "Quando apenas p for verdadeira.",
            B: "Quando apenas q for verdadeira.",
            C: "Quando p e q forem verdadeiras.",
            D: "Quando p e q forem falsas.",
            E: "Quando p e q tiverem valores diferentes."
        },

        resposta: "C",

        explicacoes: {
            A: "Na conjunção, não basta apenas p ser verdadeira. As duas proposições precisam ser verdadeiras.",
            B: "Não basta apenas q ser verdadeira. p também precisa ser verdadeira.",
            C: "O símbolo ∧ representa o conectivo E. Portanto, p ∧ q só será verdadeira quando p e q forem verdadeiras.",
            D: "Quando p e q são falsas, p ∧ q também é falsa.",
            E: "Ter valores diferentes não torna uma conjunção verdadeira. Em p ∧ q, as duas proposições precisam ser verdadeiras."
        }
    },


    /* =====================================
       QUESTÃO 3
    ===================================== */

    {
        pergunta: "Considere p ∨ q. Quando essa proposição é falsa?",

        alternativas: {
            A: "Quando p e q forem verdadeiras.",
            B: "Quando apenas p for verdadeira.",
            C: "Quando apenas q for verdadeira.",
            D: "Quando p e q forem falsas.",
            E: "Nunca é falsa."
        },

        resposta: "D",

        explicacoes: {
            A: "Quando p e q são verdadeiras, p ∨ q também é verdadeira.",
            B: "Quando p é verdadeira e q é falsa, p ∨ q continua sendo verdadeira.",
            C: "Quando q é verdadeira e p é falsa, p ∨ q também é verdadeira.",
            D: "O símbolo ∨ representa o OU. Uma disjunção só é falsa quando as duas proposições são falsas.",
            E: "A expressão p ∨ q pode ser falsa. Isso acontece quando p e q são falsas."
        }
    },


    /* =====================================
       QUESTÃO 4
    ===================================== */

    {
        pergunta: "Se a proposição p é verdadeira, qual é o valor de ¬p?",

        alternativas: {
            A: "Verdadeiro.",
            B: "Falso.",
            C: "Pode ser verdadeiro ou falso.",
            D: "Não possui valor lógico.",
            E: "Depende de q."
        },

        resposta: "B",

        explicacoes: {
            A: "O símbolo ¬ representa a negação. Quando p é verdadeira, ¬p é falsa.",
            B: "A negação inverte o valor lógico da proposição. Se p = V, então ¬p = F.",
            C: "Como sabemos que p é verdadeira, sua negação necessariamente será falsa.",
            D: "¬p é uma proposição lógica e possui um valor lógico.",
            E: "O valor de ¬p depende apenas do valor de p, não de uma proposição q."
        }
    },


    /* =====================================
       QUESTÃO 5
    ===================================== */

    {
        pergunta: "Qual das expressões abaixo é uma tautologia?",

        alternativas: {
            A: "p ∧ ¬p",
            B: "p ∨ ¬p",
            C: "p ∧ q",
            D: "p ↔ ¬p",
            E: "¬(p ∨ ¬p)"
        },

        resposta: "B",

        explicacoes: {
            A: "p ∧ ¬p é sempre falsa, pois uma proposição não pode ser verdadeira e falsa ao mesmo tempo.",
            B: "p ∨ ¬p é sempre verdadeira. Se p for verdadeira, p é verdadeira; se p for falsa, ¬p será verdadeira. Portanto, é uma tautologia.",
            C: "p ∧ q pode ser verdadeira ou falsa, dependendo dos valores de p e q. Portanto, é uma contingência.",
            D: "p ↔ ¬p é sempre falsa, pois p e ¬p sempre possuem valores diferentes.",
            E: "¬(p ∨ ¬p) é a negação de uma tautologia e, por isso, é sempre falsa."
        }
    },


    /* =====================================
       QUESTÃO 6
    ===================================== */

    {
        pergunta: "Qual das expressões abaixo representa uma contradição?",

        alternativas: {
            A: "p ∨ ¬p",
            B: "p → p",
            C: "p ∧ ¬p",
            D: "p ∨ q",
            E: "p ↔ p"
        },

        resposta: "C",

        explicacoes: {
            A: "p ∨ ¬p é sempre verdadeira. Portanto, é uma tautologia.",
            B: "p → p é sempre verdadeira, independentemente do valor de p.",
            C: "p ∧ ¬p é sempre falsa. Se p é verdadeira, ¬p é falsa; se p é falsa, ¬p é verdadeira. Assim, a conjunção nunca pode ser verdadeira.",
            D: "p ∨ q pode ser verdadeira ou falsa, dependendo dos valores das proposições. Portanto, é uma contingência.",
            E: "p ↔ p é sempre verdadeira, pois uma proposição sempre possui o mesmo valor que ela própria."
        }
    },


    /* =====================================
       QUESTÃO 7
    ===================================== */

    {
        pergunta: "Considere a proposição p ∧ q. Como ela deve ser classificada?",

        alternativas: {
            A: "Tautologia.",
            B: "Contradição.",
            C: "Contingência.",
            D: "Equivalência.",
            E: "Negação."
        },

        resposta: "C",

        explicacoes: {
            A: "p ∧ q não é sempre verdadeira. Ela só é verdadeira quando p e q são verdadeiras.",
            B: "p ∧ q não é sempre falsa. Quando p e q são verdadeiras, o resultado é verdadeiro.",
            C: "p ∧ q é uma contingência porque pode ser verdadeira em algumas situações e falsa em outras.",
            D: "Equivalência é uma relação entre duas proposições que possuem os mesmos valores lógicos em todas as linhas.",
            E: "Negação é uma operação lógica representada pelo símbolo ¬."
        }
    },


    /* =====================================
       QUESTÃO 8
    ===================================== */

    {
        pergunta: "Considere p → q. Em qual situação a implicação é falsa?",

        alternativas: {
            A: "p = V e q = V.",
            B: "p = V e q = F.",
            C: "p = F e q = V.",
            D: "p = F e q = F.",
            E: "A implicação nunca é falsa."
        },

        resposta: "B",

        explicacoes: {
            A: "V → V é verdadeiro.",
            B: "A implicação p → q só é falsa quando p é verdadeira e q é falsa. Essa é uma das regras mais importantes da tabela-verdade.",
            C: "F → V é considerado verdadeiro na lógica proposicional.",
            D: "F → F também é considerado verdadeiro.",
            E: "Uma implicação pode ser falsa. Isso acontece exatamente quando temos V → F."
        }
    },


    /* =====================================
       QUESTÃO 9
    ===================================== */

    {
        pergunta: "Duas proposições são logicamente equivalentes quando:",

        alternativas: {
            A: "Possuem o mesmo número de proposições simples.",
            B: "Possuem sempre o mesmo tamanho de fórmula.",
            C: "Possuem a mesma tabela-verdade.",
            D: "Possuem necessariamente os mesmos conectivos.",
            E: "São sempre tautologias."
        },

        resposta: "C",

        explicacoes: {
            A: "Ter a mesma quantidade de proposições simples não garante que duas fórmulas sejam equivalentes.",
            B: "Duas proposições equivalentes podem possuir tamanhos diferentes.",
            C: "Duas proposições são logicamente equivalentes quando apresentam os mesmos valores lógicos em todas as combinações possíveis.",
            D: "Duas expressões podem utilizar conectivos diferentes e ainda assim serem logicamente equivalentes.",
            E: "Uma equivalência não significa que as proposições sejam necessariamente tautologias."
        }
    },


    /* =====================================
       QUESTÃO 10
    ===================================== */

    {
        pergunta: "Considere o argumento: Se o servidor cair, o alerta será enviado. O alerta não foi enviado. Logo, o servidor não caiu. Esse argumento é:",

        alternativas: {
            A: "Inválido, porque p → q pode ser falso.",
            B: "Válido, pois corresponde ao modus tollens.",
            C: "Inválido, porque a conclusão deveria ser q.",
            D: "Uma contradição.",
            E: "Uma contingência."
        },

        resposta: "B",

        explicacoes: {
            A: "O fato de uma implicação poder ser falsa em determinada combinação não torna o argumento inválido. É necessário analisar a relação entre as premissas e a conclusão.",
            B: "O argumento possui a forma: p → q, ¬q, portanto ¬p. Essa estrutura é conhecida como modus tollens e representa uma forma válida de inferência.",
            C: "A conclusão correta é ¬p. Se p implica q e q não aconteceu, podemos concluir que p também não aconteceu.",
            D: "O argumento não é uma contradição. Estamos analisando a validade de um argumento lógico.",
            E: "Contingência é uma classificação de proposições. Neste caso, estamos analisando a validade de um argumento."
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