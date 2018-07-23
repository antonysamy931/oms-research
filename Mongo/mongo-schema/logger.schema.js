const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var LogInfoSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, default: new mongoose.Types.ObjectId },
    Type: {type: String, required: true},
    Message: {type: String}
});

LogInfoSchema.index({Message: "text"});

var LogInfo = mongoose.model("LogInfo", LogInfoSchema);

module.exports = LogInfo;