const mongoose = require('mongoose');
const Joi = require('joi')

mongoose.connect('mongodb://localhost/users')
.then(()=>{
    console.log("Connected")
})
.catch((e)=>{
    console.log("Failed" + e)
}) //Promis

// mongoose.model vs mongoose schems
const User = mongoose.model('User', new mongoose.Schema({
    fullName:{
        type: String, 
        required: true, 
        minlength: 3,
        maxlength: 100,
    },
    email:{
        type: String, 
        required: true, 
        unique: true,     
    },
    password:{
        type: String, 
        required: true, 
        minlength: 8,
        maxlength: 1000,//password has a huge maxLength to be able to hash it to prevent hacking
    }, 
    gender:{
        type: String, 
    }
}))

function userValidate(user){
    const schema = {
        fullName: Joi.string().min(3).max(100).required(),
        email: Joi.string().required().email(),
        password: Joi.String().required(),
        gender: Joi.String().min(8).max(1000)
    }
    return Joi.ValidationError(user, schema)
}
exports.User = User;
zzzzzzzzzzzzzzz
zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz