const tableros = (req,res) =>{
    res.render('../views/boards/tableros',{
        pagina: "Tableros"
    })
}


export {
    tableros
}