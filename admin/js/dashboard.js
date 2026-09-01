// ==========================================
// PROTEGER DASHBOARD
// ==========================================

protegerPaginaAdmin();


// ==========================================
// BOTÃO SAIR
// ==========================================

const botaoSairAdmin =
    document.getElementById(
        "botaoSairAdmin"
    );


if (botaoSairAdmin) {

    botaoSairAdmin.addEventListener(
        "click",
        function () {

            sairAdmin();

        }
    );

}


// ==========================================
// LER RELATÓRIO
// ==========================================

const relatorio =
    JSON.parse(
        localStorage.getItem(
            "relatorioAlunos"
        )
    ) || [];


const tabela =
    document.getElementById(
        "tabelaAlunos"
    );


const alunos = {};


// ==========================================
// ORGANIZAR DADOS
// ==========================================

relatorio.forEach(function (item) {


    if (!alunos[item.aluno]) {

        alunos[item.aluno] = {

            acertos: 0,

            erros: 0

        };

    }


    if (item.acertou) {

        alunos[item.aluno].acertos++;

    } else {

        alunos[item.aluno].erros++;

    }

});


// ==========================================
// CALCULAR ESTATÍSTICAS
// ==========================================

let totalQuestoes = 0;

let somaMedias = 0;


Object.keys(alunos).forEach(
    function (nome) {


        const aluno =
            alunos[nome];


        const total =
            aluno.acertos +
            aluno.erros;


        const aproveitamento =
            total > 0
                ? Math.round(
                    (aluno.acertos / total) * 100
                )
                : 0;


        totalQuestoes += total;

        somaMedias += aproveitamento;


        tabela.innerHTML += `

            <tr>

                <td>
                    ${nome}
                </td>

                <td>
                    ${aluno.acertos}
                </td>

                <td>
                    ${aluno.erros}
                </td>

                <td>
                    ${aproveitamento}%
                </td>

            </tr>

        `;

    }
);


// ==========================================
// ATUALIZAR CARDS
// ==========================================

const quantidadeAlunos =
    Object.keys(alunos).length;


document.getElementById(
    "totalAlunos"
).textContent =
    quantidadeAlunos;


document.getElementById(
    "questoesRespondidas"
).textContent =
    totalQuestoes;


const media =
    quantidadeAlunos > 0
        ? Math.round(
            somaMedias /
            quantidadeAlunos
        )
        : 0;


document.getElementById(
    "mediaTurma"
).textContent =
    `${media}%`;