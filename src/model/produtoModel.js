const mongoose = require ('mongoose')

const  controleDeEstoque = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  nomeDoProduto : {
    type: String,
    required : true
  },
  quantidade : {
    type: Number,
    required : true
  },
  valorProdutoUnidade  : {
    type: Number,
    required : true
  },
  valorDaNota:{
    type: Number,
    required : true
  },
  numeroDaNota:{
    type: Number,
    required : true
  },
  nomeDofornecedor:{
    type: String,
    required : true
  },
  cnpjFornecedor:{
    type: Number,
    required : true
  },
  produtoEmEstoque: {
    type: Boolean,
    required : true
  }
  
},
{ timestamps: true }
)

const Produto = mongoose.model('produto',controleDeEstoque )

module.exports = Produto