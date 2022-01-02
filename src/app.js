require('dotenv').config()

const express = require('express')

const cors = require('cors')

const dataBase = require('./database/configMong')

const app = express()

dataBase.connect()

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({
    mensagem: 'tudo ok por aqui'
  })
})

module.exports = app