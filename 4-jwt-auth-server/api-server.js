const cors = require('cors');
const apiRoutes = require('./routes/api');
const loginRoutes = require('./routes/login');

const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

// Middleware to parse json bodies
app.use(express.json());

// Middleware for cors
app.use(cors({
    methods: ['GET', 'POST']
}));

app.use(loginRoutes);
app.use('/api', apiRoutes);

// listeing to port 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
