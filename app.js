require('dotenv').config()
const express = require('express');
const cors = require('cors')
const port = 8080
const app = express();
const pokemons = require('./controllers/pokemon.controller')
const login = require('./controllers/login.controller');
const {verifyToken} = require('./middlewares/tokenValidation');

app.use(cors())
app.use(express.json())


app.use('/auth',login)

app.use('/pokedex',verifyToken,pokemons)


app.listen(port, () => {
    console.log(`Services are running in port ${port}...`)
})