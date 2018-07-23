const express = require('express');
const router = express.Router();

const path = require('path');
const jwt = require('jsonwebtoken');

var ApplicationSetting = require(path.join(__dirname, '../application-setting.json'));

router.use(function(req, res, next){   
    if(req.path.includes('api/v1') && !req.path.includes('login') 
        && !req.path.includes('getcaptcha')
        && !req.path.includes('forgotpassword')
        && !req.path.includes('verifytoken')
        && !req.path.includes('resetpassword')){
        let authorization = req.header('Authorization');
        if(!authorization){
            res.status(401).json('UnAuthorized User.');
        }else{
            let token = authorization.split(' ')[1];          
            var data = jwt.verify(token, ApplicationSetting["jwt-key"]); 
            req.body.AuthorizeData = data;
            req.body.CreatedBy = req.body.AuthorizeData.UserId;
            req.body.UpdatedBy = req.body.AuthorizeData.UserId;            
            next();
        }
    }else{
        next();
    }
});

module.exports = router;