const Funcinarios = require('../model/funcionarioModel')

const {hashPassWord }= require('../helper/auth')

const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

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
   const {nomeFuncionario, cargo, email, dataDeNacimento, genero, estadoCivil, dependente,quantidadeDeDependentes, telefone, endereco, bairro, numeroDaResidencia,coplemeto, pcd, tipoPcd, status ,password } = req.body
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
      numeroDaResidencia,
      coplemento, 
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

const loginFuncionarios = async (req, res) =>{
  const {  email, password} = req.body
  try {
    const funcionarios = await Funcinarios.findOne({email: email})

      if ( !funcionarios){
      return res.status(422).json({message :"Email não encontrado!"})
  }
    const checkPassword = await bcrypt.compare(password, funcionarios.password)

      if(!checkPassword){
      return res.status(422).json({message :"Senha incorreta!"})
  }
    const secret = process.env.JWT_SECRET
    const token = jwt.sign({id: funcionarios._id},secret)
      return res.status(200).json({
        message:"Usuario Logado ",
        token
      })

  }catch (error) {
    res.status(500).json({
      message:error.message 
    })
  
  }
}

const deletFuncionarios = async (req, res) => {

  try {
    const funcionarios = await Funcinarios.findByIdAndDelete(req.params.id)
    res.status(200).json({
      message: "Funcionario Deletado " ,funcionarios
    })
  }catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const updateFuncionarios = async (req, res) => {

  const authHeader = req.get("authorization")

  const token = authHeader.split(" ")[1]

  const decoded = jwt.verify(token, process.env.SECRET)

  const idFuncionarios = decoded.id.valueOf()

  try {
    const alterarDados = await Funcinarios.findById(idFuncionarios)
    const {nomeFuncionario, cargo, email, genero, estadoCivil,quantidadeDeDependentes, telefone, endereco, bairro, numeroDaResidencia,coplemento, status ,password} = req.body
    alterarDados.nomeFuncionario = nomeFuncionario||alterarDados.nomeFuncionario 
    alterarDados.cargo= cargo|| alterarDados.cargo
    alterarDados.email= email|| alterarDados.email
    alterarDados.genero= genero|| alterarDados.genero
    alterarDados.estadoCivil= estadoCivil|| alterarDados.estadoCivil
    alterarDados.dependente= dependente|| alterarDados.dependente
    alterarDados.quantidadeDeDependentes = quantidadeDeDependentes|| alterarDados.quantidadeDeDependentes
    alterarDados.telefone=telefone||alterarDados.telefone
    alterarDados.endereco= endereco|| alterarDados.endereco
    alterarDados.bairro= bairro|| alterarDados.bairro
    alterarDados.numeroDaResidencia = numeroDaResidencia|| alterarDados.numeroDaResidencia
    alterarDados.coplemento= coplemento|| alterarDados.coplemento
    alterarDados.status = status|| alterarDados.status
    alterarDados.password = password|| alterarDados.password

    const dadosAlterados = await alterarDados.save()
    return res.status(200).json({
      message: "Dados  Atualizado com sucesso", dadosAlterados
    })
  }catch (error) {
    console.log(error)
    res.status(500).json({
      mensagem: error.mensage

    })
}}

module.exports = {
  getAll,
  rgDeFuncionarios,
  loginFuncionarios,
  updateFuncionarios,
  deletFuncionarios
}
