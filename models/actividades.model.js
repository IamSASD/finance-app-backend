const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActividadesSchema = new Schema({
    concepto:{type: String, required: true, max:100},
    cantidad:{type: Number, required: true, max:100},
    producto:{type: String, required: true, max:20},
    ingreso_egreso:{type: String, required: true, max:80},
    userId: {type: String}
});

module.exports = mongoose.model("actividades", ActividadesSchema);