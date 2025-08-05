const productoModels = require('../models/producto.models');


exports.crearProducto = async (req, res)=>{
    const {img, name, precio, cantidad, estado, oferta} = req.body;
    if(!img || !name || !precio || !cantidad || !estado || !oferta){
        res.status(500).json({message:"Error los campos deben ser obligatorios"});
    }
    try{
        var productos = productoModels.create(req.body);
        res.status(201).json({message:'Producto creado con exito...', productos});
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


