
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
    
        return res.json({ msg: "user added" });
    } )
    .catch(error => {
        return res.json({ msg: "El email ya esta registrado" });
    });
}


