require('dotenv').config()
const express = require('express');
const {DataTypes, Sequelize} = require('sequelize');
const router = express.Router();
const db = require('../models/index');
const jwt = require('jsonwebtoken')

const pokemons = [
    {
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
    },
    {
        "id": 3,
        "img": "./images/squirtle.png",
        "name": "Squirtle",
        "weight": 9,
        "height": 0.5,
        "moves": ["Torrent", "Rain-Dish"],
        "description": "When it retracts is long neck into its sell, it squirts out water with virorous force.",
        "type": [
            "Water"
        ],
        "base": {
            "HP": 44,
            "Attack": 48,
            "Defense": 65,
            "Spa": 50,
            "Spd": 64,
            "Speed": 43
        }
    },
    {
        "id": 4,
        "img": "./images/butterfree.png",
        "name": "Butterfree",
        "weight": 32.0,
        "height": 1.1,
        "moves": ["Compound-Eyes", "Tinted-Lens"],
        "description": "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
        "type": [
            "Bug",
            "Flying"
        ],
        "base": {
            "HP": 60,
            "Attack": 45,
            "Defense": 50,
            "Spa": 90,
            "Spd": 80,
            "Speed": 70
        }
    },
    {
        "id": 5,
        "img": "././images/pikachu.png",
        "name": "Pikachu",
        "weight": 6.0,
        "height": 0.4,
        "moves": ["Mega-Punch", "Pay-Day"],
        "description": "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
        "type": [
            "Electric"
        ],
        "base": {
            "HP": 35,
            "Attack": 55,
            "Defense": 40,
            "Spa": 50,
            "Spd": 50,
            "Speed": 90
        }
    },
    {
        "id": 6,
        "img": "././images/gastly.png",
        "name": "Gastly",
        "weight": 0.1,
        "height": 1.3,
        "moves": ["Levitate"],
        "description": "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.",
        "type": [
            "Ghost",
            "Poison"
        ],
        "base": {
            "HP": 30,
            "Attack": 35,
            "Defense": 30,
            "Spa": 100,
            "Spd": 35,
            "Speed": 80
        }
    },
    {
        "id": 7,
        "img": "././images/ditto.png",
        "name": "Ditto",
        "weight": 4.0,
        "height": 0.3,
        "moves": ["Limber", "Imposter"],
        "description": "It can reconstitute its entire cellular structure to change into what it seed, but it returns to normal when it relaxes.",
        "type": [
            "Normal"
        ],
        "base": {
            "HP": 48,
            "Attack": 48,
            "Defense": 48,
            "Spa": 48,
            "Spd": 48,
            "Speed": 48
        }
    },
    {
        "id": 8,
        "img": "././images/mew.png",
        "name": "Mew",
        "weight": 4.0,
        "height": 0.4,
        "moves": ["Synchronize"],
        "description": "When viewed from a microscope, this Pokémon's short, fine, delicate hair can be seen.",
        "type": [
            "Psychic"
        ],
        "base": {
            "HP": 100,
            "Attack": 100,
            "Defense": 100,
            "Spa": 100,
            "Spd": 100,
            "Speed": 100
        }
    },
    {
        "id": 9,
        "img": "././images/aron.png",
        "name": "Aron",
        "weight": 60.0,
        "height": 0.4,
        "moves": ["Sturdy", "Rock-Head"],
        "description": "It eats iron ore - and sometimes railroad tracks - to build up the steel armor that protects its body.",
        "type": [
            "Steel",
            "Rock"
        ],
        "base": {
            "HP": 50,
            "Attack": 70,
            "Defense": 100,
            "Spa": 40,
            "Spd": 40,
            "Speed": 30
        }
    }
]

router.get('/getPokemons', (req,res)=>{
    res.status(200).send(pokemons)
})

module.exports = router