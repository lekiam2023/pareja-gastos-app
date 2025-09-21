const {verifyToken} = require('../utils/jwt');

const authMiddleware = (req, res, next) => {
    console.log("Headers recibidos:", req.headers);
    const tokenHeader = req.headers.authorization;
    if (!tokenHeader) return res.status(401).json({error: "Token faltante"});

    const token = tokenHeader.split(" ")[1];
      try{
        req.user = verifyToken(token);
        console.log("Usuario verificado:", req.user);
        next();
      } catch (e){
        return res.status(403).json({error:"Token inválido"});
      }
};

module.exports = authMiddleware;