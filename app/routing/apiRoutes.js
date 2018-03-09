var express = require("express");
var path = require("path");
var router2 = express.Router();
var Friend = require("../data/friend.js");





 router2.get("/api/friends", function(req, res) {
    res.json(friends);
  });



// Create New Friends - takes in JSON input
router2.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newFriend = req.body;
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriend);

  friends.push(newFriend);

  res.json(newFriend);

});


module.exports = router2;