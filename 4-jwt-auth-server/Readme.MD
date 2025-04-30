
```javascript
// Install dependencies
npm install express
npm install dotenv
npm install jsonwebtoken

// Import required modules
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

require('dotenv').config(); // Load environment variables from .env file

// Set up server configuration
const PORT = process.env.PORT || 3000; // Set port number from environment variable or default to 3000
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key'; // Set JWT secret key from environment variable

app.use(express.json()); // Middleware to parse incoming JSON requests

/* User Login Endpoint - Issues JWT Token */
app.post('/login', (req, res) => {
    // Example user object (In real applications, fetch user details from DB)
    const user = { id: 1, name: "John Doe" };

    // Generate JWT Token
    const token = jwt.sign(
        user, 
        JWT_SECRET, 
        { expiresIn: '1h' } // Token expires in 1 hour
    );

    // Send token to user
    res.json({ token });
});

/* Middleware to Validate JWT Token */
function TokenValidator(req, res, next) {
    const authHeader = req.headers['authorization']; // Get Authorization header
    const token = authHeader && authHeader.split(" ")[1]; // Extract token from header

    if (!token) return res.status(401).json({ message: "Token Missing" }); // Return error if token is missing

    // Verify JWT Token
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid Token' }); // Return error if verification fails

        req.user = user; // Store user information in request object
        next(); // Proceed to the next middleware or route handler
    });
}

/* Protected API Endpoint - Accessible only with valid JWT Token */
app.get('/api/test', TokenValidator, (req, res) => {
    res.json({ message: "Auth Successful and Response sent", user: req.user });
});

/* Start Express Server */
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```
