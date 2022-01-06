const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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

exports.privateRouter = async(req, res, next) => {
 const authHeader = req.get("authorization")

  if(!authHeader) return res.status(401).json({message:"Não altorizadao "})
 
  const token = authHeader.split(" ")[1]
   try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    
    if(req.params.id === decoded.id || decoded.roles === "admin") return next()

    throw {message:"Permissão negada "}
   }catch(error){
    return res.status(403).json({message: error.message})
   }
  
  
}