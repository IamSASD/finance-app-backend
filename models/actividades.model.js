const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActividadesSchema = new Schema({
    nombre:{type: String, required: true, max:60},
    ingreso_egreso:{type: String, required: true, max:80},
    descripcion:{type: String, required: true, max:100},
    userId: {type: String}
});

module.exports = mongoose.model("actividades", ActividadesSchema);