const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    producto_id:{type: Number, required: true, max:100},
    nombre:{type: String, required: true, max:60},
    descripcion:{type: String, required: true, max:80},
    usuario:{type: String, required: true, max:40},

});

module.exports = mongoose.model("productos", ProductosSchema);