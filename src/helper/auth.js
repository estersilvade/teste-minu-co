const bcrypt = require('bcrypt')

exports.hashPassWord = async (password, res) => {
  try {
    const salt = await bcrypt.genSalt(8)

    const hash = await bcrypt.hash(password, salt)

    return hash

  }catch ( error ){
    console.log(error)
    res.status(500).json({message: mensagem.error})
  }
}