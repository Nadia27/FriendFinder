var express = require('express');
var path = require('path');
var router2 = express.Router();
var friends = require('../data/friend.js');

//=====================================================

//Route to display all JSON
router2.get('/api/friends', function(req, res) {
    res.json(friends);
});

//======================================================

// Create New Friends - takes in JSON input
//handle incoming survey results
// Sets the post for the api/friends route
router2.post('/api/friends', function(req, res) {
    // Set variables only needed for the post
    var difference = 40;
    var matchName = '';
    var matchPhoto = '';

    // For each friend, loop to go through the data in friends.js to find a match
    friends.forEach(function(friend) {
        // Variables for comparing matches
        var matchedScoresArray = [];
        var totalDifference = 40;

        // Function to assist in the addition reduce() below
        function add(total, num) {
            return total + num;
        }

        // Create a loop that loops through each item of the scores arrays from both the stored data and the new user,
        //and then substracts the absolutes,
        //and then pushes the new value to the matchedScoresArray
        for (var i = 0; i < friend.scores.length; i++) {
            matchedScoresArray.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friend.scores[i])));
        }

        // Reduce the matchScoresArray single value
        totalDifference = matchedScoresArray.reduce(add, 0);
        console.log(totalDifference);

        // If the above value is smaller than the previous difference
        if (totalDifference < difference) {
            // Set it the previous difference
            difference = totalDifference;
            // Use the variables to set the appropriate friend match
            matchName = friend.name;
            matchPhoto = friend.image;
            console.log(matchName);
            console.log(matchPhoto);
        }
    });
    // closest match will be the user with the least amount of difference
    res.json({
        name: matchName,
        image: matchPhoto
    });

    // Add the new user's sent data object to friends.js
    friends.push(req.body);
});

module.exports = router2;
