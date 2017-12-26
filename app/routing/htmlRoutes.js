//export routes to main server.js
module.exports = function(app) {

    //route that sends the user first to the root/home page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    });

    //route that sends the user to the survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "survey.html"));
    });

};