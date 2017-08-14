const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      passport = require('passport'),
      mongoose = require('mongoose'),
      config = require('./config/database'),
      nodemailer = require('nodemailer');


// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'lephan031994@gmail.com',
//     pass: 'lephan1994'
//   }
// });

// var mailOptions = {
//   from: 'lephan031994@gmail.com',
//   to: 'garciacy1@gmail.com ',
//   subject: 'Pontes Network Test sending Email using Node.js',
//   html:  {path: './views/mailer.html'}
// }

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

var	app		= express();
var PORT = process.env.PORT || 3000;
var indexRoutes = require("./routes/indexRoutes");
var contactMessage = require("./routes/contact_message");
var letter = require("./routes/letter");
var user = require("./routes/user");

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
app.use(bodyParser.urlencoded({ extended: true }));
//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('images'));


app.use(indexRoutes);
app.use(contactMessage);
app.use(letter);
app.use(user);

//When the users request to any route, we will pass the controler to our Agular app
app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})


//Start server
app.listen(PORT, function(){
	console.log("Sever has started at port "+PORT);
})
