const Promise = require('bluebird');
const path = require('path');
const User = require(path.join(__dirname,'../mongo-schema/user.schema'));
const Operation = require(path.join(__dirname, '../mongo-operation/operation'));
const logger = require(path.join(__dirname, '../../Helpers/Logger'));

module.exports = {
    GetUserByEmail: (email) => {
        return new Promise((resolve, reject) => {
            Operation.FindOne(User,
            ({'Email':email})).then((result) => {
                resolve(result);
            }, (error) =>{
                logger.Error(error);
                reject(error);
            })
        })
    }
}