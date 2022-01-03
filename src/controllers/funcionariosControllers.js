const Funcinarios = require('../model/funcionarioModel')

const {hashPassWord }= require('../helper/auth')

const bcrypt = require('bcrypt')

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

const rgDeFuncionarios = async (req, res) =>{
   const {nomeFuncionario, cargo, email, dataDeNacimento, genero, estadoCivil, dependente,quantidadeDeDependentes, telefone, endereco, bairro, numeroDaRecidencia,coplemeto, pcd, tipoPcd, status ,password } = req.body
   try{
     const newFuncion = new Funcinarios ({
      nomeFuncionario,
      cargo, 
      email, 
      dataDeNacimento, 
      genero, 
      estadoCivil, 
      dependente,
      quantidadeDeDependentes, 
      telefone, 
      endereco, 
      bairro, 
      numeroDaRecidencia,
      coplemeto, 
      pcd, 
      tipoPcd, 
      status,
      password
     })
     const passwordHashed = await hashPassWord(newFuncion.password,res)
     newFuncion.password = passwordHashed

     const salveFuncionarios = await newFuncion.save()
     res.status(201).json({
       message:"Funcionario Cadastrado com sucesso", salveFuncionarios
     })
   }catch (error) {
    res.status(500).json({
      message:error.message 
    })
  
  }
}

module.exports = {
  getAll,
  rgDeFuncionarios
}
