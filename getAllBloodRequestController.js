(function () {
    var getAllBloodRequestDAO=require('./getAllBloodRequestDAO');
    module.exports.getAllBloodRequests=function (req,res) {
        getAllBloodRequestDAO.getData(function (err,data) {
           if(err){
               var failureJson={
                   statusCode : 367,
                   message : err.message
               }
               res.status(367).send(failureJson);
           } else{
               var successJson={
                   statusCode : 200,
                   message : data
               }
               res.send(successJson);
           }
        });
    }
})();