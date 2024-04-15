const userModel = require('../models/userModel')
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.signUp = async (req,res)=>{

    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

    const userObj = {
        name : req.body.name,
        email : req.body.email,
        password : bcryptjs.hashSync(req.body.password,12)
    }

    try {
        const userCreated = await userModel.create(userObj)

        const token = jwt.sign({id : userCreated._id},'secret message',{expiresIn : '1d'})

        res.status(201).send({
            message : "user created successfully",
            user : userCreated,
            accessToken : token
        })

    } catch (error) {
        console.log("Error while creating user : ",error)
        res.status(500).send({
            message : "some error occured while creating user"
        })
    }
}

exports.signIn = async (req,res)=>{
    //find user by email id
    const user = await userModel.findOne({email : req.body.email})

    if(!user){
        return res.status(400).send({
            message : "user not found!"
        })
    }

    //check password 
    const isPasswordValid = bcryptjs.compareSync(req.body.password,user.password)

    if(!isPasswordValid){
        return res.status(401).send({
            message : "password is not correct"
        })
    }

    //asisgn token
    const token = jwt.sign({id : user._id},'secret message',{expiresIn : '1d'})

    res.status(200).send({
        name : user.name,
        email : user.email,
        accessToken : token
    })


}