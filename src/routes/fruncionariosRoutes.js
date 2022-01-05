const express = require('express')

const router = express.Router()

const funionariosController = require('../controllers/funcionariosControllers')

//@ router Get' /' Apresentação 
//@dec Rota de teste com apresentação 
//@acc public

router.get('/', (req, res) => res.status(200).json({
 message: "Teste Minu.co"
}))

//@ route Get /funionarios
//@dec Lista de funionarios ativos 
//@access public
router.get('/funionarios',funionariosController.getAll)

//@ route post /registro
//@deccadastro de funcionarios 
//@access public
router.post('/registro',funionariosController.rgDeFuncionarios)

//@ route post /login
//@deccadastro de logar funcionarios 
//@access public
router.post('/login',funionariosController.loginFuncionarios)

//@ route delete /delete
//@deccadastro de deletar funcionarios 
//@access public
router.delete('/delete/:id' ,funionariosController. deletFuncionarios)

//@ route Atualizar/Atualizar
//@deccadastro de deletar funcionarios 
//@access public
router.put('/Atualizar/:id',funionariosController.updateFuncionarios)

module.exports = router