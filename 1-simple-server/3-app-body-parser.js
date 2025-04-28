const express = require('express');
const app = express();

// Import and configure body-parser middleware
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true })); // This allows handling of complex objects

// Route for the homepage
app.get('/', (req, res, next) => {
    let home = '<h1> Welcome to Express.Js Server!</h1>';
    home += '<p>This is with routing with app.get, app.post, and body-parser middleware!</p>';
    home += '<a href="/form">Submit a Form</a>';  // Fixed closing tag
    res.send(home);
});

// Route to display the form
app.get('/form', (req, res, next) => {
    let form = '<h1>Submit this form</h1>';
    form += '<form action="/submit" method="POST">';
    form += '<input type="text" name="name" placeholder="Enter your name" required>';
    form += '<input type="submit" value="Submit"/>';
    form += '</form>';
    res.send(form);
});

// Route to handle form submission
app.post('/submit', (req, res, next) => {
    console.log('Form Submitted! Submitted data:');
    console.log(req.body); // Log the submitted form data
    
    let submit = '<h1>Form Submitted</h1>';
    submit += '<p>Form is submitted successfully</p>';
    submit += '<p> Submitted value is ' + req.body.name + '</p>';
    submit += '<a href="/form">Submit another Form</a>';  // Fixed closing tag
    res.send(submit);
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Listening on Port 3000');
});
