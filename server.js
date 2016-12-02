var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
//var mongodb = require("mongodb");
//var ObjectID = mongodb.ObjectID;

var CONTACTS_COLLECTION = "contacts";

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
/*mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  
});*/

// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ "error": message });
}

app.get("/:nome/:insulto", function (req, res) {
  var msg = "Insulta in questo modo: /:nome/:insulto";
  if (req.params.nome && req.params.insulto) {
    msg = "Hai deciso di insultare " + req.params.nome + ", quindi:<br> " + "<h1>" + req.params.nome + " " + req.params.insulto + "!!!</h1>";
  }
  res.send(msg);
});

app.get("", function (req, res) {
  var msg = "Insulta in questo modo: /:nome/:insulto";

  res.send(msg);
});
app.get("/:nome", function (req, res) {
  var msg = "Dai ti manca solo l'insulto a " + req.params.nome;

  res.send(msg);
});

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});