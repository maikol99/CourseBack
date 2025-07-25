import jwt from "jsonwebtoken";
const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Usuario no autenticado",
      });
    }
    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    if(!decode){
        return res.status(401).json({
            success:false,
            message:"token invalido"
        })
    }
    req.id = decode.userId 
    next()
  } catch (error) {
    console.log(error)
  }
};
export default isAuthenticated;