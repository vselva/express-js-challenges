const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

app.get('/api', (req, res) => {
    res.json({message: 'Recived get request at /api'})
});

app.listen(8080, () => {
    console.log('Server started at port 8080!')
});
