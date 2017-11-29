(function () {
    var connection=require('./connection');
    module.exports.getUserRecord=function (userEmailId,callBack) {
        connection.query("select * from userinfo where userEmailId=?",userEmailId,function (err,data) {
           callBack(err,data);
        });
    }
    module.exports.updateIMEI=function (imei,userEmailId,callBack) {
        connection.query("update userinfo set imeiIndex=? where userEmailId=?",[imei,userEmailId],function (err,data) {
            callBack(err,data);
        })

    }
})();