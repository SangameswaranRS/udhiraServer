(function () {
    var connection=require('./connection');
    module.exports.validateEmailId=function (userEmailId,callBack) {
      connection.query("select * from userInfo where userEmailId=?",userEmailId,function (err,data) {
          callBack(err,data);
      })  ;
    }
    module.exports.pushIntoDB=function (jsonRequest,callBack) {
        connection.query("insert into donorInfo set ?",jsonRequest,function (err,data) {
           callBack(err,data);
        });
    }
})();