const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');
const path = require('path');
const rootDir = require('./utils/path');

// parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files (CSS, JS, images from public folder)
let publicDir = path.join(rootDir, 'public');
console.log('publicDir: ' + publicDir);
app.use(express.static(publicDir));

// routes starting with /admin
app.use('/admin', adminRouter);

// fallback for unknown routes (404 page)
app.use((req, res) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

// listen on port 3000
app.listen(3000, () => {
    console.log('listening to port 3000...');
});
