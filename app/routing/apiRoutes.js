// import friends data
var friends = require("../data/friends.js");

var totalDifference = [];
var friendMatch = {};

// function to handle the compatibility logic
// loops through the question scores for each person in the friends dataset
// subtracts the difference between each question score and totals the absolute difference
// stores the total difference of each friend in an array
// finds the index of the minimum value in that array 
// pulls the coordinating index from the friends dataset 
function findFriend(newScoreArr) {
    for (var i = 0; i < friends.length; i++) {
        var friendScoreArr = friends[i].scores;
        var scoreDifference = 0;
        for (j = 0; j < friendScoreArr.length; j++) {
            var difference = Math.abs(parseInt(friendScoreArr[j], 10) - parseInt(newScoreArr[j], 10));
            scoreDifference += difference;
        }
        totalDifference.push(scoreDifference);
    }
    Array.min = function(array) {
        return Math.min.apply(Math, array);
    };
    var minValue = Array.min(totalDifference);
    var index = totalDifference.indexOf(minValue);
    friendMatch = friends[index];
};

//export routes 
module.exports = function(app) {

    // Search for friend data - provide JSON response
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    // This will be used to handle incoming survey results 
    // run the findFriend function to handle the compatibility logic
    // return the compatible friend and add the new user to the friends dataset
    app.post("/api/new", function(req, res) {
        var newFriend = req.body;
        findFriend(newFriend.scores);
        friends.push(newFriend);
        return res.json(friendMatch);
    });

};