const cors = require('cors');
const apiRoutes = require('./routes/api');
const loginRoutes = require('./routes/login');
const jwtTestRoutes = require('./routes/jwt-test');
const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

// Middleware to parse json bodies
app.use(express.json());

// Middleware for cors
app.use(cors());

app.use(loginRoutes);
app.use('/api', apiRoutes);
app.use(jwtTestRoutes);

// listeing to port 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
