var http = require('http')

http.get(process.argv[2], function(response){
 var r= response.setEncoding('utf8')
 r.on("data", function(data){
  console.log(data)
 })
})
