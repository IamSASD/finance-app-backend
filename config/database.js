const mongoose = require ("mongoose");
const { MONGODB_URI } = require("../config.js");

exports.mongoConnect = () => {
    const mongoStringConnection = MONGODB_URI;
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console,"Mongodb connection error"))
}