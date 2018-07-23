const mongoose = require('mongoose');
const path = require('path');
const Role = require(path.join(__dirname,'../../Constants/Roles'));
const Account = require(path.join(__dirname,'../mongo-schema/account.schema'));
const User = require(path.join(__dirname,'../mongo-schema/user.schema'));
const Guid = require(path.join(__dirname,'../../Helpers/GuidBuilder'));
const Operation = require(path.join(__dirname,'../mongo-operation/operation'));
const logger = require(path.join(__dirname,'../../Helpers/Logger'));
const Crypto = require(path.join(__dirname,'../../Helpers/crypto.system'));

var UserModel = new User({
    _id: new mongoose.Types.ObjectId,
    Name: { 
        First: "OMS",
        Last: "Admin"        
    },        
    Email: "oms@help.com",    
    UserId: Guid.UserId(),
    Role: Role.oms_admin.value    
});

var AccountModel = new Account({
    _id: new mongoose.Types.ObjectId,
    Username: "omsadmin",
    Password: Crypto.Encryption("Pa$$word"),
    User: UserModel._id
});

Initialize = () => {
    Operation.FindOne(Account, ({Username: "omsadmin"})).then((result) => {
        if(!result){
            Operation.Insert(UserModel).then((result) => {
                logger.Info(`User ${UserModel.Name.First} ${UserModel.Name.Last} created successfully. Useris is ${UserModel.UserId}`);                
            },(error) => {
                logger.Error(error);
            });

            Operation.Insert(AccountModel).then((result) => {
                console.log("Inserted: Account "+ AccountModel.Username);
            }, (error) => {
                console.log(error);
            });
        }     
        return;   
    }, (error) => {
        console.log(error);
    });
}

module.exports = {Initialize: Initialize};