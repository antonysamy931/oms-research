const Promise = require('bluebird');
const path = require('path');
const Account = require(path.join(__dirname,'../mongo-schema/account.schema'));
const CryptoSystem = require(path.join(__dirname, '../../Helpers/crypto.system'));
const Operation = require(path.join(__dirname, '../mongo-operation/operation'));
const logger = require(path.join(__dirname, '../../Helpers/Logger'));
module.exports = {
    ValidateUser: (username, password) => {
        return new Promise((resolve, reject) => {
            password = CryptoSystem.Encryption(password);            
            Operation.FindOne(Account, 
                ({'Username':username,'Password': password})).then((result) => {                                        
                    resolve(result);
                }, (error) => {
                    logger.Error(error);
                    reject(error);
                });                
        });        
    },
    UpdatePassword: (password, userid) => {
        return new Promise((resolve, reject) => {
            password = CryptoSystem.Encryption(password);   
            Operation.UpdateOne(Account, {'User': userid}, 
            {'Password': password}).then((result) => {                
                resolve(result);
            }, (error) => {
                logger.Error(error);                
                reject(error);
            });
        });
    }
}
