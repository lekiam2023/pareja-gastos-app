const {verifyToken} = require('../utils/jwt');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
      if(!token) return res.status(401).json({error:"Token faltante"});

      try{
        req.user = verifyToken(token);
        next();
      } catch (e){
        return res.status(403).json({error:"Token inválido"});
      }
};

module.exports = authMiddleware;