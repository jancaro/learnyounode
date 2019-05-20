var http = require('http')
var bl = require('bl')
var fs = require('fs')

var server=http.createServer(function(request, response){
 str=fs.createReadStream(process.argv[3])
 str.pipe(response)
})

server.listen(process.argv[2])
