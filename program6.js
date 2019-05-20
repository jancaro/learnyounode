var fs = require('fs')
var path = require('path')
var array=[]

module.exports = function lista(ruta, ext, callback) {  
 fs.readdir(ruta,function (err, data) {  
  if (err) return callback(err)
  for(var i=0; i<data.length; i++){
   if (path.extname(data[i]) === '.'+ext) {
    array[i]=data[i]
   }
  }  
  callback(null, array)  
  })  
}

