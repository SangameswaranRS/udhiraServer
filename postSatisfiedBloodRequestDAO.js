(function () {
    var connection=require("./connection");
    module.exports.updateSatisfiedStatus=function (status,requestId,callback) {
        connection.query("update bloodrequest set isSatisfied = ? where requestId = ?",[status,requestId],function (err,data) {
            callback(err,data);
        })
    }
})();