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

module.exports = router