var dates = require("../data/friends");

// Routes
module.exports = function(app){
  app.get("/api/surveyRes", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    console.log(dates);
    res.json(dates);
  });  

  // Creates New Dates - takes in JSON input
  app.post("/api/surveyRes", function(req, res) {
      // req.body hosts is equal to the JSON post sent from the user
      // This works because of our body parsing middleware
      var newDate = req.body;
      console.log(newDate);
      dates.push(newDate);
      res.json(newDate);
    });
}

