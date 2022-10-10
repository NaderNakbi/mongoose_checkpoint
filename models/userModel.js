const mongoose=require("mongoose")

const PersonSchema=mongoose.Schema({
name:{
type:String,
minLength:3,
maxLength:20,
default:"noName"
},
age:{
    type:Number,
    min:5,
    max:120,
    default:undefined
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
    unique:true,
    default:"123456"
},
favoriteFoods:{
    type:[String],
    default:["nothing"]
}
})
module.exports=mongoose.model("Person",PersonSchema)