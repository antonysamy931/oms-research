const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var AddressSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, default: new mongoose.Types.ObjectId},
    Address1: {type: String, required: true},
    Address2: {type: String},
    City: {type: String, required: true},
    State: {type: String, required: true},
    Country: {type: String, required: true},
    Zipcode: {type: String, required: true}
});

var Address = mongoose.model('Address', AddressSchema);

module.exports = Address;