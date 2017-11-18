(function () {
    var connection=require('./connection');
    module.exports.fetchData=function (callBack) {
        connection.query("select * from bloodGroup",function (err,data) {
            callBack(err,data);
        });
    }
})();