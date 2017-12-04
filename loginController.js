(function () {
    var under=require('underscore');
    var loginDAO=require('./loginDAO');
    var password;
    var userEmailId;
    var userImei;
    module.exports.onLoginInfoSubmit=function (req,res) {
        password=req.body.password;
        userEmailId=req.body.userEmailId;
        userImei=req.body.imeiIndex;
        loginDAO.getUserRecord(req.body.userEmailId,function (err,data) {
            console.log(data);
            if(typeof data !=="undefined") {
                if (data.length > 0) {
                    if (err) {
                        var errorResponse = {
                            statusCode: 341,
                            message: err.message
                        };
                        res.status(341).send(errorResponse);
                        console.log(err);
                    } else {
                        console.log(data);
                        var newList = under.map(data, function (dat) {
                            return {
                                name: dat.userName,
                                pass: dat.password,
                                imei: dat.imeiIndex
                            }
                        });
                        var actualPassword = newList[0].pass;
                        var actualImei = newList[0].imei;
                        if (actualPassword === password) {
                            if (userImei === actualImei) {
                                var successResponse = {
                                    statusCode: 200,
                                    message: "Logged in successfully"
                                };
                                res.send(successResponse);
                            } else {
                                console.log("Passwords match");
                                if (!actualImei) {
                                    console.log("new login inserting imei ");
                                    console.log(userEmailId);
                                    loginDAO.updateIMEI(userImei, userEmailId, function (err, data) {
                                        if (err) {
                                            console.log("login failed to insert IMEI");
                                            res.send(err);
                                        } else {
                                            var successResponse = {
                                                statusCode: 200,
                                                message: "Logged in successfully"
                                            };
                                            res.send(successResponse);
                                        }

                                    });
                                } else {
                                    var failureResponse = {
                                        message: "login from multiple Devices blocked"
                                    };
                                    res.status(500).send(failureResponse);
                                }
                            }

                        } else {
                            var failureResponse = {
                                statusCode: 500,
                                message: "Passwords dont match"
                            };
                            res.status(500).send(failureResponse);
                        }


                    }
                }
                else {
                    var failureJson = {
                        statusCode: 500,
                        message: "User doesnot Exist"
                    };
                    res.status(500).send(failureJson);
                }
            }
        })
    }
})();