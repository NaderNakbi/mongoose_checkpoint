const express=require("express")
const { createPerson, createPeople, getPerson, getPersonByFavoriteFood, getPersonById, updatePersonById, deletePersonById,  deleteAllPerson, ChainSearchPerson } = require("../controllers/userControllers")
const router=express.Router()


router.post('/',createPerson)
router.post('/people',createPeople)
router.get('/find',getPerson)
router.get('/:Food',getPersonByFavoriteFood)
router.get('/getPersonById/:Id',getPersonById)
router.put('/updatePersonById/:Id',updatePersonById)
router.delete('/deletePersonById/:Id',deletePersonById)
router.delete('/deleteAllPeson',deleteAllPerson)
router.get('/search/:Food',ChainSearchPerson)
module.exports=router