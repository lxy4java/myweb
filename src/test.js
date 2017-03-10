var express = require('express');
var app = express();

app.get('/navis', function(req, res) {

  //res.type('application/json');  
  res.send('[{"first": [{ "url": "/hello", "name": "hello" }, { "url": "/", "name": "home" }]}, {"second": [{ "url": "/hello", "name": "hello" }, { "url": "/", "name": "home" }]}, {"third": [{ "url": "/hello", "name": "hello" }, { "url": "/", "name": "home" }]}, {"fourth": []}]');
});

app.get('/routers', function(req, res) {

  res.type('application/json');  
  res.send("[{path: '/',component: Home}, {path: '/hello',component: Hello}]");
});

app.listen(8088, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log("success");

})