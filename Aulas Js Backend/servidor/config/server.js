const express = require('express')
const app = express()
const router_users = require('../rotas/rotas-users')
const router_auth = require('../rotas/rotas-auth')


app.use(express.json())

app.use((req, res, next) => {
    console.log(`${Date.toString()} ${req.method} ${req.body.nome}`)
    next()

})


app.use('/v1', router_users)
app.use('/v1', router_auth)



app.use((err, req, res, next) => {
    //implementar um arquivo de logs
    const code = err.StatusCode || 500
    const mensagem = err.message || "Internal Server Error"
    res.status(code).json({msg: mensagem})
})




app.listen(8000, ()=>{
    console.log('server online')
})