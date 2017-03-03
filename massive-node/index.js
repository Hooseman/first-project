var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var port = 3000;

var conn = massive.connectSync({
  connectionString : "postgres://postgres:Perkinsfam12@localhost/massive_project"
});

app.use(bodyParser.json());
app.use(cors());

app.set('db', conn);

var productsCtrl = require('./productsCtrl')


var db = app.get('db')
exports.db = db;


app.post('/api/product', productsCtrl.create)

app.listen(port, function() {
  console.log("Started server on port", port);
});
