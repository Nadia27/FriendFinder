var express = require("express");
var path = require("path");
var router = express.Router();



var friends = [
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
];



//Provides JSON for friends 
router.get("/api/friends", function(req, res) {
  
    for (var i = 0; i < friends.length; i++) {
        return res.json(friends);
      }
        return res.json(friends);
});

// Create New Friends - takes in JSON input
router.post("/api/friends", function(req, res) {
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


module.exports = router;