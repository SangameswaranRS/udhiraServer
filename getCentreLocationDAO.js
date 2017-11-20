(function () {
    var connection=require('./connection');
    module.exports.getAllCentres=function (callBack) {
        connection.query("select * from blooddonationcentres",function (err,data) {
            callBack(err,data);
        });
    }

})();