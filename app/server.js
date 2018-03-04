// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var router = require("./routing/htmlRoutes.js");
var router= require("./routing/apiRoutes.js");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
//add the middleware libraries into the request handling chain
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Star Wars Characters(DATA)
// =============================================================
/*var friends = [
  {
    name: "Lisa Smith",
    image: "https://www.wpclipart.com/people/female/women_6/woman_avatar.png",
    scores: [1, 3, 4, 5, 2, 3, 2, 1, 4, 2]
  },
   {
    name: "Kaleb Tolson",
    image: "https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png",
    scores: [1, 2, 3, 5, 2, 1, 2, 5, 4, 2]
  },
  {
    name: "T'Challa Williams",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0K7_qlejBwjUSXCNAtqvYeKmzCCXEkxwmUvfy7udllUVGzU-l",
    scores: [4, 4, 4, 5, 2, 3, 2, 3, 4, 3]
  }
];*/

// Routes
// =============================================================
// Basic route that sends the user first to the AJAX Page

app.use(router);
//app.use(router2);

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "public/home.html"));
// });

// app.get("/survey", function(req, res) {
//   res.sendFile(path.join(__dirname, "public/survey.html"));
// });

// Create New Friends - takes in JSON input
// app.post("/api/friends", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body-parser middleware
//   var newFriend = req.body;
//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newFriend);

//   friends.push(newFriend);

//   res.json(newFriend);

// });

//Provides JSON for friends 
// app.get("/api/friends", function(req, res) {
  
//     for (var i = 0; i < friends.length; i++) {
//         return res.json(friends);
//       }
//         return res.json(friends);
// });

// //"catch all" catches routes not previously defined
// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "public/home.html"));
// });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

//module.exports = app;