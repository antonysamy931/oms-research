const path = require('path');
const JWT = require('jsonwebtoken');
const Promise = require('bluebird');

const ApplicationSetting = require(path.join(__dirname, '../application-setting.json'));

const JWT_KEY = ApplicationSetting['jwt-key'];

module.exports = {
    GenerateToken: (data) => {
        return JWT.sign(JSON.stringify(data),JWT_KEY);
    },
    GetData: (token) => {
        return JWT.verify(token, JWT_KEY);
    },
    GenerateResetToken: (data) => {
        return JWT.sign({
            data: JSON.stringify(data)
            }, JWT_KEY, {
            expiresIn: '1d'
        });
    },
    VerifyResetToken: (token) => {
        return new Promise(function(resolve, reject){
            JWT.verify(token,JWT_KEY,(err, decoded) => {
                if(err){
                    reject(err);
                }else{
                    resolve(decoded);
                }
            })
        });
    }
}