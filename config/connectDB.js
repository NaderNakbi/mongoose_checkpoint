
const mongoose=require("mongoose")
// dotenv config
const dotenv=require('dotenv')
dotenv.config()
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('database connected123 '))
.catch((err)=>console.log(err))