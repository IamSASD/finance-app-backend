const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    tipo: {type: String, required: true, max: 40},
    producto:{type: String, required: true, max:60},
    userId: {type: String}
});

module.exports = mongoose.model("productos", ProductosSchema);