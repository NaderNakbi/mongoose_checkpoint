const Person=require('../models/userModel')
// @desc create a new Person
exports.createPerson=(req,res)=>{
    const newPerson=new Person(req.body)
    newPerson.save()
             .then((data)=>res.json(data))
             .catch((err)=>res.status(500).json(err))
}

// @desc create many Person  
  exports.createPeople = (arrayOfPeople, done)=> {
    var arrayOfPeople = [
        {name: "Frankie65d", age: 74,email:"frankie11d@gmail.com",password:"12u3555", favoriteFoods: ["Del Taco"]},
        {name: "Sol58d", age: 76, email:"sold@gmail.com",password:"1yd23555d",favoriteFoods: ["roast chicken"]},
        {name: "Robertd47", age: 78,email:"robertd@gmail.com",password:"1dt235t55", favoriteFoods: ["wine"]}
      ];
    Person.create(arrayOfPeople, (err, people) =>{
      if (err) return console.log(err);
      done(null, people);
    });
  };
 // @desc get all Person
 exports.getPerson=(req,res)=>{
  Person.find()
        .then((data)=>res.json(data))
        .catch((err)=>res.status(500).json(err))
 } 
// @desc get person by argument food
exports.getPersonByFavoriteFood=(req,res)=>{
  Person.findOne({favoriteFoods:req.params.Food})
        .then((data)=>res.json(data))
        .catch((err)=>res.status(500).json(err))
}
// @desc get person by id
exports.getPersonById=(req,res)=>{
  
  Person.findById({_id:req.params.Id})
        .then((data)=>res.json(data))
        .catch((err)=>res.status(500).json(err))
}

// @desc update person by id
exports.updatePersonById=(req,res)=>{
  
  Person.findByIdAndUpdate(req.params.Id,req.body,{new:true})
        .then((data)=>res.json(data))
        .catch((err)=>res.status(500).json(err))
}
// @desc delete person by id
exports.deletePersonById=(req,res)=>{
  
  Person.findByIdAndDelete(req.params.Id)
        .then((data)=>res.json(data))
        .catch((err)=>res.status(500).json(err))
}
// @desc delete all person by id
exports.deleteAllPerson=(req,res)=>{
  
  Person.deleteMany()
        .then((data)=>res.json(data))
        .catch((err)=>res.status(500).json(err))
}

/// @desc search person 'Chain Search Query Helpers to Narrow Search Results'

exports.ChainSearchPerson=(req,res)=>{
  Person.find({favoriteFoods:req.params.Food})
        .sort({name:1})
        .limit(2)
        .select({age:0})
        .exec((err,data)=>{
              if(err) console.log(err);
              res.json( data);
            })
}
