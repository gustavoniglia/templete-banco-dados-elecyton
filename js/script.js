console.log("script carregou com sucesso")

var formulario = document.getElementById("form-cadastrar")

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault() //impede o envio do formulario

    var campoNome = document.getElementById("nome").value
    var campoEmail = document.getElementById("email").value     

    window.api.cadastrarUsuario(campoNome, campoEmail);

    console.log(campoNome, campoEmail)
})