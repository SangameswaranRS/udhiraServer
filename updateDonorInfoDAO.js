(function () {
    var connection=require('./connection');
    module.exports.validateEmailId=function (userEmailId,callBack) {
      connection.query("select * from userinfo where userEmailId=?",userEmailId,function (err,data) {
          callBack(err,data);
      })  ;
    }
    module.exports.pushIntoDB=function (jsonRequest,callBack) {
        connection.query("insert into donorinfo set ?",jsonRequest,function (err,data) {
           callBack(err,data);
        });
    }
})();