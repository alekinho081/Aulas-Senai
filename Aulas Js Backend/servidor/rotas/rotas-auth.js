const express = require('express')
const router_auth = express.Router()
const {login} = require('../controladores/controller-auth')
const {middlewareEspecifico} = require('../middlewares/midlewares')


router_auth.post('/login', middlewareEspecifico,login)

module.exports = router_auth