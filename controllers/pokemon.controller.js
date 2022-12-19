require("dotenv").config();
const express = require("express");
const { DataTypes, Sequelize } = require("sequelize");
const router = express.Router();
const db = require("../models/index");
const jwt = require("jsonwebtoken");

router.get("/getPokemons", async (req, res) => {
  const pok = db.Pokemon;
  const token = req.header("Authentication");
  if (token == null) {
    await pok
      .findAll({
        where: {
          creatorId: null,
        },
      })
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send({ message: error.message });
      });
  } else {
    await pok
      .findAll({
        where: { creatorId: jwt.verify(token, process.env.TOKEN_SECRET).id },
      })
      .then((data) => {
        res.send(data);
      })
      .catch((error) => res.status(500).send({ message: error.message }));
  }
});

router.post("/addNew", async (req, res) => {
  const pok = db.Pokemon;
  const token = req.header("Authentication");
  const newPokemon = req.body;
  newPokemon.creatorId = parseInt(
    jwt.verify(token, process.env.TOKEN_SECRET).id
  );
  pok
    .create(newPokemon)
    .then((data) =>
      res.status(200).send({ message: "pokemon added succesfully" })
    )
    .catch((err) => res.status(500).send({ message: err.message }));
});

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let pok = db.pokemon;
  await pok
    .findAll({
      where: {
        id: id,
      },
    })
    .then((data) => res.sendDate)
    .catch((err) => res.status(500).send({ message: err.message }));
});

router.delete("/dltPokemon/:id", (req, res) => {
  const id = req.params.id
  let pok = db.Pokemon
  const token = req.header("Authentication");
  pok.destroy({
      where: {
        creatorId: parseInt(jwt.verify(token, process.env.TOKEN_SECRET).id),
        id: id
      },
    })
    .then((data) => res.send({message: "Pokemon deleted successfully!"}))
    .catch((err) => res.status(500).send({ message: err.message }));
});

module.exports = router;
