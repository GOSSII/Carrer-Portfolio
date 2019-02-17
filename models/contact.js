let mongoose = require('mongoose');

let contactSchema = mongoose.Schema({
    firstname:String,
    lastName:String,
    email:String,
    subject:String,
    message:String
},{
    collection :"usercontact"
});

module.exports= mongoose.model('contact',contactSchema);