(function () {
    var bodyParser=require('body-parser');
    var requestId,status;
    var postSatisfiedBloodRequest=require('./postSatisfiedBloodRequestDAO');
    module.exports.updateSatisStatus=function (req,res) {
      requestId = req.body.requestId;
      status = req.body.status;
        postSatisfiedBloodRequest.updateSatisfiedStatus(status,requestId,function (err,data) {
           if(err){
               var failJson={
                   statusCode :555,
                   message : err.message
               }
               res.status(555).send(failJson);
           } else{
               var successJson={
                   statusCode : 200,
                   message : "Status Updated Successfully"
               }
               res.send(successJson);
           }
        });
    }
})();