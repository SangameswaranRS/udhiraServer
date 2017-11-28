(function () {
    var getAllBloodRequestDAO=require('./getAllBloodRequestDAO');
    var bodyParser=require('body-parser');
    var admin=require('firebase-admin');
    module.exports.getAllBloodRequests=function (req,res) {
        var userName = req.body.userName;
        var password = req.body.password;
        var db=admin.database();
        var ref=db.ref("/Admins/"+userName);
        ref.once("value",function (snapshot) {
           var adminJson=snapshot.val();
           if(adminJson!==null){
               if(password===adminJson.password){
                   if(adminJson.isSuperAdmin==='1'){
                       getAllBloodRequestDAO.getData(function (err,data) {
                            if(err){
                                var failureJson4={
                                    statusCode : 500,
                                    message : err.message
                                };
                                res.status(500).send(failureJson4);
                            }else {
                                var successJson= {
                                    statusCode: 200,
                                    message: data
                                };
                                res.send(successJson);
                            }

                       });
                   }else {
                       console.log("user passwords match but user is not a super admin");
                       var failureJson1={
                           statusCode : 500,
                           message: "User is not a super Admin"
                       };
                       res.status(500).send(failureJson1);
                   }

               }else {
                   var failureJson2={
                       statusCode : 500,
                       message : "Wrong Password entered"
                   };
                   res.status(500).send(failureJson2);
               }
           }else{
               var failureJson= {
                   statusCode: 500,
                   message : "Such username does not exist"
               }    ;
               res.status(500).send(failureJson);
           }

        });
    }
})();