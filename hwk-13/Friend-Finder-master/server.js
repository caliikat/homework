// =====================
// NODE DEPENDENCIES
// =====================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// =====================
// EXPRESS APP CONFIGURATION
// =====================

// SERVER SETUP
const app = express();
const PORT = process.env.PORT || 3000;


// BODY PARSER TO DEAL WITH THE HTTP RETURNS AND REQUESTS
app.use(bodyParser.json()); // "Returns middleware that only parses json"
app.use(bodyParser.urlencoded({extended: true})); //"Returns middleware that only parses urlencoded bodies"
app.use(bodyParser.text()); // "Returns middleware that only parses text"
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static(path.join(__dirname, 'app/public')));


// EXTERNAL ROUTING 
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);


// FOR THE EXPRESS SERVICE
app.listen(PORT, function() {
  console.log("Express scanning on port " + PORT);
})
