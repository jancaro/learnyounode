var http = require('http')
var map = require('through2-map')
var url = require('url')


var server = http.createServer(function(req, res){
 res.writeHead(200, { 'Content-Type': 'application/json' });
var fecha = new Date(url.parse(req.url, true).query.iso) 
if(url.parse(req.url, true).pathname.toString().startsWith('/api/parsetime')==true && req.method == 'GET'){
  
  res.write('{\"hour\": '+fecha.getHours()+',\"minute\": '+fecha.getMinutes()+',\"second\": '+fecha.getSeconds()+'}')
  res.end()
 }
 if(url.parse(req.url, true).pathname.toString().startsWith('/api/unixtime')==true && req.method == 'GET'){
  res.write('{\"unixtime\": '+fecha.getTime()+'}')
  res.end()
 }
 res.end()
})
    
server.listen(process.argv[2])
