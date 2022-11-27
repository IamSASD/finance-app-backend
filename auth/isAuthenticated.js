exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.json({ auth: false, msg: "Not Authorized."});
};