var express = require('express'); //เรียก express ขึ้นมา
var app = express();
var fs = require("fs"); // อ่านไฟล์ user.json

app.get('/getUsers' , function (req, res) {
  fs.readFile( __dirname + "/" + "user.json" , 'utf8' , function (err, data) {
    console.log( data ); //ข้อมูลของ User ใน user.json
    res.end(data); //ส่งข้อมูลมาให้เราดูว่ามีอะไรบ้าง
  });
});

var server = app.listen(8081, function(){
  var host = server.address().address
  var port = server.address().port
  console.log("Applcation Run At http://%s:%s",host,port)
});
