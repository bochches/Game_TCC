const formLogin = document.getElementById("loginProfessor");
const mensagem = document.getElementById("mensagemAdmin");

formLogin.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document
        .getElementById("emailProfessor")
        .value
        .trim();

    const senha = document
        .getElementById("senhaProfessor")
        .value;

    // Dados de acesso do professor
    const emailAdmin = "teofiloviturino@ifpe";
    const senhaAdmin = "123456";

    // Verificação
    if (email === emailAdmin && senha === senhaAdmin) {

        // Salva que o professor está logado
        localStorage.setItem("adminLogado", "true");

        mensagem.textContent = "Login realizado com sucesso!";
        mensagem.style.color = "#22c55e";

        // Vai para o Dashboard
        setTimeout(function () {
            window.location.href = "dashboard.html";
        }, 500);

    } else {

        mensagem.textContent = "E-mail ou senha incorretos.";
        mensagem.style.color = "#ef4444";

    }

});