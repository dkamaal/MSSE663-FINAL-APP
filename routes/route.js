const express = require('express');
const router = express.Router();

const Application = require('../models/applications');


//retrieving applications
router.get('/applications', (req, res, next)=>{
    Application.find(function(err, applications){
        res.json(applications);
    })
});


//add applications
router.post('/applications', (req, res, next)=>{
    let newApplication = new Application({
        school_name: req.body.school_name,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        email: req.body.email
    });
    newApplication.save((err, application)=>{
        if(err){
            res.json({msg: 'Unable to Create Application'});
        }
        else{
            res.json({msg: 'Application Submitted Successfully'});
        }
    })  //callback
});


//add applications
router.delete('/applications/:id', (req, res, next)=>{
    Application.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
});

module.exports = router;


