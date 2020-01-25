const express = require('express');
const path = require('path');
const router = express.Router();
//var mysql = require('mysql'); 
var fs = require('fs');
var https = require('https');
var options = {
  key: fs.readFileSync('sslcert/server.key'),
  cert: fs.readFileSync('sslcert/server.cert')
};
//setting up the database
/*var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"picolo"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
*/
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

/*router.get('/start_worker',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));

  let worker=new Worker('service_worker.js');
  let url=req.url;
  let width=req.width;
  let height=req.height;



});*/
router.get('/login',function(req,res){
  let name=req.name;
	let password=req.password;
  res.send(name+" "+password);
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});


var app = express();
//add the router
app.use('/', router);

https.createServer(options, app).listen(3000);
console.log('Running at Port 3000');
