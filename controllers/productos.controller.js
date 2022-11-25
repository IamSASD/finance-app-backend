const Producto = require("../models/productos.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let producto = new Producto({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        tipo: req.body.tipo,
        userId: req.user.id
    })

    producto.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar el producto"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El producto se guardó correctamente"
        res.json(response)
    })
}

exports.find = async function(req,res){
    if(req.user){
        const productos = await Producto.find({ userId: req.user.id }).sort('desc');
        return res.json( productos )
    }
    return res.json( {message: "no estas logeado"} )
}

exports.update = function(req,res){
    let producto = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        usuario: req.body.usuario
    }

    Producto.findByIdAndUpdate(req.params.id, {$set: producto}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el producto"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El producto modifico correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    Producto.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el producto"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El producto eliminado correctamente"
        res.json(response)
    })
}