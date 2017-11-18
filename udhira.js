var express=require('express');
var app=express();
var connection=require('./connection');
var bodyParser=require('body-parser');
app.use(function (req,res,next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,\ ' +
        'Authorization');
    next();
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
var routes=require('./homeRoutes')(app);
app.listen(5959);
console.log('listening to requests at port 5959');
module.exports=app;

