(function () {
    var bodyParser=require('body-parser');
    var raiseBloodRequestDAO=require('./raiseBloodRequestDAO');
    module.exports.onRequestSubmitted=function (req,res) {
        var postParams={
          bloodId :req.body.bloodId,
            patientName : req.body.patientName,
            age : req.body.age,
            hospital : req.body.hospital,
            reason : req.body.reason,
            contactNumber : req.body.contactNumber,
            emergencyStatus : req.body.emergencyStatus
        };
        raiseBloodRequestDAO.enterBloodRequest(postParams,function (err,data) {
           if(err){
               var failureJson={
                   statusCode : 356,
                   message : err.message
               }
               res.status(356).send(failureJson);
           } else {
               var successJson={
                   statusCode :200,
                   message : "Request Updated successfully"
               }
               res.send(successJson);
           }
        });
    }
})();