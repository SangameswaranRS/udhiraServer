(function () {
    var connection=require('./connection');
    module.exports.fetchData=function (callBack) {
        connection.query("select * from bloodgroup",function (err,data) {
            callBack(err,data);
        });
    }
})();