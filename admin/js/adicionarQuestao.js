const adminLogado =
    localStorage.getItem("adminLogado");


if (adminLogado !== "true") {

    window.location.replace(
        "login.html"
    );

}