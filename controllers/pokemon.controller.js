require('dotenv').config()
const express = require('express');
const {DataTypes, Sequelize} = require('sequelize');
const router = express.Router();
const db = require('../models/index');
const jwt = require('jsonwebtoken')

const pokemons = [{
    "id": 1,
    "img": "./images/bulbasaur.png",
    "name": "Bulbasaur",
    "weight": 6.9,
    "height": 0.7,
    "moves": ["Chlorophyl", "Overgrow"],
    "description": "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
    "type": [
        "Grass",
        "Poison"
    ],
    "base": {
        "HP": 39,
        "Attack": 52,
        "Defense": 43,
        "Spa": 60,
        "Spd": 50,
        "Speed": 65
    }
},
    {
        "id": 2,
        "img": "./images/charmander.png",
        "name": "Charmander",
        "weight": 8.5,
        "height": 0.6,
        "moves": ["Mega-Punch", "Fire-Punch"],
        "description": "It has a preference for hot things. When it rains, steam is sold to spout from the tip of its tail.",
        "type": [
            "Fire"
        ],
        "base": {
            "HP": 45,
            "Attack": 49,
            "Defense": 49,
            "Spa": 65,
            "Spd": 65,
            "Speed": 45
        }
    }]

router.get('/getPokemons', (req,res)=>{
    res.status(200).send(pokemons)
})

module.exports = router