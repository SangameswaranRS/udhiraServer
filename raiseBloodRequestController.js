(function () {
    var bodyParser=require('body-parser');
    var raiseBloodRequestDAO=require('./raiseBloodRequestDAO');
    var userEmailId;
    module.exports.onRequestSubmitted=function (req,res) {
        var postParams={
          bloodId :req.body.bloodId,
            patientName : req.body.patientName,
            age : req.body.age,
            hospital : req.body.hospital,
            reason : req.body.reason,
            contactNumber : req.body.contactNumber,
            emergencyStatus : req.body.emergencyStatus,
            isSatisfied : req.body.isSatisfied
        };
        userEmailId=req.body.userEmailId;
        console.log(userEmailId);
        raiseBloodRequestDAO.validateFlag(userEmailId,function (err,data) {
           if(err){
               console.log(err);
               var failureJson={
                   statusCode : 345,
                   message : err.message
               };
               res.status(345).send(failureJson);
           } else {
               console.log("control here");
               console.log(data);
               if(data.length<=0){
                   var failureJson={
                       statusCode : 345,
                       message : "User not registered"
                   };
                   res.status(345).send(failureJson);
               }
               else {
                   console.log("enga eruken");
               if(data[0].canRaiseRequestFlag === 1){
                   console.log("user can raise request");
                   raiseBloodRequestDAO.enterBloodRequest(postParams,function (err,data) {
                       if(err){
                           var errJson={
                               statusCode : 333,
                               message : err.message
                           };
                           res.status(333).send(errJson);
                       }else{
                           var successJson={
                               statusCode : 200,
                               message : "request raised successfuly"
                           }
                           res.send(successJson);
                       }

                   })
               }else {
                   var failureJson = {
                       statusCode: 345,
                       message: "User not authenticated to raise requests"
                   };
                   res.status(345).send(failureJson);
               }
           }}
        });
    }
})();