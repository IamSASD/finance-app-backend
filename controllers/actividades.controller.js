const Actividad = require("../models/actividades.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let actividad = new Actividad({
        concepto: req.body.concepto,
        cantidad: req.body.cantidad,
        producto: req.body.producto,
        ingreso_egreso: req.body.ingreso_egreso,
        userId: req.user.id
    })

    actividad.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar la actividad"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La actividad se guardó correctamente"
        res.json(response)
    })
}

exports.find = async function(req,res){
    const actividades = await Actividad.find({ userId: req.user.id }).sort('desc');
    return res.json( actividades );
}

