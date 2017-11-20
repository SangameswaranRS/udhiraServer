(function () {
    var getCentreLocationDAO=require('./getCentreLocationDAO');
    module.exports.getAllCentresController=function (req,res) {
        getCentreLocationDAO.getAllCentres(function (err,data) {
          if(err){
              var failureJson={
                  statusCode : 500,
                  message : err.message
              };
              res.status(500).send(failureJson);
          }
          else {
              var successJson={
                    statusCode : 200,
                    message :data
              };
              res.send(successJson);
          }
        });
    }
})();