require('dotenv').config();

const SECRET = process.env.JWT_SECRET;
const MONGODB_URI = process.env.MONGODB_CONNECTION;

module.exports = {
    SECRET,
    MONGODB_URI
}