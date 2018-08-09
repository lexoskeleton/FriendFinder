var friendData = require("../data/friends");
module.exports =function (app){
app.get("/api/friends", function(req, res) {
    res.json(friendData);
});

app.post("/api/friends", function(req, res){
    var newFriend = req.body.scores;
    var results = [];
    var match = 0;


    for (var i = 0; i < friendData.length; i++) {
        var difference = 0;
        
        for (var j = 0; j < newFriend.length; j++) {
            console.log(friendData[i].scores[j]);
            difference += (Math.abs(parseInt(friendData[i].scores[j]) - parseInt(newFriend[j]))
        );
    }
    results.push(difference);

    }
    console.log(results);

    for (var i = 0; i < results.length; i++){
        console.log(results[i]);

        if (results[i] <= results[match]) {
            match = i;
            console.log(match);
        }
    }

    friendData.push(req.body);

});
}