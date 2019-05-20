var fs = require('fs')
var contents = fs.readFile(process.argv[2], 'utf8', function callback(error,data){
 if (error) {
  return console.log(err)
 }
 var lines = data.toString().split('\n').length - 1
 console.log(lines)
})
