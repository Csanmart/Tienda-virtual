const productoModels = require('../models/producto.models');

//Crear productos
exports.crearProducto = async (req, res)=>{
    const {imagen, nombre, precio, descripcion ,cantidad, estado} = req.body;
    if(!imagen || !nombre || !precio || !cantidad || !descripcion || !estado){
        res.status(500).json({message:"Error los campos deben ser obligatorios"});
    }
    try{
        var productos = await productoModels.create(req.body);
        res.status(201).json({message:'Producto creado con exito...', productos});
    }catch(error){
        res.status(404).json({message:"Error creando producto..."});
    };
};

//Tomar todos los productos
exports.getAllProductos = async (req, res)=>{
    try{
        var productos = await productoModels.findAll();
        res.status(200).json(productos);
    }catch(error){
        res.status(500).json({message:"Error tomando los datos..."});
    };
};

//Tomar productos por id
exports.getProductoById = async (req, res)=>{
    const {id} = req.params;
    try{
        var productos = await productoModels.findByPk(id);
        res.status(200).json(productos);
    }catch(error){
        res.status(500).json({message:"Error tomando los datos..."});
    };
};

//Editar productos 
exports.updateProducto = async (req, res)=>{
    const {imagen, nombre, precio, descripcion ,cantidad, estado} = req.body;
    const {id} = req.params;
    try{
        const producto = await productoModels.findByPk(id)
        if(!producto){
            return res.status(404).json({message: 'Error encontrando el producto...'});
        }
        if(imagen) producto.imagen = imagen;
        if(nombre) producto.nombre = nombre;
        if(precio) producto.precio = precio;
        if(descripcion) producto.descripcion = descripcion;
        if(cantidad) producto.cantidad = cantidad;
        if(estado) producto.estado = estado;


        await producto.save();
        res.status(200).json(producto)
    }catch(error){
        return res.status(500).json({menssage: "Error editando los datos..."})
    }
}


