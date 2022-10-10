const express=require('express')
const app=express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
//database config
require('./config/connectDB')
//routes
const userRoutes=require('./routes/userRoutes')
app.use('/api/v1/users',userRoutes)
app.listen(3000,()=>console.log('server is runing on port 3000'))