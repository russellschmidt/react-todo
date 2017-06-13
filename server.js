var express = require('express');  // takes string name of module as argument

// create our app
var app = express();
const PORT = process.env.PORT || 3000;

// make a fix for open weather map. We need to adjust https traffic to http
app.use( function (req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

// tell it what folder to serve. app.use add functionality
// express.static(folder) is the folder we are exposing
app.use(express.static('public'));

// start the server. takes 2 arguments, port and a function called on start
app.listen(PORT, function(){
  console.log('Express server is up on port ' + PORT);
});
