(function () {
    var getAllBloodGroupDAO=require('./getAllBloodGroupDAO');
    module.exports.fetchAllBloodGroups=function (req,res) {
        getAllBloodGroupDAO.fetchData(function (err,data) {
            if(err){
                var failureResponse={
                    statusCode : 344,
                    message : err.message
                }
                res.status(344).send(failureResponse);
            }else{
                var successResponse={
                    statusCode : 200,
                    message : data
                }
                res.send(successResponse);
            }
        })
    }
})();