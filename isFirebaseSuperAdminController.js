(function () {
    var bodyParser=require('body-parser');
    var admin = require("firebase-admin");
    module.exports.initAndCheckFirebase=function (req,res) {
        var userName = req.body.userName;
        var  password = req.body.password;
        var db=admin.database();
        var ref=db.ref("/Admins/"+userName);
        ref.once("value",function (snapshot) {
            console.log(snapshot.val());
            var json=snapshot.val();
            if(json !== null){
            if(json.password === password){
                console.log("passwords match");
                if(json.isSuperAdmin === '1'){
                    var successJson={
                        statusCode : 200,
                        message : "super admin - access granted"
                    }
                    res.send(successJson);
                }else
                {
                    var fail={
                        statusCode : 202,
                        message : "not a super Admin"
                    }
                    res.status(202).send(fail);
                }
            }else
            {
                var failureJson={
                    statusCode : 500,
                    message : "Wrong Password entered"
                };
                res.status(500).send(failureJson);
            }
            }else{
                var failureJson1={
                    statusCode : 402,
                    message : "username does not exist in admin database"
                }
                res.status(402).send(failureJson1);
            }
        },function (errorObject) {
           console.log(errorObject);
        });
    };
})();