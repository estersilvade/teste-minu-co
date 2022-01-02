const Funcinarios = require('../model/funcionarioModel')

//const {hashPassWord }= require('../helper/auth')

//const bcrypt = require('bcrypt')

//const jwt = require('jsonwebtoken')

const getAll = async (req, res) =>{

  try{
    const funcinario = await Funcinarios.find({
      status: true,
    })
    res.status(200).json({
      message: "Lista de funcinarios ativo ", funcinario
    })
  }catch(error){
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = {
  getAll
}
