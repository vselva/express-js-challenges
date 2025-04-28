
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');

app.use(bodyParser.urlencoded());
app.use('/admin', adminRouter);
app.use((req, res) => {
    res.status(404).send('<h1>404 Page Not Found');
});

app.listen(3000, () => {
    console.log('listening to port 3000...');
});
