const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    _id: {type: Schema.Types.ObjectId, default: new mongoose.Types.ObjectId},
    Name: { 
        First: {type: String, required: true, lowercase: true},
        Last: {type: String, required: true, lowercase: true},
        Middle: {type: String, lowercase: true},
        Family: {type: String, lowercase: true}
    },
    Age: {type: Number},
    Dob: {type: String},
    Email: {type: String, required: true, unique: true},
    Phone: {
        Personal: {type: String},
        Home: {type: String},
        Office: {type: String}
    },
    UserId: {type: String, required: true, index: true, unique: true},
    Role: {type: String, required: true},
    CreatedDate: {type: Date, default: new Date()},
    CreatedBy: {type: String},
    UpdatedDate: {type: Date},
    UpdatedBy: {type: String},
    IsActive: {type: Boolean, default: true},
    IsDelete: {type: Boolean, default: false}    
});

UserSchema.pre('findOneAndUpdate',() => {
    this.UpdatedDate = new Date();
});

var User = mongoose.model("User", UserSchema);

module.exports = User;