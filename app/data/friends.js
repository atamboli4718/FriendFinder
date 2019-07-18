/*
10 Questions:
1-5, 1 strongly disagree & 5 strongly agree
- You'll find me home enjoying the quiet on the weekends.
- I believe in love at first sight.
- Working out is an important part of my routine.
- I prefer being in the outdoors for my leisure activities.
- I love to sleep in the weekends.
- My work is a very important part of my life.
- Music helps me to relax.
- I prefer making a homecooked meal to going out.
- When I go out, I am the life of the party.
- I prefer going to tried and true vacation locations over risking it on a new place.
*/


var express = require("express");
var path = require("path");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var dates = [
    {
    "name":"Amber",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
        ]
    }
  ];

// Routes

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/', "home.html"));
  });

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/', "survey.html"));
  });

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


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening");
});

 
var matchIndex=0;
var matchScore;

function compare (){
    var diffVar;
    for (var i=0;i<dates.length; i++){
        console.log('in1: ' + i);
        diffVar=0;
        console.log("dates[i].scores = "+dates[i].scores)
        for(var j=0;j<dates[i].scores.length; j++){
            console.log("in2: " + j);
            var tempDif=Math.abs(dates[i].scores[j]-newDate.scores[j]);
            diffVar=diffVar+tempDif
            console.log("diffVar:" + diffVar);
        }
        if(i==0){
            matchScore=diffVar;
            console.log("matchScore: "+matchScore);
            console.log("matchIndex: "+matchIndex);
        }else if (diffVar<matchScore){
            matchScore=diffVar;
            matchIndex=i;
            console.log("matchScore: "+ matchScore);
            console.log("matchIndex: "+matchIndex);
        }
    }
    console.log("Final matchScore: "+ matchScore);
    console.log("Final matchIndex: "+matchIndex);
}

