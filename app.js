const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      passport = require('passport'),
      mongoose = require('mongoose'),
      config = require('./config/database');

var	app		= express();
var PORT = process.env.PORT || 3000;
var indexRoutes = require("./routes/indexRoutes");

// Connect To Database
mongoose.connect(config.database);
// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});
// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});


//CORS middleware
app.use(cors());
//body-parser middleware
app.use(bodyParser.json());
//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Set Static Folder
app.use(express.static('public'));
app.use(express.static('images'));



app.use(indexRoutes);
//Index route
app.get('/', function (req, res) {
  res.send('Hello World ahaha!')
})

//Start server
app.listen(PORT, function(){
	console.log("Sever has started at port "+PORT);
})
