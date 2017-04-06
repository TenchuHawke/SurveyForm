// Load the express module (Where do you think this comes from?)
var express = require("express");
var path = require("path")
var PORT = 8000;
// invoke var express and store the resulting application in var app
var app = express();

// let's handle the base route "/" and respond with "Hello Express"
app.get('/', function(request, response) {
    response.send("<h1>Hello Express</h1>");
})

// Tell the express app to listen on port PORT
app.listen(PORT, function() {
        console.log(`listening on port ${PORT}`);
    })
    // this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)