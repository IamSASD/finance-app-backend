const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Usuarios = require('../models/usuarios.model.js');

passport.use( 'local',
    new LocalStrategy(
        {
        usernameField: "email",
        },
        async (email, password, done) => {
        // Match Email's User
        const user = await Usuarios.findOne({ email });

        if (!user) {
            return done(null, false, { message: "Not User found." });
        }

        // Match Password's User
        const isMatch = await user.validatePassword(password);
        if (!isMatch)
            return done(null, false, { message: "Incorrect Password." });
        
        return done(null, user);
        }
    )
);
  
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
Usuarios.findById(id, (err, user) => {
    done(err, user);
});
});

