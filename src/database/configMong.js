const mongoose = require('mongoose')

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser: true,
      useUnifiedTopology : true
    })
    console.log('Por aqui tudo ok ')
  }catch(error) {
    console.log(error)
  }


}

module.exports ={
  connect
}