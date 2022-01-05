const express = require('express')


const router = express.Router()

const produtoController = require('../controllers/ProdutoController')


//@ router Get' //produto' Apresentação 
//@dec Rota de teste com apresentação 
//@acc public

router.post('//produto', produtoController.cadastroDeProduto)

//@ router Get' //' Apresentação 
//@dec Rota de teste com apresentação 
//@acc public
router.put('//atualizar' , produtoController.editList)

module.exports = router
