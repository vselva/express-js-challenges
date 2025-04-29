const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { findUserByName } = require('../services/userService');

require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    console.log('body:', req.body);
    const user = findUserByName(username);
    console.log('user', user);

    if (!user)
        return res.status(401).json({message: 'invalid user'});

    const passwordMatch = await bcrypt.compare(password, user.password);
    if(!passwordMatch)
        return res.status(401).json({message: "invalid password"});

    const token = jwt.sign(
        {
            id: user.id, 
            username: user.username
        },
        JWT_SECRET, 
        { expiresIn: '1h' }
    );

    res.json({token});
});

module.exports = router;
