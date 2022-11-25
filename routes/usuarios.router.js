const express = require("express");
const router = express.Router();
const passport = require('passport');
const usuariosController = require("../controllers/usuarios.controller");

router.post("/login", passport.authenticate('local', {failureMessage: 'login failed'}) , (req, res) => {
    res.json({msg: "succesfull login"})
});
router.post( '/logout', (req, res, next) => {
    req.logout( err => {
        if(err){return next(err)};
        res.json({msg: 'logged'});
    } )
} );

router.post( "/register", usuariosController.register );


module.exports = router
