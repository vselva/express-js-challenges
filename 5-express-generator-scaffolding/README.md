Creating a Express App with express-generator:
==============================================

npm i express-generator -g

express my-app-name
or
express --view-hbs my-app-name
or
express --view-ejs my-app-name

my-app-name
    app.js
    package.json
    bin
        www
    public
        images
        javascripts
        stylesheets
    routes
        index.js
        users.js
    views
        error.hbs
        index.hbs
        layout.hbs

cd my-app-name
npm install 
npm start 
