const formLogin =
    document.getElementById("formLogin");


formLogin.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const matricula =
            document.getElementById("matricula").value.trim();


        const senha =
            document.getElementById("senha").value;


        const mensagem =
            document.getElementById("mensagem");


        const usuarioSalvo =
            JSON.parse(
                localStorage.getItem("usuario")
            );


        if (!usuarioSalvo) {

            mensagem.textContent =
                "Nenhum usuário cadastrado.";

            mensagem.style.color = "#ef4444";

            return;

        }


        if (
            matricula === usuarioSalvo.matricula &&
            senha === usuarioSalvo.senha
        ) {

            // Inicia a sessão
            iniciarSessaoAluno();


            mensagem.textContent =
                "Login realizado com sucesso!";

            mensagem.style.color = "#22c55e";


            setTimeout(function () {

                window.location.href =
                    "central/index.html";

            }, 500);


        } else {

            mensagem.textContent =
                "Matrícula ou senha incorretas.";

            mensagem.style.color = "#ef4444";

        }

    }
);