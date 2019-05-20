var bl = require('bl')
var http = require('http')
var a='a: ';
var b='b ';
var c='c ';

http.get(process.argv[2],function(response){
 response.pipe(bl(function (err, data) {
  if(err) return console.error(err)
  a=data.toString()
 }))
})
http.get(process.argv[3],function(response){
 response.pipe(bl(function (err, data) {
  if(err) return console.error(err)
  b=data.toString()
 }))
})
http.get(process.argv[4],function(response){
 response.pipe(bl(function (err, data) {
  if(err) return console.error(err)
  c=data.toString()
  console.log(a)
  console.log(b)
  console.log(c)
 }))
})
