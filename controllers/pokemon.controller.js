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
          userId: null,
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
        where: { userId: jwt.verify(token, process.env.TOKEN_SECRET).id},
      })
      .then((data) => {
        res.send(data);
      })
      .catch((error) => res.status(500).send({ message: error.message }));
  }
});

router.get("/getSpecific/:id", async (req, res) => {
  let id = req.params.id;
  let pok = db.Pokemon;
  await pok
    .findAll({
      where: {
        id: id,
      },
    })
    .then((data) => res.sendDate)
    .catch((err) => res.status(404).send({ message: 'Pokemon Not Found!' }));
});

module.exports = router;
