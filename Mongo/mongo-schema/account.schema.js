const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AccountSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, default: new mongoose.Types.ObjectId},
    Username: {type: String, index: true},
    Password: {type: String},
    User: {type: Schema.Types.ObjectId, ref: "User"},
    CreatedDate: {type: Date, default: new Date()},
    CreatedBy: {type: String},
    UpdatedDate: {type: Date},
    UpdatedBy: {type: String}
});

AccountSchema.pre('find',function(){
    this.populate('User');
});

AccountSchema.pre('findOne',function(){
    this.populate('User');
});

AccountSchema.pre('findOneAndUpdate', function(){
    this.UpdatedDate = new Date();
})

var Account = mongoose.model('Account', AccountSchema);

module.exports = Account;