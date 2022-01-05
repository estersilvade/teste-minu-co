require('dotenv').config()

const express = require('express')

const cors = require('cors')

const dataBase = require('./database/configMong')

const funcionariosRouter = require('./routes/funcionariosRoutes')
 
const produtoRouter = require('./routes/produtoRoutes')

const app = express()

dataBase.connect()

app.use(cors())

app.use(express.json())





//rota teste 
app.use('/',funcionariosRouter)

app.use('/produto',produtoRouter)



module.exports = app