const fs = require('fs')
const jwt = require('jsonwebtoken')

function middlewareEspecifico (req,res,next){
    fs.append(`${Date.toString()} ${req.method} ${req.body.nome}`)
    next()
}

function verificaToken (req, res, next) {
    const token = req.cookie.TokenJWT
    if(!token){
        res.status(401).json({msg: "Token não encontrado"})
    }
    try{
        const payload = jwt.verify(token)
    }catch{

    }

    next()
}

module.exports = {middlewareEspecifico}