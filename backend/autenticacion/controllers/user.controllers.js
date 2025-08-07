const userModels = require("../models/user.models");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400);
  }

  try {
    const emailExist = await userModels.findOne({ where: { email } });
    if (emailExist) {
      return res.status(409);
    }

    const passwordExist = await userModels.findOne({ where: { password } });
    if (passwordExist) {
      return res.status(400);
    }
    const user = await userModels.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: "Error creando el usuario", err });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if(!email || !password){
    res.status(500).json({message:'Los campos no pueden estar vacios'})
  }
  try {
    //Validaciones
    const validEmail = await userModels.findOne({ where: { email } });
    if (!validEmail)
      return res
        .status(404)
        .json({ message: "No se encuentra este correo..." });

    //Validar el password
    const validPassword = await userModels.findOne({ where: { password } });
    if (!validPassword)
      return res.status(404).json({ message: "Error con el password" });

    res.status(200).json({ message: "Bienvenido a la apliacion..." });
  } catch (err) {
    res.status(500).json({ message: "Error iniciando sesion...", err });
  }
};

exports.allUsers = async (req, res) => {
  try {
    const user = await userModels.findAll();
    res.status(200).json(user);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error tomando los datos...." }, err);
  }
};

exports.update = async (req, res) => {
  const { name, email, password } = req.body;
  const { id } = req.params;
  try {
    const user = await userModels.findByPk(id);
    if (!user) {
      return res
        .status(404)
        .json({ message: "Error encontrando el usuario.." });
    }
    //Actualizar los campos si vienen en el cuerpo
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password;

    await user.save();
    res.status(200).json(user);
  } catch (err) {
    return res
      .status(500)
      .json({ massage: "Error tomando los datos....", err });
  }
};
