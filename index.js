var express = require('express');

var app = express();

var bodyparser = require('body-parser');

//set up body parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

//mongoDB connection using mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jobListings');

//set up routes
var technologyJobsRoute = require('./routes/techJobsRoute.js')(express);

//***************************************

//**********************************************

app.use('/techJobs', technologyJobsRoute);

app.get('/', function (req, res) { 
    res.json({ info: "Welcome to jobs portal API" });
});

var port = 3000;

app.listen(port, function () {
    console.log('Server started and is listening on port ' + port);
});

