// var mongoose = require('mongoose');
const { application } = require("express");
const express = require("express");
const applications = require("../models/applications");
const router = express.Router();

var Application = require("../models/applications");
var SchoolDetail = require("../models/schooldetail");
// const schooldetail = require("../models/applications");



// retrieve school detail by ZIP Code

// router.get('/schooldetail', (req, res, next) => {
//   SchoolDetail.find(function (err, schooldetail) {
//   res.json(schooldetail);
//   })
// });

router.get('/schooldetail/:zip', (req, res, next)=>{
  SchoolDetail.find({zip: req.params.zip}, function(err, result){//earlier it was Application.remove
      if(err){
          res.json(err);
      }
      else{
          res.json(result);
      }
  })
});


//retrieving applications format: app.METHOD(PATH, HANDLER)

router.get('/applications', (req, res, next)=>{
  Application.find(function(err, applications){
      res.json(applications);
  })
});

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
  Application.findByIdAndUpdate({_id: req.params.id}, req.body, function(err, result){//earlier it was Application.remove
   
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



// router.get('/applications', function(req, res) {
//   var db = req.db;
//   var collection = db.get('schooldetail');
//   collection.find({},{},function(e,docs){
//     res.json(docs);
//   });
// });



// router.get("/", function(req, res) {
//     Application.find({}, function(err, applications) {
//          if(err) {
//               console.log(err);
//          } else {
//               SchoolDetail.find({}, function(err, schooldetail) {
//                    if(err) {
//                         console.log(err)
//                    } else {
//                         res.render("page", {applications: applications, schooldetail: schooldetail});
//                    }  
//               }); 
//          }
//     });
// });

module.exports = router;
