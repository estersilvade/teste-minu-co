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

router.post('/entrada',produtoController.cadastroDeProduto)

router.put('/update/:id',produtoController.cadastroDeProduto)




module.exports = router