const express = require('express')

const router = express.Router()

const produtoController = require('../controllers/ProdutoController')

const {privateRouter} = require('../helper/auth')

router.use(privateRouter)


//@rout get '//'teste 
//@dec Rota de teste com apresentação com
//@acc privada 
router.get('/',  (req, res) => {
  res.status(200).json({
    message: "Produtos "
  })
})

//@ router Get'/listade' Apresentação 
//@dec Rota tras a lista de produtos cadastrados 
//@acc public
router.get('/listade' , produtoController.listadeProdutos )

//@ router Get'/entrada' cadastro 
//@dec Rota cadastrar produtos  
//@acc privada 
router.post('/entrada',produtoController.cadastroDeProduto)

//@ router Get'/update/:id' alterar dados 
//@dec Rota permite entrada de dados para atualizar 
//@accprivada
router.put('/update/:id',produtoController.cadastroDeProduto)


//@ router Get'/excluir/:id' exclui  
//@dec Rota permite exclui informaçoes do banco de dados 
//@acc privada 
router.delete('/excluir/:id',produtoController.excluir)




module.exports = router