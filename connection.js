var mysql=require('mysql');
var connection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password :'',
    database : 'udhira',
    port : 3306
});
connection.connect(function (err,data) {
    if (err){
        console.log("Error connecting to database");
    }
    else{
        console.log('connected to database- Udira');
    }

});
module.exports=connection;