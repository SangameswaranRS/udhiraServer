var mysql=require('mysql');
var connection;
var db_config={
    host: 'udhiradb.cezsupcrr5y8.us-west-2.rds.amazonaws.com',
    user: 'confidential',
    password :'confidential',
    database : 'udhira',
    port : 3306
};
function handleDisconnect() {
    connection = mysql.createConnection(db_config);
    connection.connect(function(err) {
        if(err) {
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000);
        }  else {
            console.log('Connected to database - Udhira');
        }
    });

    connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect();
        } else {
            throw err;
        }
    });
}

handleDisconnect();
module.exports=connection;