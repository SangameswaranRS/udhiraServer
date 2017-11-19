(function () {
    var connection=require('./connection');
    module.exports.getData=function (callBack) {
        connection.query("select * from bloodrequest",function (err,data) {
            callBack(err,data);
        });
    }
})();