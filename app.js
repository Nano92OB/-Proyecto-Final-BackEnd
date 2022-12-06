require('dotenv').config()
const express = require('express');
const cors = require('cors')
const port = 8080
const app = express();
const pokemons = require('./controllers/pokemon.controller')

app.use(cors())
app.use(express.json())



app.use('/pokedex', pokemons)


app.listen(port, () => {
    console.log(`Services are running in port ${port}...`)
})