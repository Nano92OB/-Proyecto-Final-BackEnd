const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models/index')

router.post('/login', async(req,res)=>{
    const Users = db.Users
    const userLogged = req.body
    Users.findAll({
                where:{
                    username: userLogged.username
                }
            }
    )
    .then(async data =>  {
       if(data){
            const user = data[0].dataValues
            const validPassword = await bcrypt.compare(userLogged.password, user.password)
            if (!validPassword) {
               res.status(401).send({message: 'Data is not valid'})
            } else {
               const token = jwt.sign({
                   username: user.username,
                   id: user.id
               }, process.env.TOKEN_SECRET, {expiresIn: '10000s'})
               res.send({message: 'Successfully Logged In', token})
           }  
        }
    })
    .catch(err=>{res.status(500).send({message: err.message})})
})

module.exports = router