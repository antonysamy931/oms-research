const Promise = require('bluebird');
const nodemailer = require('nodemailer');
const path = require('path');

const EmailSetting = require(path.join(__dirname, './EmailSettings'));

module.exports = mailhelper = {};

const Transporter = nodemailer.createTransport(EmailSetting);

mailhelper.GetTransporter = function(){
    return Transporter;
}

mailhelper.SendMail = function(mail){
    return new Promise((resolve, reject) => {
        Transporter.sendMail(mail,(err, info) => {
            if(err){
                reject(err);
            }else{
                resolve(info);
            }
        });
    });    
}