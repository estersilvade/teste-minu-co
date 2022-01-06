const Produto = require('../model/produtoModel')


//cadastro de produto 
const cadastroDeProduto = async(req, res) => {
  const { nomeDoProduto, quantidade,valorProdutoUnidade,valorDaNota,numeroDaNota, nomeDofornecedor,cnpjFornecedor,prodoEmEstoque}= req.body
  try{
    const newProduto = new Produto({
      nomeDoProduto,
      quantidade,
      valorProdutoUnidade,
      valorDaNota,
      numeroDaNota,
      nomeDofornecedor,
      cnpjFornecedor,
      prodoEmEstoque
    })
   
    const saveProduto = await newProduto.save()
    res.status(200).json({
      message : "Produto Salvo  com sucesso ", saveProduto
    }) 
    console.log(saveProduto )

  }catch(error){
    res.status(500).json({
      message : error.message
    })
  }
}

//lista
const listadeProdutos = async (req, res) =>{

  try{
    const produto = await Produto.find()
    res.status(200).json({
      message :"Lista de produtos",produto
    })
    
  }catch (error) {
    res.status(500).json({
      message: error.message 
    })
  }
}


const editList = async (req, res) =>{

  try{
     const alterarDados = await Produto.findById(req.params.id)
     const{nomeDoProduto, quantidade,valorProdutoUnidade,valorDaNota,numerDaNota,nomeDofornecedor ,  cnpjFornecedor,prodoEmEstoque}= req.body
     alterarDados.nomeDoProduto = nomeDoProduto|| alterarDados.nomeDoProduto
     alterarDados.quantidade = quantidade|| alterarDados.quantidade
     alterarDados.valorProdutoUnidade = valorProdutoUnidade|| alterarDados.ValorProdutoUnidade
     alterarDados.valorDaNota = valorDaNota|| alterarDados.ValorDaNota
     alterarDados.numerDaNota = numerDaNota|| alterarDados.numerDaNota
     alterarDados.nomeDofornecedor= nomeDofornecedor|| alterarDados.nomeDofornecedor
     alterarDados.cnpjFornecedor= cnpjFornecedor|| alterarDados.cnpjFornecedor
     alterarDados.prodoEmEstoque = prodoEmEstoque || prodoEmEstoque
     const dadosAlterados = await alterarDados.save ()
     return res.status(200).json({
       message:"Dados Atualuzados com sucesso", dadosAlterados
     })
  
  }catch (error) {
    console.log(error)
    res.status(500).json({
      message: error.message 

    })
  }

}

const excluir  = async (req, res) => {

  try{
    const produto = await Produto.findByIdAndDelete(req.params.id)
   
    res.status(200).json({
      message:"Produto excluir ", produto

    })
  }catch(error){
    res.status(500).json({
      message: error.mensage
    })
  }
}


module.exports = {

  cadastroDeProduto,
  editList,
  excluir,
  listadeProdutos 
}