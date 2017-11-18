(function () {
    var express=require('express');
    var app=express();
    var bodyParser=require('body-parser');
    var registrationController=require('./registrationController');
    var loginController=require('./loginController');
    var Router=express.Router();
    Router.post('/register',function (req,res) {
        registrationController.registerUser(req,res);
    });
    Router.post('/login',function (req,res) {
        loginController.onLoginInfoSubmit(req,res);
    });
    module.exports=Router;
})();