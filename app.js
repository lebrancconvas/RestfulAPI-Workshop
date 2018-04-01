var express = require('express'); //เรียก express ขึ้นมา
var app = express();
var fs = require("fs"); // อ่านไฟล์ user.json

app.get('/getUsers' , function (req, res) {
  fs.readFile( __dirname + "/" + "user.json" , 'utf8' , function (err, data) {
    console.log( data ); //ข้อมูลของ User ใน user.json
    res.end(data); //ส่งข้อมูลมาให้เราดูว่ามีอะไรบ้าง
  });
});

app.get('/getUsers/:id', function (req, res) {
  fs.readFile(__dirname + "/" + "user.json" , 'utf8' , function (err, data){
    var users = JSON.parse(data); //แปลงข้อมูลให้เป็นก้อน User ทั้งหมด
    var user = users["user" + req.params.id] //เพิ่มเงื่อนไข โดย req.params.id คือเลข id จาก user.json
    console.log(user);
    res.end(JSON.stringify(user)); //ส่งข้อมูลกลับมาแสดงในรูป String
  });
});

var server = app.listen(8081, function(){
  var host = server.address().address
  var port = server.address().port
  console.log("Applcation Run At http://%s:%s",host,port)
});
