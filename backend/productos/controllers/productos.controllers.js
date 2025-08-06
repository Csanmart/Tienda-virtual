const productoModels = require('../models/producto.models');


exports.crearProducto = async (req, res)=>{
    const {imagen, nombre, precio, descripcion ,cantidad, estado} = req.body;
    if(!imagen || !nombre || !precio || !cantidad || !descripcion || !estado){
        res.status(500).json({message:"Error los campos deben ser obligatorios"});
    }
    try{
        var productos = productoModels.create(req.body);
        res.status(201).json({message:'Producto creado con exito...', productos});
        console.log(productos)
    }catch(error){
        res.status(404).json({message:"Error creando producto..."});
    };
};


exports.getAllProductos = async (req, res)=>{
    try{
        var productos = productoModels.findAll();
        res.status(200).json(productos);
    }catch(error){
        res.status(500).json({message:"Error tomando los datos..."});
    };
};


exports.getProductoById = async (req, res)=>{
    const {id} = req.params;
    try{
        var productos = productoModels.findByPk(id);
        res.status(200).json(productos);
    }catch(error){
        res.status(500).json({message:"Error tomando los datos..."});
    };

};


