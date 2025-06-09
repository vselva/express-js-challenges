const express = require('express');
const app = express();

// express-session is a middleware for Express.js 
// used to create and manage sessions in a web application. 
// It allows the server to store data about a client across multiple requests 
// (e.g., user authentication status, user-specific data).
const session = require('express-session');
app.use(session({
    // store: new session.MemoryStore(), // Default: stores session data in memory (not recommended for production)
    // store: RedisStore({ client: redisClient }), // stores session in redis
    secret: 'my secret key',        // used to sign the session ID cookie
    resave: false,                  // forces session to be saved back to the session store, 
                                    // even if it was never modified during the request
    // resave: true,                // forces session to be saved back to the session store, 
                                    // even if it was never modified during the request  
    saveUninitialized: true,        // forces an uninitialized session to be saved to the store
    // saveUninitialized: false,    // prevents uninitialized sessions from being saved to the store
    cookie: { maxAge: 60000 }       // sets the cookie expiration time to 1 minute
}));

app.get('/api/session', (req, res) => {
    if(req.session.views) {
        req.session.views++;
        res.send(`Views ${req.session.views}`);
    } else {
        req.session.views = 1;
        res.send(`Views ${req.session.views}`);
    }
});

app.listen(8080, console.log('Listeing port 8080 for express-session module testing!'));