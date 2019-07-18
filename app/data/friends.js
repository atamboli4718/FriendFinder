// Dependencies
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
    "name":"Seth Rogen",
    "photo":"https://www.thewrap.com/wp-content/uploads/2016/04/Seth-Rogen-Pineapple-Express.jpg",
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
    },
    {
    "name":"Chris Farley",
    "photo":"https://milwaukeerecord.com/wp-content/uploads/2018/01/TommyBoyScreening.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        5,
        5,
        5,
        5,
        5
        ]
    },
    {
    "name":"Aziz Ansari",
    "photo":"https://cimg.tvgcdn.net/i/r/2019/07/09/d2fe2aa3-c777-45f3-90ce-ec1b372adf82/resize/1800x1200/1afcdc8c77ffeb734d7f30213b5e4f01/aziz-ansari-reg.jpg",
    "scores":[
        5,
        1,
        1,
        1,
        1,
        1,
        2,
        3,
        4,
        5
        ]
    },
    {
    "name":"Amy Schumer",
    "photo":"https://img.thedailybeast.com/image/upload/v1552695641/190317-fallon-AmySchumer-Growing-embed-2_zrgfes.jpg",
    "scores":[
        1,
        2,
        3,
        4,
        5,
        5,
        4,
        3,
        2,
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

