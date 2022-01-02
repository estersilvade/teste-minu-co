const mongoose = require('mongoose')

const funcionarioSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  nomeFuncionario : {
    type: String,
    require : true
  },
  cargo : {
    type: String,
    require : true
  }, 
  email: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  dataDeNacimento : {
    type :Number,
    require : true
  },
  genero: {
    type: String,
    require : true
  },
  estadoCivil : {
    type: String,
    require : true
  },
  Dependente : {
    type: Boolean,
    require : true
  },
  quantidadeDeDependentes : {
    type: Number,
    require : true
  },
  telefone : {
    type: Number,
    require : true
  },
  endereco : {
    type: Number,
    require : true
  },
  bairro : {
    type:String,
    require : true
  },
  numeroDaRecidencia : {
    type:Number,
    require : true
  },
  coplemeto : {
    type:String
  },
  pcd : {
    type:Boolean,
    require : true
  },
  tipoPcd :{
    type:String,
    require : true
  },
  status : {
    type: Boolean,
    require : true
  }

})
const funcinario = mongoose.model('funcinario',funcionarioSchema  )

module.exports = funcinario

