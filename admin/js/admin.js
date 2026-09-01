const emailAdmin =
    "professor@escola.com";


const senhaAdmin =
    "123456";


const formLoginProfessor =
    document.getElementById(
        "loginProfessor"
    );


formLoginProfessor.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const email =
            document.getElementById(
                "teofiloviturino@ifpe"
            ).value.trim();


        const senha =
            document.getElementById(
                "123456"
            ).value;


        const mensagem =
            document.getElementById(
                "mensagemAdmin"
            );


        if (
            email === emailAdmin &&
            senha === senhaAdmin
        ) {

            iniciarSessaoAdmin();


            mensagem.textContent =
                "Login realizado com sucesso!";


            mensagem.style.color =
                "#22c55e";


            setTimeout(function () {

                window.location.href =
                    "dashboard.html";

            }, 500);


        } else {

            mensagem.textContent =
                "E-mail ou senha incorretos.";


            mensagem.style.color =
                "#ef4444";

        }

    }
);