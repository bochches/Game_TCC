// ==========================================
// AUTENTICAÇÃO DO SISTEMA
// ==========================================


// ------------------------------------------
// ALUNO
// ------------------------------------------

function iniciarSessaoAluno() {
    localStorage.setItem("usuarioLogado", "true");
}


function alunoEstaLogado() {
    return localStorage.getItem("usuarioLogado") === "true";
}


function protegerPaginaAluno() {

    if (!alunoEstaLogado()) {

        window.location.replace("../index.html");

    }

}


function sairAluno() {

    localStorage.removeItem("usuarioLogado");
    localStorage.removeItem("usuario");

    window.location.replace("../index.html");

}


// ------------------------------------------
// ADMINISTRADOR
// ------------------------------------------

function iniciarSessaoAdmin() {

    localStorage.setItem("adminLogado", "true");

}


function adminEstaLogado() {

    return localStorage.getItem("adminLogado") === "true";

}


function protegerPaginaAdmin() {

    if (!adminEstaLogado()) {

        window.location.replace("login.html");

    }

}


function sairAdmin() {

    localStorage.removeItem("adminLogado");

    window.location.replace("login.html");

}