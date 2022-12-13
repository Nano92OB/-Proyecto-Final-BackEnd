require('dotenv').config()
const express = require('express');
const {DataTypes, Sequelize} = require('sequelize');
const router = express.Router();
const db = require('../models/index');
const jwt = require('jsonwebtoken');

router.post('/addNew', async (req, res)=>{
    const pok = db.Pokemon
    const token = req.header('Authentication')
    const newPokemon = req.body 
    pok.create(newPokemon)
    .then(data => res.status(200).send({message: 'pokemon added succesfully'}))
    .catch(err=>res.status(500).send({message:err.message}))
})