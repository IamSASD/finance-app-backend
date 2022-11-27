
const Usuario = require("../models/usuarios.model");


exports.register = async function(req, res) {
    const { usuario, email, password  } = req.body;
    Usuario.init()
    .then( async() => {
        const user = new Usuario({
            usuario,
            email,
            password
        });
        user.password = await user.encryptPassword(user.password);
        await user.save();
    
        return res.json({ code: 2 ,msg: "user added" });
    } )
    .catch(err => {
        const { code } = err;
        if(code === 11000){return res.json({ code: 0, msg: 'Email already exist'})}
        console.log(err);
    });
}


