const mongoose = require('mongoose');
const path = require('path');
const ApplicationSetting = require(path.join(__dirname, '../application-setting'));
var mongoserver = ApplicationSetting["mongo-server"];
var database = ApplicationSetting["med-database"];
var logger = require(path.join(__dirname, '../Helpers/Logger'));

module.exports = {
    Connect: async function(){
        try{            
            await mongoose.connect(mongoserver+database);
            console.log("Mongo database connected successfully..");
            return;
        }
        catch(err){
            logger.Error(err);
        }
    }
};