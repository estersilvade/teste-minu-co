require('dotenv').config()

const express = require('express')

const cors = require('cors')

const dataBase = require('./database/configMong')

const funcionariosRouter = require('./routes/fruncionariosRoutes')

const produtoRoutes = require('./routes/produtoRoutes')

const app = express()

dataBase.connect()

app.use(cors())

app.use(express.json())



//rota teste 
app.use('/',funcionariosRouter)

//rota teste Produto
app.use('//',produtoRoutes)

module.exports = app