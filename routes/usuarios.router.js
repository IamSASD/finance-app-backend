const express = require("express");
const router = express.Router();
const passport = require('passport');
const { isAuthenticated } = require("../auth/isAuthenticated");
const usuariosController = require("../controllers/usuarios.controller");

router.post("/login", passport.authenticate('local', {failureMessage: 'login failed', session: true}) , (req, res) => {
    res.json({ code: 2, msg: "login succesfull" });
});
router.post( '/logout', (req, res, next) => {
    req.logout( err => {
        if(err){return next(err)};
        res.json({loggedOut: true, msg:"log out succesfull"});
    } )
} );

router.post( '/checkout', isAuthenticated, (req, res) => {
    res.json({ auth: true })
} )

router.post( "/register", usuariosController.register );


module.exports = router
