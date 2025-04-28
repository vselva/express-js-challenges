// Import required modules
const http = require('http');
const express = require('express');

const app = express();

// Create an HTTP server using the Express app
const server = http.createServer(app);

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
server.listen(3000, () => {
    console.log('Listening on localhost at port 3000');
});

/*
============================================
How the Request Travels (Step-by-Step):
============================================

1. The User (browser / Postman / client app) makes a request to `http://localhost:3000/`.
   
2. The request first reaches the HTTP server created by `http.createServer(app)`.
   
3. The HTTP server forwards the request to the Express app (`app`).

4. Express starts processing middlewares in the order they are registered:
   
   - First, `middleware1` is called:
     - It logs "In Middleware1" in the server console.
     - It calls `next()`, allowing the request to move to the next middleware.
   
   - Second, `middleware2` is called:
     - It logs "In Middleware2" in the server console.
     - It calls `res.send('<h1>Welcome to Express Server</h1>');`
     - res.send() sends an HTML response back to the user (browser/Postman).
     - The request-response cycle ends here.

5. The user sees the response `<h1>Welcome to Express Server</h1>` in the browser/Postman.

6. Server stays running, ready to handle more incoming requests.

============================================
Important Points:
============================================

- **Order of middleware matters**: They are executed sequentially.
- **next()** is required to move to the next middleware unless the current middleware sends the response.
- **res.send()** or **res.end()** ends the request and sends data to the client.

*/
