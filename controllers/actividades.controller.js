const Actividad = require("../models/actividades.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let actividad = new Actividad({
        actividad_id: req.body.actividad_id,
        nombre: req.body.nombre,
        ingreso_egreso: req.body.ingreso_egreso,
        descripcion: req.body.descripcion
        
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

exports.find = function(req,res){
    Actividad.find(function(err, actividad){
        res.json(actividad)
    })
}

exports.findOne = function(req,res){
    Actividad.findOne({_id: req.params.id},function(err, actividad){
        res.json(actividad)
    })
}

exports.update = function(req,res){
    let actividad = {
        actividad_id: req.body.actividad_id,
        nombre: req.body.nombre,
        ingreso_egreso: req.body.ingreso_egreso,
        descripcion: req.body.descripcion
    }

    Actividad.findByIdAndUpdate(req.params.id, {$set: actividad}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar la actividad"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La actividad se modifico correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    Actividad.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar la actividad"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "Actividad eliminada correctamente"
        res.json(response)
    })
}