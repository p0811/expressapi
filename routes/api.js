const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninjas');
// get all ningas
router.get('/ninjas',function(req,res){
    res.send({type:"GET"});
});

// add new ningas to db
router.post('/ninjas',function(req,res){
    console.log(req.body);
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    })
});

//update new ningas to db
router.put('/ninjas/:id',function(req,res){
    res.send({type:"PUT"});
});

// delete ningas from db
router.delete('/ninjas/:id',function(req,res){
    res.send({type:"DELETE"});
});

// exports route modules
module.exports =  router;
