const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninjas');
// get all ningas
router.get('/ninjas',function(req,res,next){
    
    Ninja.find({}).then(function(ninjas){
        res.send(ninjas);
    }).catch(next);
    // Ninja.geoNear(
    //     {
    //         type:'Point',
    //         coordinates:[parseFloat(req.query.lng),parseFloat(req.query.lat)]
    //     },
    //     {
    //         maxDistance:10000,
    //         spherical : true
    //     }
    // ).then(function(ninjas){
    //         res.send(ninjas);
    // }).catch(next);
    
});

// add new ningas to db
router.post('/ninjas',function(req,res,next){
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next)
});

//update new ningas to db
router.put('/ninjas/:id',function(req,res,next){
    Ninja.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        })
    }).catch(next);
});

// delete ningas from db
router.delete('/ninjas/:id',function(req,res,next){
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    }).catch(next)
});

// exports route modules
module.exports =  router;
