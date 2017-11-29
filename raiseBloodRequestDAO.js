(function () {
    var connection=require('./connection');
    module.exports.validateFlag=function (userEmailId,callBack) {
        connection.query("select canRaiseRequestFlag from userinfo where userEmailId= ?",userEmailId,function (err,data) {
           callBack(err,data);
        });
    }
    module.exports.enterBloodRequest=function (jsonEntity,callBack) {
        connection.query("insert into bloodrequest set ? ",jsonEntity,function (err,data) {
           callBack(err,data);
        });
    }
})();