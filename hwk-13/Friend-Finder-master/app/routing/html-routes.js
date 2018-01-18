//This node library is to deal with file system 
var path = require("path");

module.exports = function(app) {

//when the route hits "/survey", load survey.html
  app.get("/survey", function(request, response){
    response.sendFile(path.join(__dirname +"/../public/survey.html"));
  });

//default to home for a "/" route
  app.use(function(request, response){
    response.sendFile(path.join(__dirname + "/../public/home.html"));
  });

};
