// ==========================================
// PROTEGER CENTRAL
// ==========================================

protegerPaginaAluno();


// ==========================================
// BOTÃO SAIR
// ==========================================

const botaoSair =
    document.getElementById("botaoSair");


if (botaoSair) {

    botaoSair.addEventListener(
        "click",
        function () {

            sairAluno();

        }
    );

}