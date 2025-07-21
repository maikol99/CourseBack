import { User } from "../models/user.js";
//biblioteca para encriptar (hashear) contraseñas, muy importante por seguridad.
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    //Extrae los campos del cuerpo del request(req.body)
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      //Si falta alguno, devuelve un error 403 (Forbidden) con un mensaje.
      return res.status(403).json({
        success: false,
        message: "Todos los campos son obligatorios.",
      });
    }
    //Verificar si el usuario ya existe
    const user = await User.findOne({ email });
    if (user) {
      return res.status(403).json({
        success: false,
        message: "Esta identificación de correo electrónico ya está registrada",
      });
    }
    //Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    //Crear el usuario
    await User.create({
      fullName,
      email,
      password: hashedPassword,
    });
    //Devolver respuesta exitosa
    return res.status(201).json({
      success: true,
      message: "Cuenta creada exitosamente",
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      //Si falta alguno, devuelve un error 403 (Forbidden) con un mensaje.
      return res.status(403).json({
        success: false,
        message: "Todos los campos son obligatorios.",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({
        success: false,
        message: "Email o contraseña incorrecta.",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(403).json({
        success: false,
        message: "Email o contraseña incorrecta.",
      });
    }

    return res.status(200).json({
        success: true,
        message: `Bienvenido a ${user.fullName}`
    })
  } catch (error) {
    console.log(error)
  }
};
