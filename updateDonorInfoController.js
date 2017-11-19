(function () {
    var updateDonorInfoDAO=require('./updateDonorInfoDAO');
    var bodyParser=require('body-parser');
    module.exports.updateDonorInfo=function (req,res) {
        var requestJson={
          userEmailId : req.body.userEmailId,
            bloodGroupId : req.body.bloodGroupId,
            address : req.body.address,
            dateOfBirth : req.body.dateOfBirth,
            donorWeight : req.body.donorWeight,
            gender : req.body.gender,
            donationComments : req.body.donationComments,
            donorEmailId : req.body.donorEmailId,
            donorContactNumber : req.body.donorContactNumber
        };
        var userEmail=req.body.userEmailId;
        updateDonorInfoDAO.validateEmailId(userEmail,function (err,data) {
           if(err){
               var failureJson={
                   statusCode : 345,
                   message : err.message
               }
               res.status(345).send(failureJson);
           }else {
               console.log(data);
               if(!data[0]){
                   var failureJson={
                       statusCode : 346,
                       message : "Register First to register other donors"
                   }
                   res.status(346).send(failureJson);
               }else {
                   updateDonorInfoDAO.pushIntoDB(requestJson,function (err,data) {
                      if(err){
                          var failureJson={
                              statusCode : 345,
                              message : err.message
                          }
                          res.status(345).send(failureJson);
                      }else {
                          var successJson={
                              statusCode : 200,
                              message : "Donor Info updated successfully"
                          }
                          res.send(successJson);
                      }
                   });
               }
           }
        });
    }
})();