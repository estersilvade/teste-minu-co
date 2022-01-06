const mongoose = require('mongoose')

const funcionarioSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  nomeFuncionario : {
    type: String,
    required : true
  },
  roles:{
    type: String,
    required : true,
    default : "user"
  },
  cargo : {
    type: String,
    required : true

  }, 
  email: {
    type: String,
    unique: true,
    required: true
  },
  dataDeNacimento : {
    type :String,
    required : true
  },
  genero: {
    type: String,
    required : true
  },
  estadoCivil : {
    type: String,
    required : true
  },
  dependente : {
    type: Boolean,
    required : true
  },
  quantidadeDeDependentes : {
    type: Number,
    required : true
  },
  telefone : {
    type: Number,
    required : true
  },
  endereco : {
    type: String,
    required : true
  },
  bairro : {
    type:String,
    required : true
  },
  numeroDaResidencia : {
    type:Number,
    required : true
  },
  coplemeto : {
    type:String
  },
  pcd : {
    type:Boolean,
    required : true
  },
  tipoPcd :{
    type:String,
    required : true
  },
  status : {
    type: Boolean,
    required : true
  },
  password: {
    type: String,
    required: true
  }

})
const funcinario = mongoose.model('funcinario',funcionarioSchema  )

module.exports = funcinario

