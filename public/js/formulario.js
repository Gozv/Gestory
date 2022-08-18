
const correo = document.getElementById("email1")
const pass = document.getElementById("pass1")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit",  e=> {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""

    if (!regexEmail.test(correo.value)) {
        warnings += "El correo no es valido <br>"
        entrar = true
    }
    if (pass.value.length <8) {
        warnings += "La contraseña no es valida <br>"
        entrar = true
    }
    if (entrar) {
        parrafo.innerHTML = warnings;
        
    }else{
        parrafo.innerHTML = "Enviado"
    }
})
