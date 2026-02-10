const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
   res.setHeader(
      "Cache-Control",
      "private, no-store, no-cache, must-revalidate",
   );
   res.setHeader("Pragma", "no-cache");
   res.setHeader("Expires", "0");

   try {
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
