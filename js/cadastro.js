const formCadastro = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");

formCadastro.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const matricula = document.getElementById("matricula").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    // Verifica se as senhas são iguais
    if (senha !== confirmarSenha) {
        mensagem.textContent = "As senhas não são iguais.";
        mensagem.style.color = "red";
        return;
    }

    // Cria o usuário
    const usuario = {
        nome: nome,
        matricula: matricula,
        senha: senha
    };

    // Salva o usuário no navegador
    localStorage.setItem("usuario", JSON.stringify(usuario));

    // Mostra mensagem de sucesso
    mensagem.textContent = "Conta criada com sucesso!";
    mensagem.style.color = "green";

    // Vai para a tela de login
    setTimeout(function() {
        window.location.href = "index.html";
    }, 1000);
});
