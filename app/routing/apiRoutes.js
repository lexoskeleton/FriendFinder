var friendData = require("../data/friends");
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        var newFriendScore = newFriend.scores.map(function (i) {
            return parseInt(i);
        });
        //var results = [];
        //var match = 0;
        var bestFriend;
        var bestFriendTotal = 1000;



        for (var i = 0; i < friendData.length; i++) {
            var currentFriendScore = friendData[i].scores;

            var difference = 0;

            for (var j = 0; j < currentFriendScore.length; j++) {
                difference += (Math.abs(newFriendScore[j]) - parseInt(currentFriendScore[j])
                );
            }
            // results.push(difference);
            if (difference < bestFriendTotal) {
                bestFriendTotal = difference;
                bestFriend = friendData[i];
            }

        }
        // console.log(results);

       


        friendData.push(newFriend);
        res.json(bestFriend);

    });
}