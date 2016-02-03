/*
var express = require('express');
var router = express.Router();
var app = express();
*/
var app = ('../app.js');
/* GET home page. */
/*
app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
*/

app.get('/', function (req, res) {
    res.render('home', {
        title: 'Home'
    });
});

//module.exports = router;
