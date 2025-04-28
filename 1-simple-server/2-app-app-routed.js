// This is a simple server with middleware that executes for a specific URL
const express = require('express');
const app = express();

const getHtmlHeader = () => {
    const header = '<!DOCTYPE html><html><head><title>My First Express Server</title></head><body>';
    return header;
}

const getHtmlFooter = () => {
    const footer = '</body></html>';
    return footer;
}

// This executes for the url /about
app.use('/about', (req, res, next) => {
    console.log('Middleware for the url /about');
    let html = getHtmlHeader();
    html += '<h1>About Us</h1>';
    html += '<p>This is a simple server with middleware that executes for a specific URL</p>';
    html += getHtmlFooter();
    res.send(html);
});

// This executes for the url / 
app.use((req, res, next) => {
    console.log('First Middleware!');
    let html = getHtmlHeader();
    html += '<h1>Welcome to My First Express Server</h1>';
    html += '<p>This is a simple server with middleware that executes for a specific URL</p>';
    html += getHtmlFooter();
    res.send(html);
});

app.listen(3000, () => {
    console.log('Started Listening to Port 3000 in Localhost!');
});