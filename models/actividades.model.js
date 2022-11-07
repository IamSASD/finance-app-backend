const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActividadesSchema = new Schema({
    actividad_id:{type: Number, required: true, max:100},
    nombre:{type: String, required: true, max:60},
    ingreso_egreso:{type: String, required: true, max:80},
    descripcion:{type: String, required: true, max:100}

});

module.exports = mongoose.model("actividades", ActividadesSchema);