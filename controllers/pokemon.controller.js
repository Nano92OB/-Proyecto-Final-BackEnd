require('dotenv').config()
const express = require('express');
const {DataTypes, Sequelize} = require('sequelize');
const router = express.Router();
const db = require('../models/index');
const jwt = require('jsonwebtoken');





router.get('/getPokemons', async(req,res)=>{
    const pok = db.Pokemon
    const token = req.header('Authentication')
    if(!token){
        await pok.findAll()
        .then(data=>{
            res.send(data)
        }).catch(error=>{
            res.status(500).send({message:error.message})
        })
    }else{
        await pok.findAll({
            where : {userId:jwt.verify(token, process.env.TOKEN_SECRET)}
        })
        .then(data=>{
            res.send(data)
        }).catch(error=>
            res.status(500).send({message:error.message})
        )}
        
})





module.exports = router