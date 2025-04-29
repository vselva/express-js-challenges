const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth');

// Get Request
router.get('/test', authenticateToken, (req, res) => {
    res.json({message: 'Get message successful'});
});

// Post Request 
router.post('/echo', authenticateToken, (req, res) => {
    const body = req.body;
    res.json({clientdata: body});
});

router.delete('/delete', authenticateToken, (req, res) => {
    res.json({message: 'Delete successful'});
});

router.put('/put', authenticateToken, (req, res) => {
    res.json({message: 'Put successful'});
});

router.patch('/patch', authenticateToken, (req, res) => {
    res.json({message: 'Patch successful'});
});

router.options('/options', authenticateToken, (req, res) => {
    res.json({message: 'Options successful'});
});

module.exports = router;
