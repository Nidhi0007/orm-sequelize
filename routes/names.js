const express = require ('express');
const router = express.Router();
const db= require('../config/database');
const Name = require('../models/Name')
router.get('/', (req, res)=> 
    Name.findAll()
.then(names => {
    console.log(names);
    res.sendStatus(200);
})
.catch(err=> console.log(err)));



module.exports=router;


//codegig=== letsapp
//gigs===names