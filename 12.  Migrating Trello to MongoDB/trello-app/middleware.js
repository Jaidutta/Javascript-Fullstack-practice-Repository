const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  // check if they have sent the right header. extract who this user is from the header.
  const token = req.headers.token;

  // if there is no token in the header, then the user is not logged in. So we will return an error message.
  if (!token) {
    res.status(403).send({
      message: 'You are not logged in',
    });
    return;
  }

  // if there is a token, we will verify it and extract the username from it.
  const decoded = jwt.verify(token, 'projectmanagementsupersecretpassword123123');
  const userId = decoded.userId;

  if(userId) {
    req.userId = userId; // we will attach the userId to the request object so that we can use it in the next middleware/route handler.

    next();
  }
  else {
    res.status(403).json({
      message: 'malformed token',
    });
  }


}

module.exports = { authMiddleware };