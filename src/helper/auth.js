const bcrypt = require('bcrypt')

exports.hashPassWord = async (password, res) => {
  try {
    const salt = await bcrypt.genSalt(10)
    
    const hash = await bcrypt.hash(password, salt) 
      
    return hash

  } catch(error){
    console.log(error)
    res.status(500).json({
      mensage:mensage. error
    })

  }
}