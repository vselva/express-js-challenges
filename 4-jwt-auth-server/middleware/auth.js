const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

// middlware to check authenticate token
function authenticateToken(req, res, next) {
    // Get the header from 'authorization'
    const authHeader = req.headers['authorization'];
    
    // 
    const token = authHeader && authHeader.split(' ')[1];

    // if no token return 'token missing'
    if (!token)
        return res.status(404).json({message: 'token missing'});

    // verify the token
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) 
            return res.status(403).json({message: 'invalid token'});
        req.user = user; 
        next();
    });
}

module.exports = authenticateToken;
