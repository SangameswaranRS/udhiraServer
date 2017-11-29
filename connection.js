var mysql=require('mysql');
var connection=mysql.createConnection({
    host: 'udhiradb.cezsupcrr5y8.us-west-2.rds.amazonaws.com',
    user: 'udhiraMaster',
    password :'sanga_1957',
    database : 'udhira',
    port : 3306
});
connection.connect(function (err,data) {
    if (err){
        console.log("Error connecting to database");
    }
    else{
        console.log('connected to database- Udhira');
    }

});
module.exports=connection;