(function () {
    var connection=require('./connection');
    module.exports.enterBloodRequest=function (jsonEntity,callBack) {
        connection.query("insert into bloodrequest set ? ",jsonEntity,function (err,data) {
           callBack(err,data);
        });
    }
})();