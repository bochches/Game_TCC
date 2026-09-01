// ==========================================
// REGISTRAR RESPOSTA
// ==========================================

function registrarResposta(
    aluno,
    jogo,
    questao,
    resposta,
    respostaCorreta,
    acertou,
    pontos
) {


    const relatorio =
        JSON.parse(
            localStorage.getItem(
                "relatorioAlunos"
            )
        ) || [];


    const registro = {

        aluno: aluno,

        jogo: jogo,

        questao: questao,

        resposta: resposta,

        respostaCorreta: respostaCorreta,

        acertou: acertou,

        pontos: pontos,

        data:
            new Date().toLocaleString(
                "pt-BR"
            )

    };


    relatorio.push(registro);


    localStorage.setItem(

        "relatorioAlunos",

        JSON.stringify(relatorio)

    );

}