const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    nombre:{type: String, required: true, max:60},
    descripcion:{type: String, required: true, max:80},
    tipo: {type: String, required: true, max: 40},
    userId: {type: String}
});

module.exports = mongoose.model("productos", ProductosSchema);