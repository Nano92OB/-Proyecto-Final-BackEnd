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
        await pok.findAll({
            where: {
                creatorId: null
            }
        })
        .then(data=>{
            res.send(data)
        }).catch(error=>{
            res.status(500).send({message:error.message})
        })
    }else{
        console.log(jwt.verify(token, process.env.TOKEN_SECRET).id)
        await pok.findAll({
            where: {creatorId: jwt.verify(token, process.env.TOKEN_SECRET).id}
        })
        .then(data=>{
            res.send(data)
        }).catch(error=>
            res.status(500).send({message:error.message})
    )}
})





module.exports = router