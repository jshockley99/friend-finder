// Search for friend data - provides JSON
app.get("/api/friends", function(req, res) {
    return res.json(friends);
});

// This will be used to handle incoming survey results 
// This route will also be used to handle the compatibility logic
app.post("/api/new", function(req, res) {

    var newfriend = req.body
        friends.push(newfriend);
    }
});
