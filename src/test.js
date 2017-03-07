var express = require('express');
var app = express();

app.get('/routers', function(req, res) {

  //res.type('application/json');  
  res.send('[{"first": [{ "url": "/hello", "name": "hello" }, { "url": "/", "name": "home" }]}, {"second": [{ "url": "/hello", "name": "hello" }, { "url": "/", "name": "home" }]}, {"third": [{ "url": "/hello", "name": "hello" }, { "url": "/", "name": "home" }]}, {"fourth": []}]');
});

app.listen(8088, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log("success");

})