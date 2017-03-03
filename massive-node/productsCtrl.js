var app = require('./index');
// var db = require('./server').db
// console.log(db);

module.exports = {
  create: function(req, res) {
    var db = app.get('db');

    var param = [
      req.body.name,
      req.body.description,
      req.body.price,
      req.body.imageurl
    ]
    db.create_product(param,function(err,product){
      console.log(err, 'Product Added');
    })
  },



}
