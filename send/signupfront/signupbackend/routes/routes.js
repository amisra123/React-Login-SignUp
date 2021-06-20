
const express=require("express")
const router=express.Router()
const bcrypt=require("bcrypt")

const signUpTemplateCopy=require("../models/SignUpModels")


router.post("/signup", async (req,res) => {

    const saltPassword= await bcrypt.genSalt(10)
    const securePassword= await bcrypt.hash(req.body.password,saltPassword)

    const signedUpUser=new signUpTemplateCopy({
        fullName:req.body.fullName,
        userName:req.body.userName,
        email:req.body.email,
        password:securePassword
    })
    
    signedUpUser.save()
    .then( data => {
        res.json(data)
    })
    .catch( error => {
        res.json(error)
    })
})

module.exports=router