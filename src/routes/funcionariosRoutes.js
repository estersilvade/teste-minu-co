const express = require('express')

const router = express.Router()

const funcionariosController = require('../controllers/funcionariosControllers')

const {privateRouter} = require('../helper/auth')


router.all('/funcionarios/*', privateRouter)

//@ router Get' /' Apresentação 
//@dec Rota de teste com apresentação 
//@acc public

router.get('/', (req, res) => res.status(200).json({
 message: "Teste Minu.co"
}))

//@ route Get /funionarios
//@dec Lista de funionarios ativos 
//@access public
router.get('/funcionarios/lista',funcionariosController.getAll)

//@ route post /funionarios/registro
//@deccadastro de funcionarios 
//@access public
router.post('/funcionarios/registro',funcionariosController.rgDeFuncionarios)

//@ route post /funionarios/login
//@deccadastro de logar funcionarios 
//@access public
router.post('/login',funcionariosController.loginFuncionarios)

//@ route delete /funionarios/delete
//@deccadastro de deletar funcionarios 
//@access public
router.delete('/funcionarios/delete/:id' ,funcionariosController. deletFuncionarios)

//@ route Atualizar /funionarios/Atualizar
//@deccadastro de deletar funcionarios 
//@access public
router.put('/funcionarios/atualizar/:id',funcionariosController.updateFuncionarios)

module.exports = router