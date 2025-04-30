const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const router = express.Router();
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

router.get('/home', (req, res) => {
    let homeHtml = '';
    const user = {
        id: 1,
        name: 'Selva'
    };

    // Generate token - Sync method
    const token = jwt.sign(
        user,
        JWT_SECRET,
        {
            expiresIn: '1h',
            subject: 'subject of the token',
        }
    );

    homeHtml += '<h1>JWT Check</h1>';
    homeHtml += '<p><strong>JWT Token:</strong> ' + token + '</p>';

    // Generate token - Async method (for learning)
    jwt.sign(user, JWT_SECRET, { expiresIn: '1h' }, (err, tokenAsync) => {
        if (err) console.log('Error creating token asynchronously');
        else console.log('Token generated asynchronously:', tokenAsync);
    });

    // Validate token - Sync method
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        console.log('Payload (sync):', payload);
        homeHtml += '<p><strong>Sync verify:</strong> Token is valid</p>';
    } catch (e) {
        console.log('Sync token validation failed');
        homeHtml += '<p><strong>Sync verify:</strong> Invalid token</p>';
    }

    // Validate token - Async method (for learning)
    jwt.verify(token, JWT_SECRET, (err, decodedUser) => {
        if (err) {
            console.log('Async verify: Invalid token!');
            homeHtml += '<p><strong>Async verify:</strong> Invalid token</p>';
        } else {
            console.log('Payload (async):', decodedUser);
            homeHtml += '<p><strong>Async verify:</strong> Token is valid</p>';
        }

        // Send response after async verification
        res.send(homeHtml);
    });

    // Decode token - No signature validation, just payload decoding
    console.log('jwt.decode(token): ', jwt.decode(token)); // This does not validate the token signature
});

module.exports = router;
