const express = require('express')
const router = express.Router()
const Ninja = require('../models/ninja')


// Get a list of ninjas present in the database
router.get('/ninjas', (req,res,next)=>{
    Ninja.geoNear({
        type : 'Point',
        coordinates : [parseFloat(req.query.lng),parseFloat(req.query.lat)]
    },
    {
        maxDistance : 100000,
        spherical : true
    }).then((ninjas)=>{
        res.send(ninjas)
    })
})


// Add a ninja to the database
router.post('/ninjas', (req,res,next)=>{
    Ninja.create(req.body).then((ninja)=>{
        res.send(ninja)
    }).catch(next)
})


// Update a ninja in the database
router.put('/ninjas/:id',(req,res,next)=>{
    Ninja.findByIdAndUpdate({
        _id : req.params.id
    }).then(()=>{
        Ninja.findOne({
            _id : req.params.id
        }).then((ninja)=>{
            res.send(ninja)
        })
    })
})


// Delete a ninja from the database
router.delete('/ninjas/:id',(req,res,next)=>{
    Ninja.findByIdAndRemove({
        _id : req.params.id
    }).then((ninja)=>{
        res.send(ninja)
    }).catch(next)
})

module.exports = router;