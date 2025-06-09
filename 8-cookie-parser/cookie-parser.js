const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/api', (req, res) => {
    console.log('cookies parsed:', req.cookies);

    // how to get other cookie details such as maxAge, httpOnly, etc.
    console.log('cookie details:', req.cookies.username);
    res.clearCookie('username'); // this will remove the cookie from the client side
    console.log('cookie cleared:', req.cookies.username);
    res.status(200).json({message: 'Received a api request for cookie-parser module!'});
});

app.get('/api/get-cookie', (req, res) => {
    console.log('cookies parsed:', req.cookies); // this is parsed from req.headers.cookie
    res.cookie('username', 'selva', {
        maxAge: 900000, // 15 minutes in milliseconds
        signed: false, // true if you want to sign the cookie
        httpOnly: true, // true if you want to prevent client side script access
        maxAge: 1000 * 60 * 15, // 15 minutes
        secure: false, // true if using https
        path: '/', // cookie will be available in all routes
        sameSite: 'Lax' // Lax or Strict 
    }); // this will be set in the client side cookie
    res.status(200).json({message: 'Received a api/get-cookie request for cookie-parser module!'});
    
});

app.listen(8080, () => console.log('Listening port 8080'));
