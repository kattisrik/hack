var express = require('express');
var app = express();
const shots = {
"shots":[
{
"trailerContentId":"234ab~234cd~vod",
"like":90,
"dislike":0
},
{
"trailerContentId":"123ab~123cd~vod",
"like":57,
"dislike":10
},
{
"trailerContentId":"234ab~234cd~vod",
"like":54,
"dislike":9
},
{
"trailerContentId":"234ab~234cd~vod",
"like":6,
"dislike":4
},
{
"trailerContentId":"234ab~234cd~vod",
"like":5,
"dislike":25
}
]
};

// Routes
app.get('/shots/', function(req, res) {
  res.send(shots);
});

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);
