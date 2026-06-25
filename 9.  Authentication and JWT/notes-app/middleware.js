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
  const decoded = jwt.verify(token, 'jaidutta123');
  const username = decoded.username;

  // If the token is invalid, we will return an error message.
  if (!username) {
    res.status(403).json({
      message: 'malformed token',
    });
    return;
  }

  req.username = username; // we will attach the username to the request object so that we can use it in the next middleware/route handler.
  
  next();
}

module.exports = {authMiddleware};