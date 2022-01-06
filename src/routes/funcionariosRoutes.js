const express = require('express')

const router = express.Router()

const funcionariosController = require('../controllers/funcionariosControllers')

const {privateRouter} = require('../helper/auth')




//@ router Get' /' Apresentação 
//@dec Rota de teste com apresentação 
//@acc public

router.get('/', (req, res) => res.status(200).json({
 message: "Teste Minu.co"
}))

//@ route Get /funionarios
//@dec Lista de funionarios ativos 
//@access public
router.get('/funcionarios',funcionariosController.getAll)

//@ route post /registro
//@deccadastro de funcionarios 
//@access public
router.post('/registro',funcionariosController.rgDeFuncionarios)

//@ route post /login
//@deccadastro de logar funcionarios 
//@access public
router.post('/login',funcionariosController.loginFuncionarios)

//@ route delete /delete
//@deccadastro de deletar funcionarios 
//@access public
router.delete('/delete/:id' ,funcionariosController. deletFuncionarios)

//@ route Atualizar/Atualizar
//@deccadastro de deletar funcionarios 
//@access public
router.put('/Atualizar/:id',privateRouter,funcionariosController.updateFuncionarios)

module.exports = router