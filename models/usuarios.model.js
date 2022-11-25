const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema; 

const UsuarioSchema = new Schema ({
    usuario:{type:String, required: true, max: 100},
    email: {
        type:String, 
        required: true, 
        max: 100, 
        unique: true, 
        lowercase: true,
    },
    password:{type:String, required:true, max: 30},
});

UsuarioSchema.methods.encryptPassword = async password => {
    const salt =  await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

UsuarioSchema.methods.validatePassword = function (password) {
    return bcrypt.compare( password, this.password );
}

module.exports = mongoose.model("usuarios", UsuarioSchema);