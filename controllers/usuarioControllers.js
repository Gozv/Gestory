const landing = (req,res) =>{
    res.render('./',{
        pagina: "Landing"
    })
}

//Routing

const login = (req,res)=>{
    res.render('../views/usuario/loginpage',{
        pagina: "Login"
    })
}

const registro = (req,res) =>{
    res.render('../views/usuario/registro',{
        pagina: "Registro"
    })
}

const recuperar = (req,res) =>{
    res.render('../views/usuario/recuperar',{
        pagina: "Recuperar Cuenta"
    })
}

export {
    landing,
    login,
    registro,
    recuperar
}