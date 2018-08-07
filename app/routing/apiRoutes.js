var friendData = require("../data/friends");
module.exports =function (app){
app.get("/api/friends", function(req, res) {
    res.json(friendData);
});

app.post("/api/friends", function(req, res){
    var newFriend = req.body;
    friendData.push(newFriend);
    console.log(newFriend);
    console.log(friendData);
    //we have to figure out how to return the scores as integers rather than strings
    //why is VOLDEMORT's returning as integers but the others are not???
    //how do we make this happen????? if not parseInt then what?
    var integers= parseInt(newFriend.scores);
    console.log(integers);

});
}