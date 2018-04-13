  // Dependencies
  // =============================================================
  var express = require("express");
  var bodyParser = require("body-parser");
  var path = require("path");
  var router = require("./routing/htmlRoutes.js");
  var router2 = require("./routing/apiRoutes.js");
  // Sets up the Express App
  // =============================================================
  var app = express();
  var PORT = 3000;

  // Sets up the Express app to handle data parsing
  //add the middleware libraries into the request handling chain
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  app.use(router);
  app.use(router2);

  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });