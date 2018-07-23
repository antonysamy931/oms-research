const Express = require('express');
let Router = Express.Router();
const path = require('path');
const Repository = require(path.join(__dirname, '../Mongo/mongo-init'));
const jwt = require(path.join(__dirname, '../Helpers/jwt.helper'));
const MailHelper = require(path.join(__dirname,'../Helpers/MailHelper'));
const ApplicationSettings = require(path.join(__dirname, '../application-setting.json'));
const HtmlReader = require(path.join(__dirname, '../Helpers/HtmlReader'));
const HtmlUtil = require(path.join(__dirname, '../Helpers/HtmlUtil'));

Router.post('/login',function(req, res, next){
    Repository.Account.ValidateUser(req.body.UserName, req.body.Password).then((result) => {     
        if(result){
            let Token = jwt.GenerateToken({Name : result.User.Name, 
                UserId: result.User.UserId, 
                Role: result.User.Role});            
                res.status(200).json({Token: Token, Name: result.User.Name});
        }else{
            res.status(404).json('Username or password provide incorrect.');
        }
        
    }, (error) => {
        res.status(500).json(error);
    });    
});

Router.post('/forgotpassword',function(req,res,next){

    var ResetTemplate = HtmlReader.ResetpasswordTemplate();
    var Url = req.protocol+"://"+req.get('host');
    
    Repository.User.GetUserByEmail(req.body.Email).then((result) => {
        var data = {
            Name : result.Name.Last + " " + result.Name.First,
            obj : result
        }
        ResetTemplate = HtmlUtil.ResetpassowrdMapper(ResetTemplate, data, Url);
        let mailOptions = {
            from: ApplicationSettings['from-address'], 
            to: req.body.Email,
            subject: 'Resetpassword',
            html: ResetTemplate
        };
        MailHelper.SendMail(mailOptions).then((mail) => {
            res.status(200).json(mail);
        }, (error) => {
            res.status(500).json(error);
        });        
    },        
    (error) => {
        res.status(404).json("User not found");
    });    
});

Router.post('/verifytoken',function(req,res,next){
    jwt.VerifyResetToken(req.body.Token).then(function(result){
        res.status(200).json('Verified');
    },function(error){
        res.status(500).json(error);
    })
});

Router.post('/resetpassword', function(req, res, next){
    jwt.VerifyResetToken(req.body.Token).then(function(result){
        var Info = JSON.parse(result.data);                
        Repository.Account.UpdatePassword(req.body.Password, Info.obj._id).then((updateresult) => {            
            res.status(200).json("Record updated successfully.");
        }, (er) => {            
            res.status(500).json(er);
        })        
    },function(error){
        res.status(500).json(error);
    })
});

module.exports = Router;