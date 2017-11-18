(function () {
    var connection=require('./connection');
    module.exports.getUserRecord=function (userEmailId,callBack) {
        connection.query("select * from userInfo where userEmailId=?",userEmailId,function (err,data) {
           callBack(err,data);
        });
    }
    module.exports.updateIMEI=function (imei,userEmailId,callBack) {
        connection.query("update userInfo set imeiIndex=? where userEmailId=?",[imei,userEmailId],function (err,data) {
            callBack(err,data);
        })

    }
})();