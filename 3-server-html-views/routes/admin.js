const express = require('express');
const router = express.Router();

const path = require('path');
const rootDir = require('../utils/path');
//const viewsDir = path.join(__dirname, '../', 'views');

router.get('/add-product', (req, res, next) => {
    // res.send('<form action="/admin/submit-product" method="POST"><input type="text" name="name"/><input type="submit" value="Submit" /></form>');
    res.status(200).sendFile(path.join(rootDir, 'views', 'add-product.html'));
});
    
router.post('/submit-product', (req, res, next) => {
    console.log(req.body);
    // res.send('<h4>Form Submitted</h4><p>Submitted value: ' + req.body.name);
    res.status(200).sendFile(path.join(rootDir, 'views', 'submit-product.html'));
});

module.exports = router;
