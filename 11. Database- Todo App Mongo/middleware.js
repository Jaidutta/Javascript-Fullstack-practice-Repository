const jwt = require("jsonwebtoken");
function authMiddleware(req, res, next) {
  const token = req.headers.token;
  const decoded = jwt.verify(token, "supersecret123123");

  if(decoded.userId) {
    req.userId = decoded.userId;
    next();
  }
  else {
    req.status(403).json({
      message: "Token invalid or not found"
    })
  }
}

module.exports = {authMiddleware: authMiddleware}