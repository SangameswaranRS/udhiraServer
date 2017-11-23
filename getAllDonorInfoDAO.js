(function () {
    var connection=require('./connection');
    module.exports.getDonorInfoFromTable=function (callBack) {
        connection.query("select * from donorinfo",function (err,data) {
            callBack(err,data);
        })
    }
})();