const { application } = require('express');
const express = require('express');
const router = express.Router();

const Application = require('../models/applications');


//retrieving applications format: app.METHOD(PATH, HANDLER)
router.get('/applications', (req, res, next)=>{
    Application.find(function(err, applications){
        res.json(applications);
    })
});


//add applications format: app.METHOD(PATH, HANDLER)
router.post('/application',(req, res, next)=>{
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


//add applications format: app.METHOD(PATH, HANDLER)
router.delete('/application/:id', (req, res, next)=>{
    Application.deleteOne({_id: req.params.id}, function(err, result){//earlier it was Application.remove
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
});

//Update applications format: app.METHOD(PATH, HANDLER)

    router.put('/application/:id', (req, res, next)=>{
        Application.updateOne({_id: req.params.id}, req.body, function(err, result){//earlier it was Application.remove
            if(err){
                res.json(err);
            }
            else{
                res.json(result);
            }
        })
    });
//retrieving singleapplications format: app.METHOD(PATH, HANDLER)
router.get('/applications/:id', (req, res, next)=>{
    Application.findOne({_id: req.params.id},function(err, applications){
        res.json(applications);
    })
});


module.exports = router;


