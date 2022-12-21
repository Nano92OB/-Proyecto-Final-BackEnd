require("dotenv").config();
const express = require("express");
const {DataTypes, Sequelize} = require("sequelize");
const router = express.Router();
const db = require("../models/index");
const jwt = require("jsonwebtoken");
const defaultPoks = require('../data/defaultPokemons')

router.post("/addNew", async (req, res) => {
    const pok = db.Pokemon;
    const token = req.header("Authentication");
    const newPokemon = req.body;
    newPokemon.userId = parseInt(
        jwt.verify(token, process.env.TOKEN_SECRET).id
    );
    pok
        .create(newPokemon)
        .then((data) =>
            res.status(200).send({message: "pokemon added succesfully"})
        )
        .catch((err) => res.status(500).send({message: err.message}));
});

router.delete("/dltPokemon/:id", (req, res) => {
    const id = req.params.id
    let pok = db.Pokemon
    const token = req.header("Authentication");
    pok.destroy({
        where: {
            userId: parseInt(jwt.verify(token, process.env.TOKEN_SECRET).id),
            id: id
        },
    })
        .then((data) => res.send({message: "Pokemon deleted successfully!"}))
        .catch((err) => res.status(500).send({message: err.message}));
});

router.post("/defaultPoks", (req, res) => {
    const pok = db.Pokemon
    const token = req.header("Authentication");
    defaultPoks.forEach(poke => {
        poke.userId = parseInt(jwt.verify(token, process.env.TOKEN_SECRET).id)
        pok.create(poke)
    })
    res.status(200).send({message: 'Default Pokemons added succesfully!'});
})

module.exports = router