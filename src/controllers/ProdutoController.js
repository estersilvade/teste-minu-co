const Produto = require('../model/produtoModel')


//cadastro de produto model
const cadastroDeProduto = async(req, res) =>{
  const {nomeDoProduto, quantidade,valorProdutoUnidade,valorDaNota,numerDaNota, nomeDofornecedor,cnpjFornecedor} = req.body
  try{
    const newProduto = new Produto({
      nomeDoProduto,
      quantidade,
      valorProdutoUnidade,
      valorDaNota,
      numerDaNota,
      nomeDofornecedor,
      cnpjFornecedor
    })
    const saveProduto =await newProduto.save()
    res.status(200).json({
      message : "Produto Salvo  com sucesso ", saveProduto
    })

  }catch(error){
    res.status(500).json({
      message : error.message
    })
  }
}
const editList = async (req, res) =>{

  try{
     const alterarDados = await Produto.findById(req.params.id)
     const{nomeDoProduto, quantidade,valorProdutoUnidade,valorDaNota,numerDaNota,nomeDofornecedor ,  cnpjFornecedor}= req.body
     alterarDados.nomeDoProduto = nomeDoProduto|| alterarDados.nomeDoProduto
     alterarDados.quantidade = quantidade|| alterarDados.quantidade
     alterarDados.valorProdutoUnidade = valorProdutoUnidade|| alterarDados.ValorProdutoUnidade
     alterarDados.valorDaNota = valorDaNota|| alterarDados.ValorDaNota
     alterarDados.numerDaNota = numerDaNota|| alterarDados.numerDaNota
     alterarDados.nomeDofornecedor= nomeDofornecedor|| alterarDados.nomeDofornecedor
     alterarDados.cnpjFornecedor= cnpjFornecedor|| alterarDados.cnpjFornecedor

     const dadosAlterados = await alterarDados.save()
     return res.status(200).json({
       message:"Dados Atualuzados com sucesso", dadosAlterados
     })
  
  }catch (error) {
    console.log(error)
    res.status(500).json({
      mensagem: error.mensage

    })
  }

}

module.exports ={
  cadastroDeProduto,
  editList
}