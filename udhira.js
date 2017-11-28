var express=require('express');
var app=express();
var logger = require('morgan');
var admin = require("firebase-admin");
var serviceAccount = require("./nccarmy-3d81c-firebase-adminsdk-sxmpo-e3ff39bf0c.json");
var connection=require('./connection');
var bodyParser=require('body-parser');
app.use(function (req,res,next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,\ ' +
        'Authorization');
    next();
});
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
var routes=require('./homeRoutes')(app);
app.listen(5959);
console.log('listening to requests at port 5959');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://nccarmy-3d81c.firebaseio.com"
});
module.exports=app;

