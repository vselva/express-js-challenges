// Import required modules
const express = require('express');
const app = express();

// -------- Request Flow Begins from Here --------

// Middleware 1: Logs a message and passes control to the next middleware
const middleware1 = (req, res, next) => {
    console.log('In Middleware1');
    next(); // Important: 'next()' moves the request to the next middleware
};

// Middleware 2: Logs a message and sends a final response back to the user
const middleware2 = (req, res, next) => {
    console.log('In Middleware2');
    res.send('<h1>Welcome to Express Server</h1>'); // Ends the request-response cycle
    // Once res.send() is called, no next() is needed because the response is sent.
};

// Attach middlewares to the app
// When a request comes in, Express will execute these middlewares in order
app.use(middleware1); // First middleware executed
app.use(middleware2); // Second middleware executed (and ends the response)

// Start the server and listen for incoming requests
app.listen(3000, () => {
    console.log('Listening on localhost at port 3000');
});
