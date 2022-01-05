const mongoose = require ('mongoose')

const  controleDeEstoque = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  nomeDoProduto : {
    type: String,
    require : true
  },
  quantidade : {
    type: Number,
    require : true
  },
  valorProdutoUnidade  : {
    type: Number,
    require : true
  },
  numerDaNota:{
    type: Number,
    require : true
  },
  nomeDofornecedor:{
    type: String,
    require : true
  },
  valorDaNota:{
    type: Number,
    require : true
  },
  cnpjFornecedor:{
    type: Number,
    require : true
  }
  
},
{ timestamps: true }
)

const produto =mongoose.model('Produto',controleDeEstoque )

module.exports = produto