(function () {
    var registerDAO=require('./registerDAO');
    var bodyParser=require('body-parser');
    module.exports.registerUser=function (req,res) {
    var jsonBody={
        userEmailId : req.body.userEmailId,
        userName : req.body.userName,
        contactNumber : req.body.contactNumber,
        bloodGroup : req.body.bloodGroup,
        imeiIndex : req.body.imeiIndex,
        password : req.body.password,
        loginFlag : req.body.loginFlag,
        canRaiseRequestFlag : req.body.canRaiseRequestFlag
    };
    registerDAO.enterDataIntoDB(jsonBody,function (err,data) {
       if(err){
          var errorResponse={
              statusCode : 500,
              message : err.message
          };
           res.status(500).send(errorResponse);
           console.log(err);
       }else{
           var successResponse={
               statusCode : 200,
               message : "Successfully Inserted"
           };
           res.send(successResponse);
       }
    });
    }
})();