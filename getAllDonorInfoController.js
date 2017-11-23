(function () {
    var admin=require('firebase-admin');
    var bodyParser=require('body-parser');
    var getAllDonorInfoDAO=require('./getAllDonorInfoDAO');
    var userName,password;
    module.exports.donorInfo=function (req,res) {
        userName=req.body.userName;
        password=req.body.password;
        var db=admin.database();
        var reference=db.ref("/Admins/"+userName);
        reference.once("value",function (snapshot) {
           console.log(snapshot.val());
           var adminJson=snapshot.val();
           if(adminJson !==null){
               if(password === adminJson.password){
                   console.log("passwords match");
                   if(adminJson.isSuperAdmin==='1'){
                       console.log("User is a super admin");
                       getAllDonorInfoDAO.getDonorInfoFromTable(function (err,data) {
                          if(err){
                              var failureJson4={
                                  statusCode : 500,
                                  message : err.message
                              };
                              res.status(500).send(failureJson4);
                          } else {
                              var successResponse={
                                  statusCode : 200,
                                  message : data
                              };
                              res.send(successResponse);
                          }
                       });
                   }else
                   {
                       console.log("user is not a super admin");
                       var failureJson3={
                           statusCode : 500,
                           message : "User is not a super Admin"
                       };
                       res.status(500).send(failureJson3);
                   }
               }else{
                   console.log("passwords do not match");
                   var failureJson2={
                       statusCode : 500,
                       message : "Wrong Password"
                   };
                   res.status(500).send(failureJson2);
               }
           }else{
               var failureJson1={
                   statusCode : 500,
                   message : "Such user does not exist"
               }
               res.status(500).send(failureJson1);
           }
        });
    }
})();