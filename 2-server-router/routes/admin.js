const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/submit-product" method="POST"><input type="text" name="name"/><input type="submit" value="Submit" /></form>');
});

router.post('/submit-product', (req, res, next) => {
    console.log(req.body);
    res.send('<h4>Form Submitted</h4><p>Submitted value: ' + req.body.name);
});

module.exports = router;
