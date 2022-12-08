const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



async function generatePass(){
    const salt = await bcrypt.genSalt(10)
    const pass = await bcrypt.hash('testing123',salt)
    return pass
}

const users = [{
    userName: 'testing',
    password: generatePass

}]

router.post('/login', async(req,res)=>{
    console.log('ingreso')
    console.log(req.body)
    const userPass = await generatePass()
    try {
        const user = req.body.userName
        const pass = req.body.pass
        console.log(user,pass)
        const validPass = await bcrypt.compare(pass, await users[0].password())
        console.log(validPass)
        res.status(200).send()
    } catch (error) {
        res.status(500).send({message:error.message})
    }
})




module.exports = router