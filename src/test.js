var express = require('express');
var app = express();

var tabledata = { "title": ["name", "age", "gender"], "data": [["lxy", "28", "male"], ["大公", "666", "male"]] };

app.get('/navis', function (req, res) {

  //res.type('application/json');  
  res.send('[{"first": [{ "url": "/hello", "name": "hello" }, { "url": "/", "name": "home" }]}, {"second": [{ "url": "/hello", "name": "hello" }, { "url": "/", "name": "home" }]}, {"third": [{ "url": "/hello", "name": "hello" }, { "url": "/", "name": "home" }]}, {"fourth": []}]');
});

app.get('/routers', function (req, res) {

  //res.type('application/json');  
  res.send("[{ path: '/',component: Home}, {path: '/hello',component: Hello}]");
});

app.get('/table', function (req, res) {

  //res.type('application/json');  
  res.send(tabledata);
});

app.get('/delete', function (req, res) {
  var name = req.query.name;
  console.log(name);
  //res.type('application/json');
  var data = tabledata['data'];
  for (var i = 0; i < data.length; i++) {
      if(data[i][0]==name){
        tabledata['data'].splice(i,1);
      }
  }

  res.send(tabledata);
});

app.listen(8088, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log("success");

})