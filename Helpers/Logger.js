const path = require('path');
const Operation = require(path.join(__dirname, '../Mongo/mongo-operation/operation'));
const LogInfo = require(path.join(__dirname,'../Mongo/mongo-schema/logger.schema'));
module.exports = {
    Error: (message) => {
        Operation.Insert(new LogInfo({
            Type: "Error",
            Message: message
        })).then((result) => {
            return;
        });
    },
    Warning: (message) => {
        Operation.Insert(new LogInfo({
            Type: "Warning",
            Message: message
        })).then((result) => {
            return;
        });
    },
    Info: (message) => {
        Operation.Insert(new LogInfo({
            Type: "Info",
            Message: message
        })).then((result) => {
            return;
        });
    },
    Fatel: (message) => {
        Operation.Insert(new LogInfo({
            Type: "Fatel",
            Message: message
        })).then((result) => {
            return;
        });
    }
}
