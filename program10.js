var strftime = require('strftime')
var net = require('net')  

var server = net.createServer(function (socket) {  
 socket.end(strftime('%F %H:%M',new Date())+'\n') 
})  
server.listen(process.argv[2]) 
