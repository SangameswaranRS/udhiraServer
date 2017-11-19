(function () {
    var express=require('express');
    var app=express();
    var bodyParser=require('body-parser');
    var registrationController=require('./registrationController');
    var loginController=require('./loginController');
    var getAllBloodGroupController=require('./getAllBloodGroupController');
    var updateDonorInfoController=require('./updateDonorInfoController');
    var raiseBloodRequestController=require('./raiseBloodRequestController');
    var getAllBloodRequestController=require('./getAllBloodRequestController');
    var postSatisfiedBloodRequestController=require('./postSatisfiedBloodRequestController');
    var Router=express.Router();
    Router.post('/register',function (req,res) {
        registrationController.registerUser(req,res);
    });
    Router.post('/login',function (req,res) {
        loginController.onLoginInfoSubmit(req,res);
    });
    Router.get('/getAllBloodGroups',function (req,res) {
        getAllBloodGroupController.fetchAllBloodGroups(req,res);
    });
    Router.post('/updateDonorInfo',function (req,res) {
        updateDonorInfoController.updateDonorInfo(req,res);
    });
    Router.post('/raiseBloodRequest',function (req,res) {
        raiseBloodRequestController.onRequestSubmitted(req,res);
    });
    Router.get('/getAllBloodRequests',function (req,res) {
        getAllBloodRequestController.getAllBloodRequests(req,res);
    });
    Router.post('/postSatisfiedBloodRequest',function (req,res) {
        postSatisfiedBloodRequestController.updateSatisStatus(req,res);
    });
    module.exports=Router;
})();