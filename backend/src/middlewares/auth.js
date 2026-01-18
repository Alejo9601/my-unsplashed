const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
   try {
      //const token = req.headers.authorization?.split(" ")[1]; // Bearer TOKEN
      const token = req.cookies.token;

      if (!token) {
         return res.status(401).json({
            error: "Authorization not allowed",
         });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = {
         user_id: decoded.user_id,
         username: decoded.username,
      };

      next();
   } catch (error) {
      return res.status(401).json({
         error: "Token inválido o expirado",
      });
   }
};

module.exports = authMiddleware;
