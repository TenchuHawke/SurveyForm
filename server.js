// Load the express module (Where do you think this comes from?)
var express = require("express");
// require path for filename normaliziation.
var path = require("path");
// require body-parser
var bodyParser = require('body-parser');

//enable if you want to use Session (Make sure you install express-session):
// var session = require('express-session');

var PORT = 8000;

// invoke var express and store the resulting application in var app
var app = express();

//also enable if you want to use Session:
// app.use(session({secret: 'codingdojorocks'}));  // string for encryption

// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(path.join(__dirname, "./static"))); // two underscores before dirname,
// this sets up the views path for EJS files.
app.set('views', path.join(__dirname, './static/views'));

// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// Middleware to convert POST data to JSON (req.body...)
app.use(bodyParser.urlencoded({ extended: true }));

// ********* Begin Controllers ***************

app.get('/', function(request, response) {
    response.render('main');
})

app.get("/users", function(request, response) {
    // hard-coded user data
    var users_array = [
        { name: "Michael", email: "michael@codingdojo.com" },
        { name: "Jay", email: "jay@codingdojo.com" },
        { name: "Brendan", email: "brendan@codingdojo.com" },
        { name: "Andrew", email: "andrew@codingdojo.com" }
    ];
    response.render('index', { users: users_array });
})

app.post("/users", function(request, response) {
        console.log("POST DATA \n\n", request.body);
        response.redirect("/");
    })
    // ******** End Controllers *****************

// Tell the express app to listen on port PORT
app.listen(PORT, function() {
        console.log(`listening on port ${PORT}`);
    })
    // this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)