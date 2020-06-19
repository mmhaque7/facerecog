var express = require("express");
var app = express();
var path = require("path");

var HTTP_PORT = process.env.PORT || 3000;

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function (req, res) {
  res.send("<a href='/public/index.html'/>");
});

// setup another route to listen on /about
app.use("/public", express.static("public"));

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);
