require('dotenv').config()

const express = require('express')

const cors = require('cors')

const dataBase = require('./database/configMong')

const funcionariosRouter = require('./routes/fruncionariosRoutes')

const app = express()

dataBase.connect()

app.use(cors())

app.use(express.json())

//rota teste 
app.use('/',funcionariosRouter)

module.exports = app