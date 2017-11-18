(function () {
    var connection=require('./connection');
    module.exports.enterDataIntoDB=function (jsonBody,callBack) {
        console.log(jsonBody);
        connection.query("insert into userinfo set ?",jsonBody,function (err,data) {
            callBack(err,data);
        })
    }
})();